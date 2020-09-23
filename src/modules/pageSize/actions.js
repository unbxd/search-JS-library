const onClickPageSize = function(e) {
    let elem  = e.target;
    this.viewState.lastDidYouMean = "";
    const selected = (this.options.pagesize.action === "click") ? elem:elem.options[elem.selectedIndex];
    const val = selected.id;
    if(val) {
        this.setPageSize(Number(val));
        this.getResults.bind(this)();
        this.options.onEvent(this,'pageSizeChange', {
            count:val
        });
    }
}
export {
    onClickPageSize 
};
