import libEvents from "../../../../search-JS-core/src/constants";

function renderProductViewTypeUI(){
    try {
        const {
            productView = {}
        } = this.options;
        if (productView.el) {
            const {
                productViewType
            } = this.viewState;
            const results = this.getSearchResults();
            if (results && results.numberOfProducts === 0) {
                this.productViewTypeWrapper.innerHTML = ``;
            } else {
                this.productViewTypeWrapper.innerHTML = this.options.productView.template.bind(this)(productViewType, productView);
            }
        }
        
    }catch(err){
        this.onError("ProductViewType > renderProductViewTypeUI",err,libEvents.runtimeError);
    }

}
export default renderProductViewTypeUI;
