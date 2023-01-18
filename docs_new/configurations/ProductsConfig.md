---
layout: default
title: Products
parent: Configurations
nav_order: 4
---

# Products
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition
In e-commerce, "products" refer to the items that are available for purchase on an online store. These can be physical goods, such as clothing, electronics, or furniture, or digital goods, such as software, music, or video content. 

An e-commerce website typically includes a catalog of products, which can be searched, filtered, and sorted by various criteria such as product category, brand, price, and more. Each product typically has a detailed page that includes information such as a product image, name, description, price, and available options such as size, color, or material.

The products are usually grouped into categories, like for example clothing, electronics, and home decor, which helps users to easily find the products they are looking for. Additionally, each product can also be associated with multiple tags and attributes that can be used for searching, filtering, and sorting the products.

The availability of a wide range of products and the ability to easily find and compare them is a key factor in the success of an e-commerce website, as it helps to attract and retain customers, and ultimately drive sales.

---

## Behavior

This is the place where products from the search results will be rendered. The template function receives each product object and its position as second argument.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)

---

## Configurations

The following are the various options available under the “products” config object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| productType | String | "SEARCH" | Type of products page to render. Accepted values are SEARCH or BROWSE or CATEGORY |
| el | Element | null | Element in which to render the search results |
| template | Function | [default](src/modules/searchResults/ui.js) | Customize the look and feel of the product card by returning your custom HTML string from this function. This function gets 5 parameters: complete product object and index of the current product, swatches, selected view type, product config |
| productAttributes | Array |  `["title", "uniqueId", "price", "sku", "imageUrl", "displayPrice", "salePrice", "sortPrice", "productDescription", "unbxd_color_mapping", "colorName", "color"]` | This is an array of all required fields for generating the result template. This is helpful to load the results faster. |
| attributesMap | Object |  `{"unxTitle": "title","unxImageUrl": "imageUrl","unxPrice": "salePrice","unxStrikePrice": "displayPrice","unxId": "uniqueId","unxDescription": "productDescription"}` | Field mappings for the data to be displayed in the product card |
| gridCount | Number | Adjusts as per screen size | If you want to have grid type user interface, then you can configure how many columns you want to have in a row with this config. By default it will adjust according to screen size. |
| productItemClass | String | "product-item" | Additional class name to be added to each product card |
| onProductClick | Function | `function(product, event) {}` | Callback functions called on click of a product card. This function gets the product object & the event object as params |
| defaultImage | String | "https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg" | If product doesnt contain image url, by default this image will be shown |
| tagName | String | "DIV" | html element for the product wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-search-results-block UNX-result-wrapper"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |


---

## Use Cases

### Sample Example

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