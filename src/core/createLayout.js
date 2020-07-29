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
    this.sortWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-sort-block-lb"
        }
    );
    this.selectedFacetWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-selected-facet-lb"
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
    const {
        facetsEl,
        multiLevelFacetEl,
        rangeFacetEl,
        selectedFacetsEl
    } = this.options.facet;
    this.options.facet.selectedFacetTemplate.bind(this);
    this.options.facet.multiLevelFacetTemplate.bind(this);
    this.options.facet.facetTemplate.bind(this);
    this.options.facet.facetItemTemplate.bind(this);
    if(facetsEl) {
        this.options.facet.facetsEl.innerHTML = ``;
        this.options.facet.facetsEl.appendChild(this.facetsWrapper);
    }
    if(multiLevelFacetEl) {
        this.options.facet.multiLevelFacetEl.innerHTML = ``;
        this.options.facet.multiLevelFacetEl.appendChild(this.multiLevelFacetWrapper);
    } else {
        if(facetsEl) {
            this.options.facet.facetsEl.appendChild(this.multiLevelWrapperFacet);
        }
    }
    if(rangeFacetEl){
        this.options.facet.rangeFacetEl.innerHTML = ``;
        this.options.facet.rangeFacetEl.appendChild(this.rangeFacetsWrapper);
    } else {
        if(facetsEl) {
            this.options.facet.facetsEl.appendChild(this.rangeFacetsWrapper)
        }
    }
    if(selectedFacetsEl) {
        this.options.facet.selectedFacetsEl.innerHTML = ``;
        this.options.facet.selectedFacetsEl.appendChild(this.selectedFacetWrapper)
    }
    if(this.options.breadcrumb.enabled) {
        this.options.breadcrumb.template = this.options.breadcrumb.template.bind(this);
        if(this.options.breadcrumb.el){
            this.options.breadcrumb.el.innerHTML = ``;
            this.options.breadcrumb.el.appendChild(this.breadcrumbWrapper);
        }
    }
    if(this.options.swatchTemplate) {
        this.options.swatchTemplate.bind(this);
    }
    if(this.options.banner.el){
        this.options.banner.el.innerHTML = ``;
        this.options.banner.el.appendChild(this.bannerWrapper);
    }
    if(this.options.sort.el){
        this.options.sort.el.innerHTML = ``;
        this.options.sort.el.appendChild(this.sortWrapper);
    }
    this.options.banner.template = this.options.banner.template.bind(this);
    if(this.options.products.el){
        this.options.products.el.innerHTML=``;
        this.options.products.el.appendChild(this.searchResultsWrapper);
    }
    this.loaderEl = this.options.loader.el || this.searchResultsWrapper;
    if(this.options.pagesize.el){
        this.options.pagesize.el.innerHTML = ``;
        this.options.pagesize.el.appendChild(this.pageSizeWrapper);
    }
    if(this.options.pagination.enabled) {
        if(this.options.pagination.el){
            if(this.options.pagination.el.length) {
                this.options.pagination.el.forEach(element => {
                    element.innerHTML = ``;
                    element.appendChild(getPaginationWrapper());
                })

            } else {
                this.options.pagination.el.innerHTML = ``;
                this.options.pagination.el.appendChild(getPaginationWrapper());
            }
        }

    }
}
export default createLayout;