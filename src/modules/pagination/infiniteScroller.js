import debounce from '../utils/debounce';

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


const updatePageStart = function (context, page) {
    const autoScrollParams = context.getAutoScrollParams();
    context.setPageStart((page - 1) * parseInt(autoScrollParams.get('rows')))
    autoScrollParams.set('start', (page - 1) * parseInt(autoScrollParams.get('rows')));
    history.replaceState(null, null, '?' + autoScrollParams.toString());
}


// const onInfiniteScroll = function () {
//     const scrollTop = getScrollXY()[ 1 ];
//     // if (this.productContainerHeight != 0 && scrollTop + window.innerHeight < document.getElementById('searchResultsWrapper').clientHeight) {
//     if (this.productContainerHeight != 0) {
//         const autoScrollParams = this.getAutoScrollParams();
//         const page = Math.ceil(scrollTop / this.productContainerHeight) + this.initialPage - 1;
//         const scroll = (scrollTop > this.productContainerHeight) ? scrollTop - this.productContainerHeight * (page - this.initialPage) : scrollTop;
//         const currentProducts = window.unbxdSearch.state.responseObj.response.products.length;
//         const totalProducts = window.unbxdSearch.state.responseObj.response.numberOfProducts;

//         autoScrollParams.set('scroll', Math.ceil(scroll));
//         history.replaceState(null, null, '?' + autoScrollParams.toString());

//         // const rect = this.options.pagination.infiniteScrollTriggerEl.getBoundingClientRect();
//         // console.log('rect rect rect', rect);
//         // console.log('this.productContainerHeight', this.productContainerHeight)

//         // if (rect.bottom < 0 || rect.top > window.innerHeight) {
//         //     console.log('outttttttt', 'background: #222; color: #bada55')
//         // }

//         // scrollTop + window.innerHeight >= document.getElementById('searchResultsWrapper').clientHeight - 100;


//         // if ((getDocHeight() - 20) <= (scrollTop + window.innerHeight) && currentNumberOfProducts < totalNumberOfProducts && !this.state.loading) {
//         // if (scroll <= this.productContainerHeight && scroll > this.productContainerHeight - 20 && currentNumberOfProducts < totalNumberOfProducts && !this.state.loading) {
//         // if () {
//             if (scrollTop + window.innerHeight >= document.getElementById('searchResultsWrapper').clientHeight - 100 &&
//                 currentProducts < totalProducts &&
//                 !this.state.loading) {
//                 updatePageStart(this, page)
//                 this.viewState.lastAction = "next_page_loaded";
//                 this.renderNewResults('next');
//             } else if (scrollTop <= 0 && page < this.initialPage && !(page < 1) && !this.state.loading) {
//                 updatePageStart(this, page)
//                 this.viewState.lastAction = "prev_page_loaded";
//                 this.initialPage = this.initialPage - 1;
//                 this.renderNewResults('prev');
//             }
//             else if ((parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows'))) + 1 != page && page != 0) {
//                 updatePageStart(this, page)
//             }
//         // }
//     }


// }

const onInfiniteScroll = function () {
    const scrollTop = getScrollXY()[ 1 ];
    const rect = this.options.pagination.infiniteScrollTriggerEl.getBoundingClientRect();
     if (rect.bottom < 0 || rect.top > window.innerHeight) {
            console.log('outttttttt', 'background: #222; color: #bada55')
        } else if (this.productContainerHeight != 0) {
            const autoScrollParams = this.getAutoScrollParams();
            const page = Math.ceil(scrollTop / this.productContainerHeight) + this.initialPage - 1;
            const scroll = (scrollTop > this.productContainerHeight) ? scrollTop - this.productContainerHeight * (page - this.initialPage) : scrollTop;
            const currentProducts = window.unbxdSearch.state.responseObj.response.products.length;
            const totalProducts = window.unbxdSearch.state.responseObj.response.numberOfProducts;
    
            // debounce(() => {
                autoScrollParams.set('scroll', Math.ceil(scroll));
                history.replaceState(null, null, '?' + autoScrollParams.toString());
            // }, 100)
    
            // const rect = this.options.pagination.infiniteScrollTriggerEl.getBoundingClientRect();
            // console.log('rect rect rect', rect);
            // console.log('this.productContainerHeight', this.productContainerHeight)
    
            // if (rect.bottom < 0 || rect.top > window.innerHeight) {
            //     console.log('outttttttt', 'background: #222; color: #bada55')
            // }
    
            // scrollTop + window.innerHeight >= document.getElementById('searchResultsWrapper').clientHeight - 100;
    
    
            // if ((getDocHeight() - 20) <= (scrollTop + window.innerHeight) && currentNumberOfProducts < totalNumberOfProducts && !this.state.loading) {
            // if (scroll <= this.productContainerHeight && scroll > this.productContainerHeight - 20 && currentNumberOfProducts < totalNumberOfProducts && !this.state.loading) {
            // if () {
                if (scrollTop + window.innerHeight >= document.getElementById('searchResultsWrapper').clientHeight - this.options.pagination.heightDiffToTriggerNextPage &&
                scrollTop + window.innerHeight < document.getElementById('searchResultsWrapper').clientHeight    &&
                currentProducts < totalProducts &&
                    !this.state.loading) {
                    updatePageStart(this, page)
                    this.viewState.lastAction = "next_page_loaded";
                    this.renderNewResults('next');
                } else if (scrollTop <= 0 && page < this.initialPage && !(page < 1) && !this.state.loading) {
                    updatePageStart(this, page)
                    this.viewState.lastAction = "prev_page_loaded";
                    this.initialPage = this.initialPage - 1;
                    this.renderNewResults('prev');
                }
                else if ((parseInt(autoScrollParams.get('start')) / parseInt(autoScrollParams.get('rows'))) + 1 != page && page != 0) {
                    updatePageStart(this, page)
                }
            // }
        }
    // if (this.productContainerHeight != 0 && scrollTop + window.innerHeight < document.getElementById('searchResultsWrapper').clientHeight) {
    


}
export default onInfiniteScroll;
