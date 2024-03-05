import libEvents from "../../../../search-JS-core/src/constants";

export default function() {
    try{
        const selectedFacetsInfo = this.getSelectedFacets() || {};
        const selectedRanges = this.getSelectedRanges() || {};
        const k = Object.keys(selectedFacetsInfo);
        let selectedUi = ``;
        const {
            selectedFacets = {},
            facet = {}
        } = this.options;
        let itemTemplate = (facet.selectedFacetItemTemplate) ? facet.selectedFacetItemTemplate.bind(this) : selectedFacets.itemTemplate.bind(this);
        for (let i = 0; i < k.length; i++) {
            const j = k[i];
            const isCategoryFacet = this.isCategoryFacet(j);
            const vals = selectedFacetsInfo[j] || [];
            if (!isCategoryFacet) {
                vals.forEach(item => {
                    const {
                        name,
                        count,
                        dataId
                    } = item;
                    selectedUi += itemTemplate({
                        facetName: j,
                        facetType: "text"
                    }, {
                        name: name,
                        dataId: (dataId) ? dataId : name,
                        count: count ? count : 0
                    }, facet, selectedFacets);
                })
            }

        }
        let r = Object.keys(selectedRanges);
        for (let j = 0; j < r.length; j++) {
            const l = r[j];
            const val = selectedRanges[l];
            val.forEach(rEl => {
                selectedUi += itemTemplate({
                    facetName: l,
                    facetType: "range"
                }, {
                    name: rEl.replace(/[^\w\s]/gi, ''),
                    dataId: rEl
                }, facet, selectedFacets)
            })
        }
        let selectedFacetTemp = (facet.selectedFacetTemplate) ? facet.selectedFacetTemplate.bind(this) : selectedFacets.template.bind(this);
        this.selectedFacetWrappers.forEach((wrapper) => {
            wrapper.innerHTML = selectedFacetTemp(selectedUi, facet, selectedFacets);
        })
    }catch(err){
        this.onError("facets > renderSelectedFacets.js",err,libEvents.runtimeError);
    }
    
}
