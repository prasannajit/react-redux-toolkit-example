import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../actions";
export const songSlice = createSlice({
    name: 'song',
    initialState: [],
    extraReducers(builder){
        builder.addCase(reset,(state,action)=>{
            state.length = 0;
        });
    },
    // extraReducers: (builder)=>{
    //     builder.addCase(/*'movie/resetMovie'*/movieSlice.actions.resetMovie,(state,action)=>{
    //         state.length=0;
    //     })
    // },
    reducers: {
        addSong(state,action){
            state.push(action.payload);
        },
        removeSong(state,action){
            const index = state.indexOf(action.payload);
            state.splice(index,1);
        },
        // resetSong(state,action){
        //     state.length=0;
        // }
    }
});