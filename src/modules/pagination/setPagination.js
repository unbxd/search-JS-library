
import renderPagination from './renderPagination';
import onInfiniteScroll from './infiniteScroller';
import {
    renderNewResults,
    paginationAction
} from './actions';

// const setPage =  function (pageNo) {
//     this.params.extra.page = pageNo;
//     return this;
// }
// const getPage =  function () {
    
//     return Math.round(this.params.extra.page);
// }
// const setPageSize =  function (pageSize) {
//     this.params.extra.rows = pageSize;
//     return this;
// }
// const getPageSize =  function () {
//         return this.params.extra.rows;
//     }

//     const getDeviceInfo = function () {
//         var smallDeviceMaxWidth = 768,
//             mediumDeviceMaxWidth = 1024;
//         if (window.innerWidth < smallDeviceMaxWidth) {
//             return "Mobile";
//         } else if (window.innerWidth < mediumDeviceMaxWidth) {
//             return "Tablet";
//         } else {
//             return "Desktop";
//         }
//     }

    const getAutoScrollParams = function  (){
        const autoScrollParams = new URLSearchParams(window.location.search)
        return autoScrollParams;
    }
    

    
// this.setViewType =  function (viewType) {
//     this.params.extra.view = viewType;
//     return this;
// }
// this.getViewType =  function () {
//         return this.params.extra.view;
//     }


const setPagination = (prototype) => {
    prototype = Object.assign(prototype,{
        renderPagination,
        renderNewResults,
        paginationAction,
        onInfiniteScroll,
//         setPage,
// getPage,
// setPageSize,
// getPageSize,
// getDeviceInfo,
getAutoScrollParams
    })
}

export {
    setPagination as default,
    renderPagination,
    renderNewResults,
    paginationAction,
    onInfiniteScroll,
//     setPage,
// getPage,
// setPageSize,
// getPageSize,
// getDeviceInfo,
getAutoScrollParams
};
