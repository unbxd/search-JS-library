---
layout: default
title: Methods and Events
nav_order: 4
---

# Methods and Events
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Instance Methods

This section documents the different methods exposed by the sdk/sdk config that you can use to perform various actions.


| OPTIONS | ARGUMENTS | DESCRIPTION |
|----------|----------|----------|
| reRender | | Call this function if you want to render the page again. Ex: `unbxdSearch.reRender()` |
| updateConfig | (New Config Object) | Call this function for updating the config options in run time. Ex: `unbxdSearch.updateConfig({facet:{applyMultipleFilters:true}})` |
| onQueryRedirect | (self, redirect, urlBeforeRedirect) | This config function holds the redirect logic for a query to which the response contains redirect information. Sample Search api response: |

## SDK Events

This section documents the different events fired by the Unbxd Library that you can use to perform various actions.
