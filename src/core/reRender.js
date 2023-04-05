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
        const viewCss = (productViewType === "LIST") ? "UNX-list-block" : "UNX-grid-block";
        searchResultsWrapper.classList.remove("UNX-list-block");
        searchResultsWrapper.classList.remove("UNX-grid-block");
        searchResultsWrapper.classList.add(viewCss);
        searchResultsWrapper.classList.remove(noResultCss);
        if (isInfiniteStarted) {
            this.viewState.isInfiniteStarted = false;
            if (noResultLoaded) {
                this.viewState.noResultLoaded = true;
                searchResultsWrapper.innerHTML = this.renderSearch();
            } else {
                if (lastAction === "prev_page_loaded") {
                    // searchResultsWrapper.innerHTML = this.renderSearch() + searchResultsWrapper.innerHTML;
                    const scrollTop = window.pageYOffset
                    searchResultsWrapper.insertAdjacentHTML('afterbegin', this.renderSearch());
                    // const newHeight = container.scrollHeight;
                    searchResultsWrapper.scrollTop = scrollTop;
                } else {
                    // searchResultsWrapper.innerHTML += this.renderSearch();
                    searchResultsWrapper.insertAdjacentHTML('beforeend', this.renderSearch());
                }
            }
        } else {
            searchResultsWrapper.innerHTML = "";
            searchResultsWrapper.innerHTML = this.renderSearch();
        }
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
        this.infiniteScrollV3()
        // this.renderInfiniteScrollPagination();
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
    // if (pagination.type === 'INFINITE_SCROLL') {
    //     if (!this.productContainerHeight) {
    //         this.productContainerHeight = pagination.infiniteScrollTriggerEl.clientHeight;
    //         // if (autoScrollParams.get('start') != null) {
    //         //     if(this.options.pagination.usePageAndCount){
    //         //         this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('count')) + 1);
    //         //     } else {
    //         //         this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1);
    //         //     }
                
    //         // }

    //         if(this.options.pagination.usePageAndCount){
    //             if (autoScrollParams.get('page') != null) {
    //                 this.initialPage = parseInt(autoScrollParams.get('page'));
    //             }
    //         } else {
    //             if (autoScrollParams.get('start') != null) {
    //                 this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1);
    //             }
    //         }
    //     }
    // }

    // if(pagination.type === "INFINITE_SCROLL") {
    //     if(window.intersectionObserver){
    //         window.intersectionObserver.observe(this.options.pagination.infiniteScrollTriggerEl.lastElementChild)
    //     }
    // }

    onEvent(this, afterRender);


};
export default reRender;
