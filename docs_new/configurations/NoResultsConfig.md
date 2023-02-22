---
layout: default
title: No Results
parent: Configurations
nav_order: 15
---

# No Results
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## Definition

A "no results" or "zero results" page is a type of error page that is displayed when a customer conducts a search on an e-commerce website and no products are found that match the search criteria. This can happen when a customer enters a search term that is not in the website's product database or enters a misspelled search term.

This page usually contains a message indicating that no results were found and often include suggestions such as trying different search terms, modifying the filter settings, or exploring other parts of the website. Sometimes they also include related products or categories as well.

## Behavior

Configure the display to be rendered when there are no results by setting the “noResults” config object.

## Configuration

The following options are available under the object:  


| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| template | Function | `function(query){return '<div class="UNX-no-results"> No Results found '+ query + '</div>'}` | Customize the look and feel of the no results component by using this function. You will get the searched query as param to this function |