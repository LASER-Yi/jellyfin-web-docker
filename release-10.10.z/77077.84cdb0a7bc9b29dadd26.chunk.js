"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[77077,37658,94160,7184,83518,9911],{37658:function(t,e,a){a(36947),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=e.width?String(e.width):t.defaultWidth;return t.formats[a]||t.formats[t.defaultWidth]}},t.exports=e.default},94160:function(t,e,a){a(44962),a(36947),a(78557),a(82367),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e,a){var l;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&t.formattingValues){var r=t.defaultFormattingWidth||t.defaultWidth,n=null!=a&&a.width?String(a.width):r;l=t.formattingValues[n]||t.formattingValues[r]}else{var u=t.defaultWidth,i=null!=a&&a.width?String(a.width):t.defaultWidth;l=t.values[i]||t.values[u]}return l[t.argumentCallback?t.argumentCallback(e):e]}},t.exports=e.default},7184:function(t,e,a){a(89336),a(36947),a(95021),a(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=a.width,r=l&&t.matchPatterns[l]||t.matchPatterns[t.defaultMatchWidth],n=e.match(r);if(!n)return null;var u,i=n[0],f=l&&t.parsePatterns[l]||t.parsePatterns[t.defaultParseWidth],d=Array.isArray(f)?function(t,e){for(var a=0;a<t.length;a++)if(t[a].test(i))return a}(f):function(t,e){for(var a in t)if(t.hasOwnProperty(a)&&t[a].test(i))return a}(f);return u=t.valueCallback?t.valueCallback(d):d,{value:u=a.valueCallback?a.valueCallback(u):u,rest:e.slice(i.length)}}},t.exports=e.default},83518:function(t,e,a){a(89336),a(36947),a(95021),a(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},l=e.match(t.matchPattern);if(!l)return null;var r=l[0],n=e.match(t.parsePattern);if(!n)return null;var u=t.valueCallback?t.valueCallback(n[0]):n[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:e.slice(r.length)}}},t.exports=e.default}}]);