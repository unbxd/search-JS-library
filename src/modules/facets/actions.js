const facetsClickFn = function(e) {
    const dataElem = e.target.dataset;
    const {
        actionType,
        facetName
    } = dataElem;
    if(actionType === this.events.deleteFacet) {
        if(this.findSelectedFacet(facetName)) {
            this.deleteAFacet.bind(this)(facetName);
            this.options.callBackFn(this,actionType, {
                facetName
            });
        }
    }
}
const findChangedFacet = function(e) {
    const elem = e.target;
    const selected = (this.options.facetAction === "click") ? elem:elem.options[elem.selectedIndex];
    const dataSet = selected.dataset;
    const {
        facetName,
        facetAction,
        id
    } = dataSet;
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
        }
    }
}
const onClickRangeFacet = function(e) {
    const {
        action,
        facetName
    } = e.target.dataset;
    if(action === this.actions.filterPriceRange) {
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
    facetsClickFn,
    findChangedFacet,
    onClickRangeFacet,
    onBucketedFacet
}