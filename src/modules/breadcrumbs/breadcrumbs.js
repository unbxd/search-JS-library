const breadCrumpUI = function(breadcrumps){
    let ui = ``;
    breadcrumps.forEach((item ,id )=> {
        const {
            level,
            filterField,
            value
        } = item;
        const css = `${this.options.breadcrumbSelectorClass} bread-crumb-item`;
        if(id > 0) {
            ui += `<span> > </span>`
        }
        ui += `<button 
        data-parent="${filterField}"
        data-level="${level}"
        class="${css}"
        data-name="${value}"
        data-action = "clearCategoryFilter">
        ${value} x</button>`
    })
    return `<div class="bread-crumb-main">${ui}</div>`
}
export default breadCrumpUI;