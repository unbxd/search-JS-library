import { events } from "../../common/constants";
import { sanitizeHTML } from "../../common/utils";

const renderSearch = function() {
	try {
		const { response: searchResults } = this.getResponseObj();
		if (!searchResults) {
			return ``;
		}
		const { products } = searchResults;
		const self = this;
		const { swatches, sanitizeHtml, sanitizeHtmlElements, sanitizeHtmlAttributes } = this.options;
		const { gridCount } = this.options.products;
		const { productViewType } = this.viewState;
		let productsUI = ``;
		const idx = searchResults.start;
		let swatchUI = ``;
		if (productViewType === "GRID" && gridCount && gridCount > 1) {
			products.forEach((product, index) => {
				const row = index % gridCount;
				if (row === 0) {
					productsUI += `<div class="UNX-row">`;
				}
				const pRank = index + idx + 1;
				const mappedProduct = this.mapProductAttrs(product);
				if (swatches.enabled) {
					let swatchTemplate = this.renderSwatchBtns(product);
					if(sanitizeHtml) {
						const sanitizedSwatchHTML = sanitizeHTML(swatchTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
						swatchTemplate = sanitizedSwatchHTML
					}
					swatchUI = swatchTemplate;
				}
				productsUI += self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, this.options.products);
				if (row === gridCount - 1) {
					productsUI += `</div>`;
				}
			});
		} else {
			productsUI = products
				.map((product, index) => {
					const pRank = index + idx + 1;
					const mappedProduct = this.mapProductAttrs(product);
					if (swatches.enabled) {
						let swatchTemplate = this.renderSwatchBtns(product);
						if(sanitizeHtml) {
							const sanitizedSwatchHTML = sanitizeHTML(swatchTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
							swatchTemplate = sanitizedSwatchHTML
						}
						swatchUI = swatchTemplate;
					}
					return self.options.products.template.bind(self)(mappedProduct, pRank, swatchUI, productViewType, this.options.products);
				})
				.join("");
		}

		return productsUI;
	} catch (err) {
		this.options.onError("searchResults > renderSearch", err, events.runtimeError);
	}
};
export default renderSearch;
