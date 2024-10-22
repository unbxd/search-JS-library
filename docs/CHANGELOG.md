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

{: .note-title }
> Important
>
> This document is ONLY for customers integrated with the new version of SDK (V2 integrations done after March 2022). We encourage our customers to integrate and stay upgraded with the latest versions of V2 SDK as we would soon deprecate the older version (V1 SDK).

---
# v2.1.10

- **Release Date**: 22 Oct, 2024
- **Core SDK Version**: v0.5.11
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.10/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.10/vanillaSearch.min.js)
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.10/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.10/vanillaSearch.min.css)

## 🐛 Bug Fixes
{: .no_toc}

1. An issue where the UI would break when filter values contained double quotes (") , has been resolved in this release.
2. Fixed an issue where, when `seoFriendlyUrl` was set to true and users replaced values, the facets' state was not being retained upon page reload.


---
# v2.1.9

- **Release Date**: 18th June, 2024
- **Core SDK Version**: v0.5.10
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.9/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.9/vanillaSearch.min.js)
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.9/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.9/vanillaSearch.min.css)

## 🐛 Bug Fixes
{: .no_toc}

1. Resolved an issue where clicking on a category filter did not move back to the previous level but instead stayed on the same level. This fix ensures that users can now correctly navigate back to the previous level, enhancing the usability of the category filtering system.
2. Fixed a bug where scrolling down on the category page caused the URL to decode improperly. This decoding issue led to broken pages upon reload. The URL handling has been corrected to maintain proper encoding, ensuring that the page reloads correctly without breaking.
3. Virtualisation has been removed from the sdk. This change may impact the rendering performance for long lists but was necessary to address certain user experience and technical issues. 
4. Addressed an issue with infinite scrolling where reaching the bottom of the page triggered infinite API calls. This fix ensures that scrolling to the bottom now loads content as expected without causing excessive and repeated calls to the server, improving both performance and user experience.

---
# v2.1.8

- **Release Date**: 12th June, 2024
- **Core SDK Version**: v0.5.9
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.8/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.8/vanillaSearch.min.js)
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.8/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.8/vanillaSearch.min.css)

## 🐛 Bug Fixes
{: .no_toc}

- Fixed `FETCH_ERROR` event handling . The `FETCH_ERROR` event was previously not invoking the `onEvent` handler due to a bug. This has now been resolved, and the `onEvent` handler is correctly invoked for the `FETCH_ERROR` event. Users can now handle errors and perform desired tasks within the onEvent handler when a `FETCH_ERROR` occurs.This update ensures better error management and more reliable event handling within the SDK.

---
# v2.1.7

- **Release Date**: 13th May, 2024
- **Core SDK Version**: v0.5.9
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.7/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.7/vanillaSearch.min.js)
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.7/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.7/vanillaSearch.min.css)

## 🐛 Bug Fixes
{: .no_toc}

- Resolved a major mouse back issue where users on `INFINITE_SCROLL` or `CLICK_N_SCROLL` were stuck in a loop of the same page number when attempting to navigate back. Now, when using infinite scroll or click and scroll, the page numbers are simply replaced in the history stack, preventing the creation of a new entry for simple scroll.
- `setRoutingStrategies` is now removed from the options , and now is rather a prototype method.
- Added `sdkVersion` to the prototype, providing an easier way to determine which version the user is on.
- When `seoFriendlyUrl` was false , the `keyValueSeperator` was taking wrong values , this has been fixed in this release.

---

# v2.1.6

- **Release Date**: 26th Apr, 2024
- **Core SDK Version**: v0.5.8
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.6/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.6/vanillaSearch.min.js)
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.6/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.6/vanillaSearch.min.css)

## 🐛 Bug Fixes
{: .no_toc}

- The `uc_param` param was not being retained in the url on reloading the page.
- Fixed a problem where the `last-page` pagination action/button was not directing to the last page. 
- Implemented additional try-catch blocks for better debugging within UnbxdSearch methods.
- Addressed an issue where, in the case of `seoFriendlyUrl` is true and a `keyValueSeparator` is other than `=`, the category string was not being appended to the URL.
- Adding a fallback (`location.href`) for `history.pushState` in `setRoutingStrategy` to avoid same-origin issue in the google caching pages.

---
# v2.1.5

- **Release Date**: 5th Mar, 2024
- **Core SDK Version**: v0.5.7
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.5/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.5/vanillaSearch.min.js)
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.5/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.5/vanillaSearch.min.css)

## 🚀 Features
{: .no_toc}
- onError method now triggers [onEvent](./Methods#onevent) method automatically when an error occurs, providing access to the error payload. Added support for two new events: "CONFIG_ERROR" and "RUNTIME_ERROR". These events are passed down to the "onEvent" method, allowing users to take appropriate actions based on the event type.
- [actionBtnClass](./configurations/FacetsConfig#actionbtnclass) and [actionChangeClass](./configurations/FacetsConfig#actionchangeclass) configurations have been relocated inside the [facet](./configurations/FacetsConfig.md) config object under configurations. Passing of these in main/outer object has been deprecated from this release.
- When the search box is empty and the enter key is pressed, it now triggers the api call with `*` as the query, instead of not triggering a call.
- Introducing two new pagination actions - firstPage and lastPage . Users can activate these buttons by passing the appropriate [data-page-action](./configurations/PaginationConfig#data-page-action) as either `firstPage` or `lastPage` as documented in this [usecase here](./configurations/PaginationConfig#usecase-4).


## 🐛 Bug Fixes
{: .no_toc}
- Resolved problem where navigating back to the previous page state on category pages didn't function properly. Now, when users navigate through multiple levels of categories and want to return to the previous level, the SDK accurately retains the previous page state instead of removing everything from the URL. 
- Resolved problem where characters in the Category page URL were being double encoded, resolving disruptions in navigation.
- Improved handling of no results: Previously, the "noresults" block was appended to `searchResultsWrapper` regardless of the presence of `noResultsWrapper` in the DOM. With the recent fix, the "noresults" block will now be appended under "noResultsWrapper" if it exists in the DOM. If `noResultsWrapper` is not present, the `noresults` block will be appended to `searchResultsWrapper` as a fallback.
- Fixed persistent display issue: Previously, the `no results` container remained visible alongside product cards even after querying for results. Now this removal of container from the DOM has been handled properly with this release.
- Corrected the API call behavior when reaching the last page with fewer products than the page size, preventing incorrect start index assignment.
- Initialized `rangeFacets` inside `url` config , which caused facets breaking issues when not explicitly passed by the user.
- `productItemClass` is now made mandatory for retrieving products from the DOM. Directly getting the products under the container , in some cases calcuates incorrect `start`. 
- When noResults page is reached , `start` was getting NAN .


---
# v2.1.4

- **Release Date**: 28th Dec, 2023
- **Core SDK Version**: v0.5.6
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.1.4/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.1.4/vanillaSearch.min.js)
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.4/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.4/vanillaSearch.min.css)

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
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.3/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.3/vanillaSearch.min.css)

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
- **CSS Link** [https://libraries.unbxdapi.com/search-sdk/v2.1.2/vanillaSearch.min.css](https://libraries.unbxdapi.com/search-sdk/v2.1.2/vanillaSearch.min.css)

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
