"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[15995],{15995:function(t,e,a){function r(t,e){for(var a in t)if(t.hasOwnProperty(a)&&e(t[a]))return a}function n(t,e){for(var a=0;a<t.length;a++)if(e(t[a]))return a}a(99785),a(52077),a(1203),a(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(e){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},u=a.width,l=u&&t.matchPatterns[u]||t.matchPatterns[t.defaultMatchWidth],c=e.match(l);if(!c)return null;var s,f=c[0],i=u&&t.parsePatterns[u]||t.parsePatterns[t.defaultParseWidth],h=Array.isArray(i)?n(i,(function(t){return t.test(f)})):r(i,(function(t){return t.test(f)}));s=t.valueCallback?t.valueCallback(h):h,s=a.valueCallback?a.valueCallback(s):s;var o=e.slice(f.length);return{value:s,rest:o}}},t.exports=e.default}}]);