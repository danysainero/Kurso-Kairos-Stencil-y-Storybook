import { r as registerInstance, h } from './index-4a07ca59.js';

const postDetailCommentsCss = ".card__footer{color:whitesmoke}.card__footer__comment{background:#232222;border-radius:4px;margin:10px 0;padding:0 0 25px 15px;text-align:right}.card__footer__comment__autor{font-size:0.8rem;padding:10px}.card__footer__comment__text{font-size:0.9rem;text-align:left}.card__footer__count{color:rgb(38, 38, 38)}";

class PostDetailComments {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.comments = [];
    }
    componentDidLoad() {
        this.commentDate = new Date(this.comments['createdAt']).toISOString().slice(0, 10);
    }
    render() {
        return (h("div", { class: "card__footer" }, h("div", { class: "card__footer__comment" }, h("p", { class: "card__footer__comment__autor" }, this.comments['commentAuthorName'], " / ", this.commentDate), h("p", { class: "card__footer__comment__text" }, this.comments['commentContent']))));
    }
}
PostDetailComments.style = postDetailCommentsCss;

export { PostDetailComments as post_detail_comments };
