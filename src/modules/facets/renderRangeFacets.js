const renderRangeFacets = function(range, selectedRange, facet) {
    const {
        facetName,
        values,
      } = range;
      let valueUI = ``;
      const {
        facetClass,
        selectedFacetClass,
        applyMultipleFilters,
        applyButtonText,
            clearButtonText,
      } = facet;
      const selected = selectedRange.length > 0 ? true :false;
      values.forEach(item =>{
          const {
            from,
            end
          } = item;
        const isSelected = this.isSelectedRange(facetName,item);
        const btnCss = (isSelected) ? `UNX-selected-facet-btn ${facetClass} ${selectedFacetClass}`:`${facetClass}`;
        valueUI +=[`<button data-facet-type="range" class="${btnCss} UNX-range-facet UNX-change-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${end.dataId}" >`,
            `<span class="UNX-facet-text">${from.name}  -  ${end.name}</span>`,
            `<span class="UNX-facet-count">(${from.count})</span>`,
      `</button>`].join('');
      });
      let clearBtn = ``;
        let applyBtn = ``;
        if(selected) {
            if(applyMultipleFilters) {
                applyBtn = `<button class="UNX-default-btn ${facetClass} UNX-facet-primary" data-action="applyRange"> ${applyButtonText}</button>`;
            }
            clearBtn = `<button class="UNX-default-btn UNX-facet-clear  ${facetClass}" data-action="clearRangeFacets">${clearButtonText}</button>`;
        }
    return [`<div class="UNX-range-wrapper">`,
        valueUI,
        `<div class="UNX-price-action-row">`,
            applyBtn,clearBtn,
        `<div>`,
      `</div>`].join('')
};
export {
    renderRangeFacets
};
