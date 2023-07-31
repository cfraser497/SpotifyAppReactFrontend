import './FilterSongs.css'

function FilterSongs (props: any) {
    function onFilterValueChanged(event: any) {
        props.filterValueSelected(event.target.value);
    }

    return (<div className="filterArea">
        <label className="keyLabel">Key: </label>
        <select name="filterKey" onChange={onFilterValueChanged}>
            <option value="-1">--</option>
            <option value="0">C</option>
            <option value="1">C#</option>
            <option value="2">D</option>
            <option value="3">D#</option>
            <option value="4">E</option>
            <option value="5">F</option>
            <option value="6">F#</option>
            <option value="7">G</option>
            <option value="8">G#</option>
            <option value="9">A</option>
            <option value="10">A#</option>
            <option value="11">B</option>
        </select>
    </div>);
}

export default FilterSongs;