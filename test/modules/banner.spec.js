import Initialize from "../initializeSdk";

describe('banner - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newBannerInstance = {};

    beforeAll(async() => {

        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "bannerContainer")
        document.body.appendChild(pageElem);

        newBannerInstance = new Initialize({
            searchTrigger: "click",
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH"
            },
            banner: {
                el: document.querySelector(".bannerContainer"),
                count: 1
            }
        });
        testUnbxd = newBannerInstance.testUnbxd;
        asyncApiPromise = newBannerInstance.asyncPromise;
    });
    test('load the base results', async() => {
        testUnbxd.getResults("*");
        return asyncApiPromise(()=> {
            expect(testUnbxd.getPaginationInfo().start).toBe(12);
        })
    });
    test('banner render with fake response', () => {
        const fakeBanner = {
            banner:{
                banners:[
                    {
                        "imageUrl": "http://andersonpta.org/test/static/sale.jpg",
                        "landingUrl":"http://andersonpta.org/test/static/sale.jpg"
                    }
                ]
            }
        };
        testUnbxd.state.responseObj = fakeBanner;
        testUnbxd.renderBannerUI()
        const bannerItem = testUnbxd.bannerWrapper.querySelector(".UNX-banner-wrap");
        expect(bannerItem).toBeDefined();
    });

});
