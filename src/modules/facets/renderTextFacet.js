export default function(facetItem,selectedFacet = [],isExpanded,facetSearchTxt, onlyValues) {
    let valuesUI = [];
    const {
        facetName,
        values = []
    } = facetItem;
    const {
        openFacet,
        closeFacet
    } = this.cssList;
    const self = this;
    const {
        facet
    } =  this.options;
    const {
        isCollapsible
    } = facet;
    let selected = false;
    if(values.length > 0) {
        valuesUI = values.map((value = {}, index) => {
            const { dataId } = value;
            facetItem.isSelected = selectedFacet.some((facet) => {
                return facet.dataId === dataId;
            })
            if(facetItem.isSelected) { 
                // if at all isSelected is set to true once, capture that and store it 
                // in selected variable for setting the final isSelected value
                selected = facetItem.isSelected
            }
            return self.options.facet.facetItemTemplate.bind(self)(facetItem,value,facetSearchTxt)
            // if(selectedFacet) {
            //     selected = selectedFacet.some((facet) => {
            //         return facet.dataId === dataId;
            //     })
            // }
            // if(selected) {
            //     facetItem.isSelected = true;
            //     return self.options.facet.facetItemTemplate.bind(self)(facetItem,value,facetSearchTxt,facet)
            // } else{
            //     facetItem.isSelected = false;
            //     return self.options.facet.facetItemTemplate.bind(self)(facetItem,value,facetSearchTxt)
            // }
        });
    }
    if(onlyValues) {
        return valuesUI.join('');
    }
    facetItem.isSelected = selected;
    const facetUI = this.options.facet.facetTemplate.bind(this)(facetItem, valuesUI.join(''),isExpanded,facetSearchTxt, facet);
    let styles = (isExpanded)? openFacet:closeFacet;
    if(!isCollapsible) {
        styles="";
    }
    return `<div class="UNX-facet-item-d ${facetName} ${styles}">${facetUI}</div>`;
};
