---
layout: default
title: Banners
parent: Configurations
nav_order: 12
---

# Banners
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition

In e-commerce, a banner is a graphical advertisement that is typically displayed on a web page or email. Banners are often used to promote a product or service, or to direct visitors to a specific landing page. They can come in a variety of sizes and formats, such as static images, animated gifs, or video. Banners are often used as part of online advertising campaigns to generate more traffic to a website and to increase conversions and sales.

# Behavior
Configure the banner display by setting the “banner” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/Banner-sdk.png)

# Configurations
The following options are available under the object:

## enabled
{: .d-inline-block }

Boolean
{: .label }

Turn this flag on for enabling Banner

### Default Value
{: .no_toc }
false

### Usecases
{: .no_toc }
true, false

---

## el
{: .d-inline-block }

Element
{: .label  }

Element in which to render the Banner component

### Default Value
{: .no_toc }
null

### Usecases
{: .no_toc }
getElementById(), getElementsByClassName(), getElementsByName(), etc.

---

## template
{: .d-inline-block }

Function
{: .label }

Customize the look and feel of the banner component by returning your custom HTML string from this function. This function get the list of banners as the parameter.

This function accepts two params:
`banners` - lorem ipsum lorem ipsum
`bannerOpts` - lorem ipsum lorem ipsum

Expected return value: HTML string


### Default Value
{: .no_toc }
```js
function (banners, bannerOpts) => {
    const {
        openNewTab
    } = bannerOpts
    const bannerUI = banners.map((item) => {
        const {
            imageUrl,
            landingUrl,
            bannerHtml
        } = item;
        if(bannerHtml) {
            return bannerHtml;
        }
        let hrefStr = ``;
        if(landingUrl) {
            hrefStr +=`href=${landingUrl}`
        }
        if(openNewTab) {
            hrefStr +=`  target="_blank"`;
        }

        return `<a class="UNX-banner-wrap" ${hrefStr} ><img style="max-width:100%" src="${imageUrl}"/></a>`
    }).join('');
    return `${bannerUI}`
}
```
### Usecases
{: .no_toc }
This function can be overwritten to customize the banner.

---

## count
{: .d-inline-block }

Number
{: .label }

Indicates the number of banners to be shown

### Default Value
{: .no_toc }
1

### Usecases
{: .no_toc }
true, false

---

## openNewTab
{: .d-inline-block }

Boolean
{: .label }

By default landing page url load in same tab, if you want to load in another tab configured it to true

### Default Value
{: .no_toc }
false

### Usecases
{: .no_toc }
true, false

--- 

## tagName
{: .d-inline-block }

String
{: .label }

This is the html element for the banner wrapper. by default it is div.

### Default Value
{: .no_toc }
'div'

### Usecases
{: .no_toc }
Any valid html tag in which you like the banner code to be wrapped in.

--- 

## htmlAttributes
{: .d-inline-block }

Object
{: .label }

By default it contains classes for the wrapper. you can add more classes or any attributes.

### Default Value
{: .no_toc }
```js
{class:"UNX-banner-block"}
```

### Usecases
{: .no_toc }
Any valid html attribute can be passed as `key: value` pairs inside an object.

--- 
# Examples

## Default Example

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
