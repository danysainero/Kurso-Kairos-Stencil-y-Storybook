import { Component, h, Prop } from '@stencil/core';
export class PostDetailComments {
    constructor() {
        this.comments = [];
    }
    componentDidLoad() {
        this.commentDate = new Date(this.comments['createdAt']).toISOString().slice(0, 10);
    }
    render() {
        return (h("div", { class: "card__footer" },
            h("div", { class: "card__footer__comment" },
                h("p", { class: "card__footer__comment__autor" },
                    this.comments['commentAuthorName'],
                    " / ",
                    this.commentDate),
                h("p", { class: "card__footer__comment__text" }, this.comments['commentContent']))));
    }
    static get is() { return "post-detail-comments"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["post-detail-comments.css"]
    }; }
    static get styleUrls() { return {
        "$": ["post-detail-comments.css"]
    }; }
    static get properties() { return {
        "comments": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Object[]",
                "resolved": "Object[]",
                "references": {
                    "Object": {
                        "location": "global"
                    }
                }
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "defaultValue": "[]"
        },
        "commentDate": {
            "type": "string",
            "mutable": false,
            "complexType": {
                "original": "string",
                "resolved": "string",
                "references": {}
            },
            "required": false,
            "optional": false,
            "docs": {
                "tags": [],
                "text": ""
            },
            "attribute": "comment-date",
            "reflect": false
        }
    }; }
}
