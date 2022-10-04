const reRender = function(){
    console.log('akshay 3')
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

    onEvent(this,beforeRender);

    if(loader.el) {
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
    
    if(productType ==="SEARCH" && searchBoxEl){
        searchBoxEl.value = this.state.userInput;
    }

    if(productType !=="SEARCH" && searchBoxEl){
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
    if(results && results.numberOfProducts === 0) {
        onEvent(this,beforeNoResultRender);
        this.viewState.noResultLoaded = true;
        searchResultsWrapper.classList.add(noResultCss);
        searchResultsWrapper.innerHTML = this.renderNoResults(query);
        if(!qParams.filter) {
            this.renderFacets();
        }
        onEvent(this,afterNoResultRender);
    } else {
        const viewCss = (productViewType === "LIST") ? "UNX-list-block" :"UNX-grid-block";
        searchResultsWrapper.classList.remove("UNX-list-block");
        searchResultsWrapper.classList.remove("UNX-grid-block");
        searchResultsWrapper.classList.add(viewCss);
        searchResultsWrapper.classList.remove(noResultCss);
        if(isInfiniteStarted){
            this.viewState.isInfiniteStarted = false;
            if(noResultLoaded) {
                this.viewState.noResultLoaded = true;
                searchResultsWrapper.innerHTML = this.renderSearch();
            } else {
                searchResultsWrapper.innerHTML += this.renderSearch();
            }
        } else {
            searchResultsWrapper.innerHTML = "";
            searchResultsWrapper.innerHTML = this.renderSearch();
        }
    }
    this.renderFacets();
    this.renderSelectedFacets();
    this.renderBannerUI();
    if(productView.enabled){
        this.renderProductViewTypeUI();
    }
    this.renderPageSize();
    this.renderSort();
    if(pagination.type !== "INFINITE_SCROLL"){
        paginationWrappers.forEach((pagination)=>{
            pagination.innerHTML = this.renderPagination();
        });
    } else {
        if(paginationWrappers) {
            paginationWrappers.forEach((pagination)=>{
                pagination.innerHTML = ``;
            });
        }
    }
    if(breadcrumb.enabled){
        breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    const suggestion = this.getSpellCheckSuggested();
    if(spellCheck.el) {
        this.renderDidYouMean(suggestion);
    }

    if(lastAction === "pagination" ) {
        if(pagination.type == "INFINITE_SCROLL") {
            const {
                productItemClass
            } = this.options.products;
            const scrollBy = document.querySelector(`.${productItemClass}`).offsetHeight;
            window.scrollBy({
                top: scrollBy,
                left: 0,
                behavior : "smooth"
            })
        }
        pagination.onPaginate.bind(this)(this.getPaginationInfo());

    }
    onEvent(this,afterRender);
};
export default reRender;
