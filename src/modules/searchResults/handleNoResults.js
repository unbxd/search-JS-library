import DOMPurify from "dompurify";
import { events } from "../../common/constants";

function handleNoResults() {
	try {
		const { facetWrappers } = this;
		const { onEvent, noResults } = this.options;

		const { beforeNoResultRender, afterNoResultRender } = this.events;

		const qParams = this.getQueryParams() || {};
		const query = this.getSearchQuery();
		const noResultCss = "UNX-no-results-wrap";

		let redirect = this.state.responseObj.redirect || {};
		if (Object.keys(redirect).length) {
			return;
		}
		try {
			onEvent(this, beforeNoResultRender);
		} catch (error) {
			this.onError("reRender", error, events.runtimeError);
		}

		this.viewState.noResultLoaded = true;

		let noResultsHTML = "";
		if (this.options.noResults?.el) {
			noResults.el.classList.add(noResultCss);
			noResultsHTML = this.renderNoResults(query);
		} else {
			noResultsHTML = `<div class="${noResultCss}">${this.renderNoResults(query)}</div>`;
		}
		if (!qParams.filter) {
			const facetsTemplate = this.renderFacets();
			const sanitizedFacetsHTML = DOMPurify.sanitize(facetsTemplate);
			if (sanitizedFacetsHTML !== facetsTemplate) {
				// TODO: we can add onEvent here if required.
			}
			facetWrappers.forEach((wrapper) => {
				wrapper.innerHTML = sanitizedFacetsHTML;
			});
		}

		try {
			onEvent(this, afterNoResultRender);
		} catch (error) {
			this.onError("reRender", error, events.runtimeError);
		}

		return noResultsHTML;
	} catch (err) {
		this.onError("searchresults > handleNoResults", err, events.runtimeError);
	}
}

export default handleNoResults;
