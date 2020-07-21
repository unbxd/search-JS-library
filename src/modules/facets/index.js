const renderTextFacets = function(argFacets, selectedArgFacets) {
    const facets = (argFacets) ? argFacets : this.getFacets();
    const selectedFacets = (selectedArgFacets) ? selectedArgFacets: this.getSelectedFacets();
    const self = this;
    let selectedFacetsUI = ``;
    const facetsListUI = facets.map((facet) =>{
        const {
            displayName,
            facetName,
            values = []
        } = facet;
        let selectUI = "";
        const selectedFacet = selectedFacets[facetName];
        if(values.length > 0) {
            let valuesUI  = values.map((value, index) => {
                const  {
                    name,
                } = value;
                let selected = false;
                if(selectedFacet) {
                    selected = selectedFacet.some((facet) => {
                        return facet.name === name
                    })
                }
                if(selected) {
                    if(this.options.facet.selectedFacetsEl) {
                        selectedFacetsUI += this.options.facet.selectedFacetTemplate.bind(this)(facet,value);
                    }
                    return this.options.facet.selectedFacetTemplate.bind(this)(facet,value)
                } else{
                    return this.options.facet.facetItemTemplate.bind(this)(facet, value)
                }
            });
            selectUI = this.options.facet.facetTemplate.bind(this)(facet, valuesUI.join(''))
        }
        return `<div data-id="${facetName}">${selectUI}</div>`;
    }).join('');
    if(this.options.facet.selectedFacetsEl && selectedFacets) {
        const k = Object.keys(selectedFacets);
        let selectedUi = ``;
        for(let i=0;i<k.length;i++){
            const j = k[i];
            const vals = selectedFacets[j];
            vals.forEach(item => {
                const {
                    name,
                    count,
                    dataId
                } = item;
                selectedUi += this.options.facet.selectedFacetTemplate.bind(this)({
                    facetName:j
                },{
                    name:name,
                    dataId:(dataId)?dataId:name,
                    count:count?count:0
                });
            })
        }
        this.selectedFacetWrapper.innerHTML = this.options.facet.selectedFacetItemTemplate(selectedUi);
    }
    
    return  `<div class="UNX-facets-inner-wrapper">${facetsListUI}</div>`;
}
export default renderTextFacets;
