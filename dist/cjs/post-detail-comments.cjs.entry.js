'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3a7cc3ce.js');

const postDetailCommentsCss = ".card__footer{color:whitesmoke}.card__footer__comment{background:#232222;border-radius:4px;margin:10px 0;padding:0 0 25px 15px;text-align:right}.card__footer__comment__autor{font-size:0.8rem;padding:10px}.card__footer__comment__text{font-size:0.9rem;text-align:left}.card__footer__count{color:rgb(38, 38, 38)}";

class PostDetailComments {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
        this.comments = [];
    }
    componentDidLoad() {
        this.commentDate = new Date(this.comments['createdAt']).toISOString().slice(0, 10);
    }
    render() {
        return (index.h("div", { class: "card__footer" }, index.h("div", { class: "card__footer__comment" }, index.h("p", { class: "card__footer__comment__autor" }, this.comments['commentAuthorName'], " / ", this.commentDate), index.h("p", { class: "card__footer__comment__text" }, this.comments['commentContent']))));
    }
}
PostDetailComments.style = postDetailCommentsCss;

exports.post_detail_comments = PostDetailComments;
