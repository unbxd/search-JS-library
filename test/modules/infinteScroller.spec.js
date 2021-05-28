import Initialize from "../initializeSdk";

describe('infinte scroll pagination - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};
    beforeAll(() => {

        const productWrapper = document.createElement("DIV");
        productWrapper.setAttribute("class", "productWrapper");
        document.body.appendChild(productWrapper);
        newInstance = new Initialize({
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH",
                el:document.querySelector(".productWrapper")
            },
            pagination:{
                type: 'INFINITE_SCROLL',
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

    test('scroll to some value', async() => {
        document.body.scrollTop = 0;
        window.innerHeight = 350;
        Object.defineProperty(document.body, 'scrollHeight', { value: 1416 });
        Object.defineProperty(document.body, 'offsetHeight', { value: 1416 });
        Object.defineProperty(document.body, 'clientHeight', { value: 1416 });
        testUnbxd.onInfiniteScroll();
        expect(testUnbxd.getPaginationInfo().rows).toBe(12);
    });

});
