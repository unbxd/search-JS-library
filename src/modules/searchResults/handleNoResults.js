import { events } from "../../common/constants";

function handleNoResults() {
    try {
        const {
            searchResultsWrapper
        } = this;
        
        const {
            onEvent,
            noResults
        } = this.options;
        
        const {
            beforeNoResultRender,
            afterNoResultRender,
        } = this.events;
        
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

        if (this.options.noResults?.el) {
            noResults.el.classList.add(noResultCss)
            searchResultsWrapper.innerHTML = "";
            noResults.el.innerHTML = this.renderNoResults(query);

        } else {
            searchResultsWrapper.classList.add(noResultCss);
            searchResultsWrapper.innerHTML = this.renderNoResults(query);
        }
        if (!qParams.filter) {
            this.renderFacets();
        }

        try {
            onEvent(this, afterNoResultRender);
        } catch (error) {
            this.onError("reRender", error, events.runtimeError);
        }
    }
    catch (err) {
        this.onError("searchresults > handleNoResults", err, events.runtimeError)
    }
}

export default handleNoResults;
