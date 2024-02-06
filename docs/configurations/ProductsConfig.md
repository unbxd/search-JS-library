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


Unbxd offers a full-featured search and category solution that can help retailers to improve the search and browsing experience for their customers, increase conversions, and gain insights into customer behavior.

Our search offering includes a powerful search engine that can handle large catalogs and complex queries, as well as advanced features such as autocomplete, spell correction, and synonyms. We also provide analytics and reporting tools to help retailers optimize their search results and improve the overall search experience for their customers.

Our category offerings include solutions for navigation, filtering and sorting, and recommendations. These solutions can help retailers to improve the browsing experience for their customers and increase conversions by making it easy for shoppers to find the products they're looking for. The category solutions also come with analytics and reporting tools to help retailers understand how shoppers are interacting with their category pages and make data-driven decisions to improve the browsing experience.

Used to indicate if the page is search or category. Possible values: search (or) category. “search” -> the search term in the url is used by library. “category”-> the getCategoryID function will be invoked to identify the category which needs to be displayed for the given url.



### Default Value
{: .no_toc }
```js
productType: "SEARCH"
```
### Scenarios
{: .no_toc }

Unbxd has two product offerings:
1. `SEARCH`: Powers search results pages.
2. `CATEGORY`: Powers category listing pages.

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
2. `idx` - it is index of product.
3. `swatchUI` - it is swatchUI object which has info related swatchui like: btnList and btnList.
4. `productViewType` - Its value might either be "GRID" or "LIST".
5. `products` - its contains common info related to products like :productItemClass,defaultImage.

**Expected return value**: a string of HTML that will be used to render the products on the webpage

**Note:** When implementing Infinite Scroll (type: "INFINITE_SCROLL") or Click & Scroll (type: "CLICK_N_SCROLL") pagination, it is important to consider the following details:

1. **Product Card Container Attributes**: The parent-most container of each product card should include the data-prank="<idx>" attribute in its HTML structure. This attribute represents the product's rank or index and is typically available as the second parameter in the product.template callback. By including this attribute, you can uniquely identify each product card within the container.
2. **Invisible HTML Elements**: To facilitate smooth scrolling and pagination, it is recommended to add two invisible HTML elements above and below the products container. These elements act as pre-loader and post-loader placeholders. The pre-loader element, with the class name UNX-pre-loader, should be positioned above the products container. Similarly, the post-loader element, with the class name UNX=post-loader, should be positioned below the products container. It is crucial to ensure that these two elements are not placed next to each other but instead positioned above and below the products container. This can be achieved by setting the CSS flex-direction property of the parent container to column or by using custom CSS styles. This separation prevents API calls from running in an infinite loop by ensuring that the pre-loader and post-loader elements are not permanently visible in the viewport.

By following these guidelines, you can effectively implement Infinite Scroll or Click & Scroll pagination for your product listing, providing a seamless user experience while avoiding potential issues related to API calls and loader element visibility.





**Note:** Following analytics data-attributes can be added: 
1. `data-unxPageType="search"` - For Search results page , add this as html attribute.
2. `data-unxPageType="category"` - For Category results page , add this as html attribute.
3. `data-item='product'` - Add this as html attribute at the parent wrapper element of each product item
4. `data-id` - Add this as html attribute at the parent wrapper element of each product item.
5. `data-prank` - Add this as html attribute at the parent wrapper element of each product item.
6. `data-unxCartBtn="addToCart"` - If AddToCart button present on the SRP, add this as  html attribute on that element.
7. `data-unxQty="qty"` - If theres a quantity input-box on SRP, add this as html attribute on that input box.
8. `data-unxQtyPlus='qtyPlus'`  - If theres a button to increase quantity on SRP, add this as html attribute on that button
9. `data-unxQtyMinus='qtyMinus'` - If theres a button to decrease quantity on SRP, add this as html attribute on that button.


