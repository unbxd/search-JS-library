const onProductItemClick = function(e) {
    const path = e.path || (e.composedPath && e.composedPath());
    const {
        productItemClass,
        attributesMap,
    } = this.options.products;
    const id = productItemClass.replace(".","");
    let dataset = e.target.dataset;
    const elem = path.find((item) => {
        const itemCss = item.className;
        return (itemCss.indexOf(id)) >=0 
    });
    const {
        action,
        swatchId
    } = dataset || {};
    if(action === this.actions.changeSwatch && swatchId) {
        elem.querySelectorAll(".UNX-img-wrapper").forEach((imgBlock) => {
            const btnE = elem.querySelector(`.${imgBlock.id}`);
            if(imgBlock.id === swatchId ) {
                imgBlock.classList.remove("UNX-swatch-hidden");
                elem.querySelector(`.${swatchId}`).classList.add("UNX-selected-swatch");
            } else {
                imgBlock.classList.add("UNX-swatch-hidden");
                btnE.classList.remove("UNX-selected-swatch");
            }
        })
        this.options.onEvent(this,dataset.action);
        return false;
    }
    let product = null;
    dataset = elem.dataset;
    if(dataset.id) {
        product =  this.getProductByPropValue(attributesMap.unxId,dataset.id);
    }
    if(product && elem) {
        product.prank = elem.dataset.prank;
    }
    this.options.products.onProductClick(product,e);
    this.getCallbackActions(product,"click");
}
export {
    onProductItemClick as default
};
