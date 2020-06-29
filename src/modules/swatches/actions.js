function renderSwatchBtns(product) {
    console.log(product,"product");
    const swatchData = this.getSwatches(product, this.options.swatches.map);
    console.log(swatchData,"swatchData");
    return this.options.swatches.template(swatchData);
};
export default renderSwatchBtns;


