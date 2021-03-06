import { a as patchEsm, b as bootstrapLazy } from './index-878033eb.js';
var defineCustomElements = function (win, options) {
    if (typeof window === 'undefined')
        return Promise.resolve();
    return patchEsm().then(function () {
        return bootstrapLazy([["grid-layout_2", [[1, "grid-layout"], [1, "post-detail", { "post": [16] }]]], ["home-layout", [[1, "home-layout"]]], ["my-component", [[1, "my-component", { "first": [1], "middle": [1], "last": [1] }]]], ["post-detail-comments", [[1, "post-detail-comments", { "comments": [16], "commentDate": [1, "comment-date"] }]]]], options);
    });
};
export { defineCustomElements };
