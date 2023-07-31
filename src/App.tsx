import axios from "axios";
import { useState } from "react";
import SearchIcon from "./assets/search.svg";
import './App.css';
import { extractPlaylistId } from "./utils";
import Track from "./components/Track";

function App() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [tracks, setTracks] = useState([]);

  const getSongs = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    await axios
      .post("http://localhost:3000/", {
        playlistId: extractPlaylistId(playlistLink),
      })
      .then((res) => {
        setTracks(res.data.tracks);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="app">
      <h1>Spotify Playlist Tempo and Key Finder</h1>
      <div className="search">
        <input
          value={playlistLink}
          placeholder="eg. https://open.spotify.com/playlist/2tLLUTRINF4zBnkDBXuisf"
          onChange={(e) => setPlaylistLink(e.target.value)}
        />
        <img src={SearchIcon} alt="search" onClick={getSongs} />
      </div>
      <ul id="songlist">
          {tracks.map((track) => (<Track track = {track} />))}
      </ul>
    </div>
  );
}

export default App;
