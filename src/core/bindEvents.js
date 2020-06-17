
import infiniteScroller from '../modules/pagination/infiniteScroller';
import debounce from '../modules/utils/debounce';
function bindEvents(){
    const {
        paginationSelector,
        paginationEvt,
        sortContainer,
        searchButtonSelector,
        searchEvt,
        productItemClass,
        sortElem,
        sortEvt,
        facetEvt,
        facetElemWrapClass,
        selectedFacetBlock,
        selectedFacetClass,
        productViewTypeSelector
    } = this.options;
    if(paginationSelector) {
        paginationSelector.addEventListener(paginationEvt, this.paginationAction.bind(this));
    }
    searchButtonSelector.addEventListener(searchEvt,this.setInputValue.bind(this))
    //productItemSelector
    this.delegate(
        this.searchResultsWrapper,
        "click",
        productItemClass,
        this.onProductItemClick.bind(this)
    );
    this.delegate(
        sortContainer, 
        sortEvt, 
        sortElem,
        this.sortAction.bind(this)
    )
    this.delegate(
        this.facetsWrapper, 
        facetEvt, 
        "."+facetElemWrapClass, 
        this.findChangedFacet.bind(this)
    )
    if(selectedFacetBlock) {
        this.delegate(
            selectedFacetBlock, 
            facetEvt, 
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
            "."+this.options.bucketedFacetElem, 
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
        this.options.pageSizeContainerType === "Dropdown" ? "change" :"click",
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
