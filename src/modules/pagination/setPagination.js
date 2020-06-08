
import renderPagination from './renderPagination';
import {
    renderNewResults,
    paginationAction
} from './actions';
const setPagination = (prototype) => {
    prototype = Object.assign(prototype,{
        renderPagination,
        renderNewResults,
        paginationAction
    })
}

export {
    setPagination as default,
    renderPagination,
    renderNewResults,
    paginationAction
};
