"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[21762,10156,71097],{21762:function(e,t,a){a(99785);var r=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=r(a(10156)),s=r(a(42298)),u=["неделя","понеделник","вторник","сряда","четвъртък","петък","събота"];function c(e){var t=u[e];return 2===e?"'във "+t+" в' p":"'в "+t+" в' p"}var o={lastWeek:function(e,t,a){var r=(0,n.default)(e),o=r.getUTCDay();return(0,s.default)(r,t,a)?c(o):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'миналата "+t+" в' p";case 1:case 2:case 4:case 5:return"'миналия "+t+" в' p"}}(o)},yesterday:"'вчера в' p",today:"'днес в' p",tomorrow:"'утре в' p",nextWeek:function(e,t,a){var r=(0,n.default)(e),o=r.getUTCDay();return(0,s.default)(r,t,a)?c(o):function(e){var t=u[e];switch(e){case 0:case 3:case 6:return"'следващата "+t+" в' p";case 1:case 2:case 4:case 5:return"'следващия "+t+" в' p"}}(o)},other:"P"};t.default=function(e,t,a,r){var n=o[e];return"function"==typeof n?n(t,a,r):n},e.exports=t.default},10156:function(e,t,a){a(99785),a(63238);var r=a(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,s.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,n.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var n=r(a(7501)),s=r(a(76525));e.exports=t.default}}]);