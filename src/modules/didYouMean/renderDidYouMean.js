import { events } from "../../common/constants";

const renderDidYouMean = function() {
	try {
		let { userInput = "" } = this.state;
		const pages = this.getPaginationInfo() || {};
		const didYouMean = this.getDidYouMeanFromResponse() || [];
		const { type } = this.options.pagination;
		const { enabled } = this.options.spellCheck;
		const { viewState } = this;
		const { loadedFromSuggestion, lastDidYouMean } = viewState;
		if (type !== "FIXED_PAGINATION" && pages) {
			const { start, productsLn } = pages;
			pages.productsLn = productsLn + start;
			pages.start = 0;
		}
		let sugString = didYouMean.length > 0 ? didYouMean[0].suggestion : "";
		let ui = ``;

		if (sugString && !loadedFromSuggestion) {
			this.viewState.lastDidYouMean = userInput;
			this.viewState.loadedFromSuggestion = true;
			if (enabled) {
				this.getResults(sugString);
			}
		} else {
			this.viewState.lastDidYouMean = "";
		}
		ui = this.options.spellCheck.template.bind(this)(userInput, lastDidYouMean, pages);
		if (!enabled && sugString) {
			ui = this.options.spellCheck.template.bind(this)(sugString, userInput, pages);
		}
		return ui;
	} catch (err) {
		this.onError("didYouMean > renderDidYouMean.js", err, events.runtimeError);
	}
};
export default renderDidYouMean;
