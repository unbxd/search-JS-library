// const getAutoScrollParams = function  (){
//     const autoScrollParams = new URLSearchParams(window.location.search)
//     return autoScrollParams;
// }

// this.setPage =  function (pageNo) {
//     this.params.extra.page = pageNo;
//     return this;
// }
// this.getPage =  function () {
    
//     return Math.round(this.params.extra.page);
// }
// this.setPageSize =  function (pageSize) {
//     this.params.extra.rows = pageSize;
//     return this;
// }
// this.getPageSize =  function () {
//         return this.params.extra.rows;
//     }

    
// this.setViewType =  function (viewType) {
//     this.params.extra.view = viewType;
//     return this;
// }
// this.getViewType =  function () {
//         return this.params.extra.view;
//     }

// const getDeviceInfo = function () {
//     var smallDeviceMaxWidth = 768,
//         mediumDeviceMaxWidth = 1024;
//     if (window.outerWidth < smallDeviceMaxWidth) {
//         return "Mobile";
//     } else if (window.outerWidth < mediumDeviceMaxWidth) {
//         return "Tablet";
//     } else {
//         return "Desktop";
//     }
// }

const renderPagination = function () {
    const {
        pagination
    } = this.options;
    const {
        type
    } = pagination;
    let paginationUI = ``;
    if (type !== 'INFINITE_SCROLL') {
        const pageInfo = this.getPaginationInfo();
        if (pageInfo) {
            paginationUI = pagination.template.bind(this)(pageInfo);
        }
    }

    // if (type === 'INFINITE_SCROLL') {
    //     var autoScrollParams = this.getAutoScrollParams();
    //     var start = parseInt(autoScrollParams.get('start')) - 1;
    //     var device = getDeviceInfo();
    //     var initialScroll = autoScrollParams.get('scroll')
    //     var mobileFlag = false;
    //     var timer = null;
    //     this.productContainerHeight = document.getElementById('searchResultsWrapper').clientHeight;
    //     if (autoScrollParams.get('page') != null) {
    //         this.initialPage = parseInt(autoScrollParams.get('page'));
    //         if (device == 'Desktop')
    //             // jQuery('body, html').animate({ scrollTop: initialScroll }, '0.1s');
    //             window.scrollTo(0 , initialScroll)
    //     }
    //     this.totalNumberOfProducts = window.unbxdSearch.state.responseObj.response.products.length
    //     if (start + 12 > this.totalNumberOfProducts) {
    //         var currentProducts = this.totalNumberOfProducts - start;
    //         if (device == 'Mobile') {
    //             this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 2) * (12 / 2) - 120);
    //         } else if (device == 'Tablet') {
    //             this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 3) * (12 / 3) - 100);
    //         } else {
    //             this.productContainerHeight = Math.round(this.productContainerHeight / Math.ceil(currentProducts / 4) * (12 / 4) - 100);
    //         }
    //     }
    //     // if (autoScrollParams.get('page') != null && parseInt(autoScrollParams.get('page')) + 1 == this.getPage()) {
    //     //     this.productContainerHeight = Math.round(this.productContainerHeight / 2);
    //     // }
    // }
    return paginationUI;
}
export default renderPagination;
