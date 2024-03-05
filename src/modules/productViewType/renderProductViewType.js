import libEvents from "../../../../search-JS-core/src/constants";

const renderProductViewType =  function(selectedViewType, productViewType={}) {
    try{
        const isDisabled = (this.getSearchResults()) ? false : true;
        const {
            selectedViewTypeClass = "",
            viewTypeClass = ""
        } = productViewType;
        let {
            UNX_gridBtn = "",
            UNX_listBtn = ""
        } = this.testIds;
        let listBtnCss = `UNX-list-btn ${viewTypeClass}`;
        let gridBtnCss = `UNX-grid-btn ${viewTypeClass}`;
        const gTAttr = `data-test-id=${UNX_gridBtn}`;
        const lTAttr = `data-test-id=${UNX_listBtn}`;
        if (selectedViewType === 'LIST') {
            listBtnCss += ` ${selectedViewTypeClass}`
        }
        if (selectedViewType === 'GRID') {
            gridBtnCss += ` ${selectedViewTypeClass}`
        }
        let listBtn = `<button id="listBtn" class="${listBtnCss}" ${lTAttr} data-view-action="LIST" >List</button>`;
        let gridBtn = `<button ${gTAttr} id="gridBtn" class="${gridBtnCss}" data-view-action="GRID" >Grid</button>`;
        if (isDisabled) {
            listBtn = `<button ${lTAttr} id="listBtn" disabled class="${listBtnCss} disabled-btn" data-view-action="LIST" >List</button>`;
            gridBtn = `<button ${gTAttr} id="gridBtn" disabled class="${gridBtnCss}  disabled-btn"data-view-action="GRID" >Grid</button>`;
        }
        return `${listBtn} ${gridBtn}`
    }catch(err){
        this.onError("productViewtype > renderProductViewType",err,libEvents.runtimeError)
    }
   

}
export default renderProductViewType;
