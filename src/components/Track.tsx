import ArtistsBox from "./ArtistsBox";
import KeyBox from "./KeyBox";
import NameBox from "./NameBox";
import TempoBox from "./TempoBox";

function Track(props: any) {
  return (
    <li key={props.track.name}>
      <NameBox name={props.track.name} />
      <ArtistsBox artists={props.track.artists} />
      <TempoBox tempo={props.track.tempo} />
      <KeyBox mode={props.track.mode} songKey={props.track.key} />
    </li>
  );
}

export default Track;
