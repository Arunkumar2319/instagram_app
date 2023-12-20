import { configureStore } from "@reduxjs/toolkit";
import postSlice from "./reducers/postSlice";
import savedPosts from "./reducers/savedPosts";

export const Store = configureStore({
    reducer: {
        postsList: postSlice,
        savedPosts: savedPosts
    }
})