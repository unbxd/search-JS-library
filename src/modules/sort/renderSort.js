function renderSort(){
    const results = this.getSearchResults();
    const{
        sort
    } = this.options;
    if(results && results.numberOfProducts === 0) {
        return ``
    }else {
        return this.options.sort.template.bind(this)(this.getSelectedSort(), sort);
        
    }
}
export default renderSort;
