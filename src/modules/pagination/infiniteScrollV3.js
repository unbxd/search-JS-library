function getScrollXY() {
    var scrOfX = 0;
    var scrOfY = 0;
    if (typeof (window.pageYOffset) == 'number') {
        //Netscape compliant
        scrOfY = window.pageYOffset;
        scrOfX = window.pageXOffset;
    } else if (document.body && (document.body.scrollLeft || document.body.scrollTop)) {
        //DOM compliant
        scrOfY = document.body.scrollTop;
        scrOfX = document.body.scrollLeft;
    } else if (document.documentElement && (document.documentElement.scrollLeft || document.documentElement.scrollTop)) {
        //IE6 standards compliant mode
        scrOfY = document.documentElement.scrollTop;
        scrOfX = document.documentElement.scrollLeft;
    }
    return [ scrOfX, scrOfY ];
}



const infiniteScrollV3 = function () {
    return new Promise((resolve, reject) => {
        const productsContainer = this.options.pagination.infiniteScrollTriggerEl;
        const postLoader = document.querySelector('.UNX-post-loader');
        const preLoader = document.querySelector('.UNX-pre-loader');
        const urlParams = new URLSearchParams(window.location.search);
        let currentUrlPage, productsPerPage;
        if (this.options.pagination.usePageAndCount) {
            productsPerPage = Number(urlParams.get('count'));
            currentUrlPage = Number(urlParams.get('page')) || 1
        } else {
            currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
            productsPerPage = Number(urlParams.get('rows'));
        }
        let hasScrolledToTop = false; // Initialize a flag to track whether the user has scrolled to the top of the container before

        // const observer = new IntersectionObserver(entries => {
        //     entries.forEach(entry => {
        //         if (entry.isIntersecting && !this.state.isLoading) {
        //                 currentPage++;
        //                 // fetchProducts();
        //                 this.setPageStart((currentPage - 1) * productsPerPage)
        //                 this.viewState.lastAction = "next_page_loaded";
        //                 this.renderNewResults('next', currentPage);

        //         }
        //     });
        // }, {threshold: [0.5]});

        // observer.observe(productsContainer);


        const updateUrl = (scrollTop) => {
            const products = document.querySelectorAll('.product-item');
            let currentPage = null;

            for (let i = 0; i < products.length; i++) {
                const product = products[ i ];
                const rank = parseInt(product.dataset.prank);

                if (product.offsetTop > scrollTop && product.offsetTop < scrollTop + productsContainer.clientHeight) {
                    currentPage = Math.ceil(rank / productsPerPage);
                    break;
                }
            }

            if (currentPage !== null && currentPage !== currentUrlPage) {
                currentUrlPage = currentPage;
                // window.history.replaceState({}, document.title, `?page=${currentPage}`);
                if (this.options.pagination.usePageAndCount) {
                    urlParams.set('page', currentPage);
                } else {
                    urlParams.set('start', (currentPage - 1) * productsPerPage);
                }
                history.replaceState(null, null, this.urlSearchParamsToStr(urlParams));
            }
        }

        const postLoaderObserver = new IntersectionObserver(entries => {
            if (entries[ 0 ].isIntersecting) {
                //   // Increment the current page number
                //   currentPage++;
                //   // Fetch more products from the next page
                //   fetchProducts(currentPage);
                currentUrlPage++;
                // fetchProducts();
                this.setPageStart((currentUrlPage - 1) * productsPerPage)
                this.viewState.lastAction = "next_page_loaded";
                this.renderNewResults('next', currentUrlPage);
            }
        }, {
            threshold: 1,
            rootMargin: `0px 0px 100px 0px`
        });

        //   // Create a new IntersectionObserver object for the UNX-pre-loader element
        //   const preLoaderObserver = new IntersectionObserver(entries => {
        //     // Check if the UNX-pre-loader element is intersecting with the viewport
        //     if (entries[0].isIntersecting && currentPage > 1) {
        //     //   // Decrement the current page number
        //     //   currentPage--;
        //     //   // Fetch previous page products
        //     //   fetchProducts(currentPage);
        //     currentPage--;
        //                 // fetchProducts();
        //                 this.setPageStart((currentPage - 1) * productsPerPage)
        //                 this.viewState.lastAction = "prev_page_loaded";
        //                 this.renderNewResults('prev');
        //     }
        //   }, { threshold: 1 });

        const preLoaderObserver = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting && currentUrlPage > 1 && hasScrolledToTop) {
                    currentUrlPage--;
                    // fetchProducts();
                    this.setPageStart((currentUrlPage - 1) * productsPerPage)
                    this.viewState.lastAction = "prev_page_loaded";
                    this.renderNewResults('prev');
                    hasScrolledToTop = false
                }
            });
        }, {
            threshold: 0, // Trigger when the element is fully visible in the viewport
            rootMargin: `-${productsContainer.offsetTop}px 0px 0px 0px`, // Offset the root margin by the height of the products container
        });


        //   postLoaderObserver.observe(postLoader);
        // preLoaderObserver.observe(preLoader);

        const containerObserverCallback = (entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // If the pre-loader is visible, start observing it
                    if (preLoader.offsetTop < entry.boundingClientRect.top && hasScrolledToTop) {
                        preLoaderObserver.observe(preLoader);
                    }
                    // If the post-loader is visible, start observing it
                    if (postLoader.offsetTop < entry.boundingClientRect.bottom) {
                        postLoaderObserver.observe(postLoader);
                    }
                    const scrollTop = getScrollXY()[ 1 ];

                }
                // else {
                //     // If the container is not visible, stop observing both the pre-loader and post-loader elements
                //     preLoaderObserver.unobserve(preLoader);
                //     postLoaderObserver.unobserve(postLoader);
                // }
            });
        }

        const containerObserver = new IntersectionObserver(containerObserverCallback, {
            threshold: 0 // Trigger when the container is fully visible in the viewport
        });

        window.removeEventListener('scroll', onInfiniteScrollCb);
        window.addEventListener('scroll', onInfiniteScrollCb);

        const productObserver = new ResizeObserver(entries => {
            entries.forEach(entry => {
                const containerHeight = entry.contentRect.height;
                // onInfiniteScrollCb();
                containerObserver.disconnect();
                // observer.observe(productContainer, { threshold: [ 1 ] });
                containerObserver.observe(productsContainer);
                // preLoaderObserver.disconnect();
                // preLoaderObserver.observe(preLoader);
                postLoaderObserver.disconnect();
                postLoaderObserver.observe(postLoader);
            });
        });

        // postLoaderObserver.observe(postLoader);
        // preLoaderObserver.observe(preLoader);
        // Observe the container element

        // function onInfiniteResizeCb(e){
        //     productObserver.disconnect();
        //     productObserver.observe(productsContainer);
        // }

        function onInfiniteScrollCb() {
            const scrollTop = getScrollXY()[ 1 ];
            updateUrl(scrollTop);
            if (scrollTop === 0) {
                hasScrolledToTop = true;
                // preLoaderObserver.disconnect();
                productObserver.disconnect();
                // preLoaderObserver.observe(preLoader);
                productObserver.observe(productsContainer);
            } else {
                hasScrolledToTop = false;
                // containerObserverCallback([ { isIntersecting: true } ], containerObserver);
            }
            // productObserver.observe(productsContainer);
            // containerObserver.observe(productsContainer);
        }

        // containerObserver.observe(productsContainer);
        productObserver.disconnect();
        productObserver.observe(productsContainer);
        // Manually trigger the container observer callback function on page load
        // containerObserverCallback([ { isIntersecting: true } ], containerObserver);
    })
}

export default infiniteScrollV3;