### Default Value
{: .no_toc }
```js
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

For additional information on custom scenarios, please refer to the [use cases section](#usecases) located below.

---
## productAttributes
{: .d-inline-block }

Array
{: .label }

This is an array of all required fields for generating the result template. This is helpful to load the results faster.

These are some specific product attributes commonly used in e-commerce:

1. `title`: the name or description of the product.
2. `uniqueId`: a unique identifier for the product, different from the SKU.
3. `price`: the original price of the product.
4. `sku`: a unique identifier for the product.
5. `imageUrl`: the URL of the image representing the product.
6. `displayPrice`: the price of the product that is displayed to the customer.
7. `salePrice`: the reduced price of the product during a sale.
8. `sortPrice`: the price used for sorting products, which may be different from the display price.
9. `productDescription`: a detailed explanation of the product and its features.
10. `unbxd_color_mapping`: a mapping of the product color to a standardized color.
11. `colorName`: the name of the product color.
12. `color`: the color of the product.

These attributes are used to provide customers with detailed information about the product and to help them make informed purchasing decisions. The information provided by these attributes is usually displayed on the product page and used in search and filtering functions.

### Default Value
{: .no_toc }

```js
productAttributes:["title", "uniqueId", "price", "sku", "imageUrl", "displayPrice", "salePrice", "sortPrice", "productDescription", "unbxd_color_mapping", "colorName", "color"]
```


---
## attributesMap
{: .d-inline-block }

Object
{: .label }

Field mappings for the data to be displayed in the product card.
The "attributesMap" you provided is a mapping of attribute names used to standardized attribute names. The mapping is used to ensure consistent and standardized data across different systems and services.

1. "unxTitle" maps to "title".
2. "unxImageUrl" maps to "imageUrl".
3. "unxPrice" maps to "salePrice".
4. "unxStrikePrice" maps to "displayPrice".
5. "unxId" maps to "uniqueId".
6. "unxDescription" maps to "productDescription".

This mapping can be used in data processing, data analysis, or integration with other systems to ensure consistent and standardized data handling and processing

### Default Value
{: .no_toc }

```js
attributesMap:{"unxTitle": "title","unxImageUrl": "imageUrl","unxPrice": "salePrice","unxStrikePrice": "displayPrice","unxId": "uniqueId","unxDescription": "productDescription"}
```

---
## gridCount
{: .d-inline-block }

Number
{: .label }

If you want to have grid type user interface, then you can configure how many columns you want to have in a row with this config. By default it will adjust according to screen size.

### Default Value
{: .no_toc }
Adjusts as per screen size.

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

2. `event` : it take any javascript event as input .

### Default Value
{: .no_toc }

```js
onProductClick:function(product, event) {}	
```


---
## defaultImage
{: .d-inline-block }

String
{: .label }

If product doesnt contain image url, by default this image will be shown

### Default Value
{: .no_toc }

```js
defaultImage:"https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg"
```

### Scenarios
{: .no_toc }
Any valid image url you can add here in defaultImage.

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

# Data-actions

1. changeSwatch

---

# UseCases
## Usecase 1: Default Example

Sample “products” config:
[![](../assets/products.png)](../assets/products.png)

```js
products: {
        el: document.getElementById("searchResultsWrapper"),
        productAttributes: templateUtils.getMappedFields(),
        onProductClick: templateUtils.onProductClick,
        attributesMap: window.UNBXD_MAPPED_FIELDS,
        template: function (product, idx, swatchUI, productViewType, products) {
          let { uniqueId, imageUrl, title, price, sellingPrice } = product;
          const { productItemClass } = products;

          let imgUrl = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;
          imgUrl = imgUrl ? imgUrl.trim() || DEFAULT_IMAGE : DEFAULT_IMAGE;
          if (!window.UNBXD_MAPPED_FIELDS["imageUrl"]) {
            imgUrl = DEFAULT_IMAGE;
          }

          let imagesUI = `<div class="UNX-img-wrapper  UNX-parent-image"><img class="UNX-img-block" src="${imgUrl}"/></div>`;

          const variantData = templateUtils.getVariantsUi(
            product,
            imagesUI,
            SWATCH_LIMIT,
            DEFAULT_IMAGE
          );
          let vImages = variantData.vImages;
          imagesUI = variantData.imagesUI;
          const priceHtml = templateUtils.getDisplayPriceRow(
            price,
            sellingPrice
          );
          let priceUI = `<div class="UNX-price-row">${priceHtml}</div>`;
          let cardType = ``;
          if (productViewType === "GRID") {
            cardType = "UNX-grid-card";
          } else {
            cardType = "UNX-list-card";
          }
          /** DELETE_STARTS */
          let debuggerUI = window.UNBXD_USER
            ? `<span class="UNX-preview-debugger" data-title="${title}" data-unique-id="${uniqueId}"></span>`
            : "";

          let { pins, slots = [] } =
            window?.unbxdSearch?.state?.responseObj.debug?.metadata;
          let slotarr = [];

          for (let i = 0; i < slots.length; i++) {
            for (let j = slots[i].start; j <= slots[i].end; j++) {
              slotarr.push(j);
            }
          }

          /** DELETE_ENDS */

          return [
            `<div id="pid_${uniqueId}" data-id="${uniqueId}" data-prank="${idx}" data-item="product" class="UNX-product-col ${cardType} ${productItemClass} pd_pid_${uniqueId}">`,
            `<div class="UNX-images-block">`,
            // templateUtils.favouriteButton(uniqueId),
            `${/* DELETE_STARTS */ ""}
                                      ${debuggerUI}
                                      ${/* DELETE_ENDS */ ""}`,
            imagesUI,
            vImages,
            `<div class="index-badge">
                ${idx}
              </div>`,
            `<div class=${pins && pins[uniqueId] && "pin-box"}>`,
            `<div class=${pins && pins[uniqueId] && "pin-icon"}>`,
            `</div>`,
            `</div>`,
            `<div class=${slotarr.includes(idx) && "slot-box"}>`,
            `<div class=${slotarr.includes(idx) && "slot-icon"}>`,
            `</div>`,
            `</div>`,

            `</div>`,
            `<div class="UNX-product-content">`,
            `<h3 class="UNX-product-title" title="${title}">${
              title || uniqueId || ""
            }</h3>`,
            priceUI,

            `</div>`,

            `</div>`,
          ].join("");
        },
}
```

## Usecase 2: With Default Image

### User requirment
{: .no_toc }
When an image url is mismapped or when an image is missing.
By mistake, so you can add any image as default image.


[![](../assets/default-image-product.png)](../assets/default-image-product.png)
```js
products:{
   // ...other confiurations goes here
  defaultImage:"https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg"
}
```

## Usecase 3: Scroll to particular product
This code snippet provides a solution for a specific scenario where a user is scrolling through a list of products, clicks on a product to view its details on a separate page, and then navigates back to the previous page. The desired behavior is that the page should resume at the same position where the user left off, rather than scrolling to the bottom.

When the page reloads, the code checks if the identifier exists and scrolls to the corresponding element. If found, it scrolls smoothly to the element, removing the stored identifier afterward. This preserves the user's scroll position, enhancing their experience.

The code achieves this by utilizing the browser's localStorage object to store the unique identifier (uniqueId) of the clicked product. Here's a breakdown of the code:

```js
product:{
    // other properties
    onProductClick: function(product, e) {
        localStorage.setItem("unx_product_clicked", product.uniqueId);
        window.location.href = "https://www.google.com";
    }
}
```

```js
onEvent: function(instance, type, state) {
    if (type === "AFTER_RENDER") {
        if (localStorage.getItem("unx_product_clicked") && document.getElementById(localStorage.getItem("unx_product_clicked"))) {
            setTimeout(function() {
                document.getElementById(localStorage.getItem("unx_product_clicked")).scrollIntoView({ behavior: "smooth" });
                localStorage.removeItem("unx_product_clicked");
            }, 500)
        }
    }
}
```

## Usecase 4: With swatches

## User requirment
{: .no_toc }
Swatches are commonly used to display the available colors of a product, such as clothing or home decor, allowing the users to see a visual representation of the options before they purchase

[![](../assets/product-swatches.png)](../assets/product-swatches.png)

```js
 products: {
        el: document.querySelector(".ms-search-result-container__Products"),
        tagName: "UL",
        productItemClass: "ms-product-search-result__item",
        attributesMap: {
            unxPrice: "Price",
            unxTitle: "title",
            unxImageUrl: "imageUrl",
            unxVariants: "variants",
        },
        productType: "SEARCH",
        onProductClick: function (product, e) {
            if(product){
                localStorage.setItem('backToProductid',product.uniqueId);
            }
        },
        productAttributes: [
            "sku",
            "Url",
            "uniqueId",
            "imageUrl",
            "Name",
            "Images",
            "ProductName",
            "BasePrice",
            "Price",
            "uniqueId",
            "variants",
            "productUrl",
            "Description",
            "AdjustedPrice",
            "PrimaryImageUrl",
            "Attr_5637150579",
            "ColorHexMapping",
            "ColorImageVariantMapping",
            "Brand",
            "score"
        ],
        template: function (product, idx, swatchUI, productViewType, products) {

            const {
                uniqueId,
                imageUrl,
                Images,
                Name,
                Price,
                AdjustedPrice,
                productUrl,
                Attr_5637150579,
                ColorHexMapping,
                ColorImageVariantMapping,
                Brand,
                score
            } = product;


            const {
                productItemClass
            } = products;

            let imageurl = Array.isArray(imageUrl) ? imageUrl[0] : imageUrl;

            let displayPrice = ``;
            var swatchBtnUI = ``;
            var btnList;
            var imgList;
            if (swatchUI) {
                btnList = swatchUI.btnList;
                imgList = swatchUI.imgList
            }
            if (btnList) {
                swatchBtnUI = '<div class="UNX-swatch-wrapper">' + btnList + '</div>';
            }
            if (imgList) {
                imagesUI = imgList;
            }

            newimageUrl = imageUrl[0];
            var custAdjustedPrice;
            if (AdjustedPrice != Price) {
                custAdjustedPrice += '<span class="msc-price__strikethrough" aria-hidden="true">$' + AdjustedPrice.toFixed(2) + '</span><span aria-hidden="true" class=""><span class="msc-price__actual" itemprop="price">$' + Price.toFixed(2) + '</span></span>'
            } else {
                custAdjustedPrice += '<span aria-hidden="true" class=""><span class="msc-price__actual" itemprop="price">$' + Price.toFixed(2) + '</span></span>'
            }
            var SwatchIm = newimageUrl.split('Products/')
            var swatchHtml = '';
            if (ColorHexMapping && ColorImageVariantMapping) {
                var json = ColorHexMapping;
                var swatches = JSON.parse(json);
                var swatchImage = JSON.parse(ColorImageVariantMapping);
                for (var i = 0; i < swatches.length; i++) {
                    if (i == 0) {
                        swatchHtml += "<li class='color-swatch selected' role='button' value='" + SwatchIm[0] + 'Products/' + swatchImage[i].Url + '&w=357&h=535&q=80&m=6&f=jpg' + "'><button style='background-color:" + swatches[i].Hex + "'></button></li>"
                    }
                    else {
                        swatchHtml += "<li class='color-swatch' role='button' value='" + SwatchIm[0] + 'Products/' + swatchImage[i].Url + '&w=357&h=535&q=80&m=6&f=jpg' + "'><button style='background-color:" + swatches[i].Hex + "'></button></li>"
                    }
                }
            }
            return [`
            <li class="ms-product-search-result__item" id="${uniqueId}" data-id="${uniqueId}" data-s="${uniqueId}" unbxd-title="${Name}" unbxd-price="${Price}" unbxdattr="product" unbxdparam_sku="${uniqueId}" unbxdparam_prank="${idx}" unbxdparam_requestId="${window.unbxdSearch.state.requestId}">
                <div aria-label="" class="msc-product has-sale">
                    <a href="/en${productUrl}">
                        <div role="link" class="msc-product__image">
                            <div class="msc-empty_image-placeholder">
                                <picture>
                                    <source class="sourceImage" data-srcset="${newimageUrl}&w=357&h=535&q=80&m=6&f=jpg"  media="(max-width:768px)" srcset="${newimageUrl}&w=357&h=535&q=80&m=6&f=jpg">
                                    <img alt="${Name}" src="${newimageUrl}&w=357&h=535&q=80&m=6&f=jpg" class="unbxdImage msc-main_image msc_image lazyloaded">
                                </picture>
                            </div>
                        </div>
                    </a> 
                    <ul class="custom-swatches">
                        ${swatchHtml}
                    </ul>
                    <a href="/en${productUrl}">
                        <div role="link" class="msc-product__details">
                        <div class="UNX-brand">${Brand ? Brand : ''}</div>
                            <h4 class="msc-product__title">${Name}</h4>
                                <span class="msc-price">${custAdjustedPrice.replace('undefined', '')}</span>
                                <p class="msc-product__text">${Attr_5637150579 == "In-store only" ? Attr_5637150579 : ''}</p>
                        </div>
                    </a>
                </div>
            </li>`].join('');
        }
    }
```
