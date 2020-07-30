const reRender = function(){
    const {
        callBackFn,
        sort,
        noResults,
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
        lastAction,
        expandedFacets
    } = this.viewState;
    const {
        defaultOpen
    } = this.options.facet;
    const facets = this.getFacets();
    if(defaultOpen !=="None") {
        facets.forEach((item,i)=> {
            const {
                facetName
            } = item;
            if(typeof expandedFacets[facetName] === "undefined" && defaultOpen === "All") {
                expandedFacets[facetName] = true
            }
            if(defaultOpen === "First" && i == 0) {
                expandedFacets[facetName] = true
            }
        })
    } else {
        this.viewState.expandedFacets = {};
    }

    callBackFn(this,beforeRender);
    this.loaderEl.innerHTML = ``;
    const results = this.getSearchResults();
    if(productType ==="SEARCH"){
        this.options.searchBoxSelector.value = this.state.userInput;
    }
    this.renderFacets();
    if(this.viewState.isInfiniteStarted){
        this.viewState.isInfiniteStarted = false;
        this.searchResultsWrapper.innerHTML += this.renderSearch();
    } else {
        this.searchResultsWrapper.innerHTML = this.renderSearch();
    }
    if(pagination.type !== "INFINITE_SCROLL"){
        //pagination.el.innerHTML = this.renderPagination();
        this.paginationWrappers.forEach((pagination)=>{
            pagination.innerHTML = this.renderPagination();
        });
    }
    if(this.options.breadcrumb.enabled){
        this.breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    this.sortWrapper.innerHTML = this.renderSort();
    if(results && results.numberOfProducts === 0) {
        callBackFn(this,beforeNoResultRender);
        const query = this.getSearchQuery();
        if(noResults.el) {
            noResults.el.innerHTML = this.renderNoResults(query);
        }
        callBackFn(this,afterNoResultRender);
    } else {
        noResults.el.innerHTML = null;
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
