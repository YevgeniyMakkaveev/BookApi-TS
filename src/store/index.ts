import { configureStore } from "@reduxjs/toolkit";
import BookSlice from "./BooksSlice";
import SingleBookSlice from "./SingleBookSlicer"; 

export default configureStore({
   reducer: { books: BookSlice, singleBook: SingleBookSlice },
});