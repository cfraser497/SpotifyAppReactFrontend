import "./ScoreBox.css"

function ScoreBox(props: any) {
    return (
        <div className="ScoreBox">MixMaker Score: {props.score}</div>
    )
}

export default ScoreBox;