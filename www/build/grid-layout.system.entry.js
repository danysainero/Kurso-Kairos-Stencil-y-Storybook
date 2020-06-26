System.register(['./index-d207fafd.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var gridLayoutCss = "main{color:gainsboro;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:100%;grid-template-rows:100px\n    50px 1fr 100px 200px;grid-template-areas:\"my-header my-header my-header\"\n    \"my-nav my-nav my-nav\"\n    \"my-section my-section my-section\" \n    \"my-aside my-aside my-aside\" \n    \"my-footer my-footer my-footer\"}header{grid-area:my-header;background-color:blueviolet}nav{grid-area:my-nav;background-color:cornflowerblue}aside{grid-area:my-aside;background-color:darkmagenta}section{grid-area:my-section;background-color:indigo}footer{grid-area:my-footer;background-color:darkorchid}@media (min-width: 600px) and (max-width: 1000px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:150px\n      100px 1fr 100px;grid-template-areas:\"my-header my-header my-header\" \n      \"my-nav my-nav my-nav\"\n      \"my-aside my-section my-section\" \n      \"my-footer my-footer my-footer\"}}@media (min-width: 1001px){main{grid-template-columns:200px 1fr 200px;grid-template-rows:200px\n      1fr\n      100px;grid-template-areas:\"my-header my-header my-header\" \n    \"my-nav my-section my-aside\" \n    \"my-footer my-footer my-footer\"}}";
            var GridLayout = /** @class */ (function () {
                function GridLayout(hostRef) {
                    registerInstance(this, hostRef);
                }
                GridLayout.prototype.render = function () {
                    return (h("main", null, h("header", null, h("slot", { name: "header" })), h("nav", null, h("slot", { name: "nav" })), h("section", null, h("slot", { name: "section" })), h("aside", null, h("slot", { name: "aside" })), h("footer", null, h("slot", { name: "footer" }))));
                };
                return GridLayout;
            }());
            exports('grid_layout', GridLayout);
            GridLayout.style = gridLayoutCss;
        }
    };
});
