// const updateUrl = (scrollTop) => {
//     const products = document.querySelectorAll('.product-item');
//     let currentPage = null;
//     const productsContainer = this.options.pagination.infiniteScrollTriggerEl;

//     let currentUrlPage, productsPerPage;
//     if (this.options.pagination.usePageAndCount) {
//         productsPerPage = Number(urlParams.get('count'));
//         currentUrlPage = Number(urlParams.get('page')) || 1
//     } else {
//         currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
//         productsPerPage = Number(urlParams.get('rows'));
//     }

//     for (let i = 0; i < products.length; i++) {
//         const product = products[ i ];
//         const rank = parseInt(product.dataset.prank);

//         if (product.offsetTop > scrollTop && product.offsetTop < scrollTop + productsContainer.clientHeight) {
//             currentPage = Math.ceil(rank / productsPerPage);
//             break;
//         }
//     }

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

// const getCurrentPageNumber = (self, entries) => {
//     let currentPage = null;
//     const urlParams = new URLSearchParams(window.location.search);
//     let currentUrlPage, productsPerPage;
//     if (self.options.pagination.usePageAndCount) {
//         productsPerPage = Number(urlParams.get('count'));
//         currentUrlPage = Number(urlParams.get('page')) || 1
//     } else {
//         currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
//         productsPerPage = Number(urlParams.get('rows'));
//     }


//     entries.some((entry) => {
//         if (entry.isIntersecting) {
//             const itemIndex = parseInt(entry.target.dataset.prank, productsPerPage) - 1;
//             currentPage = Math.floor(itemIndex / productsPerPage) + 1;
//             return true;
//         }
//         return false;
//     });
//     return currentPage;
// }


// const observeNewProducts = (self) => {
//     // Get all of the product items
//     const productItems = document.querySelectorAll('.product-item');
//     const urlParams = new URLSearchParams(window.location.search);
//     let currentUrlPage, productsPerPage;
//     if (self.options.pagination.usePageAndCount) {
//         productsPerPage = Number(urlParams.get('count'));
//         currentUrlPage = Number(urlParams.get('page')) || 1
//     } else {
//         currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
//         productsPerPage = Number(urlParams.get('rows'));
//     }

//     // Set up an Intersection Observer to track when product items come into view
//     const observer = new IntersectionObserver(function (entries) {
//         // entries.forEach(function (entry) {
//         //     // Check if the product item is fully in view
//         //     if (entry.isIntersecting && entry.intersectionRatio === 1) {
//         //         // Get the prank value of the visible product item
//         //         const productIndex = parseInt(entry.target.dataset.prank);

//         //         // Calculate the page number that the visible product belongs to
//         //         const currentPage = Math.ceil(productIndex / productsPerPage);

//         //         // Update the current page number in the URL if necessary
//         //         if (currentPage !== currentUrlPage) {
//         //             currentPage = currentPage;
//         //             if (self.options.pagination.usePageAndCount) {
//         //                 urlParams.set('page', currentPage);
//         //             } else {
//         //                 urlParams.set('start', (currentPage - 1) * productsPerPage);
//         //             }
//         //             history.replaceState(null, null, self.urlSearchParamsToStr(urlParams));
//         //             // urlParams.set('page', currentPage);
//         //             // const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
//         //             // window.history.replaceState({path: newUrl}, '', newUrl);
//         //         }
//         //     }
//         // });


//         const currentPage = getCurrentPageNumber(self, entries);
//         console.log("file: infiniteScrollV4.js:112 ~ observer ~ currentPage:", currentPage)
//         if (currentPage !== null) {
//             // window.history.replaceState({}, document.title, `?${pageQueryParam}=${currentPage}`);
//             if (self.options.pagination.usePageAndCount) {
//                 urlParams.set('page', currentPage);
//             } else {
//                 urlParams.set('start', (currentPage - 1) * productsPerPage);
//             }
//             history.replaceState(null, null, self.urlSearchParamsToStr(urlParams));
//         }

//     });

//     // Observe each product item
//     productItems.forEach(function (productItem) {
//         observer.observe(productItem);
//     });
// }


