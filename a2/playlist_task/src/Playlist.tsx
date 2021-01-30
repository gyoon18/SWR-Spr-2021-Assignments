import React, { useState, ChangeEvent } from "react";
import Song from "./Song";

const Playlist = () => {
    const [songs, setSongs] = 
        useState<{title: string; artist: string }[]>([]);

    const addSong = () => {
        const info: {title: string; artist: string} = {title, artist};
        setSongs([...songs, info]);
        initTitle(""); initArtist("");
    };

    //artist and title
    const [title, initTitle] = useState<string>("");
    const inputTitle =
        (change: ChangeEvent<HTMLInputElement>) => {
            initTitle(change.currentTarget.value);
    };

    const [artist, initArtist] = useState<string>('');
    const inputArtist = (change: ChangeEvent<HTMLInputElement>) => {
        initArtist(change.currentTarget.value);
    };

    return (
        <div>
            <h1>Your Playlist</h1>
            {songs.map( (song, i) => {
                return (
                    <Song info={song}/>
                );
            }
        )
    }
        {/* // song */}
        <div>
            <label>Title of song: </label>
                <input 
                    type="text" 
                    value={title}
                    onChange={inputTitle}/>
        </div>
        {/* // artist */}
        <div>
            <label>Artist: </label>
                <input 
                    type="text" 
                    value={artist}
                    onChange={inputArtist}/>
            </div>

            <button onClick={addSong}>Add a song to your playlist!</button>
        </div>
    );
};

export default Playlist;