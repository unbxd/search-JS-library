---
layout: default
title: Swatches
parent: Configurations
nav_order: 14
---

# Swatches
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition
In e-commerce, 'swatches' refer to small graphical representations of a product's color, pattern, or texture that can be used to indicate the available options for a certain variant of a product. Swatches are commonly used to display the available colors of a product, such as clothing or home decor, allowing the users to see a visual representation of the options before they purchase.

Swatches are usually displayed in a grid or list format, and when a user clicks on one of the swatches, the main product image will change to display the selected color or variant. They are commonly used in conjunction with the variant selection options, like color or pattern drop-down list or thumbnails.

Swatches can also be used for non-color related variations, like for example for the different types of fabric for a piece of clothing or for the different materials of a furniture item.

The main advantage of swatches is that it allow users to get a better sense of the product before purchasing and also, it can make it easier for the user to find the exact variant they are looking for by just looking at the visual representation.

## Behavior

Configure swatches display by using the configs in this section.  
[![](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)

{: .warning } 
NOTE: If you wants swatches, variants count should be higher, and “groupBy” field should be present in mapped fields config as shown below:

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
   }
```


## Configurations

The following options are available under the object:

### enabled
{: .d-inline-block }

Boolean
{: .label }

Turn this flag on for enabling swatches

#### Default Value
{: .no_toc }
false

#### Usecases
{: .no_toc }
true, false

---

### attributesMap
{: .d-inline-block }

Object
{: .label  }

Field mapping of the catalog attributes to the swatch attributes

#### Default Value
{: .no_toc }
{swatchImgs: "unbxd_color_mapping","swatchColors": "color", "swatchList": "color"}

#### Usecases
{: .no_toc }

---
### swatchClass
{: .d-inline-block }

String
{: .label  }

Additional CSS class name for the swatches

#### Default Value
{: .no_toc }
“UNX-swatch-btn”

#### Usecases
{: .no_toc }

---
### template
{: .d-inline-block }

Function
{: .label  }

Customize the look and feel of the swatches component by returning your custom HTML string from this function. This function gets the current swatch data and complete swatches list as parameters

#### Default Value
{: .no_toc }
```js

export default function(swatchData, swatches,product) {
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
};
```
#### Usecases
{: .no_toc }

---

### template
{: .d-inline-block }


| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | false | Turn this flag on for enabling swatches |
| attributesMap | Object | `{swatchImgs: "unbxd_color_mapping","swatchColors": "color", "swatchList": "color"}` | Field mapping of the catalog attributes to the swatch attributes |
| swatchClass | String | "UNX-swatch-btn" | Additional CSS class name for the swatches |
| template | Function | [default](src/modules/swatches/ui.js) | Customize the look and feel of the swatches component by returning your custom HTML string from this function. This function gets the current swatch data and complete swatches list as parameters |

## Examples

### Default Example
Sample “swatches” config

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

