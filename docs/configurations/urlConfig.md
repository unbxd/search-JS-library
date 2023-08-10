---
layout: default
title: URL
parent: Configurations
nav_order: 18
---

# SEO Friendly URLs
{: .no_toc }

This feature ensures both data persistence and readability within the Unbxd SDK's URL structure, making it easier than ever to optimize the presentation of products to your users.

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# pageNoUrl
The `pageNoUrl` configuration defines how pagination data is managed in the URL for the Unbxd search SDK. It consists of the following options:

**Sample Code**
```js
url: {
    // other URL configurations...
    pageNoUrl: { 
       addToUrl: true,
       algo: "KEY_VALUE_REPLACER", 
       keyReplacer: 'start', 
       usePageNo: false 
   }
}
```

## addToUrl
{: .d-inline-block }

Boolean
{: .label }

The addToUrl option determines whether the page number of the ecommerce page should be included in the URL for the purpose of data persistence. When enabled, the current page number will be appended to the URL, allowing the Unbxd SDK to retain this information even when the page is reloaded. Conversely, when disabled, the page number will not be incorporated into the URL, resulting in a reset of all data to default values upon each page reload.
### Default Value
{: .no_toc }

```js
addToUrl: true
```

### Scenarios
{: .no_toc }

1. true - The page number is added to the URL, ensuring data persistence across page reloads.
2. false - The page number is not included in the URL, leading to data reset on page reload.
   

---
## usePageNo
{: .d-inline-block }

Boolean
{: .label }

The usePageNo option determines the format in which page numbers are displayed within the URL. When set to true, page numbers are exhibited in a sequential manner, such as 1, 2, 3, and so on. On the other hand, when set to false (which is the default), the page numbers are presented as index values, typically in increments determined by the page size, like 0, 10, 20, and so forth.

### Default Value
{: .no_toc }

```js
usePageNo: false
```

### Scenarios
{: .no_toc }

1. true - Page numbers are displayed sequentially (1, 2, 3, ...).
2. false - Page numbers are displayed as index values (0, 10, 20, ...) based on the defined page size.

---

## algo
{: .d-inline-block }

String
{: .label }

The algo option dictates the algorithm utilized for encoding and decoding the pagination data within the URL. When set to `DEFAULT`, the standard and widely used approach for storing pagination data is employed. This often involves keys such as start=0 or page=1. In contrast, when set to `KEY_VALUE_REPLACER`, users are granted the ability to customize the key names to their preference, allowing for more flexibility in how the pagination data is represented in the URL.

### Default Value
{: .no_toc }

```js
algo: 'DEFAULT'
```

### Scenarios
{: .no_toc }

1. `DEFAULT`: Standard pagination keys like start or page are utilized for encoding and decoding.
2. `KEY_VALUE_REPLACER`: Custom key names can be chosen by the user to encode and decode pagination data.

---

## keyReplacer
{: .d-inline-block }

String
{: .label }

The keyReplacer option comes into play only when the algo is set to `KEY_VALUE_REPLACER`. It specifies the custom key name that will be employed within the URL to encapsulate the page number. By default, this key name is set to 'start'. However, this option enables users to replace it with a personalized key name of their preference, which can provide a more descriptive representation of the pagination data in the URL.

### Default Value
{: .no_toc }

```js
keyReplacer: 'start'
```

### Scenarios
{: .no_toc }

Users have the liberty to select any string of their choice as the key name for for displaying pagination data in the URL.

---















# pageSizeUrl
The `pageSizeUrl` configuration allows you to control the number of products fetched in each API call within the Unbxd search SDK. This feature is particularly useful in tailoring the browsing experience for users by determining how many products are displayed on a single page. The configuration consists of the following options:

**Sample Code**
```js
url:{
    // other URL configurations...
    pageSizeUrl: {
        addToUrl: true,
        algo: "KEY_VALUE_REPLACER",
        keyReplacer: "count"
    }
}
```

## addToUrl
{: .d-inline-block }

