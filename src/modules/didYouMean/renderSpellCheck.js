const renderDidYouMean = function (suggestion) {
    return this.options.spellCheckTemplate.bind(this)(suggestion);
}
export default renderDidYouMean;
