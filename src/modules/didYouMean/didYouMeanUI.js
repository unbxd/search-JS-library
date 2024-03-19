//query - current search term
//suggestion - suggest search term
//pages - details search response
/*
    {
    "numberOfProducts": 194,
    "start": 0,
    "productsLn": 12,
    "rows": 12,
    "noOfPages": 17,
    "currentPage": 1,
    "isNext": true,
    "isPrev": false
    }
*/
const didYouMeanUI =  function(query,suggestion,pages={}) {
    const {
        start,
        productsLn,
        numberOfProducts
    } = pages || {};
    const {
        selectorClass = "",
        enabled
    } = this.options.spellCheck;
    const {
        productType
    } = this.options;

    let newQuery = query;
    if(productType !=="SEARCH" ) {
        const catId = this.getCategoryId() || "";
        const cId = decodeURIComponent(catId).split(">");
        newQuery = cId[cId.length-1] || cId[0] ;
    }
    const {
        UNX_spellCheck = ""
    } = this.testIds
    const noUi = (suggestion) ? `<p class="UNX-no-result"> Your search "<strong>${suggestion}</strong>" did not match any products. Did you mean <button data-test-id="${UNX_spellCheck}" data-action="getSuggestion" class="${selectorClass}">${query}</button>? </p>` :``;
    let qUi = ``;
    let countUi = ``;
    if(numberOfProducts > 0) {
        countUi = `<span class="UNX-result-info">  -  ${start+1} to ${productsLn+start} of ${numberOfProducts} products</span>`;
    }
    if(pages && Object.keys(pages).length > 0 && newQuery){
        if(!enabled) {
            newQuery = suggestion || query
        }
        qUi = `<p class="UNX-suggestion-p">Showing results for <strong>${newQuery}</strong> ${countUi}</p>`;
    }
    if(window.unbxdImageSearch && window.unbxdImageSearch.isVisualSearchEnabled && window.unbxdImageSearch.isVisualSearchEnabled()){
        let numberUi = `<p class="UNX-vs-number-of-products-text">   ${numberOfProducts} products found</p>`
        qUi = `<h3 class="UNX-vs-results-text">Visual matches : ${numberUi}</h3>`;
    }
    return  [`<div class="UNX-spellcheck-block">`,
            noUi,
            qUi,
        `</div>`].join('');
}
export default didYouMeanUI