Boolean
{: .label }

This option dictates whether the selected page size should be included in the URL, thereby enabling the Unbxd SDK to remember the chosen page size even after the page is reloaded. If set to true, the selected page size will be appended to the URL for data persistence. On the other hand, if set to false, the page size will not be added to the URL, and the SDK will default to a standard page size upon each page reload.

### Default Value
{: .no_toc }

```js
addToUrl: true
```

### Scenarios
{: .no_toc }

1. true - to retain the page size in the URL
2. false - to reset to default page size upon reload.
   

---

## algo
{: .d-inline-block }

String
{: .label }

This option determines the algorithm used for encoding and decoding the page size information within the URL. When set to `DEFAULT`, the standard and widely used approach for storing pagination data is employed. When set to `KEY_VALUE_REPLACER`, users can specify a custom key name that encapsulates the page size in the URL. This offers a flexible way to represent the chosen page size.

### Default Value
{: .no_toc }

```js
algo: 'DEFAULT'
```

### Scenarios
{: .no_toc }

1. `DEFAULT`: Standard key `rows` is utilized for displaying the page size data in the URL.
2. `KEY_VALUE_REPLACER`: Custom key names can be chosen by the user to display page size data in the URL

---

## keyReplacer
{: .d-inline-block }

String
{: .label }

The keyReplacer option comes into play only when the algo is set to `KEY_VALUE_REPLACER`. This option defines the custom key name that is utilized within the URL to represent the chosen page size. By default, this key name is set to `rows`, but you have the freedom to assign a different name that better signifies the page size preference.

### Default Value
{: .no_toc }

```js
keyReplacer: 'rows'
```

### Scenarios
{: .no_toc }

Stick with 'rows' (default) or select a descriptive string as the key name for displaying page size data in the URL.

---

















# sortUrl

In this `sortUrl` configuration, sorting preferences are managed effectively by tailoring the URL structure according to user selections. By configuring the `sortUrl` options, you ensure both flexibility and user-friendly sorting experiences on your e-commerce site.

**Sample Code**
```js
url:{
    // other URL configurations...
    sortUrl: { 
        addToUrl: true,
        algo: "KEY_VALUE_REPLACER", 
        keyReplacer: "sortBy",
        valueReplacer: {
            "price desc": "price%20desc",
            "price asc": "price&20asc"
        }
    },
}
```

## addToUrl
{: .d-inline-block }

Boolean
{: .label }

The `addToUrl` option determines whether the selected sorting preference should be included in the URL. Enabling this option and setting it to true ensures that the chosen sorting option is added to the URL, allowing the Unbxd SDK to remember the sorting choice even after page reloads. Disabling this option and setting it to false results in the sorting preference not being added to the URL, and the default sorting is applied.

### Default Value
{: .no_toc }

```js
addToUrl: true
```

### Scenarios
{: .no_toc }

1. true - to retain sorting preference in the URL
2. false - to reset to default sorting upon reload.
   

---

## algo
{: .d-inline-block }

String
{: .label }

The algo option dictates the algorithm used for encoding and decoding sorting information within the URL. When set to `DEFAULT`, the standard and widely used approach for storing sorting data is employed. When set to `KEY_VALUE_REPLACER`, users can specify a custom key name that represents the sorting choice. This key is used to indicate the sorting preference in the URL.

### Default Value
{: .no_toc }

```js
algo: 'DEFAULT'
```

### Scenarios
{: .no_toc }

1. `DEFAULT`: Standard key `sortBy` is utilized for displaying the sorting data in the URL.
2. `KEY_VALUE_REPLACER`: Custom key names can be chosen by the user to display sorting data in the URL



---


## keyReplacer
{: .d-inline-block }

String
{: .label }

The keyReplacer option comes into play only when the algo is set to `KEY_VALUE_REPLACER`. The keyReplacer option defines the custom key name that is utilized within the URL to represent the sorting preference. By default, this key name is set to 'sortBy'. You can customize this key name to create a more descriptive representation of the sorting preference.

