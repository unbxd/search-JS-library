import { events } from "../../common/constants";

function renderNoResults(query = "") {
	try {
		return this.options.noResults.template(query);
	} catch (err) {
		this.onError("searchresults > renderNoResults", err, events.runtimeError);
	}
}
export default renderNoResults;
