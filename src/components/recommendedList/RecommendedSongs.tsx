import "./RecommendedSongs.css"

function RecommendedSongs (props: any) {

    function createRecommendations() {

    }

    return (
        <ul id="recommendedList">
        {props.filteredTracks.map((track) => (
          <li key={track.id}>{track.name}</li>
        ))}
        </ul>
    )
}

export default RecommendedSongs;