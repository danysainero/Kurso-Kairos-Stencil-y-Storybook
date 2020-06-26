import { Component, h } from "@stencil/core";
export class GridLayout {
    render() {
        return (h("main", null,
            h("header", null,
                h("slot", { name: "header" })),
            h("nav", null,
                h("slot", { name: "nav" })),
            h("section", null,
                h("slot", { name: "section" })),
            h("aside", null,
                h("slot", { name: "aside" })),
            h("footer", null,
                h("slot", { name: "footer" }))));
    }
    static get is() { return "grid-layout"; }
    static get encapsulation() { return "shadow"; }
    static get originalStyleUrls() { return {
        "$": ["grid-layout.css"]
    }; }
    static get styleUrls() { return {
        "$": ["grid-layout.css"]
    }; }
}
