"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53402,33188,10807],{24999:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(56974)),o=["nedeľu","pondelok","utorok","stredu","štvrtok","piatok","sobotu"];function u(e){return 4===e?"'vo' eeee 'o' p":"'v "+o[e]+" o' p"}var s={lastWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?u(n):function(e){var t=o[e];switch(e){case 0:case 3:case 6:return"'minulú "+t+" o' p";default:return"'minulý' eeee 'o' p"}}(n)},yesterday:"'včera o' p",today:"'dnes o' p",tomorrow:"'zajtra o' p",nextWeek:function(e,t,a){var n=e.getUTCDay();return(0,r.default)(e,t,a)?u(n):function(e){var t=o[e];switch(e){case 0:case 4:case 6:return"'budúcu "+t+" o' p";default:return"'budúci' eeee 'o' p"}}(n)},other:"P"};t.default=function(e,t,a,n){var r=s[e];return"function"==typeof r?r(t,a,n):r},e.exports=t.default},33188:function(e,t,a){a(36947),a(78557),a(73687);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){(0,o.default)(1,arguments);var t=Object.prototype.toString.call(e);return e instanceof Date||"object"===(0,r.default)(e)&&"[object Date]"===t?new Date(e.getTime()):"number"==typeof e||"[object Number]"===t?new Date(e):("string"!=typeof e&&"[object String]"!==t||"undefined"==typeof console||(console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments"),console.warn((new Error).stack)),new Date(NaN))};var r=n(a(10564)),o=n(a(23058));e.exports=t.default}}]);