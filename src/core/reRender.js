// function getScrollXY() {
//     var scrOfX = 0;
//     var scrOfY = 0;
//     if (typeof (window.pageYOffset) == 'number') {
//         //Netscape compliant
//         scrOfY = window.pageYOffset;
//         scrOfX = window.pageXOffset;
//     } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
//         //DOM compliant
//         scrOfY = document.body.scrollTop;
//         scrOfX = document.body.scrollLeft;
//     } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
//         //IE6 standards compliant mode
//         scrOfY = document.documentElement.scrollTop;
//         scrOfX = document.documentElement.scrollLeft;
//     }
//     return [ scrOfX, scrOfY ];
// }

// function updateUrl2(self) {

//     const productItems = document.querySelectorAll('.product-item');
//     let currentUrlPage, productsPerPage;
//     const urlParams = new URLSearchParams(window.location.search);
//     if (self.options.pagination.usePageAndCount) {
//         productsPerPage = Number(urlParams.get('count'));
//         currentUrlPage = Number(urlParams.get('page')) || 1
//     } else {
//         currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
//         productsPerPage = Number(urlParams.get('rows'));
//     }
//     // const self = this;
//     // productItems.forEach(function(productItem) {
//     for (let i = 0; i < productItems.length; i++) {
//         const productItem = productItems[ i ]
//         // Get the bounding rectangle of the product item
//         const boundingRect = productItem.getBoundingClientRect();

//         // Check if the product item is visible in the viewport
//         if (boundingRect.top < window.innerHeight && boundingRect.bottom >= 0) {
//             // Calculate the page number that the visible product belongs to
//             const productIndex = parseInt(productItem.dataset.prank);
//             const currentPage = Math.ceil(productIndex / productsPerPage);

//             // Update the current page number in the URL if necessary
//             if (currentPage !== currentUrlPage) {
//                 // currentUrlPage = productPage;
//                 // urlParams.set('page', currentUrlPage);
//                 // const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
//                 // window.history.replaceState({path: newUrl}, '', newUrl);
//                 if (self.options.pagination.usePageAndCount) {
//                     urlParams.set('page', currentPage);
//                 } else {
//                     urlParams.set('start', (currentPage - 1) * productsPerPage);
//                 }
//                 history.replaceState(null, null, self.urlSearchParamsToStr(urlParams));
//                 // break;
//             }
//         }
//     }
//     //   });
// }

// function updateUrl() {
//     // const productsContainer = this.options.pagination.infiniteScrollTriggerEl;
//     //         const targetNode = productsContainer.querySelector('.UNX-search-results-block');

//     //         const self = this
//     const productsContainer = this.options.pagination.infiniteScrollTriggerEl;
//     const urlParams = new URLSearchParams(window.location.search);
//     let currentUrlPage, productsPerPage;
//     if (this.options.pagination.usePageAndCount) {
//         productsPerPage = Number(urlParams.get('count'));
//         currentUrlPage = Number(urlParams.get('page')) || 1
//     } else {
//         currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
//         productsPerPage = Number(urlParams.get('rows'));
//     }
//     let hasScrolledToTop = false;



//     const scrollTop = getScrollXY()[ 1 ];
//     console.log("file: infiniteScrollV4.js:76 ~ document.addEventListener ~ scrollTop:", scrollTop)
//     const products = document.querySelectorAll('.product-item');
//     let currentPage = null;

//     if (scrollTop === 0) {
//         hasScrolledToTop = true;
//         // preLoaderObserver.disconnect();
//         // productObserver.disconnect();
//         // preLoaderObserver.observe(preLoader);
//         // productObserver.observe(productsContainer);
//     } else {
//         hasScrolledToTop = false;
//         // containerObserverCallback([ { isIntersecting: true } ], containerObserver);
//     }
//     // updateUrl(scrollTop);

//     for (let i = 0; i < products.length; i++) {
//         const product = products[ i ];
//         const rank = parseInt(product.dataset.prank);

//         if (product.offsetTop > scrollTop && product.offsetTop < scrollTop + productsContainer.clientHeight) {
//             currentPage = Math.ceil(rank / productsPerPage);
//             break;
//         }
//     }

