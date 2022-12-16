---
layout: default
title: Breadcrumbs
parent: Configurations
nav_order: 3
---

# Breadcrumbs
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

## Behavior
To render the breadcrumb component, set the “breadcrumb” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/breadcrumbs.png)

## Config
The following options are available under the breadcrumb:


| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled                   	| Boolean  	| true | Turn this flag on if you want to show breadcrumbs (if it is available) on your page |
| el                        	| Element  	| null | Element in which to render the breadcrumbs |
| template                  	| Function 	| [default](src/modules/breadcrumbs/breadcrumbsView.js) | Customize the look and feel of the breadcrumb component by defining this function that is expected to return a HTML string for the template. You will get the breadcrumbs list as parameter to this function |
| selectorClass             	| String   	| "bread-crumb" | Additional CSS class name for each breadcrumb item |
| tagName | String | "DIV" | html element for the breadcrumb wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-breadcrumbs-block"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |
