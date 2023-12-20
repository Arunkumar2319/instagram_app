import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    postsList: [],
    favouritePostList: []
}

const postListSlice = createSlice({
    name: 'postsList',
    initialState,
    reducers: {
        setPostsList: (state, {payload }) => {
            state.postsList = payload
        },
        setFavouritePosts: (state, {payload}) => {
            if(state.favouritePostList.length === 0){
                state.favouritePostList.push(payload)
            }
            else{
                state.favouritePostList = [...state.favouritePostList, payload]
            }
        }
    }
})

export const { setPostsList, setFavouritePosts } = postListSlice.actions;

export default postListSlice.reducer;
