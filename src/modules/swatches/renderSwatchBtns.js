import { events } from "../../common/constants";

function renderSwatchBtns(product={}) {
    try{
        const swatchData = this.getSwatches(product, this.options.swatches.attributesMap) || {};
        const {
            swatches = {}
        } = this.options;
        return this.options.swatches.template.bind(this)(swatchData, swatches, product);
    }
    catch(err){
        this.onError("Swatches > renderSwatchBtns", err, events.runtimeError)
    }

}
export default renderSwatchBtns;