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

function getDocHeight() {
    const D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

// const onInfiniteScroll = function () {
//     const {
//         heightDiffToTriggerNextPage
//     } = this.options.pagination;
//     if ((getDocHeight() - 20) <= (getScrollXY()[ 1 ] + window.innerHeight + heightDiffToTriggerNextPage)) {
//         if (!this.viewState.isInfiniteStarted && !this.state.loading) {
//         // if ( !this.state.loading) {
//             this.viewState.lastAction = "pagination";
//             this.renderNewResults('next');
//         }
//     } else {
//         if (!this.viewState.isInfiniteStarted && !this.state.loading) {
//         // if ( !this.state.loading) {
//             this.viewState.lastAction = "pagination";
//             this.renderNewResults('prev');
//         }
//     }
// };

// const getAutoScrollParams = function  (){
//     const autoScrollParams = new URLSearchParams(window.location.search)
//     return autoScrollParams;
// } 
// const onInfiniteScroll = function () {
//     const autoScrollParams = this.getAutoScrollParams();
//     // var wind = jQuery(window);
//     const page = Math.ceil(window.scrollY / this.productContainerHeight) + this.initialPage - 1;
//     const scroll = (window.scrollY > this.productContainerHeight) ? window.scrollY - this.productContainerHeight * (page - this.initialPage) : window.scrollY;
//     const device = this.getDeviceInfo();

//     if (device != 'Desktop' && window.scrollY < this.initialScroll && !this.mobileFlag) {
//         if (window.scrollY == 0) {
//             // jQuery('body, html').animate({scrollTop: initialScroll}, '0.1s');
//             window.scrollTo(0, this.initialScroll);
//         }
//         if (timer !== null) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             autoScrollParams.set('scroll', scroll);
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//         }, 50);
//         if (this.initialScroll != parseInt(autoScrollParams.get('scroll'))) {
//             this.mobileFlag = true;
//         }
//     } else {
//         if (this.productContainerHeight != 0) {
//             if (parseInt(autoScrollParams.get('page')) != page && page != 0) {
//                 autoScrollParams.set('page', page);
//                 // autoScrollParams.set('start', (page-1) * self.params.extra.rows + 1);
//                 // autoScrollParams.set('start', (page-1) * 12 + 1);
//                 history.pushState(null, null, '?' + autoScrollParams.toString())
//             }
//             // if(this.infiniteScrollTimer !== null) {
//             //     clearTimeout(this.infiniteScrollTimer);        
//             // }
//             // this.infiniteScrollTimer = setTimeout(function() {
//             autoScrollParams.set('scroll', Math.ceil(scroll));
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//             // }, 100);

//             // if(page < this.initialPage && !(page<1)){
//             //     const currentPage = this.getPage();
//             //     this.autoScrollPrepend = true;
//             //     this.setPage(page).callResults(this.paintProductPage);
//             //     this.initialPage = this.initialPage -1;
//             //     // jQuery('body, html').animate({scrollTop: this.productContainerHeight - 300}, '0.1s')
//             //     window.scrollTo(0,  this.productContainerHeight - 300);
//             //     this.setPage(currentPage);
//             // }

//             if (page < this.initialPage && !(page < 1)) {
//                 // const currentPage = this.getPage();
//                 this.autoScrollPrepend = true;
//                 // this.setPage(page).callResults(this.paintProductPage);
//                 this.renderNewResults('prev');
//                 this.viewState.lastAction = "prev_page_loaded";
//                 this.initialPage = this.initialPage - 1;
//                 // jQuery('body, html').animate({scrollTop: this.productContainerHeight - 300}, '0.1s')
//                 window.scrollTo(0, this.productContainerHeight - 300);
//                 // this.setPage(currentPage);
//                 autoScrollParams.set('page', page);
//                 history.pushState(null, null, '?' + autoScrollParams.toString());
//             }

//             // if ((window.scrollY) <  300 && page > 1 && this.currentNumberOfProducts < this.totalNumberOfProducts && !this.state.loading) {
//             //     autoScrollParams.set('page', parseInt(autoScrollParams.get('page')) + 1);
//             //     this.setPageStart(parseInt(autoScrollParams.get('page')) - 1)
//             //     this.renderNewResults('prev');
//             //     history.pushState(null, null, '?' + autoScrollParams.toString());
//             //     // this.setPage(this.getPage() + 1).callResults(this.paintProductPage);
//             // }
//         }
//         if ((window.scrollY + 300) > document.getElementById('searchResultsWrapper').clientHeight - 300 && this.currentNumberOfProducts < this.totalNumberOfProducts && !this.state.loading) {
//             this.setPageStart(parseInt(autoScrollParams.get('page')) + 1)
//             // autoScrollParams.set('page', parseInt(autoScrollParams.get('page')));
//             // history.pushState(null, null, '?' + autoScrollParams.toString());
//             this.viewState.lastAction = "next_page_loaded";
//             this.renderNewResults('next');
//             // this.setPage(this.getPage() + 1).callResults(this.paintProductPage);
//         }


//     }
// }


/////
// second version //////////////////////////////////
////////////////////////////////
// const onInfiniteScroll = function () {
//     const autoScrollParams = this.getAutoScrollParams();
//     // var wind = jQuery(window);
//     const page = Math.ceil(window.scrollY / this.productContainerHeight) + this.initialPage - 1;
//     const scroll = (window.scrollY > this.productContainerHeight) ? window.scrollY - this.productContainerHeight * (page - this.initialPage) : window.scrollY;
//     const device = this.getDeviceInfo();

//     if (device != 'Desktop' && window.scrollY < this.initialScroll && !this.mobileFlag) {
//         if (window.scrollY == 0) {
//             // jQuery('body, html').animate({scrollTop: initialScroll}, '0.1s');
//             window.scrollTo(0, this.initialScroll);
//         }
//         if (timer !== null) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             autoScrollParams.set('scroll', scroll);
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//         }, 50);
//         if (this.initialScroll != parseInt(autoScrollParams.get('scroll'))) {
//             this.mobileFlag = true;
//         }
//     } else {
//         if (this.productContainerHeight != 0) {
//             // if (parseInt(autoScrollParams.get('page')) != page && page != 0) {
//             if ((parseInt(autoScrollParams.get('start'))/parseInt(autoScrollParams.get('rows'))) + 1 != page && page != 0) {
//                 autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
//                 // autoScrollParams.set('start', (page-1) * self.params.extra.rows + 1);
//                 // autoScrollParams.set('start', (page-1) * 12 + 1);
//                 history.pushState(null, null, '?' + autoScrollParams.toString())
//             }
//             // if(this.infiniteScrollTimer !== null) {
//             //     clearTimeout(this.infiniteScrollTimer);        
//             // }
//             // this.infiniteScrollTimer = setTimeout(function() {
//             autoScrollParams.set('scroll', Math.ceil(scroll));
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//             // }, 100);

//             // if(page < this.initialPage && !(page<1)){
//             //     const currentPage = this.getPage();
//             //     this.autoScrollPrepend = true;
//             //     this.setPage(page).callResults(this.paintProductPage);
//             //     this.initialPage = this.initialPage -1;
//             //     // jQuery('body, html').animate({scrollTop: this.productContainerHeight - 300}, '0.1s')
//             //     window.scrollTo(0,  this.productContainerHeight - 300);
//             //     this.setPage(currentPage);
//             // }

//             if (page < this.initialPage && !(page < 1)) {
//                 // const currentPage = this.getPage();
//                 this.autoScrollPrepend = true;
//                 // this.setPage(page).callResults(this.paintProductPage);
//                 this.renderNewResults('prev');
//                 this.viewState.lastAction = "prev_page_loaded";
//                 this.initialPage = this.initialPage - 1;
//                 // jQuery('body, html').animate({scrollTop: this.productContainerHeight - 300}, '0.1s')
//                 window.scrollTo(0, this.productContainerHeight - 100);
//                 // this.setPage(currentPage);
//                 // autoScrollParams.set('page', page);
//                 autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
//                 history.pushState(null, null, '?' + autoScrollParams.toString());
//             }

//             // if ((window.scrollY) <  300 && page > 1 && this.currentNumberOfProducts < this.totalNumberOfProducts && !this.state.loading) {
//             //     autoScrollParams.set('page', parseInt(autoScrollParams.get('page')) + 1);
//             //     this.setPageStart(parseInt(autoScrollParams.get('page')) - 1)
//             //     this.renderNewResults('prev');
//             //     history.pushState(null, null, '?' + autoScrollParams.toString());
//             //     // this.setPage(this.getPage() + 1).callResults(this.paintProductPage);
//             // }
//         }
//         if ((window.scrollY + 100) > infiniteScrollTriggerEl.clientHeight - 100 && this.currentNumberOfProducts < this.totalNumberOfProducts && !this.state.loading) {
//             // this.setPageStart(parseInt(autoScrollParams.get('page')) + 1)
//             // this.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')) )
//             autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//             this.viewState.lastAction = "next_page_loaded";
//             this.renderNewResults('next');
//             // this.setPage(this.getPage() + 1).callResults(this.paintProductPage);
//         }


//     }
// }


// const onInfiniteScroll = function () {
//     const autoScrollParams = this.getAutoScrollParams();
//     // var wind = jQuery(window);
//     const page = Math.ceil(window.scrollY / this.productContainerHeight) + this.initialPage - 1;
//     const scroll = (window.scrollY > this.productContainerHeight) ? window.scrollY - this.productContainerHeight * (page - this.initialPage) : window.scrollY;
//     const device = this.getDeviceInfo();

//     if (device != 'Desktop' && window.scrollY < this.initialScroll && !this.mobileFlag) {
//         if (window.scrollY == 0) {
//             // jQuery('body, html').animate({scrollTop: initialScroll}, '0.1s');
//             window.scrollTo(0, this.initialScroll);
//         }
//         if (timer !== null) {
//             clearTimeout(timer);
//         }
//         timer = setTimeout(function () {
//             autoScrollParams.set('scroll', scroll);
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//         }, 50);
//         if (this.initialScroll != parseInt(autoScrollParams.get('scroll'))) {
//             this.mobileFlag = true;
//         }
//     } else {
//         if (this.productContainerHeight != 0) {
//             // if (parseInt(autoScrollParams.get('page')) != page && page != 0) {
//             if ((parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows'))) + 1 != page && page != 0) {
//                 autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
//                 // autoScrollParams.set('start', (page-1) * self.params.extra.rows + 1);
//                 // autoScrollParams.set('start', (page-1) * 12 + 1);
//                 history.pushState(null, null, '?' + autoScrollParams.toString())
//             }
//             // if(this.infiniteScrollTimer !== null) {
//             //     clearTimeout(this.infiniteScrollTimer);        
//             // }
//             // this.infiniteScrollTimer = setTimeout(function() {
//             autoScrollParams.set('scroll', Math.ceil(scroll));
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//             // }, 100);

//             // if(page < this.initialPage && !(page<1)){
//             //     const currentPage = this.getPage();
//             //     this.autoScrollPrepend = true;
//             //     this.setPage(page).callResults(this.paintProductPage);
//             //     this.initialPage = this.initialPage -1;
//             //     // jQuery('body, html').animate({scrollTop: this.productContainerHeight - 300}, '0.1s')
//             //     window.scrollTo(0,  this.productContainerHeight - 300);
//             //     this.setPage(currentPage);
//             // }

//             if (page < this.initialPage && !(page < 1)) {
//                 // const currentPage = this.getPage();
//                 this.autoScrollPrepend = true;
//                 // this.setPage(page).callResults(this.paintProductPage);
//                 this.renderNewResults('prev');
//                 this.viewState.lastAction = "prev_page_loaded";
//                 this.initialPage = this.initialPage - 1;
//                 // jQuery('body, html').animate({scrollTop: this.productContainerHeight - 300}, '0.1s')
//                 window.scrollTo(0, this.productContainerHeight - 100);
//                 // this.setPage(currentPage);
//                 // autoScrollParams.set('page', page);
//                 autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
//                 history.pushState(null, null, '?' + autoScrollParams.toString());
//             }

//             // if ((window.scrollY) <  300 && page > 1 && this.currentNumberOfProducts < this.totalNumberOfProducts && !this.state.loading) {
//             //     autoScrollParams.set('page', parseInt(autoScrollParams.get('page')) + 1);
//             //     this.setPageStart(parseInt(autoScrollParams.get('page')) - 1)
//             //     this.renderNewResults('prev');
//             //     history.pushState(null, null, '?' + autoScrollParams.toString());
//             //     // this.setPage(this.getPage() + 1).callResults(this.paintProductPage);
//             // }
//         }
//         if ((window.scrollY + 100) > infiniteScrollTriggerEl.clientHeight - 100 && this.currentNumberOfProducts < this.totalNumberOfProducts && !this.state.loading) {
//             // this.setPageStart(parseInt(autoScrollParams.get('page')) + 1)
//             // this.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')) )
//             autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
//             history.pushState(null, null, '?' + autoScrollParams.toString());
//             this.viewState.lastAction = "next_page_loaded";
//             this.renderNewResults('next');
//             // this.setPage(this.getPage() + 1).callResults(this.paintProductPage);
//         }
//     }
// }

const updatePageStart = function (context, page) {
    const autoScrollParams = context.getAutoScrollParams();
    context.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')))
    autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
    history.pushState(null, null, '?' + autoScrollParams.toString());
}


const onInfiniteScroll = function () {
    const { infiniteScrollTriggerEl = window, type = "" } = this.options.pagination;
    const scrollTop = getScrollXY()[ 1 ];
    const autoScrollParams = this.getAutoScrollParams();
    const page = Math.ceil(scrollTop / this.productContainerHeight) + this.initialPage - 1;
    const scroll = (scrollTop > this.productContainerHeight) ? scrollTop - this.productContainerHeight * (page - this.initialPage) : scrollTop;
    // const device = this.getDeviceInfo();
    const currentNumberOfProducts = window.unbxdSearch.state.responseObj.response.products.length;
    const totalNumberOfProducts = window.unbxdSearch.state.responseObj.response.numberOfProducts;

    if (this.productContainerHeight != 0) {
        autoScrollParams.set('scroll', Math.ceil(scroll));
        history.pushState(null, null, '?' + autoScrollParams.toString());

        if ((getDocHeight() - 20) <= (scrollTop + window.innerHeight) && currentNumberOfProducts < totalNumberOfProducts && !this.state.loading) {
            // alert('end reached');
            updatePageStart(this, page)
            this.viewState.lastAction = "next_page_loaded";
            // this.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')))
            // autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
            // history.pushState(null, null, '?' + autoScrollParams.toString());
            this.renderNewResults('next');
        } else if (scrollTop <= 0 && page < this.initialPage && !(page < 1) && !this.state.loading) {
            // alert('Top reached');
            // if (page < this.initialPage && !(page < 1) && !this.state.loading) {
            // const currentPage = this.getPage();
            // this.autoScrollPrepend = true;
            // this.setPage(page).callResults(this.paintProductPage);

            // jQuery('body, html').animate({scrollTop: this.productContainerHeight - 300}, '0.1s')
            // window.scrollTo(0, this.productContainerHeight - 100);
            // this.setPage(currentPage);
            // autoScrollParams.set('page', page);
            updatePageStart(this, page)
            // this.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')))
            // autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
            // history.pushState(null, null, '?' + autoScrollParams.toString());
            this.viewState.lastAction = "prev_page_loaded";
            this.initialPage = this.initialPage - 1;
            this.renderNewResults('prev');
            // }
        }
        else if ((parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows'))) + 1 != page && page != 0) {
            updatePageStart(this, page)
            // this.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')))
            // autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
            // // autoScrollParams.set('start', (page-1) * self.params.extra.rows + 1);
            // // autoScrollParams.set('start', (page-1) * 12 + 1);
            // history.pushState(null, null, '?' + autoScrollParams.toString())
        }
    }

    // if (getScrollXY()[ 1 ] + infiniteScrollTriggerEl.clientHeight >= infiniteScrollTriggerEl.scrollHeight) {
    //     alert('end reached');
    // } else if (getScrollXY()[ 1 ] <= 0) {
    //     alert('Top reached');
    // } 
}
export default onInfiniteScroll;
