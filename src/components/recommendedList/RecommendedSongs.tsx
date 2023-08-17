import RecommendedPair from "./RecommendedPair";
import "./RecommendedSongs.css";

const maxScore = 100;
const keyWeight = 4;
const tempoWeight = 1;
const genreWeight = 5;
const energyWeight = 2;
const defaultGenres = 2;
//const sameArtistPenalty = 0.8;
const tempoDiff = 6;
const keyDiff = 2;

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

    return genreMaxScore - Math.min(genreMaxScore, initialScore);
  }

  function calculateScore(
    track1: { name: string; tempo: number; key: number; genres: string[]; mode: number, energy: number },
    track2: { name: string; tempo: number; key: number; genres: string[]; mode: number, energy: number }
  ): number {
    const tempoScore = tempoWeight * Math.abs(track1.tempo - track2.tempo);
    const keyScore = keyWeight ** Math.abs(track1.key - track2.key) - 1; //0 -> 0; 1 -> keyweight - 1; 2 -> keyweight^2 - 1
    const modeScore = track1.mode == track2.mode ? 0 : 30;
    const genreScore = calculateGenreScore(track1, track2);
    const energyScore = Math.round(energyWeight * 10 * Math.abs(track1.energy - track2.energy));

    return maxScore - tempoScore - keyScore - genreScore - modeScore - energyScore;
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
        if (track1.id != checkedTrack.id && track1.tempo && checkedTrack.tempo) {
          let score = calculateScore(track1, checkedTrack);
          recommendations.push({
            track1: checkedTrack,
            track2: track1,
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
          props.filteredTracks.map(({ track }) => {
            return track;
          }),
          props.checkedTrack
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
