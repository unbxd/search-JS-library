import { events } from "../../common/constants";

function renderBannerUI(wrapper) {
    try {
        let banners = this.getBanners() || [];
        const {
            banner = {}
        } = this.options;
        wrapper.innerHTML = this.options.banner.template(banners, banner);
    }
    catch (err) {
        this.onError("Banners > renderBannerUI", err, events.runtimeError)
    }

}
export default renderBannerUI;
