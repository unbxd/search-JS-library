const reRender = function(){
    const {
        onEvent,
        spellCheck,
        pagination,
        productType,
        searchBoxSelector,
        loader
    } = this.options;
    const {
        beforeRender,
        beforeNoResultRender,
        afterNoResultRender,
        afterRender
    } = this.events;
    const {
        lastAction,
        productViewType
    } = this.viewState;
    onEvent(this,beforeRender);

    if(loader.el) {
        loader.el.innerHTML = ``;
    }
    const results = this.getSearchResults();
    const qParams = this.getQueryParams();
    const query = this.getSearchQuery();
    const noResultCss = "UNX-no-results-wrap";
    
    if(productType ==="SEARCH" && searchBoxSelector){
        searchBoxSelector.value = this.state.userInput;
    }

    if(productType !=="SEARCH" && searchBoxSelector){
        searchBoxSelector.value = "";
    }
    if(results && results.numberOfProducts === 0) {
        onEvent(this,beforeNoResultRender);
        this.state.noResultLoaded = true;
        this.searchResultsWrapper.classList.add(noResultCss);
        this.searchResultsWrapper.innerHTML = this.renderNoResults(query);
        if(!qParams.filter) {
            this.renderFacets();
        }
        onEvent(this,afterNoResultRender);
    } else {
        const viewCss = (productViewType === "LIST") ? "UNX-list-block" :"UNX-grid-block";
        this.searchResultsWrapper.classList.remove("UNX-list-block");
        this.searchResultsWrapper.classList.remove("UNX-grid-block");
        this.searchResultsWrapper.classList.add(viewCss);
        this.searchResultsWrapper.classList.remove(noResultCss);
        if(this.viewState.isInfiniteStarted){
            this.viewState.isInfiniteStarted = false;
            if(this.state.noResultLoaded) {
                this.state.noResultLoaded = false;
                this.searchResultsWrapper.innerHTML = this.renderSearch();
            } else {
                this.searchResultsWrapper.innerHTML += this.renderSearch();
            }
        } else {
            this.searchResultsWrapper.innerHTML = this.renderSearch();
        }
        
        this.renderFacets();
        this.renderBannerUI();
    }
    this.renderProductViewTypeUI();
    this.renderPageSize();
    this.sortWrapper.innerHTML = this.renderSort();
    if(pagination.type !== "INFINITE_SCROLL"){
        //pagination.el.innerHTML = this.renderPagination();
        this.paginationWrappers.forEach((pagination)=>{
            pagination.innerHTML = this.renderPagination();
        });
    }
    if(this.options.breadcrumb.enabled){
        this.breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    const suggestion = this.getSpellCheckSuggested();
    if(spellCheck.el && suggestion) {
        this.spellCheckWrapper.innerHTML = this.renderDidYouMean(suggestion);
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
