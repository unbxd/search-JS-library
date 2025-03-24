import unxSelectors from "../common/constants/selectors";
import reRender from "./reRender";
import bindEvents from "./bindEvents";
import validateConfigs from "./validateConfigs";
import { sanitizeHTML } from "../common/utils";

const initialize = function() {
	this.validateConfigs = validateConfigs.bind(this);
	this.validateConfigs();
	this.createLayout();
	this.unxSelectors = unxSelectors;
	this.renderDidYouMean.bind(this);
	this.options.onEvent.bind(this);
	this.options.products.onProductClick.bind(this);
	this.reRender = reRender.bind(this);
	this.bindEvents = bindEvents.bind(this);

	this.bindEvents();
	const urlParams = this.getQueryParams();
	const ln = Object.keys(urlParams).length;
	const { defaultViewType, enabled } = this.options.productView;
	const { productViewTypeWrappers } = this;
	if (ln > 0) {
		const { [this.options.url.pageViewParam.algo === "KEY_VALUE_REPLACER" ? this.options.url.pageViewParam.keyReplacer : "viewType"]: type } = urlParams;
		const viewType = this.getKeyByValue(this.options.url.pageViewParam.valuesReplacer, decodeURIComponent(type || defaultViewType));
		if (viewType) {
			this.viewState.productViewType = viewType;
			this.options.extraParams.viewType = viewType;
			this.state.productViewType = viewType;
		}
	} else {
		this.options.extraParams.viewType = defaultViewType;
	}

	// TODO: why is this here?
	const {sanitizeHtml, sanitizeHtmlElements, sanitizeHtmlAttributes} = this.options
	if (enabled) {
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
	}
};
export default initialize;
