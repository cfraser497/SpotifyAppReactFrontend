import RecommendedPair from "./RecommendedPair";
import "./RecommendedSongs.css";

const maxScore = 100;
const keyWeight = 5;

function RecommendedSongs(props: any) {
  function calculateScore(track1, track2): number {
    const tempoScore = Math.abs(track1.tempo - track2.tempo);
    const keyScore = keyWeight * Math.abs(track1.key - track2.key);
    return maxScore - tempoScore - keyScore;
  }

  function createRecommendations(filteredTracks: any[]) {
    const recommendations = [];

    //compare every track to every other track
    for (let i = 0; i < filteredTracks.length - 2; i++) {
      for (let j = i + 1; j < filteredTracks.length - 1; j++) {
        let track1 = filteredTracks[i];
        let track2 = filteredTracks[j];
        if (
          Math.abs(track1.key - track2.key) <= 1 &&
          Math.abs(track1.tempo - track2.tempo) <= 4 &&
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

    return recommendations;
  }

  return (
    <div className="recommendedBox">
      <h4 className="recommendedTitle">Recommended Mixes</h4>
      <ul className="recommendedList">
        {createRecommendations(props.filteredTracks)
          .sort((track1, track2) => track2.score - track1.score)
          .map((trackPair) => (
            <RecommendedPair
              key={`${trackPair.track1.name}${trackPair.track2.name}`}
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
