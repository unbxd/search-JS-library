function onBreadCrumbClick(e){
};
function renderBreadCrumbs() {
    const data = this.getBreadCrumbsList();
    const {
        breadcrumb
    } = this.options;
    return this.options.breadcrumb.template(data, breadcrumb);
}
export {
    onBreadCrumbClick,
    renderBreadCrumbs
}