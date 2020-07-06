function renderBannerUI(){
    const banners = this.getBanners();
    this.bannerWrapper.innerHTML = this.options.banner.template(banners);
}
export default renderBannerUI;
