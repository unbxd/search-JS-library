const RangeSlider = function(props) {
    console.log(props)
    return `<div class="range-slider">
        <input type="range" min="1" max="100" value="50" class="slider" id="myRange">
    </div>`

};
export default RangeSlider;
