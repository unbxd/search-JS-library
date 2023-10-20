// const getFirstPrank = (context) => {
//     if (context.searchResultsWrapper.children.length === 0) {
//       return null;
//     }

//     const firstPrank = parseInt(context.searchResultsWrapper.children[0].dataset.prank, 10);
//     return firstPrank;
//   }

const getLastPrank = (context) => {
    const products = context.searchResultsWrapper.children;
    if (products.length === 0) {
        return null;
    }

    const lastPrank = parseInt(products[ products.length - 1 ].dataset.prank, 10);
    return lastPrank;
}

const setUpInfiniteScroll = function () {
    try {
        return new Promise(() => {

            const {
                url: {
                    pageNoParam: {
                        // customize = false,
                        usePageNo = false
                    } = {},
                } = {},
                pagination: {
                    virtualization = true,
                    bufferPages = 1,
                    infiniteScrollTriggerEl
                }
            } = this.options;

            const paginationType = this.getPaginationType();

            this.resetObservers = () => {
                this.observer.disconnect();
                this.preLoaderObserver.disconnect();
                this.preLoaderObserver.observe(preLoader);
                if (paginationType === 'INFINITE_SCROLL') {
                    this.postLoaderObserver.disconnect();
                    this.postLoaderObserver.observe(postLoader);
                }
                this.observer.observe(productsContainer, { childList: true, subtree: true });
                return;
            }

            let productsContainer = window;
            if (paginationType === "INFINITE_SCROLL") {
                productsContainer = infiniteScrollTriggerEl
            } else if (paginationType === "CLICK_N_SCROLL") {
                productsContainer = this.options.products.el
            }
            const postLoader = document.querySelector('.UNX-post-loader');
            const preLoader = document.querySelector('.UNX-pre-loader');

            this.individualProductObserver = new IntersectionObserver(entries => {
                entries.forEach(entry => {
                    // Check if the product item is fully in view
                    if (entry.isIntersecting) {
                        // Get the prank value of the visible product item
                        const productIndex = parseInt(entry.target.dataset.prank);

                        let currentUrlPage = this.getCurrentUrlPage();
                        let productsPerPage = this.getProductsPerPage();

                        // Calculate the page number that the visible product belongs to
                        const currentPage = Math.ceil(productIndex / productsPerPage);
                        console.log('******before update*****')
                        // Update the current page number in the URL if necessary
                        if (currentPage !== currentUrlPage) {
                            console.log('----update -------')
                            if (usePageNo) {
                                this.setPageNoParam(currentPage);
                            } else {
                                this.setPageNoParam((currentPage - 1) * productsPerPage);
                            }

                            if (virtualization) {
                                // const bufferPages = 1;
                                const minPage = currentPage - bufferPages;
                                const maxPage = currentPage + bufferPages;
                                const minPrank = (minPage - 2) * productsPerPage;
                                const maxPrank = (maxPage + 1) * productsPerPage;

                                const productItems = document.querySelectorAll('.product-item');
                                productItems.forEach((productItem) => {
                                    const itemPrank = parseInt(productItem.dataset.prank, 10);
                                    //   const itemPage = parseInt(productItem.dataset.prank, 10);
                                    //   if (itemPage < minPage || itemPage > maxPage) {
                                    if (itemPrank <= minPrank || itemPrank > maxPrank) {
                                        productItem.remove();
                                    }
                                });
                            }

                        }
                    }
                });
            }, {
                threshold: [ 0, 0.5, 0.75, 1 ]
            });

            this.preLoaderObserver = new IntersectionObserver(entries => {
                let currentUrlPage = this.getCurrentUrlPage();
                entries.forEach(entry => {
                    if (entry.isIntersecting && currentUrlPage > 1 && !this.state.isLoading && !this.viewState.isInfiniteStarted) {
                        let productsPerPage = this.getProductsPerPage();
                        // this.renderNewResults('prev');
                        //     const firstPrank = getFirstPrank(this);
                        // console.log('firstPrank', firstPrank)
                        this.viewState.isInfiniteStarted = true;
                        const prevPrank = parseInt((currentUrlPage - 2) * productsPerPage, 10)
                        this.setPageStart(prevPrank);
                        this.getResults("", true, 'prev');
                    }
                });
            }, {
                threshold: 0, // Trigger when the element is fully visible in the viewport
                rootMargin: `0px 0px 0px 0px`, // Offset the root margin by the height of the products container
            });

            this.postLoaderObserver = new IntersectionObserver(entries => {
                if (entries[ 0 ].isIntersecting && !this.state.isLoading && !this.viewState.isInfiniteStarted) {
                    // this.renderNewResults('next');
                    // // akshay left here
                    // this.setPageStart((currentUrlPage - 1) * productsPerPage)
                    // this.getResults("", true, action);
                    this.viewState.isInfiniteStarted = true;
                    const lastPrank = getLastPrank(this);
                    console.log('lastPrank', lastPrank)
                    this.setPageStart(lastPrank);
                    this.getResults("", true, 'next');
                }
            }, {
                threshold: 0,
                rootMargin: `0px 0px 0px 0px`
            });

            // create an observer instance
            this.observer = new MutationObserver((mutationsList) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        const self = this;
                        mutation.addedNodes.forEach(function (node) {
                            if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('product-item')) {
                                self.individualProductObserver.observe(node)
                            }
                        });

                        this.resetObservers()
                    }
                }
            });

            this.preLoaderObserver.observe(preLoader);
            if (paginationType === 'INFINITE_SCROLL') {
                this.postLoaderObserver.observe(postLoader);
            }
            this.observer.observe(productsContainer, { childList: true, subtree: true });
        })
    } catch (err) {
        this.onError('infiniteScroller.js', err)
    }

}

export default setUpInfiniteScroll;