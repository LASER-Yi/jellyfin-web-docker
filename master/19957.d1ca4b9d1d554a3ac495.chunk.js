"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19957,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,e,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=e.match(r);if(!n)return null;var l,u=n[0],s=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],d=Array.isArray(s)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(u))return t}(s):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(u))return t}(s);return l=a.valueCallback?a.valueCallback(d):d,{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(u.length)}}},a.exports=e.default},68931:function(a,e,t){t(99785),t(52077),t(1203),t(72410),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.match(a.matchPattern);if(!i)return null;var r=i[0],n=e.match(a.parsePattern);if(!n)return null;var l=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:l=t.valueCallback?t.valueCallback(l):l,rest:e.slice(r.length)}}},a.exports=e.default},19957:function(a,e,t){t(99785),t(32081);var i=t(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t(15995)),n={ordinalNumber:(0,i(t(68931)).default)({matchPattern:/^\d+\./i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,abbreviated:/^(e\.m\.a|m\.a\.j|eKr|pKr)/i,wide:/^(enne meie ajaarvamist|meie ajaarvamise järgi|enne Kristust|pärast Kristust)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^e/i,/^(m|p)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](\.)? kvartal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jvmasond]/i,abbreviated:/^(jaan|veebr|märts|apr|mai|juuni|juuli|aug|sept|okt|nov|dets)/i,wide:/^(jaanuar|veebruar|märts|aprill|mai|juuni|juuli|august|september|oktoober|november|detsember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^v/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^v/i,/^mär/i,/^ap/i,/^mai/i,/^juun/i,/^juul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[petknrl]/i,short:/^[petknrl]/i,abbreviated:/^(püh?|esm?|tei?|kolm?|nel?|ree?|laup?)\.?/i,wide:/^(pühapäev|esmaspäev|teisipäev|kolmapäev|neljapäev|reede|laupäev)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^p/i,/^e/i,/^t/i,/^k/i,/^n/i,/^r/i,/^l/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(am|pm|keskööl?|keskpäev(al)?|hommik(ul)?|pärastlõunal?|õhtul?|öö(sel)?)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^keskö/i,noon:/^keskp/i,morning:/hommik/i,afternoon:/pärastlõuna/i,evening:/õhtu/i,night:/öö/i}},defaultParseWidth:"any"})};e.default=n,a.exports=e.default}}]);