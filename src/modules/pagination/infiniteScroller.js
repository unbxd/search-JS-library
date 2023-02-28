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

// update the start position in the URL
const updatePageStart = function (context, page) {
    const autoScrollParams = context.getAutoScrollParams();
    context.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')))
    autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
    history.replaceState(null, null, context.getUrlStr('?' + autoScrollParams.toString()));
}

// callback on page scroll 
const onInfiniteScroll = function () {
    const scrollTop = getScrollXY()[ 1 ];
    const rect = this.options.pagination.infiniteScrollTriggerEl.getBoundingClientRect();
    // check if the products container is visible in the viewport and height is initialized
    if (this.productContainerHeight != 0 && (rect.bottom > 0 || rect.top < window.innerHeight)) {
        const autoScrollParams = this.getAutoScrollParams();
        const page = Math.ceil(scrollTop / this.productContainerHeight) + this.initialPage - 1;
        const currentProducts = window.unbxdSearch.state.responseObj.response.products.length;
        const totalProducts = window.unbxdSearch.state.responseObj.response.numberOfProducts;

        if (scrollTop + window.innerHeight >= document.getElementById('searchResultsWrapper').clientHeight - this.options.pagination.heightDiffToTriggerNextPage &&
            scrollTop + window.innerHeight < document.getElementById('searchResultsWrapper').clientHeight &&
            currentProducts < totalProducts &&
            !this.state.loading) {
            // fetch next page when user scrolls to the bottom of threshold zone
            updatePageStart(this, page + 1);
            this.viewState.lastAction = "next_page_loaded";
            this.renderNewResults('next');
        } else if (scrollTop <= 0 && page < this.initialPage && !(page < 1) && !this.state.loading) {
            // fetch previous page
            updatePageStart(this, page)
            this.viewState.lastAction = "prev_page_loaded";
            this.initialPage = this.initialPage - 1;
            this.renderNewResults('prev');
        }
        if ((parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows'))) + 1 != page && page != 0) {
            // update page number in the URL as user scrolls up and down
            updatePageStart(this, page);
        }
    }
}
export default onInfiniteScroll;
