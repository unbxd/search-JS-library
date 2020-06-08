const bannerTemplateUI = (banners) => {
    const bannerUI = banners.map((item) => {
        const {
            imageUrl
        } = item;
        return `<div><img style="max-width:100%" src="${imageUrl}"/></div>`
    }).join('');
    return `${bannerUI}`
}
export default bannerTemplateUI;