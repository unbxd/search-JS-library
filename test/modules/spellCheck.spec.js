import Initialize from "../initializeSdk";


describe('spellcheck module - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};
    beforeAll(async() => {

        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "didYouMeanWrapper")
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
            spellCheck: { enabled: true, el: document.querySelector(".didYouMeanWrapper") },
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
    test('check spellcheck module is loaded', async() => {
        const spellCheckElem = testUnbxd.spellCheckWrapper.querySelector(".UNX-suggestion-p");
        expect(spellCheckElem).toBeDefined();
    });
    test('check spellcheck suugesstion  module is loaded', async() => {
        testUnbxd.getResults("pan");
        return asyncApiPromise(()=> {
            const noResultElem = testUnbxd.spellCheckWrapper.querySelector(".UNX-no-result");
            expect(noResultElem).toBeDefined();
        })
    });
    test('click on a suggestion to load some suggested results only', async() => {
        const suggestEl = testUnbxd.spellCheckWrapper.querySelector(".UNX-suggestion")
        suggestEl.click();
        return asyncApiPromise(()=> {
            const noResultElem = testUnbxd.spellCheckWrapper.querySelector(".UNX-no-result")
            expect(noResultElem).not.toBeDefined();
        })

    });

});
