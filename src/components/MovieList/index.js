import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMovie, removeMovie} from "../../store";

const MovieList = ()=>{
    const dispatch = useDispatch();

    const moviePlayList = useSelector((state)=>{
        return state.movies;
    });
    const handleRemoveButtonClick = (movie)=>{
        dispatch(removeMovie(movie));
    };
    const renderMovies = (movies)=>{
        return movies.map((movie, index)=>{
            return (
                <li key={index}>
                    <p>{movie}</p>
                    <button onClick={(e)=>{handleRemoveButtonClick(movie)}}>Remove</button>
                </li>
            )
        });
    };
    const [movie, setMovie] = useState('');
    const handleChange = (e)=>{
        setMovie(e.target.value);
    };
    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(createMovie(movie));
        setMovie('');
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={movie} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
            <ul>
                {renderMovies(moviePlayList)}
            </ul>
        </>
    )
};

export default MovieList;