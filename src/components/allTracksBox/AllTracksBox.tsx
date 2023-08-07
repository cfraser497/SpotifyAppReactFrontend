import Track from "./songList/Track";

function AllTracksBox(props) {
  return (
    <div className="allTracksBox">
      <h4 className="allTracksTitle">All Tracks</h4>
      <ul className="songlist">
        {props.filteredTracks.map((track) => (
          <Track key={track.id} track={track} />
        ))}
      </ul>
    </div>
  );
}

export default AllTracksBox;
