import {
    renderSwatchBtns
 } from './actions';
const setSwatches = (prototype) => {
    prototype = Object.assign(prototype,{
        renderSwatchBtns
    })
}
export {
    setSwatches as default,
    renderSwatchBtns
};
