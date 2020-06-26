System.register(['./index-d207fafd.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            var homeLayoutCss = "main{color:gainsboro;margin:0 auto;min-height:100vh;display:grid;grid-template-columns:100%;grid-template-rows:1fr 200px;grid-template-areas:\"my-section my-section my-section\"\n    \"my-footer my-footer my-footer\"}section{grid-area:my-section;background-color:white}footer{grid-area:my-footer;background-color:rgb(14, 13, 13)}@media (max-width: 600px){main{grid-template-columns:1fr 100px;grid-template-rows:1fr 50px;grid-template-areas:\"my-section my-section my-section\"\n      \"my-footer my-footer my-footer\"}}@media (min-width: 600px) and (max-width: 1000px){main{grid-template-columns:1fr 200px;grid-template-rows:1fr 50px;grid-template-areas:\"my-section my-section my-section\"\n      \"my-footer my-footer my-footer\"}}@media (min-width: 1001px){main{grid-template-columns:1fr 75px;grid-template-rows:1fr\n      75px;grid-template-areas:\"my-section my-section my-section\"\n      \"my-footer my-footer my-footer\"}}";
            var HomeLayout = /** @class */ (function () {
                function HomeLayout(hostRef) {
                    registerInstance(this, hostRef);
                }
                HomeLayout.prototype.render = function () {
                    return (h("main", null, h("header", null, h("slot", { name: "header" })), h("section", null, h("slot", { name: "section" })), h("footer", null, h("slot", { name: "footer" }))));
                };
                return HomeLayout;
            }());
            exports('home_layout', HomeLayout);
            HomeLayout.style = homeLayoutCss;
        }
    };
});
