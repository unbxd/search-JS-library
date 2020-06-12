const renderProductViewType =  function(productViewType) {
    const isDisabled = (this.getSearchResults())?false:true;
    let listBtn = `<button
            id="listBtn"
            class="${(productViewType === 'LIST' ) ? 'selected-view':''} view-btn "
            data-view-action="LIST" >List</button>`;
    let gridBtn = `<button
            id="gridBtn"
            class="${(productViewType === 'GRID' ) ? 'selected-view':''} view-btn"
            data-view-action="GRID" >Grid</button>`;
    if(isDisabled) {
        listBtn = `<button
            id="listBtn"
            disabled
            class="${(productViewType === 'LIST' ) ? 'selected-view':''} view-btn disabled-btn"
            data-view-action="LIST" >List</button>`;
        gridBtn = `<button
            id="gridBtn"
            disabled
            class="${(productViewType === 'GRID' ) ? 'selected-view':''} view-btn disabled-btn"
            data-view-action="GRID" >Grid</button>`;
    }

    return `<div class='product-view-container'>
        ${listBtn}
        ${gridBtn}
    </div>`

}
export default renderProductViewType;
