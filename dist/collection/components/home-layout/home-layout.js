import { Component, h } from "@stencil/core";
export class HomeLayout {
    render() {
        return (h("main", null,
            h("header", null,
                h("slot", { name: "header" })),
            h("section", null,
                h("slot", { name: "section" })),
            h("footer", null,
                h("slot", { name: "footer" }))));
    }
    static get is() { return "home-layout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["home-layout.css"]
    }; }
    static get styleUrls() { return {
        "$": ["home-layout.css"]
    }; }
}
