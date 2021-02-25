export default function() {
    const selectedFacetsInfo = this.getSelectedFacets();
    const selectedRanges = this.getSelectedRanges();
    const k = Object.keys(selectedFacetsInfo);
    let selectedUi = ``;
    const {
        selectedFacets,
        facet
    } = this.options;
    let itemTemplate  = selectedFacets.itemTemplate;
    if(facet.selectedFacetItemTemplate) {
        itemTemplate = facet.selectedFacetItemTemplate;
    }
    for (let i = 0; i < k.length; i++) {
        const j = k[i];
        const isCategoryFacet = this.isCategoryFacet(j);
        const vals = selectedFacetsInfo[j];
        if (!isCategoryFacet) {
            vals.forEach(item => {
                const {
                    name,
                    count,
                    dataId
                } = item;
                selectedUi += itemTemplate.bind(this)({
                    facetName: j,
                    facetType: "text"
                }, {
                    name: name,
                    dataId: (dataId) ? dataId : name,
                    count: count ? count : 0
                },facet,selectedFacets);
            })
        }

    }
    let r = Object.keys(selectedRanges);
    for (let j = 0; j < r.length; j++) {
        const l = r[j];
        const val = selectedRanges[l];
        val.forEach(rEl => {
            selectedUi += itemTemplate.bind(this)({
                facetName: l,
                facetType: "range"
            }, {
                name: rEl.replace(/[^\w\s]/gi, ''),
                dataId: rEl
            },facet,selectedFacets)
        })
    }
    let selectedFacetTemp = selectedFacets.template.bind(this);
    if(facet.selectedFacetTemplate)  {
        selectedFacetTemp  =  facet.selectedFacetTemplate.bind(this.options.facet);
    }
    this.selectedFacetWrapper.innerHTML = selectedFacetTemp(selectedUi, facet, selectedFacets);
}
;