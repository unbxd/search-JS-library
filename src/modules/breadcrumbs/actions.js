import { events } from "../../common/constants";

function onBreadCrumbClick() { }
function renderBreadCrumbs(wrapper) {
    try {
        let selectedCategories = this.getSelectedMultilevelFacet() || [];

        if (this.options.products.productType === "CATEGORY" && window.unbxdAnalyticsConf?.page?.indexOf("categoryPath") !== -1) {
            selectedCategories = ["categoryPath"];
        }
        let ui = ``;
        selectedCategories &&
            selectedCategories.forEach((item) => {
                const data = this.getBreadCrumbsList(item) || [];
                const { breadcrumb = {} } = this.options;
                ui += this.options.breadcrumb.template(data, breadcrumb);
            });
        wrapper.innerHTML = ui;
    } catch (err) {
        this.onError("Breadcrumbs > actions.js", err, events.runtimeError);
    }
}
export { onBreadCrumbClick, renderBreadCrumbs };
