import { p as patchBrowser, b as bootstrapLazy } from './index-6f837f2b.js';
import { g as globalScripts } from './app-globals-0f993ce5.js';

patchBrowser().then(options => {
  globalScripts();
  return bootstrapLazy([["grid-layout",[[1,"grid-layout"]]],["home-layout",[[1,"home-layout"]]],["my-component",[[1,"my-component",{"first":[1],"middle":[1],"last":[1]}]]],["post-detail",[[1,"post-detail",{"post":[16]}]]],["post-detail-comments",[[1,"post-detail-comments",{"comments":[16],"commentDate":[1,"comment-date"]}]]]], options);
});
