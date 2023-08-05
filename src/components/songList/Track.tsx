import ArtistsBox from "./ArtistsBox";
import ImageBox from "./ImageBox";
import KeyBox from "./KeyBox";
import NameBox from "./NameBox";
import TempoBox from "./TempoBox";
import './Track.css';

function Track(props: any) {
  return (
    <li>
      <ImageBox url={props.track.image} />
      <NameBox name={props.track.name} />
      <ArtistsBox artists={props.track.artists} />
      <TempoBox tempo={props.track.tempo} />
      <KeyBox mode={props.track.mode} songKey={props.track.key} />
    </li>
  );
}

export default Track;
