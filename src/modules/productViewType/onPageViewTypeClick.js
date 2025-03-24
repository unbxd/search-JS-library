import extend from "../utils/extend";
import { sanitizeHTML } from "../../common/utils";

function onPageViewTypeClick(e) {
	const elem = e.target;
	const { action } = this.options.productView;
	const { productViewType } = this.viewState;
	const selected = action === "click" ? elem : elem.options[elem.selectedIndex];
	const dataSet = selected.dataset || {};
	const { searchResultsWrappers, productViewTypeWrappers } = this;

	const { viewAction } = dataSet;
	this.checkFacets();
	if (productViewType !== viewAction) {
		this.viewState.productViewType = viewAction;
		const { extraParams = {}, sanitizeHtml, sanitizeHtmlElements, sanitizeHtmlAttributes } = this.options;
		this.options.extraParams = extend(true, {}, extraParams, {
			viewType: viewAction,
		});
		this.state.productViewType = this.viewState.productViewType;
		this.state.isBack = false;
		this.viewState.lastAction = "viewType";
		this.setUrl(false);

		let productViewTemplate = this.renderProductViewTypeUI();
		if(sanitizeHtml) {
			const sanitizedProductViewHTML = sanitizeHTML(productViewTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
			productViewTemplate = sanitizedProductViewHTML
			if (sanitizedProductViewHTML !== productViewTemplate) {
				// TODO: we can add onEvent here if required.
			}
		}
		productViewTypeWrappers.forEach((wrapper) => {
			wrapper.innerHTML = productViewTemplate;
		});

		searchResultsWrappers.forEach((wrapper) => {
			this.renderProducts(wrapper);
		});
	}
}
export { onPageViewTypeClick };
