"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80745,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,e,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],d=e.match(r);if(!d)return null;var n,l=d[0],u=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(u)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(l))return t}(u):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(l))return t}(u);return n=a.valueCallback?a.valueCallback(s):s,{value:n=t.valueCallback?t.valueCallback(n):n,rest:e.slice(l.length)}}},a.exports=e.default},68931:function(a,e,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var r=i[0],d=e.match(a.parsePattern);if(!d)return null;var n=a.valueCallback?a.valueCallback(d[0]):d[0];return{value:n=t.valueCallback?t.valueCallback(n):n,rest:e.slice(r.length)}}},a.exports=e.default},80745:function(a,e,t){t(99785),t(32081);var i=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t(15995)),d={ordinalNumber:(0,i(t(68931)).default)({matchPattern:/^(\d+)(èr|nd|en)?[a]?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ab\.J\.C|apr\.J\.C|apr\.J\.-C)/i,abbreviated:/^(ab\.J\.-C|ab\.J-C|apr\.J\.-C|apr\.J-C|ap\.J-C)/i,wide:/^(abans Jèsus-Crist|après Jèsus-Crist)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ab/i,/^ap/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^T[1234]/i,abbreviated:/^[1234](èr|nd|en)? trim\.?/i,wide:/^[1234](èr|nd|en)? trimèstre/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(GN|FB|MÇ|AB|MA|JN|JL|AG|ST|OC|NV|DC)/i,abbreviated:/^(gen|febr|març|abr|mai|junh|jul|ag|set|oct|nov|dec)\.?/i,wide:/^(genièr|febrièr|març|abril|mai|junh|julhet|agost|setembre|octòbre|novembre|decembre)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^g/i,/^f/i,/^ma[r?]|MÇ/i,/^ab/i,/^ma[i?]/i,/^ju[n?]|JN/i,/^ju[l?]|JL/i,/^ag/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^d[glmcjvs]\.?/i,short:/^d[glmcjvs]\.?/i,abbreviated:/^d[glmcjvs]\.?/i,wide:/^(dimenge|diluns|dimars|dimècres|dijòus|divendres|dissabte)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],short:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],abbreviated:[/^dg/i,/^dl/i,/^dm/i,/^dc/i,/^dj/i,/^dv/i,/^ds/i],any:[/^dg|dime/i,/^dl|dil/i,/^dm|dima/i,/^dc|dimè/i,/^dj|dij/i,/^dv|div/i,/^ds|dis/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/(^(a\.?m|p\.?m))|(ante meridiem|post meridiem)|((del |de la |de l’)(matin|aprèp-miègjorn|vèspre|ser|nuèch))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/(^a)|ante meridiem/i,pm:/(^p)|post meridiem/i,midnight:/^mièj/i,noon:/^mièg/i,morning:/matin/i,afternoon:/aprèp-miègjorn/i,evening:/vèspre|ser/i,night:/nuèch/i}},defaultParseWidth:"any"})};e.default=d,a.exports=e.default}}]);