function renderBannerUI(){
    try{
        let banners = this.getBanners() || [];
        const {
            banner = {}
        } = this.options;
        this.bannerWrapper.innerHTML = this.options.banner.template(banners, banner); 
    }
    catch{
        this.options.onError("Banners")
    }

}
export default renderBannerUI;
