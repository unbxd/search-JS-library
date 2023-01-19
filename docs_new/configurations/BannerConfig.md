---
layout: default
title: Banners
parent: Configurations
nav_order: 12
---

# Banners
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Definition

In e-commerce, a banner is a graphical advertisement that is typically displayed on a web page or email. Banners are often used to promote a product or service, or to direct visitors to a specific landing page. They can come in a variety of sizes and formats, such as static images, animated gifs, or video. Banners are often used as part of online advertising campaigns to generate more traffic to a website and to increase conversions and sales.

## Behavior
Configure the banner display by setting the “banner” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)

## Configuration
The following options are available under the object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | false | Turn this flag on for enabling Banner |
| el                        	| Element  	| null | Element in which to render the Banner component |
| template                  	| Function 	| [default](src/modules/banners/index.js) | Customize the look and feel of the banner component by returning your custom HTML string from this function. This function get the list of banners as the parameter. |
| count                     	| Number   	| 1 | Indicates the number of banners to be shown |
| openNewTab                    | Boolean   | false | by default landing page url load in same tab, if you want to load in another tab configured it to true |
| tagName | String | "DIV" | html element for the banner wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-banner-block"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |


## Use Cases

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
