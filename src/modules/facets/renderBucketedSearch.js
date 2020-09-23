
const multiLevelFacetUI = function(facet,selectedCategories,facetSearchTxt, facetConfig) {
    let ui = "";
    let {
        multiLevelFacetSelectorClass,
        facetClass
    } = facetConfig;
    const {
        UNX_facetLevel
    } = this.testIds;
    if(selectedCategories) {
        selectedCategories.forEach(item => {
            const {
                level,
                filterField,
                value
            } = item;
            let lTid = `data-test-id="${UNX_facetLevel}${level}"`;
            const levelCss = `${multiLevelFacetSelectorClass}  UNX-category-level-${level}`
            ui += [`<button ${lTid} data-parent="${filterField}" data-level="${level}" data-name="${value}"`,
            `class=" ${levelCss} UNX-selected-crumb ${facetClass}" data-action = "clearCategoryFilter">`,
                `<span class="UNX-category-icon"></span><label class="UNX-facet-text">${decodeURIComponent(value)}</label>`,
            `</button>`].join('')
        })
    }
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
    let lTid = `data-test-id="${UNX_facetLevel}${level}"`;
    let levelCss = `UNX-category-level-${level}`;
    const valueUI = values.map(item => {
        const {
            name,
            count
        } = item;
        if(facetSearchTxt && facetSearchTxt.length > 0) {
            if(name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0 ){
                facetClass +=' UNX-search-hidden'
            }
        }
        return [`<button ${lTid} data-parent="${multiLevelField}" data-level="${level}"`,
            `class="${multiLevelFacetSelectorClass} ${levelCss} ${facetClass}" data-name="${name}" data-action = "setCategoryFilter">`,
            `<label class="UNX-facet-text">${name}</label><label class="UNX-facet-count">(${count})</label></button>`].join('')
    })
    ui += `<div class="UNX-category-values">${valueUI.join('')}</div>`
    if(ui !== "") {
        return [`<div class="UNX-multi-facet-wrap">`,
            `${ui}</div>`].join('')

    } else {
        return "";
    }
}
export default multiLevelFacetUI;