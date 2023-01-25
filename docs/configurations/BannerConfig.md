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

Required
{: .label .label-red}

"Enabled" is a flag or switch that allows developers to turn on or off a specific feature in an e-commerce website. In this context, the "banner feature" refers to the ability to display banners or advertisements on the website.

When the "enabled" flag is turned on, the banner feature will be active and banners or advertisements will be displayed on the website. This can be used to promote new products, sales, or other special offers. When the "enabled" flag is turned off, the banner feature will be disabled and no banners or advertisements will be displayed on the website.

### Default Value
{: .no_toc }

```js
enabled: false
```

### Scenarios
{: .no_toc }
1. true - banners or advertisements will be displayed on the website 
2. false - the banner feature will be disabled

---

## el
{: .d-inline-block }

Element
{: .label  }

Required
{: .label  .label-red}

"el" is an HTML element in an e-commerce page that is designated to display banners or advertisements. This allows developers to control the placement of the banners on the webpage and to ensure that they are displayed in a prominent and visible location. The "el element" can be set by providing the id or class of the element in the code.

### Default Value
{: .no_toc }

```js
el: null
```

### Scenarios
{: .no_toc }
There are several HTML selectors that can be used to locate the banner element in an e-commerce page. For ex: getElementById, getElementsByClassName, getElementsByTagName, querySelector, querySelectorAll, getElementsByName, etc...
---

## template
{: .d-inline-block }

Function
{: .label }

The "template" function here refers to the ability to change the appearance of the banner feature on the e-commerce website. It allows developers to control the appearance of the banners by providing custom HTML. The function receives the list of banners to be displayed, and the banner configurations as parameters and it needs to return a string of HTML that will be used to render the banners on the webpage.

This function passes two params:
1. `banners` - the list of banners to be displayed
2. `bannerOpts` - the banner configurations

**Expected return value**: a string of HTML that will be used to render the banners on the webpage


### Default Value
{: .no_toc }
```js
template: function (banners, bannerOpts) => {
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
### Scenarios
{: .no_toc }
For additional information on custom scenarios, please refer to the [use cases section](#usecases) located below.

---

<!-- ## count
{: .d-inline-block }

Number
{: .label }

Indicates the number of banners to be shown

### Default Value
{: .no_toc }
1

### Scenarios
{: .no_toc }
true, false

--- -->

## openNewTab
{: .d-inline-block }

Boolean
{: .label }

"Open in new tab" is a feature that allows the user to control whether a link or page should be opened in a new tab or the same tab when the banner is clicked. This feature provides the user with more control over their browsing experience and allows them to keep multiple pages open at once.

### Default Value
{: .no_toc }

```js
openNewTab: false
```

### Scenarios
{: .no_toc }
1. true - opens in new tab
2. false - opens in same tab


--- 

## tagName
{: .d-inline-block }

String
{: .label }

"tagName" refers to the name of an HTML tag used to wrap or structure the content (banner) on a webpage.

### Default Value
{: .no_toc }

```js
tagName: div
```

### Scenarios
{: .no_toc }
Any valid html tag such as div, span, p, h1, h2, etc in which you like the banner code to be wrapped in.

--- 

## htmlAttributes
{: .d-inline-block }

Object
{: .label }

"htmlAttributes" refers to a set of key-value pairs that provide additional information or properties for an HTML element. By default it contains classes for the wrapper. You can add more classes or any valid attributes.

### Default Value
{: .no_toc }
```js
htmlAttributes: { class:"UNX-banner-block" }
```

### Scenarios
{: .no_toc }
Any valid html attribute can be passed as `key : value` pairs inside an object.

--- 


# Default Example

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

# UseCases
## Usecase 1:
## Usecase 2:
## Usecase 3: