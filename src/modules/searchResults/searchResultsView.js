
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
        swatches
    } = this.options;
    const {
        gridCount
    } = this.options.products;
    const {
        productViewType
    } = this.viewState;
    let productsUI = ``;
    const idx = Number(this.state.startPageNo);
    let swatchUI = ``
    if(productViewType === "GRID" && gridCount && gridCount > 1) {
        products.forEach((product, index) => {
            const row = index % gridCount;
            if(row === 0) {
                productsUI += `<div class="UNX-row">`;
            }
            const pRank  = index+idx+1;
            const mappedProduct = this.mapProductAttrs(product);
            if(swatches.enabled) {
                swatchUI = this.renderSwatchBtns(product);
            }
            productsUI +=self.options.products.template.bind(self)(mappedProduct,pRank,swatchUI,productViewType);
            if(row === gridCount -  1) {
                productsUI += `</div>`;
            }

        })

    } else {
        productsUI = products.map((product,index) => {
            const pRank  = index+idx+1;
            const mappedProduct = this.mapProductAttrs(product);
            if(swatches.enabled) {
                swatchUI = this.renderSwatchBtns(product);
            }
            return self.options.products.template.bind(self)(mappedProduct,pRank,swatchUI,productViewType);
        }).join('');
    }


    return  productsUI;
}
export default renderSearch