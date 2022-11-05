"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[84850,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,t,e){function i(a,t){for(var e in a)if(a.hasOwnProperty(e)&&t(a[e]))return e}function n(a,t){for(var e=0;e<a.length;e++)if(t(a[e]))return e}e(99785),e(52077),e(1203),e(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},r=e.width,u=r&&a.matchPatterns[r]||a.matchPatterns[a.defaultMatchWidth],l=t.match(u);if(!l)return null;var d,o=l[0],s=r&&a.parsePatterns[r]||a.parsePatterns[a.defaultParseWidth],f=Array.isArray(s)?n(s,(function(a){return a.test(o)})):i(s,(function(a){return a.test(o)}));d=a.valueCallback?a.valueCallback(f):f,d=e.valueCallback?e.valueCallback(d):d;var c=t.slice(o.length);return{value:d,rest:c}}},a.exports=t.default},68931:function(a,t,e){e(99785),e(52077),e(1203),e(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var n=i[0],r=t.match(a.parsePattern);if(!r)return null;var u=a.valueCallback?a.valueCallback(r[0]):r[0];u=e.valueCallback?e.valueCallback(u):u;var l=t.slice(n.length);return{value:u,rest:l}}},a.exports=t.default},84850:function(a,t,e){e(99785),e(32081),e(95163),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=r(e(68931)),n=r(e(15995));function r(a){return a&&a.__esModule?a:{default:a}}var u={ordinalNumber:(0,i.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,n.default)({matchPatterns:{narrow:/^(ق|ب)/i,abbreviated:/^(ق\.?\s?م\.?|ق\.?\s?م\.?\s?|a\.?\s?d\.?|c\.?\s?)/i,wide:/^(قبل الميلاد|قبل الميلاد|بعد الميلاد|بعد الميلاد)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^قبل/i,/^بعد/i]},defaultParseWidth:"any"}),quarter:(0,n.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^ر[1234]/i,wide:/^الربع [1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return Number(a)+1}}),month:(0,n.default)({matchPatterns:{narrow:/^[يفمأمسند]/i,abbreviated:/^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i,wide:/^(ين|ف|مار|أب|ماي|يون|يول|غش|شت|أك|ن|د)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^غ/i,/^ش/i,/^أ/i,/^ن/i,/^د/i],any:[/^ين/i,/^فب/i,/^مار/i,/^أب/i,/^ماي/i,/^يون/i,/^يول/i,/^غشت/i,/^ش/i,/^أك/i,/^ن/i,/^د/i]},defaultParseWidth:"any"}),day:(0,n.default)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|إثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|إثن|ثلا|أرب|خمي|جمعة|سبت)/i,wide:/^(الأحد|الإثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الإثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^إث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:(0,n.default)({matchPatterns:{narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},defaultParseWidth:"any"})};t.default=u,a.exports=t.default}}]);