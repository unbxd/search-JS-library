
## Variants Config

Configure variants display by setting the “variants” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)

The following options are available under the object:

| OPTIONS | DATATYPE | DEFAULT VALUE | DESCRIPTION |
|----------|----------|----------|----------|
| enabled                   	| Boolean  	| false | Turn this flag on for enabling variants |
| count                     	| Number   	| 5 | Indicates the number of variants to be shown |
| groupBy                   	| String   	| "v_colour" | Variants will be grouped based on this field value. The name of the field has to be the same one as in your catalog |
| attributes                	| Array    	| `["title", "v_imageUrl"]` | List of fields you need for each variant |
| mapping                   	| Object   	| `{"image_url": "v_imageUrl"}` | Field mapping of the catalog attributes to the variant attributes. This is needed to render the variant information correctly. |
