const renderFacets = function(argFacets, selectedArgFacets) {
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
        if(this.options.facet.selectedFacetsEl) {
            this.options.facet.selectedFacetsEl.innerHTML = this.options.facet.selectedFacetItemTemplate(selectedFacetsUI);
        }
        
        return `<div data-id="${facetName}">
            ${selectUI}
        </div>`;
    }).join('');
    
    return  `<div class="UNX-facets-inner-wrapper">
        ${facetsListUI}
    </div>`;
}
export default renderFacets;
