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
    this.pageSizeWrapper = createElement(
        "DIV",
        "pageSizeContainer",{
            class:"page-size-block"
        }
    );
    this.options.selectedFacetTemplate.bind(this);
    this.options.bucketedSearchUi.bind(this);
    this.options.facetTemplate.bind(this);
    this.options.facetItemTemplate.bind(this);
    this.options.facetsSelector.appendChild(this.facetsWrapper);
    if(this.options.breadcrump) {
        this.options.breadCrumpTemplate = this.options.breadCrumpTemplate.bind(this);
    }
    if(this.options.multiLevelFacetContainer) {
        this.options.multiLevelFacetContainer.appendChild(this.bucketedSearchWrapper);
    } else {
        this.options.facetsSelector.appendChild(this.bucketedSearchWrapper);
    }
    if(this.options.rangeFacetContainer){
        this.options.rangeFacetContainer.appendChild(this.rangeFacetsWrapper);
    } else {
        this.options.facetsSelector.appendChild(this.rangeFacetsWrapper)
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
    if(this.options.pageSizeContainerSelector){
        this.options.pageSizeContainerSelector.appendChild(this.pageSizeWrapper);
    }
}
export default createLayout;