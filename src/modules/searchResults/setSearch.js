import renderSearch from './searchResultsView';
import onProductItemClick from './actions';
import renderNoResults from './noResultsView';

const setSearch = (prototype) => {
    prototype = Object.assign(prototype,{
        renderSearch,
        onProductItemClick,
        renderNoResults
    })
};

export {
    setSearch as default,
    renderSearch,
    onProductItemClick,
    renderNoResults
};
