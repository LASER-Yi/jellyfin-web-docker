"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[67801,72232,22907,94891,94250,73710,23945,95671],{72232:function(a,e,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var r;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,n=null!=t&&t.width?String(t.width):i;r=a.formattingValues[n]||a.formattingValues[i]}else{var u=a.defaultWidth,d=null!=t&&t.width?String(t.width):a.defaultWidth;r=a.values[d]||a.values[u]}return r[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},67801:function(a,e,t){t(99785),t(95163);var r=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=r(t(72232)),n={ordinalNumber:function(a,e){return Number(a)+"."},era:(0,i.default)({values:{narrow:["k.a.","k.o."],abbreviated:["k.a.","k.o."],wide:["kristo aurretik","kristo ondoren"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["1H","2H","3H","4H"],wide:["1. hiruhilekoa","2. hiruhilekoa","3. hiruhilekoa","4. hiruhilekoa"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["u","o","m","a","m","e","u","a","i","u","a","a"],abbreviated:["urt","ots","mar","api","mai","eka","uzt","abu","ira","urr","aza","abe"],wide:["urtarrila","otsaila","martxoa","apirila","maiatza","ekaina","uztaila","abuztua","iraila","urria","azaroa","abendua"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["i","a","a","a","o","o","l"],short:["ig","al","as","az","og","or","lr"],abbreviated:["iga","ast","ast","ast","ost","ost","lar"],wide:["igandea","astelehena","asteartea","asteazkena","osteguna","ostirala","larunbata"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goiza",afternoon:"arratsaldea",evening:"arratsaldea",night:"gaua"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"ge",noon:"eg",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},abbreviated:{am:"AM",pm:"PM",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"},wide:{am:"a.m.",pm:"p.m.",midnight:"gauerdia",noon:"eguerdia",morning:"goizean",afternoon:"arratsaldean",evening:"arratsaldean",night:"gauean"}},defaultFormattingWidth:"wide"})};e.default=n,a.exports=e.default}}]);