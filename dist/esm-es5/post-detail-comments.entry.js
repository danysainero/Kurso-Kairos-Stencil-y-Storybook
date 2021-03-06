import { r as registerInstance, h } from './index-878033eb.js';
var postDetailCommentsCss = ".card__footer{color:whitesmoke}.card__footer__comment{background:#232222;border-radius:4px;margin:10px 0;padding:0 0 25px 15px;text-align:right}.card__footer__comment__autor{font-size:0.8rem;padding:10px}.card__footer__comment__text{font-size:0.9rem;text-align:left}.card__footer__count{color:rgb(38, 38, 38)}";
var PostDetailComments = /** @class */ (function () {
    function PostDetailComments(hostRef) {
        registerInstance(this, hostRef);
        this.comments = [];
    }
    PostDetailComments.prototype.componentDidLoad = function () {
        this.commentDate = new Date(this.comments['createdAt']).toISOString().slice(0, 10);
    };
    PostDetailComments.prototype.render = function () {
        return (h("div", { class: "card__footer" }, h("div", { class: "card__footer__comment" }, h("p", { class: "card__footer__comment__autor" }, this.comments['commentAuthorName'], " / ", this.commentDate), h("p", { class: "card__footer__comment__text" }, this.comments['commentContent']))));
    };
    return PostDetailComments;
}());
PostDetailComments.style = postDetailCommentsCss;
export { PostDetailComments as post_detail_comments };
