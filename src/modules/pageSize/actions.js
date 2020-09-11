const onClickPageSize = function(e) {
    let elem  = e.target;
    const selected = (this.options.pagesize.action === "click") ? elem:elem.options[elem.selectedIndex];
    const val = selected.id;
    if(val) {
        this.setPageSize(Number(val));
        this.getResults.bind(this)();
        this.options.onCallBack(this,'pageSizeChange', {
            count:val
        });
    }
}
export {
    onClickPageSize 
};
