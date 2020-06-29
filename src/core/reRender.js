const reRender = function(){
    const {
        callBackFn,
        sort,
        noResultContainer,
        spellCheck,
        pagination,
        pagetype,
        productType
    } = this.options;
    const {
        beforeRender,
        beforeNoResultRender,
        afterNoResultRender,
        afterRender
    } = this.events;
    const {
        lastAction
    } = this.viewState;

    callBackFn(this,beforeRender);
    this.loaderContainer.innerHTML = null;
    const results = this.getSearchResults();
    if(productType ==="SEARCH"){
        this.options.searchBoxSelector.value = this.state.userInput;
    }
    this.facetsWrapper.innerHTML = this.renderFacets();
    this.rangeFacetsWrapper.innerHTML = this.renderRangeFacets();
    if(this.viewState.isInfiniteStarted){
        this.viewState.isInfiniteStarted = false;
        this.searchResultsWrapper.innerHTML += this.renderSearch();
    } else {
        this.searchResultsWrapper.innerHTML = this.renderSearch();
    }
    if(pagination.type !== "INFINITE_SCROLL"){
        pagination.el.innerHTML = this.renderPagination();
    }
    this.multiLevelFacetWrapper.innerHTML = this.renderBucketedUI();
    if(this.options.breadcrumb.enabled){
        this.breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    if(sort.el) {
        sort.el.innerHTML = this.renderSort();
    }
    if(results && results.numberOfProducts === 0) {
        callBackFn(this,beforeNoResultRender);
        const query = this.getSearchQuery();
        if(noResultContainer) {
            noResultContainer.innerHTML = this.renderNoResults(query);
        }
        callBackFn(this,afterNoResultRender);
    } else {
        noResultContainer.innerHTML = null;
    }
    const suggestion = this.getSpellCheckSuggested();
    if(spellCheck.el && suggestion) {
        spellCheck.el.innerHTML = this.renderDidYouMean(suggestion);
    }
    this.renderProductViewTypeUI();
    this.renderBannerUI()
    this.renderPageSize();
    if(lastAction === "pagination" ) {
        pagination.onPaginate.bind(this)(this.getPaginationInfo());
    }
    callBackFn(this,afterRender);
};
export default reRender;
