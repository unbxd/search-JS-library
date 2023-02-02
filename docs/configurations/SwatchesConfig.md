---
layout: default
title: Swatches
parent: Configurations
nav_order: 14
---

# Swatches
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition
In e-commerce, 'swatches' refer to small graphical representations of a product's color, pattern, or texture that can be used to indicate the available options for a certain variant of a product. Swatches are commonly used to display the available colors of a product, such as clothing or home decor, allowing the users to see a visual representation of the options before they purchase.

Swatches are usually displayed in a grid or list format, and when a user clicks on one of the swatches, the main product image will change to display the selected color or variant. They are commonly used in conjunction with the variant selection options, like color or pattern drop-down list or thumbnails.

Swatches can also be used for non-color related variations, like for example for the different types of fabric for a piece of clothing or for the different materials of a furniture item.

The main advantage of swatches is that it allow users to get a better sense of the product before purchasing and also, it can make it easier for the user to find the exact variant they are looking for by just looking at the visual representation.

# Behavior

Configure swatches display by using the configs in this section.  
[![](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)

{: .warning } 
NOTE: If you have want to include swatches, please ensure the `count` field inside the `variants` config to be more than 1, and `groupBy` field should have a corresponding mapping in the `mapping` key as shown in the below variants config example:

```js
variants:{
       enabled:false,
       count:5,
       groupBy:'v_imageUrl',
       attributes:[
           "title",
           "v_imageUrl"
       ],
       mapping:{
           "image_url":"v_imageUrl"
       }
   }
```


# Configurations

The following options are available under the swatches object:

``` js
swatches:{
// the below swatches configurations goes here.
}
```

## enabled
{: .d-inline-block }

Boolean
{: .label }
Required
{: .label .label-red }

“Enabled” is a flag or switch that allows developers to turn on or off a specific feature in an e-commerce website. In this context, the  "Swatches feature” refers to the ability to display swatches on the website.

When the “enabled” flag is turned on, the swatches feature will be active. When the “enabled” flag is turned off, the swatches feature will be disabled.
### Default Value
{: .no_toc }
```js
enabled: false
```

### Scenarios
{: .no_toc }
1. `true`  - Swatches feature will be enabled.
2. `false` - Swatches feature will be disabled.


---
## attributesMap
{: .d-inline-block }

Object
{: .label  }

Field mapping of the catalog attributes to the swatch attributes

### Default Value
{: .no_toc }
```js
attributesMap:{
    "swatchImgs": "unbxd_color_mapping",
    "swatchColors": "color", 
    "swatchList": "color"
}
```

---
## swatchClass
{: .d-inline-block }

String
{: .label  }

Additional CSS class name for the swatches

### Default Value
{: .no_toc }
```js
swatchClass:"UNX-swatch-btn"
```

### Scenarios
{: .no_toc }

Any valid class name can passed here.

---
## template
{: .d-inline-block }

Function
{: .label  }

Customize the look and feel of the swatches component by returning your custom HTML string from this function. This function gets the current swatch data and complete swatches list as parameters

This function takes three params:
1. `swatchData` - swatchData contains data related to swatches, like images.
2. `swatches` - Swatches object contains swatchClass, which use to design swatch component.
3. `product` - it is an object which conatans info related to product like unxTitle.

**Expected return value**: a string of HTML that will be used to render the swatches component on the webpage

### Default Value
{: .no_toc }
```js
template:function(swatchData, swatches,product) {
    const {
        swatchImgs = []
    } = swatchData;
    let btnUI = ``;
    let btnList = ``;
    let imgsUI = ``;
    const {
        swatchClass
    } = swatches;
    const {
        UNX_swatchClrBtn
    } = this.testIds;
    const {
        unxTitle
    } = product;
    if(swatchImgs.length > 1) {
        swatchImgs.forEach((item,id) => {
            const sid = this.generateRid("unx_swatch_");
            const sCss = (id === 0) ? '':' UNX-swatch-hidden';
            const bCss = (id === 0) ? ' UNX-selected-swatch':'';
            const data = item.split("::");
            if(data){
                btnUI+= [`<button value="swatch color ${data[0]}" data-test-id="${UNX_swatchClrBtn}${id}" data-swatch-id="${sid}" data-action="changeSwatch" class="${swatchClass} ${sid} ${bCss}" style="background-color:${data[0]}"> swatch color ${data[0]} </button>`].join('');
                imgsUI+=`<div id="${sid}" class="UNX-img-wrapper ${sCss}"><img alt="${unxTitle} for the ${data[0]}" class="UNX-img-block" src="${data[1]}"/></div>`
            }
        });
        btnList = `<div class="UNX-swatch-color-list">${btnUI}</div>`;
    }
    return {
        btnList:btnList,
        imgList:imgsUI,
    };
}
```
### Scenarios
{: .no_toc }
For additional information on custom scenarios, please refer to the [use cases section](#usecases) located below.

---
# Default Example
Sample “swatches” config

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)

```js
swatches:{
       enabled:true,
       attributesMap:{},
       swatchClass:'UNX-swatch-btn',
       template:function(swatchData) {
           const {
               swatchColors = [],
               swatchImgs = []
           } = swatchData;
           let btnUI = ``;
           swatchColors.forEach((item,id) => {
               const imgId = swatchImgs[id];
               if(imgId){
                   const img = imgId.split("::")[1];
                   btnUI+= [`<button data-swatch-id="${item}" data-swatch-img="${img}" data-action="changeSwatch"`,
 `data-swatch-target=".UNX-img-block" class="${this.swatchClass}" style="background-color:${item}"> </button>`].join('')
               }
           });
           return `<div class="UNX-swatch-color-list">${btnUI}</div>`;
       }
   }
```

# UseCases
## Usecase 1:
## Usecase 2:
## Usecase 3:
