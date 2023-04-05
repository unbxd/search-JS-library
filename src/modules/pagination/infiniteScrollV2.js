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

const renderInfiniteScrollPagination = function () {
    const productContainer = this.options.pagination.infiniteScrollTriggerEl;
    // const loadingIndicator = document.querySelector('#loading-indicator');
    const urlParams = new URLSearchParams(window.location.search);
    let currentPage = Number(urlParams.get('page')) || 1;
    const productsPerPage = Number(urlParams.get('count')) || 10;
    let isLoading = false;

    // fetch products based on the current page number
    // function fetchProducts() {
    //     isLoading = true;
    //     loadingIndicator.style.display = 'block';

    //     // make a fetch request to get the products for the current page
    //     fetch(`https://example.com/api/products?page=${currentPage}&count=${productsPerPage}`)
    //         .then(response => response.json())
    //         .then(products => {
    //             isLoading = false;
    //             loadingIndicator.style.display = 'none';

    //             // render the products in the container
    //             products.forEach(product => {
    //                 const productElement = document.createElement('div');
    //                 productElement.classList.add('product');
    //                 productElement.dataset.index = product.index;
    //                 productElement.innerHTML = `
    //           <img src="${product.image}" alt="${product.name}">
    //           <h3>${product.name}</h3>
    //           <p>${product.price}</p>
    //         `;
    //                 productContainer.appendChild(productElement);
    //             });
    //         })
    //         .catch(error => {
    //             isLoading = false;
    //             loadingIndicator.style.display = 'none';
    //             console.error('Error fetching products:', error);
    //         });
    // }

////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////
    // intersectionObserver = new IntersectionObserver((entries) => {
    //     entries.forEach(entry => {
    //       if (entry.isIntersecting && !this.state.isLoading) {
    //                         currentPage++;
    //                 // fetchProducts();
    //                 this.setPageStart((currentPage - 1) * productsPerPage)
    //                 this.viewState.lastAction = "next_page_loaded";
    //                 this.renderNewResults('next', currentPage);
    //       }
    //     });
    //   }, { rootMargin: '0px 0px -200px 0px', threshold: [0.5] });
      
    // //   intersectionObserver.observe(productContainer);


    //   const productObserver = new ResizeObserver(entries => {
    //     entries.forEach(entry => {
    //         const containerHeight = entry.contentRect.height;
    //         intersectionObserver.disconnect();
    //         intersectionObserver.observe(productContainer.lastElementChild);
    //         // intersectionObserver.observe(productContainer, { rootMargin: '0px 0px -200px 0px', threshold: [0.7] });
    //     });
    // });

    // productObserver.observe(productContainer.lastElementChild);

    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////////////////
    // initialize the Intersection Observer
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !this.state.isLoading) {

                let currentProducts = 0;
                let totalProducts = 0;
                const scrollTop = getScrollXY()[ 1 ];
                // const elHeight = entry.boundingClientRect.height || 0;
                const elHeight = productContainer.clientHeight || 0;

                const productResponse = window.unbxdSearch.state.responseObj.response || {};
                if(productResponse){
                    currentProducts = (productResponse.products) ? productResponse.products.length : 0;
                    totalProducts = productResponse.numberOfProducts || 0;
                }

                // fetch next page products when we hit the bottom 100 pixels of the products container
                // if (entry.boundingClientRect.bottom <= productContainer.getBoundingClientRect().bottom + 100 &&
                // currentProducts < totalProducts) {
                if (entry.boundingClientRect.bottom <= productContainer.getBoundingClientRect().bottom + 100 &&
                currentProducts < totalProducts) {
                // if (scrollTop + window.innerHeight >= elHeight - this.options.pagination.heightDiffToTriggerNextPage &&
                //     scrollTop + window.innerHeight < elHeight &&
                //     currentProducts < totalProducts &&
                //     !this.state.isLoading) {
                    currentPage++;
                    // fetchProducts();
                    this.setPageStart((currentPage - 1) * productsPerPage)
                    this.viewState.lastAction = "next_page_loaded";
                    this.renderNewResults('next', currentPage);
                }
                // fetch previous page products on scroll to top of the page if the page number is greater than 1
                // else if (entry.boundingClientRect.top >= productContainer.getBoundingClientRect().top && currentPage > 1) {
                else if (scrollTop <= 0 && currentPage > 1  && !this.state.isLoading) {
                    currentPage--;
                    // fetchProducts();
                    this.setPageStart((currentPage - 1) * productsPerPage)
                    this.viewState.lastAction = "prev_page_loaded";
                    this.renderNewResults('prev');
                }

                // update URL with the current page number
                const visibleProducts = document.querySelectorAll('.product-item');
                const firstIndex = Number(visibleProducts[ 0 ].dataset.prank);
                const lastIndex = Number(visibleProducts[ visibleProducts.length - 1 ].dataset.prank);
                const currentRange = Math.floor(firstIndex / productsPerPage) + 1;
                if (currentPage !== currentRange) {
                    // history.replaceState({}, '', `?page=${currentRange}`);
                    urlParams.set('page', currentRange);
                    history.replaceState(null, null, this.urlSearchParamsToStr(urlParams));
                }
            }
        });
    });

    // observe changes in the height of the products container and update the threshold value accordingly
    const productObserver = new ResizeObserver(entries => {
        entries.forEach(entry => {
            const containerHeight = entry.contentRect.height;
            observer.disconnect();
            // observer.observe(productContainer, { threshold: [ 1 ] });
            observer.observe(productContainer);
        });
    });

    // start fetching products for the initial page
    // fetchProducts();

    // start observing changes in the height of the products container
    productObserver.observe(productContainer);
}

export default renderInfiniteScrollPagination;