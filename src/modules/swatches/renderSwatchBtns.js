function renderSwatchBtns(product) {
    try{
        const swatchData = this.getSwatches(product, this.options.swatches.attributesMap) || {};
        const {
            swatches = {}
        } = this.options;
        return this.options.swatches.template.bind(this)(swatchData, swatches, product);
    }
    catch{
        this.options.onError("Swatches")
    }

};
export default renderSwatchBtns;


