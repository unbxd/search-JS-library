import createElement from "../modules/utils/createElement";
const createLayout = function() {
    this.searchResultsWrapper = createElement(
        "DIV",
        "searchResultsBlock",{
            class:"search-results-block"
        }
    );
    this.facetsWrapper = createElement(
        "DIV",
        "facetsContainer",{
            class:"facets-results-block"
        }
    );
    this.rangeFacetsWrapper = createElement(
        "DIV",
        "rangeFacetsContainer",{
            class:"range-facets-block"
        }
    );
    this.bucketedSearchWrapper = createElement(
        "DIV",
        "bucketedSearchContainer",{
            class:"bucketed-facets-block"
        }
    );
    this.bannerWrapper = createElement(
        "DIV",
        "bannerWrapper",{
            class:"banner-block"
        }
    );
    this.breadcrumbWrapper = createElement(
        "DIV",
        "breadcrumbContainer",{
            class:"breadcrumbs-block"
        }
    );
    this.options.selectedFacetElem.bind(this);
    this.options.bucketedSearchUi.bind(this);
    this.options.facetElem.bind(this);
    this.options.facetItemElem.bind(this);
    this.options.facetWrapper.appendChild(this.facetsWrapper);
    if(this.options.breadcrump) {
        this.options.breadCrumpTemplate = this.options.breadCrumpTemplate.bind(this);
    }
    if(this.options.bucketedFacetContainer) {
        this.options.bucketedFacetContainer.appendChild(this.bucketedSearchWrapper);
    } else {
        this.options.facetWrapper.appendChild(this.bucketedSearchWrapper);
    }
    if(this.options.rangeFacetContainer){
        this.options.rangeFacetContainer.appendChild(this.rangeFacetsWrapper);
    } else {
        this.options.facetWrapper.appendChild(this.rangeFacetsWrapper)
    }
    if(this.options.breadcrumbContainer) {
        this.options.breadcrumbContainer.appendChild(this.breadcrumbWrapper)
    }
    if(this.options.swatchTemplate) {
        this.options.swatchTemplate.bind(this);
    }
    if(this.options.bannerSelector){
        this.options.bannerSelector.appendChild(this.bannerWrapper);
    }
    this.options.bannerTemplate = this.options.bannerTemplate.bind(this);
    this.options.searchResultsTemplate = this.options.searchResultsTemplate.bind(this);
    this.options.searchResultsSelector.appendChild(this.searchResultsWrapper);
    this.loaderContainer = this.options.loaderContainer || this.searchResultsWrapper;
}
export default createLayout;