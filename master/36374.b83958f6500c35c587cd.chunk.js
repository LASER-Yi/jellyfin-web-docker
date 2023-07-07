"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[36374,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,e,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=t.width,n=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],l=e.match(n);if(!l)return null;var u,d=l[0],i=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],f=Array.isArray(i)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(d))return t}(i):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(d))return t}(i);return u=a.valueCallback?a.valueCallback(f):f,{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(d.length)}}},a.exports=e.default},68931:function(a,e,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.match(a.matchPattern);if(!r)return null;var n=r[0],l=e.match(a.parsePattern);if(!l)return null;var u=a.valueCallback?a.valueCallback(l[0]):l[0];return{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(n.length)}}},a.exports=e.default},36374:function(a,e,t){t(99785),t(32081);var r=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=r(t(15995)),l={ordinalNumber:(0,r(t(68931)).default)({matchPattern:/^(\d+)/,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ق|ب)/g,abbreviated:/^(ق.م|ب.م)/g,wide:/^(قبل الميلاد|بعد الميلاد)/g},defaultMatchWidth:"wide",parsePatterns:{any:[/^ق/g,/^ب/g]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/,abbreviated:/^ر[1234]/,wide:/^الربع (الأول|الثاني|الثالث|الرابع)/},defaultMatchWidth:"wide",parsePatterns:{wide:[/الربع الأول/,/الربع الثاني/,/الربع الثالث/,/الربع الرابع/],any:[/1/,/2/,/3/,/4/]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,n.default)({matchPatterns:{narrow:/^(ي|ف|م|أ|س|ن|د)/,abbreviated:/^(ينا|فبر|مارس|أبريل|مايو|يونـ|يولـ|أغسـ|سبتـ|أكتـ|نوفـ|ديسـ)/,wide:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/,/^ف/,/^م/,/^أ/,/^م/,/^ي/,/^ي/,/^أ/,/^س/,/^أ/,/^ن/,/^د/],any:[/^ينا/,/^فبر/,/^مارس/,/^أبريل/,/^مايو/,/^يون/,/^يول/,/^أغس/,/^سبت/,/^أكت/,/^نوف/,/^ديس/]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^(ح|ن|ث|ر|خ|ج|س)/,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/,/^ن/,/^ث/,/^ر/,/^خ/,/^ج/,/^س/],any:[/أحد/,/اثنين/,/ثلاثاء/,/أربعاء/,/خميس/,/جمعة/,/سبت/]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(ص|م|ن|ظ|في الصباح|بعد الظهر|في المساء|في الليل)/,abbreviated:/^(ص|م|نصف الليل|ظهراً|في الصباح|بعد الظهر|في المساء|في الليل)/,wide:/^(ص|م|نصف الليل|في الصباح|ظهراً|بعد الظهر|في المساء|في الليل)/,any:/^(ص|م|صباح|ظهر|مساء|ليل)/},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ص/,pm:/^م/,midnight:/^ن/,noon:/^ظ/,morning:/^ص/,afternoon:/^بعد/,evening:/^م/,night:/^ل/}},defaultParseWidth:"any"})};e.default=l,a.exports=e.default}}]);