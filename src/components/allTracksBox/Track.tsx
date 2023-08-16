import ArtistsBox from "../trackComponents/ArtistsBox";
import ImageBox from "../trackComponents/ImageBox";
import KeyBox from "../trackComponents/KeyBox";
import NameBox from "../trackComponents/NameBox";
import TempoBox from "../trackComponents/TempoBox";
import "./Track.css";
import "../trackComponents/TrackComponents.css";

function Track(props: any) {
  return (
    <li className="track">
      <ImageBox url={props.track.image} />
      <NameBox name={props.track.name} />
      <ArtistsBox artists={props.track.artists} />
      <TempoBox tempo={props.track.tempo} />
      <KeyBox mode={props.track.mode} songKey={props.track.key} />
      <input
        type="checkbox"
        className="checkbox"
        value={props.track.id}
        checked={props.checked}
        onChange={props.handleChecked}
      />
    </li>
  );
}

export default Track;
