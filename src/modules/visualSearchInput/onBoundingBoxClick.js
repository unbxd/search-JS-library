
const onBoundingBoxClick = function(e) {
    let elem  = e.target;
    this.viewState.lastDidYouMean = "";
    //needs fixing
    // const selected = (this.options.pagesize.action === "click") ? elem:elem.options[elem.selectedIndex];
    // const val = selected.id;
    // const {
    //     pageSizeChange
    // } =  this.events;
    if( (this.state.selectedBoundingBox !== parseInt(elem.getAttribute("boxid")))) {
        this.checkFacets();
        this.state.isClickOnBox = true
        this.state.selectedBoundingBox = parseInt(elem.getAttribute("boxid"))
        let boxUrl;
        if(this.state.responseObj && this.state.responseObj.searchMetaData && this.state.responseObj.searchMetaData.image && this.state.responseObj.searchMetaData.image.boxes){
          this.state.responseObj.searchMetaData.image.boxes.forEach(element => {
                if(this.state.selectedBoundingBox === element.id){
                    boxUrl =  element.url;
                }
                
            });
        }
        this.state.selectedBoxUrl = boxUrl
        //this.setBoundingBox(Number(val));
        this.getResults.bind(this)();
        // this.options.onEvent(this.pageSizeChange, {
        //     count:val
        // });
    }
}
export {
    onBoundingBoxClick 
};
