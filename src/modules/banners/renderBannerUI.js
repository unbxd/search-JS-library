function renderBannerUI(){
    try{
        let banners = this.getBanners() || [];
        const {
            banner = {}
        } = this.options;
        this.bannerWrapper.innerHTML = this.options.banner.template(banners, banner); 
    }
    catch (err) {
        this.options.onError("Banners", err)
        throw err;
    }

}
export default renderBannerUI;
