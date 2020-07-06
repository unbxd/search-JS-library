import createElement from "../modules/utils/createElement";
const createLayout = function() {
    this.searchResultsWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-search-results-block"
        }
    );
    this.facetsWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-facets-results-block"
        }
    );
    this.rangeFacetsWrapper = createElement(
        "DIV",
        "",{
            class:"range-facets-block"
        }
    );
    this.multiLevelFacetWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-multilivel-facets-block"
        }
    );
    this.bannerWrapper = createElement(
        "DIV",
        "",{
            class:"banner-block"
        }
    );
    this.breadcrumbWrapper = createElement(
        "DIV",
        "",{
            class:"breadcrumbs-block"
        }
    );
    this.pageSizeWrapper = createElement(
        "DIV",
        "",{
            class:"page-size-block"
        }
    );
    this.paginationWrappers = [];
    const getPaginationWrapper = () =>{
        const elem  = createElement(
            "DIV",
            "",{
                class:"unx-pagination-size-block"
            }
        );
        this.paginationWrappers.push(elem);
        return elem;
    }
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
    this.loaderEl = this.options.loaderEl || this.searchResultsWrapper;
    if(this.options.pagesize.el){
        this.options.pagesize.el.appendChild(this.pageSizeWrapper);
    }
    if(this.options.pagination.enabled) {
        if(this.options.pagination.el){
            if(this.options.pagination.el.length) {
                this.options.pagination.el.forEach(element => {
                    element.appendChild(getPaginationWrapper());
                })

            } else {
                this.options.pagination.el.appendChild(getPaginationWrapper());
            }
        }

    }
}
export default createLayout;