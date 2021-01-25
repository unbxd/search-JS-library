import debounce from "../modules/utils/debounce";
function bindEvents(){
    const {
        searchButtonEl,
        searchTrigger,
        products,
        facet,
        productView,
        pagination,
        sort,
        pagesize,
        spellCheck,
        searchBoxEl,
        actionChangeClass,
        actionBtnClass,
        breadcrumb
    } = this.options;
    if(searchBoxEl) {
        searchBoxEl.addEventListener("keydown", (e) => {
            const val = e.target.value;
            if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
                if(val !== ""){
                    this.setInputValue.bind(this)();
                }
            }
        });
    }
    if(pagination.enabled) {
        this.paginationWrappers.forEach((wrapper)=>{
            this.delegate(
                wrapper,
                pagination.action,
                `.${pagination.pageClass}`,
                this.paginationAction.bind(this)
            )
            //wrapper.addEventListener(pagination.action, this.paginationAction.bind(this));
        });
    }
    if(searchButtonEl) {
        searchButtonEl.addEventListener(searchTrigger,this.setInputValue.bind(this));
    }
    this.delegate(
        this.spellCheckWrapper,
        "click",
        `.${spellCheck.selectorClass}`,
        this.setSuggestion.bind(this)
    );
    //productItemSelector
    this.delegate(
        this.searchResultsWrapper,
        "click",
        `.${products.productItemClass}`,
        this.onProductItemClick.bind(this)
    );
    this.delegate(
        this.sortWrapper, 
        sort.action, 
        "."+sort.sortClass,
        this.sortAction.bind(this)
    )
    this.delegate(
        this.facetsWrapper, 
        facet.facetAction, 
        "."+facet.facetClass, 
        this.findChangedFacet.bind(this)
    )
    if(facet.selectedFacetsEl) {
        this.delegate(
            this.selectedFacetWrapper, 
            facet.facetAction, 
            "."+facet.selectedFacetClass, 
            this.findChangedFacet.bind(this)
        )
    }
    if(this.breadcrumbWrapper) {
        this.delegate(
            this.breadcrumbWrapper, 
            "click", 
            "."+breadcrumb.selectorClass, 
            this.findChangedFacet.bind(this)
        )
    }
    if(productView.el){
        this.delegate(
            productView.el,
            productView.action,
            "."+productView.viewTypeClass,
            this.onPageViewTypeClick.bind(this)
        )
    }

    if(this.options.pagination.type === 'INFINITE_SCROLL') {
        pagination.infinteScrollTriggerEl.addEventListener("scroll",debounce(()=>{
            this.onInfiniteScroll.bind(this)();
        },1000));
    }
    this.delegate(
        this.pageSizeWrapper,
        pagesize.action,
        `.${pagesize.pageSizeClass}`,
        this.onClickPageSize.bind(this)
    );
    this.delegate(
        this.facetsWrapper, 
        'change', 
        "."+actionChangeClass, 
        this.extraActionsChange.bind(this)
    )
    this.delegate(
        this.facetsWrapper, 
        'keyup', 
        "."+actionChangeClass, 
        this.extraActionsChange.bind(this)
    )
    this.delegate(
        this.facetsWrapper, 
        'click', 
        "."+actionBtnClass, 
        this.extraActions.bind(this)
    )
    if(!this.viewState.initialised) {
        if(this.options.hashMode) {
            window.onhashchange= this.onLocationChange.bind(this);
        } else {
            window.addEventListener('popstate',this.onLocationChange.bind(this),false);
        }
        const urlParams = this.getQueryParams();
        const ln = Object.keys(urlParams).length;
        if(ln > 0){
            this.renderFromUrl();
        }
        this.viewState.initialised = true;
    }
}
export default bindEvents;
