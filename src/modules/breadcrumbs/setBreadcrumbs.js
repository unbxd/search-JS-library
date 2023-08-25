import {
    onBreadCrumbClick,
    renderBreadCrumbs
} from './actions';

const setBreadCrumbs = (prototype) => {
    prototype = Object.assign(prototype,{
        onBreadCrumbClick,
        renderBreadCrumbs
    })
}

export {
    setBreadCrumbs as default,
    onBreadCrumbClick,
    renderBreadCrumbs
};
