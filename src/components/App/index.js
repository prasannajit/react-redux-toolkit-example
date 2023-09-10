import React from "react";
import MovieList from "../MovieList";
import SongList from "../SongList";
import { useDispatch } from "react-redux";
// import { SongActions } from "../../store";
// import { MovieActions } from "../../store";
import { reset } from "../../store";
const App = ()=>{
    const dispatch = useDispatch();
    // const {resetMovie} = MovieActions;
    // const {resetSong} = SongActions;

    const handleButtonClick = (e)=>{
        //dispatch(resetMovie());
        //dispatch(resetSong());
        dispatch(reset());
    };
    return (
        <>
            <header>
                <h1>Movie and Song Application</h1>
            </header>
            <section>
                <article>
                    <button onClick={handleButtonClick}>Reset Playlists</button>
                </article>
            </section>
            <section>
                <article>
                    <MovieList/>
                </article>
                <article>
                    <SongList/>
                </article>
            </section>
            <footer>
                <a href="">Contact us</a>
            </footer>
        </>
    )
};

export default App;