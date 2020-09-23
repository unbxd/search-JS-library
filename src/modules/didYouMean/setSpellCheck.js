import renderDidYouMean from './renderSpellCheck';
const setSuggestion = function(e) {
    const txt = this.getSpellCheckSuggested();
    const didLength = txt.length;
    const {
        target
    } = e;
    const {
        dataset
    } = target || {};
    const {
        userInput
    } = this.state;
    if(dataset && dataset.action === "getSuggestion") {
        this.resetAll();
        this.setPageStart(0);
        this.getResults(userInput);
        this.viewState.lastDidYouMean = null;
        this.viewState.loadedFromSuggestion = false;
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