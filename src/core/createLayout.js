const createProductLayout = (el, paginationType, searchResultsWrapper) => {
    el.innerHTML = ``;

    if (paginationType === "INFINITE_SCROLL" || paginationType === "CLICK_N_SCROLL") {
        const preLoader = document.createElement("div");
        preLoader.classList.add("UNX-pre-loader");
        preLoader.style.height = this.getHeightDiffToTriggerNextPage() + "px";
        el.appendChild(preLoader);
    }

    el.appendChild(searchResultsWrapper);

    if (paginationType === "INFINITE_SCROLL") {
        const postLoader = document.createElement("div");
        postLoader.classList.add("UNX-post-loader");
        postLoader.style.height = this.getHeightDiffToTriggerNextPage() + "px";
        el.appendChild(postLoader);
    }
};

const createPaginationWrappers = function () {
    const elem = this.createPaginationWrapper();
    this.paginationWrappers.push(elem);
    return elem;
};

const createFacetWrappers = function () {
    const elem = this.createFacetWrapper();
    this.facetWrappers.push(elem);
    return elem;
};

const createSortElementWrappers = function () {
    const elem = this.createSortWrapper();
    this.sortWrappers.push(elem);
    return elem;
};

const createSelectedFacetsWrappers = function () {
    const elem = this.createSelectedFacetWrapper();
    this.selectedFacetWrappers.push(elem);
    return elem;
};

const createSpellCheckWrappers = function () {
    const elem = this.createSpellCheckWrapper();
    this.spellCheckWrappers.push(elem);
    return elem;
};

const createPageSizeElementWrappers = function () {
    const elem = this.createPageSizeWrapper();
    this.pageSizeWrappers.push(elem);
    return elem;
};

const createProductViewTypeWrappers = function () {
    const elem = this.createProductViewTypeWrapper();
    this.productViewTypeWrappers.push(elem);
    return elem;
}

const createBreadcrumbWrappers = function () {
    const elem = this.createBreadcrumbWrapper();
    this.breadcrumbWrappers.push(elem);
    return elem;
}

const createLayout = function () {
    // this.searchResultsWrapper = this.createSearchWrapper();
    // this.bannerWrapper = this.createBannerWrapper();
    // this.breadcrumbWrapper = this.createBreadcrumbWrapper();
    // this.pageSizeWrapper = this.createPageSizeWrapper();
    // this.productViewTypeWrapper = this.createProductViewTypeWrapper();
    this.searchResultsWrappers = [];
    this.pageSizeWrappers = [];
    this.bannerWrapper = this.createBannerWrapper();
    this.breadcrumbWrappers = [];
    this.productViewTypeWrappers = [];
    this.paginationWrappers = [];
    this.facetWrappers = [];
    this.sortWrappers = [];
    this.selectedFacetWrappers = [];
    this.spellCheckWrappers = [];

    const { facet, breadcrumb, banner, sort, products, pagesize, pagination, productView, selectedFacets } = this.options;
    const { facetsEl } = facet;
    const { spellCheck } = this.options;
    const { el: spellCheckEl } = spellCheck;

    const paginationType = this.getPaginationType();

    if (spellCheckEl) {
        let els = spellCheckEl;
        if (!els.length) {
            els = [spellCheckEl];
        }
        els.forEach((el) => {
            el.innerHTML = ``;
            el.appendChild(createSpellCheckWrappers.bind(this)());
        });
    }
    if (facetsEl) {
        let els = facetsEl;
        if (!facetsEl.length) {
            els = [facetsEl];
        }
        els.forEach((facetEl) => {
            facetEl.innerHTML = ``;
            facetEl.appendChild(createFacetWrappers.bind(this)());
        });
    }
    const sortEl = sort.el;
    if (sort.enabled && sortEl) {
        if (sortEl instanceof NodeList) {
            sortEl.forEach((el) => {
                el.innerHTML = ``;
                el.appendChild(createSortElementWrappers.bind(this)());
            });
        } else sortEl.appendChild(createSortElementWrappers.bind(this)());
    }

    if (facet.selectedFacetsEl) {
        // console.error(`selectedFacetsEl option is deprecated from v2.0.2, please use selectedFacets option to configure selected facets elements and template`)
        facet.selectedFacetsEl.innerHTML = ``;
        facet.selectedFacetsEl.appendChild(createSelectedFacetsWrappers.bind(this)());
    } else {
        const { el: selectedFacetsElems } = selectedFacets;
        if (selectedFacets.enabled && selectedFacetsElems) {
            let els = selectedFacetsElems;
            if (!selectedFacetsElems.length) {
                els = [selectedFacetsElems];
            }
            els.forEach((el) => {
                el.innerHTML = ``;
                el.appendChild(createSelectedFacetsWrappers.bind(this)());
            });
        }
    }

    const breadcrumbEl = breadcrumb.el;
    if (breadcrumb.enabled && breadcrumbEl) {
        if (breadcrumbEl instanceof NodeList) {
            breadcrumbEl.forEach((el) => {
                el.innerHTML = ``;
                el.appendChild(createBreadcrumbWrappers.bind(this)());
            });
        } else {
            breadcrumbEl.innerHTML = ``;
            breadcrumbEl.appendChild(createBreadcrumbWrappers.bind(this)());
        }
    }


    if (banner.el) {
        banner.el.innerHTML = ``;
        if (banner.enabled) {
            banner.template.bind(this);
            banner.el.appendChild(this.bannerWrapper);
        }
    }

    if (products.el) {
        if (products.el instanceof NodeList) {
            products.el.forEach((el, index) => {
                const newSearchWrapper = this.createSearchWrapper();
                this.searchResultsWrappers.push(newSearchWrapper);
                createProductLayout.bind(this)(el, paginationType, this.searchResultsWrappers[index]);
            });
        } else {
            const newSearchWrapper = this.createSearchWrapper();
            this.searchResultsWrappers.push(newSearchWrapper);
            createProductLayout.bind(this)(products.el, pagination.type, this.searchResultsWrappers[0]);
        }
    }

    if (pagesize.enabled && pagesize.el) {
        if (pagesize.el instanceof NodeList) {
            pagesize.el.forEach((el) => {
                el.innerHTML = ``;
                el.appendChild(createPageSizeElementWrappers.bind(this)());
            });
        } else {
            pagesize.el.innerHTML = ``;
            pagesize.el.appendChild(createPageSizeElementWrappers.bind(this)());
        }
    }

    if (productView.enabled && productView.el) {
        if (productView.el instanceof NodeList) {
            productView.el.forEach((el) => {
                el.innerHTML = ``;
                el.appendChild(createProductViewTypeWrappers.bind(this)());
            });
        }
    } else {
        productView.el.innerHTML = ``;
        productView.el.appendChild(createProductViewTypeWrappers.bind(this)());
    }


    const { el } = pagination;
    if (el) {
        let els = el;
        if (!el.length) {
            els = [el];
        }
        els.forEach((element) => {
            element.innerHTML = ``;
            pagination.enabled && element.appendChild(createPaginationWrappers.bind(this)());
        });
    }
};

export default createLayout;
