import { createSlice, createAsyncThunk,PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";
import key, { api } from "../_const";
import ISingleBookState from "../types/singleBookState";


interface IParam {
  id: string;
}

const initState: ISingleBookState = {
  data: null,
  id: null,
  loading: false,
  errorMsg: null,
};
export const fetchSingleBook = createAsyncThunk(
  "SinglBookSlice/get",
  async function (params: IParam, { rejectWithValue }) {
    const { id } = params;
    try {
      const res = await axios.get(`${api}/volumes/${id}?${key}`);
      console.log(res)

      return {
        book: res.data.volumeInfo,
        id: res.data.id
      };
    } catch (e) {
      return rejectWithValue("Не удалось загрузить книгу");
    }
  }
);

const SingleBookSlice = createSlice({
  name: "SinglBookSlice",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [fetchSingleBook.pending.type]: (state) => {
      state.data=null
      state.loading = true;
      state.errorMsg = null;
    },
    [fetchSingleBook.rejected.type]: (state,action:PayloadAction<string>) => {
      state.loading = false;
      state.errorMsg = action.payload;
    },
    [fetchSingleBook.fulfilled.type]: (state,action) => {
      state.loading = false;
      state.errorMsg = null;
      state.data=action.payload.book;
      state.id=action.payload.id
    },
  },
});
export default SingleBookSlice.reducer
