(self.webpackChunk=self.webpackChunk||[]).push([[34239,15995,68931,53374,96595,66097,27984,54802,98703],{15995:function(e,a,t){"use strict";t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=t.width,r=i&&e.matchPatterns[i]||e.matchPatterns[e.defaultMatchWidth],n=a.match(r);if(!n)return null;var l,u=n[0],d=i&&e.parsePatterns[i]||e.parsePatterns[e.defaultParseWidth],s=Array.isArray(d)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(u))return t}(d):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(u))return t}(d);return l=e.valueCallback?e.valueCallback(s):s,{value:l=t.valueCallback?t.valueCallback(l):l,rest:a.slice(u.length)}}},e.exports=a.default},68931:function(e,a,t){"use strict";t(99785),t(52077),t(1203),t(72410),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},i=a.match(e.matchPattern);if(!i)return null;var r=i[0],n=a.match(e.parsePattern);if(!n)return null;var l=e.valueCallback?e.valueCallback(n[0]):n[0];return{value:l=t.valueCallback?t.valueCallback(l):l,rest:a.slice(r.length)}}},e.exports=a.default},34239:function(e,a,t){"use strict";t(99785),t(32081);var i=t(73203).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=i(t(15995)),n={ordinalNumber:(0,i(t(68931)).default)({matchPattern:/^\d+/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([bB]|[aA]|คศ)/i,abbreviated:/^([bB]\.?\s?[cC]\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?|ค\.?ศ\.?)/i,wide:/^(ก่อนคริสตกาล|คริสต์ศักราช|คริสตกาล)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^[bB]/i,/^(^[aA]|ค\.?ศ\.?|คริสตกาล|คริสต์ศักราช|)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^ไตรมาส(ที่)? ?[1234]/i},defaultMatchWidth:"wide",parsePatterns:{any:[/(1|แรก|หนึ่ง)/i,/(2|สอง)/i,/(3|สาม)/i,/(4|สี่)/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?)/i,abbreviated:/^(ม\.?ค\.?|ก\.?พ\.?|มี\.?ค\.?|เม\.?ย\.?|พ\.?ค\.?|มิ\.?ย\.?|ก\.?ค\.?|ส\.?ค\.?|ก\.?ย\.?|ต\.?ค\.?|พ\.?ย\.?|ธ\.?ค\.?')/i,wide:/^(มกราคม|กุมภาพันธ์|มีนาคม|เมษายน|พฤษภาคม|มิถุนายน|กรกฎาคม|สิงหาคม|กันยายน|ตุลาคม|พฤศจิกายน|ธันวาคม)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^มก/i,/^กุม/i,/^มี/i,/^เม/i,/^พฤษ/i,/^มิ/i,/^กรก/i,/^ส/i,/^กัน/i,/^ต/i,/^พฤศ/i,/^ธ/i],any:[/^ม\.?ค\.?/i,/^ก\.?พ\.?/i,/^มี\.?ค\.?/i,/^เม\.?ย\.?/i,/^พ\.?ค\.?/i,/^มิ\.?ย\.?/i,/^ก\.?ค\.?/i,/^ส\.?ค\.?/i,/^ก\.?ย\.?/i,/^ต\.?ค\.?/i,/^พ\.?ย\.?/i,/^ธ\.?ค\.?/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,short:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,abbreviated:/^(อา\.?|จ\.?|อ\.?|พฤ\.?|พ\.?|ศ\.?|ส\.?)/i,wide:/^(อาทิตย์|จันทร์|อังคาร|พุธ|พฤหัสบดี|ศุกร์|เสาร์)/i},defaultMatchWidth:"wide",parsePatterns:{wide:[/^อา/i,/^จั/i,/^อั/i,/^พุธ/i,/^พฤ/i,/^ศ/i,/^เส/i],any:[/^อา/i,/^จ/i,/^อ/i,/^พ(?!ฤ)/i,/^พฤ/i,/^ศ/i,/^ส/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(ก่อนเที่ยง|หลังเที่ยง|เที่ยงคืน|เที่ยง|(ตอน.*?)?.*(เที่ยง|เช้า|บ่าย|เย็น|กลางคืน))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ก่อนเที่ยง/i,pm:/^หลังเที่ยง/i,midnight:/^เที่ยงคืน/i,noon:/^เที่ยง/i,morning:/เช้า/i,afternoon:/บ่าย/i,evening:/เย็น/i,night:/กลางคืน/i}},defaultParseWidth:"any"})};a.default=n,e.exports=a.default},73203:function(e){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports}}]);