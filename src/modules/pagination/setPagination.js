
import renderPagination from './renderPagination';
import infiniteScroller from './infiniteScroller';
import debounce from '../utils/debounce';
import {
    renderNewResults,
    paginationAction
} from './actions';
const onInfinteScroll = function(){
    debounce(infiniteScroller.bind(this),1000)();
}
const setPagination = (prototype) => {
    prototype = Object.assign(prototype,{
        renderPagination,
        renderNewResults,
        paginationAction,
        onInfinteScroll
    })
}

export {
    setPagination as default,
    renderPagination,
    renderNewResults,
    paginationAction,
    onInfinteScroll
};
