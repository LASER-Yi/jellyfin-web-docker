"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10035,72232,22907,94891,94250,73710,23945,95671],{72232:function(i,e,a){a(99785),a(5769),a(63238),a(14078),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(i){return function(e,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&i.formattingValues){var t=i.defaultFormattingWidth||i.defaultWidth,r=null!=a&&a.width?String(a.width):t;n=i.formattingValues[r]||i.formattingValues[t]}else{var d=i.defaultWidth,u=null!=a&&a.width?String(a.width):i.defaultWidth;n=i.values[u]||i.values[d]}return n[i.argumentCallback?i.argumentCallback(e):e]}},i.exports=e.default},10035:function(i,e,a){a(99785);var n=a(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var t=n(a(72232)),r={ordinalNumber:function(i,e){return String(i)},era:(0,t.default)({values:{narrow:["Î","D"],abbreviated:["Î.d.C.","D.C."],wide:["Înainte de Cristos","După Cristos"]},defaultWidth:"wide"}),quarter:(0,t.default)({values:{narrow:["1","2","3","4"],abbreviated:["T1","T2","T3","T4"],wide:["primul trimestru","al doilea trimestru","al treilea trimestru","al patrulea trimestru"]},defaultWidth:"wide",argumentCallback:function(i){return i-1}}),month:(0,t.default)({values:{narrow:["I","F","M","A","M","I","I","A","S","O","N","D"],abbreviated:["ian","feb","mar","apr","mai","iun","iul","aug","sep","oct","noi","dec"],wide:["ianuarie","februarie","martie","aprilie","mai","iunie","iulie","august","septembrie","octombrie","noiembrie","decembrie"]},defaultWidth:"wide"}),day:(0,t.default)({values:{narrow:["d","l","m","m","j","v","s"],short:["du","lu","ma","mi","jo","vi","sâ"],abbreviated:["dum","lun","mar","mie","joi","vin","sâm"],wide:["duminică","luni","marți","miercuri","joi","vineri","sâmbătă"]},defaultWidth:"wide"}),dayPeriod:(0,t.default)({values:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"ami",morning:"dim",afternoon:"da",evening:"s",night:"n"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"mn",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},abbreviated:{am:"AM",pm:"PM",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"},wide:{am:"a.m.",pm:"p.m.",midnight:"miezul nopții",noon:"amiază",morning:"dimineață",afternoon:"după-amiază",evening:"seară",night:"noapte"}},defaultFormattingWidth:"wide"})};e.default=r,i.exports=e.default}}]);