function renderSwatchBtns(product) {
    const swatchData = this.getSwatches(product, this.options.swatches.attributesMap);
    const {
        swatches
    } = this.options;
    return this.options.swatches.template.bind(this)(swatchData,swatches,product);
};
export default renderSwatchBtns;


