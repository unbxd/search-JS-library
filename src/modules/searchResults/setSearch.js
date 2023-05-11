import renderSearch from './renderSearch';
import onProductItemClick from './actions';
import renderNoResults from './renderNoResults';
const mapProductAttrs = function(product) {
    const {
        products
    } = this.options;
    const  {
        attributesMap
    } = products;
    const attrArray = Object.keys(attributesMap);
    attrArray.forEach(item =>{
        const pI = product[item];
        const mI = attributesMap[item];
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
