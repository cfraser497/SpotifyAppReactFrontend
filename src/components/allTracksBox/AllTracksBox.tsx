import Track from "./Track";
import "./AllTracksBox.css"

function AllTracksBox(props) {
  return (
    <div className="allTracksBox">
      <div className="allTracksTitleBox">
        <h4 className="allTracksTitle">All Tracks</h4>
        <button className="clearButton" onClick={props.unCheckCheckedTrack}>Clear</button>
      </div>
      <ul className="songlist">
        {props.filteredTracks.map(({track, checked}) => (
          <Track key={track.id} track={track} checked={checked} handleChecked={props.handleChecked}/>
        ))}
      </ul>
    </div>
  );
}

export default AllTracksBox;
