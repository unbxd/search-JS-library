import Initialize from "../initializeSdk";
describe('swatch - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};
    beforeAll(() => {
        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "swatchProducts")
        document.body.appendChild(pageElem);

        newInstance = new Initialize({
            searchTrigger: "click",
            siteKey: "demo-unbxd700181503576558",
            apiKey: "fb853e3332f2645fac9d71dc63e09ec1",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH",
                el:document.querySelector(".swatchProducts")
            },
            swatches: {
                enabled: true,
                attributesMap: {
                    swatchList: "color",
                    swatchImgs: "unbxd_color_mapping",
                    swatchColors: "color"
                }
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
    test('render the swatches', async() => {
        const productEl = testUnbxd.searchResultsWrapper.querySelector(`.UNX-product-col`);
        const swatchEl = productEl.querySelector(".UNX-swatch-wrapper");
        const swatchItem = productEl.querySelectorAll(".UNX-swatch-btn");
        swatchItem[1].click();
        productEl.click();
        const  {
            swatchId
        } = swatchItem[1].dataset;
        const isVisible = productEl.querySelector(`#${swatchId}`).classList.contains("UNX-swatch-hidden");
        //console.log(testUnbxd.searchResultsWrapper.querySelector(`.UNX-product-col`).querySelector(`#${swatchId}`).classList,`classList`)
        expect(swatchEl).toBeDefined();
        expect(isVisible).toBeFalsy();
    });

});
