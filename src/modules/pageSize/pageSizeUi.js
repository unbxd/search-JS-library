const pageSizeUi = function(selected, pagesize={}) {
    const { options = [], pageSizeClass = "", selectedPageSizeClass =""} = pagesize || {};
    const {
        UNX_pagesize = ""
    } = this.testIds;
    let ui = `<label class="UNX-hidden" for="unxPageSize">Sort By</label><select id="unxPageSize" name="unxPageSize" class="UNX-select-pagesize ${pageSizeClass}">`;
    options && options.forEach((opt,i)=>{
        const tId = `data-test-id="${UNX_pagesize}${i+1}"`;
        if(selected == opt) {
            ui+=`<option selected ${tId} class="${selectedPageSizeClass}" id="${opt}">${opt}</option>`;
        } else{
            ui+=`<option ${tId} id="${opt}">${opt}</option>`;
        }
        
    });
    ui+= `</select>`
    return `<div class="UNX-pagesize-block">${ui}</div>`;
}
export default pageSizeUi;
