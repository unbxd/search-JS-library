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
    const {
        searchResultsWrapper,
        sortWrapper,
        paginationWrappers
    } = this;
    if(results && results.numberOfProducts === 0) {
        onEvent(this,beforeNoResultRender);
        this.state.noResultLoaded = true;
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
        if(this.viewState.isInfiniteStarted){
            this.viewState.isInfiniteStarted = false;
            if(this.state.noResultLoaded) {
                this.state.noResultLoaded = false;
                searchResultsWrapper.innerHTML = this.renderSearch();
            } else {
                searchResultsWrapper.innerHTML += this.renderSearch();
            }
        } else {
            searchResultsWrapper.innerHTML = this.renderSearch();
        }
        
        this.renderFacets();
        this.renderBannerUI();
    }
    this.renderProductViewTypeUI();
    this.renderPageSize();
    sortWrapper.innerHTML = this.renderSort();
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
