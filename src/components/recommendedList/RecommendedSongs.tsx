import "./RecommendedSongs.css";

function RecommendedSongs(props: any) {
  function createRecommendations() {}

  return (
    <div className="recommendedBox">
      <h4 className="recommendedTitle">Recommended Mixes</h4>
      <ul className="recommendedList">
        {props.filteredTracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default RecommendedSongs;
