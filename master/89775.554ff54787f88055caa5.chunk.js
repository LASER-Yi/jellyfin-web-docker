(self.webpackChunk=self.webpackChunk||[]).push([[89775,94160,19863,42244,75101,97482,9387,31768],{94160:function(a,e,t){"use strict";t(44962),t(36947),t(78557),t(82367),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var r;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var n=a.defaultFormattingWidth||a.defaultWidth,i=null!=t&&t.width?String(t.width):n;r=a.formattingValues[i]||a.formattingValues[n]}else{var u=a.defaultWidth,o=null!=t&&t.width?String(t.width):a.defaultWidth;r=a.values[o]||a.values[u]}return r[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},89775:function(a,e,t){"use strict";t(94),t(36947);var r=t(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t(94160)),i={ordinalNumber:function(a,e){return Number(a)+"."},era:(0,n.default)({values:{narrow:["k.a.","k.o."],abbreviated:["k.a.","k.o."],wide:["kristo aurretik","kristo ondoren"]},defaultWidth:"wide"}),quarter:(0,n.default)({values:{narrow:["1","2","3","4"],abbreviated:["1H","2H","3H","4H"],wide:["1. hiruhilekoa","2. hiruhilekoa","3. hiruhilekoa","4. hiruhilekoa"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,n.default)({values:{narrow:["u","o","m","a","m","e","u","a","i","u","a","a"],abbreviated:["urt","ots","mar","api","mai","eka","uzt","abu","ira","urr","aza","abe"],wide:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"]},defaultWidth:"wide"}),day:(0,n.default)({values:{narrow:["i","a","a","a","o","o","l"],short:["ig","al","as","az","og","or","lr"],abbreviated:["iga","ast","ast","ast","ost","ost","lar"],wide:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"]},defaultWidth:"wide"}),dayPeriod:(0,n.default)({values:{narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"}},defaultFormattingWidth:"wide"})};e.default=i,a.exports=e.default},96784:function(a){a.exports=function(a){return a&&a.__esModule?a:{default:a}},a.exports.__esModule=!0,a.exports.default=a.exports}}]);