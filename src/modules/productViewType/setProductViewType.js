/* eslint-disable no-unused-vars */

import renderProductViewTypeUI from './renderProductViewTypeUI';
import {
    onPageViewTypeClick
} from './onPageViewTypeClick';
const setProductViewType = (prototype) => {
    prototype = Object.assign(prototype,{
        onPageViewTypeClick,
        renderProductViewTypeUI
    })
}

export {
    setProductViewType as default,
    onPageViewTypeClick,
    renderProductViewTypeUI
};
