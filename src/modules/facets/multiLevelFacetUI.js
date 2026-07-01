
const multiLevelFacetUI = function (facet, selectedCategories, facetSearchTxt, facetConfig) {
    const facetMultilevelMultiSelect = this.options?.facet?.facetMultilevelMultiSelect || false;

    if (facetMultilevelMultiSelect) {
        return renderMultiSelectMode.call(this, facet, selectedCategories, facetSearchTxt, facetConfig);
    } else {
        return renderSingleSelectMode.call(this, facet, selectedCategories, facetSearchTxt, facetConfig);
    }
};

function renderSingleSelectMode(facet, selectedCategories, facetSearchTxt, facetConfig) {
    let ui = "";
    let {
        multiLevelFacetSelectorClass,
        facetClass
    } = facetConfig;
    const {
        UNX_facetLevel
    } = this.testIds;
    const {
        level,
        values,
        filterField
    } = facet;
    const lastCategoryValue = selectedCategories[selectedCategories.length - 1]?.value;
    const isLastCategoryInValues = values.some(item => item.value === lastCategoryValue);
    const finalCategories = isLastCategoryInValues ? selectedCategories.filter(item => item.value !== lastCategoryValue) : selectedCategories;
    if (finalCategories.length > 0) {
        finalCategories.forEach(item => {
            const {
                level,
                filterField,
                value
            } = item;
            let lTid = `data-test-id="${UNX_facetLevel}${level}"`;
            const levelCss = `${multiLevelFacetSelectorClass}  UNX-category-level-${level}`
            ui += [`<button ${lTid} data-parent="${filterField}" data-level="${level}" data-name="${value}"`,
            `class=" ${levelCss} UNX-selected-crumb ${facetClass}" data-action = "clearCategoryFilter">`,
            `<span class="UNX-category-icon"></span><label class="UNX-facet-text">${decodeURIComponent(value)}</label>`,
                `</button>`].join('')
        })
    }
    let {
        multiLevelField
    } = facet;
    if (!multiLevelField) {
        multiLevelField = filterField;
    }
    let lTid = `data-test-id="${UNX_facetLevel}${level}"`;
    let levelCss = `UNX-category-level-${level}`;
    const valueUI = values.map(item => {
        const {
            name,
            count,
            dataId
        } = item;
        let itemFacetClass = facetClass;
        if (facetSearchTxt && facetSearchTxt.length > 0) {
            if (name.toUpperCase().indexOf(facetSearchTxt.toUpperCase()) < 0) {
                itemFacetClass += ' UNX-search-hidden'
            }
        }
        return [`<button ${lTid} data-parent="${multiLevelField}" data-level="${level}"`,
        `class="${multiLevelFacetSelectorClass} ${levelCss} ${itemFacetClass} ${lastCategoryValue === name ? "UNX-selected-crumb" : ""}" data-name="${dataId}" data-action = "setCategoryFilter">`,
        `<label class="UNX-facet-text">${name}</label><label class="UNX-facet-count">(${count})</label></button>`].join('')
    })
    // console.log("selectedCategories", selectedCategories, isLastCategoryInValues);
    ui += `<div class="UNX-category-values">${valueUI.join('')}</div>`
    if (ui !== "") {
        return [`<div class="UNX-multi-facet-wrap">`,
            `${ui}</div>`].join('')

    } else {
        return "";
    }
}

function renderMultiSelectMode(facet, selectedCategories, facetSearchTxt, facetConfig) {
    const {
        multiLevelFacetSelectorClass,
        facetClass
    } = facetConfig;
    const { UNX_facetLevel } = this.testIds;

    const {
        facetName,
        level = 1,
        values = [],
        filterField
    } = facet;

    let { multiLevelField } = facet;

    if (!multiLevelField) {
        multiLevelField = filterField;
    }

    const selectedPaths = (this.state.categoryFilter[facetName] || []).filter(Boolean);
    const searchText = facetSearchTxt?.trim().toLowerCase();

    const renderNode = (
        node,
        parentPath = [],
        currentLevel = level
    ) => {
        const {
            value,
            count,
            children = []
        } = node;

        const currentPath = [...parentPath, value];
        const fullPath = currentPath.join(">");

        const isSelected = selectedPaths.includes(fullPath);

        const isAncestorOfSelected = selectedPaths.some(
            selectedPath =>
                selectedPath !== fullPath &&
                selectedPath.startsWith(`${fullPath}>`)
        );

        const shouldHighlight =
            isSelected || isAncestorOfSelected;

        const renderedChildren = children
            .map(child =>
                renderNode(
                    child,
                    currentPath,
                    currentLevel + 1
                )
            )
            .join("");

        const matchesSearch =
            !searchText ||
            value.toLowerCase().includes(searchText);

        const hasVisibleChildren =
            renderedChildren.trim().length > 0;

        if (!matchesSearch && !hasVisibleChildren) {
            return "";
        }

        const buttonClasses = [
            multiLevelFacetSelectorClass,
            facetClass,
            `UNX-category-level-${currentLevel}`,
            shouldHighlight ? "UNX-selected-crumb" : ""
        ]
            .filter(Boolean)
            .join(" ");

        const lTid = `data-test-id="${UNX_facetLevel}${currentLevel}"`;

        return `
            <div class="UNX-category-node UNX-category-node-level-${currentLevel}">
                <button
                    ${lTid}
                    data-parent="${multiLevelField}"
                    data-level="${currentLevel}"
                    data-name="${fullPath}"
                    class="${buttonClasses}"
                    data-action="setCategoryFilter"
                >
                    <label class="UNX-facet-text">${value}</label>
                    <label class="UNX-facet-count">(${count})</label>
                </button>

                ${hasVisibleChildren
                ? `
                            <div class="UNX-category-children UNX-category-level-${currentLevel + 1}">
                                ${renderedChildren}
                            </div>
                        `
                : ""
            }
            </div>
        `;
    };

    const ui = values
        .map(item => renderNode(item))
        .join("");

    if (!ui) {
        return "";
    }

    return `
        <div class="UNX-multi-facet-wrap">
            <div class="UNX-category-values">
                ${ui}
            </div>
        </div>
    `;
}

export default multiLevelFacetUI;