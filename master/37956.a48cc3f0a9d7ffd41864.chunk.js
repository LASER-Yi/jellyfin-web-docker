"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37956,15995,68931,82563,73653,70053,61791,80289,74735],{15995:function(a,t,e){e(99785),e(52077),e(1203),e(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=e.width,r=i&&a.matchPatterns[i]||a.matchPatterns[a.defaultMatchWidth],n=t.match(r);if(!n)return null;var l,u=n[0],d=i&&a.parsePatterns[i]||a.parsePatterns[a.defaultParseWidth],s=Array.isArray(d)?function(a,t){for(var e=0;e<a.length;e++)if(a[e].test(u))return e}(d):function(a,t){for(var e in a)if(a.hasOwnProperty(e)&&a[e].test(u))return e}(d);return l=a.valueCallback?a.valueCallback(s):s,{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(u.length)}}},a.exports=t.default},68931:function(a,t,e){e(99785),e(52077),e(1203),e(72410),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(a){return function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.match(a.matchPattern);if(!i)return null;var r=i[0],n=t.match(a.parsePattern);if(!n)return null;var l=a.valueCallback?a.valueCallback(n[0]):n[0];return{value:l=e.valueCallback?e.valueCallback(l):l,rest:t.slice(r.length)}}},a.exports=t.default},37956:function(a,t,e){e(99785),e(32081);var i=e(73203).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=i(e(15995)),n={ordinalNumber:(0,i(e(68931)).default)({matchPattern:/^(\d+)(લ|જ|થ|ઠ્ઠ|મ)?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(ઈસપૂ|ઈસ)/i,abbreviated:/^(ઈ\.સ\.પૂર્વે|ઈ\.સ\.)/i,wide:/^(ઈસવીસન\sપૂર્વે|ઈસવીસન)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^ઈસપૂ/i,/^ઈસ/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](લો|જો|થો)? ત્રિમાસ/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[જાફેમાએમેજૂજુઓસઓનડિ]/i,abbreviated:/^(જાન્યુ|ફેબ્રુ|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઈ|ઑગસ્ટ|સપ્ટે|ઓક્ટો|નવે|ડિસે)/i,wide:/^(જાન્યુઆરી|ફેબ્રુઆરી|માર્ચ|એપ્રિલ|મે|જૂન|જુલાઇ|ઓગસ્ટ|સપ્ટેમ્બર|ઓક્ટોબર|નવેમ્બર|ડિસેમ્બર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i],any:[/^જા/i,/^ફે/i,/^મા/i,/^એ/i,/^મે/i,/^જૂ/i,/^જુ/i,/^ઑગ/i,/^સ/i,/^ઓક્ટો/i,/^ન/i,/^ડિ/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,short:/^(ર|સો|મં|બુ|ગુ|શુ|શ)/i,abbreviated:/^(રવિ|સોમ|મંગળ|બુધ|ગુરુ|શુક્ર|શનિ)/i,wide:/^(રવિવાર|સોમવાર|મંગળવાર|બુધવાર|ગુરુવાર|શુક્રવાર|શનિવાર)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i],any:[/^ર/i,/^સો/i,/^મં/i,/^બુ/i,/^ગુ/i,/^શુ/i,/^શ/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(a|p|મ\.?|સ|બ|સાં|રા)/i,any:/^(a|p|મ\.?|સ|બ|સાં|રા)/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a/i,pm:/^p/i,midnight:/^મ\.?/i,noon:/^બ/i,morning:/સ/i,afternoon:/બ/i,evening:/સાં/i,night:/રા/i}},defaultParseWidth:"any"})};t.default=n,a.exports=t.default}}]);