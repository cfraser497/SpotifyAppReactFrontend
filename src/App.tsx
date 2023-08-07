import axios from "axios";
import { useState } from "react";
import SearchIcon from "./assets/search.svg";
import "./App.css";
import { extractPlaylistId } from "./utils";
import FilterSongs from "./components/songFilter/FilterSongs";
import RecommendedSongs from "./components/recommendedList/RecommendedSongs"
import { ClipLoader } from "react-spinners";
import AllTracksBox from "./components/allTracksBox/AllTracksBox";

function App() {
  const [playlistLink, setPlaylistLink] = useState("");
  const [tracks, setTracks] = useState([]);
  const [filterKeyValue, setFilterKeyValue] = useState("-1");
  const [filterModeValue, setFilterModeValue] = useState("-1");
  const [filterMinTempo, setFilterMinTempo] = useState("");
  const [filterMaxTempo, setFilterMaxTempo] = useState("");
  const [loading, setLoading] = useState(false);

  const getSongs = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    setLoading(true);
    await axios
      // .post("http://localhost:8080/", {
      .post("https://spotify-playlist-tempo-and-key.uw.r.appspot.com/", {
        playlistId: extractPlaylistId(playlistLink),
      })
      .then((res) => {
        setTracks(res.data.tracks);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  function onFilterModeValueSelected(filterModeValue: string) {
    setFilterModeValue(filterModeValue);
  }

  function onFilterValueSelected(filterKeyValue: string) {
    setFilterKeyValue(filterKeyValue);
  }

  function onFilterMinTempoSelected(filterMinTempoValue: string) {
    setFilterMinTempo(filterMinTempoValue);
  }

  function onFilterMaxTempoSelected(filterMaxTempoValue: string) {
    setFilterMaxTempo(filterMaxTempoValue);
  }

  let filteredTracks = tracks.filter((track) => {
    switch (filterKeyValue) {
      case "-1":
        return true;
      case "0":
        return track.key === 0;
      case "1":
        return track.key === 1;
      case "2":
        return track.key === 2;
      case "3":
        return track.key === 3;
      case "4":
        return track.key === 4;
      case "5":
        return track.key === 5;
      case "6":
        return track.key === 6;
      case "7":
        return track.key === 7;
      case "8":
        return track.key === 8;
      case "9":
        return track.key === 9;
      case "10":
        return track.key === 10;
      case "11":
        return track.key === 11;
    }
    return false;
  }).filter((track) => {
    switch(filterModeValue) {
      case "-1":
        return true;
      case "0":
        return track.mode === 0;
      case "1":
        return track.mode === 1;
    }
    return false;
  }).filter((track) => {
    return filterMinTempo == "" || track.tempo >= filterMinTempo;
  }).filter((track) => {
    return filterMaxTempo == "" || track.tempo <= filterMaxTempo;
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
        {!loading ?
          <img src={SearchIcon} alt="search" onClick={getSongs} /> :
          <ClipLoader color={"#D88769"} loading={loading}/>
        }
      </div>
      <FilterSongs 
        filterKeyValueSelected={onFilterValueSelected} 
        filterModeValueSelected={onFilterModeValueSelected} 
        filterMinTempoSelected={onFilterMinTempoSelected}
        filterMaxTempoSelected={onFilterMaxTempoSelected}
      >
      </FilterSongs>
      <div className="trackBox">
        <RecommendedSongs filteredTracks = {filteredTracks} />
        <AllTracksBox filteredTracks = {filteredTracks} />
      </div>
    </div>
  );
}

export default App;
