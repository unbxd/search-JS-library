export default function(ranges,selectedRanges) {
    let ui  = ``;
    const {
      selectedFacetClass,
      facetClass
    } = this.options.facet;
    ranges.forEach(range => {
        const {
          displayName,
          facetName,
          values
        } = range;
        let valueUI = ``;
        values.forEach(item =>{
            const {
              from,
              to
            } = item;
          const isSelected = this.isSelectedRange(facetName,item);
          const btnCss = (isSelected) ? `${facetClass} ${selectedFacetClass}`:`${facetClass}`;
          valueUI +=`<button class="${btnCss} UNX-change-facet UNX-range-facet" data-action="setRange" data-facet-name="${facetName}" data-start="${from.dataId}" data-end="${to.dataId}" >
              <span class="UNX-facet-text">${from.name}  -  ${to.name}</span>
              <span class="UNX-facet-count">(${from.count})</span>
          </button>`;
        });
        ui += `<div class="UNX-facets-inner-wrapper">
          <h3 class="UNX-facet-header">${displayName}</h3>
              <div class="UNX-facets">${valueUI}</div>
        </div>`
    });
    return `<div class="UNX-range-wrapper">
      ${ui}
      <div class="UNX-price-action-row">
          <button
          class="UNX-default-btn "
          data-action="clearRangeFacets"> clear</button>
      <div>
    </div>`
};
