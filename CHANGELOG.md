## Changelog


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
