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


describe('facet apply mutiple - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};
    beforeAll(async() => {
        const facetHtml  =`
            <div class="facetsMultipleEl"></div>
            <div class="selectedFacetWrapperSelected"></div>
            <div><button data-facet-action="applyFacets" class="applyFacets">Apply Facets</button></div>
            <div><button data-facet-action="clearAllFacets" class="clearAllFacets">clear Facets</button></div>
        `;
        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "facetsElementMultiple");
        document.body.appendChild(pageElem);
        document.body.querySelector(".facetsElementMultiple").innerHTML = facetHtml;
        newInstance = new Initialize({
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH"
            },
            facet:{
                facetsEl: document.querySelector(".facetsMultipleEl"),
                applyMultipleFilters: true,
                defaultOpen: "FIRST",
                viewMoreLimit:2
            },
            selectedFacets:{ el:document.querySelector(".selectedFacetWrapperSelected") }
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
    test('check the rendered facet element count equal to the api', async() => {
        const elemLength = getAllFacetsType(testUnbxd).length;
        const allFacetValuesUi = getAllFacetsFromUi(testUnbxd).length;
        const facetsLength = testUnbxd.getAllFacets().length;
        const facetsValuesLength = getAllFacetsValues(testUnbxd);
        expect(elemLength).toBe(facetsLength);
        expect(allFacetValuesUi).toBe(facetsValuesLength);
    });
    test('click a text facet to select a text facet',async() => {
        newInstance.textFacet = getAFacet(testUnbxd,"text");
        const {
            facetName,
            values
        } = newInstance.textFacet;
        newInstance.selectedTextValue = values[0];
        const firstElem = getAFacetElem(testUnbxd, facetName, newInstance.selectedTextValue.dataId);
        firstElem.click();
        const firstElemSelected = getAFacetElem(testUnbxd, facetName, newInstance.selectedTextValue.dataId);
        const isSelected = firstElemSelected.classList.contains("UNX-selected-facet-btn");
        const selectedValue = {
            count:newInstance.selectedTextValue.count,
            dataId:newInstance.selectedTextValue.name,
            name:newInstance.selectedTextValue.name
        }
        const selectedId = testUnbxd.getSelectedFacets()[facetName][0];
        expect(selectedValue).toEqual(selectedId);
        expect(isSelected).toBeTruthy();
        
        const applyFacetsBtn = testUnbxd.facetsWrapper.querySelector(".UNX-facet-primary");
        applyFacetsBtn.click();
        return asyncApiPromise().then(()=>{
            const firstElemSelected = getAFacetElem(testUnbxd, facetName, newInstance.selectedTextValue.dataId);
            const isSelected = firstElemSelected.classList.contains("UNX-selected-facet-btn");
            const selectedValue = {
                count:newInstance.selectedTextValue.count,
                dataId:newInstance.selectedTextValue.name,
                name:newInstance.selectedTextValue.name
            }
            const selectedId = testUnbxd.getSelectedFacets()[facetName][0];
            expect(selectedValue).toEqual(selectedId);
            expect(isSelected).toBeTruthy();
            const clearBtn = testUnbxd.facetsWrapper.querySelector(".UNX-facet-clear");
            clearBtn.click();
            return asyncApiPromise().then(()=>{
                expect(testUnbxd.getSelectedFacets()).toEqual({});
            });
        });
    });
});
