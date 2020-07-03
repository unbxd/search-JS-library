import createElement from "../modules/utils/createElement";
const createLayout = function() {
    this.searchResultsWrapper = createElement(
        "DIV",
        "searchResultsBlock",{
            class:"UNX-search-results-block"
        }
    );
    this.facetsWrapper = createElement(
        "DIV",
        "facetsInnerContainer",{
            class:"facets-results-block"
        }
    );
    this.rangeFacetsWrapper = createElement(
        "DIV",
        "rangeFacetsContainer",{
            class:"range-facets-block"
        }
    );
    this.multiLevelFacetWrapper = createElement(
        "DIV",
        "multiLevelFacetBlock",{
            class:"multilivel-facets-block"
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
    this.options.facet.selectedFacetTemplate.bind(this);
    this.options.facet.multiLevelFacetTemplate.bind(this);
    this.options.facet.facetTemplate.bind(this);
    this.options.facet.facetItemTemplate.bind(this);
    this.options.facet.facetsEl.appendChild(this.facetsWrapper);
    if(this.options.facet.multiLevelFacetEl) {
        this.options.facet.multiLevelFacetEl.appendChild(this.multiLevelFacetWrapper);
    } else {
        this.options.facet.facetsEl.appendChild(this.multiLevelWrapperFacet);
    }
    if(this.options.facet.rangeFacetEl){
        this.options.facet.rangeFacetEl.appendChild(this.rangeFacetsWrapper);
    } else {
        this.options.facet.facetsEl.appendChild(this.rangeFacetsWrapper)
    }
    if(this.options.breadcrumb.enabled) {
        this.options.breadcrumb.template = this.options.breadcrumb.template.bind(this);
        this.options.breadcrumb.el.appendChild(this.breadcrumbWrapper);
    }
    if(this.options.swatchTemplate) {
        this.options.swatchTemplate.bind(this);
    }
    if(this.options.banner.el){
        this.options.banner.el.appendChild(this.bannerWrapper);
    }
    this.options.banner.template = this.options.banner.template.bind(this);
    this.options.searchResultsTemplate = this.options.searchResultsTemplate.bind(this);
    this.options.searchResultsSelector.appendChild(this.searchResultsWrapper);
    this.loaderContainer = this.options.loaderContainer || this.searchResultsWrapper;
    if(this.options.pagesize.el){
        this.options.pagesize.el.appendChild(this.pageSizeWrapper);
    }
}
export default createLayout;