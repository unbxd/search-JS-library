import renderDidYouMean from './renderSpellCheck';

const setSpellCheck = (prototype) => {
    prototype = Object.assign(prototype,{
        renderDidYouMean
    })
}

export {
    setSpellCheck as default,
    renderDidYouMean
};