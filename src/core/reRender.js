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
        expandedFacets,
        productViewType
    } = this.viewState;
    callBackFn(this,beforeRender);
    this.loaderEl.innerHTML = ``;
    const results = this.getSearchResults();
    const qParams = this.getQueryParams();
    const query = this.getSearchQuery();
    if(productType ==="SEARCH"){
        this.options.searchBoxSelector.value = this.state.userInput;
    }

    const {
        defaultOpen
    } = this.options.facet;
    const allFacets = this.getAllFacets();
    if(defaultOpen !=="NONE") {
        allFacets.forEach((item,i)=> {
            const {
                facetName
            } = item;
            if(typeof expandedFacets[facetName] === "undefined" && defaultOpen === "ALL") {
                expandedFacets[facetName] = true
            }
            if(defaultOpen === "FIRST" && i == 0) {
                expandedFacets[facetName] = true
            }
        })
    } else {
        this.viewState.expandedFacets = {};
    }

    if(results && results.numberOfProducts === 0) {
        callBackFn(this,beforeNoResultRender);
        this.state.noResultLoaded = true;
        this.searchResultsWrapper.innerHTML = this.renderNoResults(query);
        if(!qParams.filter) {
            this.renderFacets();
        }
        callBackFn(this,afterNoResultRender);
    } else {
        const viewCss = (productViewType === "LIST") ? "UNX-list-block" :"UNX-grid-block";
        this.searchResultsWrapper.classList.remove("UNX-list-block");
        this.searchResultsWrapper.classList.remove("UNX-grid-block");
        this.searchResultsWrapper.classList.add(viewCss);
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
        spellCheck.el.innerHTML = this.renderDidYouMean(suggestion);
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
    callBackFn(this,afterRender);
};
export default reRender;
