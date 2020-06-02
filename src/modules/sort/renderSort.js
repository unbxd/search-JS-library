function renderSort(){
    return this.options.sortUI.bind(this)(this.getSelectedSort());
}
export default renderSort;
