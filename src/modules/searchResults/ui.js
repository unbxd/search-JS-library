export default function(product,idx,swatchUI,productViewType,products ){
    const {
        unxTitle,
        unxImageUrl,
        uniqueId,
        unxStrikePrice,
        unxPrice,
        unxDescription
    } = product; 
    const {
        productItemClass,
        defaultImage
    }  = products;
    let imgUrl = Array.isArray(unxImageUrl) ? unxImageUrl[0]:unxImageUrl;
    if(!imgUrl) {
        imgUrl = defaultImage;
    }
    let imagesUI = `<div class="UNX-img-wrapper"><img class="UNX-img-block" width="100%" height="100%" alt="${unxTitle}" src="${imgUrl}"/></div>`;
    const priceUI = `<span class="UNX-sale-price">${unxPrice}</span>`;
    let strikeUi = ``;
    if(unxStrikePrice) {
        strikeUi = `<span class="UNX-strike-price">${unxStrikePrice}<span>`
    }
    let cardType = ``;
    let descUI = ``;
    if(productViewType === "GRID") {
        cardType = "UNX-grid-card"
    } else {
        cardType = "UNX-list-card";
        descUI = `<p class="UNX-description">${unxDescription}</p>`;
    }
    let swatchBtnUI = ``;
    const {
        btnList,
        imgList 
    } = swatchUI || {};
    if(btnList) {
        swatchBtnUI = `<div class="UNX-swatch-wrapper">${btnList}</div>`;
    }
    if(imgList) {
        imagesUI = imgList; 
    }
    return [`<div id="${uniqueId}" data-id="${uniqueId}" data-prank="${idx}" data-item="product" class="UNX-product-col ${cardType} ${productItemClass}">`,,
    `<h3 class="UNX-product-title">${idx}</h3>`,            
    `<div class="UNX-images-block">${imagesUI}</div>`,
                `<div class="UNX-product-content">`,
                    `<h3 class="UNX-product-title">${unxTitle}</h3>`,
                    swatchBtnUI,
                    descUI,
                    `<div class="UNX-price-row">${priceUI} ${strikeUi}</div>`,
                `</div>`,
            `</div>`].join('')
};