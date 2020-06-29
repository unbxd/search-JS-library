const renderDidYouMean = function (suggestion) {
    return this.options.spellCheck.template.bind(this)(suggestion);
}
export default renderDidYouMean;
