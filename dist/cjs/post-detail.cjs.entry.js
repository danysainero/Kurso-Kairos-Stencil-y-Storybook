'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3a7cc3ce.js');

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

exports.post_detail = PostDetail;
