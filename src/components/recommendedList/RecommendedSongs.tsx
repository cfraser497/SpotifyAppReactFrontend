import "./RecommendedSongs.css";

function RecommendedSongs(props: any) {
  function createRecommendations(filteredTracks) {
    const recommendations = [];

    for(let i = 0; i < filteredTracks.length - 2; i++) {
      for(let j = i + 1; j < filteredTracks.length - 1; j++) {
        let track1 = filteredTracks[i];
        let track2 = filteredTracks[j];
        if (Math.abs(track1.key - track2.key) <= 1 && Math.abs(track1.tempo - track2.tempo) <= 4 && track1.mode == track2.mode) {
          recommendations.push({"track1": track1, "track2": track2});
        }
      }
    }

    return recommendations;
  }

  return (
    <div className="recommendedBox">
      <h4 className="recommendedTitle">Recommended Mixes</h4>
      <ul className="recommendedList">
        {createRecommendations(props.filteredTracks).map((trackPair) => (
          <li key={trackPair.track1.id}>{trackPair.track1.name} and {trackPair.track2.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendedSongs;
