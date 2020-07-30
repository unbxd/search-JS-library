import renderDidYouMean from './renderSpellCheck';
const setSuggestion = function(e) {
    const txt = this.getSpellCheckSuggested();
    const didLength = txt.length;
    if(didLength > 0) {
        this.setPageStart(0);
        this.getResults(txt[0]);
    }
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