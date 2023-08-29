function renderBannerUI(){
    try{
        let banners = this.getBanners() || [];
        console.log("hithtithhtithi hereer 1111111")
        const {
            banner = {}
        } = this.options;
        this.bannerWrapper.innerHTML = this.options.banner.template(banners, banner); 
    }
    catch (err) {
        this.onError("Banners > renderBannerUI",err)
    }

}
export default renderBannerUI;
