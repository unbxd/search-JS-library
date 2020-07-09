import renderSearch from './searchResultsView';
import onProductItemClick from './actions';
import renderNoResults from './noResultsView';
const mapProductAttrs = function(product) {
    const {
        products
    } = this.options;
    const  {
        productMap
    } = products;
    const attrArray = Object.keys(productMap);
    attrArray.forEach(item =>{
        const pI = product[item];
        const mI = productMap[item];
       if(!pI)  {
            product[item] = product[mI];
       }
    });
    return product;
};

const setSearch = (prototype) => {
    prototype = Object.assign(prototype,{
        renderSearch,
        onProductItemClick,
        renderNoResults,
        mapProductAttrs
    })
};

export {
    setSearch as default,
    renderSearch,
    onProductItemClick,
    renderNoResults,
    mapProductAttrs
};
