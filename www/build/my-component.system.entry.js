System.register(['./index-d207fafd.system.js'], function (exports) {
    'use strict';
    var registerInstance, h;
    return {
        setters: [function (module) {
                registerInstance = module.r;
                h = module.h;
            }],
        execute: function () {
            function format(first, middle, last) {
                return ((first || '') +
                    (middle ? " " + middle : '') +
                    (last ? " " + last : ''));
            }
            var myComponentCss = ":host{display:block}";
            var MyComponent = /** @class */ (function () {
                function MyComponent(hostRef) {
                    registerInstance(this, hostRef);
                }
                MyComponent.prototype.getText = function () {
                    return format(this.first, this.middle, this.last);
                };
                MyComponent.prototype.render = function () {
                    return h("div", null, "Hello, World! I'm ", this.getText());
                };
                return MyComponent;
            }());
            exports('my_component', MyComponent);
            MyComponent.style = myComponentCss;
        }
    };
});
