---
layout: default
title: Loader
parent: Configurations
nav_order: 4
---

# Loader
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Behavior

Configure page loader to be shown when fetching search API results by setting the “loader” config object. 

## Configuration

The following options are available under the object:  


| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| el | Element | null | Element in which to render the loader component |
| template | Function | `function(){return '<div class="UNX-loader">Loading search results....</div>'}` | Customize the look and feel of the loader component by using this function |