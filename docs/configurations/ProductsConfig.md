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

```js
products: {
    // the below product configurations goes here
}
```

## productType
{: .d-inline-block }

String
{: .label }

Used to indicate if the page is search or category. Possible values: search (or) category. “search” -> the search term in the url is used by library. “category”-> the getCategoryID function will be invoked to identify the category which needs to be displayed for the given url.



### Default Value
{: .no_toc }
``` js
productType:"SEARCH"
```
### Scenarios
{: .no_toc }

Unbxd has two product offerings:
1. SEARCH: Powers search results pages.
2. BROWSE or CATEGORY: Powers category listing pages.

---
## el
{: .d-inline-block }

Element
{: .label  }

Required
{: .label  .label-red}

"el" in products is an HTML element that is designated to display products or advertisements. This allows developers to control the placement of the products on the webpage and to ensure that they are displayed in a prominent and visible location. The "el" can be set by providing the id or class of the element in the code.

### Default Value
{: .no_toc }

```js
el: null
```

### Scenarios
{: .no_toc }
There are several HTML selectors that can be used to locate the product element in an e-commerce page. For ex: getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll, getElementsByName, etc.

---
## template
{: .d-inline-block }

Function
{: .label }

The "template" function here refers to the ability to change the appearance of the product feature on the e-commerce website. It allows developers to control the appearance of the products by providing custom HTML. The function receives  5 parameters: complete product object and index of the current product, swatches, selected view type, product config.

This function passes two params:
1. `product` - it is object which contains data related to product like : unxTitle,unxImageUrl,uniqueId,unxStrikePrice,unxPrice,unxDescription etc.
2. `idx` - 
3. `swatchUI` - it is swatchUI object which has info related swatchui like: btnList and btnList.
4. `productViewType` - Its value might either be "GRID" or "LIST.
5. `products` - its contains common info related to products like :productItemClass,defaultImage.

**Expected return value**: a string of HTML that will be used to render the products on the webpage


### Default Value
{: .no_toc }
``` js
template:function(product,idx,swatchUI,productViewType,products ){
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

### Scenarios
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
productAttributes:["title", "uniqueId", "price", "sku", "imageUrl", "displayPrice", "salePrice", "sortPrice", "productDescription", "unbxd_color_mapping", "colorName", "color"]
```

### Scenarios
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
attributesMap:{"unxTitle": "title","unxImageUrl": "imageUrl","unxPrice": "salePrice","unxStrikePrice": "displayPrice","unxId": "uniqueId","unxDescription": "productDescription"}
```

### Scenarios
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

### Scenarios
{: .no_toc }

---
## productItemClass
{: .d-inline-block }

String
{: .label }

Additional class name to be added to each product card.

### Default Value
{: .no_toc }

```js
productItemClass:“product-item”
```

### Scenarios
{: .no_toc }

Any valid class name can passed here.

---
## onProductClick
{: .d-inline-block }

Function
{: .label }

Callback functions called on click of a product card. This function gets the product object & the event object as params.
Note: The `data-id` field has to be set in the template to receive this product information (as shown in the default template here), else it will return `null` by default

This function passes two params:

1. `product` : this will contain the product data like uniqueId etc. Note: The `data-id` field has to be set in the template to receive this product information (as shown in the default template here), else it will return `null` by default

2. `event` : 

### Default Value
{: .no_toc }

```js
onProductClick:function(product, event) {}	
```

### Scenarios
{: .no_toc }
This function passes two params:


---
## defaultImage
{: .d-inline-block }

String
{: .label }

If product doesnt contain image url, by default this image will be shown

### Default Value
{: .no_toc }

``` js
defaultImage:“https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg”	
```

### Scenarios
{: .no_toc }

---
## tagName
{: .d-inline-block }

String
{: .label }

"tagName" refers to the name of an HTML tag used to wrap or structure the content (product) on a webpage.

### Default Value
{: .no_toc }

```js
tagName: 'div'
```

### Scenarios
{: .no_toc }
Any valid html tag such as div, span, p, h1, h2, etc in which you like the product code to be wrapped in.

---
## htmlAttributes
{: .d-inline-block }

Object
{: .label }

"htmlAttributes" refers to a set of key-value pairs that provide additional information or properties for an HTML element. By default it contains classes for the wrapper. You can add more classes or any valid attributes.

### Default Value
{: .no_toc }

```js
htmlAttributes:{class:"UNX-search-results-block UNX-result-wrapper"}
```

### Scenarios
{: .no_toc }
Any valid html attribute can be passed as `key : value` pairs inside an object.

---
# Default Example

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

# UseCases
## Usecase 1:
## Usecase 2:
## Usecase 3: