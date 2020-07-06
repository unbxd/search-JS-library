import renderFacets from './index';
import {
    facetsClickFn,
    findChangedFacet,
    onClickRangeFacet,
    onBucketedFacet
} from './actions';
function renderRangeFacets() {
    const rangeFacets = this.getRangeFacets();
    return this.options.facet.rangeTemplate.bind(this)(rangeFacets);
}
function setRangeFilter(data){
    this.setRangeFacet(data)
}
function renderBucketedUI() {
    const bucketedFacet = this.getBucketedFacets();
    const breadCrumb = this.getBreadCrumbsList();
    return this.options.facet.multiLevelFacetTemplate(bucketedFacet,breadCrumb);
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
        onBucketedFacet
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
    onBucketedFacet
};
