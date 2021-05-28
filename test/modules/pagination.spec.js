import Initialize from "../initializeSdk";

describe('pagination- module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};

    beforeAll(async() => {
        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "clickScrollContainer")
        const newElem = document.createElement("DIV");
        newElem.setAttribute("class", "clickScrollContainer")
        document.body.appendChild(pageElem);
        document.body.appendChild(newElem);
        newInstance = new Initialize({
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH"
            },
            pagination: {
                type: 'FIXED_PAGINATION',
                el: document.querySelectorAll(".clickScrollContainer")
            }
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
    test('check page start is zero', async() => {
        const pageWrappers = testUnbxd.paginationWrappers;
        newInstance.paginationContainer = pageWrappers[0];
        expect(pageWrappers.length).toBeGreaterThan(0);
    });
    test('load second page', async() => {
        const pageBtns = testUnbxd.paginationWrappers[0].querySelector(".UNX-page-button");
        pageBtns.click();
        return asyncApiPromise(()=> {
            expect(testUnbxd.getPaginationInfo().start).toBe(12);
        })
    });
    test('load third page', async() => {
        const pageBtns = newInstance.paginationContainer.querySelectorAll(".UNX-page-button");
        pageBtns[2].click();
        return asyncApiPromise(()=> {
            expect(testUnbxd.getPaginationInfo().start).toBe(24);
        });

    });
    test('load next page', async() => {
        const pageBtn = newInstance.paginationContainer.querySelector(".UNX-next-btn");
        pageBtn.click();
        return asyncApiPromise(()=> {
            expect(testUnbxd.getPaginationInfo().start).toBe(36);
        })
    });
    test('load prev page', async() => {
        const pageBtn = newInstance.paginationContainer.querySelector(".UNX-page-prev");
        pageBtn.click();
        return asyncApiPromise(()=> {
            expect(testUnbxd.getPaginationInfo().start).toBe(24);
        })
    });
    test('disable next button', async() => {
        testUnbxd.state.startPageNo = 1404;
        testUnbxd.getResults("*")
        return asyncApiPromise(()=> {
            const pageBtn = newInstance.paginationContainer.querySelector(".UNX-next-btn").getAttribute("disabled");
            expect(pageBtn).toBe("");
        })
    });
});
