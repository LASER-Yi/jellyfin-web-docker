"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44426,94160],{94160:function(a,n,e){e(44962),e(36947),e(78557),e(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(a){return function(n,e){var i;if("formatting"===(null!=e&&e.context?String(e.context):"standalone")&&a.formattingValues){var t=a.defaultFormattingWidth||a.defaultWidth,r=null!=e&&e.width?String(e.width):t;i=a.formattingValues[r]||a.formattingValues[t]}else{var d=a.defaultWidth,h=null!=e&&e.width?String(e.width):a.defaultWidth;i=a.values[h]||a.values[d]}return i[a.argumentCallback?a.argumentCallback(n):n]}},a.exports=n.default},44426:function(a,n,e){e(94),e(36947);var i=e(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=i(e(94160)),r={ordinalNumber:function(a){var n=Number(a),e=n%100;if(e>20||e<10)switch(e%10){case 1:return n+"d";case 2:return n+"na"}return 12===e?n+"na":n+"mh"},era:(0,t.default)({values:{narrow:["R","A"],abbreviated:["RC","AD"],wide:["ro Chrìosta","anno domini"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["C1","C2","C3","C4"],wide:["a' chiad chairteal","an dàrna cairteal","an treas cairteal","an ceathramh cairteal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,t.default)({values:{narrow:["F","G","M","G","C","Ò","I","L","S","D","S","D"],abbreviated:["Faoi","Gear","Màrt","Gibl","Cèit","Ògmh","Iuch","Lùn","Sult","Dàmh","Samh","Dùbh"],wide:["Am Faoilleach","An Gearran","Am Màrt","An Giblean","An Cèitean","An t-Ògmhios","An t-Iuchar","An Lùnastal","An t-Sultain","An Dàmhair","An t-Samhain","An Dùbhlachd"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["D","L","M","C","A","H","S"],short:["Dò","Lu","Mà","Ci","Ar","Ha","Sa"],abbreviated:["Did","Dil","Dim","Dic","Dia","Dih","Dis"],wide:["Didòmhnaich","Diluain","Dimàirt","Diciadain","Diardaoin","Dihaoine","Disathairne"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"madainn",afternoon:"feasgar",evening:"feasgar",night:"oidhche"}},defaultWidth:"wide",formattingValues:{narrow:{am:"m",pm:"f",midnight:"m.o.",noon:"m.l.",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},abbreviated:{am:"M.",pm:"F.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"},wide:{am:"m.",pm:"f.",midnight:"meadhan oidhche",noon:"meadhan là",morning:"sa mhadainn",afternoon:"feasgar",evening:"feasgar",night:"air an oidhche"}},defaultFormattingWidth:"wide"})};n.default=r,a.exports=n.default}}]);