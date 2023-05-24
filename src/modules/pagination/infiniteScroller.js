const setUpInfiniteScroll = function () {
    return new Promise((resolve, reject) => {
            this.resetObservers = () => {
                this.observer.disconnect();
                this.preLoaderObserver.disconnect();
                    this.preLoaderObserver.observe(preLoader);
                    if(this.options.pagination.type === 'INFINITE_SCROLL'){
                        this.postLoaderObserver.disconnect();
                        this.postLoaderObserver.observe(postLoader);
                    }
                this.observer.observe(productsContainer, { childList: true, subtree: true });
                return;
            }

            let productsContainer = window;
            if(this.options.pagination.type === "INFINITE_SCROLL"){
                productsContainer = this.options.pagination.infiniteScrollTriggerEl
            } else  if(this.options.pagination.type === "CLICK_N_SCROLL"){
                productsContainer = this.options.products.el
            }
            const postLoader = document.querySelector('.UNX-post-loader');
            const preLoader = document.querySelector('.UNX-pre-loader');
           
            this.individualProductObserver = new IntersectionObserver(entries => {
                const self = this;
                entries.forEach(entry => {
                    // Check if the product item is fully in view
                    if (entry.isIntersecting) {
                        // Get the prank value of the visible product item
                        const productIndex = parseInt(entry.target.dataset.prank);
                        const urlParams = new URLSearchParams(window.location.search);
                        let currentUrlPage, productsPerPage;
                        if (this.options.pagination.usePageAndCount) {
                            productsPerPage = Number(urlParams.get('count'));
                            currentUrlPage = Number(urlParams.get('page')) || 1;
                        } else {
                            currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
                            productsPerPage = Number(urlParams.get('rows'));
                        }
                        // Calculate the page number that the visible product belongs to
                        const currentPage = Math.ceil(productIndex / productsPerPage);

                        // Update the current page number in the URL if necessary
                        if (currentPage !== currentUrlPage) {
                            if (self.options.pagination.usePageAndCount) {
                                urlParams.set('page', currentPage);
                            } else {
                                urlParams.set('start', (currentPage - 1) * productsPerPage);
                            }
                            history.replaceState(null, null, self.urlSearchParamsToStr(urlParams));
                        }
                    }
                });
            }, {
                threshold: [ 1 ]
            });

            this.preLoaderObserver = new IntersectionObserver(entries => {
                const urlParams = new URLSearchParams(window.location.search);
                let currentUrlPage, productsPerPage;
                if (this.options.pagination.usePageAndCount) {
                    productsPerPage = Number(urlParams.get('count'));
                    currentUrlPage = Number(urlParams.get('page')) || 1
                } else {
                    currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
                    productsPerPage = Number(urlParams.get('rows'));
                }
                entries.forEach(entry => {
                    if (entry.isIntersecting && currentUrlPage > 1 && !this.state.isLoading && !this.viewState.isInfiniteStarted) {
                        this.renderNewResults('prev');
                    }
                });
            }, {
                threshold: 0, // Trigger when the element is fully visible in the viewport
                rootMargin: `0px 0px 0px 0px`, // Offset the root margin by the height of the products container
            });

            this.postLoaderObserver = new IntersectionObserver(entries => {
                if (entries[ 0 ].isIntersecting && !this.state.isLoading && !this.viewState.isInfiniteStarted) {
                    this.renderNewResults('next');
                }
            }, {
                threshold: 0,
                rootMargin: `0px 0px 0px 0px`
            });


            // create an observer instance
            this.observer = new MutationObserver((mutationsList, observer) => {
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
            if(this.options.pagination.type === 'INFINITE_SCROLL'){
                this.postLoaderObserver.observe(postLoader);
            }
            this.observer.observe(productsContainer, { childList: true, subtree: true });


    })

}

export default setUpInfiniteScroll;