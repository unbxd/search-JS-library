
const renderSearch =  function(searchResults) {
    const {
        products
    } = searchResults;
    const self = this;

    const productsUI = products.map((product) => {
        return self.options.productTemplate(product)
    }).join('');
    
    return  `<div>
        <strong>Products</strong>
        ${productsUI}
    </div>`;
}
export default renderSearch