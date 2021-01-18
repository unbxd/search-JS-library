const bannerTemplateUI = (banners, bannerOpts) => {
    const {
        openNewTab
    } = bannerOpts
    const bannerUI = banners.map((item) => {
        const {
            imageUrl,
            landingUrl
        } = item;
        let hrefStr = ``;
        if(landingUrl) {
            hrefStr +=`href=${landingUrl}`
        }
        if(openNewTab) {
            hrefStr +=`  target="_blank"`;
        }

        return `<a class="UNX-banner-wrap" ${hrefStr} ><img style="max-width:100%" src="${imageUrl}"/></a>`
    }).join('');
    return `${bannerUI}`
}
export default bannerTemplateUI;