### Default Value
{: .no_toc }

```js
keyReplacer: 'sortBy'
```

### Scenarios
{: .no_toc }

Stick with 'sortBy' (default) or select a descriptive string as the key name for displaying the sorting preference.

---

## valueReplacer
{: .d-inline-block }

Object
{: .label }

The `valueReplacer` option comes into play only when the `algo` is set to `KEY_VALUE_REPLACER`. The `valueReplacer` option is an object where you provide key-value pairs for replacing sorting values. If nothing is provided, the default key (such as "price desc" or "price asc") will be used. This option enables customization of how sorting values are displayed in the URL. Special characters in the keys and values are automatically encoded before being added to the URL.

### Default Value
{: .no_toc }

No default; uses the provided sorting values as keys

### Scenarios
{: .no_toc }

Define key-value pairs to customize how sorting values are represented in the URL. Special characters are encoded automatically.

---
















# pageViewUrl

In this configuration, product view preferences are effectively managed by tailoring the URL structure according to user selections. By configuring the `pageViewUrl` options, you ensure an enhanced browsing experience for users on your e-commerce site, allowing them to choose between list view and grid view as per their preference.

**Sample Code**
```js
url:{
    // other URL configurations...
    pageViewUrl: { 
        addToUrl: true,
        algo: "KEY_VALUE_REPLACER", 
        keyReplacer: "viewType", 
        valuesReplacer: {  
            "GRID": "GRID",
            "LIST": "LIST"
        }
    },
}
```

## addToUrl
{: .d-inline-block }

Boolean
{: .label }

The `addToUrl` option determines whether the selected product view preference should be included in the URL. Enabling this option and setting it to true ensures that the chosen product view option is added to the URL. This enables the Unbxd SDK to remember the product view choice even after the page is reloaded. Disabling this option and setting it to false results in the product view preference not being added to the URL, and the default product view is applied.

### Default Value
{: .no_toc }

```js
addToUrl: true
```

### Scenarios
{: .no_toc }

1. true - to retain product view preference in the URL
2. false - to reset to default product view upon reload
   

---

## algo
{: .d-inline-block }

String
{: .label }

The algo option dictates the algorithm used for encoding and decoding the product view information within the URL. When set to `DEFAULT`, the standard and widely used approach for storing view type data is employed. When set to `KEY_VALUE_REPLACER`, users can specify a custom key name that represents the product view choice. This key is used to indicate the product view preference in the URL.

### Default Value
{: .no_toc }

```js
algo: 'DEFAULT'
```

### Scenarios
{: .no_toc }

1. `DEFAULT`: Standard key `viewType` is utilized for displaying the view type data in the URL.
2. `KEY_VALUE_REPLACER`: Opt for KEY_VALUE_REPLACER to utilize a custom key name for encoding and decoding the product view preference in the URL.



---


## keyReplacer
{: .d-inline-block }

String
{: .label }

The keyReplacer option comes into play only when the algo is set to `KEY_VALUE_REPLACER`. The keyReplacer option defines the custom key name that is utilized within the URL to represent the product view preference. By default, this key name is set to 'viewType'. You can customize this key name to create a more descriptive representation of the product view choice.

### Default Value
{: .no_toc }

```js
keyReplacer: 'viewType'
```

### Scenarios
{: .no_toc }

Stick with 'viewType' (default) or select a descriptive string as the key name for displaying the product view preference.

---

## valueReplacer
{: .d-inline-block }

Object
{: .label }

The `valueReplacer` option comes into play only when the `algo` is set to `KEY_VALUE_REPLACER`. The `valuesReplacer` option is an object where you provide key-value pairs for replacing product view values. If nothing is provided, the default key (such as "GRID" or "LIST") will be used. This option enables customization of how product view values are displayed in the URL.

### Default Value
{: .no_toc }

No default; uses the provided product view values as keys

### Scenarios
{: .no_toc }

Define key-value pairs to customize how product view values are represented in the URL.

---




















