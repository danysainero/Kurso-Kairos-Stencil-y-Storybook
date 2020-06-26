System.register(['./index-d207fafd.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
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
            exports('post_detail', PostDetail);
            PostDetail.style = postDetailCss;
        }
    };
});
