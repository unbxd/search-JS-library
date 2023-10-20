
const renderSearch =  function() {
    try {
        // const searchResults = this.getSearchResults();
        const {response: searchResults} = this.getResponseObj();
        if (!searchResults) {
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
        const idx = searchResults.start;
        // const idx = Number(this.state.startPageNo);
        let swatchUI = ``;
        if (productViewType === "GRID" && gridCount && gridCount > 1) {
            products.forEach((product, index) => {
                const row = index % gridCount;
                if (row === 0) {
                    productsUI += `<div class="UNX-row">`;
                }
                const pRank = index + idx + 1;
                const mappedProduct = this.mapProductAttrs(product);
                if (swatches.enabled) {
                    swatchUI = this.renderSwatchBtns(product);
                }
                productsUI += self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, this.options.products);
                if (row === gridCount - 1) {
                    productsUI += `</div>`;
                }

            })

        } else {
            productsUI = products.map((product, index) => {
                const pRank = index + idx + 1;
                const mappedProduct = this.mapProductAttrs(product);
                if (swatches.enabled) {
                    swatchUI = this.renderSwatchBtns(product);
                }
                return self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, this.options.products);
            }).join('');
        }


        return productsUI;
    }
    catch(err){
        this.options.onError("searchResults > renderSearch", err)
    }
}
export default renderSearch
