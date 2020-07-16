export default function(product,idx){
    const {
        unxTitle,
        unxImageUrl,
        uniqueId,
        unxStrikePrice,
        unxPrice,
        unxDescription
    } = product; 
    let swatchUI = ``;
    const {
        swatches,
        products
    } = this.options;
    const {
        productItemClass
    }  = products;
    if(swatches.enabled) {
        swatchUI = this.renderSwatchBtns(product);
    }
    const imgUrl = Array.isArray(unxImageUrl) ? unxImageUrl[0]:unxImageUrl;
    const priceUI = `<span class="UNX-sale-price">${unxPrice}</span>`;
    let strikeUi = ``;
    if(unxStrikePrice) {
        strikeUi = `<span class="UNX-strike-price">${unxStrikePrice}<span>`
    }
    const {
        productViewType
    } = this.viewState;
    let cardType = ``;
    let descUI = ``;
    if(productViewType === "GRID") {
        cardType = "UNX-grid-card"
    } else {
        cardType = "UNX-list-card";
        descUI = `<p class="UNX-description">${unxDescription}</p>`;
    }
    return [`<div id="${uniqueId}" data-prank="${idx}" data-item="product" class="UNX-product-col ${cardType} ${productItemClass}">`,
                `<div class="UNX-img-wrapper"><img class="UNX-img-block" src="${imgUrl}"/></div>`,
                `<div class="UNX-product-content">`,
                    `<h3 class="UNX-product-title">${unxTitle}</h3>`,
                    `<div class="UNX-swatch-wrapper">${swatchUI}</div>`,
                    descUI,
                    `<div class="UNX-price-row">${priceUI} ${strikeUi}</div>`,
                `</div>`,
            `</div>`].join('')
};