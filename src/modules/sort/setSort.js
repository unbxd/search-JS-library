import sortAction from './actions';
import renderSort from './renderSort';

const setSort = (prototype) => {
    prototype = Object.assign(prototype,{
        sortAction,
        renderSort
    })
}

export {
    setSort as default,
    sortAction,
    renderSort
};