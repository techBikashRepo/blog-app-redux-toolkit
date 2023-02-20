import { configureStore } from "@reduxjs/toolkit";
import blogsSlice from "../features/blogs/blogsSlice";

export const store = configureStore({
  reducer: {
    blogs: blogsSlice,
  },
});
