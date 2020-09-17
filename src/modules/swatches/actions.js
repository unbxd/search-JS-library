function renderSwatchBtns(product) {
    const swatchData = this.getSwatches(product, this.options.swatches.attributesMap);
    return this.options.swatches.template.bind(this)(swatchData);
};
export default renderSwatchBtns;


