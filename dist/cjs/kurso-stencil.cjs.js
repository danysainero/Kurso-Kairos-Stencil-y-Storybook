'use strict';

const index = require('./index-3a7cc3ce.js');
const appGlobals = require('./app-globals-3a1e7e63.js');

index.patchBrowser().then(options => {
  appGlobals.globalScripts();
  return index.bootstrapLazy([["grid-layout.cjs",[[1,"grid-layout"]]],["home-layout.cjs",[[1,"home-layout"]]],["my-component.cjs",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["post-detail.cjs",[[1,"post-detail",{"post":[16]}]]],["post-detail-comments.cjs",[[1,"post-detail-comments",{"comments":[16],"commentDate":[1,"comment-date"]}]]]], options);
});
