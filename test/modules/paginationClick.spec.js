import Initialize from "../initializeSdk";

describe('pagination click n scroll - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};

    beforeAll(async() => {
        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "loadmorepage")
        document.body.appendChild(pageElem);
        newInstance = new Initialize({
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH"
            },
            pagination: {
                type: 'CLICK_N_SCROLL',
                el: document.querySelector(".loadmorepage")
            }
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
    test('click on loadmore button to load next page', async() => {
        const paginationContainer = testUnbxd.paginationWrappers[0];
        const pageBtn = paginationContainer.querySelector(".UNX-click-n-scroll");
        expect(pageBtn).toBeDefined();
        pageBtn.click();
        return asyncApiPromise(()=> {
            expect(testUnbxd.getPaginationInfo().start).toBe(12);
        })
    });

});
