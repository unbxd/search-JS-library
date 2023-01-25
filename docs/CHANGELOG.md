---
layout: default
title: Release Notes
nav_order: 6
---

# Changelog
{: .fs-9 }

---

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

## v0.3.3

### 🚀 Features

- Add custom header and footer include files @CodeSandwich (#334)

### 🐛 Bug Fixes

- Limit the effect of `nav_exclude` to the main navigation @pdmosses (#443)
- Update normalize.scss @pdmosses (#444)
- Update code.scss @pdmosses (#445)
- Fix list alignment @pdmosses (#446)

### 🧰 Maintenance

- Bump stylelint-config-primer from 9.0.0 to 9.2.1 @dependabot-preview (#451)
- Bump stylelint from 13.6.1 to 13.7.2 @dependabot-preview (#440)
- Bump @primer/css from 15.1.0 to 15.2.0 @dependabot-preview (#436)
- Bump prettier from 2.1.1 to 2.1.2 @dependabot-preview (#429)

## v0.3.2

### Changes

- Safe page sorting @pdmosses (#411)
- v0.3.2 @pmarsceill (#388)

### 🚀 Features

- make font-sizes sass variables so they can be changed @pdebruic (#361)
- run the site locally inside docker container @fogfish (#398)
- Feature/doc collections @SgtSilvio (#379)
- Adjust dl layout @pdmosses (#401)

### 🐛 Bug Fixes

- Add site.gh_edit_source to "Edit this page on GitHub" link @mrfleap (#418)
- Inhibit text-transform for code in h4 @pdmosses (#404)
- Fix native font stack precedence issue on Windows systems. @hvianna (#331)
- Support for the linenos option on highlighted code @pdmosses (#375)
- Update anchor_headings.html @pdmosses (#399)
- Fix https @marksie1988 (#359)

### 🧰 Maintenance

- Bump prettier from 2.0.5 to 2.1.1 @dependabot-preview (#427)
- Bump prettier from 2.0.5 to 2.1.1 @dependabot-preview (#419)
- [Security] Bump lodash from 4.17.15 to 4.17.19 @dependabot-preview (#389)
- Bump @primer/css from 14.4.0 to 15.1.0 @dependabot-preview (#402)
- Bump lodash from 4.17.15 to 4.17.19 @dependabot (#384)
- Bump @primer/css from 14.4.0 to 15.0.0 @dependabot-preview (#371)


## v0.3.1

### Changes

### 🐛 Bug Fixes

- Improve accessibility by adding label to Anchor links. @mscoutermarsh (#376)

### 🧰 Maintenance

- Remove collapsible TOC on nav doc @pmarsceill (#368)
- Pdmosses collapsible toc @pmarsceill (#367)


## v0.3.0

### Changes

- v0.2.9 @pmarsceill (#306)

### 🚀 Features

- Add print styles @pmarsceill (#362)
- Navigation improvements and search sections @SgtSilvio (#352)

### 🐛 Bug Fixes

- Remove constraint with jekyll 4.1.0 @PierrickMartos (#348)

### 🧰 Maintenance

- Bump version numbers @pmarsceill (#360)
- Bump stylelint from 13.3.3 to 13.6.1 @dependabot-preview (#343)
- Bump stylelint-config-prettier from 8.0.1 to 8.0.2 @dependabot-preview (#349)


## [2.0.5] - 2022-08-29
Update core js version for keeping customer params, and fix reload url issues

- Shortened url, removed fields, variant fields, facet multiselect versions, etc
## [2.0.5] - 2022-07-04

- Shortened url, removed fields, variant fields, facet multiselect versions, etc

## [2.0.5] - 2022-04-28

- Fixed spellcheck suggestion issue
- Fixed the api selected category filter issue
- comparing facet values to the encoded string

## [2.0.4] - 2021-11-12

- added support for rendering components in multiple containers



## [2.0.3] - 2021-07-27

## Changed

- fixed the product duplicating issue with infinite scroll while applying facets.
- variant config is removed by default. so variants config need to be added in the options to enable variants in api.
- onPaginate callback fix(was not working for the page numbers in the fixed pagination)
- added support for html in banner template

- removed the styles directly applying to the html elements outside the sdk
- fixed : analytics was not fiing for range filters
- fixed : product duplication in infinite scroll


## [2.0.2] - 2021-05-10

## Added

- Accessibility changes added.
- Seperated selected facets config
- Github action


## [2.0.1] - 2020-12-22

### Added
- Added the default image config for the product template (defaultImage: "image url here")
- LIST/GRID viewtype fix when updateUrl param is false
- Added onQueryRedirect method on options to handle the ridirect
- Added openNewTab flag to load the landing page url in same tab or new tab
- infinite scroll on custom element bug fix.
- Added method to get all the selected facets - instance.getAllSelectedFacets()
- Added a method to get the total count of selected facets - instance.getSelectedFacetsCount()
- Added a method to get the total count of selected facet values - instance.getSelectedFacetValueCount()
- Added tagName, events and htmlAttributes to each config so that wrapper element created by sdk can be easily customised by customer
- Added browseQueryParam to set the default category param for the category/ browse calls.

### Changed
- fixed the special character issue in multilevel facets.
- fixed the issue while getting selected multilevel facet method
- deprecated the selected facets config from facet config.

## [2.0.0] - 2020-09-28

### Added
- Added more examples
- Added gzip
- Fixed analytics issues when we integrate with Unbxd Autosuggest
- Added source build for the debugging
- removed support for categoryPath filter.


## [0.2.0] - 2020-09-25

### Changed
- changed searchBoxSelector to searchBoxEl
- changed sdkHostName to searchEndPoint
- changed productClick to onProductClick
- viewTypes to defaultView 
- inifinteScrollTriggerEl to infinteScrollTriggerEl
- moved rangeWidget under facet Object
- actionCallback to onAction
- Removed range slider from the sdk, by default checkboxes will be rendered
- Added example page to configure the range slider


### Added
- added optional 'enable' property with the config objects


## [0.1.9] - 2020-09-21

### Changed
- Added the options as argument for the templates
- Added data-test-id attributes for the automation
- read me updates
- removeFacetsSelector to removeFacetsSelectorClass
- clearFacetsSelector to clearFacetsSelectorClass
- multiLevelFacetSelector to multiLevelFacetSelectorClass

### Added
- applyButtonText = "Apply" - added under facet object to configure the apply facet button
- clearButtonText = "clear" - added under facet object to configure the clear facet button


## [0.1.9] - 2020-09-17

### Changed
- fixed selected facet click issue 

## [0.1.8] - 2020-09-16

### Changed
- facet configuration changes, only need to add the facetsEl under facet
- removed rangeFacetEl and multiLevelFacteEl, from facet config object
- onCallBack named to on Event
- no need of 'updateConfig' as mandatory step


### Added
- configuration for view more functionality added, updated in read me
- added animaion support for the facets collapse
- added support for positioning the facets
