'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-14be8992.js');

const gridLayoutCss = "main{color:gainsboro;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:100%;grid-template-rows:100px\n    50px 1fr 100px 200px;grid-template-areas:\"my-header my-header my-header\"\n    \"my-nav my-nav my-nav\"\n    \"my-section my-section my-section\" \n    \"my-aside my-aside my-aside\" \n    \"my-footer my-footer my-footer\"}header{grid-area:my-header;background-color:blueviolet}nav{grid-area:my-nav;background-color:cornflowerblue}aside{grid-area:my-aside;background-color:darkmagenta}section{grid-area:my-section;background-color:indigo}footer{grid-area:my-footer;background-color:darkorchid}@media (min-width: 600px) and (max-width: 1000px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:150px\n      100px 1fr 100px;grid-template-areas:\"my-header my-header my-header\" \n      \"my-nav my-nav my-nav\"\n      \"my-aside my-section my-section\" \n      \"my-footer my-footer my-footer\"}}@media (min-width: 1001px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:200px\n      1fr\n      100px;grid-template-areas:\"my-header my-header my-header\" \n    \"my-nav my-section my-aside\" \n    \"my-footer my-footer my-footer\"}}";

class GridLayout {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("main", null, index.h("header", null, index.h("slot", { name: "header" })), index.h("nav", null, index.h("slot", { name: "nav" })), index.h("section", null, index.h("slot", { name: "section" })), index.h("aside", null, index.h("slot", { name: "aside" })), index.h("footer", null, index.h("slot", { name: "footer" }))));
    }
}
GridLayout.style = gridLayoutCss;

const postDetailCss = ".card{padding:25px 50px 15px 50px;margin-bottom:20px}.card__header{text-align:right}.card__header__info{color:rgb(33, 33, 33)}.card__body{display:-ms-flexbox;display:flex;padding:15px}.card__body__img{width:auto}.card__body__img__detail{max-height:65vh}.card__body__title{-ms-flex-align:center;align-items:center;color:black;display:-ms-flexbox;display:flex;font-size:2.3rem;font-weight:500;line-height:1.2;margin-right:5px;text-align:left;text-transform:uppercase;width:30%}.card__body__text{width:40%;-ms-flex-align:center;align-items:center;color:black;display:-ms-flexbox;display:flex;font-size:1.2rem;padding:0 0 0 40px;line-height:1.4}.card__footer{color:whitesmoke}";

class PostDetail {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.post = {};
    }
    render() {
        return (index.h("div", { class: "card" }, index.h("div", { class: "card__header" }, index.h("p", { class: "card__header__info" }, "Autor: ", this.post["postAuthorName"])), index.h("div", { class: "card__body" }, index.h("p", { class: "card__body__title" }, this.post["postTitle"]), index.h("div", { class: "card__body__img" }, index.h("slot", { name: "card-img" })), index.h("p", { class: "card__body__text" }, this.post["postContent"])), index.h("div", { class: "card__footer" })));
    }
}
PostDetail.style = postDetailCss;

exports.grid_layout = GridLayout;
exports.post_detail = PostDetail;
