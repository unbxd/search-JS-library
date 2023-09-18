const reRender = function () {
    const {
        onEvent,
        spellCheck,
        pagination,
        productType,
        searchBoxEl,
        loader,
        breadcrumb,
        productView,
        facet,
        visualSearch,
        visualSearchRequest
    } = this.options;
    const {
        beforeRender,
        beforeNoResultRender,
        afterNoResultRender,
        afterRender
    } = this.events;

    onEvent(this, beforeRender);

    if (loader.el) {
        loader.el.innerHTML = ``;
    }
    const results = this.getSearchResults();
    const qParams = this.getQueryParams() || {};
    const query = this.getSearchQuery();
    const noResultCss = "UNX-no-results-wrap";
    const {
        lastAction,
        productViewType
    } = this.viewState;

    if (productType === "SEARCH" && searchBoxEl && !visualSearchRequest) {
        searchBoxEl.value = this.state.userInput;
    }

    if (productType !== "SEARCH" && searchBoxEl) {
        searchBoxEl.value = "";
    }
    const {
        searchResultsWrapper,
        paginationWrappers,
        breadcrumbWrapper
    } = this;
    
    if (results && results.numberOfProducts === 0) {
        let redirect = this.state.responseObj.redirect || {};
        if (Object.keys(redirect).length) {
            return;
        }
        onEvent(this, beforeNoResultRender);
        this.viewState.noResultLoaded = true;
        searchResultsWrapper.classList.add(noResultCss);
        searchResultsWrapper.innerHTML = this.renderNoResults(query);
        if (!qParams.filter) {
            this.renderFacets();
        }
        onEvent(this, afterNoResultRender);
    } else {
        this.renderProducts();
        
    }
    
    if(visualSearchRequest){
        this.renderImageBoundingBox();
    }
    this.renderFacets();
    this.renderSelectedFacets();
    this.renderBannerUI();
    if (productView.enabled) {
        this.renderProductViewTypeUI();
    }
    this.renderPageSize();
    this.renderSort();

    if (breadcrumb.enabled) {
        breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    const suggestion = this.getSpellCheckSuggested();
    if (spellCheck.el) {
        this.renderDidYouMean(suggestion);
    }

    if (lastAction === "pagination") {
        pagination.onPaginate.bind(this)(this.getPaginationInfo());
    }

    if (pagination.type !== "INFINITE_SCROLL") {
        paginationWrappers.forEach((pagination) => {
            pagination.innerHTML = this.renderPagination();
        });
    } 

    onEvent(this, afterRender);


};
export default reRender;
