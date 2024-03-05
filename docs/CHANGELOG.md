---
layout: default
title: Change log
nav_order: 9
---

# Changelog
{: .fs-9 .no_toc}

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
# v2.1.5

- **Release Date**: 5th Mar, 2024
- **Core SDK Version**: v0.5.7
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.5/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.5/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- [onEvent]() now can be accessed when some error occurs , also will have access to the error payload.
- New events introduced `CONFIG_ERROR` and `RUNTIME_ERROR` , so that these can be utilized inside the `onEvent`.
- `actionBtnClass` and `actionChangeClass` are not moved inside the facet config .
- Empty search box query now fires a call to "*".
- Two new button have been introduced to go to the `first page` and `last page` in pagination component.


## 🐛 Bug Fixes
{: .no_toc}
- When on category page and going back everything , it was not going back to previous state and was rather removing everything from the url. 
- Pagination start getting NAN issues.
- `noResultWrapper` was getting appended to `searchResultsWrapper` , even when the noResultsWrapper present on the DOM.
- `productItemClass` is now made mandatory. This will now be used to get the products from the DOM.
- Category page url was getting double encoded.
- No results container was not getting removed when we query for some query which has some results.
- If last page encountered and has less products then pagesize , an api call with incorrect start (taking the index number of last product card) goes.
- rangeFacets inside url has been initialized.


---
# v2.1.4

- **Release Date**: 28th Dec, 2023
- **Core SDK Version**: v0.5.6
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.4/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.4/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- A newevent available for handling cases before updating the config & initialising before_initialised


## 🐛 Bug Fixes
{: .no_toc}
- Edge case for null data handled in deepClone in core js



---
# v2.1.3

