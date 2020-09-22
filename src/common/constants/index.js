import events from "./eventsLib";
import actions from "./actions";
const cssClasses = {
    openFacet:"UNX-accordian-open",
    closeFacet: "UNX-accordian-close",
    openBtn:"UNX-facet-open",
    closeBtn:"UNX-facet-close",
    viewMore:"UNX-view-more",
    viewLess:"UNX-view-less"
}
const testIds = {
    UNX_gridBtn:"UNX_gridBtn",
    UNX_listBtn:"UNX_listBtn",
    UNX_loadMore:"UNX_loadMore",
    UNX_variant:"UNX_variant",
    UNX_spellCheck:"UNX_spellCheck",
    UNX_pagesize:"UNX_pagesize",
    UNX_pageNumber:"UNX_pageNumber",
    UNX_unbxdSorter:"UNX_unbxdSorter",
    UNX_uFilter:"UNX_uFilter",
    UNX_rangeslider:"UNX_rangeslider",
    UNX_facetLevel:"UNX_facetLevel",
    UNX_searchFacets:"UNX_searchFacets",
    UNX_swatchClrBtn:"UNX_swatchClrBtn"
}
export {
    events,
    actions,
    cssClasses,
    testIds
};
