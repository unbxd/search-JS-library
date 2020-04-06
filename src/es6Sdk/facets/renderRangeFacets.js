const renderRangeFacets = function(rangeFacets) {
    const self = this;
    const getRangesFrom = (str, xMin = 0, yMin = 100) => {
        const trimmed = str.replace(/(^")|("$)/g, '').replace(/\"{2,}/g, '"').replace(/\\\"/g, '"').replace(/(^\[)|(\]$)/g, '');
        const rangArr = trimmed.split(" TO ");
        let x = xMin;
        let y = yMin;
        if(rangArr.length === 2) {
            x = Number(rangArr[0]);
            y = Number(rangArr[1]);
        }
        return {
            start:x,
            end:y
        };
    }
    const onStop = (data) => {
        const  {
            left,
            right,
            props : {
                end,
                facetName,
                displayName,
                gap
            } = {}
        } = data;
        const newData = {
            start: left,
            end: right,
            facetName,
            displayName,
            gap
        }
        this.setRangeFilter(newData);
    }
    const {
        rangeFacet
    } = this.state;

    const rangeFacetUI = rangeFacets.map(item => {
        const {
            facetName,
            displayName,
            position,
            values 
        } = item;
        const selectedRange = rangeFacet[facetName];
        let minX = values.start;
        let minY = values.end;
        if(selectedRange) {
            const {
                start,
                end
            } = getRangesFrom(selectedRange,values.start,values.end);
            minX = start;
            minY = end;
        }
        return new self.widgets.RangeSlider({
            facetName,
            displayName,
            position,
            ...values,
            onStop,
            minX,
            minY,
            wrapper:self.options.rangeFacetContainer
        }).render();
    }).join('');
    return  `<div class="range-facet">
        ${rangeFacetUI}
    </div>`;
}
export {
    renderRangeFacets
};