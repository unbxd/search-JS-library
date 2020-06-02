function renderSwatchBtns(product) {
    const swatchData = this.getSwatches(product, this.options.swatchMap);
    return this.options.swatchTemplate(swatchData);
};
export {
    renderSwatchBtns
};
