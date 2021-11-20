import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import key, { api } from "../_const";
import axios from "axios";
import IBookPreview from "../types/bookPreview";
import IFetchParams from "../types/fetchParams";

interface IBookState {
  name: string;
  field: string;
  priority: string;
  total: number;
  loading: boolean;
  books: IBookPreview[] | [];
  errorMsg: string | null;
}

const initState: IBookState = {
  name: "",
  field: "all",
  priority: "relevance",
  total: 0,
  loading: false,
  books: [],
  errorMsg: null,
};

export const fetchBooks = createAsyncThunk(
  "bookSlice/getInit",
  async function (params: IFetchParams, { rejectWithValue}) {
    const { title, field, priority } = params;
    try {
      const response = await axios.get(
        `${api}/volumes?q=${title}&maxResults=30&orderBy=${priority}&subject=${field}:${key}`
      );
      const res = await response

      return {
        books: res.data.items,
        total: res.data.totalItems,
        name: title,
        field,
        priority,
        errorMsg: null,
        loading: false,
      };
    } catch (e) {
      return rejectWithValue("Не удалось загрузить книги");
    }
  }
);
export const fetchMoreBooks = createAsyncThunk(
  "bookSlice/getMore",
  async function (_, { rejectWithValue, getState }) {
    const state = getState() as any;
    const { name, field, priority, total, books } = state.books as IBookState;
    const index = books.length;

    if (index >= total) {
      return null;
    }
    try {
      const response = axios.get(
        `${api}/volumes?q=${name}&startIndex=${index}&maxResults=30&orderBy=${priority}&subject=${field}:${key}`
      );
      const res = await response;
      return res.data.items;
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

const bookSlice = createSlice({
  name: "bookSlice",
  initialState: initState,
  reducers: {},
  extraReducers: {
    [fetchBooks.pending.type]: (state) => {
      state.loading = true;
      state.errorMsg = null;
    },
    [fetchBooks.rejected.type]: (
      state: IBookState,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.errorMsg = action.payload;
    },
    [fetchBooks.fulfilled.type]: (state, action) => {
      const { name, field, priority, books, total, loading, errorMsg } =
        action.payload;
      state.name = name;
      state.field = field;
      state.priority = priority;
      state.books = books;
      state.total = total;
      state.loading = loading;
      state.errorMsg = errorMsg;
    },
    [fetchMoreBooks.pending.type]: (state) => {
      state.loading = true;
    },
    [fetchMoreBooks.rejected.type]: (
      state: IBookState,
      action: PayloadAction<string>
    ) => {
      state.loading = false;
      state.errorMsg = action.payload;
    },
    [fetchMoreBooks.fulfilled.type]: (state, action) => {
      state.loading = false;
      if (action.payload) {
        state.books = [...state.books, ...action.payload];
      }
    },
  },
});

export default bookSlice.reducer;
