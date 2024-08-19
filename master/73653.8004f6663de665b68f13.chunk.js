"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73653,94160,71779,49398,27017,4636,82255,59874],{94160:function(e,n,t){t(44962),t(36947),t(78557),t(82367),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,r=null!=t&&t.width?String(t.width):i;a=e.formattingValues[r]||e.formattingValues[i]}else{var d=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[d]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},73653:function(e,n,t){t(36947);var a=t(96784).default;Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(t(94160)),r={ordinalNumber:function(e){return String(e)},era:(0,i.default)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["د","ن","أ","س","أ","ج","ج","م","أ","م","ف","ج"],abbreviated:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],wide:["جانفي","فيفري","مارس","أفريل","ماي","جوان","جويلية","أوت","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"},abbreviated:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"},wide:{am:"ص",pm:"ع",morning:"الصباح",noon:"القايلة",afternoon:"بعد القايلة",evening:"العشية",night:"الليل",midnight:"نص الليل"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"},abbreviated:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"},wide:{am:"ص",pm:"ع",morning:"في الصباح",noon:"في القايلة",afternoon:"بعد القايلة",evening:"في العشية",night:"في الليل",midnight:"نص الليل"}},defaultFormattingWidth:"wide"})};n.default=r,e.exports=n.default}}]);