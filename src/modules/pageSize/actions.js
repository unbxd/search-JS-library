const onClickPageSize = function(e) {
    let elem  = e.target;
    if(this.options.pageSizeDisplayType === "Dropdown") {
        elem = elem.options[elem.selectedIndex];
    }
    const val = elem.id;
    if(val) {
        this.setPageSize(Number(val));
        this.getResults.bind(this)();
        this.options.callBackFn(this,'pageSizeChange', {
            count:val
        });
    }
}
export {
    onClickPageSize 
};
