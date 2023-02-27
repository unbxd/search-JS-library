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

const updatePageStart = function (context, page) {
    const autoScrollParams = context.getAutoScrollParams();
    context.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')))
    autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
    history.replaceState(null, null, '?' + autoScrollParams.toString());
}

const onInfiniteScroll = function () {
    const scrollTop = getScrollXY()[ 1 ];
    const rect = this.options.pagination.infiniteScrollTriggerEl.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > window.innerHeight) {
        console.log('outttttttt', 'background: #222; color: #bada55')
    } else if (this.productContainerHeight != 0) {
        const autoScrollParams = this.getAutoScrollParams();
        const page = Math.ceil(scrollTop / this.productContainerHeight) + this.initialPage - 1;
        const currentProducts = window.unbxdSearch.state.responseObj.response.products.length;
        const totalProducts = window.unbxdSearch.state.responseObj.response.numberOfProducts;

        if (scrollTop + window.innerHeight >= document.getElementById('searchResultsWrapper').clientHeight - this.options.pagination.heightDiffToTriggerNextPage &&
            scrollTop + window.innerHeight < document.getElementById('searchResultsWrapper').clientHeight &&
            currentProducts < totalProducts &&
            !this.state.loading) {
            updatePageStart(this, page + 1);
            this.viewState.lastAction = "next_page_loaded";
            this.renderNewResults('next');
        } else if (scrollTop <= 0 && page < this.initialPage && !(page < 1) && !this.state.loading) {
            updatePageStart(this, page)
            this.viewState.lastAction = "prev_page_loaded";
            this.initialPage = this.initialPage - 1;
            this.renderNewResults('prev');
        }
        if ((parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows'))) + 1 != page && page != 0) {
            updatePageStart(this, page);
        }
    }

}
export default onInfiniteScroll;
