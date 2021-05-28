import Initialize from "../initializeSdk";

const getPaginationOptions = (testUnbxd)=> {
    return testUnbxd.pageSizeWrapper.querySelectorAll(".UNX-pagesize");
}

describe('pagesize - module', () => {
    let testUnbxd = {};
    let asyncApiPromise = {};
    let newInstance = {};
    let pageSizeArray = [
        8,
        12,
        16,
        20,
        24
    ]
    let selectedPage = 12;

    beforeAll(async() => {
        const pageElem = document.createElement("DIV");
        pageElem.setAttribute("class", "changeNoOfProducts")
        document.body.appendChild(pageElem);


        newInstance = new Initialize({
            siteKey: "demo-german-unbxd809051586180937",
            apiKey: "16e3cf8d510c50106d64f1ebb919b34e",
            hashMode: false,
            updateUrls: false,
            products:{
                productType: "SEARCH"
            },
            pagesize: {
                el: document.querySelector(".changeNoOfProducts"),
                options:pageSizeArray,
                pageSize:selectedPage
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
    test('check all pagesize options are rendered',async() => {
        const pageSizeElems = testUnbxd.pageSizeWrapper.querySelector(".UNX-pagesize").querySelectorAll("option");
        const elemLength = pageSizeElems.length;
        expect(pageSizeArray.length).toBe(elemLength);
    });
    test('select the another pagesize option',  async() => {
        testUnbxd.updateConfig({
            pagesize: {
                el: document.getElementById("changeNoOfProducts"),
                options:pageSizeArray,
                pageSize:selectedPage,
                template:function(selected, pagesize){
                    const {
                        UNX_pagesize
                    } = this.testIds;
                    let ui = `<div  class="UNX-select-pagesize ">`;
                    pagesize.options.forEach((opt,i)=>{
                        const tId = `data-test-id="${UNX_pagesize}${i+1}"`;
                        if(selected == opt) {
                            ui+=`<button selected ${tId} class="${pagesize.pageSizeClass} ${pagesize.selectedPageSizeClass}" id="${opt}">${opt}</button>`;
                        } else{
                            ui+=`<button ${tId} class="${pagesize.pageSizeClass}" id="${opt}">${opt}</button>`;
                        }
                        
                    });
                    ui+= `</div>`
                    return `<div class="UNX-pagesize-block">${ui}</div>`;
                },
                action:"click"
            }
        });
        testUnbxd.reRender();
        const firstElementItem = getPaginationOptions(testUnbxd)[0];
        firstElementItem.click();
        return asyncApiPromise().then(function() {
            expect(testUnbxd.state.pageSize).toBe(pageSizeArray[0]);
        });
    });
});