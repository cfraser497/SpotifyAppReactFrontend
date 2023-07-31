function KeyBox(props: any) {
  return (
    <div className="keyBox">
      {getKey(props.songKey)} {getMode(props.mode)}
    </div>
  );
}

function getMode(mode: number): string {
  if (mode == 1) return "Major";
  return "Minor";
}

function getKey(key: number): string {
  switch (key) {
    case 0:
      return "C";
    case 1:
      return "C# / Db";
    case 2:
      return "D";
    case 3:
      return "D / Eb";
    case 4:
      return "E";
    case 5:
      return "F";
    case 6:
      return "F / Gb";
    case 7:
      return "G";
    case 8:
      return "G# / Ab";
    case 9:
      return "A";
    case 10:
      return "A# / Bb";
    case 11:
      return "B";
  }

  return "UNKNOWN";
}

export default KeyBox;
