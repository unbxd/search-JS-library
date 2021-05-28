import Initialize from "../initializeSdk";

describe('sort - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};

    beforeAll(async() => {

        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "sortWrapper")
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
            sort: {
                el: document.querySelector(".sortWrapper"),
                options: [{ value: "min_price desc", text: "Price High to Low" }, { value: "min_price asc", text: " Price Low to High" } ] }
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
    test('check sort module is loaded', async() => {
        const sortElem = testUnbxd.sortWrapper.querySelector("select");
        expect(sortElem).toBeDefined();
    });
    test('selected sort is rendered or not', async() => {
        testUnbxd.state.selectedSort = "min_price desc";
        testUnbxd.getResults("*");
        return asyncApiPromise(()=> {
            const sortElem = testUnbxd.sortWrapper.querySelector(".UNX-selected-sort");
            expect(sortElem).toBeDefined();
        })
        
    });
    test('update the options to buttons', async() => {
        testUnbxd.updateConfig({
            sort: {
                options: newInstance.sortOptions,
                el: document.getElementById("sortWrapper"),
                action: "click",
                template: function (selectedSort) {
                    var sortBtnsUI = "";
                    var self = this;
                    this.options.sort.options.forEach(function (item, index) {
                        var selectedCss = "";
                        if (item.value === selectedSort) {
                        selectedCss = self.options.sort.selectedSortClass;
                        }
                        sortBtnsUI += [
                        '<button class="btn UNX-sort-btn ' +
                            self.options.sort.sortClass +
                            " " +
                            selectedCss +
                            '"',
                        'data-value="' +
                            item.value +
                            '" data-action="changeSort"> ' +
                            item.text +
                            "</button>"
                        ].join("");
                    });
                    sortBtnsUI +=['<button id="clearSortBtn" class="btn UNX-sort-btn ' +self.options.sort.sortClass+' " data-value="" data-action="clearSort">clearSort</button>"'].join("");
                    return sortBtnsUI;
                }
            }
        });
        testUnbxd.reRender();
        const sortBtn =  testUnbxd.sortWrapper.querySelector(".UNX-sort-btn");
        sortBtn.click();
        return asyncApiPromise(()=> {
            expect(testUnbxd.state.selectedSort).toContain("min_price desc");
        })
    });
    test('clear all sort ', async() => {
        const btnEl = testUnbxd.sortWrapper.querySelector("#clearSortBtn");
        btnEl.click();
        testUnbxd.getResults("*");
        return asyncApiPromise(()=> {
            expect(testUnbxd.state.selectedSort).toContain("");
        })
    });

});
