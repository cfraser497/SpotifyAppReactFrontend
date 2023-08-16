import RecommendedPair from "./RecommendedPair";
import "./RecommendedSongs.css";

const maxScore = 100;
const keyWeight = 3;
const tempoWeight = 1;
const genreWeight = 5;
const defaultGenres = 3;
//const sameArtistPenalty = 0.8;
const tempoDiff = 4;
const keyDiff = 1;

function RecommendedSongs(props: any) {
  //returns the number of common genres between two ARTISTS (spotify API doesnt have genre information on songs)
  function calculateGenreScore(track1, track2): number {
    const track1Genres = track1.genres;
    const track2Genres = track2.genres;
    const genreMaxScore =
      genreWeight *
      Math.max(
        defaultGenres,
        Math.min(track1Genres.length, track2Genres.length)
      );

    const initialScore =
      genreWeight *
      track1Genres.filter((genre) => track2Genres.includes(genre)).length;

    // const track1Artist = track1.artists.split(",")[0]
    // const track2Artist = track2.artists.split(",")[0]
    //penantly if songs are by same artist as all genres will allign perfectly
    // if (track1Artist == track2Artist) {
    //   return genreMaxScore - Math.min(genreMaxScore, Math.floor(sameArtistPenalty * initialScore));
    // }
    return genreMaxScore - Math.min(genreMaxScore, initialScore);
  }

  function calculateScore(
    track1: { name: string; tempo: number; key: number; genres: string[] },
    track2: { name: string; tempo: number; key: number; genres: string[] }
  ): number {
    const tempoScore = tempoWeight * Math.abs(track1.tempo - track2.tempo);
    const keyScore = keyWeight * Math.abs(track1.key - track2.key);
    const genreScore = calculateGenreScore(track1, track2);
    // console.log(track1.name + " " + track1.genres + "\n" + track2.name + " " + track2.genres + ": " + (maxScore - tempoScore - keyScore - genreScore));
    return maxScore - tempoScore - keyScore - genreScore;
  }

  function createRecommendations(filteredTracks: any[], checkedTrack: any) {
    const recommendations = [];

    if (checkedTrack == "") {
      //compare every track to every other track
      for (let i = 0; i < filteredTracks.length - 1; i++) {
        for (let j = i + 1; j < filteredTracks.length; j++) {
          let track1 = filteredTracks[i];
          let track2 = filteredTracks[j];
          if (
            Math.abs(track1.key - track2.key) <= keyDiff &&
            Math.abs(track1.tempo - track2.tempo) <= tempoDiff &&
            track1.mode == track2.mode
          ) {
            let score = calculateScore(track1, track2);
            recommendations.push({
              track1: track1,
              track2: track2,
              score: score,
            });
          }
        }
      }
    } else {
        for (let i = 0; i < filteredTracks.length; i++) {
          let track1 = filteredTracks[i];
          if (
            track1.id != checkedTrack.id &&
            Math.abs(track1.key - checkedTrack.key) <= keyDiff &&
            Math.abs(track1.tempo - checkedTrack.tempo) <= tempoDiff &&
            track1.mode == checkedTrack.mode
          ) {
            let score = calculateScore(track1, checkedTrack);
            recommendations.push({
              track1: track1,
              track2: checkedTrack,
              score: score,
            });
          }
        }
    }

    return recommendations;
  }

  return (
    <div className="recommendedBox">
      <h4 className="recommendedTitle">Recommended Mixes</h4>
      <ul className="recommendedList">
        {createRecommendations(
          props.filteredTracks.map(({track}) => {
            return track;
          }), props.checkedTrack
        )
          .sort((track1, track2) => track2.score - track1.score)
          .slice(0, props.filteredTracks.length / 1.8)
          .map((trackPair) => (
            <RecommendedPair
              key={`${trackPair.track1.id}${trackPair.track2.id}`}
              track1={trackPair.track1}
              track2={trackPair.track2}
              score={trackPair.score}
            />
          ))}
      </ul>
    </div>
  );
}

export default RecommendedSongs;
