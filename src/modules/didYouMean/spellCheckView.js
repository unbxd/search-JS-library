
const didYouMeanUI =  function(suggestion,noResultQuery,pages) {
    const {
        start,
        productsLn,
        numberOfProducts
    } = pages;
    return  `<div class="UNX-spellcheck-block">
        <p class="UNX-suggestion">Showing results for <strong>${suggestion}</strong> - <span class="UNX-result-info"> - ${start} to ${productsLn+start} of ${numberOfProducts} products</span></p>
        <p class="UNX-no-result">Search instead for <strong>${noResultQuery}</strong></p>
    </div>`;
}
export default didYouMeanUI
