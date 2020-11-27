function onBreadCrumbClick(e){
};
function renderBreadCrumbs() {
    const selectedCategories = this.getSelectedMultilevelFacet();
    let ui = ``;
    selectedCategories.forEach((item) => {
        const data = this.getBreadCrumbsList(item);
        const {
            breadcrumb
        } = this.options;
        ui += this.options.breadcrumb.template(data, breadcrumb);

    });
    return ui;
}
export {
    onBreadCrumbClick,
    renderBreadCrumbs
}