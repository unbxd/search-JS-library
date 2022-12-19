---
layout: default
title: Range Slider
parent: Custom Integrations
nav_order: 1
---

# Range SLider
{: .no_toc }

## Table of contents
{: .no_toc .text-delta }

1. TOC
{:toc}

---
## User Requirement
If you wish to have a range slider, this is an example with the integration with noUISlider

[![](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)](https://unbxd.com/docs/wp-content/uploads/2020/05/facet-price-widget.png)


## More Information

**Include CSS file**
https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.2/nouislider.css

**Include JS file**
https://cdnjs.cloudflare.com/ajax/libs/noUiSlider/14.6.2/nouislider.min.js


## Code Snippet

```js
facet: {
    facetsEl: document.getElementById("facetsWrapper"),
    selectedFacetsEl: document.getElementById("selectedFacetWrapper"),
    applyMultipleFilters: false,
    defaultOpen: "FIRST",
    onFacetLoad: function(facets) {
        const self = this;
        const {
            facet
        } = this.options;
        const {
            rangeWidgetConfig
        } = facet;
        facets.forEach(facetItem => {
            const {
                facetType,
                facetName,
                gap
            } = facetItem;
            const {
                prefix
            } = rangeWidgetConfig;

            if (facetType === "range") {
                const rangeId = `${facetName}_slider`;
                const sliderElem = document.getElementById(rangeId);
                let {
                    end,
                    gap,
                    max,
                    min,
                    start
                } = facetItem;
                const selectedValues = sliderElem.dataset;
                if (selectedValues) {
                    start = Number(selectedValues.x),
                        end = Number(selectedValues.y)
                }
                this[rangeId] = noUiSlider.create(sliderElem, {
                    start: [start, end],
                    tooltips: [{
                            to: function(value) {
                                return `${prefix} ${Math.round(value)}`;
                            }
                        },
                        {
                            to: function(value) {
                                return `${prefix} ${Math.round(value)}`;
                            }
                        }
                    ],
                    connect: true,
                    range: {
                        'min': 0,
                        'max': max
                    },
                    format: {
                        to: function(value) {
                            return Math.round(value);
                        },
                        from: function(value) {
                            return Math.round(value);
                        }
                    },
                    padding: 0,
                    margin: 0,
                });
                this[rangeId].on("set", function(data) {
                    const newData = {
                        start: data[0],
                        end: data[1],
                        facetName,
                        gap
                    };
                    self.setRangeSlider(newData);
                });

            }

        });
    },
    isCollapsible: true,
    isSearchable: true,
    enableViewMore: false,
    rangeTemplate: function(range, selectedRange, facet) {
        const {
            facetName,
            start,
            end
        } = range;
        let min = start;
        let max = end;
        if (selectedRange.length > 0) {
            const sel = selectedRange[0].replace(/[^\w\s]/gi, '').split(" TO ");
            min = sel[0];
            max = sel[1];
        }
        const rangId = `${facetName}_slider`;
        return [`<div id="${facetName}"  data-id="${facetName}" class=" UNX-range-slider-wrap">`,
            `<div class="UNX-value-container UNX-range-value-block" ></div>`,
            `<div id="${rangId}" data-x="${min}" data-y="${max}" class="UNX-range-slider-wrapper"></div>`,
            `</div>`,
            `<div>`,
            `</div>`
        ].join('')
    }
}
```
