import {
    findChangedFacet
} from './actions';

function renderRangeFacet(facet,isExpanded) {
    const {
        facetName
    } = facet;
    const {
        openFacet,
        closeFacet
    } = this.cssList;
    const {
        isCollapsible
    } = this.options.facet;
    const selectedRanges = this.state.rangeFacet;
    const facetUI =  this.options.facet.rangeTemplate.bind(this)([facet],selectedRanges);
    let styles = (isExpanded)? openFacet:closeFacet;
    if(!isCollapsible) {
        styles="";
    }
    return `<div id="${facetName}" class="UNX-facet-item-d range-facets-block ${styles}">${facetUI}<div>`
}

function setRangeFilter(data){
    this.setRangeFacet(data)
}
function renderMultiLevelFacet(bucketedFacet,isExpanded) {
    const breadCrumb = this.getBreadCrumbsList();
    let bucketedUi = ``;
    const self = this;
    const {
        openFacet,
        closeFacet
    } = this.cssList;
    const{
        facetName
    } = bucketedFacet;
    const {
        facet
    } = this.options;
    const {
        isCollapsible
    } = facet;
    const valueUI = self.options.facet.multiLevelFacetTemplate.bind(this)(bucketedFacet, breadCrumb, facet);
    bucketedUi += self.options.facet.facetTemplate.bind(self)(bucketedFacet, valueUI,isExpanded,null, facet);
    let styles = (isExpanded)? openFacet:closeFacet;
    if(!isCollapsible) {
        styles="";
    }
    return `<div id="${facetName}" class="UNX-facet-item-d UNX-multilivel-facets-block UNX-multilevel-block ${styles}">${bucketedUi}<div>`
}
const isSelectedRange = function(facetName,range){
    const selections = this.getSelectedRanges(facetName);
    const {
        from,
        to,
        end
    } = range;
    const last = end || to;
    const aR = `[${from.name} TO ${last.name}]`
    if(selections && selections.indexOf(aR) >= 0) {
        return true
    }
    return false;  
}
const clearAllFacets = function() {
    this.state.selectedFacets = {};
    this.state.rangeFacet = [];
    this.state.categoryFilter = {};
}
const isExpandedFacet = function(facetName){
    const {
        expandedFacets
    } = this.viewState;
    let isFound = false;
    if(expandedFacets[facetName] === true) {
        isFound = true
    }
    return isFound;
}
const setSearchFacetsText = function(facet,value) {
    this.viewState.searchFacetsText[facet] = value;
    this.reRenderTextFacet(facet);
}
const getSearchFacetsText = function(facet) {
    return this.viewState.searchFacetsText[facet] || "";
}

const reRenderTextFacet = function(facetName) {
    const {
        textFacetWrapper,
        facetClass
    } = this.options.facet;
    const facetSearchTxt = this.getSearchFacetsText(facetName) || "";
    const items = document.querySelectorAll(`#${facetName} .${facetClass}`);
    items.forEach(item => {
        const {
            id
        } = item.dataset || {};
        if(id && id.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) >= 0) {
            item.classList.remove("UNX-search-hidden")
        } else {
            item.classList.add("UNX-search-hidden")
        }
    })
}
const getAFacetByName = function(name) {
    const facets = this.getFacets();
    let selected = [];
    if(name) {
        selected = facets.filter(item => {
            const {
                facetName
            } = item;
            return facetName === name
        })
    }
    return selected;
}
const sortFacets = (a,b) => {return (a.position > b.position) ? 1 : -1}
const getAllTextFacets = function() {
    const text = this.getFacets();
    return text.map(item => {
        item.facetType = "text";
        return item;
    })
}
const getAllRangeFacets = function() {
    
    const ranges = this.getRanges();
    return ranges.map(item => {
        item.facetType = "range";
        return item;
    })
}
const getAllCategory = function() {
    const multiFacets = this.getBucketedFacets();
    return multiFacets.map(item => {
        item.facetType = "category";
        return item;
    })
}

