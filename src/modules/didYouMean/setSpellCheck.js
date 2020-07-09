import renderDidYouMean from './renderSpellCheck';
const setSuggestion = function(e) {
    const txt = e.target.innerText;
    this.setPageStart(0);
    this.getResults(txt);
}
const setSpellCheck = (prototype) => {
    prototype = Object.assign(prototype,{
        renderDidYouMean,
        setSuggestion
    })
}

export {
    setSpellCheck as default,
    renderDidYouMean,
    setSuggestion
};