- **Release Date**: 22nd Dec, 2023
- **Core SDK Version**: v0.5.5
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.3/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.3/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- A new configurations available to customize the browse query parameter as categoryPath (`p`) or categoryPathId(`p-id`)in the search API request. Please check [here](configurations/MiscellaneousConfig#browsequeryparam)


## 🐛 Bug Fixes
{: .no_toc}
- Some selected facets were being cleared on page refresh when SEO configs were partially using DEFAULT and KEY_VALUE_REPLACER algorithms.


---
# v2.1.2 - Product Virtualization

- **Release Date**: 7th Dec, 2023
- **Core SDK Version**: v0.5.4
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.2/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.2/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- In this release, we are excited to introduce a powerful enhancement to our e-commerce product listing environment — Product Virtualization. This feature is designed to revolutionize the way products are displayed on webpages, offering improved performance and a more responsive user experience. Please click [here](configurations/PaginationConfig#virtualization) to know more about virtualization.
- Within this virtualization system, there is a parameter called `bufferPages`, represented as an integer. When set to 1, the SDK employs prefetching, ensuring that one page of products is maintained ahead and behind the currently displayed page. Please click [here](configurations/PaginationConfig#bufferpages) to know more about bufferPages.
- Introducing Debug Mode for enhanced integration and debugging. This captures configuration and coding errors in real-time, aiding developers during integration. Please click [here](configurations/MiscellaneousConfig#debugmode) to know more about debugmode.


## 🐛 Bug Fixes
{: .no_toc}
- Resolved issue causing random product loading and duplication during infinite scroll, ensuring correct product order and improving user experience.
- Fix in reading facet value with special characters as multi value separators. When the facet's multiValueSeparator is configured with some special characters like `|` and copy paste the URL from browser to any notes or social media, the `|` used to get encoded to `%7c`. When these links are clicked from these social media sites, it used to navigate to the URL with `%7c` in it and SDK failed to recognize the same.
- Removal of trailing `?` or `#` (incase of hashMode) when none of the query params are added to the URL. 


## 🧰 Maintenance
{: .no_toc}
- Added ESLint for comprehensive code analysis. This enforces coding style rules, identifies potential bugs, and improves code readability.
- Fix in github actions to run on release tag.
- Removed dependency on node-sass completely 
- Upgraded the node version to 16.14.0

Please click [here](configurations/MiscellaneousConfig) for the more details on the extra params.


---
# v2.1.1 - Dynamic Extra Params

- **Release Date**: 25th Oct, 2023
- **Core SDK Version**: v0.5.1
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.1/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.1/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- In this release, we've enhanced the `extraParams` object used in our config. Previously, this object allowed you to send static key-value pairs to the Unbxd search API. However, we've now introduced the ability to use functions as values. This means that you can dynamically generate and send values to the API with each request. For example, you can now send different segmentation details, currencies, or languages in the request, ensuring that your API interactions are more adaptable and responsive to the specific context and requirements of your application. 

Please click [here](configurations/MiscellaneousConfig) for the more details on the extra params.


---
# v2.1.0 - SEO Friendly URLs

- **Release Date**: 25th Aug, 2023
- **Core SDK Version**: v0.5.0
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.0/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.0/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- We are thrilled to announce a long awaited significant enhancement to our Vanilla JS Search SDK that is set to revolutionize the way we navigate the online retail landscapes: the SEO friendly URLs in Vanilla JS SDK.
    -     Seamlessly customize query & browse parameters, page sizes, facets, sorting, and page views
    -     Welcome flexibility in choosing page numbers over product indices
    -     Say goodbye to old-fashioned, confusing URLs
    -     Replace facet keys and values as per your conventions
    -     Use custom characters for separating multi-value fields
    -     Backward compatibility to ensure a smooth transition

Please click [here](configurations/urlConfig) for the detailed documentation on SEO friendly URls




---
# v2.0.40

- **Release Date**: 11th Aug, 2023
- **Core SDK Version**: v0.4.35
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.40/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.40/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- **Introducing SEO friendly URLs for Category pages**: A seo friendly category URLs can now be achieved with Unbxd Search SDK by configuring the below code. When `seoFriendlyUrl` is set to `true`, the extra category related data (p=<categoryPath>) will not be appended in the URL. The configuration for same is here. By default, `seoFriendlyUrl` will be set to `false`.
```js
///other configurations at root level
url: {
    seoFriendlyUrl: true
}
```

## 🐛 Bug Fixes
{: .no_toc}
- There was an issue with the facet selection when there is a single or double apostrophe in the facet names. This issue has been fixed.



---
# v2.0.39

- **Release Date**: 26th July, 2023
- **Core SDK Version**: v0.4.34
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.39/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.39/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- Fixing navigation issues in the fixed pagination. The next and previous buttons had issues in the last release.

  
---

# v2.0.38

- **Release Date**: 6th June, 2023
- **Core SDK Version**: v0.4.34
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.38/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.38/vanillaSearch.min.js)

## 🧰 Maintenance
{: .no_toc}
- **Rewriting Infinite Scroll Pagination**: The infinite scroll rewrite includes pre-loading and post-loading of content based on the user's scrolling behavior. It utilizes a separate thread and the Intersection Observer API to observe changes in element intersections, improving performance and providing a smoother scrolling experience. The page number updates dynamically as the user scrolls, and the same set of products is loaded when the page is refreshed. The implementation eliminates delays caused by executing logic within the scroll event and removes dependencies on the user's scroll position, the number of products shown in a row, and the height of the product container. Only the new products are rendered, enhancing rendering performance.
- **Rewriting Click & Scroll Pagination**: The re-write of click and scroll pagination allows users to trigger the fetching of successive pages through clicking or scrolling. The implementation dynamically updates the page and loads only the necessary products, eliminating dependencies on scroll position, product display, and container height. Rendering is optimized by appending or prepending new changes instead of replacing the entire content.
- Separating out the `renderProducts` code to maintain consistency across all the render feature logics.

## 🚀 Features
{: .no_toc}
- **Introducing Page and Count in URL**: A modification has been made to the URL variables used for pagination. Instead of using "rows" and "start" to determine the number of products displayed and the starting index, respectively, the variables "page" and "count" have been introduced. The boolean variable "usePageCount" under the `pagination` config object determines whether to use this new approach (when set to true) or continue using "start" and "rows" (when set to false).

## 🐛 Bug Fixes
{: .no_toc}
- Added `uc_param`, `count` and `page` in the `unbxdKeys` list.
- Fixing CSS issues in the demo template.
- Only the newly fetched products are rendered instead of re-creating and re-rendering all the products on every API call, enhancing the rendering performance.


---

# v2.0.37

- **Release Date**: 5th June, 2023
- **Core SDK Version**: v0.4.33
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.37/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.37/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- The Product Impression event was not being tracked for all the Category pages until now, This has been fixed by introducing the `browse_impression` event in the analytics.

---

# v2.0.36

- **Release Date**: 12th May, 2023
- **Core SDK Version**: v0.4.33
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.36/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.36/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- Fixing query redirect issue in the CORE SDK. 

---

# v2.0.35

- **Release Date**: 11th May, 2023
- **Core SDK Version**: v0.4.32
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.35/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.35/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- Some default configs like defaultFilters,allowExternalUrlParams,selectedFacetConfig were not properly initialized in the options.js.


## 🧰 Maintenance
{: .no_toc}
- Initialization of variables in entire code .
- Addition of try catch blocks in render methods for proper error handling.
- Simplified filename and function names.
- Validating the user configuration for its datatype, mandatory check, and specific custom validations for config values.

--- 
# v2.0.34

- **Release Date**: 25th April, 2023
- **Core SDK Version**: v0.4.31
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.34/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.34/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
Ability to pass unbxd-user-id and unbxd-device-type request headers in the search API via the SDK for improving the personalisation and product ranking.

---

# v2.0.33 (hotfix)

- **Release Date**: 14th April, 2023
- **Core SDK Version**: v0.4.30 (hotfix)
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.33/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.33/vanillaSearch.min.js)


## 🐛 Bug Fixes
{: .no_toc}
- There was an issue in fetching the API response due to an error in variable initialization in `getResultsFromApi` file.


--- 


# v2.0.32

- **Release Date**: 14th April, 2023
- **Core SDK Version**: v0.4.29
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.32/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.32/vanillaSearch.min.js)


## 🐛 Bug Fixes
{: .no_toc}
- The `isSelected` variable in the first parameter (`facetInfo`) of the `facetTemplate` callback was not being updated, due to which it was difficult to handle the facet open/close conditions if any facet is selected.


--- 

# v2.0.31

- **Release Date**: 10th April, 2023
- **Core SDK Version**: v0.4.29
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.31/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.31/vanillaSearch.min.js)


