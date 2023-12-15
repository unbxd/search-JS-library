export default function()  {
    // const {
    //     htmlAttributes = {

    // },
    //     events
    // } = this.options.visualSearch;
    //adding con fig of visual search to option --triage 2
    const attributes = { class: "ImageboxWrapper" ,id: "image-box"}
    return this.createElement(
        "IMG",
        Object.assign({},attributes),
        {},
        this
    );
};
