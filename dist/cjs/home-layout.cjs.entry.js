'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

const index = require('./index-3a7cc3ce.js');

const homeLayoutCss = "main{color:gainsboro;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:100%;grid-template-rows:1fr 200px;grid-template-areas:\"my-section my-section my-section\"\n    \"my-footer my-footer my-footer\"}section{grid-area:my-section;background-color:white}footer{grid-area:my-footer;background-color:rgb(14, 13, 13)}@media (max-width: 600px){main{grid-template-columns:1fr 100px;grid-template-rows:1fr 50px;grid-template-areas:\"my-section my-section my-section\"\n      \"my-footer my-footer my-footer\"}}@media (min-width: 600px) and (max-width: 1000px){main{grid-template-columns:1fr 200px;grid-template-rows:1fr 50px;grid-template-areas:\"my-section my-section my-section\"\n      \"my-footer my-footer my-footer\"}}@media (min-width: 1001px){main{grid-template-columns:1fr 75px;grid-template-rows:1fr\n      75px;grid-template-areas:\"my-section my-section my-section\"\n      \"my-footer my-footer my-footer\"}}";

class HomeLayout {
    constructor(hostRef) {
        index.registerInstance(this, hostRef);
    }
    render() {
        return (index.h("main", null, index.h("header", null, index.h("slot", { name: "header" })), index.h("section", null, index.h("slot", { name: "section" })), index.h("footer", null, index.h("slot", { name: "footer" }))));
    }
}
HomeLayout.style = homeLayoutCss;

exports.home_layout = HomeLayout;
