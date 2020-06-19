function renderSort(){
    return this.options.sortTemplate.bind(this)(this.getSelectedSort());
}
export default renderSort;
