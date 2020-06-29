const renderProductViewType =  function(productViewType, selectedViewType) {
    const isDisabled = (this.getSearchResults())?false:true;
    const {
        selectedViewTypeClass,
        viewTypeClass
    } = productViewType;
    let listBtnCss =`unbxd-list-btn ${viewTypeClass}`;
    let gridBtnCss = `unbxd-grid-btn ${viewTypeClass}`;
    if(selectedViewType === 'LIST' ) {
        listBtnCss += ` ${selectedViewTypeClass}`
    }
    if(selectedViewType === 'GRID' ) {
        gridBtnCss += ` ${selectedViewTypeClass}`
    }
    let listBtn = `<button
            id="listBtn"
            class="${listBtnCss}"
            data-view-action="LIST" >List</button>`;
    let gridBtn = `<button
            id="gridBtn"
            class="${gridBtnCss}"
            data-view-action="GRID" >Grid</button>`;

    if(isDisabled) {
        listBtn = `<button
            id="listBtn"
            disabled
            class="${listBtnCss} disabled-btn"
            data-view-action="LIST" >List</button>`;
        gridBtn = `<button
            id="gridBtn"
            disabled
            class="${gridBtnCss}  disabled-btn"
            data-view-action="GRID" >Grid</button>`;
    }

    return `<div class='product-view-container'>
        ${listBtn}
        ${gridBtn}
    </div>`

}
export default renderProductViewType;
