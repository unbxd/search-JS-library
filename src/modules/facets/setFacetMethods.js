import renderFacets from './index';
import {
    facetsClickFn,
    findChangedFacet,
    onClickRangeFacet,
    onBucketedFacet
} from './actions';
function renderRangeFacets() {
    const rangeFacets = this.getRanges();
    const selectedRanges = this.viewState.selectedRange;
    if(rangeFacets.length > 0) {
        return this.options.facet.rangeTemplate.bind(this)(rangeFacets,selectedRanges);
    } else {
        return ``;
    }
}
function setRangeFilter(data){
    this.setRangeFacet(data)
}
function renderBucketedUI() {
    const bucketedFacet = this.getBucketedFacets();
    const breadCrumb = this.getBreadCrumbsList();
    return this.options.facet.multiLevelFacetTemplate(bucketedFacet,breadCrumb);
}
const isSelectedRange = function(facetName,range){
    const selections = this.getSelectedRanges(facetName);
    const {
        from,
        to
    } = range;
    const aR = `[${from.name} TO ${to.name}]`
    if(selections && selections.indexOf(aR) >= 0) {
        return true
    }
    return false;  
}
const setFacets = (prototype) => {
    prototype = Object.assign(prototype,{
        renderFacets,
        facetsClickFn,
        findChangedFacet,
        onClickRangeFacet,
        renderRangeFacets,
        setRangeFilter,
        renderBucketedUI,
        onBucketedFacet,
        isSelectedRange
    })
};

export {
    setFacets as default,
    renderFacets,
    facetsClickFn,
    findChangedFacet,
    onClickRangeFacet,
    renderRangeFacets,
    setRangeFilter,
    renderBucketedUI,
    onBucketedFacet,
};
