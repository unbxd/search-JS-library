import createElement from "../modules/utils/createElement";
const createLayout = function() {
    this.searchResultsWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-search-results-block UNX-result-wrapper"
        }
    );
    this.facetsWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-facets-results-block"
        }
    );
    this.bannerWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-banner-block"
        }
    );
    this.breadcrumbWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-breadcrumbs-block"
        }
    );
    this.pageSizeWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-page-size-block"
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
    this.spellCheckWrapper = createElement(
        "DIV",
        "",{
            class:"UNX-spellcheck-wrapper"
        }
    );
    this.paginationWrappers = [];
    const getPaginationWrapper = () =>{
        const elem  = createElement(
            "DIV",
            "",{
                class:"UNX-pagination-size-block"
            }
        );
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
        pagination
    } = this.options;
    const {
        facetsEl,
        selectedFacetsEl,
        selectedFacetTemplate,
        multiLevelFacetTemplate,
        facetTemplate,
        facetItemTemplate
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
    if(selectedFacetsEl) {
        selectedFacetsEl.innerHTML = ``;
        selectedFacetsEl.appendChild(this.selectedFacetWrapper)
    }
    if(breadcrumb.enabled) {
        if(breadcrumb.el){
            breadcrumb.el.innerHTML = ``;
            breadcrumb.el.appendChild(this.breadcrumbWrapper);
        }
    }
    if(banner.el){
        banner.el.innerHTML = ``;
        banner.template.bind(this);
        banner.el.appendChild(this.bannerWrapper);
    }
    if(sort.el){
        sort.el.innerHTML = ``;
        sort.el.appendChild(this.sortWrapper);
    }

    if(products.el){
        products.el.innerHTML=``;
        products.el.appendChild(this.searchResultsWrapper);
    }
    if(pagesize.el){
        pagesize.el.innerHTML = ``;
        pagesize.el.appendChild(this.pageSizeWrapper);
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