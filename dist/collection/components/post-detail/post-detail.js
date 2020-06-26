import { Component, h, Prop } from "@stencil/core";
export class PostDetail {
    constructor() {
        this.post = {};
    }
    render() {
        return (h("div", { class: "card" },
            h("div", { class: "card__header" },
                h("p", { class: "card__header__info" },
                    "Autor: ",
                    this.post["postAuthorName"])),
            h("div", { class: "card__body" },
                h("p", { class: "card__body__title" }, this.post["postTitle"]),
                h("div", { class: "card__body__img" },
                    h("slot", { name: "card-img" })),
                h("p", { class: "card__body__text" }, this.post["postContent"])),
            h("div", { class: "card__footer" })));
    }
    static get is() { return "post-detail"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["post-detail.css"]
    }; }
    static get styleUrls() { return {
        "$": ["post-detail.css"]
    }; }
    static get properties() { return {
        "post": {
            "type": "unknown",
            "mutable": false,
            "complexType": {
                "original": "Object",
                "resolved": "Object",
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
            "defaultValue": "{}"
        }
    }; }
}
