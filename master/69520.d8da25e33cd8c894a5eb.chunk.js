(self.webpackChunk=self.webpackChunk||[]).push([[69520,33188,10807],{97293:function(e,t,n){"use strict";n(36947);var o=n(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=o(n(56974)),r={masculine:"ostatni",feminine:"ostatnia"},s={masculine:"ten",feminine:"ta"},i={masculine:"następny",feminine:"następna"},u={0:"feminine",1:"masculine",2:"masculine",3:"feminine",4:"masculine",5:"masculine",6:"feminine"};function f(e,t,n,o){var f;if((0,a.default)(t,n,o))f=s;else if("lastWeek"===e)f=r;else{if("nextWeek"!==e)throw new Error("Cannot determine adjectives for token ".concat(e));f=i}var c=t.getUTCDay(),l=f[u[c]];return"'".concat(l,"' eeee 'o' p")}var c={lastWeek:f,yesterday:"'wczoraj o' p",today:"'dzisiaj o' p",tomorrow:"'jutro o' p",nextWeek:f,other:"P"};t.default=function(e,t,n,o){var a=c[e];return"function"==typeof a?a(e,t,n,o):a},e.exports=t.default},33188:function(e,t,n){"use strict";n(36947),n(78557),n(73687);var o=n(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,r.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,a.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var a=o(n(10564)),r=o(n(23058));e.exports=t.default},10564:function(e){function t(n){return e.exports=t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports}}]);