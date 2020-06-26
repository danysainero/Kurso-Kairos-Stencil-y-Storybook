System.register(['./index-d207fafd.system.js', './app-globals-497eb362.system.js'], function () {
    'use strict';
    var patchBrowser, bootstrapLazy, globalScripts;
    return {
        setters: [function (module) {
                patchBrowser = module.p;
                bootstrapLazy = module.b;
            }, function (module) {
                globalScripts = module.g;
            }],
        execute: function () {
            patchBrowser().then(function (options) {
                globalScripts();
                return bootstrapLazy([["grid-layout.system", [[1, "grid-layout"]]], ["home-layout.system", [[1, "home-layout"]]], ["my-component.system", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]], ["post-detail.system", [[1, "post-detail", { "post": [16] }]]], ["post-detail-comments.system", [[1, "post-detail-comments", { "comments": [16], "commentDate": [1, "comment-date"] }]]]], options);
            });
        }
    };
});
