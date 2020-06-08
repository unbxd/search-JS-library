const renderPagination = function() {
    const {
        paginationType
    } = this.options;
    let paginationUI = ``;
    if(paginationType === 'FIXED_PAGINATION') {
        paginationUI = this.options.paginationTemplate(this.getPaginationInfo());
    }
    return paginationUI;
}
export default renderPagination;
