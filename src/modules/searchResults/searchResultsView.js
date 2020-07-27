
const renderSearch =  function() {
    const searchResults = this.getSearchResults();
    if(!searchResults) {
        return ``;
    }
    const {
        products
    } = searchResults;
    const self = this;
    const {
        gridCount
    } = this.options.products;
    const {
        productViewType
    } = this.viewState;
    let productsUI = ``;
    const idx = Number(this.state.startPageNo);
    if(productViewType === "GRID" && gridCount && gridCount > 1) {
        products.forEach((product, index) => {
            const row = index % gridCount;
            if(row === 0) {
                productsUI += `<div class="UNX-row">`;
            }
            const pRank  = index+idx+1;
            const mappedProduct = this.mapProductAttrs(product);
            productsUI +=self.options.products.template.bind(self)(mappedProduct,pRank);
            if(row === gridCount -  1) {
                productsUI += `</div>`;
            }

        })

    } else {
        productsUI = products.map((product,index) => {
            const pRank  = index+idx+1;
            const mappedProduct = this.mapProductAttrs(product);
            return self.options.products.template.bind(self)(mappedProduct,pRank);
        }).join('');
    }
    const viewCss = (productViewType === "LIST") ? "UNX-list-block" :"UNX-grid-block"

    return  `<div class="UNX-result-wrapper ${viewCss}">${productsUI}</div>`;
}
export default renderSearch