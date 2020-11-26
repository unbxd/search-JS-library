export default function() {
    const selectedFacets = this.getSelectedFacets();
    const selectedRanges = this.getSelectedRanges();
    const k = Object.keys(selectedFacets);
    let selectedUi = ``;
    const {
        facet
    } = this.options;
    for (let i = 0; i < k.length; i++) {
        const j = k[i];
        const isCategoryFacet = this.isCategoryFacet(j);
        const vals = selectedFacets[j];
        if (!isCategoryFacet) {
            vals.forEach(item => {
                const {
                    name,
                    count,
                    dataId
                } = item;
                selectedUi += this.options.facet.selectedFacetItemTemplate.bind(this)({
                    facetName: j,
                    facetType: "text"
                }, {
                    name: name,
                    dataId: (dataId) ? dataId : name,
                    count: count ? count : 0
                });
            })
        }

    }
    let r = Object.keys(selectedRanges);
    for (let j = 0; j < r.length; j++) {
        const l = r[j];
        const val = selectedRanges[l];
        val.forEach(rEl => {
            selectedUi += this.options.facet.selectedFacetItemTemplate.bind(this)({
                facetName: l,
                facetType: "range"
            }, {
                name: rEl.replace(/[^\w\s]/gi, ''),
                dataId: rEl
            })
        })
    }
    this.selectedFacetWrapper.innerHTML = this.options.facet.selectedFacetTemplate(selectedUi, facet);
}
;