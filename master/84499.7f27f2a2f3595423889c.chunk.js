"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84499,94160],{94160:function(e,n,a){a(44962),a(36947),a(78557),a(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,a){var i;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var t=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):t;i=e.formattingValues[r]||e.formattingValues[t]}else{var d=e.defaultWidth,m=null!=a&&a.width?String(a.width):e.defaultWidth;i=e.values[m]||e.values[d]}return i[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},84499:function(e,n,a){a(94),a(36947);var i=a(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(a(94160)),r={ordinalNumber:function(e,n){var a,i=Number(e),t=null==n?void 0:n.unit;switch(i){case 1:a="èr";break;case 2:a="nd";break;default:a="en"}return"year"!==t&&"week"!==t&&"hour"!==t&&"minute"!==t&&"second"!==t||(a+="a"),i+a},era:(0,t.default)({values:{narrow:["ab. J.C.","apr. J.C."],abbreviated:["ab. J.C.","apr. J.C."],wide:["abans Jèsus-Crist","après Jèsus-Crist"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["T1","T2","T3","T4"],abbreviated:["1èr trim.","2nd trim.","3en trim.","4en trim."],wide:["1èr trimèstre","2nd trimèstre","3en trimèstre","4en trimèstre"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,t.default)({values:{narrow:["GN","FB","MÇ","AB","MA","JN","JL","AG","ST","OC","NV","DC"],abbreviated:["gen.","febr.","març","abr.","mai","junh","jul.","ag.","set.","oct.","nov.","dec."],wide:["genièr","febrièr","març","abril","mai","junh","julhet","agost","setembre","octòbre","novembre","decembre"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],short:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],abbreviated:["dg.","dl.","dm.","dc.","dj.","dv.","ds."],wide:["dimenge","diluns","dimars","dimècres","dijòus","divendres","dissabte"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"am",pm:"pm",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"},abbreviated:{am:"a.m.",pm:"p.m.",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"},wide:{am:"a.m.",pm:"p.m.",midnight:"mièjanuèch",noon:"miègjorn",morning:"matin",afternoon:"aprèp-miègjorn",evening:"vèspre",night:"nuèch"}},defaultWidth:"wide",formattingValues:{narrow:{am:"am",pm:"pm",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"},abbreviated:{am:"AM",pm:"PM",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"},wide:{am:"ante meridiem",pm:"post meridiem",midnight:"mièjanuèch",noon:"miègjorn",morning:"del matin",afternoon:"de l’aprèp-miègjorn",evening:"del ser",night:"de la nuèch"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);