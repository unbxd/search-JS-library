function renderProductViewTypeUI(){
    if(this.options.productViewTypeSelector && this.options.productViewTypeTemplate) {
        const {
            productViewType
        } = this.viewState;
        this.options.productViewTypeSelector.innerHTML = this.options.productViewTypeTemplate.bind(this)(productViewType); 
    }
};
export default renderProductViewTypeUI;
