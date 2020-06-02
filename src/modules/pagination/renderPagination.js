const renderPagination = function() {
    const {
        paginationType
    } = this.options;
    let paginationUI = ``;
    if(paginationType === 'FIXED_PAGINATION') {
        paginationUI = this.options.paginationUI(this.getPaginationInfo());
    }
    return paginationUI;
}
export default renderPagination;
