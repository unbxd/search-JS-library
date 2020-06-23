const renderFacets = function(argFacets, selectedArgFacets) {
    const facets = (argFacets) ? argFacets : this.getFacets();
    const selectedFacets = (selectedArgFacets) ? selectedArgFacets: this.getSelectedFacets();
    const self = this;
    let selectedFacetsUI = ``;
    const {
        selectedFacetBlock
    } = this.options;
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
                        return JSON.stringify(facet.name) === JSON.stringify(name)
                    })
                }
                if(selected) {
                    if(selectedFacetBlock) {
                        selectedFacetsUI += this.options.selectedFacetTemplate(facet,value);
                    } else {
                        return this.options.selectedFacetTemplate(facet,value)
                    }
                } else{
                    return this.options.facetTemplate(facet, value)
                }
            });
            selectUI = this.options.facetItemTemplate(facet, valuesUI.join(''))
        }
        if(selectedFacetBlock) {
            selectedFacetBlock.innerHTML = selectedFacetsUI;
        }
        
        return `<div data-id="${facetName}">
            ${selectUI}
        </div>`;
    }).join('');
    
    return  `<div class="${this.options.facetClass}">
        ${facetsListUI}
    </div>`;
}
export default renderFacets;
