
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
    } = this.options;
    const {
        productViewType
    } = this.viewState;
    let productsUI = ``;
    const idx = Number(this.state.startPageNo);
    if(productViewType === "GRID") {
        products.forEach((product, index) => {
            const row = index % gridCount;
            if(row === 0) {
                productsUI += `<div class="unbxd-row">`;
            }
            const pRank  = index+idx+1;
            productsUI +=self.options.searchResultsTemplate(product,pRank);
            if(row === gridCount -  1) {
                productsUI += `</div>`;
            }

        })

    } else {
        productsUI = products.map((product) => {
            return self.options.searchResultsTemplate(product);
        }).join('');
    }

    return  `<div>
        ${productsUI}
    </div>`;
}
export default renderSearch