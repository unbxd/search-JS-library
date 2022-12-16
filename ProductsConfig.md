
## Products Config


This is the place where products from the search results will be rendered.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/search-result-render.png)

You can configure the search results section by updating the required configs under the “products” config

The following are the various options available under the “products” config object:
| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| productType | String | "SEARCH" | Type of products page to render. Accepted values are SEARCH or BROWSE or CATEGORY |
| el | Element | null | Element in which to render the search results |
| template | Function | [default](src/modules/searchResults/ui.js) | Customize the look and feel of the product card by returning your custom HTML string from this function. This function gets 5 parameters: complete product object and index of the current product, swatches, selected view type, product config |
| productAttributes | Array |  `["title", "uniqueId", "price", "sku", "imageUrl", "displayPrice", "salePrice", "sortPrice", "productDescription", "unbxd_color_mapping", "colorName", "color"]` | This is an array of all required fields for generating the result template. This is helpful to load the results faster. |
| attributesMap | Object |  `{"unxTitle": "title","unxImageUrl": "imageUrl","unxPrice": "salePrice","unxStrikePrice": "displayPrice","unxId": "uniqueId","unxDescription": "productDescription"}` | Field mappings for the data to be displayed in the product card |
| gridCount | Number | Adjusts as per screen size | If you want to have grid type user interface, then you can configure how many columns you want to have in a row with this config. By default it will adjust according to screen size. |
| productItemClass | String | "product-item" | Additional class name to be added to each product card |
| onProductClick | Function | `function(product, event) {}` | Callback functions called on click of a product card. This function gets the product object & the event object as params |
| defaultImage | String | "https://libraries.unbxdapi.com/sdk-assets/defaultImage.svg" | If product doesnt contain image url, by default this image will be shown |
| tagName | String | "DIV" | html element for the product wrapper. by default it is div.  |
| htmlAttributes | Object | {class:"UNX-search-results-block UNX-result-wrapper"} | by default it contains classes for the wrapper. you can add more classes or any attributes |
| events | object | {} | by default it will be empty. you can add further javascript events by keys and function as values. context will be the current object. |
