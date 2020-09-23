const findChangedFacet = function(e) {
    const elem = e.target;
    const selected = (this.options.facet.facetAction === "click") ? elem:elem.options[elem.selectedIndex];
    const dataSet = selected.dataset;
    const {
        facetName,
        facetAction,
        id,
        action,
        end,
        start
    } = dataSet;
    const qState = this.getStateFromUrl();
    const selectedfacets = this.getSelectedFacets();
    const ln = (selectedfacets) ?Object.keys(selectedfacets).length:0;
    const ql = Object.keys(qState.selectedFacets).length;
    const {
        productType
    } = this.options;
    const {
        events,
        actions
    } = this;
    if(facetAction === actions.changeFacet) {
        const selectedfacetInfo = this.getSelectedFacet(facetName);
        const selectedOpt = {
            selectedFacetName : facetName,
            selectedFacetId : id,
            facetData : selectedfacetInfo
        }
        this.viewState.lastAction = "addedAFacet";
        this.options.onEvent(this, events.facetClick, {
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
    if(facetAction === actions.deleteFacetValue) {
        if(this.findSelectedFacet(facetName)) {
            this.viewState.lastAction = "deletedAfacet";
            this.deleteAFacet.bind(this)(facetName, id);
            this.options.onEvent(this,events.deleteFacetValue, {
                facetName
            });
            this.getCallbackActions({
                facetName,
                facetAction,
                id
            },'facetClick');
            const fl = selectedfacets[facetName].length;
            if(ql > 0 && ln === 1 && fl === 0 && this.options.facet.applyMultipleFilters) {
                this.setPageStart(0);
                this.getResults();
            }
        }
    }
    if(facetAction === actions.deleteFacet) {
        if(this.findSelectedFacet(facetName)) {
            this.viewState.lastAction = "deletedAfacet";
            this.deleteAFacet.bind(this)(facetName);
            this.options.onEvent(this,events.deleteFacet, {
                facetName
            });
            this.getCallbackActions({
                facetName,
                facetAction,
                id
            },'facetClick');
            const isReload = qState.selectedFacets[facetName];
            if(isReload) {
                this.viewState.lastAction = "clearAFacet";
                this.setPageStart(0);
                this.getResults();
            }
        }
    }
    if(facetAction === "applyFacets") {
        this.viewState.lastAction = "applyFacets";
        this.setPageStart(0);
        this.getResults();
    }
    if(facetAction === "clearAllFacets") {
        this.viewState.lastAction = "clearAllFacets";
        this.state.selectedFacets = [];
        this.setPageStart(0);
        this.getResults();
    }

    if(action === actions.setCategoryFilter) {
        if(productType === "SEARCH") {
            this.setCategoryFilter(dataSet);
            this.options.onEvent(this, events.setCategoryFilter, dataSet);
        } else {
            this.setCategoryId(dataSet, this);
        }
        this.getResults();
        this.getCallbackActions(dataSet,'facetClick');
    }
    if(action === actions.clearCategoryFilter) {
        if(productType === "SEARCH") {
            this.deleteCategoryFilter(dataSet);
            this.options.onEvent(this,events.deleteCategoryFilter, dataSet);
        } else {
            this.setCategoryId(dataSet, this);
        }
        this.getResults();
        this.getCallbackActions(dataSet,'facetClick');
    }
    const ranges = this.state.rangeFacet[facetName];
    const isSelections = Object.keys(qState.rangeFacet);
    
    if(action === "setRange") {
        let already = false
        if(ranges &&ranges.length === 1 && isSelections.length > 0) {
            already = this.isSelectedRange(facetName,{
                from:{
                    name:start
                },
                end:{
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
    if(action === actions.applyRange) {
        this.applyRangeFacet();
        this.options.onEvent(this,action, {
            facetName
        });
        this.getCallbackActions({
            facetName
        },'facetClick');
    }
    if(action === actions.clearPriceRange && facetName) {
        this.clearARangeFacet(facetName);
        this.getResults.bind(this)();
        this.options.onEvent(this,action, {
            facetName
        });
        this.getCallbackActions({
            facetName
        },'facetClick');
    }
    this.viewState.lastAction = action;
    //this.renderFacets();
}


export {
    findChangedFacet
}