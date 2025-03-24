import { events } from "../../common/constants";
import { sanitizeHTML } from "../../common/utils";

function handleNoResults() {
	try {
		const { facetWrappers } = this;
		const { onEvent, noResults, sanitizeHtml, sanitizeHtmlElements, sanitizeHtmlAttributes } = this.options;

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
			let facetsTemplate = this.renderFacets();
			if(sanitizeHtml) {
				const sanitizedFacetsHTML = sanitizeHTML(facetsTemplate, {sanitizeHtmlElements, sanitizeHtmlAttributes});
				facetsTemplate = sanitizedFacetsHTML
				if (sanitizedFacetsHTML !== facetsTemplate) {
					// TODO: we can add onEvent here if required.
				}
			}
			facetWrappers.forEach((wrapper) => {
				wrapper.innerHTML = facetsTemplate;
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
