const reRender = function(){
    const {
        callBackFn,
        sortContainerSelector,
        noResultContainer,
        spellCheckSelector,
        paginationSelector,
        paginationType,
        pagetype,
        productType

    } = this.options;
    const {
        beforeRender,
        beforeNoResultRender,
        afterNoResultRender,
        afterRender
    } = this.events;

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
    if(paginationType === "FIXED_PAGINATION"){
        
        paginationSelector.innerHTML = this.renderPagination();
    }
    this.bucketedSearchWrapper.innerHTML = this.renderBucketedUI();
    this.breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    if(sortContainerSelector) {
        sortContainerSelector.innerHTML = this.renderSort();
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
    if(spellCheckSelector && suggestion) {
        spellCheckSelector.innerHTML = this.renderDidYouMean(suggestion);
    }
    
    this.renderProductViewTypeUI();
    this.renderBannerUI()
    this.renderPageSize();
    callBackFn(this,afterRender);
};
export default reRender;
