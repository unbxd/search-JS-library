

## Swatches Config

Configure swatches display by using the configs in this section.  
[![](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/swatches-sdk.png)

The following options are available under the object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled | Boolean | false | Turn this flag on for enabling swatches |
| attributesMap | Object | `{swatchImgs: "unbxd_color_mapping","swatchColors": "color", "swatchList": "color"}` | Field mapping of the catalog attributes to the swatch attributes |
| swatchClass | String | "UNX-swatch-btn" | Additional CSS class name for the swatches |
| template | Function | [default](src/modules/swatches/ui.js) | Customize the look and feel of the swatches component by returning your custom HTML string from this function. This function gets the current swatch data and complete swatches list as parameters |