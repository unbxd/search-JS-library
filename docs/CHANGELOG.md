---
layout: default
title: Release Notes
nav_order: 8
---

# Changelog
{: .fs-9 .no_toc}

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}


---
# v2.0.40

- **Release Date**: 11th Aug, 2023
- **Core SDK Version**: v0.4.35
- **CDN Link**: [https://libraries.unbxdapi.com/search-sdk/v2.0.40/vanillaSearch.min.js](https://libraries.unbxdapi.com/search-sdk/v2.0.40/vanillaSearch.min.js)

## 🚀 Features
{: .no_toc}
- **Introducing SEO friendly URLs for Category pages**: A seo friendly category URLs can now be achieved with Unbxd Search SDK by configuring the below code. When `seoFriendlyUrl` is set to `true`, the extra category related data (p=<categoryPath>) will not be appended in the URL. The configuration for same is here.
```js
///other configurations at root level
url: {
    seoFriendlyUrl: false
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
- Validating the user configuration for its dataytype, mandatory check , and specific custom valiadtions for values .

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
