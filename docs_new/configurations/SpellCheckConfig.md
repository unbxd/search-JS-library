---
layout: default
title: Spell Check
parent: Configurations
nav_order: 11
---

# Spell Check
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Definition
In an e-commerce platform, 'spell check' feature refers to a functionality that helps users to find products even if they have made a spelling mistake when searching for them.

This feature utilizes natural language processing (NLP) and machine learning algorithms to automatically detect and correct spelling errors in the user's search query. When a user enters a search term that contains a spelling mistake, the system will automatically check the spelling of the term against a dictionary of correctly spelled words. If the system detects a spelling mistake, it will try to suggest the correct spelling and show the search results based on that correction.

For example, if a user types in "iphone11" instead of "iPhone 11", the system will recognize the mistake and correct the spelling, displaying the search results for "iPhone 11".

This feature can help to improve the user experience by reducing the chances of users entering search terms that do not match any products in the online store's catalog and also increase the accuracy of search results.

Additionally, by using machine learning models, the spell check feature can improve its performance over time, becoming better at recognizing and correcting spelling errors. This can help to increase the chances of users finding the products they are looking for, even if they make a spelling mistake.

## Behavior

The spell check feature provides **spelling suggestions** or **spell-checks** for misspelled search queries.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/spellcheck-1.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/spellcheck-1.png)

In such cases, the context-aware algorithm of Unbxd understands your visitor’s intent and sends a “**Did You Mean**” response along with a search result set for the query, if any.

## Configuration

You can configure the spellcheck feature by updating the required configs under the “spellCheck” config object.  

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|    
| enabled                   	| Boolean  	| true | Turn this flag on for enabling spell check  |
| el                        	| Element  	| null | Element in which to render the spellcheck component |
| template                  	| Function 	| [default](src/modules/didYouMean/spellCheckView.js) | Customize the look and feel of the spellcheck component by returning your custom HTML string from this function. This function gets 3 parameters: the search query, the suggested query text and a config object with product count details (`{start, productsLn, numberOfProducts}`) |
| selectorClass             	| String   	| "UNX-suggestion" | Additional CSS class name for the spell check component |
| tagName | String | "DIV" | html element for the spellcheck wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-spellcheck-wrapper"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |

## Use Cases

### Sample Example
Sample “spellCheck” config

```js
spellCheck:{
    enabled:true,
    el:document.getElementById("didYouMeanWrapper"),
    selectorClass: "UNX-suggestion",
    template: function(query,suggestion,pages) {
    const {
        start,
        productsLn,
        numberOfProducts
    } = pages;
    const {
        selectorClass
    } = this.options.spellCheck;
    const {
        productType
    } = this.options;
    let newQuery = query;
    if(productType !=="SEARCH" ) {
        const catId = this.getCategoryId() || "";
        const cId = decodeURIComponent(catId).split(">");
        newQuery = cId[cId.length-1] || cId[0] ;
    }
    const {
        UNX_spellCheck
    } = this.testIds
    const noUi = (suggestion) ? `<p class="UNX-no-result"> Your search "<strong>${suggestion}</strong>" did not match any products. Did you mean <button data-test-id="${UNX_spellCheck}" data-action="getSuggestion" class="${selectorClass}">${query}</button>? </p>` :``;
    let qUi = ``;
    let countUi = ``;
    if(numberOfProducts > 0) {
        countUi = `<span class="UNX-result-info">  -  ${start+1} to ${productsLn+start} of ${numberOfProducts} products</span>`;
    }
    if(pages && newQuery){
        qUi = `<p class="UNX-suggestion-p">Showing results for <strong>${newQuery}</strong> ${countUi}</p>`;
    }
    return  [`<div class="UNX-spellcheck-block">`,
            noUi,
            qUi,
        `</div>`].join('');
    },
}
```