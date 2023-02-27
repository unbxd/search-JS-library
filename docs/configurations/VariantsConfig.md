---
layout: default
title: Variants
parent: Configurations
nav_order: 13
---

# Variants
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition
In e-commerce, 'variant' products refer to different versions of a product that have some variations in terms of features, size, color, style, or any other aspect of the product. These variations are usually used to offer customers a range of options when purchasing a product.

For example, a clothing item like a shirt may be available in different sizes, colors and styles, so each size/color/style would be considered as a variant of the same product. Another example can be a phone, where the different storage options and colors represent different variants of that phone.

Variant products are typically grouped together in a single product listing, with options for selecting the specific variant, like color and size, from a drop-down list or by clicking on thumbnails of the different variations. This way, the user can easily compare the different options and select the one that best meets their needs and preferences.

Having variant products can give e-commerce website a chance to increase their product catalog, also improving the chances of a user finding exactly what they are looking for and ultimately increasing the chances of a purchase.

# Behavior

Configure variants display by setting the “variants” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)


# Configurations

To render the variants, you need to configure the variants config object.

```js
variants: {
    //Below configurations should be added here.
}
```

The following options are available under the variants object:

## enabled
{: .d-inline-block }

Boolean
{: .label }

Required
{: .label .label-red}

An "enabled" option in variants within an SDK refers to the ability to display variant products on the website. When enabled is true, the variants for the products would be made available and vice-versa.

### Default Value
{: .no_toc }

```js
enabled: false
```

### Scenarios
{: .no_toc }
1.  `true` : variants will be displayed on the website
2.  `false` : variants feature will be disabled

---

## count
{: .d-inline-block }

Number
{: .label }

Required
{: .label .label-red}

Count refers to the number of variants that needs to be shown for a product.

### Default Value
{: .no_toc }
```js
count: 5
```

### Scenarios
{: .no_toc }
Add any positive integer count here .

---

## groupBy
{: .d-inline-block }

String
{: .label }

`groupBy` is a parameter that is used to group items in a dataset based on a specific field value. It's important to note that the field name used in the groupBy parameter should match the field name in the catalog, otherwise the grouping may not work correctly.


### Default Value
{: .no_toc }

```js
groupBy: “v_colour”
```

### Scenarios
{: .no_toc }
Add any fieldname here which can be used to group the items for a product for example: v_colour ,   etc.

---
## attributes
{: .d-inline-block }

Array
{: .label }

List of fields you need for each variant

### Default Value
{: .no_toc }
```js
attributes: ["title", "v_imageUrl"]			
```

### Scenarios
{: .no_toc }

---
## mapping
{: .d-inline-block }

Object
{: .label }

Field mapping of the catalog attributes to the variant attributes. This is needed to render the variant information correctly.


### Default Value
{: .no_toc }
```js
mapping: {"image_url": "v_imageUrl"}	
```

### Scenarios
{: .no_toc }

---

# UseCases

## UseCase 1 : Default Example 
Sample “variants” config

```js
variants:{
        enabled:false,
        count:5,
        groupBy:'v_colour',
        attributes:[
            "title",
            "v_imageUrl"
        ],
        mapping:{
            "image_url":"v_imageUrl"
        }
    },
```

## UseCase 2

This example includes custom product template along with the variants configuration.

<img src="../assets/variantsUsecase.png" width="250px">

```js
products: {
    el: document.getElementById("searchResultsWrapper"),
    productType: "SEARCH",
    productClick: function (product, e) {
      const { id, action, uniqueid } = e.target.dataset;
      if (action === "swatchClick") {
        const currentIds = document.querySelectorAll(
          `#${uniqueid} .UNX-img-wrapper`
        );
        currentIds.forEach((elm) => {
          elm.classList.remove("UNX-swatch-selected");
          elm.classList.add("UNX-hidden");
        });
        var newImg = document.getElementById(id);
        newImg.classList.add("UNX-swatch-selected");
        newImg.classList.remove("UNX-hidden");
      }
      if (action === "addtocart") {
        alert(product.title + " - Successfully added to cart");
      }
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
      "color",
      "size",
      "listPrice",
      "autosuggest"
    ],
    template: function (product, idx, swatchUI, productViewType) {
      const {
        unxTitle,
        unxImageUrl,
        uniqueId,
        unxStrikePrice,
        unxPrice,
        unxDescription,
        size,
        unbxd_color_mapping,
        listPrice,
        autosuggest,
        colorName,
        displayPrice
      } = product;
      const { products } = this.options;
      const { productItemClass } = products;
      let imagesUI = ``;
      let swatchBtnUi = ``;
      let colorsHead = ``;
      const imgUrl = Array.isArray(unxImageUrl) ? unxImageUrl[0] : unxImageUrl;
      imagesUI = `<div class="UNX-img-wrapper"><img class="UNX-img-block" src="${imgUrl}"/></div>`;
      if (unbxd_color_mapping.length > 1) {
        imagesUI = ``;
        colorsHead = `<h3 class="UNX-product-title UNX-row">Colors</h3>`;
        unbxd_color_mapping.forEach((item, i) => {
          const sArr = item.split("::");
          const sImg = sArr[1];
          const sBtn = sArr[0];
          const uId = `s_${uniqueId}_${i}_sBtn_img`;
          const swatchCss = i !== 0 ? "UNX-hidden" : "";
          imagesUI += `<div id="${uId}" class="UNX-img-wrapper UNX-swatch-selected ${swatchCss}"><img class="UNX-img-block" src="${sImg}"/></div>`;
          swatchBtnUi += `<button data-id="${uId}" data-uniqueId="p_${uniqueId}"  data-action="swatchClick" style="background-color:${sBtn}" class="UNX-swatch-btn"></button>`;
        });
      }

      const priceUI = `<span class="UNX-sale-price">${displayPrice}</span>`;
      let strikeUi = ``;
      if (unxStrikePrice) {
        strikeUi = `<span class="UNX-strike-price">${unxStrikePrice}<span>`;
      }
      let cardType = ``;
      let descUI = ``;
      if (productViewType === "GRID") {
        cardType = "UNX-grid-card";
      } else {
        cardType = "UNX-list-card";
        descUI = `<p class="UNX-description">${unxDescription}</p>`;
      }
      let sizeUI = ``;
      if (Array.isArray(size)) {
        sizeUI += `<h3 class="UNX-product-title UNX-row">Sizes</h3> <div class="UNX-size-row">`;
        size.forEach((s) => {
          sizeUI += `<span class="UNX-size-list UNX-title-info">${s}</span>`;
        });
        sizeUI += `</div>`;
      }
      return [
        `<div id="p_${uniqueId}" data-id="${uniqueId}" data-prank="${idx}" data-item="product" class="UNX-product-col ${cardType} ${productItemClass}">`,
        `<div class="UNX-product-innerwrap">`,
        `<div class="UNX-images-block">${imagesUI}</div>`,
        `<div class="UNX-product-content">`,
        `<div class="UNX-row UNX-price-head-row">`,
        `<h3 class="UNX-product-title">${unxTitle}</h3>`,
        `<div class="UNX-price-row">${displayPrice}</div>`,
        `</div>`,
        `<p class="UNX-title-info">${colorName}</p>`,
        sizeUI,
        colorsHead,
        `<div class="UNX-swatch-wrapper">${swatchBtnUi}</div>`,
        descUI,
        `</div>`,
        `<button data-action="addtocart" data-id="${uniqueId}" class="UNX-add-cart-btn">Add to cart</button>`,
        `</div>`,
        `</div>`
      ].join("");
    }
```