const setUpInfiniteScroll = function () {
    return new Promise((resolve, reject) => {
        try {


            const productsContainer = this.options.pagination.infiniteScrollTriggerEl;
            const targetNode = productsContainer.querySelector('.UNX-search-results-block');
            const postLoader = document.querySelector('.UNX-post-loader');
            const preLoader = document.querySelector('.UNX-pre-loader');
            // const urlParams = new URLSearchParams(window.location.search);
            // let currentUrlPage, productsPerPage;
            // if (this.options.pagination.usePageAndCount) {
            //     productsPerPage = Number(urlParams.get('count'));
            //     currentUrlPage = Number(urlParams.get('page')) || 1
            // } else {
            //     currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
            //     productsPerPage = Number(urlParams.get('rows'));
            // }
            let hasScrolledToTop = false; // Initialize a flag to track whether the user has scrolled to the top of the container before


            // document.addEventListener('scroll', () => {
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
            // });

            const individualProductObserver = new IntersectionObserver(entries => {
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
                            currentUrlPage = Number(urlParams.get('page')) || 1
                        } else {
                            currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
                            productsPerPage = Number(urlParams.get('rows'));
                        }
                        // Calculate the page number that the visible product belongs to
                        const currentPage = Math.ceil(productIndex / productsPerPage);
                        console.log("file: infiniteScrollV4.js:216 ~ currentPage:", currentPage)
                        
                        // Update the current page number in the URL if necessary
                        if (currentPage !== currentUrlPage) {
                            console.error("file: infiniteScrollV4.js:221 ~ currentUrlPage:", currentUrlPage)
                            console.error("file: infiniteScrollV4.js:221 ~ currentPage:", currentPage)
                            // currentPage = currentPage;
                            // const urlParams = new URLSearchParams(window.location.search);
                            if (self.options.pagination.usePageAndCount) {
                                urlParams.set('page', currentPage);
                            } else {
                                urlParams.set('start', (currentPage - 1) * productsPerPage);
                            }
                            history.replaceState(null, null, self.urlSearchParamsToStr(urlParams));
                            // urlParams.set('page', currentPage);
                            // const newUrl = `${window.location.pathname}?${urlParams.toString()}${window.location.hash}`;
                            // window.history.replaceState({path: newUrl}, '', newUrl);
                        }
                    }
                });
            }, {
                threshold: [ 0.5, 0.75, 1]
            });

            const preLoaderObserver = new IntersectionObserver(entries => {
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
                    if (entry.isIntersecting && currentUrlPage > 1 && !hasScrolledToTop) {

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

            const postLoaderObserver = new IntersectionObserver(entries => {
                const urlParams = new URLSearchParams(window.location.search);
            let currentUrlPage, productsPerPage;
            if (this.options.pagination.usePageAndCount) {
                productsPerPage = Number(urlParams.get('count'));
                currentUrlPage = Number(urlParams.get('page')) || 1
            } else {
                currentUrlPage = Number(urlParams.get('start') / urlParams.get('rows')) + 1;
                productsPerPage = Number(urlParams.get('rows'));
            }
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
                rootMargin: `0px 0px ${productsContainer.offsetTop}px 0px`
            });


            // options for the observer (which mutations to observe)
            // const config = { childList: true };

            // // callback function to execute when mutations are observed
            // const callback = function(mutationsList, observer) {
            //     for(let mutation of mutationsList) {
            //         if (mutation.type === 'childList') {
            //             console.log('A child node has been added or removed.');
            //             // Do something here, for example, update your product list or apply some styles
            //         }
            //     }
            // };

            // create an observer instance
            const observer = new MutationObserver((mutationsList, observer) => {
                for (let mutation of mutationsList) {
                    if (mutation.type === 'childList') {
                        console.log('A child node has been added or removed.');
                        // Do something here, for example, update your product list or apply some styles
                        const self = this;
                        // for(const i = 0; i< mutation.addedNodes.length; i++){
                        //     const node = mutation.addedNodes[i];
                        //     if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('product-item')) {
                        //         // Observe the new product item

                        //         // individualProductObserver.disconnect()
                        //         individualProductObserver.observe(node)
                        //         // observeNewProducts(self);

                        //     }
                        // }
                        mutation.addedNodes.forEach(function (node) {
                            if (node.nodeType === Node.ELEMENT_NODE && node.classList.contains('product-item')) {
                                // Observe the new product item

                                // individualProductObserver.disconnect()
                                individualProductObserver.observe(node)
                                // observeNewProducts(self);

                            }
                        });
                        observer.disconnect();
                        preLoaderObserver.disconnect();
                        postLoaderObserver.disconnect();
                        preLoaderObserver.observe(preLoader);
                        postLoaderObserver.observe(postLoader);
                        observer.observe(targetNode, { childList: true });
                    }
                }
            });

            // observeNewProducts(this);

            // start observing the target node for configured mutations
            observer.observe(targetNode, { childList: true });
            preLoaderObserver.observe(preLoader);
            postLoaderObserver.observe(postLoader);

            // const containerObserver = new IntersectionObserver((entries) => {
            //     entries.forEach(entry => {
            //         if (entry.isIntersecting) {
            //             // If the pre-loader is visible, start observing it
            //             if (preLoader.offsetTop < entry.boundingClientRect.top && hasScrolledToTop) {
            //                 preLoaderObserver.observe(preLoader);
            //             }
            //             // If the post-loader is visible, start observing it
            //             if (postLoader.offsetTop < entry.boundingClientRect.bottom) {
            //                 postLoaderObserver.observe(postLoader);
            //             }
            //             const scrollTop = getScrollXY()[ 1 ];

            //         }
            //         // else {
            //         //     // If the container is not visible, stop observing both the pre-loader and post-loader elements
            //         //     preLoaderObserver.unobserve(preLoader);
            //         //     postLoaderObserver.unobserve(postLoader);
            //         // }
            //     });
            // }, {
            //     threshold: 0 // Trigger when the container is fully visible in the viewport
            // });

            // const productObserver = new ResizeObserver(entries => {
            //     entries.forEach(entry => {
            //         const containerHeight = entry.contentRect.height;
            //         // onInfiniteScrollCb();
            //         containerObserver.disconnect();
            //         // observer.observe(productContainer, { threshold: [ 1 ] });
            //         containerObserver.observe(productsContainer);
            //         // preLoaderObserver.disconnect();
            //         // preLoaderObserver.observe(preLoader);
            //         // postLoaderObserver.disconnect();
            //         postLoaderObserver.observe(postLoader);
            //     });
            // });

            // productObserver.disconnect();
            //     productObserver.observe(productsContainer);
        } catch (err) {
            console.error("file: infiniteScrollV4.js:61 ~ returnnewPromise ~ err:", err)
        }
    })

}

export default setUpInfiniteScroll;