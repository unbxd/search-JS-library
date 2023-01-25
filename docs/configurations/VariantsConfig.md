---
layout: default
title: Variants
parent: Configurations
nav_order: 13
---

# Variants
{: .no_toc }

# Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---

# Definition
In e-commerce, 'variant' products refer to different versions of a product that have some variations in terms of features, size, color, style, or any other aspect of the product. These variations are usually used to offer customers a range of options when purchasing a product.

For example, a clothing item like a shirt may be available in different sizes, colors and styles, so each size/color/style would be considered as a variant of the same product. Another example can be a phone, where the different storage options and colors represent different variants of that phone.

Variant products are typically grouped together in a single product listing, with options for selecting the specific variant, like color and size, from a drop-down list or by clicking on thumbnails of the different variations. This way, the user can easily compare the different options and select the one that best meets their needs and preferences.

Having variant products can give e-commerce website a chance to increase their product catalog, also improving the chances of a user finding exactly what they are looking for and ultimately increasing the chances of a purchase.

# Behavior

Configure variants display by setting the “variants” config object.

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/variants-SDK.png)




# Configurations

The following options are available under the object:

## enabled
{: .d-inline-block }

Boolean
{: .label }

Turn this flag on for enabling variants

### Default Value
{: .no_toc }
false

### Scenarios
{: .no_toc }
true, false

---
## count
{: .d-inline-block }

Number
{: .label }

Indicates the number of variants to be shown

### Default Value
{: .no_toc }
5	

### Scenarios
{: .no_toc }

---
## groupBy
{: .d-inline-block }

String
{: .label }

Variants will be grouped based on this field value. The name of the field has to be the same one as in your catalog


### Default Value
{: .no_toc }
“v_colour”		

### Scenarios
{: .no_toc }

---
## attributes
{: .d-inline-block }

Array
{: .label }

List of fields you need for each variant

### Default Value
{: .no_toc }
```js
["title", "v_imageUrl"]			
```

### Scenarios
{: .no_toc }

---
## mapping
{: .d-inline-block }

Object
{: .label }

Field mapping of the catalog attributes to the variant attributes. This is needed to render the variant information correctly.


### Default Value
{: .no_toc }
``` js
{"image_url": "v_imageUrl"}	
```

### Scenarios
{: .no_toc }

---
# Examples

## Default Example 

Sample “variants” config

```js
variants:{
        enabled:false,
        count:5,
        groupBy:'v_colour',
        attributes:[
            "title",
            "v_imageUrl"
        ],
        mapping:{
            "image_url":"v_imageUrl"
        }
    },
```