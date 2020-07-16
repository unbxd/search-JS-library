
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
    if(productViewType === "GRID") {
        products.forEach((product, index) => {
            const row = index % gridCount;
            if(row === 0) {
                productsUI += `<div class="UNX-row">`;
            }
            const pRank  = index+idx+1;
            const mappedProduct = this.mapProductAttrs(product);
            productsUI +=self.options.searchResultsTemplate(mappedProduct,pRank);
            if(row === gridCount -  1) {
                productsUI += `</div>`;
            }

        })

    } else {
        productsUI = products.map((product,index) => {
            const pRank  = index+idx+1;
            const mappedProduct = this.mapProductAttrs(product);
            return self.options.searchResultsTemplate(mappedProduct,pRank);
        }).join('');
    }

    return  `<div class="UNX-result-wrapper">${productsUI}</div>`;
}
export default renderSearch