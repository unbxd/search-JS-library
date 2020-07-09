const renderRangeFacets = function(rangeFacets, selectedRanges) {
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

    const rangeFacetTemplate = rangeFacets.map(item => {
        const {
            facetName,
            displayName,
            position,
            values,
            start,
            end
        } = item;
        const selectedRange = rangeFacet[facetName];
        let minX = start;
        let minY = end;
        if(selectedRange) {
            const {
                start,
                end
            } = getRangesFrom(selectedRange[0],values.start,values.end);
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
            start:0,
            end,
            wrapper:self.options.facet.rangeFacetEl,
            rangeConfig: self.options.facet.rangeWidgetConfig
        }).render();
    }).join('');
    return  `<div class="range-facet">
        ${rangeFacetTemplate}
    </div>`;
}
export {
    renderRangeFacets
};
