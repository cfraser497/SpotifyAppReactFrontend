import axios from "axios";
import { useState } from "react";
import SearchIcon from "./assets/search.svg";
import './App.css';
import { extractPlaylistId } from "./utils";
import Track from "./components/songList/Track";
import FilterSongs from "./components/songFilter/FilterSongs";

function App() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [tracks, setTracks] = useState([]);
  const [filterValue, setFilterValue] = useState("-1");

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

  function onFilterValueSelected(filterValue: string) {
    setFilterValue(filterValue);
  }

  let filteredTracks = tracks.filter((track) => {
    switch(filterValue) {
      case "-1": return true;
      case "0": return track.key === 0;
      case "1": return track.key === 1;
      case "2": return track.key === 2;
      case "3": return track.key === 3;
      case "4": return track.key === 4;
      case "5": return track.key === 5;
      case "6": return track.key === 6;
      case "7": return track.key === 7;
      case "8": return track.key === 8;
      case "9": return track.key === 9;
      case "10": return track.key === 10;
      case "11": return track.key === 11;
    }
    return false;
  })

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
      <FilterSongs filterValueSelected={onFilterValueSelected}></FilterSongs>
      <ul id="songlist">
          {filteredTracks.map((track) => (<Track track = {track} />))}
      </ul>
    </div>
  );
}

export default App;
