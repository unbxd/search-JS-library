function renderSort(){
    const results = this.getSearchResults();
    if(results && results.numberOfProducts === 0) {
        return ``
    }else {
        return this.options.sort.template.bind(this)(this.getSelectedSort());
        
    }
}
export default renderSort;
