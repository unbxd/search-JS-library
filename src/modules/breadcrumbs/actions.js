function onBreadCrumbClick(e){
    console.log(e,"breadcrumbs")
};
function renderBreadCrumbs() {
    const data = this.getBreadCrumbsList();
    return this.options.breadCrumpTemplate(data);
}
export {
    onBreadCrumbClick,
    renderBreadCrumbs
}