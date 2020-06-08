const reRender = function(){
    const {
        callBackFn,
        sortContainer,
        noResultContainer,
        spellCheckSelector,
        paginationContainer
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
    this.options.searchBoxSelector.value = this.state.userInput;

    this.facetsWrapper.innerHTML = this.renderFacets();
    this.rangeFacetsWrapper.innerHTML = this.renderRangeFacets();
    if(this.options.paginationType==="INFINITE_SCROLL" &&  this.viewState.isInfiniteStarted){
        this.viewState.isInfiniteStarted = false;
        this.searchResultsWrapper.innerHTML += this.renderSearch();
    } else {
        this.searchResultsWrapper.innerHTML = this.renderSearch();
    }
    
    this.bucketedSearchWrapper.innerHTML = this.renderBucketedUI();
    this.breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    if(sortContainer) {
        sortContainer.innerHTML = this.renderSort();
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
    paginationContainer.innerHTML = this.renderPagination();
    this.renderProductViewTypeUI();
    this.renderBannerUI()
    callBackFn(this,afterRender);
};
export default reRender;
