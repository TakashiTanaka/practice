/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js":
/*!************************************************************************!*\
  !*** ./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js ***!
  \************************************************************************/
/***/ (function(module, exports, __webpack_require__) {

eval("var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*! smooth-scroll v16.1.3 | (c) 2020 Chris Ferdinandi | MIT License | http://github.com/cferdinandi/smooth-scroll */\nwindow.Element && !Element.prototype.closest && (Element.prototype.closest = function (e) {\n  var t,\n      n = (this.document || this.ownerDocument).querySelectorAll(e),\n      o = this;\n\n  do {\n    for (t = n.length; 0 <= --t && n.item(t) !== o;);\n  } while (t < 0 && (o = o.parentElement));\n\n  return o;\n}), function () {\n  if (\"function\" == typeof window.CustomEvent) return;\n\n  function e(e, t) {\n    t = t || {\n      bubbles: !1,\n      cancelable: !1,\n      detail: void 0\n    };\n    var n = document.createEvent(\"CustomEvent\");\n    return n.initCustomEvent(e, t.bubbles, t.cancelable, t.detail), n;\n  }\n\n  e.prototype = window.Event.prototype, window.CustomEvent = e;\n}(), function () {\n  for (var r = 0, e = [\"ms\", \"moz\", \"webkit\", \"o\"], t = 0; t < e.length && !window.requestAnimationFrame; ++t) window.requestAnimationFrame = window[e[t] + \"RequestAnimationFrame\"], window.cancelAnimationFrame = window[e[t] + \"CancelAnimationFrame\"] || window[e[t] + \"CancelRequestAnimationFrame\"];\n\n  window.requestAnimationFrame || (window.requestAnimationFrame = function (e, t) {\n    var n = new Date().getTime(),\n        o = Math.max(0, 16 - (n - r)),\n        a = window.setTimeout(function () {\n      e(n + o);\n    }, o);\n    return r = n + o, a;\n  }), window.cancelAnimationFrame || (window.cancelAnimationFrame = function (e) {\n    clearTimeout(e);\n  });\n}(), function (e, t) {\n   true ? !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {\n    return t(e);\n  }).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),\n\t\t__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)) : 0;\n}(\"undefined\" != typeof __webpack_require__.g ? __webpack_require__.g : \"undefined\" != typeof window ? window : this, function (M) {\n  \"use strict\";\n\n  var q = {\n    ignore: \"[data-scroll-ignore]\",\n    header: null,\n    topOnEmptyHash: !0,\n    speed: 500,\n    speedAsDuration: !1,\n    durationMax: null,\n    durationMin: null,\n    clip: !0,\n    offset: 0,\n    easing: \"easeInOutCubic\",\n    customEasing: null,\n    updateURL: !0,\n    popstate: !0,\n    emitEvents: !0\n  },\n      I = function () {\n    var n = {};\n    return Array.prototype.forEach.call(arguments, function (e) {\n      for (var t in e) {\n        if (!e.hasOwnProperty(t)) return;\n        n[t] = e[t];\n      }\n    }), n;\n  },\n      r = function (e) {\n    \"#\" === e.charAt(0) && (e = e.substr(1));\n\n    for (var t, n = String(e), o = n.length, a = -1, r = \"\", i = n.charCodeAt(0); ++a < o;) {\n      if (0 === (t = n.charCodeAt(a))) throw new InvalidCharacterError(\"Invalid character: the input contains U+0000.\");\n      1 <= t && t <= 31 || 127 == t || 0 === a && 48 <= t && t <= 57 || 1 === a && 48 <= t && t <= 57 && 45 === i ? r += \"\\\\\" + t.toString(16) + \" \" : r += 128 <= t || 45 === t || 95 === t || 48 <= t && t <= 57 || 65 <= t && t <= 90 || 97 <= t && t <= 122 ? n.charAt(a) : \"\\\\\" + n.charAt(a);\n    }\n\n    return \"#\" + r;\n  },\n      F = function () {\n    return Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight);\n  },\n      L = function (e) {\n    return e ? (t = e, parseInt(M.getComputedStyle(t).height, 10) + e.offsetTop) : 0;\n    var t;\n  },\n      x = function (e, t, n) {\n    0 === e && document.body.focus(), n || (e.focus(), document.activeElement !== e && (e.setAttribute(\"tabindex\", \"-1\"), e.focus(), e.style.outline = \"none\"), M.scrollTo(0, t));\n  },\n      H = function (e, t, n, o) {\n    if (t.emitEvents && \"function\" == typeof M.CustomEvent) {\n      var a = new CustomEvent(e, {\n        bubbles: !0,\n        detail: {\n          anchor: n,\n          toggle: o\n        }\n      });\n      document.dispatchEvent(a);\n    }\n  };\n\n  return function (o, e) {\n    var b,\n        a,\n        A,\n        O,\n        C = {};\n    C.cancelScroll = function (e) {\n      cancelAnimationFrame(O), O = null, e || H(\"scrollCancel\", b);\n    }, C.animateScroll = function (a, r, e) {\n      C.cancelScroll();\n      var i = I(b || q, e || {}),\n          c = \"[object Number]\" === Object.prototype.toString.call(a),\n          t = c || !a.tagName ? null : a;\n\n      if (c || t) {\n        var s = M.pageYOffset;\n        i.header && !A && (A = document.querySelector(i.header));\n\n        var n,\n            o,\n            u,\n            l,\n            m,\n            d,\n            f,\n            h,\n            p = L(A),\n            g = c ? a : function (e, t, n, o) {\n          var a = 0;\n          if (e.offsetParent) for (; a += e.offsetTop, e = e.offsetParent;);\n          return a = Math.max(a - t - n, 0), o && (a = Math.min(a, F() - M.innerHeight)), a;\n        }(t, p, parseInt(\"function\" == typeof i.offset ? i.offset(a, r) : i.offset, 10), i.clip),\n            y = g - s,\n            v = F(),\n            w = 0,\n            S = (n = y, u = (o = i).speedAsDuration ? o.speed : Math.abs(n / 1e3 * o.speed), o.durationMax && u > o.durationMax ? o.durationMax : o.durationMin && u < o.durationMin ? o.durationMin : parseInt(u, 10)),\n            E = function (e) {\n          var t, n, o;\n          l || (l = e), w += e - l, d = s + y * (n = m = 1 < (m = 0 === S ? 0 : w / S) ? 1 : m, \"easeInQuad\" === (t = i).easing && (o = n * n), \"easeOutQuad\" === t.easing && (o = n * (2 - n)), \"easeInOutQuad\" === t.easing && (o = n < .5 ? 2 * n * n : (4 - 2 * n) * n - 1), \"easeInCubic\" === t.easing && (o = n * n * n), \"easeOutCubic\" === t.easing && (o = --n * n * n + 1), \"easeInOutCubic\" === t.easing && (o = n < .5 ? 4 * n * n * n : (n - 1) * (2 * n - 2) * (2 * n - 2) + 1), \"easeInQuart\" === t.easing && (o = n * n * n * n), \"easeOutQuart\" === t.easing && (o = 1 - --n * n * n * n), \"easeInOutQuart\" === t.easing && (o = n < .5 ? 8 * n * n * n * n : 1 - 8 * --n * n * n * n), \"easeInQuint\" === t.easing && (o = n * n * n * n * n), \"easeOutQuint\" === t.easing && (o = 1 + --n * n * n * n * n), \"easeInOutQuint\" === t.easing && (o = n < .5 ? 16 * n * n * n * n * n : 1 + 16 * --n * n * n * n * n), t.customEasing && (o = t.customEasing(n)), o || n), M.scrollTo(0, Math.floor(d)), function (e, t) {\n            var n = M.pageYOffset;\n            if (e == t || n == t || (s < t && M.innerHeight + n) >= v) return C.cancelScroll(!0), x(a, t, c), H(\"scrollStop\", i, a, r), !(O = l = null);\n          }(d, g) || (O = M.requestAnimationFrame(E), l = e);\n        };\n\n        0 === M.pageYOffset && M.scrollTo(0, 0), f = a, h = i, c || history.pushState && h.updateURL && history.pushState({\n          smoothScroll: JSON.stringify(h),\n          anchor: f.id\n        }, document.title, f === document.documentElement ? \"#top\" : \"#\" + f.id), \"matchMedia\" in M && M.matchMedia(\"(prefers-reduced-motion)\").matches ? x(a, Math.floor(g), !1) : (H(\"scrollStart\", i, a, r), C.cancelScroll(!0), M.requestAnimationFrame(E));\n      }\n    };\n\n    var t = function (e) {\n      if (!e.defaultPrevented && !(0 !== e.button || e.metaKey || e.ctrlKey || e.shiftKey) && \"closest\" in e.target && (a = e.target.closest(o)) && \"a\" === a.tagName.toLowerCase() && !e.target.closest(b.ignore) && a.hostname === M.location.hostname && a.pathname === M.location.pathname && /#/.test(a.href)) {\n        var t, n;\n\n        try {\n          t = r(decodeURIComponent(a.hash));\n        } catch (e) {\n          t = r(a.hash);\n        }\n\n        if (\"#\" === t) {\n          if (!b.topOnEmptyHash) return;\n          n = document.documentElement;\n        } else n = document.querySelector(t);\n\n        (n = n || \"#top\" !== t ? n : document.documentElement) && (e.preventDefault(), function (e) {\n          if (history.replaceState && e.updateURL && !history.state) {\n            var t = M.location.hash;\n            t = t || \"\", history.replaceState({\n              smoothScroll: JSON.stringify(e),\n              anchor: t || M.pageYOffset\n            }, document.title, t || M.location.href);\n          }\n        }(b), C.animateScroll(n, a));\n      }\n    },\n        n = function (e) {\n      if (null !== history.state && history.state.smoothScroll && history.state.smoothScroll === JSON.stringify(b)) {\n        var t = history.state.anchor;\n        \"string\" == typeof t && t && !(t = document.querySelector(r(history.state.anchor))) || C.animateScroll(t, null, {\n          updateURL: !1\n        });\n      }\n    };\n\n    C.destroy = function () {\n      b && (document.removeEventListener(\"click\", t, !1), M.removeEventListener(\"popstate\", n, !1), C.cancelScroll(), O = A = a = b = null);\n    };\n\n    return function () {\n      if (!(\"querySelector\" in document && \"addEventListener\" in M && \"requestAnimationFrame\" in M && \"closest\" in M.Element.prototype)) throw \"Smooth Scroll: This browser does not support the required JavaScript methods and browser APIs.\";\n      C.destroy(), b = I(q, e || {}), A = b.header ? document.querySelector(b.header) : null, document.addEventListener(\"click\", t, !1), b.updateURL && b.popstate && M.addEventListener(\"popstate\", n, !1);\n    }(), C;\n  };\n});\n\n//# sourceURL=webpack://my-webpack-project/./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js?");

/***/ }),

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! smooth-scroll */ \"./node_modules/smooth-scroll/dist/smooth-scroll.polyfills.min.js\");\n/* harmony import */ var smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smooth_scroll__WEBPACK_IMPORTED_MODULE_0__);\n// SmoothScrollを読み込み\n\n/** @type {HTMLElement} - トップへ戻るボタン */\n\nvar toTopBtn = document.querySelector('#go-to-top');\n/** @type {SmoothScroll} - SmoothScrollオブジェクトのインスタンス */\n\nvar scroll = new (smooth_scroll__WEBPACK_IMPORTED_MODULE_0___default())(); // ボタンにクリックイベントを設定\n\ntoTopBtn.addEventListener('click', function () {\n  scroll.animateScroll(0, null, {\n    speed: 500,\n    // 移動スピード\n    easing: 'easeInOutQuint' // イージングを指定\n\n  });\n});\n\n//# sourceURL=webpack://my-webpack-project/./src/main.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/main.js");
/******/ 	
/******/ })()
;