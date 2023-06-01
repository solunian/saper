// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"2UeK4":[function(require,module,exports) {
var global = arguments[3];
var HMR_HOST = null;
var HMR_PORT = null;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "0a8ecb283d214d75";
"use strict";
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser, __parcel__import__, __parcel__importScripts__, ServiceWorkerGlobalScope */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: {|[string]: mixed|};
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
    getURL(url: string): string;
    getManifest(): {manifest_version: number, ...};
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
declare var __parcel__import__: (string) => Promise<void>;
declare var __parcel__importScripts__: (string) => Promise<void>;
declare var globalThis: typeof self;
declare var ServiceWorkerGlobalScope: Object;
*/ var OVERLAY_ID = "__parcel__error__overlay__";
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData[moduleName],
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData[moduleName] = undefined;
}
module.bundle.Module = Module;
module.bundle.hotData = {};
var checkedAssets /*: {|[string]: boolean|} */ , assetsToDispose /*: Array<[ParcelRequire, string]> */ , assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf("http") === 0 ? location.hostname : "localhost");
}
function getPort() {
    return HMR_PORT || location.port;
}
// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== "undefined") {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == "https:" && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? "wss" : "ws";
    var ws = new WebSocket(protocol + "://" + hostname + (port ? ":" + port : "") + "/");
    // Web extension context
    var extCtx = typeof chrome === "undefined" ? typeof browser === "undefined" ? null : browser : chrome;
    // Safari doesn't support sourceURL in error stacks.
    // eval may also be disabled via CSP, so do a quick check.
    var supportsSourceURL = false;
    try {
        (0, eval)('throw new Error("test"); //# sourceURL=test.js');
    } catch (err) {
        supportsSourceURL = err.stack.includes("test.js");
    }
    // $FlowFixMe
    ws.onmessage = async function(event /*: {data: string, ...} */ ) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        assetsToDispose = [];
        var data /*: HMRMessage */  = JSON.parse(event.data);
        if (data.type === "update") {
            // Remove error overlay if there is one
            if (typeof document !== "undefined") removeErrorOverlay();
            let assets = data.assets.filter((asset)=>asset.envHash === HMR_ENV_HASH);
            // Handle HMR Update
            let handled = assets.every((asset)=>{
                return asset.type === "css" || asset.type === "js" && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                // Dispatch custom event so other runtimes (e.g React Refresh) are aware.
                if (typeof window !== "undefined" && typeof CustomEvent !== "undefined") window.dispatchEvent(new CustomEvent("parcelhmraccept"));
                await hmrApplyUpdates(assets);
                // Dispose all old assets.
                let processedAssets = {} /*: {|[string]: boolean|} */ ;
                for(let i = 0; i < assetsToDispose.length; i++){
                    let id = assetsToDispose[i][1];
                    if (!processedAssets[id]) {
                        hmrDispose(assetsToDispose[i][0], id);
                        processedAssets[id] = true;
                    }
                }
                // Run accept callbacks. This will also re-execute other disposed assets in topological order.
                processedAssets = {};
                for(let i = 0; i < assetsToAccept.length; i++){
                    let id = assetsToAccept[i][1];
                    if (!processedAssets[id]) {
                        hmrAccept(assetsToAccept[i][0], id);
                        processedAssets[id] = true;
                    }
                }
            } else fullReload();
        }
        if (data.type === "error") {
            // Log parcel errors to console
            for (let ansiDiagnostic of data.diagnostics.ansi){
                let stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                console.error("\uD83D\uDEA8 [parcel]: " + ansiDiagnostic.message + "\n" + stack + "\n\n" + ansiDiagnostic.hints.join("\n"));
            }
            if (typeof document !== "undefined") {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html);
                // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn("[parcel] \uD83D\uDEA8 Connection to the HMR server was lost");
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log("[parcel] ✨ Error resolved");
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement("div");
    overlay.id = OVERLAY_ID;
    let errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    for (let diagnostic of diagnostics){
        let stack = diagnostic.frames.length ? diagnostic.frames.reduce((p, frame)=>{
            return `${p}
<a href="/__parcel_launch_editor?file=${encodeURIComponent(frame.location)}" style="text-decoration: underline; color: #888" onclick="fetch(this.href); return false">${frame.location}</a>
${frame.code}`;
        }, "") : diagnostic.stack;
        errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>${stack}</pre>
        <div>
          ${diagnostic.hints.map((hint)=>"<div>\uD83D\uDCA1 " + hint + "</div>").join("")}
        </div>
        ${diagnostic.documentation ? `<div>📝 <a style="color: violet" href="${diagnostic.documentation}" target="_blank">Learn more</a></div>` : ""}
      </div>
    `;
    }
    errorHTML += "</div>";
    overlay.innerHTML = errorHTML;
    return overlay;
}
function fullReload() {
    if ("reload" in location) location.reload();
    else if (extCtx && extCtx.runtime && extCtx.runtime.reload) extCtx.runtime.reload();
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var href = link.getAttribute("href");
    if (!href) return;
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute("href", // $FlowFixMe
    href.split("?")[0] + "?" + Date.now());
    // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href /*: string */  = links[i].getAttribute("href");
            var hostname = getHostname();
            var servedFromHMRServer = hostname === "localhost" ? new RegExp("^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):" + getPort()).test(href) : href.indexOf(hostname + ":" + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrDownload(asset) {
    if (asset.type === "js") {
        if (typeof document !== "undefined") {
            let script = document.createElement("script");
            script.src = asset.url + "?t=" + Date.now();
            if (asset.outputFormat === "esmodule") script.type = "module";
            return new Promise((resolve, reject)=>{
                var _document$head;
                script.onload = ()=>resolve(script);
                script.onerror = reject;
                (_document$head = document.head) === null || _document$head === void 0 || _document$head.appendChild(script);
            });
        } else if (typeof importScripts === "function") {
            // Worker scripts
            if (asset.outputFormat === "esmodule") return import(asset.url + "?t=" + Date.now());
            else return new Promise((resolve, reject)=>{
                try {
                    importScripts(asset.url + "?t=" + Date.now());
                    resolve();
                } catch (err) {
                    reject(err);
                }
            });
        }
    }
}
async function hmrApplyUpdates(assets) {
    global.parcelHotUpdate = Object.create(null);
    let scriptsToRemove;
    try {
        // If sourceURL comments aren't supported in eval, we need to load
        // the update from the dev server over HTTP so that stack traces
        // are correct in errors/logs. This is much slower than eval, so
        // we only do it if needed (currently just Safari).
        // https://bugs.webkit.org/show_bug.cgi?id=137297
        // This path is also taken if a CSP disallows eval.
        if (!supportsSourceURL) {
            let promises = assets.map((asset)=>{
                var _hmrDownload;
                return (_hmrDownload = hmrDownload(asset)) === null || _hmrDownload === void 0 ? void 0 : _hmrDownload.catch((err)=>{
                    // Web extension bugfix for Chromium
                    // https://bugs.chromium.org/p/chromium/issues/detail?id=1255412#c12
                    if (extCtx && extCtx.runtime && extCtx.runtime.getManifest().manifest_version == 3) {
                        if (typeof ServiceWorkerGlobalScope != "undefined" && global instanceof ServiceWorkerGlobalScope) {
                            extCtx.runtime.reload();
                            return;
                        }
                        asset.url = extCtx.runtime.getURL("/__parcel_hmr_proxy__?url=" + encodeURIComponent(asset.url + "?t=" + Date.now()));
                        return hmrDownload(asset);
                    }
                    throw err;
                });
            });
            scriptsToRemove = await Promise.all(promises);
        }
        assets.forEach(function(asset) {
            hmrApply(module.bundle.root, asset);
        });
    } finally{
        delete global.parcelHotUpdate;
        if (scriptsToRemove) scriptsToRemove.forEach((script)=>{
            if (script) {
                var _document$head2;
                (_document$head2 = document.head) === null || _document$head2 === void 0 || _document$head2.removeChild(script);
            }
        });
    }
}
function hmrApply(bundle /*: ParcelRequire */ , asset /*:  HMRAsset */ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === "css") reloadCSS();
    else if (asset.type === "js") {
        let deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                let oldDeps = modules[asset.id][1];
                for(let dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    let id = oldDeps[dep];
                    let parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            if (supportsSourceURL) // Global eval. We would use `new Function` here but browser
            // support for source maps is better with eval.
            (0, eval)(asset.output);
            // $FlowFixMe
            let fn = global.parcelHotUpdate[asset.id];
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id) {
    let modules = bundle.modules;
    if (!modules) return;
    if (modules[id]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        let deps = modules[id][1];
        let orphans = [];
        for(let dep in deps){
            let parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        }
        // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id];
        delete bundle.cache[id];
        // Now delete the orphans.
        orphans.forEach((id)=>{
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id);
}
function hmrAcceptCheck(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
    // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    let parents = getParents(module.bundle.root, id);
    let accepted = false;
    while(parents.length > 0){
        let v = parents.shift();
        let a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            let p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push(...p);
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle /*: ParcelRequire */ , id /*: string */ , depsByBundle /*: ?{ [string]: { [string]: string } }*/ ) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToDispose.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) {
        assetsToAccept.push([
            bundle,
            id
        ]);
        return true;
    }
}
function hmrDispose(bundle /*: ParcelRequire */ , id /*: string */ ) {
    var cached = bundle.cache[id];
    bundle.hotData[id] = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData[id];
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData[id]);
    });
    delete bundle.cache[id];
}
function hmrAccept(bundle /*: ParcelRequire */ , id /*: string */ ) {
    // Execute the module.
    bundle(id);
    // Run the accept callbacks in the new version of the module.
    var cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) {
            assetsToAlsoAccept.forEach(function(a) {
                hmrDispose(a[0], a[1]);
            });
            // $FlowFixMe[method-unbinding]
            assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
        }
    });
}

},{}],"bB7Pu":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _revealJs = require("reveal.js");
var _revealJsDefault = parcelHelpers.interopDefault(_revealJs);
(0, _revealJsDefault.default).initialize({
    // The "normal" size of the presentation, aspect ratio will
    // be preserved when the presentation is scaled to fit different
    // resolutions. Can be specified using percentage units.
    width: "100%",
    height: "100%",
    // Factor of the display size that should remain empty around
    // the content
    margin: 0.04,
    // Bounds for smallest/largest possible scale to apply to content
    minScale: 0.2,
    maxScale: 2.0,
    // Display presentation control arrows
    controls: false,
    // Help the user learn the controls by providing hints, for example by
    // bouncing the down arrow when they first encounter a vertical slide
    controlsTutorial: true,
    // Determines where controls appear, "edges" or "bottom-right"
    controlsLayout: "bottom-right",
    // Visibility rule for backwards navigation arrows; "faded", "hidden"
    // or "visible"
    controlsBackArrows: "faded",
    // Display a presentation progress bar
    progress: false,
    // Display the page number of the current slide
    // - true:    Show slide number
    // - false:   Hide slide number
    //
    // Can optionally be set as a string that specifies the number formatting:
    // - "h.v":   Horizontal . vertical slide number (default)
    // - "h/v":   Horizontal / vertical slide number
    // - "c":   Flattened slide number
    // - "c/t":   Flattened slide number / total slides
    //
    // Alternatively, you can provide a function that returns the slide
    // number for the current slide. The function should take in a slide
    // object and return an array with one string [slideNumber] or
    // three strings [n1,delimiter,n2]. See #formatSlideNumber().
    slideNumber: false,
    // Can be used to limit the contexts in which the slide number appears
    // - "all":      Always show the slide number
    // - "print":    Only when printing to PDF
    // - "speaker":  Only in the speaker view
    showSlideNumber: "all",
    // Use 1 based indexing for # links to match slide number (default is zero
    // based)
    hashOneBasedIndex: false,
    // Add the current slide number to the URL hash so that reloading the
    // page/copying the URL will return you to the same slide
    hash: false,
    // Flags if we should monitor the hash and change slides accordingly
    respondToHashChanges: false,
    // Push each slide change to the browser history.  Implies `hash: true`
    history: false,
    // Enable keyboard shortcuts for navigation
    keyboard: true,
    // Optional function that blocks keyboard events when retuning false
    //
    // If you set this to 'focused', we will only capture keyboard events
    // for embedded decks when they are in focus
    keyboardCondition: null,
    // Disables the default reveal.js slide layout (scaling and centering)
    // so that you can use custom CSS layout
    disableLayout: false,
    // Enable the slide overview mode
    overview: true,
    // Vertical centering of slides
    center: true,
    // Enables touch navigation on devices with touch input
    touch: true,
    // Loop the presentation
    loop: false,
    // Change the presentation direction to be RTL
    rtl: false,
    // Changes the behavior of our navigation directions.
    //
    // "default"
    // Left/right arrow keys step between horizontal slides, up/down
    // arrow keys step between vertical slides. Space key steps through
    // all slides (both horizontal and vertical).
    //
    // "linear"
    // Removes the up/down arrows. Left/right arrows step through all
    // slides (both horizontal and vertical).
    //
    // "grid"
    // When this is enabled, stepping left/right from a vertical stack
    // to an adjacent vertical stack will land you at the same vertical
    // index.
    //
    // Consider a deck with six slides ordered in two vertical stacks:
    // 1.1    2.1
    // 1.2    2.2
    // 1.3    2.3
    //
    // If you're on slide 1.3 and navigate right, you will normally move
    // from 1.3 -> 2.1. If "grid" is used, the same navigation takes you
    // from 1.3 -> 2.3.
    navigationMode: "default",
    // Randomizes the order of slides each time the presentation loads
    shuffle: false,
    // Turns fragments on and off globally
    fragments: true,
    // Flags whether to include the current fragment in the URL,
    // so that reloading brings you to the same fragment position
    fragmentInURL: true,
    // Flags if the presentation is running in an embedded mode,
    // i.e. contained within a limited portion of the screen
    embedded: false,
    // Flags if we should show a help overlay when the question-mark
    // key is pressed
    help: true,
    // Flags if it should be possible to pause the presentation (blackout)
    pause: true,
    // Flags if speaker notes should be visible to all viewers
    showNotes: false,
    // Global override for autolaying embedded media (video/audio/iframe)
    // - null:   Media will only autoplay if data-autoplay is present
    // - true:   All media will autoplay, regardless of individual setting
    // - false:  No media will autoplay, regardless of individual setting
    autoPlayMedia: null,
    // Global override for preloading lazy-loaded iframes
    // - null:   Iframes with data-src AND data-preload will be loaded when within
    //           the viewDistance, iframes with only data-src will be loaded when visible
    // - true:   All iframes with data-src will be loaded when within the viewDistance
    // - false:  All iframes with data-src will be loaded only when visible
    preloadIframes: null,
    // Can be used to globally disable auto-animation
    autoAnimate: true,
    // Optionally provide a custom element matcher that will be
    // used to dictate which elements we can animate between.
    autoAnimateMatcher: null,
    // Default settings for our auto-animate transitions, can be
    // overridden per-slide or per-element via data arguments
    autoAnimateEasing: "ease",
    autoAnimateDuration: 1.0,
    autoAnimateUnmatched: true,
    // CSS properties that can be auto-animated. Position & scale
    // is matched separately so there's no need to include styles
    // like top/right/bottom/left, width/height or margin.
    autoAnimateStyles: [
        "opacity",
        "color",
        "background-color",
        "padding",
        "font-size",
        "line-height",
        "letter-spacing",
        "border-width",
        "border-color",
        "border-radius",
        "outline",
        "outline-offset"
    ],
    // Controls automatic progression to the next slide
    // - 0:      Auto-sliding only happens if the data-autoslide HTML attribute
    //           is present on the current slide or fragment
    // - 1+:     All slides will progress automatically at the given interval
    // - false:  No auto-sliding, even if data-autoslide is present
    autoSlide: 0,
    // Stop auto-sliding after user input
    autoSlideStoppable: true,
    // Use this method for navigation when auto-sliding (defaults to navigateNext)
    autoSlideMethod: null,
    // Specify the average time in seconds that you think you will spend
    // presenting each slide. This is used to show a pacing timer in the
    // speaker view
    defaultTiming: null,
    // Enable slide navigation via mouse wheel
    mouseWheel: false,
    // Opens links in an iframe preview overlay
    // Add `data-preview-link` and `data-preview-link="false"` to customise each link
    // individually
    previewLinks: false,
    // Exposes the reveal.js API through window.postMessage
    postMessage: true,
    // Dispatches all reveal.js events to the parent window through postMessage
    postMessageEvents: false,
    // Focuses body when page changes visibility to ensure keyboard shortcuts work
    focusBodyOnPageVisibilityChange: true,
    // Transition style
    transition: "none",
    // Transition speed
    transitionSpeed: "default",
    // Transition style for full page slide backgrounds
    backgroundTransition: "none",
    // The maximum number of pages a single slide can expand onto when printing
    // to PDF, unlimited by default
    pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
    // Prints each fragment on a separate slide
    pdfSeparateFragments: true,
    // Offset used to reduce the height of content within exported PDF pages.
    // This exists to account for environment differences based on how you
    // print to PDF. CLI printing options, like phantomjs and wkpdf, can end
    // on precisely the total height of the document whereas in-browser
    // printing has to end one pixel before.
    pdfPageHeightOffset: -1,
    // Number of slides away from the current that are visible
    viewDistance: 3,
    // Number of slides away from the current that are visible on mobile
    // devices. It is advisable to set this to a lower number than
    // viewDistance in order to save resources.
    mobileViewDistance: 2,
    // The display mode that will be used to show slides
    display: "block",
    // Hide cursor if inactive
    hideInactiveCursor: true,
    // Time before the cursor is hidden (in ms)
    hideCursorTime: 5000
});

},{"reveal.js":"1B4nY","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1B4nY":[function(require,module,exports) {
/*!
* reveal.js 4.5.0
* https://revealjs.com
* MIT licensed
*
* Copyright (C) 2011-2023 Hakim El Hattab, https://hakim.se
*/ var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const e = (e, t)=>{
    for(let i in t)e[i] = t[i];
    return e;
}, t = (e, t)=>Array.from(e.querySelectorAll(t)), i = (e, t, i)=>{
    i ? e.classList.add(t) : e.classList.remove(t);
}, n = (e)=>{
    if ("string" == typeof e) {
        if ("null" === e) return null;
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e.match(/^-?[\d\.]+$/)) return parseFloat(e);
    }
    return e;
}, s = (e, t)=>{
    e.style.transform = t;
}, a = (e, t)=>{
    let i = e.matches || e.matchesSelector || e.msMatchesSelector;
    return !(!i || !i.call(e, t));
}, r = (e, t)=>{
    if ("function" == typeof e.closest) return e.closest(t);
    for(; e;){
        if (a(e, t)) return e;
        e = e.parentNode;
    }
    return null;
}, o = (e, t, i, n = "")=>{
    let s = e.querySelectorAll("." + i);
    for(let t = 0; t < s.length; t++){
        let i = s[t];
        if (i.parentNode === e) return i;
    }
    let a = document.createElement(t);
    return a.className = i, a.innerHTML = n, e.appendChild(a), a;
}, l = (e)=>{
    let t = document.createElement("style");
    return t.type = "text/css", e && e.length > 0 && (t.styleSheet ? t.styleSheet.cssText = e : t.appendChild(document.createTextNode(e))), document.head.appendChild(t), t;
}, d = ()=>{
    let e = {};
    location.search.replace(/[A-Z0-9]+?=([\w\.%-]*)/gi, (t)=>{
        e[t.split("=").shift()] = t.split("=").pop();
    });
    for(let t in e){
        let i = e[t];
        e[t] = n(unescape(i));
    }
    return void 0 !== e.dependencies && delete e.dependencies, e;
}, c = (e, t = 0)=>{
    if (e) {
        let i, n = e.style.height;
        return e.style.height = "0px", e.parentNode.style.height = "auto", i = t - e.parentNode.offsetHeight, e.style.height = n + "px", e.parentNode.style.removeProperty("height"), i;
    }
    return t;
}, h = {
    mp4: "video/mp4",
    m4a: "video/mp4",
    ogv: "video/ogg",
    mpeg: "video/mpeg",
    webm: "video/webm"
}, u = navigator.userAgent, g = /(iphone|ipod|ipad|android)/gi.test(u) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1;
/chrome/i.test(u) && /edge/i.test(u);
const v = /android/gi.test(u);
var p = {};
Object.defineProperty(p, "__esModule", {
    value: !0
});
var m = Object.assign || function(e) {
    for(var t = 1; t < arguments.length; t++){
        var i = arguments[t];
        for(var n in i)Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
    }
    return e;
}, f = p.default = function(e) {
    if (e) {
        var t = function(e) {
            return [].slice.call(e);
        }, i = 0, n = 1, s = 2, a = 3, r = [], o = null, l = "requestAnimationFrame" in e ? function() {
            e.cancelAnimationFrame(o), o = e.requestAnimationFrame(function() {
                return c(r.filter(function(e) {
                    return e.dirty && e.active;
                }));
            });
        } : function() {}, d = function(e) {
            return function() {
                r.forEach(function(t) {
                    return t.dirty = e;
                }), l();
            };
        }, c = function(e) {
            e.filter(function(e) {
                return !e.styleComputed;
            }).forEach(function(e) {
                e.styleComputed = v(e);
            }), e.filter(p).forEach(f);
            var t = e.filter(g);
            t.forEach(u), t.forEach(function(e) {
                f(e), h(e);
            }), t.forEach(b);
        }, h = function(e) {
            return e.dirty = i;
        }, u = function(e) {
            e.availableWidth = e.element.parentNode.clientWidth, e.currentWidth = e.element.scrollWidth, e.previousFontSize = e.currentFontSize, e.currentFontSize = Math.min(Math.max(e.minSize, e.availableWidth / e.currentWidth * e.previousFontSize), e.maxSize), e.whiteSpace = e.multiLine && e.currentFontSize === e.minSize ? "normal" : "nowrap";
        }, g = function(e) {
            return e.dirty !== s || e.dirty === s && e.element.parentNode.clientWidth !== e.availableWidth;
        }, v = function(t) {
            var i = e.getComputedStyle(t.element, null);
            t.currentFontSize = parseFloat(i.getPropertyValue("font-size")), t.display = i.getPropertyValue("display"), t.whiteSpace = i.getPropertyValue("white-space");
        }, p = function(e) {
            var t = !1;
            return !e.preStyleTestCompleted && (/inline-/.test(e.display) || (t = !0, e.display = "inline-block"), "nowrap" !== e.whiteSpace && (t = !0, e.whiteSpace = "nowrap"), e.preStyleTestCompleted = !0, t);
        }, f = function(e) {
            e.element.style.whiteSpace = e.whiteSpace, e.element.style.display = e.display, e.element.style.fontSize = e.currentFontSize + "px";
        }, b = function(e) {
            e.element.dispatchEvent(new CustomEvent("fit", {
                detail: {
                    oldValue: e.previousFontSize,
                    newValue: e.currentFontSize,
                    scaleFactor: e.currentFontSize / e.previousFontSize
                }
            }));
        }, y = function(e, t) {
            return function() {
                e.dirty = t, e.active && l();
            };
        }, w = function(e) {
            return function() {
                r = r.filter(function(t) {
                    return t.element !== e.element;
                }), e.observeMutations && e.observer.disconnect(), e.element.style.whiteSpace = e.originalStyle.whiteSpace, e.element.style.display = e.originalStyle.display, e.element.style.fontSize = e.originalStyle.fontSize;
            };
        }, E = function(e) {
            return function() {
                e.active || (e.active = !0, l());
            };
        }, R = function(e) {
            return function() {
                return e.active = !1;
            };
        }, S = function(e) {
            e.observeMutations && (e.observer = new MutationObserver(y(e, n)), e.observer.observe(e.element, e.observeMutations));
        }, A = {
            minSize: 16,
            maxSize: 512,
            multiLine: !0,
            observeMutations: "MutationObserver" in e && {
                subtree: !0,
                childList: !0,
                characterData: !0
            }
        }, k = null, L = function() {
            e.clearTimeout(k), k = e.setTimeout(d(s), P.observeWindowDelay);
        }, C = [
            "resize",
            "orientationchange"
        ];
        return Object.defineProperty(P, "observeWindow", {
            set: function(t) {
                var i = (t ? "add" : "remove") + "EventListener";
                C.forEach(function(t) {
                    e[i](t, L);
                });
            }
        }), P.observeWindow = !0, P.observeWindowDelay = 100, P.fitAll = d(a), P;
    }
    function x(e, t) {
        var i = m({}, A, t), n = e.map(function(e) {
            var t = m({}, i, {
                element: e,
                active: !0
            });
            return function(e) {
                e.originalStyle = {
                    whiteSpace: e.element.style.whiteSpace,
                    display: e.element.style.display,
                    fontSize: e.element.style.fontSize
                }, S(e), e.newbie = !0, e.dirty = !0, r.push(e);
            }(t), {
                element: e,
                fit: y(t, a),
                unfreeze: E(t),
                freeze: R(t),
                unsubscribe: w(t)
            };
        });
        return l(), n;
    }
    function P(e) {
        var i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
        return "string" == typeof e ? x(t(document.querySelectorAll(e)), i) : x([
            e
        ], i)[0];
    }
}("undefined" == typeof window ? null : window);
class b {
    constructor(e){
        this.Reveal = e, this.startEmbeddedIframe = this.startEmbeddedIframe.bind(this);
    }
    shouldPreload(e) {
        let t = this.Reveal.getConfig().preloadIframes;
        return "boolean" != typeof t && (t = e.hasAttribute("data-preload")), t;
    }
    load(e, i = {}) {
        e.style.display = this.Reveal.getConfig().display, t(e, "img[data-src], video[data-src], audio[data-src], iframe[data-src]").forEach((e)=>{
            ("IFRAME" !== e.tagName || this.shouldPreload(e)) && (e.setAttribute("src", e.getAttribute("data-src")), e.setAttribute("data-lazy-loaded", ""), e.removeAttribute("data-src"));
        }), t(e, "video, audio").forEach((e)=>{
            let i = 0;
            t(e, "source[data-src]").forEach((e)=>{
                e.setAttribute("src", e.getAttribute("data-src")), e.removeAttribute("data-src"), e.setAttribute("data-lazy-loaded", ""), i += 1;
            }), g && "VIDEO" === e.tagName && e.setAttribute("playsinline", ""), i > 0 && e.load();
        });
        let n = e.slideBackgroundElement;
        if (n) {
            n.style.display = "block";
            let t = e.slideBackgroundContentElement, s = e.getAttribute("data-background-iframe");
            if (!1 === n.hasAttribute("data-loaded")) {
                n.setAttribute("data-loaded", "true");
                let a = e.getAttribute("data-background-image"), r = e.getAttribute("data-background-video"), o = e.hasAttribute("data-background-video-loop"), l = e.hasAttribute("data-background-video-muted");
                if (a) /^data:/.test(a.trim()) ? t.style.backgroundImage = `url(${a.trim()})` : t.style.backgroundImage = a.split(",").map((e)=>`url(${((e = "")=>encodeURI(e).replace(/%5B/g, "[").replace(/%5D/g, "]").replace(/[!'()*]/g, (e)=>`%${e.charCodeAt(0).toString(16).toUpperCase()}`))(decodeURI(e.trim()))})`).join(",");
                else if (r && !this.Reveal.isSpeakerNotes()) {
                    let e = document.createElement("video");
                    o && e.setAttribute("loop", ""), l && (e.muted = !0), g && (e.muted = !0, e.setAttribute("playsinline", "")), r.split(",").forEach((t)=>{
                        let i = ((e = "")=>h[e.split(".").pop()])(t);
                        e.innerHTML += i ? `<source src="${t}" type="${i}">` : `<source src="${t}">`;
                    }), t.appendChild(e);
                } else if (s && !0 !== i.excludeIframes) {
                    let e = document.createElement("iframe");
                    e.setAttribute("allowfullscreen", ""), e.setAttribute("mozallowfullscreen", ""), e.setAttribute("webkitallowfullscreen", ""), e.setAttribute("allow", "autoplay"), e.setAttribute("data-src", s), e.style.width = "100%", e.style.height = "100%", e.style.maxHeight = "100%", e.style.maxWidth = "100%", t.appendChild(e);
                }
            }
            let a = t.querySelector("iframe[data-src]");
            a && this.shouldPreload(n) && !/autoplay=(1|true|yes)/gi.test(s) && a.getAttribute("src") !== s && a.setAttribute("src", s);
        }
        this.layout(e);
    }
    layout(e) {
        Array.from(e.querySelectorAll(".r-fit-text")).forEach((e)=>{
            f(e, {
                minSize: 24,
                maxSize: .8 * this.Reveal.getConfig().height,
                observeMutations: !1,
                observeWindow: !1
            });
        });
    }
    unload(e) {
        e.style.display = "none";
        let i = this.Reveal.getSlideBackground(e);
        i && (i.style.display = "none", t(i, "iframe[src]").forEach((e)=>{
            e.removeAttribute("src");
        })), t(e, "video[data-lazy-loaded][src], audio[data-lazy-loaded][src], iframe[data-lazy-loaded][src]").forEach((e)=>{
            e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
        }), t(e, "video[data-lazy-loaded] source[src], audio source[src]").forEach((e)=>{
            e.setAttribute("data-src", e.getAttribute("src")), e.removeAttribute("src");
        });
    }
    formatEmbeddedContent() {
        let e = (e, i, n)=>{
            t(this.Reveal.getSlidesElement(), "iframe[" + e + '*="' + i + '"]').forEach((t)=>{
                let i = t.getAttribute(e);
                i && -1 === i.indexOf(n) && t.setAttribute(e, i + (/\?/.test(i) ? "&" : "?") + n);
            });
        };
        e("src", "youtube.com/embed/", "enablejsapi=1"), e("data-src", "youtube.com/embed/", "enablejsapi=1"), e("src", "player.vimeo.com/", "api=1"), e("data-src", "player.vimeo.com/", "api=1");
    }
    startEmbeddedContent(e) {
        e && !this.Reveal.isSpeakerNotes() && (t(e, 'img[src$=".gif"]').forEach((e)=>{
            e.setAttribute("src", e.getAttribute("src"));
        }), t(e, "video, audio").forEach((e)=>{
            if (r(e, ".fragment") && !r(e, ".fragment.visible")) return;
            let t = this.Reveal.getConfig().autoPlayMedia;
            if ("boolean" != typeof t && (t = e.hasAttribute("data-autoplay") || !!r(e, ".slide-background")), t && "function" == typeof e.play) {
                if (e.readyState > 1) this.startEmbeddedMedia({
                    target: e
                });
                else if (g) {
                    let t = e.play();
                    t && "function" == typeof t.catch && !1 === e.controls && t.catch(()=>{
                        e.controls = !0, e.addEventListener("play", ()=>{
                            e.controls = !1;
                        });
                    });
                } else e.removeEventListener("loadeddata", this.startEmbeddedMedia), e.addEventListener("loadeddata", this.startEmbeddedMedia);
            }
        }), t(e, "iframe[src]").forEach((e)=>{
            r(e, ".fragment") && !r(e, ".fragment.visible") || this.startEmbeddedIframe({
                target: e
            });
        }), t(e, "iframe[data-src]").forEach((e)=>{
            r(e, ".fragment") && !r(e, ".fragment.visible") || e.getAttribute("src") !== e.getAttribute("data-src") && (e.removeEventListener("load", this.startEmbeddedIframe), e.addEventListener("load", this.startEmbeddedIframe), e.setAttribute("src", e.getAttribute("data-src")));
        }));
    }
    startEmbeddedMedia(e) {
        let t = !!r(e.target, "html"), i = !!r(e.target, ".present");
        t && i && (e.target.currentTime = 0, e.target.play()), e.target.removeEventListener("loadeddata", this.startEmbeddedMedia);
    }
    startEmbeddedIframe(e) {
        let t = e.target;
        if (t && t.contentWindow) {
            let i = !!r(e.target, "html"), n = !!r(e.target, ".present");
            if (i && n) {
                let e = this.Reveal.getConfig().autoPlayMedia;
                "boolean" != typeof e && (e = t.hasAttribute("data-autoplay") || !!r(t, ".slide-background")), /youtube\.com\/embed\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', "*") : /player\.vimeo\.com\//.test(t.getAttribute("src")) && e ? t.contentWindow.postMessage('{"method":"play"}', "*") : t.contentWindow.postMessage("slide:start", "*");
            }
        }
    }
    stopEmbeddedContent(i, n = {}) {
        n = e({
            unloadIframes: !0
        }, n), i && i.parentNode && (t(i, "video, audio").forEach((e)=>{
            e.hasAttribute("data-ignore") || "function" != typeof e.pause || (e.setAttribute("data-paused-by-reveal", ""), e.pause());
        }), t(i, "iframe").forEach((e)=>{
            e.contentWindow && e.contentWindow.postMessage("slide:stop", "*"), e.removeEventListener("load", this.startEmbeddedIframe);
        }), t(i, 'iframe[src*="youtube.com/embed/"]').forEach((e)=>{
            !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}', "*");
        }), t(i, 'iframe[src*="player.vimeo.com/"]').forEach((e)=>{
            !e.hasAttribute("data-ignore") && e.contentWindow && "function" == typeof e.contentWindow.postMessage && e.contentWindow.postMessage('{"method":"pause"}', "*");
        }), !0 === n.unloadIframes && t(i, "iframe[data-src]").forEach((e)=>{
            e.setAttribute("src", "about:blank"), e.removeAttribute("src");
        }));
    }
}
class y {
    constructor(e){
        this.Reveal = e;
    }
    render() {
        this.element = document.createElement("div"), this.element.className = "slide-number", this.Reveal.getRevealElement().appendChild(this.element);
    }
    configure(e, t) {
        let i = "none";
        e.slideNumber && !this.Reveal.isPrintingPDF() && ("all" === e.showSlideNumber || "speaker" === e.showSlideNumber && this.Reveal.isSpeakerNotes()) && (i = "block"), this.element.style.display = i;
    }
    update() {
        this.Reveal.getConfig().slideNumber && this.element && (this.element.innerHTML = this.getSlideNumber());
    }
    getSlideNumber(e = this.Reveal.getCurrentSlide()) {
        let t, i = this.Reveal.getConfig(), n = "h.v";
        if ("function" == typeof i.slideNumber) t = i.slideNumber(e);
        else {
            "string" == typeof i.slideNumber && (n = i.slideNumber), /c/.test(n) || 1 !== this.Reveal.getHorizontalSlides().length || (n = "c");
            let s = e && "uncounted" === e.dataset.visibility ? 0 : 1;
            switch(t = [], n){
                case "c":
                    t.push(this.Reveal.getSlidePastCount(e) + s);
                    break;
                case "c/t":
                    t.push(this.Reveal.getSlidePastCount(e) + s, "/", this.Reveal.getTotalSlides());
                    break;
                default:
                    let i1 = this.Reveal.getIndices(e);
                    t.push(i1.h + s);
                    let a = "h/v" === n ? "/" : ".";
                    this.Reveal.isVerticalSlide(e) && t.push(a, i1.v + 1);
            }
        }
        let s = "#" + this.Reveal.location.getHash(e);
        return this.formatNumber(t[0], t[1], t[2], s);
    }
    formatNumber(e, t, i, n = "#" + this.Reveal.location.getHash()) {
        return "number" != typeof i || isNaN(i) ? `<a href="${n}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t</a>` : `<a href="${n}">\n\t\t\t\t\t<span class="slide-number-a">${e}</span>\n\t\t\t\t\t<span class="slide-number-delimiter">${t}</span>\n\t\t\t\t\t<span class="slide-number-b">${i}</span>\n\t\t\t\t\t</a>`;
    }
    destroy() {
        this.element.remove();
    }
}
class w {
    constructor(e){
        this.Reveal = e, this.onInput = this.onInput.bind(this), this.onBlur = this.onBlur.bind(this), this.onKeyDown = this.onKeyDown.bind(this);
    }
    render() {
        this.element = document.createElement("div"), this.element.className = "jump-to-slide", this.jumpInput = document.createElement("input"), this.jumpInput.type = "text", this.jumpInput.className = "jump-to-slide-input", this.jumpInput.placeholder = "Jump to slide", this.jumpInput.addEventListener("input", this.onInput), this.jumpInput.addEventListener("keydown", this.onKeyDown), this.jumpInput.addEventListener("blur", this.onBlur), this.element.appendChild(this.jumpInput);
    }
    show() {
        this.indicesOnShow = this.Reveal.getIndices(), this.Reveal.getRevealElement().appendChild(this.element), this.jumpInput.focus();
    }
    hide() {
        this.isVisible() && (this.element.remove(), this.jumpInput.value = "", clearTimeout(this.jumpTimeout), delete this.jumpTimeout);
    }
    isVisible() {
        return !!this.element.parentNode;
    }
    jump() {
        clearTimeout(this.jumpTimeout), delete this.jumpTimeout;
        const e = this.jumpInput.value.trim("");
        let t = this.Reveal.location.getIndicesFromHash(e, {
            oneBasedIndex: !0
        });
        return !t && /\S+/i.test(e) && e.length > 1 && (t = this.search(e)), t && "" !== e ? (this.Reveal.slide(t.h, t.v, t.f), !0) : (this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), !1);
    }
    jumpAfter(e) {
        clearTimeout(this.jumpTimeout), this.jumpTimeout = setTimeout(()=>this.jump(), e);
    }
    search(e) {
        const t = new RegExp("\\b" + e.trim() + "\\b", "i"), i = this.Reveal.getSlides().find((e)=>t.test(e.innerText));
        return i ? this.Reveal.getIndices(i) : null;
    }
    cancel() {
        this.Reveal.slide(this.indicesOnShow.h, this.indicesOnShow.v, this.indicesOnShow.f), this.hide();
    }
    confirm() {
        this.jump(), this.hide();
    }
    destroy() {
        this.jumpInput.removeEventListener("input", this.onInput), this.jumpInput.removeEventListener("keydown", this.onKeyDown), this.jumpInput.removeEventListener("blur", this.onBlur), this.element.remove();
    }
    onKeyDown(e) {
        13 === e.keyCode ? this.confirm() : 27 === e.keyCode && (this.cancel(), e.stopImmediatePropagation());
    }
    onInput(e) {
        this.jumpAfter(200);
    }
    onBlur() {
        setTimeout(()=>this.hide(), 1);
    }
}
const E = (e)=>{
    let t = e.match(/^#([0-9a-f]{3})$/i);
    if (t && t[1]) return t = t[1], {
        r: 17 * parseInt(t.charAt(0), 16),
        g: 17 * parseInt(t.charAt(1), 16),
        b: 17 * parseInt(t.charAt(2), 16)
    };
    let i = e.match(/^#([0-9a-f]{6})$/i);
    if (i && i[1]) return i = i[1], {
        r: parseInt(i.slice(0, 2), 16),
        g: parseInt(i.slice(2, 4), 16),
        b: parseInt(i.slice(4, 6), 16)
    };
    let n = e.match(/^rgb\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/i);
    if (n) return {
        r: parseInt(n[1], 10),
        g: parseInt(n[2], 10),
        b: parseInt(n[3], 10)
    };
    let s = e.match(/^rgba\s*\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\,\s*([\d]+|[\d]*.[\d]+)\s*\)$/i);
    return s ? {
        r: parseInt(s[1], 10),
        g: parseInt(s[2], 10),
        b: parseInt(s[3], 10),
        a: parseFloat(s[4])
    } : null;
};
class R {
    constructor(e){
        this.Reveal = e;
    }
    render() {
        this.element = document.createElement("div"), this.element.className = "backgrounds", this.Reveal.getRevealElement().appendChild(this.element);
    }
    create() {
        this.element.innerHTML = "", this.element.classList.add("no-transition"), this.Reveal.getHorizontalSlides().forEach((e)=>{
            let i = this.createBackground(e, this.element);
            t(e, "section").forEach((e)=>{
                this.createBackground(e, i), i.classList.add("stack");
            });
        }), this.Reveal.getConfig().parallaxBackgroundImage ? (this.element.style.backgroundImage = 'url("' + this.Reveal.getConfig().parallaxBackgroundImage + '")', this.element.style.backgroundSize = this.Reveal.getConfig().parallaxBackgroundSize, this.element.style.backgroundRepeat = this.Reveal.getConfig().parallaxBackgroundRepeat, this.element.style.backgroundPosition = this.Reveal.getConfig().parallaxBackgroundPosition, setTimeout(()=>{
            this.Reveal.getRevealElement().classList.add("has-parallax-background");
        }, 1)) : (this.element.style.backgroundImage = "", this.Reveal.getRevealElement().classList.remove("has-parallax-background"));
    }
    createBackground(e, t) {
        let i = document.createElement("div");
        i.className = "slide-background " + e.className.replace(/present|past|future/, "");
        let n = document.createElement("div");
        return n.className = "slide-background-content", i.appendChild(n), t.appendChild(i), e.slideBackgroundElement = i, e.slideBackgroundContentElement = n, this.sync(e), i;
    }
    sync(e) {
        const t = e.slideBackgroundElement, i = e.slideBackgroundContentElement, n = {
            background: e.getAttribute("data-background"),
            backgroundSize: e.getAttribute("data-background-size"),
            backgroundImage: e.getAttribute("data-background-image"),
            backgroundVideo: e.getAttribute("data-background-video"),
            backgroundIframe: e.getAttribute("data-background-iframe"),
            backgroundColor: e.getAttribute("data-background-color"),
            backgroundGradient: e.getAttribute("data-background-gradient"),
            backgroundRepeat: e.getAttribute("data-background-repeat"),
            backgroundPosition: e.getAttribute("data-background-position"),
            backgroundTransition: e.getAttribute("data-background-transition"),
            backgroundOpacity: e.getAttribute("data-background-opacity")
        }, s = e.hasAttribute("data-preload");
        e.classList.remove("has-dark-background"), e.classList.remove("has-light-background"), t.removeAttribute("data-loaded"), t.removeAttribute("data-background-hash"), t.removeAttribute("data-background-size"), t.removeAttribute("data-background-transition"), t.style.backgroundColor = "", i.style.backgroundSize = "", i.style.backgroundRepeat = "", i.style.backgroundPosition = "", i.style.backgroundImage = "", i.style.opacity = "", i.innerHTML = "", n.background && (/^(http|file|\/\/)/gi.test(n.background) || /\.(svg|png|jpg|jpeg|gif|bmp|webp)([?#\s]|$)/gi.test(n.background) ? e.setAttribute("data-background-image", n.background) : t.style.background = n.background), (n.background || n.backgroundColor || n.backgroundGradient || n.backgroundImage || n.backgroundVideo || n.backgroundIframe) && t.setAttribute("data-background-hash", n.background + n.backgroundSize + n.backgroundImage + n.backgroundVideo + n.backgroundIframe + n.backgroundColor + n.backgroundGradient + n.backgroundRepeat + n.backgroundPosition + n.backgroundTransition + n.backgroundOpacity), n.backgroundSize && t.setAttribute("data-background-size", n.backgroundSize), n.backgroundColor && (t.style.backgroundColor = n.backgroundColor), n.backgroundGradient && (t.style.backgroundImage = n.backgroundGradient), n.backgroundTransition && t.setAttribute("data-background-transition", n.backgroundTransition), s && t.setAttribute("data-preload", ""), n.backgroundSize && (i.style.backgroundSize = n.backgroundSize), n.backgroundRepeat && (i.style.backgroundRepeat = n.backgroundRepeat), n.backgroundPosition && (i.style.backgroundPosition = n.backgroundPosition), n.backgroundOpacity && (i.style.opacity = n.backgroundOpacity);
        let a = n.backgroundColor;
        if (!a || !E(a)) {
            let e = window.getComputedStyle(t);
            e && e.backgroundColor && (a = e.backgroundColor);
        }
        if (a) {
            const t = E(a);
            t && 0 !== t.a && ("string" == typeof (r = a) && (r = E(r)), (r ? (299 * r.r + 587 * r.g + 114 * r.b) / 1e3 : null) < 128 ? e.classList.add("has-dark-background") : e.classList.add("has-light-background"));
        }
        var r;
    }
    update(e = !1) {
        let i = this.Reveal.getCurrentSlide(), n = this.Reveal.getIndices(), s = null, a = this.Reveal.getConfig().rtl ? "future" : "past", r = this.Reveal.getConfig().rtl ? "past" : "future";
        if (Array.from(this.element.childNodes).forEach((i, o)=>{
            i.classList.remove("past", "present", "future"), o < n.h ? i.classList.add(a) : o > n.h ? i.classList.add(r) : (i.classList.add("present"), s = i), (e || o === n.h) && t(i, ".slide-background").forEach((e, t)=>{
                e.classList.remove("past", "present", "future"), t < n.v ? e.classList.add("past") : t > n.v ? e.classList.add("future") : (e.classList.add("present"), o === n.h && (s = e));
            });
        }), this.previousBackground && this.Reveal.slideContent.stopEmbeddedContent(this.previousBackground, {
            unloadIframes: !this.Reveal.slideContent.shouldPreload(this.previousBackground)
        }), s) {
            this.Reveal.slideContent.startEmbeddedContent(s);
            let e = s.querySelector(".slide-background-content");
            if (e) {
                let t = e.style.backgroundImage || "";
                /\.gif/i.test(t) && (e.style.backgroundImage = "", window.getComputedStyle(e).opacity, e.style.backgroundImage = t);
            }
            let t = this.previousBackground ? this.previousBackground.getAttribute("data-background-hash") : null, i = s.getAttribute("data-background-hash");
            i && i === t && s !== this.previousBackground && this.element.classList.add("no-transition"), this.previousBackground = s;
        }
        i && [
            "has-light-background",
            "has-dark-background"
        ].forEach((e)=>{
            i.classList.contains(e) ? this.Reveal.getRevealElement().classList.add(e) : this.Reveal.getRevealElement().classList.remove(e);
        }, this), setTimeout(()=>{
            this.element.classList.remove("no-transition");
        }, 1);
    }
    updateParallax() {
        let e = this.Reveal.getIndices();
        if (this.Reveal.getConfig().parallaxBackgroundImage) {
            let t, i, n = this.Reveal.getHorizontalSlides(), s = this.Reveal.getVerticalSlides(), a = this.element.style.backgroundSize.split(" ");
            1 === a.length ? t = i = parseInt(a[0], 10) : (t = parseInt(a[0], 10), i = parseInt(a[1], 10));
            let r, o, l = this.element.offsetWidth, d = n.length;
            r = "number" == typeof this.Reveal.getConfig().parallaxBackgroundHorizontal ? this.Reveal.getConfig().parallaxBackgroundHorizontal : d > 1 ? (t - l) / (d - 1) : 0, o = r * e.h * -1;
            let c, h, u = this.element.offsetHeight, g = s.length;
            c = "number" == typeof this.Reveal.getConfig().parallaxBackgroundVertical ? this.Reveal.getConfig().parallaxBackgroundVertical : (i - u) / (g - 1), h = g > 0 ? c * e.v : 0, this.element.style.backgroundPosition = o + "px " + -h + "px";
        }
    }
    destroy() {
        this.element.remove();
    }
}
const S = ".slides section", A = ".slides>section", k = ".slides>section.present>section", L = /registerPlugin|registerKeyboardShortcut|addKeyBinding|addEventListener|showPreview/, C = /fade-(down|up|right|left|out|in-then-out|in-then-semi-out)|semi-fade-out|current-visible|shrink|grow/;
let x = 0;
class P {
    constructor(e){
        this.Reveal = e;
    }
    run(e, t) {
        this.reset();
        let i = this.Reveal.getSlides(), n = i.indexOf(t), s = i.indexOf(e);
        if (e.hasAttribute("data-auto-animate") && t.hasAttribute("data-auto-animate") && e.getAttribute("data-auto-animate-id") === t.getAttribute("data-auto-animate-id") && !(n > s ? t : e).hasAttribute("data-auto-animate-restart")) {
            this.autoAnimateStyleSheet = this.autoAnimateStyleSheet || l();
            let i = this.getAutoAnimateOptions(t);
            e.dataset.autoAnimate = "pending", t.dataset.autoAnimate = "pending", i.slideDirection = n > s ? "forward" : "backward";
            let a = "none" === e.style.display;
            a && (e.style.display = this.Reveal.getConfig().display);
            let r = this.getAutoAnimatableElements(e, t).map((e)=>this.autoAnimateElements(e.from, e.to, e.options || {}, i, x++));
            if (a && (e.style.display = "none"), "false" !== t.dataset.autoAnimateUnmatched && !0 === this.Reveal.getConfig().autoAnimateUnmatched) {
                let e = .8 * i.duration, n = .2 * i.duration;
                this.getUnmatchedAutoAnimateElements(t).forEach((e)=>{
                    let t = this.getAutoAnimateOptions(e, i), n = "unmatched";
                    t.duration === i.duration && t.delay === i.delay || (n = "unmatched-" + x++, r.push(`[data-auto-animate="running"] [data-auto-animate-target="${n}"] { transition: opacity ${t.duration}s ease ${t.delay}s; }`)), e.dataset.autoAnimateTarget = n;
                }, this), r.push(`[data-auto-animate="running"] [data-auto-animate-target="unmatched"] { transition: opacity ${e}s ease ${n}s; }`);
            }
            this.autoAnimateStyleSheet.innerHTML = r.join(""), requestAnimationFrame(()=>{
                this.autoAnimateStyleSheet && (getComputedStyle(this.autoAnimateStyleSheet).fontWeight, t.dataset.autoAnimate = "running");
            }), this.Reveal.dispatchEvent({
                type: "autoanimate",
                data: {
                    fromSlide: e,
                    toSlide: t,
                    sheet: this.autoAnimateStyleSheet
                }
            });
        }
    }
    reset() {
        t(this.Reveal.getRevealElement(), '[data-auto-animate]:not([data-auto-animate=""])').forEach((e)=>{
            e.dataset.autoAnimate = "";
        }), t(this.Reveal.getRevealElement(), "[data-auto-animate-target]").forEach((e)=>{
            delete e.dataset.autoAnimateTarget;
        }), this.autoAnimateStyleSheet && this.autoAnimateStyleSheet.parentNode && (this.autoAnimateStyleSheet.parentNode.removeChild(this.autoAnimateStyleSheet), this.autoAnimateStyleSheet = null);
    }
    autoAnimateElements(e, t, i, n, s) {
        e.dataset.autoAnimateTarget = "", t.dataset.autoAnimateTarget = s;
        let a = this.getAutoAnimateOptions(t, n);
        void 0 !== i.delay && (a.delay = i.delay), void 0 !== i.duration && (a.duration = i.duration), void 0 !== i.easing && (a.easing = i.easing);
        let r = this.getAutoAnimatableProperties("from", e, i), o = this.getAutoAnimatableProperties("to", t, i);
        if (t.classList.contains("fragment") && (delete o.styles.opacity, e.classList.contains("fragment"))) (e.className.match(C) || [
            ""
        ])[0] === (t.className.match(C) || [
            ""
        ])[0] && "forward" === n.slideDirection && t.classList.add("visible", "disabled");
        if (!1 !== i.translate || !1 !== i.scale) {
            let e = this.Reveal.getScale(), t = {
                x: (r.x - o.x) / e,
                y: (r.y - o.y) / e,
                scaleX: r.width / o.width,
                scaleY: r.height / o.height
            };
            t.x = Math.round(1e3 * t.x) / 1e3, t.y = Math.round(1e3 * t.y) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3, t.scaleX = Math.round(1e3 * t.scaleX) / 1e3;
            let n = !1 !== i.translate && (0 !== t.x || 0 !== t.y), s = !1 !== i.scale && (0 !== t.scaleX || 0 !== t.scaleY);
            if (n || s) {
                let e = [];
                n && e.push(`translate(${t.x}px, ${t.y}px)`), s && e.push(`scale(${t.scaleX}, ${t.scaleY})`), r.styles.transform = e.join(" "), r.styles["transform-origin"] = "top left", o.styles.transform = "none";
            }
        }
        for(let e in o.styles){
            const t = o.styles[e], i = r.styles[e];
            t === i ? delete o.styles[e] : (!0 === t.explicitValue && (o.styles[e] = t.value), !0 === i.explicitValue && (r.styles[e] = i.value));
        }
        let l = "", d = Object.keys(o.styles);
        if (d.length > 0) r.styles.transition = "none", o.styles.transition = `all ${a.duration}s ${a.easing} ${a.delay}s`, o.styles["transition-property"] = d.join(", "), o.styles["will-change"] = d.join(", "), l = '[data-auto-animate-target="' + s + '"] {' + Object.keys(r.styles).map((e)=>e + ": " + r.styles[e] + " !important;").join("") + '}[data-auto-animate="running"] [data-auto-animate-target="' + s + '"] {' + Object.keys(o.styles).map((e)=>e + ": " + o.styles[e] + " !important;").join("") + "}";
        return l;
    }
    getAutoAnimateOptions(t, i) {
        let n = {
            easing: this.Reveal.getConfig().autoAnimateEasing,
            duration: this.Reveal.getConfig().autoAnimateDuration,
            delay: 0
        };
        if (n = e(n, i), t.parentNode) {
            let e = r(t.parentNode, "[data-auto-animate-target]");
            e && (n = this.getAutoAnimateOptions(e, n));
        }
        return t.dataset.autoAnimateEasing && (n.easing = t.dataset.autoAnimateEasing), t.dataset.autoAnimateDuration && (n.duration = parseFloat(t.dataset.autoAnimateDuration)), t.dataset.autoAnimateDelay && (n.delay = parseFloat(t.dataset.autoAnimateDelay)), n;
    }
    getAutoAnimatableProperties(e, t, i) {
        let n = this.Reveal.getConfig(), s = {
            styles: []
        };
        if (!1 !== i.translate || !1 !== i.scale) {
            let e;
            if ("function" == typeof i.measure) e = i.measure(t);
            else if (n.center) e = t.getBoundingClientRect();
            else {
                let i = this.Reveal.getScale();
                e = {
                    x: t.offsetLeft * i,
                    y: t.offsetTop * i,
                    width: t.offsetWidth * i,
                    height: t.offsetHeight * i
                };
            }
            s.x = e.x, s.y = e.y, s.width = e.width, s.height = e.height;
        }
        const a = getComputedStyle(t);
        return (i.styles || n.autoAnimateStyles).forEach((t)=>{
            let i;
            "string" == typeof t && (t = {
                property: t
            }), void 0 !== t.from && "from" === e ? i = {
                value: t.from,
                explicitValue: !0
            } : void 0 !== t.to && "to" === e ? i = {
                value: t.to,
                explicitValue: !0
            } : ("line-height" === t.property && (i = parseFloat(a["line-height"]) / parseFloat(a["font-size"])), isNaN(i) && (i = a[t.property])), "" !== i && (s.styles[t.property] = i);
        }), s;
    }
    getAutoAnimatableElements(e, t) {
        let i = ("function" == typeof this.Reveal.getConfig().autoAnimateMatcher ? this.Reveal.getConfig().autoAnimateMatcher : this.getAutoAnimatePairs).call(this, e, t), n = [];
        return i.filter((e, t)=>{
            if (-1 === n.indexOf(e.to)) return n.push(e.to), !0;
        });
    }
    getAutoAnimatePairs(e, t) {
        let i = [];
        const n = "h1, h2, h3, h4, h5, h6, p, li";
        return this.findAutoAnimateMatches(i, e, t, "[data-id]", (e)=>e.nodeName + ":::" + e.getAttribute("data-id")), this.findAutoAnimateMatches(i, e, t, n, (e)=>e.nodeName + ":::" + e.innerText), this.findAutoAnimateMatches(i, e, t, "img, video, iframe", (e)=>e.nodeName + ":::" + (e.getAttribute("src") || e.getAttribute("data-src"))), this.findAutoAnimateMatches(i, e, t, "pre", (e)=>e.nodeName + ":::" + e.innerText), i.forEach((e)=>{
            a(e.from, n) ? e.options = {
                scale: !1
            } : a(e.from, "pre") && (e.options = {
                scale: !1,
                styles: [
                    "width",
                    "height"
                ]
            }, this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-code", (e)=>e.textContent, {
                scale: !1,
                styles: [],
                measure: this.getLocalBoundingBox.bind(this)
            }), this.findAutoAnimateMatches(i, e.from, e.to, ".hljs .hljs-ln-line[data-line-number]", (e)=>e.getAttribute("data-line-number"), {
                scale: !1,
                styles: [
                    "width"
                ],
                measure: this.getLocalBoundingBox.bind(this)
            }));
        }, this), i;
    }
    getLocalBoundingBox(e) {
        const t = this.Reveal.getScale();
        return {
            x: Math.round(e.offsetLeft * t * 100) / 100,
            y: Math.round(e.offsetTop * t * 100) / 100,
            width: Math.round(e.offsetWidth * t * 100) / 100,
            height: Math.round(e.offsetHeight * t * 100) / 100
        };
    }
    findAutoAnimateMatches(e, t, i, n, s, a) {
        let r = {}, o = {};
        [].slice.call(t.querySelectorAll(n)).forEach((e, t)=>{
            const i = s(e);
            "string" == typeof i && i.length && (r[i] = r[i] || [], r[i].push(e));
        }), [].slice.call(i.querySelectorAll(n)).forEach((t, i)=>{
            const n = s(t);
            let l;
            if (o[n] = o[n] || [], o[n].push(t), r[n]) {
                const e = o[n].length - 1, t = r[n].length - 1;
                r[n][e] ? (l = r[n][e], r[n][e] = null) : r[n][t] && (l = r[n][t], r[n][t] = null);
            }
            l && e.push({
                from: l,
                to: t,
                options: a
            });
        });
    }
    getUnmatchedAutoAnimateElements(e) {
        return [].slice.call(e.children).reduce((e, t)=>{
            const i = t.querySelector("[data-auto-animate-target]");
            return t.hasAttribute("data-auto-animate-target") || i || e.push(t), t.querySelector("[data-auto-animate-target]") && (e = e.concat(this.getUnmatchedAutoAnimateElements(t))), e;
        }, []);
    }
}
class N {
    constructor(e){
        this.Reveal = e;
    }
    configure(e, t) {
        !1 === e.fragments ? this.disable() : !1 === t.fragments && this.enable();
    }
    disable() {
        t(this.Reveal.getSlidesElement(), ".fragment").forEach((e)=>{
            e.classList.add("visible"), e.classList.remove("current-fragment");
        });
    }
    enable() {
        t(this.Reveal.getSlidesElement(), ".fragment").forEach((e)=>{
            e.classList.remove("visible"), e.classList.remove("current-fragment");
        });
    }
    availableRoutes() {
        let e = this.Reveal.getCurrentSlide();
        if (e && this.Reveal.getConfig().fragments) {
            let t = e.querySelectorAll(".fragment:not(.disabled)"), i = e.querySelectorAll(".fragment:not(.disabled):not(.visible)");
            return {
                prev: t.length - i.length > 0,
                next: !!i.length
            };
        }
        return {
            prev: !1,
            next: !1
        };
    }
    sort(e, t = !1) {
        e = Array.from(e);
        let i = [], n = [], s = [];
        e.forEach((e)=>{
            if (e.hasAttribute("data-fragment-index")) {
                let t = parseInt(e.getAttribute("data-fragment-index"), 10);
                i[t] || (i[t] = []), i[t].push(e);
            } else n.push([
                e
            ]);
        }), i = i.concat(n);
        let a = 0;
        return i.forEach((e)=>{
            e.forEach((e)=>{
                s.push(e), e.setAttribute("data-fragment-index", a);
            }), a++;
        }), !0 === t ? i : s;
    }
    sortAll() {
        this.Reveal.getHorizontalSlides().forEach((e)=>{
            let i = t(e, "section");
            i.forEach((e, t)=>{
                this.sort(e.querySelectorAll(".fragment"));
            }, this), 0 === i.length && this.sort(e.querySelectorAll(".fragment"));
        });
    }
    update(e, t) {
        let i = {
            shown: [],
            hidden: []
        }, n = this.Reveal.getCurrentSlide();
        if (n && this.Reveal.getConfig().fragments && (t = t || this.sort(n.querySelectorAll(".fragment"))).length) {
            let s = 0;
            if ("number" != typeof e) {
                let t = this.sort(n.querySelectorAll(".fragment.visible")).pop();
                t && (e = parseInt(t.getAttribute("data-fragment-index") || 0, 10));
            }
            Array.from(t).forEach((t, n)=>{
                if (t.hasAttribute("data-fragment-index") && (n = parseInt(t.getAttribute("data-fragment-index"), 10)), s = Math.max(s, n), n <= e) {
                    let s = t.classList.contains("visible");
                    t.classList.add("visible"), t.classList.remove("current-fragment"), n === e && (this.Reveal.announceStatus(this.Reveal.getStatusText(t)), t.classList.add("current-fragment"), this.Reveal.slideContent.startEmbeddedContent(t)), s || (i.shown.push(t), this.Reveal.dispatchEvent({
                        target: t,
                        type: "visible",
                        bubbles: !1
                    }));
                } else {
                    let e = t.classList.contains("visible");
                    t.classList.remove("visible"), t.classList.remove("current-fragment"), e && (this.Reveal.slideContent.stopEmbeddedContent(t), i.hidden.push(t), this.Reveal.dispatchEvent({
                        target: t,
                        type: "hidden",
                        bubbles: !1
                    }));
                }
            }), e = "number" == typeof e ? e : -1, e = Math.max(Math.min(e, s), -1), n.setAttribute("data-fragment", e);
        }
        return i;
    }
    sync(e = this.Reveal.getCurrentSlide()) {
        return this.sort(e.querySelectorAll(".fragment"));
    }
    goto(e, t = 0) {
        let i = this.Reveal.getCurrentSlide();
        if (i && this.Reveal.getConfig().fragments) {
            let n = this.sort(i.querySelectorAll(".fragment:not(.disabled)"));
            if (n.length) {
                if ("number" != typeof e) {
                    let t = this.sort(i.querySelectorAll(".fragment:not(.disabled).visible")).pop();
                    e = t ? parseInt(t.getAttribute("data-fragment-index") || 0, 10) : -1;
                }
                e += t;
                let s = this.update(e, n);
                return s.hidden.length && this.Reveal.dispatchEvent({
                    type: "fragmenthidden",
                    data: {
                        fragment: s.hidden[0],
                        fragments: s.hidden
                    }
                }), s.shown.length && this.Reveal.dispatchEvent({
                    type: "fragmentshown",
                    data: {
                        fragment: s.shown[0],
                        fragments: s.shown
                    }
                }), this.Reveal.controls.update(), this.Reveal.progress.update(), this.Reveal.getConfig().fragmentInURL && this.Reveal.location.writeURL(), !(!s.shown.length && !s.hidden.length);
            }
        }
        return !1;
    }
    next() {
        return this.goto(null, 1);
    }
    prev() {
        return this.goto(null, -1);
    }
}
class M {
    constructor(e){
        this.Reveal = e, this.active = !1, this.onSlideClicked = this.onSlideClicked.bind(this);
    }
    activate() {
        if (this.Reveal.getConfig().overview && !this.isActive()) {
            this.active = !0, this.Reveal.getRevealElement().classList.add("overview"), this.Reveal.cancelAutoSlide(), this.Reveal.getSlidesElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), S).forEach((e)=>{
                e.classList.contains("stack") || e.addEventListener("click", this.onSlideClicked, !0);
            });
            const e = 70, i = this.Reveal.getComputedSlideSize();
            this.overviewSlideWidth = i.width + e, this.overviewSlideHeight = i.height + e, this.Reveal.getConfig().rtl && (this.overviewSlideWidth = -this.overviewSlideWidth), this.Reveal.updateSlidesVisibility(), this.layout(), this.update(), this.Reveal.layout();
            const n = this.Reveal.getIndices();
            this.Reveal.dispatchEvent({
                type: "overviewshown",
                data: {
                    indexh: n.h,
                    indexv: n.v,
                    currentSlide: this.Reveal.getCurrentSlide()
                }
            });
        }
    }
    layout() {
        this.Reveal.getHorizontalSlides().forEach((e, i)=>{
            e.setAttribute("data-index-h", i), s(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"), e.classList.contains("stack") && t(e, "section").forEach((e, t)=>{
                e.setAttribute("data-index-h", i), e.setAttribute("data-index-v", t), s(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
            });
        }), Array.from(this.Reveal.getBackgroundsElement().childNodes).forEach((e, i)=>{
            s(e, "translate3d(" + i * this.overviewSlideWidth + "px, 0, 0)"), t(e, ".slide-background").forEach((e, t)=>{
                s(e, "translate3d(0, " + t * this.overviewSlideHeight + "px, 0)");
            });
        });
    }
    update() {
        const e = Math.min(window.innerWidth, window.innerHeight), t = Math.max(e / 5, 150) / e, i = this.Reveal.getIndices();
        this.Reveal.transformSlides({
            overview: [
                "scale(" + t + ")",
                "translateX(" + -i.h * this.overviewSlideWidth + "px)",
                "translateY(" + -i.v * this.overviewSlideHeight + "px)"
            ].join(" ")
        });
    }
    deactivate() {
        if (this.Reveal.getConfig().overview) {
            this.active = !1, this.Reveal.getRevealElement().classList.remove("overview"), this.Reveal.getRevealElement().classList.add("overview-deactivating"), setTimeout(()=>{
                this.Reveal.getRevealElement().classList.remove("overview-deactivating");
            }, 1), this.Reveal.getRevealElement().appendChild(this.Reveal.getBackgroundsElement()), t(this.Reveal.getRevealElement(), S).forEach((e)=>{
                s(e, ""), e.removeEventListener("click", this.onSlideClicked, !0);
            }), t(this.Reveal.getBackgroundsElement(), ".slide-background").forEach((e)=>{
                s(e, "");
            }), this.Reveal.transformSlides({
                overview: ""
            });
            const e = this.Reveal.getIndices();
            this.Reveal.slide(e.h, e.v), this.Reveal.layout(), this.Reveal.cueAutoSlide(), this.Reveal.dispatchEvent({
                type: "overviewhidden",
                data: {
                    indexh: e.h,
                    indexv: e.v,
                    currentSlide: this.Reveal.getCurrentSlide()
                }
            });
        }
    }
    toggle(e) {
        "boolean" == typeof e ? e ? this.activate() : this.deactivate() : this.isActive() ? this.deactivate() : this.activate();
    }
    isActive() {
        return this.active;
    }
    onSlideClicked(e) {
        if (this.isActive()) {
            e.preventDefault();
            let t = e.target;
            for(; t && !t.nodeName.match(/section/gi);)t = t.parentNode;
            if (t && !t.classList.contains("disabled") && (this.deactivate(), t.nodeName.match(/section/gi))) {
                let e = parseInt(t.getAttribute("data-index-h"), 10), i = parseInt(t.getAttribute("data-index-v"), 10);
                this.Reveal.slide(e, i);
            }
        }
    }
}
class I {
    constructor(e){
        this.Reveal = e, this.shortcuts = {}, this.bindings = {}, this.onDocumentKeyDown = this.onDocumentKeyDown.bind(this), this.onDocumentKeyPress = this.onDocumentKeyPress.bind(this);
    }
    configure(e, t) {
        "linear" === e.navigationMode ? (this.shortcuts["&#8594;  ,  &#8595;  ,  SPACE  ,  N  ,  L  ,  J"] = "Next slide", this.shortcuts["&#8592;  ,  &#8593;  ,  P  ,  H  ,  K"] = "Previous slide") : (this.shortcuts["N  ,  SPACE"] = "Next slide", this.shortcuts["P  ,  Shift SPACE"] = "Previous slide", this.shortcuts["&#8592;  ,  H"] = "Navigate left", this.shortcuts["&#8594;  ,  L"] = "Navigate right", this.shortcuts["&#8593;  ,  K"] = "Navigate up", this.shortcuts["&#8595;  ,  J"] = "Navigate down"), this.shortcuts["Alt + &#8592;/&#8593/&#8594;/&#8595;"] = "Navigate without fragments", this.shortcuts["Shift + &#8592;/&#8593/&#8594;/&#8595;"] = "Jump to first/last slide", this.shortcuts["B  ,  ."] = "Pause", this.shortcuts.F = "Fullscreen", this.shortcuts.G = "Jump to slide", this.shortcuts["ESC, O"] = "Slide overview";
    }
    bind() {
        document.addEventListener("keydown", this.onDocumentKeyDown, !1), document.addEventListener("keypress", this.onDocumentKeyPress, !1);
    }
    unbind() {
        document.removeEventListener("keydown", this.onDocumentKeyDown, !1), document.removeEventListener("keypress", this.onDocumentKeyPress, !1);
    }
    addKeyBinding(e, t) {
        "object" == typeof e && e.keyCode ? this.bindings[e.keyCode] = {
            callback: t,
            key: e.key,
            description: e.description
        } : this.bindings[e] = {
            callback: t,
            key: null,
            description: null
        };
    }
    removeKeyBinding(e) {
        delete this.bindings[e];
    }
    triggerKey(e) {
        this.onDocumentKeyDown({
            keyCode: e
        });
    }
    registerKeyboardShortcut(e, t) {
        this.shortcuts[e] = t;
    }
    getShortcuts() {
        return this.shortcuts;
    }
    getBindings() {
        return this.bindings;
    }
    onDocumentKeyPress(e) {
        e.shiftKey && 63 === e.charCode && this.Reveal.toggleHelp();
    }
    onDocumentKeyDown(e) {
        let t = this.Reveal.getConfig();
        if ("function" == typeof t.keyboardCondition && !1 === t.keyboardCondition(e)) return !0;
        if ("focused" === t.keyboardCondition && !this.Reveal.isFocused()) return !0;
        let i = e.keyCode, n = !this.Reveal.isAutoSliding();
        this.Reveal.onUserInput(e);
        let s = document.activeElement && !0 === document.activeElement.isContentEditable, a = document.activeElement && document.activeElement.tagName && /input|textarea/i.test(document.activeElement.tagName), r = document.activeElement && document.activeElement.className && /speaker-notes/i.test(document.activeElement.className), o = !(-1 !== [
            32,
            37,
            38,
            39,
            40,
            78,
            80
        ].indexOf(e.keyCode) && e.shiftKey || e.altKey) && (e.shiftKey || e.altKey || e.ctrlKey || e.metaKey);
        if (s || a || r || o) return;
        let l, d = [
            66,
            86,
            190,
            191
        ];
        if ("object" == typeof t.keyboard) for(l in t.keyboard)"togglePause" === t.keyboard[l] && d.push(parseInt(l, 10));
        if (this.Reveal.isPaused() && -1 === d.indexOf(i)) return !1;
        let c = "linear" === t.navigationMode || !this.Reveal.hasHorizontalSlides() || !this.Reveal.hasVerticalSlides(), h = !1;
        if ("object" == typeof t.keyboard) {
            for(l in t.keyboard)if (parseInt(l, 10) === i) {
                let i = t.keyboard[l];
                "function" == typeof i ? i.apply(null, [
                    e
                ]) : "string" == typeof i && "function" == typeof this.Reveal[i] && this.Reveal[i].call(), h = !0;
            }
        }
        if (!1 === h) {
            for(l in this.bindings)if (parseInt(l, 10) === i) {
                let t = this.bindings[l].callback;
                "function" == typeof t ? t.apply(null, [
                    e
                ]) : "string" == typeof t && "function" == typeof this.Reveal[t] && this.Reveal[t].call(), h = !0;
            }
        }
        !1 === h && (h = !0, 80 === i || 33 === i ? this.Reveal.prev({
            skipFragments: e.altKey
        }) : 78 === i || 34 === i ? this.Reveal.next({
            skipFragments: e.altKey
        }) : 72 === i || 37 === i ? e.shiftKey ? this.Reveal.slide(0) : !this.Reveal.overview.isActive() && c ? this.Reveal.prev({
            skipFragments: e.altKey
        }) : this.Reveal.left({
            skipFragments: e.altKey
        }) : 76 === i || 39 === i ? e.shiftKey ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : !this.Reveal.overview.isActive() && c ? this.Reveal.next({
            skipFragments: e.altKey
        }) : this.Reveal.right({
            skipFragments: e.altKey
        }) : 75 === i || 38 === i ? e.shiftKey ? this.Reveal.slide(void 0, 0) : !this.Reveal.overview.isActive() && c ? this.Reveal.prev({
            skipFragments: e.altKey
        }) : this.Reveal.up({
            skipFragments: e.altKey
        }) : 74 === i || 40 === i ? e.shiftKey ? this.Reveal.slide(void 0, Number.MAX_VALUE) : !this.Reveal.overview.isActive() && c ? this.Reveal.next({
            skipFragments: e.altKey
        }) : this.Reveal.down({
            skipFragments: e.altKey
        }) : 36 === i ? this.Reveal.slide(0) : 35 === i ? this.Reveal.slide(this.Reveal.getHorizontalSlides().length - 1) : 32 === i ? (this.Reveal.overview.isActive() && this.Reveal.overview.deactivate(), e.shiftKey ? this.Reveal.prev({
            skipFragments: e.altKey
        }) : this.Reveal.next({
            skipFragments: e.altKey
        })) : 58 === i || 59 === i || 66 === i || 86 === i || 190 === i || 191 === i ? this.Reveal.togglePause() : 70 === i ? ((e)=>{
            let t = (e = e || document.documentElement).requestFullscreen || e.webkitRequestFullscreen || e.webkitRequestFullScreen || e.mozRequestFullScreen || e.msRequestFullscreen;
            t && t.apply(e);
        })(t.embedded ? this.Reveal.getViewportElement() : document.documentElement) : 65 === i ? t.autoSlideStoppable && this.Reveal.toggleAutoSlide(n) : 71 === i ? t.jumpToSlide && this.Reveal.toggleJumpToSlide() : h = !1), h ? e.preventDefault && e.preventDefault() : 27 !== i && 79 !== i || (!1 === this.Reveal.closeOverlay() && this.Reveal.overview.toggle(), e.preventDefault && e.preventDefault()), this.Reveal.cueAutoSlide();
    }
}
class D {
    constructor(e){
        var t, i, n;
        n = 1e3, (i = "MAX_REPLACE_STATE_FREQUENCY") in (t = this) ? Object.defineProperty(t, i, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : t[i] = n, this.Reveal = e, this.writeURLTimeout = 0, this.replaceStateTimestamp = 0, this.onWindowHashChange = this.onWindowHashChange.bind(this);
    }
    bind() {
        window.addEventListener("hashchange", this.onWindowHashChange, !1);
    }
    unbind() {
        window.removeEventListener("hashchange", this.onWindowHashChange, !1);
    }
    getIndicesFromHash(e = window.location.hash, t = {}) {
        let i = e.replace(/^#\/?/, ""), n = i.split("/");
        if (/^[0-9]*$/.test(n[0]) || !i.length) {
            const e = this.Reveal.getConfig();
            let i, s = e.hashOneBasedIndex || t.oneBasedIndex ? 1 : 0, a = parseInt(n[0], 10) - s || 0, r = parseInt(n[1], 10) - s || 0;
            return e.fragmentInURL && (i = parseInt(n[2], 10), isNaN(i) && (i = void 0)), {
                h: a,
                v: r,
                f: i
            };
        }
        {
            let e, t;
            /\/[-\d]+$/g.test(i) && (t = parseInt(i.split("/").pop(), 10), t = isNaN(t) ? void 0 : t, i = i.split("/").shift());
            try {
                e = document.getElementById(decodeURIComponent(i));
            } catch (e) {}
            if (e) return {
                ...this.Reveal.getIndices(e),
                f: t
            };
        }
        return null;
    }
    readURL() {
        const e = this.Reveal.getIndices(), t = this.getIndicesFromHash();
        t ? t.h === e.h && t.v === e.v && void 0 === t.f || this.Reveal.slide(t.h, t.v, t.f) : this.Reveal.slide(e.h || 0, e.v || 0);
    }
    writeURL(e) {
        let t = this.Reveal.getConfig(), i = this.Reveal.getCurrentSlide();
        if (clearTimeout(this.writeURLTimeout), "number" == typeof e) this.writeURLTimeout = setTimeout(this.writeURL, e);
        else if (i) {
            let e = this.getHash();
            t.history ? window.location.hash = e : t.hash && ("/" === e ? this.debouncedReplaceState(window.location.pathname + window.location.search) : this.debouncedReplaceState("#" + e));
        }
    }
    replaceState(e) {
        window.history.replaceState(null, null, e), this.replaceStateTimestamp = Date.now();
    }
    debouncedReplaceState(e) {
        clearTimeout(this.replaceStateTimeout), Date.now() - this.replaceStateTimestamp > this.MAX_REPLACE_STATE_FREQUENCY ? this.replaceState(e) : this.replaceStateTimeout = setTimeout(()=>this.replaceState(e), this.MAX_REPLACE_STATE_FREQUENCY);
    }
    getHash(e) {
        let t = "/", i = e || this.Reveal.getCurrentSlide(), n = i ? i.getAttribute("id") : null;
        n && (n = encodeURIComponent(n));
        let s = this.Reveal.getIndices(e);
        if (this.Reveal.getConfig().fragmentInURL || (s.f = void 0), "string" == typeof n && n.length) t = "/" + n, s.f >= 0 && (t += "/" + s.f);
        else {
            let e = this.Reveal.getConfig().hashOneBasedIndex ? 1 : 0;
            (s.h > 0 || s.v > 0 || s.f >= 0) && (t += s.h + e), (s.v > 0 || s.f >= 0) && (t += "/" + (s.v + e)), s.f >= 0 && (t += "/" + s.f);
        }
        return t;
    }
    onWindowHashChange(e) {
        this.readURL();
    }
}
class T {
    constructor(e){
        this.Reveal = e, this.onNavigateLeftClicked = this.onNavigateLeftClicked.bind(this), this.onNavigateRightClicked = this.onNavigateRightClicked.bind(this), this.onNavigateUpClicked = this.onNavigateUpClicked.bind(this), this.onNavigateDownClicked = this.onNavigateDownClicked.bind(this), this.onNavigatePrevClicked = this.onNavigatePrevClicked.bind(this), this.onNavigateNextClicked = this.onNavigateNextClicked.bind(this);
    }
    render() {
        const e = this.Reveal.getConfig().rtl, i = this.Reveal.getRevealElement();
        this.element = document.createElement("aside"), this.element.className = "controls", this.element.innerHTML = `<button class="navigate-left" aria-label="${e ? "next slide" : "previous slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-right" aria-label="${e ? "previous slide" : "next slide"}"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-up" aria-label="above slide"><div class="controls-arrow"></div></button>\n\t\t\t<button class="navigate-down" aria-label="below slide"><div class="controls-arrow"></div></button>`, this.Reveal.getRevealElement().appendChild(this.element), this.controlsLeft = t(i, ".navigate-left"), this.controlsRight = t(i, ".navigate-right"), this.controlsUp = t(i, ".navigate-up"), this.controlsDown = t(i, ".navigate-down"), this.controlsPrev = t(i, ".navigate-prev"), this.controlsNext = t(i, ".navigate-next"), this.controlsRightArrow = this.element.querySelector(".navigate-right"), this.controlsLeftArrow = this.element.querySelector(".navigate-left"), this.controlsDownArrow = this.element.querySelector(".navigate-down");
    }
    configure(e, t) {
        this.element.style.display = e.controls ? "block" : "none", this.element.setAttribute("data-controls-layout", e.controlsLayout), this.element.setAttribute("data-controls-back-arrows", e.controlsBackArrows);
    }
    bind() {
        let e = [
            "touchstart",
            "click"
        ];
        v && (e = [
            "touchstart"
        ]), e.forEach((e)=>{
            this.controlsLeft.forEach((t)=>t.addEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach((t)=>t.addEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach((t)=>t.addEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach((t)=>t.addEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach((t)=>t.addEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach((t)=>t.addEventListener(e, this.onNavigateNextClicked, !1));
        });
    }
    unbind() {
        [
            "touchstart",
            "click"
        ].forEach((e)=>{
            this.controlsLeft.forEach((t)=>t.removeEventListener(e, this.onNavigateLeftClicked, !1)), this.controlsRight.forEach((t)=>t.removeEventListener(e, this.onNavigateRightClicked, !1)), this.controlsUp.forEach((t)=>t.removeEventListener(e, this.onNavigateUpClicked, !1)), this.controlsDown.forEach((t)=>t.removeEventListener(e, this.onNavigateDownClicked, !1)), this.controlsPrev.forEach((t)=>t.removeEventListener(e, this.onNavigatePrevClicked, !1)), this.controlsNext.forEach((t)=>t.removeEventListener(e, this.onNavigateNextClicked, !1));
        });
    }
    update() {
        let e = this.Reveal.availableRoutes();
        [
            ...this.controlsLeft,
            ...this.controlsRight,
            ...this.controlsUp,
            ...this.controlsDown,
            ...this.controlsPrev,
            ...this.controlsNext
        ].forEach((e)=>{
            e.classList.remove("enabled", "fragmented"), e.setAttribute("disabled", "disabled");
        }), e.left && this.controlsLeft.forEach((e)=>{
            e.classList.add("enabled"), e.removeAttribute("disabled");
        }), e.right && this.controlsRight.forEach((e)=>{
            e.classList.add("enabled"), e.removeAttribute("disabled");
        }), e.up && this.controlsUp.forEach((e)=>{
            e.classList.add("enabled"), e.removeAttribute("disabled");
        }), e.down && this.controlsDown.forEach((e)=>{
            e.classList.add("enabled"), e.removeAttribute("disabled");
        }), (e.left || e.up) && this.controlsPrev.forEach((e)=>{
            e.classList.add("enabled"), e.removeAttribute("disabled");
        }), (e.right || e.down) && this.controlsNext.forEach((e)=>{
            e.classList.add("enabled"), e.removeAttribute("disabled");
        });
        let t = this.Reveal.getCurrentSlide();
        if (t) {
            let e = this.Reveal.fragments.availableRoutes();
            e.prev && this.controlsPrev.forEach((e)=>{
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }), e.next && this.controlsNext.forEach((e)=>{
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }), this.Reveal.isVerticalSlide(t) ? (e.prev && this.controlsUp.forEach((e)=>{
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }), e.next && this.controlsDown.forEach((e)=>{
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            })) : (e.prev && this.controlsLeft.forEach((e)=>{
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }), e.next && this.controlsRight.forEach((e)=>{
                e.classList.add("fragmented", "enabled"), e.removeAttribute("disabled");
            }));
        }
        if (this.Reveal.getConfig().controlsTutorial) {
            let t = this.Reveal.getIndices();
            !this.Reveal.hasNavigatedVertically() && e.down ? this.controlsDownArrow.classList.add("highlight") : (this.controlsDownArrow.classList.remove("highlight"), this.Reveal.getConfig().rtl ? !this.Reveal.hasNavigatedHorizontally() && e.left && 0 === t.v ? this.controlsLeftArrow.classList.add("highlight") : this.controlsLeftArrow.classList.remove("highlight") : !this.Reveal.hasNavigatedHorizontally() && e.right && 0 === t.v ? this.controlsRightArrow.classList.add("highlight") : this.controlsRightArrow.classList.remove("highlight"));
        }
    }
    destroy() {
        this.unbind(), this.element.remove();
    }
    onNavigateLeftClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.prev() : this.Reveal.left();
    }
    onNavigateRightClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), "linear" === this.Reveal.getConfig().navigationMode ? this.Reveal.next() : this.Reveal.right();
    }
    onNavigateUpClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.up();
    }
    onNavigateDownClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.down();
    }
    onNavigatePrevClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.prev();
    }
    onNavigateNextClicked(e) {
        e.preventDefault(), this.Reveal.onUserInput(), this.Reveal.next();
    }
}
class F {
    constructor(e){
        this.Reveal = e, this.onProgressClicked = this.onProgressClicked.bind(this);
    }
    render() {
        this.element = document.createElement("div"), this.element.className = "progress", this.Reveal.getRevealElement().appendChild(this.element), this.bar = document.createElement("span"), this.element.appendChild(this.bar);
    }
    configure(e, t) {
        this.element.style.display = e.progress ? "block" : "none";
    }
    bind() {
        this.Reveal.getConfig().progress && this.element && this.element.addEventListener("click", this.onProgressClicked, !1);
    }
    unbind() {
        this.Reveal.getConfig().progress && this.element && this.element.removeEventListener("click", this.onProgressClicked, !1);
    }
    update() {
        if (this.Reveal.getConfig().progress && this.bar) {
            let e = this.Reveal.getProgress();
            this.Reveal.getTotalSlides() < 2 && (e = 0), this.bar.style.transform = "scaleX(" + e + ")";
        }
    }
    getMaxWidth() {
        return this.Reveal.getRevealElement().offsetWidth;
    }
    onProgressClicked(e) {
        this.Reveal.onUserInput(e), e.preventDefault();
        let t = this.Reveal.getSlides(), i = t.length, n = Math.floor(e.clientX / this.getMaxWidth() * i);
        this.Reveal.getConfig().rtl && (n = i - n);
        let s = this.Reveal.getIndices(t[n]);
        this.Reveal.slide(s.h, s.v);
    }
    destroy() {
        this.element.remove();
    }
}
class z {
    constructor(e){
        this.Reveal = e, this.lastMouseWheelStep = 0, this.cursorHidden = !1, this.cursorInactiveTimeout = 0, this.onDocumentCursorActive = this.onDocumentCursorActive.bind(this), this.onDocumentMouseScroll = this.onDocumentMouseScroll.bind(this);
    }
    configure(e, t) {
        e.mouseWheel ? (document.addEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.addEventListener("mousewheel", this.onDocumentMouseScroll, !1)) : (document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1)), e.hideInactiveCursor ? (document.addEventListener("mousemove", this.onDocumentCursorActive, !1), document.addEventListener("mousedown", this.onDocumentCursorActive, !1)) : (this.showCursor(), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1));
    }
    showCursor() {
        this.cursorHidden && (this.cursorHidden = !1, this.Reveal.getRevealElement().style.cursor = "");
    }
    hideCursor() {
        !1 === this.cursorHidden && (this.cursorHidden = !0, this.Reveal.getRevealElement().style.cursor = "none");
    }
    destroy() {
        this.showCursor(), document.removeEventListener("DOMMouseScroll", this.onDocumentMouseScroll, !1), document.removeEventListener("mousewheel", this.onDocumentMouseScroll, !1), document.removeEventListener("mousemove", this.onDocumentCursorActive, !1), document.removeEventListener("mousedown", this.onDocumentCursorActive, !1);
    }
    onDocumentCursorActive(e) {
        this.showCursor(), clearTimeout(this.cursorInactiveTimeout), this.cursorInactiveTimeout = setTimeout(this.hideCursor.bind(this), this.Reveal.getConfig().hideCursorTime);
    }
    onDocumentMouseScroll(e) {
        if (Date.now() - this.lastMouseWheelStep > 1e3) {
            this.lastMouseWheelStep = Date.now();
            let t = e.detail || -e.wheelDelta;
            t > 0 ? this.Reveal.next() : t < 0 && this.Reveal.prev();
        }
    }
}
const H = (e, t)=>{
    const i = document.createElement("script");
    i.type = "text/javascript", i.async = !1, i.defer = !1, i.src = e, "function" == typeof t && (i.onload = i.onreadystatechange = (e)=>{
        ("load" === e.type || /loaded|complete/.test(i.readyState)) && (i.onload = i.onreadystatechange = i.onerror = null, t());
    }, i.onerror = (e)=>{
        i.onload = i.onreadystatechange = i.onerror = null, t(new Error("Failed loading script: " + i.src + "\n" + e));
    });
    const n = document.querySelector("head");
    n.insertBefore(i, n.lastChild);
};
class B {
    constructor(e){
        this.Reveal = e, this.state = "idle", this.registeredPlugins = {}, this.asyncDependencies = [];
    }
    load(e, t) {
        return this.state = "loading", e.forEach(this.registerPlugin.bind(this)), new Promise((e)=>{
            let i = [], n = 0;
            if (t.forEach((e)=>{
                e.condition && !e.condition() || (e.async ? this.asyncDependencies.push(e) : i.push(e));
            }), i.length) {
                n = i.length;
                const t = (t)=>{
                    t && "function" == typeof t.callback && t.callback(), 0 == --n && this.initPlugins().then(e);
                };
                i.forEach((e)=>{
                    "string" == typeof e.id ? (this.registerPlugin(e), t(e)) : "string" == typeof e.src ? H(e.src, ()=>t(e)) : (console.warn("Unrecognized plugin format", e), t());
                });
            } else this.initPlugins().then(e);
        });
    }
    initPlugins() {
        return new Promise((e)=>{
            let t = Object.values(this.registeredPlugins), i = t.length;
            if (0 === i) this.loadAsync().then(e);
            else {
                let n, s = ()=>{
                    0 == --i ? this.loadAsync().then(e) : n();
                }, a = 0;
                n = ()=>{
                    let e = t[a++];
                    if ("function" == typeof e.init) {
                        let t = e.init(this.Reveal);
                        t && "function" == typeof t.then ? t.then(s) : s();
                    } else s();
                }, n();
            }
        });
    }
    loadAsync() {
        return this.state = "loaded", this.asyncDependencies.length && this.asyncDependencies.forEach((e)=>{
            H(e.src, e.callback);
        }), Promise.resolve();
    }
    registerPlugin(e) {
        2 === arguments.length && "string" == typeof arguments[0] ? (e = arguments[1]).id = arguments[0] : "function" == typeof e && (e = e());
        let t = e.id;
        "string" != typeof t ? console.warn("Unrecognized plugin format; can't find plugin.id", e) : void 0 === this.registeredPlugins[t] ? (this.registeredPlugins[t] = e, "loaded" === this.state && "function" == typeof e.init && e.init(this.Reveal)) : console.warn('reveal.js: "' + t + '" plugin has already been registered');
    }
    hasPlugin(e) {
        return !!this.registeredPlugins[e];
    }
    getPlugin(e) {
        return this.registeredPlugins[e];
    }
    getRegisteredPlugins() {
        return this.registeredPlugins;
    }
    destroy() {
        Object.values(this.registeredPlugins).forEach((e)=>{
            "function" == typeof e.destroy && e.destroy();
        }), this.registeredPlugins = {}, this.asyncDependencies = [];
    }
}
class O {
    constructor(e){
        this.Reveal = e;
    }
    async setupPDF() {
        const e = this.Reveal.getConfig(), i = t(this.Reveal.getRevealElement(), S), n = e.slideNumber && /all|print/i.test(e.showSlideNumber), s = this.Reveal.getComputedSlideSize(window.innerWidth, window.innerHeight), a = Math.floor(s.width * (1 + e.margin)), r = Math.floor(s.height * (1 + e.margin)), o = s.width, d = s.height;
        await new Promise(requestAnimationFrame), l("@page{size:" + a + "px " + r + "px; margin: 0px;}"), l(".reveal section>img, .reveal section>video, .reveal section>iframe{max-width: " + o + "px; max-height:" + d + "px}"), document.documentElement.classList.add("print-pdf"), document.body.style.width = a + "px", document.body.style.height = r + "px";
        const c = document.querySelector(".reveal-viewport");
        let h;
        if (c) {
            const e = window.getComputedStyle(c);
            e && e.background && (h = e.background);
        }
        await new Promise(requestAnimationFrame), this.Reveal.layoutSlideContents(o, d), await new Promise(requestAnimationFrame);
        const u = i.map((e)=>e.scrollHeight), g = [], v = i[0].parentNode;
        let p = 1;
        i.forEach(function(i, s) {
            if (!1 === i.classList.contains("stack")) {
                let l = (a - o) / 2, c = (r - d) / 2;
                const v = u[s];
                let m = Math.max(Math.ceil(v / r), 1);
                m = Math.min(m, e.pdfMaxPagesPerSlide), (1 === m && e.center || i.classList.contains("center")) && (c = Math.max((r - v) / 2, 0));
                const f = document.createElement("div");
                if (g.push(f), f.className = "pdf-page", f.style.height = (r + e.pdfPageHeightOffset) * m + "px", h && (f.style.background = h), f.appendChild(i), i.style.left = l + "px", i.style.top = c + "px", i.style.width = o + "px", this.Reveal.slideContent.layout(i), i.slideBackgroundElement && f.insertBefore(i.slideBackgroundElement, i), e.showNotes) {
                    const t = this.Reveal.getSlideNotes(i);
                    if (t) {
                        const i = 8, n = "string" == typeof e.showNotes ? e.showNotes : "inline", s = document.createElement("div");
                        s.classList.add("speaker-notes"), s.classList.add("speaker-notes-pdf"), s.setAttribute("data-layout", n), s.innerHTML = t, "separate-page" === n ? g.push(s) : (s.style.left = i + "px", s.style.bottom = i + "px", s.style.width = a - 2 * i + "px", f.appendChild(s));
                    }
                }
                if (n) {
                    const e = document.createElement("div");
                    e.classList.add("slide-number"), e.classList.add("slide-number-pdf"), e.innerHTML = p++, f.appendChild(e);
                }
                if (e.pdfSeparateFragments) {
                    const e = this.Reveal.fragments.sort(f.querySelectorAll(".fragment"), !0);
                    let t;
                    e.forEach(function(e, i) {
                        t && t.forEach(function(e) {
                            e.classList.remove("current-fragment");
                        }), e.forEach(function(e) {
                            e.classList.add("visible", "current-fragment");
                        }, this);
                        const s = f.cloneNode(!0);
                        if (n) {
                            const e = i + 1;
                            s.querySelector(".slide-number-pdf").innerHTML += "." + e;
                        }
                        g.push(s), t = e;
                    }, this), e.forEach(function(e) {
                        e.forEach(function(e) {
                            e.classList.remove("visible", "current-fragment");
                        });
                    });
                } else t(f, ".fragment:not(.fade-out)").forEach(function(e) {
                    e.classList.add("visible");
                });
            }
        }, this), await new Promise(requestAnimationFrame), g.forEach((e)=>v.appendChild(e)), this.Reveal.slideContent.layout(this.Reveal.getSlidesElement()), this.Reveal.dispatchEvent({
            type: "pdf-ready"
        });
    }
    isPrintingPDF() {
        return /print-pdf/gi.test(window.location.search);
    }
}
class q {
    constructor(e){
        this.Reveal = e, this.touchStartX = 0, this.touchStartY = 0, this.touchStartCount = 0, this.touchCaptured = !1, this.onPointerDown = this.onPointerDown.bind(this), this.onPointerMove = this.onPointerMove.bind(this), this.onPointerUp = this.onPointerUp.bind(this), this.onTouchStart = this.onTouchStart.bind(this), this.onTouchMove = this.onTouchMove.bind(this), this.onTouchEnd = this.onTouchEnd.bind(this);
    }
    bind() {
        let e = this.Reveal.getRevealElement();
        "onpointerdown" in window ? (e.addEventListener("pointerdown", this.onPointerDown, !1), e.addEventListener("pointermove", this.onPointerMove, !1), e.addEventListener("pointerup", this.onPointerUp, !1)) : window.navigator.msPointerEnabled ? (e.addEventListener("MSPointerDown", this.onPointerDown, !1), e.addEventListener("MSPointerMove", this.onPointerMove, !1), e.addEventListener("MSPointerUp", this.onPointerUp, !1)) : (e.addEventListener("touchstart", this.onTouchStart, !1), e.addEventListener("touchmove", this.onTouchMove, !1), e.addEventListener("touchend", this.onTouchEnd, !1));
    }
    unbind() {
        let e = this.Reveal.getRevealElement();
        e.removeEventListener("pointerdown", this.onPointerDown, !1), e.removeEventListener("pointermove", this.onPointerMove, !1), e.removeEventListener("pointerup", this.onPointerUp, !1), e.removeEventListener("MSPointerDown", this.onPointerDown, !1), e.removeEventListener("MSPointerMove", this.onPointerMove, !1), e.removeEventListener("MSPointerUp", this.onPointerUp, !1), e.removeEventListener("touchstart", this.onTouchStart, !1), e.removeEventListener("touchmove", this.onTouchMove, !1), e.removeEventListener("touchend", this.onTouchEnd, !1);
    }
    isSwipePrevented(e) {
        if (a(e, "video, audio")) return !0;
        for(; e && "function" == typeof e.hasAttribute;){
            if (e.hasAttribute("data-prevent-swipe")) return !0;
            e = e.parentNode;
        }
        return !1;
    }
    onTouchStart(e) {
        if (this.isSwipePrevented(e.target)) return !0;
        this.touchStartX = e.touches[0].clientX, this.touchStartY = e.touches[0].clientY, this.touchStartCount = e.touches.length;
    }
    onTouchMove(e) {
        if (this.isSwipePrevented(e.target)) return !0;
        let t = this.Reveal.getConfig();
        if (this.touchCaptured) v && e.preventDefault();
        else {
            this.Reveal.onUserInput(e);
            let i = e.touches[0].clientX, n = e.touches[0].clientY;
            if (1 === e.touches.length && 2 !== this.touchStartCount) {
                let s = this.Reveal.availableRoutes({
                    includeFragments: !0
                }), a = i - this.touchStartX, r = n - this.touchStartY;
                a > 40 && Math.abs(a) > Math.abs(r) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.next() : this.Reveal.prev() : this.Reveal.left()) : a < -40 && Math.abs(a) > Math.abs(r) ? (this.touchCaptured = !0, "linear" === t.navigationMode ? t.rtl ? this.Reveal.prev() : this.Reveal.next() : this.Reveal.right()) : r > 40 && s.up ? (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.prev() : this.Reveal.up()) : r < -40 && s.down && (this.touchCaptured = !0, "linear" === t.navigationMode ? this.Reveal.next() : this.Reveal.down()), t.embedded ? (this.touchCaptured || this.Reveal.isVerticalSlide()) && e.preventDefault() : e.preventDefault();
            }
        }
    }
    onTouchEnd(e) {
        this.touchCaptured = !1;
    }
    onPointerDown(e) {
        e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [
            {
                clientX: e.clientX,
                clientY: e.clientY
            }
        ], this.onTouchStart(e));
    }
    onPointerMove(e) {
        e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [
            {
                clientX: e.clientX,
                clientY: e.clientY
            }
        ], this.onTouchMove(e));
    }
    onPointerUp(e) {
        e.pointerType !== e.MSPOINTER_TYPE_TOUCH && "touch" !== e.pointerType || (e.touches = [
            {
                clientX: e.clientX,
                clientY: e.clientY
            }
        ], this.onTouchEnd(e));
    }
}
const U = "focus", j = "blur";
class W {
    constructor(e){
        this.Reveal = e, this.onRevealPointerDown = this.onRevealPointerDown.bind(this), this.onDocumentPointerDown = this.onDocumentPointerDown.bind(this);
    }
    configure(e, t) {
        e.embedded ? this.blur() : (this.focus(), this.unbind());
    }
    bind() {
        this.Reveal.getConfig().embedded && this.Reveal.getRevealElement().addEventListener("pointerdown", this.onRevealPointerDown, !1);
    }
    unbind() {
        this.Reveal.getRevealElement().removeEventListener("pointerdown", this.onRevealPointerDown, !1), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1);
    }
    focus() {
        this.state !== U && (this.Reveal.getRevealElement().classList.add("focused"), document.addEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = U;
    }
    blur() {
        this.state !== j && (this.Reveal.getRevealElement().classList.remove("focused"), document.removeEventListener("pointerdown", this.onDocumentPointerDown, !1)), this.state = j;
    }
    isFocused() {
        return this.state === U;
    }
    destroy() {
        this.Reveal.getRevealElement().classList.remove("focused");
    }
    onRevealPointerDown(e) {
        this.focus();
    }
    onDocumentPointerDown(e) {
        let t = r(e.target, ".reveal");
        t && t === this.Reveal.getRevealElement() || this.blur();
    }
}
class K {
    constructor(e){
        this.Reveal = e;
    }
    render() {
        this.element = document.createElement("div"), this.element.className = "speaker-notes", this.element.setAttribute("data-prevent-swipe", ""), this.element.setAttribute("tabindex", "0"), this.Reveal.getRevealElement().appendChild(this.element);
    }
    configure(e, t) {
        e.showNotes && this.element.setAttribute("data-layout", "string" == typeof e.showNotes ? e.showNotes : "inline");
    }
    update() {
        this.Reveal.getConfig().showNotes && this.element && this.Reveal.getCurrentSlide() && !this.Reveal.print.isPrintingPDF() && (this.element.innerHTML = this.getSlideNotes() || '<span class="notes-placeholder">No notes on this slide.</span>');
    }
    updateVisibility() {
        this.Reveal.getConfig().showNotes && this.hasNotes() && !this.Reveal.print.isPrintingPDF() ? this.Reveal.getRevealElement().classList.add("show-notes") : this.Reveal.getRevealElement().classList.remove("show-notes");
    }
    hasNotes() {
        return this.Reveal.getSlidesElement().querySelectorAll("[data-notes], aside.notes").length > 0;
    }
    isSpeakerNotesWindow() {
        return !!window.location.search.match(/receiver/gi);
    }
    getSlideNotes(e = this.Reveal.getCurrentSlide()) {
        if (e.hasAttribute("data-notes")) return e.getAttribute("data-notes");
        let t = e.querySelectorAll("aside.notes");
        return t ? Array.from(t).map((e)=>e.innerHTML).join("\n") : null;
    }
    destroy() {
        this.element.remove();
    }
}
class V {
    constructor(e, t){
        this.diameter = 100, this.diameter2 = this.diameter / 2, this.thickness = 6, this.playing = !1, this.progress = 0, this.progressOffset = 1, this.container = e, this.progressCheck = t, this.canvas = document.createElement("canvas"), this.canvas.className = "playback", this.canvas.width = this.diameter, this.canvas.height = this.diameter, this.canvas.style.width = this.diameter2 + "px", this.canvas.style.height = this.diameter2 + "px", this.context = this.canvas.getContext("2d"), this.container.appendChild(this.canvas), this.render();
    }
    setPlaying(e) {
        const t = this.playing;
        this.playing = e, !t && this.playing ? this.animate() : this.render();
    }
    animate() {
        const e = this.progress;
        this.progress = this.progressCheck(), e > .8 && this.progress < .2 && (this.progressOffset = this.progress), this.render(), this.playing && requestAnimationFrame(this.animate.bind(this));
    }
    render() {
        let e = this.playing ? this.progress : 0, t = this.diameter2 - this.thickness, i = this.diameter2, n = this.diameter2, s = 28;
        this.progressOffset += .1 * (1 - this.progressOffset);
        const a = -Math.PI / 2 + e * (2 * Math.PI), r = -Math.PI / 2 + this.progressOffset * (2 * Math.PI);
        this.context.save(), this.context.clearRect(0, 0, this.diameter, this.diameter), this.context.beginPath(), this.context.arc(i, n, t + 4, 0, 2 * Math.PI, !1), this.context.fillStyle = "rgba( 0, 0, 0, 0.4 )", this.context.fill(), this.context.beginPath(), this.context.arc(i, n, t, 0, 2 * Math.PI, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "rgba( 255, 255, 255, 0.2 )", this.context.stroke(), this.playing && (this.context.beginPath(), this.context.arc(i, n, t, r, a, !1), this.context.lineWidth = this.thickness, this.context.strokeStyle = "#fff", this.context.stroke()), this.context.translate(i - 14, n - 14), this.playing ? (this.context.fillStyle = "#fff", this.context.fillRect(0, 0, 10, s), this.context.fillRect(18, 0, 10, s)) : (this.context.beginPath(), this.context.translate(4, 0), this.context.moveTo(0, 0), this.context.lineTo(24, 14), this.context.lineTo(0, s), this.context.fillStyle = "#fff", this.context.fill()), this.context.restore();
    }
    on(e, t) {
        this.canvas.addEventListener(e, t, !1);
    }
    off(e, t) {
        this.canvas.removeEventListener(e, t, !1);
    }
    destroy() {
        this.playing = !1, this.canvas.parentNode && this.container.removeChild(this.canvas);
    }
}
var $ = {
    width: 960,
    height: 700,
    margin: .04,
    minScale: .2,
    maxScale: 2,
    controls: !0,
    controlsTutorial: !0,
    controlsLayout: "bottom-right",
    controlsBackArrows: "faded",
    progress: !0,
    slideNumber: !1,
    showSlideNumber: "all",
    hashOneBasedIndex: !1,
    hash: !1,
    respondToHashChanges: !0,
    jumpToSlide: !0,
    history: !1,
    keyboard: !0,
    keyboardCondition: null,
    disableLayout: !1,
    overview: !0,
    center: !0,
    touch: !0,
    loop: !1,
    rtl: !1,
    navigationMode: "default",
    shuffle: !1,
    fragments: !0,
    fragmentInURL: !0,
    embedded: !1,
    help: !0,
    pause: !0,
    showNotes: !1,
    showHiddenSlides: !1,
    autoPlayMedia: null,
    preloadIframes: null,
    autoAnimate: !0,
    autoAnimateMatcher: null,
    autoAnimateEasing: "ease",
    autoAnimateDuration: 1,
    autoAnimateUnmatched: !0,
    autoAnimateStyles: [
        "opacity",
        "color",
        "background-color",
        "padding",
        "font-size",
        "line-height",
        "letter-spacing",
        "border-width",
        "border-color",
        "border-radius",
        "outline",
        "outline-offset"
    ],
    autoSlide: 0,
    autoSlideStoppable: !0,
    autoSlideMethod: null,
    defaultTiming: null,
    mouseWheel: !1,
    previewLinks: !1,
    postMessage: !0,
    postMessageEvents: !1,
    focusBodyOnPageVisibilityChange: !0,
    transition: "slide",
    transitionSpeed: "default",
    backgroundTransition: "fade",
    parallaxBackgroundImage: "",
    parallaxBackgroundSize: "",
    parallaxBackgroundRepeat: "",
    parallaxBackgroundPosition: "",
    parallaxBackgroundHorizontal: null,
    parallaxBackgroundVertical: null,
    pdfMaxPagesPerSlide: Number.POSITIVE_INFINITY,
    pdfSeparateFragments: !0,
    pdfPageHeightOffset: -1,
    viewDistance: 3,
    mobileViewDistance: 2,
    display: "block",
    hideInactiveCursor: !0,
    hideCursorTime: 5e3,
    sortFragmentsOnSync: !0,
    dependencies: [],
    plugins: []
};
const X = "4.5.0";
function Y(a, l) {
    arguments.length < 2 && (l = arguments[0], a = document.querySelector(".reveal"));
    const h = {};
    let u, v, p, m, f, E = {}, C = !1, x = {
        hasNavigatedHorizontally: !1,
        hasNavigatedVertically: !1
    }, H = [], U = 1, j = {
        layout: "",
        overview: ""
    }, Y = {}, _ = "idle", J = 0, G = 0, Q = -1, Z = !1, ee = new b(h), te = new y(h), ie = new w(h), ne = new P(h), se = new R(h), ae = new N(h), re = new M(h), oe = new I(h), le = new D(h), de = new T(h), ce = new F(h), he = new z(h), ue = new B(h), ge = new O(h), ve = new W(h), pe = new q(h), me = new K(h);
    function fe(e) {
        if (!a) throw 'Unable to find presentation root (<div class="reveal">).';
        if (Y.wrapper = a, Y.slides = a.querySelector(".slides"), !Y.slides) throw 'Unable to find slides container (<div class="slides">).';
        return E = {
            ...$,
            ...E,
            ...l,
            ...e,
            ...d()
        }, be(), window.addEventListener("load", We, !1), ue.load(E.plugins, E.dependencies).then(ye), new Promise((e)=>h.on("ready", e));
    }
    function be() {
        !0 === E.embedded ? Y.viewport = r(a, ".reveal-viewport") || a : (Y.viewport = document.body, document.documentElement.classList.add("reveal-full-page")), Y.viewport.classList.add("reveal-viewport");
    }
    function ye() {
        C = !0, we(), Ee(), Ce(), ke(), Le(), lt(), xe(), le.readURL(), se.update(!0), setTimeout(()=>{
            Y.slides.classList.remove("no-transition"), Y.wrapper.classList.add("ready"), Fe({
                type: "ready",
                data: {
                    indexh: u,
                    indexv: v,
                    currentSlide: m
                }
            });
        }, 1), ge.isPrintingPDF() && (Ne(), "complete" === document.readyState ? ge.setupPDF() : window.addEventListener("load", ()=>{
            ge.setupPDF();
        }));
    }
    function we() {
        E.showHiddenSlides || t(Y.wrapper, 'section[data-visibility="hidden"]').forEach((e)=>{
            e.parentNode.removeChild(e);
        });
    }
    function Ee() {
        Y.slides.classList.add("no-transition"), g ? Y.wrapper.classList.add("no-hover") : Y.wrapper.classList.remove("no-hover"), se.render(), te.render(), ie.render(), de.render(), ce.render(), me.render(), Y.pauseOverlay = o(Y.wrapper, "div", "pause-overlay", E.controls ? '<button class="resume-button">Resume presentation</button>' : null), Y.statusElement = Re(), Y.wrapper.setAttribute("role", "application");
    }
    function Re() {
        let e = Y.wrapper.querySelector(".aria-status");
        return e || (e = document.createElement("div"), e.style.position = "absolute", e.style.height = "1px", e.style.width = "1px", e.style.overflow = "hidden", e.style.clip = "rect( 1px, 1px, 1px, 1px )", e.classList.add("aria-status"), e.setAttribute("aria-live", "polite"), e.setAttribute("aria-atomic", "true"), Y.wrapper.appendChild(e)), e;
    }
    function Se(e) {
        Y.statusElement.textContent = e;
    }
    function Ae(e) {
        let t = "";
        if (3 === e.nodeType) t += e.textContent;
        else if (1 === e.nodeType) {
            let i = e.getAttribute("aria-hidden"), n = "none" === window.getComputedStyle(e).display;
            "true" === i || n || Array.from(e.childNodes).forEach((e)=>{
                t += Ae(e);
            });
        }
        return t = t.trim(), "" === t ? "" : t + " ";
    }
    function ke() {
        setInterval(()=>{
            0 === Y.wrapper.scrollTop && 0 === Y.wrapper.scrollLeft || (Y.wrapper.scrollTop = 0, Y.wrapper.scrollLeft = 0);
        }, 1e3);
    }
    function Le() {
        document.addEventListener("fullscreenchange", $t), document.addEventListener("webkitfullscreenchange", $t);
    }
    function Ce() {
        E.postMessage && window.addEventListener("message", Ut, !1);
    }
    function xe(t) {
        const n = {
            ...E
        };
        if ("object" == typeof t && e(E, t), !1 === h.isReady()) return;
        const s = Y.wrapper.querySelectorAll(S).length;
        Y.wrapper.classList.remove(n.transition), Y.wrapper.classList.add(E.transition), Y.wrapper.setAttribute("data-transition-speed", E.transitionSpeed), Y.wrapper.setAttribute("data-background-transition", E.backgroundTransition), Y.viewport.style.setProperty("--slide-width", E.width + "px"), Y.viewport.style.setProperty("--slide-height", E.height + "px"), E.shuffle && dt(), i(Y.wrapper, "embedded", E.embedded), i(Y.wrapper, "rtl", E.rtl), i(Y.wrapper, "center", E.center), !1 === E.pause && Ze(), E.previewLinks ? (He(), Be("[data-preview-link=false]")) : (Be(), He("[data-preview-link]:not([data-preview-link=false])")), ne.reset(), f && (f.destroy(), f = null), s > 1 && E.autoSlide && E.autoSlideStoppable && (f = new V(Y.wrapper, ()=>Math.min(Math.max((Date.now() - Q) / J, 0), 1)), f.on("click", Yt), Z = !1), "default" !== E.navigationMode ? Y.wrapper.setAttribute("data-navigation-mode", E.navigationMode) : Y.wrapper.removeAttribute("data-navigation-mode"), me.configure(E, n), ve.configure(E, n), he.configure(E, n), de.configure(E, n), ce.configure(E, n), oe.configure(E, n), ae.configure(E, n), te.configure(E, n), rt();
    }
    function Pe() {
        window.addEventListener("resize", Kt, !1), E.touch && pe.bind(), E.keyboard && oe.bind(), E.progress && ce.bind(), E.respondToHashChanges && le.bind(), de.bind(), ve.bind(), Y.slides.addEventListener("click", Wt, !1), Y.slides.addEventListener("transitionend", jt, !1), Y.pauseOverlay.addEventListener("click", Ze, !1), E.focusBodyOnPageVisibilityChange && document.addEventListener("visibilitychange", Vt, !1);
    }
    function Ne() {
        pe.unbind(), ve.unbind(), oe.unbind(), de.unbind(), ce.unbind(), le.unbind(), window.removeEventListener("resize", Kt, !1), Y.slides.removeEventListener("click", Wt, !1), Y.slides.removeEventListener("transitionend", jt, !1), Y.pauseOverlay.removeEventListener("click", Ze, !1);
    }
    function Me() {
        Ne(), Mt(), Be(), me.destroy(), ve.destroy(), ue.destroy(), he.destroy(), de.destroy(), ce.destroy(), se.destroy(), te.destroy(), ie.destroy(), document.removeEventListener("fullscreenchange", $t), document.removeEventListener("webkitfullscreenchange", $t), document.removeEventListener("visibilitychange", Vt, !1), window.removeEventListener("message", Ut, !1), window.removeEventListener("load", We, !1), Y.pauseOverlay && Y.pauseOverlay.remove(), Y.statusElement && Y.statusElement.remove(), document.documentElement.classList.remove("reveal-full-page"), Y.wrapper.classList.remove("ready", "center", "has-horizontal-slides", "has-vertical-slides"), Y.wrapper.removeAttribute("data-transition-speed"), Y.wrapper.removeAttribute("data-background-transition"), Y.viewport.classList.remove("reveal-viewport"), Y.viewport.style.removeProperty("--slide-width"), Y.viewport.style.removeProperty("--slide-height"), Y.slides.style.removeProperty("width"), Y.slides.style.removeProperty("height"), Y.slides.style.removeProperty("zoom"), Y.slides.style.removeProperty("left"), Y.slides.style.removeProperty("top"), Y.slides.style.removeProperty("bottom"), Y.slides.style.removeProperty("right"), Y.slides.style.removeProperty("transform"), Array.from(Y.wrapper.querySelectorAll(S)).forEach((e)=>{
            e.style.removeProperty("display"), e.style.removeProperty("top"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden");
        });
    }
    function Ie(e, t, i) {
        a.addEventListener(e, t, i);
    }
    function De(e, t, i) {
        a.removeEventListener(e, t, i);
    }
    function Te(e) {
        "string" == typeof e.layout && (j.layout = e.layout), "string" == typeof e.overview && (j.overview = e.overview), j.layout ? s(Y.slides, j.layout + " " + j.overview) : s(Y.slides, j.overview);
    }
    function Fe({ target: t = Y.wrapper , type: i , data: n , bubbles: s = !0  }) {
        let a = document.createEvent("HTMLEvents", 1, 2);
        return a.initEvent(i, s, !0), e(a, n), t.dispatchEvent(a), t === Y.wrapper && ze(i), a;
    }
    function ze(t, i) {
        if (E.postMessageEvents && window.parent !== window.self) {
            let n = {
                namespace: "reveal",
                eventName: t,
                state: xt()
            };
            e(n, i), window.parent.postMessage(JSON.stringify(n), "*");
        }
    }
    function He(e = "a") {
        Array.from(Y.wrapper.querySelectorAll(e)).forEach((e)=>{
            /^(http|www)/gi.test(e.getAttribute("href")) && e.addEventListener("click", Xt, !1);
        });
    }
    function Be(e = "a") {
        Array.from(Y.wrapper.querySelectorAll(e)).forEach((e)=>{
            /^(http|www)/gi.test(e.getAttribute("href")) && e.removeEventListener("click", Xt, !1);
        });
    }
    function Oe(e) {
        je(), Y.overlay = document.createElement("div"), Y.overlay.classList.add("overlay"), Y.overlay.classList.add("overlay-preview"), Y.wrapper.appendChild(Y.overlay), Y.overlay.innerHTML = `<header>\n\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t<a class="external" href="${e}" target="_blank"><span class="icon"></span></a>\n\t\t\t</header>\n\t\t\t<div class="spinner"></div>\n\t\t\t<div class="viewport">\n\t\t\t\t<iframe src="${e}"></iframe>\n\t\t\t\t<small class="viewport-inner">\n\t\t\t\t\t<span class="x-frame-error">Unable to load iframe. This is likely due to the site's policy (x-frame-options).</span>\n\t\t\t\t</small>\n\t\t\t</div>`, Y.overlay.querySelector("iframe").addEventListener("load", (e)=>{
            Y.overlay.classList.add("loaded");
        }, !1), Y.overlay.querySelector(".close").addEventListener("click", (e)=>{
            je(), e.preventDefault();
        }, !1), Y.overlay.querySelector(".external").addEventListener("click", (e)=>{
            je();
        }, !1);
    }
    function qe(e) {
        "boolean" == typeof e ? e ? Ue() : je() : Y.overlay ? je() : Ue();
    }
    function Ue() {
        if (E.help) {
            je(), Y.overlay = document.createElement("div"), Y.overlay.classList.add("overlay"), Y.overlay.classList.add("overlay-help"), Y.wrapper.appendChild(Y.overlay);
            let e = '<p class="title">Keyboard Shortcuts</p><br/>', t = oe.getShortcuts(), i = oe.getBindings();
            e += "<table><th>KEY</th><th>ACTION</th>";
            for(let i in t)e += `<tr><td>${i}</td><td>${t[i]}</td></tr>`;
            for(let t in i)i[t].key && i[t].description && (e += `<tr><td>${i[t].key}</td><td>${i[t].description}</td></tr>`);
            e += "</table>", Y.overlay.innerHTML = `\n\t\t\t\t<header>\n\t\t\t\t\t<a class="close" href="#"><span class="icon"></span></a>\n\t\t\t\t</header>\n\t\t\t\t<div class="viewport">\n\t\t\t\t\t<div class="viewport-inner">${e}</div>\n\t\t\t\t</div>\n\t\t\t`, Y.overlay.querySelector(".close").addEventListener("click", (e)=>{
                je(), e.preventDefault();
            }, !1);
        }
    }
    function je() {
        return !!Y.overlay && (Y.overlay.parentNode.removeChild(Y.overlay), Y.overlay = null, !0);
    }
    function We() {
        if (Y.wrapper && !ge.isPrintingPDF()) {
            if (!E.disableLayout) {
                g && !E.embedded && document.documentElement.style.setProperty("--vh", .01 * window.innerHeight + "px");
                const e = Ve(), t = U;
                Ke(E.width, E.height), Y.slides.style.width = e.width + "px", Y.slides.style.height = e.height + "px", U = Math.min(e.presentationWidth / e.width, e.presentationHeight / e.height), U = Math.max(U, E.minScale), U = Math.min(U, E.maxScale), 1 === U ? (Y.slides.style.zoom = "", Y.slides.style.left = "", Y.slides.style.top = "", Y.slides.style.bottom = "", Y.slides.style.right = "", Te({
                    layout: ""
                })) : (Y.slides.style.zoom = "", Y.slides.style.left = "50%", Y.slides.style.top = "50%", Y.slides.style.bottom = "auto", Y.slides.style.right = "auto", Te({
                    layout: "translate(-50%, -50%) scale(" + U + ")"
                }));
                const i = Array.from(Y.wrapper.querySelectorAll(S));
                for(let t = 0, n = i.length; t < n; t++){
                    const n = i[t];
                    "none" !== n.style.display && (E.center || n.classList.contains("center") ? n.classList.contains("stack") ? n.style.top = 0 : n.style.top = Math.max((e.height - n.scrollHeight) / 2, 0) + "px" : n.style.top = "");
                }
                t !== U && Fe({
                    type: "resize",
                    data: {
                        oldScale: t,
                        scale: U,
                        size: e
                    }
                });
            }
            Y.viewport.style.setProperty("--slide-scale", U), ce.update(), se.updateParallax(), re.isActive() && re.update();
        }
    }
    function Ke(e, i) {
        t(Y.slides, "section > .stretch, section > .r-stretch").forEach((t)=>{
            let n = c(t, i);
            if (/(img|video)/gi.test(t.nodeName)) {
                const i = t.naturalWidth || t.videoWidth, s = t.naturalHeight || t.videoHeight, a = Math.min(e / i, n / s);
                t.style.width = i * a + "px", t.style.height = s * a + "px";
            } else t.style.width = e + "px", t.style.height = n + "px";
        });
    }
    function Ve(e, t) {
        let i = E.width, n = E.height;
        E.disableLayout && (i = Y.slides.offsetWidth, n = Y.slides.offsetHeight);
        const s = {
            width: i,
            height: n,
            presentationWidth: e || Y.wrapper.offsetWidth,
            presentationHeight: t || Y.wrapper.offsetHeight
        };
        return s.presentationWidth -= s.presentationWidth * E.margin, s.presentationHeight -= s.presentationHeight * E.margin, "string" == typeof s.width && /%$/.test(s.width) && (s.width = parseInt(s.width, 10) / 100 * s.presentationWidth), "string" == typeof s.height && /%$/.test(s.height) && (s.height = parseInt(s.height, 10) / 100 * s.presentationHeight), s;
    }
    function $e(e, t) {
        "object" == typeof e && "function" == typeof e.setAttribute && e.setAttribute("data-previous-indexv", t || 0);
    }
    function Xe(e) {
        if ("object" == typeof e && "function" == typeof e.setAttribute && e.classList.contains("stack")) {
            const t = e.hasAttribute("data-start-indexv") ? "data-start-indexv" : "data-previous-indexv";
            return parseInt(e.getAttribute(t) || 0, 10);
        }
        return 0;
    }
    function Ye(e = m) {
        return e && e.parentNode && !!e.parentNode.nodeName.match(/section/i);
    }
    function _e() {
        return !(!m || !Ye(m)) && !m.nextElementSibling;
    }
    function Je() {
        return 0 === u && 0 === v;
    }
    function Ge() {
        return !!m && !m.nextElementSibling && (!Ye(m) || !m.parentNode.nextElementSibling);
    }
    function Qe() {
        if (E.pause) {
            const e = Y.wrapper.classList.contains("paused");
            Mt(), Y.wrapper.classList.add("paused"), !1 === e && Fe({
                type: "paused"
            });
        }
    }
    function Ze() {
        const e = Y.wrapper.classList.contains("paused");
        Y.wrapper.classList.remove("paused"), Nt(), e && Fe({
            type: "resumed"
        });
    }
    function et(e) {
        "boolean" == typeof e ? e ? Qe() : Ze() : tt() ? Ze() : Qe();
    }
    function tt() {
        return Y.wrapper.classList.contains("paused");
    }
    function it(e) {
        "boolean" == typeof e ? e ? ie.show() : ie.hide() : ie.isVisible() ? ie.hide() : ie.show();
    }
    function nt(e) {
        "boolean" == typeof e ? e ? Dt() : It() : Z ? Dt() : It();
    }
    function st() {
        return !(!J || Z);
    }
    function at(e, t, i, n) {
        if (Fe({
            type: "beforeslidechange",
            data: {
                indexh: void 0 === e ? u : e,
                indexv: void 0 === t ? v : t,
                origin: n
            }
        }).defaultPrevented) return;
        p = m;
        const s = Y.wrapper.querySelectorAll(A);
        if (0 === s.length) return;
        void 0 !== t || re.isActive() || (t = Xe(s[e])), p && p.parentNode && p.parentNode.classList.contains("stack") && $e(p.parentNode, v);
        const a = H.concat();
        H.length = 0;
        let r = u || 0, o = v || 0;
        u = ct(A, void 0 === e ? u : e), v = ct(k, void 0 === t ? v : t);
        let l = u !== r || v !== o;
        l || (p = null);
        let d = s[u], c = d.querySelectorAll("section");
        m = c[v] || d;
        let h = !1;
        l && p && m && !re.isActive() && (p.hasAttribute("data-auto-animate") && m.hasAttribute("data-auto-animate") && p.getAttribute("data-auto-animate-id") === m.getAttribute("data-auto-animate-id") && !(u > r || v > o ? m : p).hasAttribute("data-auto-animate-restart") && (h = !0, Y.slides.classList.add("disable-slide-transitions")), _ = "running"), gt(), We(), re.isActive() && re.update(), void 0 !== i && ae.goto(i), p && p !== m && (p.classList.remove("present"), p.setAttribute("aria-hidden", "true"), Je() && setTimeout(()=>{
            Et().forEach((e)=>{
                $e(e, 0);
            });
        }, 0));
        e: for(let e = 0, t = H.length; e < t; e++){
            for(let t = 0; t < a.length; t++)if (a[t] === H[e]) {
                a.splice(t, 1);
                continue e;
            }
            Y.viewport.classList.add(H[e]), Fe({
                type: H[e]
            });
        }
        for(; a.length;)Y.viewport.classList.remove(a.pop());
        l && Fe({
            type: "slidechanged",
            data: {
                indexh: u,
                indexv: v,
                previousSlide: p,
                currentSlide: m,
                origin: n
            }
        }), !l && p || (ee.stopEmbeddedContent(p), ee.startEmbeddedContent(m)), requestAnimationFrame(()=>{
            Se(Ae(m));
        }), ce.update(), de.update(), me.update(), se.update(), se.updateParallax(), te.update(), ae.update(), le.writeURL(), Nt(), h && (setTimeout(()=>{
            Y.slides.classList.remove("disable-slide-transitions");
        }, 0), E.autoAnimate && ne.run(p, m));
    }
    function rt() {
        Ne(), Pe(), We(), J = E.autoSlide, Nt(), se.create(), le.writeURL(), !0 === E.sortFragmentsOnSync && ae.sortAll(), de.update(), ce.update(), gt(), me.update(), me.updateVisibility(), se.update(!0), te.update(), ee.formatEmbeddedContent(), !1 === E.autoPlayMedia ? ee.stopEmbeddedContent(m, {
            unloadIframes: !1
        }) : ee.startEmbeddedContent(m), re.isActive() && re.layout();
    }
    function ot(e = m) {
        se.sync(e), ae.sync(e), ee.load(e), se.update(), me.update();
    }
    function lt() {
        yt().forEach((e)=>{
            t(e, "section").forEach((e, t)=>{
                t > 0 && (e.classList.remove("present"), e.classList.remove("past"), e.classList.add("future"), e.setAttribute("aria-hidden", "true"));
            });
        });
    }
    function dt(e = yt()) {
        e.forEach((t, i)=>{
            let n = e[Math.floor(Math.random() * e.length)];
            n.parentNode === t.parentNode && t.parentNode.insertBefore(t, n);
            let s = t.querySelectorAll("section");
            s.length && dt(s);
        });
    }
    function ct(e, i) {
        let n = t(Y.wrapper, e), s = n.length, a = ge.isPrintingPDF(), r = !1, o = !1;
        if (s) {
            E.loop && (i >= s && (r = !0), (i %= s) < 0 && (i = s + i, o = !0)), i = Math.max(Math.min(i, s - 1), 0);
            for(let e = 0; e < s; e++){
                let t = n[e], s = E.rtl && !Ye(t);
                t.classList.remove("past"), t.classList.remove("present"), t.classList.remove("future"), t.setAttribute("hidden", ""), t.setAttribute("aria-hidden", "true"), t.querySelector("section") && t.classList.add("stack"), a ? t.classList.add("present") : e < i ? (t.classList.add(s ? "future" : "past"), E.fragments && ht(t)) : e > i ? (t.classList.add(s ? "past" : "future"), E.fragments && ut(t)) : e === i && E.fragments && (r ? ut(t) : o && ht(t));
            }
            let e = n[i], t = e.classList.contains("present");
            e.classList.add("present"), e.removeAttribute("hidden"), e.removeAttribute("aria-hidden"), t || Fe({
                target: e,
                type: "visible",
                bubbles: !1
            });
            let l = e.getAttribute("data-state");
            l && (H = H.concat(l.split(" ")));
        } else i = 0;
        return i;
    }
    function ht(e) {
        t(e, ".fragment").forEach((e)=>{
            e.classList.add("visible"), e.classList.remove("current-fragment");
        });
    }
    function ut(e) {
        t(e, ".fragment.visible").forEach((e)=>{
            e.classList.remove("visible", "current-fragment");
        });
    }
    function gt() {
        let e, i, n = yt(), s = n.length;
        if (s && void 0 !== u) {
            let a = re.isActive() ? 10 : E.viewDistance;
            g && (a = re.isActive() ? 6 : E.mobileViewDistance), ge.isPrintingPDF() && (a = Number.MAX_VALUE);
            for(let r = 0; r < s; r++){
                let o = n[r], l = t(o, "section"), d = l.length;
                if (e = Math.abs((u || 0) - r) || 0, E.loop && (e = Math.abs(((u || 0) - r) % (s - a)) || 0), e < a ? ee.load(o) : ee.unload(o), d) {
                    let t = Xe(o);
                    for(let n = 0; n < d; n++){
                        let s = l[n];
                        i = r === (u || 0) ? Math.abs((v || 0) - n) : Math.abs(n - t), e + i < a ? ee.load(s) : ee.unload(s);
                    }
                }
            }
            St() ? Y.wrapper.classList.add("has-vertical-slides") : Y.wrapper.classList.remove("has-vertical-slides"), Rt() ? Y.wrapper.classList.add("has-horizontal-slides") : Y.wrapper.classList.remove("has-horizontal-slides");
        }
    }
    function vt({ includeFragments: e = !1  } = {}) {
        let t = Y.wrapper.querySelectorAll(A), i = Y.wrapper.querySelectorAll(k), n = {
            left: u > 0,
            right: u < t.length - 1,
            up: v > 0,
            down: v < i.length - 1
        };
        if (E.loop && (t.length > 1 && (n.left = !0, n.right = !0), i.length > 1 && (n.up = !0, n.down = !0)), t.length > 1 && "linear" === E.navigationMode && (n.right = n.right || n.down, n.left = n.left || n.up), !0 === e) {
            let e = ae.availableRoutes();
            n.left = n.left || e.prev, n.up = n.up || e.prev, n.down = n.down || e.next, n.right = n.right || e.next;
        }
        if (E.rtl) {
            let e = n.left;
            n.left = n.right, n.right = e;
        }
        return n;
    }
    function pt(e = m) {
        let t = yt(), i = 0;
        e: for(let n = 0; n < t.length; n++){
            let s = t[n], a = s.querySelectorAll("section");
            for(let t = 0; t < a.length; t++){
                if (a[t] === e) break e;
                "uncounted" !== a[t].dataset.visibility && i++;
            }
            if (s === e) break;
            !1 === s.classList.contains("stack") && "uncounted" !== s.dataset.visibility && i++;
        }
        return i;
    }
    function mt() {
        let e = kt(), t = pt();
        if (m) {
            let e = m.querySelectorAll(".fragment");
            if (e.length > 0) {
                let i = .9;
                t += m.querySelectorAll(".fragment.visible").length / e.length * i;
            }
        }
        return Math.min(t / (e - 1), 1);
    }
    function ft(e) {
        let i, n = u, s = v;
        if (e) {
            let i = Ye(e), a = i ? e.parentNode : e, r = yt();
            n = Math.max(r.indexOf(a), 0), s = void 0, i && (s = Math.max(t(e.parentNode, "section").indexOf(e), 0));
        }
        if (!e && m) {
            if (m.querySelectorAll(".fragment").length > 0) {
                let e = m.querySelector(".current-fragment");
                i = e && e.hasAttribute("data-fragment-index") ? parseInt(e.getAttribute("data-fragment-index"), 10) : m.querySelectorAll(".fragment.visible").length - 1;
            }
        }
        return {
            h: n,
            v: s,
            f: i
        };
    }
    function bt() {
        return t(Y.wrapper, S + ':not(.stack):not([data-visibility="uncounted"])');
    }
    function yt() {
        return t(Y.wrapper, A);
    }
    function wt() {
        return t(Y.wrapper, ".slides>section>section");
    }
    function Et() {
        return t(Y.wrapper, A + ".stack");
    }
    function Rt() {
        return yt().length > 1;
    }
    function St() {
        return wt().length > 1;
    }
    function At() {
        return bt().map((e)=>{
            let t = {};
            for(let i = 0; i < e.attributes.length; i++){
                let n = e.attributes[i];
                t[n.name] = n.value;
            }
            return t;
        });
    }
    function kt() {
        return bt().length;
    }
    function Lt(e, t) {
        let i = yt()[e], n = i && i.querySelectorAll("section");
        return n && n.length && "number" == typeof t ? n ? n[t] : void 0 : i;
    }
    function Ct(e, t) {
        let i = "number" == typeof e ? Lt(e, t) : e;
        if (i) return i.slideBackgroundElement;
    }
    function xt() {
        let e = ft();
        return {
            indexh: e.h,
            indexv: e.v,
            indexf: e.f,
            paused: tt(),
            overview: re.isActive()
        };
    }
    function Pt(e) {
        if ("object" == typeof e) {
            at(n(e.indexh), n(e.indexv), n(e.indexf));
            let t = n(e.paused), i = n(e.overview);
            "boolean" == typeof t && t !== tt() && et(t), "boolean" == typeof i && i !== re.isActive() && re.toggle(i);
        }
    }
    function Nt() {
        if (Mt(), m && !1 !== E.autoSlide) {
            let e = m.querySelector(".current-fragment");
            e || (e = m.querySelector(".fragment"));
            let i = e ? e.getAttribute("data-autoslide") : null, n = m.parentNode ? m.parentNode.getAttribute("data-autoslide") : null, s = m.getAttribute("data-autoslide");
            i ? J = parseInt(i, 10) : s ? J = parseInt(s, 10) : n ? J = parseInt(n, 10) : (J = E.autoSlide, 0 === m.querySelectorAll(".fragment").length && t(m, "video, audio").forEach((e)=>{
                e.hasAttribute("data-autoplay") && J && 1e3 * e.duration / e.playbackRate > J && (J = 1e3 * e.duration / e.playbackRate + 1e3);
            })), !J || Z || tt() || re.isActive() || Ge() && !ae.availableRoutes().next && !0 !== E.loop || (G = setTimeout(()=>{
                "function" == typeof E.autoSlideMethod ? E.autoSlideMethod() : Ot(), Nt();
            }, J), Q = Date.now()), f && f.setPlaying(-1 !== G);
        }
    }
    function Mt() {
        clearTimeout(G), G = -1;
    }
    function It() {
        J && !Z && (Z = !0, Fe({
            type: "autoslidepaused"
        }), clearTimeout(G), f && f.setPlaying(!1));
    }
    function Dt() {
        J && Z && (Z = !1, Fe({
            type: "autoslideresumed"
        }), Nt());
    }
    function Tt({ skipFragments: e = !1  } = {}) {
        x.hasNavigatedHorizontally = !0, E.rtl ? (re.isActive() || e || !1 === ae.next()) && vt().left && at(u + 1, "grid" === E.navigationMode ? v : void 0) : (re.isActive() || e || !1 === ae.prev()) && vt().left && at(u - 1, "grid" === E.navigationMode ? v : void 0);
    }
    function Ft({ skipFragments: e = !1  } = {}) {
        x.hasNavigatedHorizontally = !0, E.rtl ? (re.isActive() || e || !1 === ae.prev()) && vt().right && at(u - 1, "grid" === E.navigationMode ? v : void 0) : (re.isActive() || e || !1 === ae.next()) && vt().right && at(u + 1, "grid" === E.navigationMode ? v : void 0);
    }
    function zt({ skipFragments: e = !1  } = {}) {
        (re.isActive() || e || !1 === ae.prev()) && vt().up && at(u, v - 1);
    }
    function Ht({ skipFragments: e = !1  } = {}) {
        x.hasNavigatedVertically = !0, (re.isActive() || e || !1 === ae.next()) && vt().down && at(u, v + 1);
    }
    function Bt({ skipFragments: e = !1  } = {}) {
        if (e || !1 === ae.prev()) {
            if (vt().up) zt({
                skipFragments: e
            });
            else {
                let i;
                if (i = E.rtl ? t(Y.wrapper, A + ".future").pop() : t(Y.wrapper, A + ".past").pop(), i && i.classList.contains("stack")) {
                    let e = i.querySelectorAll("section").length - 1 || void 0;
                    at(u - 1, e);
                } else Tt({
                    skipFragments: e
                });
            }
        }
    }
    function Ot({ skipFragments: e = !1  } = {}) {
        if (x.hasNavigatedHorizontally = !0, x.hasNavigatedVertically = !0, e || !1 === ae.next()) {
            let t = vt();
            t.down && t.right && E.loop && _e() && (t.down = !1), t.down ? Ht({
                skipFragments: e
            }) : E.rtl ? Tt({
                skipFragments: e
            }) : Ft({
                skipFragments: e
            });
        }
    }
    function qt(e) {
        E.autoSlideStoppable && It();
    }
    function Ut(e) {
        let t = e.data;
        if ("string" == typeof t && "{" === t.charAt(0) && "}" === t.charAt(t.length - 1) && (t = JSON.parse(t), t.method && "function" == typeof h[t.method])) {
            if (!1 === L.test(t.method)) {
                const e = h[t.method].apply(h, t.args);
                ze("callback", {
                    method: t.method,
                    result: e
                });
            } else console.warn('reveal.js: "' + t.method + '" is is blacklisted from the postMessage API');
        }
    }
    function jt(e) {
        "running" === _ && /section/gi.test(e.target.nodeName) && (_ = "idle", Fe({
            type: "slidetransitionend",
            data: {
                indexh: u,
                indexv: v,
                previousSlide: p,
                currentSlide: m
            }
        }));
    }
    function Wt(e) {
        const t = r(e.target, 'a[href^="#"]');
        if (t) {
            const i = t.getAttribute("href"), n = le.getIndicesFromHash(i);
            n && (h.slide(n.h, n.v, n.f), e.preventDefault());
        }
    }
    function Kt(e) {
        We();
    }
    function Vt(e) {
        !1 === document.hidden && document.activeElement !== document.body && ("function" == typeof document.activeElement.blur && document.activeElement.blur(), document.body.focus());
    }
    function $t(e) {
        (document.fullscreenElement || document.webkitFullscreenElement) === Y.wrapper && (e.stopImmediatePropagation(), setTimeout(()=>{
            h.layout(), h.focus.focus();
        }, 1));
    }
    function Xt(e) {
        if (e.currentTarget && e.currentTarget.hasAttribute("href")) {
            let t = e.currentTarget.getAttribute("href");
            t && (Oe(t), e.preventDefault());
        }
    }
    function Yt(e) {
        Ge() && !1 === E.loop ? (at(0, 0), Dt()) : Z ? Dt() : It();
    }
    const _t = {
        VERSION: X,
        initialize: fe,
        configure: xe,
        destroy: Me,
        sync: rt,
        syncSlide: ot,
        syncFragments: ae.sync.bind(ae),
        slide: at,
        left: Tt,
        right: Ft,
        up: zt,
        down: Ht,
        prev: Bt,
        next: Ot,
        navigateLeft: Tt,
        navigateRight: Ft,
        navigateUp: zt,
        navigateDown: Ht,
        navigatePrev: Bt,
        navigateNext: Ot,
        navigateFragment: ae.goto.bind(ae),
        prevFragment: ae.prev.bind(ae),
        nextFragment: ae.next.bind(ae),
        on: Ie,
        off: De,
        addEventListener: Ie,
        removeEventListener: De,
        layout: We,
        shuffle: dt,
        availableRoutes: vt,
        availableFragments: ae.availableRoutes.bind(ae),
        toggleHelp: qe,
        toggleOverview: re.toggle.bind(re),
        togglePause: et,
        toggleAutoSlide: nt,
        toggleJumpToSlide: it,
        isFirstSlide: Je,
        isLastSlide: Ge,
        isLastVerticalSlide: _e,
        isVerticalSlide: Ye,
        isPaused: tt,
        isAutoSliding: st,
        isSpeakerNotes: me.isSpeakerNotesWindow.bind(me),
        isOverview: re.isActive.bind(re),
        isFocused: ve.isFocused.bind(ve),
        isPrintingPDF: ge.isPrintingPDF.bind(ge),
        isReady: ()=>C,
        loadSlide: ee.load.bind(ee),
        unloadSlide: ee.unload.bind(ee),
        showPreview: Oe,
        hidePreview: je,
        addEventListeners: Pe,
        removeEventListeners: Ne,
        dispatchEvent: Fe,
        getState: xt,
        setState: Pt,
        getProgress: mt,
        getIndices: ft,
        getSlidesAttributes: At,
        getSlidePastCount: pt,
        getTotalSlides: kt,
        getSlide: Lt,
        getPreviousSlide: ()=>p,
        getCurrentSlide: ()=>m,
        getSlideBackground: Ct,
        getSlideNotes: me.getSlideNotes.bind(me),
        getSlides: bt,
        getHorizontalSlides: yt,
        getVerticalSlides: wt,
        hasHorizontalSlides: Rt,
        hasVerticalSlides: St,
        hasNavigatedHorizontally: ()=>x.hasNavigatedHorizontally,
        hasNavigatedVertically: ()=>x.hasNavigatedVertically,
        addKeyBinding: oe.addKeyBinding.bind(oe),
        removeKeyBinding: oe.removeKeyBinding.bind(oe),
        triggerKey: oe.triggerKey.bind(oe),
        registerKeyboardShortcut: oe.registerKeyboardShortcut.bind(oe),
        getComputedSlideSize: Ve,
        getScale: ()=>U,
        getConfig: ()=>E,
        getQueryHash: d,
        getSlidePath: le.getHash.bind(le),
        getRevealElement: ()=>a,
        getSlidesElement: ()=>Y.slides,
        getViewportElement: ()=>Y.viewport,
        getBackgroundsElement: ()=>se.element,
        registerPlugin: ue.registerPlugin.bind(ue),
        hasPlugin: ue.hasPlugin.bind(ue),
        getPlugin: ue.getPlugin.bind(ue),
        getPlugins: ue.getRegisteredPlugins.bind(ue)
    };
    return e(h, {
        ..._t,
        announceStatus: Se,
        getStatusText: Ae,
        print: ge,
        focus: ve,
        progress: ce,
        controls: de,
        location: le,
        overview: re,
        fragments: ae,
        slideContent: ee,
        slideNumber: te,
        onUserInput: qt,
        closeOverlay: je,
        updateSlidesVisibility: gt,
        layoutSlideContents: Ke,
        transformSlides: Te,
        cueAutoSlide: Nt,
        cancelAutoSlide: Mt
    }), _t;
}
let _ = Y, J = [];
_.initialize = (e)=>(Object.assign(_, new Y(document.querySelector(".reveal"), e)), J.map((e)=>e(_)), _.initialize()), [
    "configure",
    "on",
    "off",
    "addEventListener",
    "removeEventListener",
    "registerPlugin"
].forEach((e)=>{
    _[e] = (...t)=>{
        J.push((i)=>i[e].call(null, ...t));
    };
}), _.isReady = ()=>!1, _.VERSION = X;
exports.default = _;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, "__esModule", {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === "default" || key === "__esModule" || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}]},["2UeK4","bB7Pu"], "bB7Pu", "parcelRequire0400")

//# sourceMappingURL=Saper.3d214d75.js.map
