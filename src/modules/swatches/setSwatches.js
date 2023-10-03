/* eslint-disable no-unused-vars */

import renderSwatchBtns from './renderSwatchBtns';
const setSwatches = (prototype) => {
    prototype = Object.assign(prototype, {
        renderSwatchBtns
    })
}
export {
    setSwatches as default,
    renderSwatchBtns
};
