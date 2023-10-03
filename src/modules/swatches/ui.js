export default function(swatchData={}, swatches={},product={}) {
    const {
        swatchImgs = []
    } = swatchData || {};
    let btnUI = ``;
    let btnList = ``;
    let imgsUI = ``;
    const {
        swatchClass = ""
    } = swatches || {};
    const {
        UNX_swatchClrBtn = ""
    } = this.testIds;
    const {
        unxTitle = ""
    } = product || {};
    if(swatchImgs.length > 1) {
        swatchImgs.forEach((item,id) => {
            const sid = this.generateRid("unx_swatch_");
            const sCss = (id === 0) ? '':' UNX-swatch-hidden';
            const bCss = (id === 0) ? ' UNX-selected-swatch':'';
            const data = item.split("::");
            if(data){
                btnUI+= [`<button value="swatch color ${data[0]}" data-test-id="${UNX_swatchClrBtn}${id}" data-swatch-id="${sid}" data-action="changeSwatch" class="${swatchClass} ${sid} ${bCss}" style="background-color:${data[0]}"> swatch color ${data[0]} </button>`].join('');
                imgsUI+=`<div id="${sid}" class="UNX-img-wrapper ${sCss}"><img alt="${unxTitle} for the ${data[0]}" class="UNX-img-block" src="${data[1]}"/></div>`
            }
        });
        btnList = `<div class="UNX-swatch-color-list">${btnUI}</div>`;
    }
    return {
        btnList:btnList,
        imgList:imgsUI,
    };
}
