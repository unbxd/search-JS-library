function renderSwatchBtns(product) {
    const swatchData = this.getSwatches(product, this.options.swatches.map);
    return this.options.swatches.template(swatchData);
};
export default renderSwatchBtns;


