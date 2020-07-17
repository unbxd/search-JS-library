const findChangedFacet = function(e) {
    const elem = e.target;
    const selected = (this.options.facet.facetAction === "click") ? elem:elem.options[elem.selectedIndex];
    const dataSet = selected.dataset;
    const {
        facetName,
        facetAction,
        id
    } = dataSet;
    const qState = this.getStateFromUrl();
    const selectedfacets = this.getSelectedFacets()[facetName];
    const ln = (selectedfacets) ?Object.keys(selectedfacets).length:0;
    const ql = Object.keys(qState.selectedFacets).length;
    if(facetAction === this.events.changeFacet) {
        const selectedfacetInfo = this.getSelectedFacet(facetName);
        const selectedOpt = {
            selectedFacetName : facetName,
            selectedFacetId : id,
            facetData : selectedfacetInfo
        }
        this.options.callBackFn(this,this.events.facetClick, {
            facetName,
            facetData:selectedfacetInfo
        });
        this.updateFacets(selectedOpt);
        this.getCallbackActions({
            facetName,
            facetAction,
            id
        },'facetClick');
    }
    if(facetAction === this.actions.deleteFacetValue) {
        if(this.findSelectedFacet(facetName)) {
            this.deleteAFacet.bind(this)(facetName, id);
            this.options.callBackFn(this,facetAction, {
                facetName
            });
            this.getCallbackActions({
                facetName,
                facetAction,
                id
            },'facetClick');
            if(ql > 0 && ln === 1 && this.options.facet.applyMultipleFilters) {
                this.setPageStart(0);
                this.getResults();
            }
        }
    }
    if(facetAction === this.actions.deleteFacet) {
        if(this.findSelectedFacet(facetName)) {
            this.deleteAFacet.bind(this)(facetName);
            this.options.callBackFn(this,facetAction, {
                facetName
            });
            this.getCallbackActions({
                facetName,
                facetAction,
                id
            },'facetClick');
            const isReload = qState.selectedFacets[facetName];
            if(isReload) {
                this.setPageStart(0);
                this.getResults();
            }
        }
    }
    if(facetAction === "applyFacets") {
        this.setPageStart(0);
        this.getResults();
    }
    if(facetAction === "clearAllFacets") {
        this.state.selectedFacets = [];
        this.setPageStart(0);
        this.getResults();
    }
    this.renderTextFacets();
}
const onClickRangeFacet = function(e) {
    const {
        action,
        facetName,
        end,
        start
    } = e.target.dataset;
    const self = this;
    const q = this.getStateFromUrl();
    const ranges = this.state.rangeFacet[facetName];
    const isSelections = Object.keys(q.rangeFacet);
    if(action === "setRange") {
        let already = false
        if(ranges &&ranges.length === 1 && isSelections.length > 0) {
            already = this.isSelectedRange(facetName,{
                from:{
                    name:start
                },
                to:{
                    name:end
                }
            });
        };
        if(!already) {
            this.setRangeFacet({
                start:start,
                end:end,
                facetName:facetName,
                applyMultiple:true
            });
        }
        if(already) {
            this.state.rangeFacet = [];
            this.applyRangeFacet();
        }
        if(!this.options.facet.applyMultipleFilters ){
            this.setPageStart(0);
            this.applyRangeFacet();
        }
    }
    if(action === "clearRangeFacets") {
        this.state.rangeFacet = [];
        this.renderFacets();
        if(isSelections.length > 0) {;
            this.applyRangeFacet();
        }
    }
    if(action === this.actions.applyRange) {

        this.applyRangeFacet();
        this.options.callBackFn(this,action, {
            facetName
        });
        this.getCallbackActions({
            facetName
        },'facetClick');
    }
    if(action === this.actions.clearPriceRange && facetName) {
        this.clearARangeFacet(facetName);
        this.getResults.bind(this)();
        this.options.callBackFn(this,action, {
            facetName
        });
        this.getCallbackActions({
            facetName
        },'facetClick');
    }
}
const onBucketedFacet = function(e) {
    const data = e.target.dataset;
    if(data.action === this.actions.setCategoryFilter) {
        this.setCategoryFilter(data);
        this.options.callBackFn(this,data.action, data);
        this.getResults();
        this.getCallbackActions(data,'facetClick');
    }
    if(data.action === this.actions.clearCategoryFilter) {
        this.deleteCategoryFilter(data);
        this.options.callBackFn(this,data.action, data);
        this.getResults();
        this.getCallbackActions(data,'facetClick');
    }
}
export {
    findChangedFacet,
    onClickRangeFacet,
    onBucketedFacet
}