"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[95901,72232,22907,94891,94250,73710,23945,95671],{72232:function(e,n,t){t(99785),t(5769),t(63238),t(14078),Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){return function(n,t){var a;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var i=e.defaultFormattingWidth||e.defaultWidth,d=null!=t&&t.width?String(t.width):i;a=e.formattingValues[d]||e.formattingValues[i]}else{var r=e.defaultWidth,o=null!=t&&t.width?String(t.width):e.defaultWidth;a=e.values[o]||e.values[r]}return a[e.argumentCallback?e.argumentCallback(n):n]}},e.exports=n.default},95901:function(e,n,t){t(99785),Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var a,i=(a=t(72232))&&a.__esModule?a:{default:a},d={ordinalNumber:function(e,n){return String(e)},era:(0,i.default)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل از میلاد","بعد از میلاد"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["س‌م1","س‌م2","س‌م3","س‌م4"],wide:["سه‌ماهه 1","سه‌ماهه 2","سه‌ماهه 3","سه‌ماهه 4"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,i.default)({values:{narrow:["ژ","ف","م","آ","م","ج","ج","آ","س","ا","ن","د"],abbreviated:["ژانـ","فور","مارس","آپر","می","جون","جولـ","آگو","سپتـ","اکتـ","نوامـ","دسامـ"],wide:["ژانویه","فوریه","مارس","آپریل","می","جون","جولای","آگوست","سپتامبر","اکتبر","نوامبر","دسامبر"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["ی","د","س","چ","پ","ج","ش"],short:["1ش","2ش","3ش","4ش","5ش","ج","ش"],abbreviated:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"],wide:["یکشنبه","دوشنبه","سه‌شنبه","چهارشنبه","پنجشنبه","جمعه","شنبه"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ق",pm:"ب",midnight:"ن",noon:"ظ",morning:"ص",afternoon:"ب.ظ.",evening:"ع",night:"ش"},abbreviated:{am:"ق.ظ.",pm:"ب.ظ.",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"},wide:{am:"قبل‌ازظهر",pm:"بعدازظهر",midnight:"نیمه‌شب",noon:"ظهر",morning:"صبح",afternoon:"بعدازظهر",evening:"عصر",night:"شب"}},defaultFormattingWidth:"wide"})};n.default=d,e.exports=n.default}}]);