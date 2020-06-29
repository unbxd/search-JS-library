function onBreadCrumbClick(e){
    console.log(e,"breadcrumbs")
};
function renderBreadCrumbs() {
    const data = this.getBreadCrumbsList();
    return this.options.breadcrumb.template(data);
}
export {
    onBreadCrumbClick,
    renderBreadCrumbs
}