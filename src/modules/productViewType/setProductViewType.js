
import renderProductViewTypeUI from './renderProductViewTypeUI';
import {
    onPageViewTypeClick
} from './actions';
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
