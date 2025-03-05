import { events } from "../../common/constants";

function renderProductViewTypeUI() {
	try {
		const { productView = {} } = this.options;
		if (productView.el) {
			const { productViewType } = this.viewState;
			const results = this.getSearchResults();
			if (results && results.numberOfProducts === 0) {
				return ``;
			} else {
				return this.options.productView.template.bind(this)(productViewType, productView);
			}
		}
	} catch (err) {
		this.onError("ProductViewType > renderProductViewTypeUI", err, events.runtimeError);
	}
}
export default renderProductViewTypeUI;
