const breadCrumbsUI = function(breadcrumbs){
    let ui = ``;
    breadcrumbs.forEach((item ,id )=> {
        const {
            level,
            filterField,
            value
        } = item;
        const css = `${this.options.breadcrumb.selectorClass} UNX-bread-crumb-item`;
        if(id > 0) {
            ui += `<span class="UNX-slash"> / </span>`;
        }
        ui += [`<button data-parent="${filterField}`,
        `data-level="${level}" class="${css}" data-name="${value}" data-action = "clearCategoryFilter">`,
        `${decodeURIComponent(value)}</button>`].join('')
    })
    return `<div class="bread-crumb-main">${ui}</div>`
}
export default breadCrumbsUI;
