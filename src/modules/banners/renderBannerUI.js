function renderBannerUI(){
    const banners = this.getBanners() || [];
    const {
        banner = {}
    } = this.options;
    this.bannerWrapper.innerHTML = this.options.banner.template(banners, banner);
}
export default renderBannerUI;