//     console.log("file: infiniteScrollV4.js:103 ~ document.addEventListener ~ currentUrlPage:", currentUrlPage)
//     console.log("file: infiniteScrollV4.js:103 ~ document.addEventListener ~ currentPage:", currentPage)

//     if (currentPage !== null && currentPage !== currentUrlPage) {
//         currentUrlPage = currentPage;
//         // window.history.replaceState({}, document.title, `?page=${currentPage}`);
//         if (this.options.pagination.usePageAndCount) {
//             urlParams.set('page', currentPage);
//         } else {
//             urlParams.set('start', (currentPage - 1) * productsPerPage);
//         }
//         history.replaceState(null, null, this.urlSearchParamsToStr(urlParams));
//     }
// }

const reRender = function () {
    const {
        onEvent,
        spellCheck,
        pagination,
        productType,
        searchBoxEl,
        loader,
        breadcrumb,
        productView,
        facet
    } = this.options;
    const {
        beforeRender,
        beforeNoResultRender,
        afterNoResultRender,
        afterRender
    } = this.events;

    onEvent(this, beforeRender);

    if (loader.el) {
        loader.el.innerHTML = ``;
    }
    const results = this.getSearchResults();
    const qParams = this.getQueryParams() || {};
    const query = this.getSearchQuery();
    const noResultCss = "UNX-no-results-wrap";
    const {
        lastAction,
        productViewType
    } = this.viewState;

    if (productType === "SEARCH" && searchBoxEl) {
        searchBoxEl.value = this.state.userInput;
    }

    if (productType !== "SEARCH" && searchBoxEl) {
        searchBoxEl.value = "";
    }
    const {
        searchResultsWrapper,
        paginationWrappers,
        breadcrumbWrapper
    } = this;
    const {
        noResultLoaded,
        isInfiniteStarted
    } = this.viewState;
    if (results && results.numberOfProducts === 0) {
        let redirect = this.state.responseObj.redirect || {};
        if (Object.keys(redirect).length) {
            return;
        }
        onEvent(this, beforeNoResultRender);
        this.viewState.noResultLoaded = true;
        searchResultsWrapper.classList.add(noResultCss);
        searchResultsWrapper.innerHTML = this.renderNoResults(query);
        if (!qParams.filter) {
            this.renderFacets();
        }
        onEvent(this, afterNoResultRender);
    } else {
        const viewCss = (productViewType === "LIST") ? "UNX-list-block" : "UNX-grid-block";
        searchResultsWrapper.classList.remove("UNX-list-block");
        searchResultsWrapper.classList.remove("UNX-grid-block");
        searchResultsWrapper.classList.add(viewCss);
        searchResultsWrapper.classList.remove(noResultCss);
        if (isInfiniteStarted) {
            this.viewState.isInfiniteStarted = false;
            if (noResultLoaded) {
                this.viewState.noResultLoaded = true;
                searchResultsWrapper.innerHTML = this.renderSearch();
            } else {
                if (lastAction === "prev_page_loaded") {
                    // searchResultsWrapper.innerHTML = this.renderSearch() + searchResultsWrapper.innerHTML;
                    // const scrollTop = window.pageYOffset
                    searchResultsWrapper.insertAdjacentHTML('afterbegin', this.renderSearch());
                    // const newHeight = container.scrollHeight;

                    const urlParams = new URLSearchParams(window.location.search);
                    let currentUrlPage, productsPerPage;
                    if (this.options.pagination.usePageAndCount) {
                        productsPerPage = Number(urlParams.get('count'));
                        currentUrlPage = Number(urlParams.get('page')) || 1
                    } else {
                        currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
                        productsPerPage = Number(urlParams.get('rows'));
                    }

                    document.querySelector(`.product-item[data-pRank="${(currentUrlPage * productsPerPage) + 1}"]`).scrollIntoView()
                } else {
                    // searchResultsWrapper.innerHTML += this.renderSearch();
                    searchResultsWrapper.insertAdjacentHTML('beforeend', this.renderSearch());
                }
            }
        } else {
            searchResultsWrapper.innerHTML = "";
            searchResultsWrapper.innerHTML = this.renderSearch();
        }
    }
    this.renderFacets();
    this.renderSelectedFacets();
    this.renderBannerUI();
    if (productView.enabled) {
        this.renderProductViewTypeUI();
    }
    this.renderPageSize();
    this.renderSort();

    if (breadcrumb.enabled) {
        breadcrumbWrapper.innerHTML = this.renderBreadCrumbs();
    }
    const suggestion = this.getSpellCheckSuggested();
    if (spellCheck.el) {
        this.renderDidYouMean(suggestion);
    }

    if (lastAction === "pagination") {
        pagination.onPaginate.bind(this)(this.getPaginationInfo());
    }

    const autoScrollParams = this.getAutoScrollParams();
    // if (pagination.type === 'INFINITE_SCROLL') {
    //     if (!this.productContainerHeight) {
    //         this.productContainerHeight = pagination.infiniteScrollTriggerEl.clientHeight;
    //         // if (autoScrollParams.get('start') != null) {
    //         //     if(this.options.pagination.usePageAndCount){
    //         //         this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('count')) + 1);
    //         //     } else {
    //         //         this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1);
    //         //     }

    //         // }

    //         if(this.options.pagination.usePageAndCount){
    //             if (autoScrollParams.get('page') != null) {
    //                 this.initialPage = parseInt(autoScrollParams.get('page'));
    //             }
    //         } else {
    //             if (autoScrollParams.get('start') != null) {
    //                 this.initialPage = (parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows')) + 1);
    //             }
    //         }
    //     }
    // }

    // if(pagination.type === "INFINITE_SCROLL") {
    //     if(window.intersectionObserver){
    //         window.intersectionObserver.observe(this.options.pagination.infiniteScrollTriggerEl.lastElementChild)
    //     }
    // }

    if (pagination.type !== "INFINITE_SCROLL") {
        paginationWrappers.forEach((pagination) => {
            pagination.innerHTML = this.renderPagination();
        });
    } 
    // else {
    //     // this.resetObservers(true)
    //     const postLoader = document.querySelector('.UNX-post-loader');
    //     const productsContainer = this.options.pagination.infiniteScrollTriggerEl;
    //     const preLoader = document.querySelector('.UNX-pre-loader');
    //     this.observer.disconnect();
    //     this.preLoaderObserver.disconnect();
    //     this.postLoaderObserver.disconnect();
    //     this.preLoaderObserver.observe(preLoader);
    //     this.postLoaderObserver.observe(postLoader);
    //     this.observer.observe(productsContainer, { childList: true, subtree: true });
    // }
    // else {
    //     if (paginationWrappers) {
    //         paginationWrappers.forEach((pagination) => {
    //             pagination.innerHTML = ``;
    //         });

    //     }
    //     // this.infiniteScrollV3()
    //     // this.renderInfiniteScrollPagination();

    //     // try {
    //     //     const productsContainer = document.querySelector('.UNX-product-list');
    //     //     //         const targetNode = productsContainer.querySelector('.UNX-search-results-block');
    //     //     const self = this;
    //     //     let infiniteScrollTimer;
    //     //     //         
    //     //     // productsContainer.removeEventListener('scroll', updateUrl2.bind(this));
    //     //     // productsContainer.addEventListener('scroll', function () {
    //     //     //     // this setTimeout and clearTimeout logic will ensure the callback is not called on every few seconds, 
    //     //     //     // instead it is called only when the user stops interacting with the scroll position
    //     //     //     // do not change this logic

    //     //     //     infiniteScrollTimer && clearTimeout(infiniteScrollTimer);
    //     //     //     infiniteScrollTimer = setTimeout(function () {
    //     //     //         if (!self.viewState.isInfiniteStarted && !self.state.loading) {
    //     //     //             updateUrl2(self);
    //     //     //         }
    //     //     //     }, 100)
    //     //     // });

    //     // } catch (err) {
    //     //     console.error('error', err)
    //     // }
    // }

    onEvent(this, afterRender);


};
export default reRender;
