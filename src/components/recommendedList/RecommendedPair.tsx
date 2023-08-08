import ArtistsBox from "../trackComponents/ArtistsBox";
import ImageBox from "../trackComponents/ImageBox";
import KeyBox from "../trackComponents/KeyBox";
import NameBox from "../trackComponents/NameBox";
import TempoBox from "../trackComponents/TempoBox";
import ArtistsBox2 from "../trackComponents/ArtistsBox2";
import ImageBox2 from "../trackComponents/ImageBox2";
import KeyBox2 from "../trackComponents/KeyBox2";
import NameBox2 from "../trackComponents/NameBox2";
import TempoBox2 from "../trackComponents/TempoBox2";
import "./RecommendedPair.css"

function RecommendedPair(props) {
  return (
    <li className="recommendedPair">
      <ImageBox url={props.track1.image} />
      <NameBox name={props.track1.name} />
      <ArtistsBox artists={props.track1.artists} />
      <TempoBox tempo={props.track1.tempo} />
      <KeyBox mode={props.track1.mode} songKey={props.track1.key} />
      <ImageBox2 url={props.track2.image} />
      <NameBox2 name={props.track2.name} />
      <ArtistsBox2 artists={props.track2.artists} />
      <TempoBox2 tempo={props.track2.tempo} />
      <KeyBox2 mode={props.track2.mode} songKey={props.track2.key} />
    </li>
  );
}

export default RecommendedPair;
