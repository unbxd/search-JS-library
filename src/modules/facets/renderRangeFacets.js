const renderRangeFacets = function(rangeFacets, selectedRanges) {
    const self = this;
    const getRangesFrom = (sRanges, xMin = 0, yMin = 100) => {
        let sArr = [];
        sRanges.forEach(sRange => {
            const trimmed = sRange.replace(/(^")|("$)/g, '').replace(/\"{2,}/g, '"').replace(/\\\"/g, '"').replace(/(^\[)|(\]$)/g, '');
            const rangArr = trimmed.split(" TO ");
            sArr.push(Number(rangArr[0]));
            sArr.push(Number(rangArr[1]));
        })
        sArr = sArr.sort((a, b) => a-b);
        let x = xMin;
        let y = yMin;
        if(sArr.length >= 2) {
            x = sArr[0];
            y = sArr[sArr.length -1];
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
        if(!self.options.applyMultipleFilters) {
            this.setPageStart(0);
            this.applyRangeFacet();
        }
    }
    const {
        rangeFacet
    } = this.state;
    const {
        isCollapsible,
        textFacetWrapper,
        applyMultipleFilters
    } = this.options.facet;
    const {
        actionBtnClass
    } = this.options;

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
        const isExpanded =  this.isExpandedFacet(facetName);
        if(selectedRange) {
            const {
                start,
                end
            } = getRangesFrom(selectedRange,values.start,values.end);
            minX = start;
            minY = end;
        }
        return new self.RangeSlider({
            facetName,
            displayName,
            position,
            values,
            onStop,
            minX,
            minY,
            start:0,
            end,
            wrapper:self.options.facet.rangeFacetEl,
            rangeConfig: self.options.facet.rangeWidgetConfig,
            isCollapsible,
            isExpanded,
            actionBtnClass,
            textFacetWrapper,
            applyMultipleFilters
        }).render();
    }).join('');
    return  `<div class="range-facet">${rangeFacetTemplate}</div>`;
}
export {
    renderRangeFacets
};
