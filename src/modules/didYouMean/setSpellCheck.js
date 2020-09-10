import renderDidYouMean from './renderSpellCheck';
const setSuggestion = function(e) {
    const txt = this.getSpellCheckSuggested();
    const didLength = txt.length;
    const {
        lastDidYouMean
    } = this.viewState;
    if(didLength > 0) {
        this.setPageStart(0);
        this.getResults(txt[0]);
    }
    if(lastDidYouMean) {
        this.setPageStart(0);
        this.getResults(lastDidYouMean);
        this.viewState.loadedFromSuggestion = true;
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