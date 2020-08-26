function renderProductViewTypeUI(){
    const {
        productView
    } = this.options;
    if(productView.el) {
        const {
            productViewType
        } = this.viewState;
        const results = this.getSearchResults();
        if(results && results.numberOfProducts === 0) {
            productView.el.innerHTML = ``;
        }else {
            productView.el.innerHTML = this.options.productView.template.bind(this)(productView, productViewType); 
        }
    }
};
export default renderProductViewTypeUI;
