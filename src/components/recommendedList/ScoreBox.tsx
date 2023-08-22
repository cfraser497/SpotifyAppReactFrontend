import "./ScoreBox.css"

function ScoreBox(props: any) {
    return (
        <div className="ScoreBox">AW Score: {props.score}</div>
    )
}

export default ScoreBox;