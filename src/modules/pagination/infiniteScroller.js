const setUpInfiniteScroll = function () {
    try {
        return new Promise(() => {

            const {
                url: {
                    pageNoParam: {
                        usePageNo = false
                    } = {},
                } = {},
                pagination: {
                    virtualization = true,
                    bufferPages = 1,
                    infiniteScrollTriggerEl
                },
                products: {
                    productItemClass
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
                    if (entry.isIntersecting) {
                        const productIndex = parseInt(entry.target.dataset.prank);

                        let currentUrlPage = this.getCurrentUrlPage();
                        let productsPerPage = this.getProductsPerPage();

                        const currentPage = Math.ceil(productIndex / productsPerPage);
                        if (currentPage !== currentUrlPage) {
                            if (usePageNo) {
                                this.setPageNoParam(currentPage);
                            } else {
                                this.setPageNoParam((currentPage - 1) * productsPerPage);
                            }

                            if (virtualization) {
                                const minPage = currentPage - bufferPages;
                                const maxPage = currentPage + bufferPages;
                                const minPrank = (minPage - 2) * productsPerPage;
                                const maxPrank = (maxPage + 1) * productsPerPage;

                                const productItems = document.querySelectorAll(`.${productItemClass}`);
                                productItems.forEach((productItem) => {
                                    const itemPrank = parseInt(productItem.dataset.prank, 10);
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
                    const isPrevPagePresent = usePageNo ? currentUrlPage > 1 : this.getFirstPrank() !== 1;
                    if (entry.isIntersecting && isPrevPagePresent && !this.state.isLoading && !this.viewState.isInfiniteStarted) {
                        let productsPerPage = this.getProductsPerPage();
                        this.viewState.isInfiniteStarted = true;
                        let prevPrank;
                        if (usePageNo) {
                            prevPrank = parseInt((currentUrlPage - 2) * productsPerPage, 10);
                        } else {
                            let startPrank = this.getFirstPrank() - productsPerPage - 1;
                            if (startPrank <0) { startPrank = 0}
                            prevPrank = parseInt(startPrank, 10);
                        }
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
                    this.viewState.isInfiniteStarted = true;
                    const lastPrank = this.getLastPrank();
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
                            if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains(`${productItemClass}`)) {
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