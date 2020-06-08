function renderBannerUI(){
    const banners = this.getBanners();
    this.bannerWrapper.innerHTML = this.options.bannerTemplate(banners);
}
export default renderBannerUI;
