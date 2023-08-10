---
layout: default
title: URL
parent: Configurations
nav_order: 18
---

# SEO Friendly URLs
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# pageNoUrl
The pageNoUrl configuration defines how pagination data is managed in the URL for the Unbxd search and product discovery SDK. It consists of the following options:

**Sample Code**
```js
 pageNoUrl: { 
    addToUrl: true,
    algo: "KEY_VALUE_REPLACER", 
    keyReplacer: 'start', 
    usePageNo: false 
},
```

## addToUrl
{: .d-inline-block }

Boolean
{: .label }

The addToUrl option determines whether the page number of the ecommerce page should be included in the URL for the purpose of data persistence. When enabled, the current page number will be appended to the URL, allowing the Unbxd SDK to retain this information even when the page is reloaded. Conversely, when disabled, the page number will not be incorporated into the URL, resulting in a reset of all data to default values upon each page reload.
## Default Value
{: .no_toc }

```js
addToUrl: true
```

## Scenarios
{: .no_toc }

1. true - The page number is added to the URL, ensuring data persistence across page reloads.
2. false - The page number is not included in the URL, leading to data reset on page reload.
   

---
# usePageNo
{: .d-inline-block }

Boolean
{: .label }

The usePageNo option determines the format in which page numbers are displayed within the URL. When set to true, page numbers are exhibited in a sequential manner, such as 1, 2, 3, and so on. On the other hand, when set to false (which is the default), the page numbers are presented as index values, typically in increments determined by the page size, like 0, 10, 20, and so forth.

## Default Value
{: .no_toc }

```js
usePageNo: false
```

## Scenarios
{: .no_toc }

1. true - Page numbers are displayed sequentially (1, 2, 3, ...).
2. false - Page numbers are displayed as index values (0, 10, 20, ...) based on the defined page size.

---

# algo
{: .d-inline-block }

String
{: .label }

The algo option dictates the algorithm utilized for encoding and decoding the pagination data within the URL. When set to `DEFAULT`, the standard and widely used approach for storing pagination data is employed. This often involves keys such as start=0 or page=1. In contrast, when set to `KEY_VALUE_REPLACER`, users are granted the ability to customize the key names to their preference, allowing for more flexibility in how the pagination data is represented in the URL.

## Default Value
{: .no_toc }

```js
algo: 'DEFAULT'
```

## Scenarios
{: .no_toc }

1. `DEFAULT`: Standard pagination keys like start or page are utilized for encoding and decoding.
2. `KEY_VALUE_REPLACER`: Custom key names can be chosen by the user to encode and decode pagination data.



---



# keyReplacer
{: .d-inline-block }

String
{: .label }

The keyReplacer option comes into play only when the algo is set to `KEY_VALUE_REPLACER`. It specifies the custom key name that will be employed within the URL to encapsulate the page number. By default, this key name is set to 'start'. However, this option enables users to replace it with a personalized key name of their preference, which can provide a more descriptive representation of the pagination data in the URL.

## Default Value
{: .no_toc }

```js
keyReplacer: 'start'
```

## Scenarios
{: .no_toc }

Users have the liberty to select any string of their choice as the key name for for displaying pagination data in the URL.

---

