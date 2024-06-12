import { events } from "../common/constants";

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
        noResults,
        products
    } = this.options;
    
    const paginationType = this.getPaginationType();
    
    const {
        beforeRender,
        beforeNoResultRender,
        afterNoResultRender,
        afterRender
    } = this.events;
    
    try{
        onEvent(this, beforeRender);
    }catch(error){
        this.onError("reRender", error, events.runtimeError);
    }
    

    if (loader.el) {
        loader.el.innerHTML = ``;
    }
    const results = this.getSearchResults();
    const qParams = this.getQueryParams() || {};
    const query = this.getSearchQuery();
    const noResultCss = "UNX-no-results-wrap";
    const {
        lastAction
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
    
    if (results && results.numberOfProducts === 0) {
        let redirect = this.state.responseObj.redirect || {};
        if (Object.keys(redirect).length) {
            return;
        }
        try {
            onEvent(this, beforeNoResultRender);
        }catch(error){
            this.onError("reRender", error, events.runtimeError);
        }
       
        this.viewState.noResultLoaded = true;
        
        if(this.options.noResults?.el) {
            noResults.el.classList.add(noResultCss)
            searchResultsWrapper.innerHTML = "";
            noResults.el.innerHTML = this.renderNoResults(query);
           
        }else{
            searchResultsWrapper.classList.add(noResultCss);
            searchResultsWrapper.innerHTML = this.renderNoResults(query);
        }
        if (!qParams.filter) {
            this.renderFacets();
        }
        
        try{
            onEvent(this, afterNoResultRender);
        }catch(error){
            this.onError("reRender", error, events.runtimeError);
        }
       
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

    if (paginationType !== "INFINITE_SCROLL") {
        paginationWrappers.forEach((pagination) => {
            pagination.innerHTML = this.renderPagination();
        });
    } else {
        setTimeout(() => {
            this.preLoaderObserver.disconnect()
            const preLoader = document.querySelector('.UNX-pre-loader');
            this.preLoaderObserver.observe(preLoader);
            if (this.options.pagination.type === 'INFINITE_SCROLL') {
                this.postLoaderObserver.disconnect();
                const postLoader = document.querySelector('.UNX-post-loader');
                this.postLoaderObserver.observe(postLoader);
            }
        }, 0)
    }

    try{
        onEvent(this, afterRender);
    }catch(error){
        this.onError("reRender", error, events.runtimeError);
    }
   


};
export default reRender;
