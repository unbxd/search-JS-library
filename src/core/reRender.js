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
                if(lastAction === "prev_page_loaded"){
                    searchResultsWrapper.innerHTML = this.renderSearch() + searchResultsWrapper.innerHTML;
                } else {
                    searchResultsWrapper.innerHTML += this.renderSearch();
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
    }
    if (breadcrumb.enabled) {
        breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    const suggestion = this.getSpellCheckSuggested();
    if (spellCheck.el) {
        this.renderDidYouMean(suggestion);
    }

    if (lastAction === "pagination") {
        // if (pagination.type == "INFINITE_SCROLL") {
        //     const {
        //         productItemClass
        //     } = this.options.products;
        //     // const scrollBy = document.querySelector(`.${productItemClass}`).offsetHeight;
        //     // window.scrollBy({
        //     //     top: scrollBy,
        //     //     left: 0,
        //     //     behavior: "smooth"
        //     // })

        // }
        pagination.onPaginate.bind(this)(this.getPaginationInfo());

    }

    onEvent(this, afterRender);

    // if (pagination.type === 'INFINITE_SCROLL' && !this.productContainerHeight) {
    //     const autoScrollParams = this.getAutoScrollParams();
    //     const page = parseInt(autoScrollParams.get('page'));
    //     const count = parseInt(autoScrollParams.get('count'));
    //     const start = (page - 1) * count;
    //     const device = this.getDeviceInfo();
    //     this.initialScroll = Math.ceil(parseInt(autoScrollParams.get('scroll'))) || 0
    //     this.mobileFlag = false;
    //     this.infiniteScrollTimer = null;
    //     this.productContainerHeight = document.getElementById('searchResultsWrapper').clientHeight;
    //     // let page = (parseInt(autoScrollParams.get('start'))/parseInt(autoScrollParams.get('rows'))) + 1
    //     if (autoScrollParams.get('page') != null) {
    //         this.initialPage = parseInt(autoScrollParams.get('page'));
    //         if (device == 'Desktop')
    //             // jQuery('body, html').animate({ scrollTop: initialScroll }, '0.1s');
    //             window.scrollTo(0, parseInt(this.initialScroll))
    //     }
    //     this.currentNumberOfProducts = window.unbxdSearch.state.responseObj.response.products.length;
    //     this.totalNumberOfProducts = window.unbxdSearch.state.responseObj.response.numberOfProducts;
    //     if (start + count > this.totalNumberOfProducts) {
    //         const currentProducts = this.totalNumberOfProducts - start;
    //         if (device == 'Mobile') {
    //             this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 2) * (count / 2) - 120);
    //         } else if (device == 'Tablet') {
    //             this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 3) * (count / 3) - 100);
    //         } else {
    //             this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 4) * (count / 4) - 100);
    //         }
    //     }


    //     // if (autoScrollParams.get('page') != null && parseInt(autoScrollParams.get('page')) + 1 == this.getPage()) {
    //     //     this.productContainerHeight = Math.round(this.productContainerHeight / 2);
    //     // }
    // }

    if (pagination.type === 'INFINITE_SCROLL' && !this.productContainerHeight) {
        const autoScrollParams = this.getAutoScrollParams();
        // const page = parseInt(autoScrollParams.get('page'));
        const start = parseInt(autoScrollParams.get('start'));
        // const count = parseInt(autoScrollParams.get('count'));
        const rows = parseInt(autoScrollParams.get('rows'));
        // const start = (page - 1) * count;
        const device = this.getDeviceInfo();
        this.initialScroll = Math.ceil(parseInt(autoScrollParams.get('scroll'))) || 0
        // this.mobileFlag = false;
        // this.infiniteScrollTimer = null;
        this.productContainerHeight = pagination.infiniteScrollTriggerEl.clientHeight;
        // let page = (parseInt(autoScrollParams.get('start'))/parseInt(autoScrollParams.get('rows'))) + 1
        if (autoScrollParams.get('start') != null) {
            this.initialPage = (parseInt(autoScrollParams.get('start'))/parseInt(autoScrollParams.get('rows')) + 1);
            // if (device == 'Desktop')
                // jQuery('body, html').animate({ scrollTop: initialScroll }, '0.1s');
                window.scrollTo(0, parseInt(this.initialScroll), {behavior: 'smooth'})
        }
        // this.currentNumberOfProducts = window.unbxdSearch.state.responseObj.response.products.length;
        // this.totalNumberOfProducts = window.unbxdSearch.state.responseObj.response.numberOfProducts;
        // if (start + count > this.totalNumberOfProducts) {
        //     const currentProducts = this.totalNumberOfProducts - start;
        //     if (device == 'Mobile') {
        //         this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 2) * (count / 2) - 120);
        //     } else if (device == 'Tablet') {
        //         this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 3) * (count / 3) - 100);
        //     } else {
        //         this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 4) * (count / 4) - 100);
        //     }
        // }


        // if (autoScrollParams.get('page') != null && parseInt(autoScrollParams.get('page')) + 1 == this.getPage()) {
        //     this.productContainerHeight = Math.round(this.productContainerHeight / 2);
        // }
    }

    
};
export default reRender;
