---
layout: default
title: Swatches
parent: Configurations
nav_order: 12
---

# Swatches
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Behavior

Configure swatches display by using the configs in this section.  
[![](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)

## Config

The following options are available under the object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | false | Turn this flag on for enabling swatches |
| attributesMap | Object | `{swatchImgs: "unbxd_color_mapping","swatchColors": "color", "swatchList": "color"}` | Field mapping of the catalog attributes to the swatch attributes |
| swatchClass | String | "UNX-swatch-btn" | Additional CSS class name for the swatches |
| template | Function | [default](src/modules/swatches/ui.js) | Customize the look and feel of the swatches component by returning your custom HTML string from this function. This function gets the current swatch data and complete swatches list as parameters |

## Example

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

{: .warning } Note:  If you wants swatches, variants count should be higher, and “groupBy” field should be present in mapped fields config as shown below:

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
