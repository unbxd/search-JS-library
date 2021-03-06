const createLayout = function() {
    this.searchResultsWrapper = this.createtSearchWrapper();
    this.facetsWrapper  = this.createFacetWrapper();
    this.bannerWrapper = this.createBannerWrapper();
    this.breadcrumbWrapper = this.createBreadcrumbWrapper();
    this.pageSizeWrapper = this.createPageSizeWrapper();
    this.sortWrapper = this.createSortWrapper();
    this.selectedFacetWrapper = this.createSelectedFacetWrapper();
    this.spellCheckWrapper = this.createSpellCheckWrapper();
    this.productViewTypeWrapper = this.createProductViewTypeWrapper()
    this.paginationWrappers = [];
    const getPaginationWrapper = () =>{
        const elem = this.createPaginationWrapper();
        this.paginationWrappers.push(elem);
        return elem;
    }
    const {
        facet,
        breadcrumb,
        banner,
        sort,
        products,
        pagesize,
        pagination,
        productView,
        selectedFacets
    } = this.options;
    const {
        facetsEl
    } = facet;
    const {
        spellCheck
    } = this.options;

    if(spellCheck.el) {
        spellCheck.el.innerHTML = ``;
        spellCheck.el.appendChild(this.spellCheckWrapper);
    }
    if(facetsEl) {
       facetsEl.innerHTML = ``;
       facetsEl.appendChild(this.facetsWrapper);
    }
    if(facet.selectedFacetsEl) {
        console.log(`selectedFacetsEl option is depricated from v2.0.2, please use selectedFacets option to configure selected facets elements and template`)
        facet.selectedFacetsEl.innerHTML = ``;
        facet.selectedFacetsEl.appendChild(this.selectedFacetWrapper);
    } else {
        if(selectedFacets.enabled && selectedFacets.el) {
            selectedFacets.el.innerHTML = ``;
            selectedFacets.el.appendChild(this.selectedFacetWrapper)
        }
    }

    if(breadcrumb.enabled) {
        if(breadcrumb.el){
            breadcrumb.el.innerHTML = ``;
            breadcrumb.el.appendChild(this.breadcrumbWrapper);
        }
    }
    if(banner.el && banner.enabled){
        banner.el.innerHTML = ``;
        banner.template.bind(this);
        banner.el.appendChild(this.bannerWrapper);
    }
    if(sort.el && sort.enabled){
        sort.el.innerHTML = ``;
        sort.el.appendChild(this.sortWrapper);
    }

    if(products.el){
        products.el.innerHTML=``;
        products.el.appendChild(this.searchResultsWrapper);
    }
    if(pagesize.el && pagesize.enabled){
        pagesize.el.innerHTML = ``;
        pagesize.el.appendChild(this.pageSizeWrapper);
    }
    if(productView.el) {
        productView.el.innerHTML = ``;
        productView.el.appendChild(this.productViewTypeWrapper)
    }
    if(pagination.enabled) {
        const {
            el
        } = pagination;
        if(el){
            if(el.length) {
                el.forEach(element => {
                    element.innerHTML = ``;
                    element.appendChild(getPaginationWrapper());
                })

            } else {
                el.innerHTML = ``;
                el.appendChild(getPaginationWrapper());
            }
        }

    }
}
export default createLayout;