const getAllFacets = function() {
    const texts = this.getAllTextFacets();
    const ranges = this.getAllRangeFacets();
    const multiFacets = this.getAllCategory();
    let all  = [...multiFacets,...texts,...ranges];
    return all.sort(sortFacets);

}
const renderTextFacet = function(facetItem,selectedFacet,isExpanded,facetSearchTxt, onlyValues) {
    let valuesUI = [];
    const {
        facetName,
        values = []
    } = facetItem;
    const {
        openFacet,
        closeFacet
    } = this.cssList;
    let selectedFacetsUI = ``;
    const self = this;
    const {
        facet
    } =  this.options;
    const {
        isCollapsible
    } = facet;
    if(values.length > 0) {
        valuesUI = values.map((value, index) => {
            const  {
                name,
            } = value;
            let selected = false;
            if(selectedFacet) {
                selected = selectedFacet.some((facet) => {
                    return facet.name === name
                })
            }
            if(selected) {
                if(self.options.facet.selectedFacetsEl) {
                    selectedFacetsUI += self.options.facet.selectedFacetTemplate.bind(self)(facetItem,value,"",facet);
                }
                return self.options.facet.selectedFacetTemplate.bind(self)(facetItem,value,facetSearchTxt,facet)
            } else{
                return self.options.facet.facetItemTemplate.bind(self)(facetItem, value,facetSearchTxt)
            }
        });
    }
    if(onlyValues) {
        return valuesUI.join('');
    }
    const facetUI = this.options.facet.facetTemplate.bind(this)(facetItem, valuesUI.join(''),isExpanded,facetSearchTxt, facet);
    let styles = (isExpanded)? openFacet:closeFacet;
    if(!isCollapsible) {
        styles="";
    }
    return `<div id="${facetName}" class="UNX-facet-item-d ${styles}">${facetUI}<div>`
}
const renderFacets = function(){
    const {
        facet
    } = this.options;
    const {
        defaultOpen,
        applyMultipleFilters,
        isCollapsible,
        selectedFacetsEl
    } = facet;
    const {
        expandedFacets,
        lastAction
    } = this.viewState;
    if(lastAction === "updatedRangeSlider") {
        return false;
    }
    const self = this;
    const allFacets = this.getAllFacets();
    const {
        facetsWrapper,
        selectedFacetWrapper
    } = this;
    facetsWrapper.innerHTML = ``;
    const selectedFacets = this.getSelectedFacets();
    allFacets.forEach((facetItem,idx) => {
        const {
            facetType,
            facetName
        } = facetItem;
        if(typeof expandedFacets[facetName] === "undefined" && defaultOpen === "ALL") {
            expandedFacets[facetName] = true
        }
        if(defaultOpen === "FIRST" && idx == 0) {
            expandedFacets[facetName] = true
        }
        const isExpanded =  this.isExpandedFacet(facetName);
        const facetSearchTxt = this.getSearchFacetsText(facetName) || "";
        const selectedFacet = selectedFacets[facetName];
        if(facetType === "text") {
            facetsWrapper.innerHTML += this.renderTextFacet(facetItem,selectedFacet,isExpanded,facetSearchTxt);
        }
        if(facetType === "range") {
            facetsWrapper.innerHTML += this.renderRangeFacet(facetItem,isExpanded,"");
        }
        if(facetType === "category") {
            facetsWrapper.innerHTML += this.renderMultiLevelFacet(facetItem,isExpanded,"");
        }
        this.viewState.facetElementMap[facetName] = facetName;
        let shouldRenderSelected = true;
        const qState = this.getStateFromUrl();
        const ql = Object.keys(qState.selectedFacets).length;
        if((lastAction === "addedAFacet" || lastAction ==="deletedAfacet")  && applyMultipleFilters && ql === 0) {
            shouldRenderSelected = false;
        }
        if(selectedFacetsEl && selectedFacets && shouldRenderSelected ) {
            const k = Object.keys(selectedFacets);
            let selectedUi = ``;
            for(let i=0;i<k.length;i++){
                const j = k[i];
                const vals = selectedFacets[j];
                vals.forEach(item => {
                    const {
                        name,
                        count,
                        dataId
                    } = item;
                    selectedUi += this.options.facet.selectedFacetTemplate.bind(this)({
                        facetName:j
                    },{
                        name:name,
                        dataId:(dataId)?dataId:name,
                        count:count?count:0
                    });
                })
            }
            selectedFacetWrapper.innerHTML = this.options.facet.selectedFacetItemTemplate(selectedUi, facet);
        }

    })
    this.options.facet.onFacetLoad.bind(this)(allFacets);
}



const setFacets = (prototype) => {
    prototype = Object.assign(prototype,{
        findChangedFacet,
        setRangeFilter,
        isSelectedRange,
        clearAllFacets,
        isExpandedFacet,
        setSearchFacetsText,
        getSearchFacetsText,
        reRenderTextFacet,
        getAFacetByName,
        getAllFacets,
        getAllTextFacets,
        getAllRangeFacets,
        getAllCategory,
        renderTextFacet,
        renderRangeFacet,
        renderMultiLevelFacet,
        renderFacets
    })
};

export {
    setFacets as default,
    findChangedFacet,
    setRangeFilter,
    clearAllFacets,
    isExpandedFacet,
    setSearchFacetsText,
    getSearchFacetsText,
    reRenderTextFacet,
    getAFacetByName,
    getAllFacets,
    getAllTextFacets,
    getAllRangeFacets,
    getAllCategory,
    renderTextFacet,
    renderRangeFacet,
    renderMultiLevelFacet,
    renderFacets
};
