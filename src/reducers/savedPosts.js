import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    savedPosts: []
}

const savedPostSlice = createSlice({
    name: 'savedPosts',
    initialState,
    reducers: {
        setSavedPosts: (state, {payload}) => {
            if(state.savedPosts.length === 0){
                state.savedPosts.push(payload)
            }
            else{
                state.savedPosts = [...state.savedPosts, payload]
            }
        }
    }
})

export const { setSavedPosts } = savedPostSlice.actions;

export default savedPostSlice.reducer;