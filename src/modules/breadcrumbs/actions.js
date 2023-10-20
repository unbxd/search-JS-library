function onBreadCrumbClick(){
}
function renderBreadCrumbs() {
    try{
        let selectedCategories = this.getSelectedMultilevelFacet() || [];

        if (this.options.products.productType === 'CATEGORY' && window.unbxdAnalyticsConf?.page?.indexOf("categoryPath") !== -1) {
            selectedCategories = ['categoryPath']
        }
        let ui = ``;
        selectedCategories && selectedCategories.forEach((item) => {
            const data = this.getBreadCrumbsList(item) || [];
            const {
                breadcrumb = {}
            } = this.options;
            ui += this.options.breadcrumb.template(data, breadcrumb);
        });
        return ui;
    }
    catch(err){
        this.onError("Breadcrumbs > actions.js",err);
    }
    
}
export {
    onBreadCrumbClick,
    renderBreadCrumbs
}
