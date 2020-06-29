function renderSort(){
    return this.options.sort.template.bind(this)(this.getSelectedSort());
}
export default renderSort;
