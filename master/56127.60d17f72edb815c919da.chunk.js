"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[56127,94160,71779,49398,27017,4636,82255,59874],{94160:function(e,n,a){a(36947),a(44962),a(78557),a(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,a){var t;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var o=e.defaultFormattingWidth||e.defaultWidth,r=null!=a&&a.width?String(a.width):o;t=e.formattingValues[r]||e.formattingValues[o]}else{var i=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;t=e.values[u]||e.values[i]}return t[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},56127:function(e,n,a){a(36947),a(94);var t=a(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var o=t(a(94160)),r={ordinalNumber:function(e,n){return Number(e)+"."},era:(0,o.default)({values:{narrow:["pr.n.e.","AD"],abbreviated:["pr. Kr.","po. Kr."],wide:["Prije Krista","Poslije Krista"]},defaultWidth:"wide"}),quarter:(0,o.default)({values:{narrow:["1.","2.","3.","4."],abbreviated:["1. kv.","2. kv.","3. kv.","4. kv."],wide:["1. kvartal","2. kvartal","3. kvartal","4. kvartal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,o.default)({values:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječanj","veljača","ožujak","travanj","svibanj","lipanj","srpanj","kolovoz","rujan","listopad","studeni","prosinac"]},defaultWidth:"wide",formattingValues:{narrow:["1.","2.","3.","4.","5.","6.","7.","8.","9.","10.","11.","12."],abbreviated:["sij","velj","ožu","tra","svi","lip","srp","kol","ruj","lis","stu","pro"],wide:["siječnja","veljače","ožujka","travnja","svibnja","lipnja","srpnja","kolovoza","rujna","listopada","studenog","prosinca"]},defaultFormattingWidth:"wide"}),day:(0,o.default)({values:{narrow:["N","P","U","S","Č","P","S"],short:["ned","pon","uto","sri","čet","pet","sub"],abbreviated:["ned","pon","uto","sri","čet","pet","sub"],wide:["nedjelja","ponedjeljak","utorak","srijeda","četvrtak","petak","subota"]},defaultWidth:"wide"}),dayPeriod:(0,o.default)({values:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},defaultWidth:"wide",formattingValues:{narrow:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},abbreviated:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"popodne",evening:"navečer",night:"noću"},wide:{am:"AM",pm:"PM",midnight:"ponoć",noon:"podne",morning:"ujutro",afternoon:"poslije podne",evening:"navečer",night:"noću"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);