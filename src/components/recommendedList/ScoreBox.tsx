import "./ScoreBox.css"

function ScoreBox(props: any) {
    return (
        <div className="ScoreBox">Mixer Score: {props.score}</div>
    )
}

export default ScoreBox;