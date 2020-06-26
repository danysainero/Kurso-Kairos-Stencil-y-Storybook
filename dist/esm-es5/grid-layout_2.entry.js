import { r as registerInstance, h } from './index-878033eb.js';
var gridLayoutCss = "main{color:gainsboro;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:100%;grid-template-rows:100px\n    50px 1fr 100px 200px;grid-template-areas:\"my-header my-header my-header\"\n    \"my-nav my-nav my-nav\"\n    \"my-section my-section my-section\" \n    \"my-aside my-aside my-aside\" \n    \"my-footer my-footer my-footer\"}header{grid-area:my-header;background-color:blueviolet}nav{grid-area:my-nav;background-color:cornflowerblue}aside{grid-area:my-aside;background-color:darkmagenta}section{grid-area:my-section;background-color:indigo}footer{grid-area:my-footer;background-color:darkorchid}@media (min-width: 600px) and (max-width: 1000px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:150px\n      100px 1fr 100px;grid-template-areas:\"my-header my-header my-header\" \n      \"my-nav my-nav my-nav\"\n      \"my-aside my-section my-section\" \n      \"my-footer my-footer my-footer\"}}@media (min-width: 1001px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:200px\n      1fr\n      100px;grid-template-areas:\"my-header my-header my-header\" \n    \"my-nav my-section my-aside\" \n    \"my-footer my-footer my-footer\"}}";
var GridLayout = /** @class */ (function () {
    function GridLayout(hostRef) {
        registerInstance(this, hostRef);
    }
    GridLayout.prototype.render = function () {
        return (h("main", null, h("header", null, h("slot", { name: "header" })), h("nav", null, h("slot", { name: "nav" })), h("section", null, h("slot", { name: "section" })), h("aside", null, h("slot", { name: "aside" })), h("footer", null, h("slot", { name: "footer" }))));
    };
    return GridLayout;
}());
GridLayout.style = gridLayoutCss;
var postDetailCss = ".card{padding:25px 50px 15px 50px;margin-bottom:20px}.card__header{text-align:right}.card__header__info{color:rgb(33, 33, 33)}.card__body{display:-ms-flexbox;display:flex;padding:15px}.card__body__img{width:auto}.card__body__img__detail{max-height:65vh}.card__body__title{-ms-flex-align:center;align-items:center;color:black;display:-ms-flexbox;display:flex;font-size:2.3rem;font-weight:500;line-height:1.2;margin-right:5px;text-align:left;text-transform:uppercase;width:30%}.card__body__text{width:40%;-ms-flex-align:center;align-items:center;color:black;display:-ms-flexbox;display:flex;font-size:1.2rem;padding:0 0 0 40px;line-height:1.4}.card__footer{color:whitesmoke}";
var PostDetail = /** @class */ (function () {
    function PostDetail(hostRef) {
        registerInstance(this, hostRef);
        this.post = {};
    }
    PostDetail.prototype.render = function () {
        return (h("div", { class: "card" }, h("div", { class: "card__header" }, h("p", { class: "card__header__info" }, "Autor: ", this.post["postAuthorName"])), h("div", { class: "card__body" }, h("p", { class: "card__body__title" }, this.post["postTitle"]), h("div", { class: "card__body__img" }, h("slot", { name: "card-img" })), h("p", { class: "card__body__text" }, this.post["postContent"])), h("div", { class: "card__footer" })));
    };
    return PostDetail;
}());
PostDetail.style = postDetailCss;
export { GridLayout as grid_layout, PostDetail as post_detail };
