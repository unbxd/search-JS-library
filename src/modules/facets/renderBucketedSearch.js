
const BucketedSearchUi = function(facets,selected,selectedCategories) {
    let ui = "";
    let filters = facets;
    if(selectedCategories) {
        selectedCategories.forEach(item => {
            const {
                level,
                filterField,
                value
            } = item;
            const levelCss = `${this.multiLevelFacetSelector}  category-level-${level}`
            ui += `<button 
            data-parent="${filterField}"
            data-level="${level}"
            data-name="${value}"
            class=" ${levelCss} selected-crumb"
            data-action = "clearCategoryFilter">
            ${value} x</button>`
        })
    }
    filters.forEach(facet => {
        const {
            level,
            displayName,
            values,
            filterField
        } = facet;
        let {
            multiLevelField
        } = facet;
        if (!multiLevelField) {
            multiLevelField = filterField;
        }
        let levelCss = `category-level-${level}`;
        const valueUI = values.map(item => {
            const {
                name,
                count
            } = item;
            return `<button 
                data-parent="${multiLevelField}"
                data-level="${level}"
                class="${this.multiLevelFacetSelector} ${levelCss}"
                data-name="${name}"
                data-action = "setCategoryFilter">
                ${name}-- ${count }</button>`
        })
        ui += `${valueUI.join('')}`
    })
    if(ui !== "") {
        return `<div class="bucketed-facet-wrap">
            <h6>Bucketed facets</h6>
                ${ui}
        </div>`

    } else {
        return "";
    }
}
export default BucketedSearchUi;