const renderPagination = function() {
    const {
        pagination :{
            type
        } = {}
    } = this.options;
    let paginationUI = ``;
    if(type !== 'INFINITE_SCROLL') {
        paginationUI = this.options.pagination.template.bind(this)(this.getPaginationInfo());
    }
    return paginationUI;
}
export default renderPagination;
