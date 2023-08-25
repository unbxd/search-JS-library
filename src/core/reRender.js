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
        facet
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

    if (productType === "SEARCH" && searchBoxEl) {
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
    const {
        noResultLoaded,
        isInfiniteStarted
    } = this.viewState;
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
    this.renderFacets();
    this.renderSelectedFacets();
    this.renderBannerUI();
    if (productView.enabled) {
        this.renderProductViewTypeUI();
    }
    this.renderPageSize();
    this.renderSort();
    if (pagination.type !== "INFINITE_SCROLL") {
        paginationWrappers.forEach((pagination) => {
            pagination.innerHTML = this.renderPagination();
        });
    } else {
        if (paginationWrappers) {
            paginationWrappers.forEach((pagination) => {
                pagination.innerHTML = ``;
            });
        }
    }
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

    const autoScrollParams = this.getAutoScrollParams();
    if (pagination.type === 'INFINITE_SCROLL') {
        if (!this.productContainerHeight) {
            this.productContainerHeight = pagination.infiniteScrollTriggerEl.clientHeight;
            if (autoScrollParams.get('start') != null) {
                this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1);
            }
        }


    }

    onEvent(this, afterRender);


};
export default reRender;
