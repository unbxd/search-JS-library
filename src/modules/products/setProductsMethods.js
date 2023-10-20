/* eslint-disable no-unused-vars */

import renderProducts from "./renderProducts";

const setProductsMethods = (prototype) => {
    prototype = Object.assign(prototype, {
        renderProducts
    })
};

export {
    setProductsMethods as default
}