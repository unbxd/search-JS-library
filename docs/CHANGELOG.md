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

# v2.0.37

- **Release Date**: 5th June, 2023
- **Core SDK Version**: 0.4.33

## 🐛 Bug Fixes
{: .no_toc}
- The Product Impression event was not being tracked for all the Category pages until now, This has been fixed by introducing the `browse_impression` event in the analytics.

---

# v2.0.36

- **Release Date**: 12th May, 2023
- **Core SDK Version**: 0.4.33

## 🐛 Bug Fixes
{: .no_toc}
- Fixing query redirect issue in the CORE SDK. 

---

# v2.0.35

- **Release Date**: 11th May, 2023
- **Core SDK Version**: 0.4.32

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
- **Core SDK Version**: 0.4.31

## 🚀 Features
{: .no_toc}
Ability to pass unbxd-user-id and unbxd-device-type request headers in the search API via the SDK for improving the personalisation and product ranking.

---

# v2.0.33 (hotfix)

- **Release Date**: 14th April, 2023
- **Core SDK Version**: 0.4.30 (hotfix)


## 🐛 Bug Fixes
{: .no_toc}
- There was an issue in fetching the API response due to an error in variable initialization in `getResultsFromApi` file.


--- 


# v2.0.32

- **Release Date**: 14th April, 2023
- **Core SDK Version**: 0.4.29


## 🐛 Bug Fixes
{: .no_toc}
- The `isSelected` variable in the first parameter (`facetInfo`) of the `facetTemplate` callback was not being updated, due to which it was difficult to handle the facet open/close conditions if any facet is selected.


--- 

# v2.0.31

- **Release Date**: 10th April, 2023
- **Core SDK Version**: 0.4.29


## 🐛 Bug Fixes
{: .no_toc}
- Fixed the `product` param  undefined issue in the `onProductClick` function. The fetched products were not being updated in the SDK state as a wrong ENUM was being used for the Fixed Pagination.


--- 


# v2.0.30

- **Release Date**: 28th March, 2023
- **Core SDK Version**: 0.4.28


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
- **Core SDK Version**: 0.4.28

## 🐛 Bug Fixes
{: .no_toc}
- Fixed the issue with `AllowExternalUrlParams` was breaking with `hashMode: true`



--- 


# v2.0.28

- **Release Date**: 16th March, 2023
- **Core SDK Version**: 0.4.27

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
- **Core SDK Version**: 0.4.25

## 🐛 Bug Fixes
{: .no_toc}
- Normalizing the Query parameter encoding and decoding for the Infinite scroll feature.
- Introduction of `urlSearchParamsToStr` method to normalize the partial updates of URL.

--- 

# v2.0.26

- **Release Date**: 28th February, 2023
- **Core SDK Version**: 0.4.24

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
- **Core SDK Version**: 0.4.24

## 🚀 Features
{: .no_toc}
- Complete re-write of the infinite scroll pagination logic 

--- 