## 🐛 Bug Fixes
{: .no_toc}
- Fixed the `product` param  undefined issue in the `onProductClick` function. The fetched products were not being updated in the SDK state as a wrong ENUM was being used for the Fixed Pagination.


--- 


# v2.0.30

- **Release Date**: 28th March, 2023
- **Core SDK Version**: v0.4.28
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.30/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.30/vanillaSearch.min.js)


## 🚀 Features
{: .no_toc}
- Addition of Breadcrumbs in the Category pages


## 🐛 Bug Fixes
{: .no_toc}
- Fixed the issues in SetCategoryId function to set category page information in the window object

## 🧰 Maintenance
{: .no_toc}
- Inclusion of Category pages in the demo site.
- Demo site to support breadcrumbs for the category pages.


--- 

# v2.0.29

- **Release Date**: 21st March, 2023
- **Core SDK Version**: v0.4.28
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.29/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.29/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- Fixed the issue with `AllowExternalUrlParams` was breaking with `hashMode: true`



--- 


# v2.0.28

- **Release Date**: 16th March, 2023
- **Core SDK Version**: v0.4.27
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.28/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.28/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- Handling Query Encoding/Decoding with '&'
- Removed double encoding of 'category-filter' values.
- The regex was changed to stop URLs from breaking when the 'category-filter' prefix was present.
- Resolved the problem where facets that had special characters in the value were not selectable.
- Fixing variable undefined issues in infinite scroll logic for category pages
- Fixed bugs while updating the URL in the infinite scroll. There was an issue when scrolling the page while the query is having an '&' character in it.

## 🧰 Maintenance
{: .no_toc}
- Changes to Documentation site

--- 

# v2.0.27

- **Release Date**: 28th February, 2023
- **Core SDK Version**: v0.4.25
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.27/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.27/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- Normalizing the Query parameter encoding and decoding for the Infinite scroll feature.
- Introduction of `urlSearchParamsToStr` method to normalize the partial updates of URL.

--- 

# v2.0.26

- **Release Date**: 28th February, 2023
- **Core SDK Version**: v0.4.24
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.26/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.26/vanillaSearch.min.js)

## 🐛 Bug Fixes
{: .no_toc}
- Optimizing the infinite scroll logic. Introduction of SetTimeOut to reduce the number of callbacks being invoked.
- Optimizing the way infinite scroll logic updates the URL 

## 🧰 Maintenance
{: .no_toc}
- Updates to the demo site configurations

--- 


# v2.0.25

- **Release Date**: 23rd February, 2023
- **Core SDK Version**: v0.4.24
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.25/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.25/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- Complete re-write of the infinite scroll pagination logic 

--- 
