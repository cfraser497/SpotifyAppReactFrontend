function TempoBox(props: any) {
  return <div className="tempoBox">{props.tempo ? props.tempo : "UNKNOWN"} BPM</div>;
}

export default TempoBox;
