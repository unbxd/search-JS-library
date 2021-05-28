import Initialize from "../initializeSdk";
const getAFacet = (testUnbxd,type)=> {
    const all  = testUnbxd.getAllFacets();
    let f = null;
    all.forEach((item)=>{
        const {
            facetType
        } = item;
        if(facetType === type ) {
            f = item;
        }
    })
    return f;
}
const getAllFacetsFromUi = (testUnbxd) => {
    return testUnbxd.facetsWrapper.querySelectorAll(".UNX-facets-block");
}
const getAllFacetsType = (testUnbxd) => {
    return testUnbxd.facetsWrapper.querySelectorAll(".UNX-facet-item-d ");
}
const getAllSelectedFacetsFromSelected = (testUnbxd) => {
    return testUnbxd.facetsWrapper.querySelectorAll(".UNX-delete-facet");
}
const getAllFacetsValues = (testUnbxd) => {
    const all = testUnbxd.getAllFacets();
    let l = 0;
    all.forEach((item)=> {
        const {
            values
        } = item;
        values.forEach((val) => {
            l +=1
        })
    });
    return l;
}
const getAFacetElem = (testUnbxd, attrName, value)=> {
    const all  = getAllFacetsFromUi(testUnbxd);
    let fElem = null;
    all.forEach((item)=>{
        const {
            facetName,
            parent,
            id,
            name,
            facetType,
            start,
            end
        } = item.dataset;
        const ftype = parent || facetName;
        const fname = name || id;
        if((ftype === attrName) && (fname === value) ) {
            fElem = item;
        }
        if(facetType === "range" && ftype === attrName && start == value.from.dataId && end == value.end.dataId  ) {
            fElem = item;
        }
    })
    return fElem ;
}


