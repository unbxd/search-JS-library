function renderProductViewTypeUI(){
    const {
        productView
    } = this.options;
    if(productView.el) {
        const {
            productViewType
        } = this.viewState;
        productView.el.innerHTML = this.options.productView.template.bind(this)(productView, productViewType); 
    }
};
export default renderProductViewTypeUI;
