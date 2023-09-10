import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
export const movieSlice = createSlice({
    name: 'movie',
    initialState: [],
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            state.length = 0;
        });
    },
    reducers: {
        createMovie(state, action){
            state.push(action.payload);
        },
        removeMovie(state, action){
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        },
        // resetMovie(state,action){
        //     state.length=0;
        // }
    }
});