describe('facet- module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};
    beforeAll(async() => {
        const facetHtml  =`
            <div class="facetsEl"></div>
            <div class="selectedFacetWrapper"></div>
        `;
        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "facetsElement");
        document.body.appendChild(pageElem);
        document.body.querySelector(".facetsElement").innerHTML = facetHtml;
        newInstance = new Initialize({
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH"
            },
            facet:{
                facetsEl: document.querySelector(".facetsEl"),
                applyMultipleFilters: false,
                defaultOpen: "FIRST",
                viewMoreLimit:2
            },
            selectedFacets:{ el:document.querySelector(".selectedFacetWrapper") }
        });
        testUnbxd = newInstance.testUnbxd;
        asyncApiPromise = newInstance.asyncPromise;
    });
    test('set a search call - done', async() => {
        testUnbxd.getResults("*");
        return asyncApiPromise().then(function(){
            expect(testUnbxd.state.userInput).toBe('*');
        })
    });
    test('check the rendered facet element count equal to the api', async() => {
        const elemLength = getAllFacetsType(testUnbxd).length;
        const allFacetValuesUi = getAllFacetsFromUi(testUnbxd).length;
        const facetsLength = testUnbxd.getAllFacets().length;
        const facetsValuesLength = getAllFacetsValues(testUnbxd);
        expect(elemLength).toBe(facetsLength);
        expect(allFacetValuesUi).toBe(facetsValuesLength);
    });
    test('click a text facet to select a text facet',async() => {
        global.textFacet = getAFacet(testUnbxd,"text");
        const {
            facetName,
            values
        } = global.textFacet;
        global.selectedTextValue = values[0];
        const firstElem = getAFacetElem(testUnbxd, facetName, global.selectedTextValue.dataId);
        firstElem.click();
        return asyncApiPromise().then(()=>{
            const textFacetName = global.textFacet.facetName;
            const {
                name,
                count
            } = global.selectedTextValue;
            const selectedValue = {
                count:count,
                dataId:name,
                name:name
            };
            const selectedId = testUnbxd.getSelectedFacets()[textFacetName][0];
            const selectedFacetL = testUnbxd.selectedFacetWrapper.querySelectorAll(".UNX-selected-facets-wrap").length;
            const selectedCssL = testUnbxd.facetsWrapper.querySelectorAll(".UNX-selected-facet-btn").length
            expect(selectedValue).toEqual(selectedId);
            expect(selectedFacetL).toBe(1);
            expect(selectedCssL).toBe(1);
        })
    });
    test('click a selected facet to unselect facet', async() => {
        const getTheFirstItem = testUnbxd.selectedFacetWrapper.querySelector(".UNX-delete-facet");
        getTheFirstItem.click();
        return asyncApiPromise().then(()=>{
            const fromState = testUnbxd.getSelectedFacetValueCount();
            const selectedFacetL = testUnbxd.selectedFacetWrapper.querySelectorAll(".UNX-selected-facets-wrap").length;
            const selectedCssL = testUnbxd.facetsWrapper.querySelectorAll(".UNX-selected-facet-btn").length
            expect(fromState).toBe(0);
            expect(selectedFacetL).toBe(0);
            expect(selectedCssL).toBe(0);
        });
    });
    test('click on a same text facet to unselect', async() => {
        const {
            facetName,
            values
        } = global.textFacet;
        global.selectedTextValue = values[0];
        const firstElem = getAFacetElem(testUnbxd, facetName, global.selectedTextValue.dataId);
        firstElem.click();
        return asyncApiPromise().then(()=>{
            const firstElem = getAFacetElem(testUnbxd, facetName, global.selectedTextValue.dataId);
            firstElem.click();
            return asyncApiPromise().then(()=>{
                const selectedCssL = testUnbxd.facetsWrapper.querySelectorAll(".UNX-selected-facet-btn").length;
                expect(selectedCssL).toBe(0);
            });
        })
    });
    test('delete the selected facet using clear button', async() => {
        const {
            facetName,
            values
        } = global.textFacet;
        global.selectedTextValue = values[0];
        const firstElem = getAFacetElem(testUnbxd, facetName, global.selectedTextValue.dataId);
        firstElem.click();
        return asyncApiPromise().then(()=>{
            const clearElem = testUnbxd.facetsWrapper.querySelector('.UNX-facet-clear');
            clearElem.click();
            return asyncApiPromise().then(()=>{
                const selectedCssL = testUnbxd.facetsWrapper.querySelectorAll(".UNX-selected-facet-btn").length;
                expect(selectedCssL).toBe(0);
            });
        })
    });
    test('click a category facet to select a category facet', async() => {
        global.categoryFacet = getAFacet(testUnbxd, "category");
        const {
            values,
            facetName
        } = global.categoryFacet;
        global.selectedCategoryValue = values[0];
        const categoryElem = getAFacetElem(testUnbxd, facetName, global.selectedCategoryValue.dataId);
        categoryElem.click();
        return asyncApiPromise().then(()=>{
            const els = testUnbxd.breadcrumbWrapper.querySelectorAll(".UNX-bread-crumb");
            expect(els.length).toBe(1);
        });
    });
    test('click the same category facet to unselect the selected category facet', async() => {
        const categoryElem = testUnbxd.facetsWrapper.querySelector(".UNX-selected-crumb");
        categoryElem.click();
        return asyncApiPromise().then(()=>{
            const els = testUnbxd.breadcrumbWrapper.querySelectorAll(".UNX-bread-crumb");
            expect(els.length).toBe(0);
        });
    });
    test('apply a range facet', async() => {
        global.rangeFacet = getAFacet(testUnbxd, "range");
        const {
            facetName,
            values
        } = global.rangeFacet;
        global.firstRangeValue = values[0];
        const rangeElem = getAFacetElem(testUnbxd, facetName,global.firstRangeValue,"range");
        rangeElem.click();
        return asyncApiPromise().then(()=>{
            const els = testUnbxd.facetsWrapper.querySelector(".range-facets-block").querySelectorAll(".UNX-selected-facet-btn");
            const rangeState = testUnbxd.getSelectedRanges();
            const {
                facetName,
            } = global.rangeFacet;
            expect(rangeState[facetName]).toBeDefined();
            expect(els.length).toBe(1);
        });
    });
    test('click the open accrodian to close', async() => {
        const headElem = testUnbxd.facetsWrapper.querySelector(".UNX-facet-open");
        headElem.click();
        expect(headElem.classList.contains("UNX-facet-close")).toBeTruthy();
        headElem.click();
        expect(headElem.classList.contains("UNX-facet-open")).toBeTruthy();
    });
    test('clear all selected facets',async() => {
        const {
            facetName
        } = global.textFacet;
        const firstElem = getAFacetElem(testUnbxd, facetName, global.selectedTextValue.dataId);
        firstElem.click();
        return asyncApiPromise().then(()=>{
            const clearAllBtn = testUnbxd.selectedFacetWrapper.querySelector(".UNX-clear-facet")
            clearAllBtn.click();
            return asyncApiPromise().then(()=>{
                expect(testUnbxd.getSelectedFacets()).toEqual({});
            });
        })
    });
    test('clear all selected range facets',async() => {
        const rangeElem = getAFacetElem(testUnbxd, global.rangeFacet.facetName,global.firstRangeValue,"range");
        rangeElem.click();
        return asyncApiPromise().then(()=>{
            const clearAllBtn = testUnbxd.facetsWrapper.querySelector(".UNX-facet-clear")
            clearAllBtn.click();
            return asyncApiPromise().then(()=>{
                expect(testUnbxd.getSelectedRanges()).toEqual({});
            });
        })
    });

});
