import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeSong, addSong } from "../../store";

const SongList = ()=>{
    const dispatch = useDispatch();
    const songPlayList = useSelector((state)=>{
        return state.songs;
    });
    const handleRemoveButtonClick = (song)=>{
        dispatch(removeSong(song));
    };
    const renderSongs = (songs)=>{
        return songs.map((song, index)=>{
            return (
                <li key={index}>
                    <p>{song}</p>
                    <button onClick={(e)=>{handleRemoveButtonClick(song)}}>Remove</button>
                </li>
            )
        });
    };
    const [song, setSong] = useState('');
    
    const handleChange = (e)=>{
        setSong(e.target.value);
    };

    const handleSubmit = (e)=>{
        e.preventDefault();
        dispatch(addSong(song));
        setSong('');
    };
    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" value={song} onChange={handleChange}></input>
                <button>Submit</button>
            </form>
            <ul>
                {renderSongs(songPlayList)}
            </ul>
        </>
    )
};

export default SongList;