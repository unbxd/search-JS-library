
import infiniteScroller from '../modules/pagination/infiniteScroller';
import debounce from '../modules/utils/debounce';
function bindEvents(){
    const {
        paginationSelector,
        paginationEvt,
        sortContainerSelector,
        searchButtonSelector,
        searchTrigger,
        productItemClass,
        sortElement,
        sortAction,
        facetAction,
        facetClass,
        selectedFacetBlock,
        selectedFacetClass,
        productViewTypeSelector
    } = this.options;
    if(paginationSelector) {
        paginationSelector.addEventListener(paginationEvt, this.paginationAction.bind(this));
    }
    searchButtonSelector.addEventListener(searchTrigger,this.setInputValue.bind(this))
    //productItemSelector
    this.delegate(
        this.searchResultsWrapper,
        "click",
        productItemClass,
        this.onProductItemClick.bind(this)
    );
    this.delegate(
        sortContainerSelector, 
        sortAction, 
        sortElement,
        this.sortAction.bind(this)
    )
    this.delegate(
        this.facetsWrapper, 
        facetAction, 
        "."+facetClass, 
        this.findChangedFacet.bind(this)
    )
    if(selectedFacetBlock) {
        this.delegate(
            selectedFacetBlock, 
            facetAction, 
            "."+selectedFacetClass, 
            this.findChangedFacet.bind(this)
        )
    }
    if(this.rangeFacetsWrapper) {
        this.delegate(
            this.rangeFacetsWrapper, 
            "click", 
            "button", 
            this.onClickRangeFacet.bind(this)
        )
    }
    if(this.bucketedSearchWrapper) {
        this.delegate(
            this.bucketedSearchWrapper, 
            this.options.bucketFacetEvnt, 
            "."+this.options.multiLevelFacetSelector, 
            this.onBucketedFacet.bind(this)
        )
    }
    if(this.breadcrumbWrapper) {
        this.delegate(
            this.breadcrumbWrapper, 
            "click", 
            "."+this.options.breadcrumbSelectorClass, 
            this.onBucketedFacet.bind(this)
        )
    }
    if(productViewTypeSelector){
        this.delegate(
            productViewTypeSelector,
            'click',
            "button",
            this.onPageViewTypeClick.bind(this)
        )
    }
    if(this.options.paginationType === 'INFINITE_SCROLL') {
        document.addEventListener("scroll", debounce(()=>{
            infiniteScroller.bind(this)();
        },1000));
    }
    this.delegate(
        this.pageSizeWrapper,
        this.options.pageSizeDisplayType === "Dropdown" ? "change" :"click",
        `.${this.unxSelectors.unxPageSize}`,
        this.onClickPageSize.bind(this)
    );
    this.onLocationChange = function (evt){
        const {
            urlState
        } = this.state;
        if(`#${urlState}` !== location.hash ) {
            this.renderFromUrl()
        }
        
        
    }
    window.onhashchange= this.onLocationChange.bind(this);
}
export default bindEvents;
