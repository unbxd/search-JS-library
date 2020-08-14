function onBreadCrumbClick(e){
};
function renderBreadCrumbs() {
    const data = this.getBreadCrumbsList();
    return this.options.breadcrumb.template(data);
}
export {
    onBreadCrumbClick,
    renderBreadCrumbs
}