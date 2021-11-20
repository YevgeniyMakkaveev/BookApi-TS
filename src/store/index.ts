import { configureStore } from "@reduxjs/toolkit";
import BookSlicer from "./BookSlicer";

export default configureStore({
  reducer: { books: BookSlicer},
});