const events = {
    beforeApiCall:"BEFORE_API_CALL",
    afterApiCall:"AFTER_API_CALL",
    beforeRender:"BEFORE_RENDER",
    beforeNoResultRender:"BEFORE_NO_RESULTS_RENDER",
    afterNoResultRender:"AFTER_NO_RESULTS_RENDER",
    afterRender:"AFTER_RENDER",
    deleteFacet:"DELETE_FACET",
    facetClick:"FACETS_CLICK",
    deleteFacetValue:"DELETE_FACET_VALUE",
    clearSort:"CLEAR_SORT",
    changeSort:"CHANGE_SORT",
    pageNext:"PAGE_NEXT",
    pagePrev:"PAGE_PREV",
    changeInput:"CHANGE_INPUT",
    setCategoryFilter:"SET_CATEGORY_FILTER",
    deleteCategoryFilter:"DELETE_CATEGORY_FILTER",
    pageSizeChange:"PAGESIZE_CHANGE",
    configError: "CONFIG_ERROR",
    runtimeError: "RUNTIME_ERROR",
    fetchError: "FETCH_ERROR"
};

export default events;
