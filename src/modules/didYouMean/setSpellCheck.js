import renderDidYouMean from './renderSpellCheck';

//will be removed once it is fixed in js core
const getDidYouMeanFromResponse = function() {
    const responseObj = this.getResponseObj()||{};
    if(responseObj && responseObj.didYouMean) {
        return responseObj.didYouMean
    }
    return null;

}
const setSpellCheck = (prototype) => {
    prototype = Object.assign(prototype,{
        renderDidYouMean,
        getDidYouMeanFromResponse
    })
}

export {
    setSpellCheck as default,
    renderDidYouMean,
    getDidYouMeanFromResponse
};