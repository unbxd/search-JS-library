import { events } from "../../common/constants";

export default function() {
	try {
		let facetsUI = ``;
		const { facet = {} } = this.options;
		const { defaultOpen, applyMultipleFilters } = facet;
		const { expandedFacets, lastAction } = this.viewState;
		if (lastAction === "updatedRangeSlider" && applyMultipleFilters) {
			return false;
		}
		const allFacets = this.getAllFacets() || [];
		const selectedFacets = this.getSelectedFacets() || {};
		allFacets.forEach((facetItem, idx) => {
			const { facetType, facetName } = facetItem;
			if (typeof expandedFacets[facetName] === "undefined" && defaultOpen === "ALL") {
				expandedFacets[facetName] = true;
			}
			if (defaultOpen === "FIRST" && idx == 0) {
				expandedFacets[facetName] = true;
			}
			const isExpanded = this.isExpandedFacet(facetName);
			const facetSearchTxt = this.getSearchFacetsText(facetName) || "";
			const selectedFacet = selectedFacets[facetName];
			if (facetType === "text") {
				facetsUI += this.renderTextFacet(facetItem, selectedFacet, isExpanded, facetSearchTxt);
			}
			if (facetType === "range") {
				facetsUI += this.renderRangeFacet(facetItem, isExpanded, "");
			}
			if (facetType === "category") {
				facetsUI += this.renderMultiLevelFacet(facetItem, isExpanded, facetSearchTxt);
			}
			this.viewState.facetElementMap[facetName] = facetName;
		});
		this.options.facet.onFacetLoad.bind(this)(allFacets);
		return facetsUI;
	} catch (err) {
		this.onError("Facets > renderFacets.js", err, events.runtimeError);
	}
}
