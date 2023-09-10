import { configureStore } from "@reduxjs/toolkit";
import { songSlice, movieSlice } from "./slices";
import {reset} from './actions';
const store = configureStore({
    reducer: {
        songs: songSlice.reducer,
        movies: movieSlice.reducer,
    }
});
const {addSong,removeSong} = songSlice.actions;
const {createMovie, removeMovie} = movieSlice.actions;
export {addSong,removeSong,createMovie,removeMovie,reset};
export default store;