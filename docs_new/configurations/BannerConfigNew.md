---
layout: default
title: Banners New
parent: Configurations
nav_order: 12
---

# Banners New
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition

## Behavior
Configure the banner display by setting the “banner” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)


## Configurations
The following options are available under the object:

### enabled
#### Key
enabled
#### Data Type
Boolean
#### Default Value
false
#### Description
Turn this flag on for enabling Banner

### el
#### Key
el
#### Data Type
Element
#### Default Value
null
#### Description
Element in which to render the Banner component

### template
#### Key 
template
#### Data Type
Function 
#### Default
[default](src/modules/banners/index.js) 
#### Description
Customize the look and feel of the banner component by returning your custom HTML string from this function. This function get the list of banners as the parameter. 

### count 
#### Key 
count 
#### Data Type
Number 
#### Default
1 
#### Description
Indicates the number of banners to be shown 

### openNewTab
#### Key 
openNewTab
#### Data Type
Boolean 
#### Default
false 
#### Description
by default landing page url load in same tab, if you want to load in another tab configured it to true 

### tagName 
#### Key 
tagName 
#### Data Type
String 
#### Default
"DIV" 
#### Description
html element for the banner wrapper. by default it is div.

### htmlAttributes 
#### Key 
htmlAttributes 
#### Data Type
Object 
#### Default
{class:"UNX-banner-block"} 
#### Description
by default it contains classes for the wrapper. you can add more classes or any attributes 

### events 
#### Key 
events 
#### Data Type
object 
#### Default
{} 
#### Description
by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object


## Examples

### Sample Example

Sample banner configuration

```js
banner: {
    enabled:true,
    el:null,
    template:function(banners, bannerOpts){
      const bannerUI = banners.map((item) => {
          const {
              imageUrl
          } = item;
          return `<div><img style="max-width:100%" src="${imageUrl}"/></div>`
      }).join('');
      return `${bannerUI}`
    },
    count:1
}
```
