import Initialize from "./initializeSdk";

describe('sdk default state check', () => {
    let testUnbxd = {};
    let asyncPromise = {};
    let newInstance = {};

    beforeAll(async() => {
        const defaultHtml = `<div class="UNX-header">
        <div class="UNX-header-inner">
            <div class="UNX-logo">
                UNBXD
            </div>
            <div class="UNX-input-wrapper">
                <input id="unbxdInput" class="UNX-input" />
                <button id="searchBtn" class="fa fa-search UNX-search-btn"></button>
            </div>
        </div>
    </div>
    <div class="UNX-results-container">
            <div class="UNX-product-list">
                <div class="UNX-product-wrapper" id="searchResultsWrapper"></div>
            </div>
        </div>
        <div class="UNX-loader-container" id="loaderEl"></div>
        <div id="noResultWrapper"></div>
        </div>
    </div>`;
    
        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("id", "pagelem")
        document.body.appendChild(pageElem);
        document.getElementById("pagelem").innerHTML = defaultHtml;

        newInstance = new Initialize({
            searchBoxEl: document.getElementById("unbxdInput"),
            searchTrigger: "click",
            searchButtonEl: document.getElementById("searchBtn"),
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            searchQueryParam:"q",
            extraParams :{
                "version":"V2",
            },
            variants:{
                enabled:false,
                count:1,
                mapping:{
                    "image_url": "v_imageUrl",
                    "imageUrl": "v_imageUrl"
                }
            },
            products:{
                el: document.getElementById("searchResultsWrapper"),
                productType: "SEARCH",
                gridCount:3,
                mapping:{
                    'unxTitle':'title',
                    'unxImageUrl':'imageUrl',
                    'unxPrice':'salePrice',
                    'unxStrikePrice':'displayPrice',
                    'unxId':'uniqueId',
                    'unxDescription':'productDescription'
                },
                fields: [
                    "title",
                    "uniqueId",
                    "price",
                    "sku",
                    "imageUrl",
                    "displayPrice",
                    "salePrice",
                    "sortPrice",
                    "productDescription",
                    "unbxd_color_mapping",
                    "colorName",
                    "color"
                ]
            },
            loader: { 
                el: document.getElementById("loaderEl")
            }
        });
        testUnbxd = newInstance.testUnbxd;
        asyncPromise = newInstance.asyncPromise;
    });

    test('empty test value in userInout', () => {
        expect(testUnbxd.state.userInput).toBe('');
    });
    test('set a search call - done', async() => {
        testUnbxd.getResults("shirt");
        return asyncPromise().then(function(){
            expect(testUnbxd.state.userInput).toBe('shirt');
        })
    });
    test('set a search call - done', async() => {
        testUnbxd.getResults("pants");
        return asyncPromise().then(function(){
            expect(testUnbxd.state.userInput).toBe('pants');
        })
    });
    test('set search from input', async() => {
        testUnbxd.options.searchBoxEl.value="shirt";
        testUnbxd.options.searchButtonEl.click();
        return asyncPromise().then(function(){
            expect(testUnbxd.state.userInput).toBe('shirt');
        })
    });
    test('set a no results query and checking for loader element', async() => {
        testUnbxd.getResults("dassadsadsa");
        return asyncPromise().then(function(){
            const noResultEl = testUnbxd.searchResultsWrapper.querySelectorAll(".UNX-no-results");
            expect(noResultEl.length).toBe(1);
        })
    }); 
});
