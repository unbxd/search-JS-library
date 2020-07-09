const onProductItemClick = function(e) {
    const path = e.path;
    const {
        productItemClass,
        productMap,
    } = this.options.products;
    const id = productItemClass.replace(".","");
    const dataset = e.target.dataset;
    const elem = path.find((item) => {
        const itemCss = item.className;
        return (itemCss.indexOf(id)) >=0 
    });
    if(dataset.action === this.actions.changeSwatch) {
        this.options.callBackFn(this,dataset.action);
        elem.querySelector(dataset.swatchTarget).src=dataset.swatchImg;
        return false;
    }
    const product =  this.getProductByPropValue(productMap.unxId,elem.id);
    if(product && elem) {
        product.prank = elem.dataset.prank;
    }
    this.options.products.productClick(product,e);
    this.getCallbackActions(product,"click");
}
export {
    onProductItemClick as default
};
