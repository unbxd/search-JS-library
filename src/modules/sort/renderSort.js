import { events } from "../../common/constants";

function renderSort() {
	try {
		const results = this.getSearchResults();
		const { sort = {} } = this.options;
		let ui = ``;
		if (results && results.numberOfProducts > 0) {
			ui = this.options.sort.template.bind(this)(this.getSelectedSort(), sort);
		}
		return ui;
	} catch (err) {
		this.onError("Sort > renderSort", err, events.runtimeError);
	}
}
export default renderSort;
