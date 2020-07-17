
const multiLevelFacetUI = function(facets,selectedCategories) {
    let ui = "";
    let filters = facets;
    if(selectedCategories) {
        selectedCategories.forEach(item => {
            const {
                level,
                filterField,
                value
            } = item;
            const levelCss = `${this.multiLevelFacetSelector}  UNX-category-level-${level}`
            ui += [`<button data-parent="${filterField}" data-level="${level}" data-name="${value}"`,
            `class=" ${levelCss} UNX-selected-crumb" data-action = "clearCategoryFilter">`,
                `<span class="UNX-category-icon"></span><label class="UNX-facet-text">${decodeURIComponent(value)}</label>`,
            `</button>`].join('')
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
        let levelCss = `UNX-category-level-${level}`;
        const valueUI = values.map(item => {
            const {
                name,
                count
            } = item;
            return [`<button data-parent="${multiLevelField}" data-level="${level}"`,
                `class="${this.multiLevelFacetSelector} ${levelCss}" data-name="${name}" data-action = "setCategoryFilter">`,
                `<label class="UNX-facet-text">${name}</label><label class="UNX-facet-count">(${count})</label></button>`].join('')
        })
        ui += `<div class="UNX-category-values">${valueUI.join('')}</div>`
    })
    if(ui !== "") {
        return [`<div class="UNX-multi-facet-wrap">`,
            `<h6>Bucketed facets</h6>${ui}</div>`].join('')

    } else {
        return "";
    }
}
export default multiLevelFacetUI;