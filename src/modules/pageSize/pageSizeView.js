const pageSizeUi = function() {
    let ui = ``;
    const {
        pageSizeOptions,
        pageSizeDisplayType,
        pageSize
    } = this.options;
    if(pageSizeDisplayType === "Dropdown") {
        ui = `<select  class="unx-select-pagesize ${this.unxSelectors.unxPageSize}">`;
        pageSizeOptions.forEach((opt)=>{
            if(pageSize == opt) {
                ui+=`<option selected id="${opt}">${opt}</option>`
            } else{
                ui+=`<option id="${opt}">${opt}</option>`
            }
            
        });
        ui+= `</select>`
    } else{
        pageSizeOptions.forEach((opt)=>{
            const selected = (pageSize == opt)?"selected-page-size":'';
            ui+=`<button class="unx-btn-pagesize ${this.unxSelectors.unxPageSize} ${selected}" id="${opt}">${opt}</button>`
        });
    }
    return `<div>
        ${ui}
    </div>`;
}
export default pageSizeUi;
