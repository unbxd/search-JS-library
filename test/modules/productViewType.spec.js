import Initialize from "../initializeSdk";

describe('product view type - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};

    beforeAll(async() => {

        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "productViewTypeContainer")
        document.body.appendChild(pageElem);

    
        newInstance = new Initialize({
            searchTrigger: "click",
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH"
            },
            productView: { el: document.querySelector(".productViewTypeContainer"), defaultViewType: "GRID" }
        });
        testUnbxd = newInstance.testUnbxd;
        asyncApiPromise = newInstance.asyncPromise;
    });
    test('load the base results', async() => {
        testUnbxd.getResults("*");
        return asyncApiPromise(()=> {
            expect(testUnbxd.getPaginationInfo().start).toBe(12);
        })
    });
    test('banner render with fake response', async() => {
        const productViewElem = testUnbxd.productViewTypeWrapper.querySelector(".UNX-product-view");
        expect(productViewElem).toBeDefined();
    });
    test('click on a list button to selecte the list view', async() => {
        const productViewElem = testUnbxd.productViewTypeWrapper.querySelector(".UNX-list-btn");
        productViewElem.click();
        return asyncApiPromise(()=>{
            const isSelected = testUnbxd.productViewTypeWrapper.querySelector(".UNX-list-btn").classList.contains("UNX-selected-product-view")
            expect(isSelected).toBeTruthy();
        });
    });

});
