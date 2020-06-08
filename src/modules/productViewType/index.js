const renderProductViewType =  function(productViewType) {
    return `<div class='product-view-container'>
        <button id="listBtn" class="${(productViewType === 'LIST' ) ? 'selected-view':''} view-btn" data-view-action="LIST" >List</button>
        <button id="gridBtn" class="${(productViewType === 'GRID' ) ? 'selected-view':''} view-btn"  data-view-action="GRID" >Grid</button>
    </div>`

}
export default renderProductViewType;
