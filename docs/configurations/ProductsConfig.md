---
layout: default
title: Products
parent: Configurations
nav_order: 4
---

# Products
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition
In e-commerce, "products" refer to the items that are available for purchase on an online store. These can be physical goods, such as clothing, electronics, or furniture, or digital goods, such as software, music, or video content. 

An e-commerce website typically includes a catalog of products, which can be searched, filtered, and sorted by various criteria such as product category, brand, price, and more. Each product typically has a detailed page that includes information such as a product image, name, description, price, and available options such as size, color, or material.

The products are usually grouped into categories, like for example clothing, electronics, and home decor, which helps users to easily find the products they are looking for. Additionally, each product can also be associated with multiple tags and attributes that can be used for searching, filtering, and sorting the products.

The availability of a wide range of products and the ability to easily find and compare them is a key factor in the success of an e-commerce website, as it helps to attract and retain customers, and ultimately drive sales.

# Behavior

This is the place where products from the search results will be rendered. The template function receives each product object and its position as second argument.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)

# Configurations

The following are the various options available under the “products” config object:

## productType
{: .d-inline-block }

String
{: .label }

Type of products page to render. Accepted values are SEARCH or BROWSE or CATEGORY.

### Default Value
{: .no_toc }
“SEARCH”

### Usecases
{: .no_toc }

---
## el
{: .d-inline-block }

Element
{: .label }

Element in which to render the search results.

### Default Value
{: .no_toc }
null

### Usecases
{: .no_toc }

---
## template
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the product card by returning your custom HTML string from this function. This function gets 5 parameters: complete product object and index of the current product, swatches, selected view type, product config.

### Default Value
{: .no_toc }
``` js
function(product,idx,swatchUI,productViewType,products ){
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
    let imagesUI = `<div class="UNX-img-wrapper"><img class="UNX-img-block" alt="${unxTitle}" src="${imgUrl}"/></div>`;
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
                `<div class="UNX-images-block">${imagesUI}</div>`,
                `<div class="UNX-product-content">`,
                    `<h3 class="UNX-product-title">${unxTitle}</h3>`,
                    swatchBtnUI,
                    descUI,
                    `<div class="UNX-price-row">${priceUI} ${strikeUi}</div>`,
                `</div>`,
            `</div>`].join('')
};
```

### Usecases
{: .no_toc }

---
## productAttributes
{: .d-inline-block }

Array
{: .label }

This is an array of all required fields for generating the result template. This is helpful to load the results faster.

### Default Value
{: .no_toc }
```js
["title", "uniqueId", "price", "sku", "imageUrl", "displayPrice", "salePrice", "sortPrice", "productDescription", "unbxd_color_mapping", "colorName", "color"]
```

### Usecases
{: .no_toc }

---
## attributesMap
{: .d-inline-block }

Object
{: .label }

Field mappings for the data to be displayed in the product card.

### Default Value
{: .no_toc }
```js
{"unxTitle": "title","unxImageUrl": "imageUrl","unxPrice": "salePrice","unxStrikePrice": "displayPrice","unxId": "uniqueId","unxDescription": "productDescription"}
```

### Usecases
{: .no_toc }

---
## gridCount
{: .d-inline-block }

Number
{: .label }

If you want to have grid type user interface, then you can configure how many columns you want to have in a row with this config. By default it will adjust according to screen size.

### Default Value
{: .no_toc }
Adjusts as per screen size

### Usecases
{: .no_toc }

---
## productItemClass
{: .d-inline-block }

String
{: .label }

Additional class name to be added to each product card.

### Default Value
{: .no_toc }
“product-item”

### Usecases
{: .no_toc }

---
## onProductClick
{: .d-inline-block }

Function
{: .label }

Callback functions called on click of a product card. This function gets the product object & the event object as params.
### Default Value
{: .no_toc }
```js
function(product, event) {}	
```

### Usecases
{: .no_toc }

---
## defaultImage
{: .d-inline-block }

String
{: .label }

If product doesnt contain image url, by default this image will be shown

### Default Value
{: .no_toc }
“https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg”	

### Usecases
{: .no_toc }

---
## tagName
{: .d-inline-block }

String
{: .label }

html element for the product wrapper. by default it is div.
### Default Value
{: .no_toc }
“DIV”	

### Usecases
{: .no_toc }

---
## htmlAttributes
{: .d-inline-block }

Boolean
{: .label }

by default it contains classes for the wrapper. you can add more classes or any attributes

### Default Value
{: .no_toc }
```js
{class:”UNX-search-results-block UNX-result-wrapper”}
```

### Usecases
{: .no_toc }

---
## events
{: .d-inline-block }

object
{: .label }

by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object.

### Default Value
{: .no_toc }
{}

### Usecases
{: .no_toc }

---
# Examples

## Default Example

Sample “products” config:

```js
products:{
    el:null,
    template:function() {
        const searchResults = this.getSearchResults();
        if(!searchResults) {
            return ``;
        }
        const {
            products
        } = searchResults;
        const self = this;
        const {
            swatches
        } = this.options;
        const {
            gridCount
        } = this.options.products;
        const {
            productViewType
        } = this.viewState;
        let productsUI = ``;
        const idx = Number(this.state.startPageNo);
        let swatchUI = ``;
        if(productViewType === "GRID" && gridCount && gridCount > 1) {
            products.forEach((product, index) => {
                const row = index % gridCount;
                if(row === 0) {
                    productsUI += `<div class="UNX-row">`;
                }
                const pRank  = index+idx+1;
                const mappedProduct = this.mapProductAttrs(product);
                if(swatches.enabled) {
                    swatchUI = this.renderSwatchBtns(product);
                }
                productsUI +=self.options.products.template.bind(self)(mappedProduct,pRank,swatchUI,productViewType,this.options.products);
                if(row === gridCount -  1) {
                    productsUI += `</div>`;
                }

            })

        } else {
            productsUI = products.map((product,index) => {
                const pRank  = index+idx+1;
                const mappedProduct = this.mapProductAttrs(product);
                if(swatches.enabled) {
                    swatchUI = this.renderSwatchBtns(product);
                }
                return self.options.products.template.bind(self)(mappedProduct,pRank,swatchUI,productViewType,this.options.products);
            }).join('');
        }


        return  productsUI;
    },
    productItemClass:"product-item", // to find out product
    productType:"SEARCH",
    gridCount:1,
    onProductClick: function(product,e) {
    },
    productAttributes: [
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
    ],
    attributesMap:{
        'unxTitle':'title',
        'unxImageUrl':'imageUrl',
        'unxPrice':'salePrice',
        'unxStrikePrice':'displayPrice',
        'unxId':'uniqueId',
        'unxDescription':'productDescription'
    }

}
```