## Changelog
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
