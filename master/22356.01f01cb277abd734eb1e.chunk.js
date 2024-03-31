"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[22356,37658,94160,7184,83518,15277,71779,9911,82420,49398,32292,14866,6339,97073,82681,76068,60039,27017,65149,27182,4636,87530,4801,82255,99435,77077,71944,59874,21816],{37658:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},94160:function(e,t,a){a(36947),a(44962),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var u=e.defaultWidth,o=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[o]||e.values[u]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},7184:function(e,t,a){a(36947),a(95021),a(53819),a(89336),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var u,o=i[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(o))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(o))return a}(d);return u=e.valueCallback?e.valueCallback(l):l,{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(o.length)}}},e.exports=t.default},83518:function(e,t,a){a(36947),a(95021),a(53819),a(89336),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var u=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:u=a.valueCallback?a.valueCallback(u):u,rest:t.slice(r.length)}}},e.exports=t.default},14866:function(e,t,a){a(36947),a(95021),a(93062),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=a(82681),r={lessThanXSeconds:{one:"প্রায় ১ সেকেন্ড",other:"প্রায় {{count}} সেকেন্ড"},xSeconds:{one:"১ সেকেন্ড",other:"{{count}} সেকেন্ড"},halfAMinute:"আধ মিনিট",lessThanXMinutes:{one:"প্রায় ১ মিনিট",other:"প্রায় {{count}} মিনিট"},xMinutes:{one:"১ মিনিট",other:"{{count}} মিনিট"},aboutXHours:{one:"প্রায় ১ ঘন্টা",other:"প্রায় {{count}} ঘন্টা"},xHours:{one:"১ ঘন্টা",other:"{{count}} ঘন্টা"},xDays:{one:"১ দিন",other:"{{count}} দিন"},aboutXWeeks:{one:"প্রায় ১ সপ্তাহ",other:"প্রায় {{count}} সপ্তাহ"},xWeeks:{one:"১ সপ্তাহ",other:"{{count}} সপ্তাহ"},aboutXMonths:{one:"প্রায় ১ মাস",other:"প্রায় {{count}} মাস"},xMonths:{one:"১ মাস",other:"{{count}} মাস"},aboutXYears:{one:"প্রায় ১ বছর",other:"প্রায় {{count}} বছর"},xYears:{one:"১ বছর",other:"{{count}} বছর"},overXYears:{one:"১ বছরের বেশি",other:"{{count}} বছরের বেশি"},almostXYears:{one:"প্রায় ১ বছর",other:"প্রায় {{count}} বছর"}};t.default=function(e,t,a){var i,u=r[e];return i="string"==typeof u?u:1===t?u.one:u.other.replace("{{count}}",(0,n.numberToLocale)(t)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?i+" এর মধ্যে":i+" আগে":i},e.exports=t.default},6339:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(37658)),i={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} {{time}} 'সময়'",long:"{{date}} {{time}} 'সময়'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},97073:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'গত' eeee 'সময়' p",yesterday:"'গতকাল' 'সময়' p",today:"'আজ' 'সময়' p",tomorrow:"'আগামীকাল' 'সময়' p",nextWeek:"eeee 'সময়' p",other:"P"};t.default=function(e,t,a,r){return n[e]},e.exports=t.default},82681:function(e,t,a){a(36947),a(94),a(95021),a(93062),a(78557),a(73687);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,t.numberToLocale=u;var r=n(a(94160)),i={locale:{1:"১",2:"২",3:"৩",4:"৪",5:"৫",6:"৬",7:"৭",8:"৮",9:"৯",0:"০"},number:{"১":"1","২":"2","৩":"3","৪":"4","৫":"5","৬":"6","৭":"7","৮":"8","৯":"9","০":"0"}};function u(e){return e.toString().replace(/\d/g,(function(e){return i.locale[e]}))}var o={ordinalNumber:function(e,t){var a=Number(e),n=u(a);if("date"===(null==t?void 0:t.unit))return function(e,t){if(e>18&&e<=31)return t+"শে";switch(e){case 1:return t+"লা";case 2:case 3:return t+"রা";case 4:return t+"ঠা";default:return t+"ই"}}(a,n);if(a>10||0===a)return n+"তম";switch(a%10){case 2:case 3:return n+"য়";case 4:return n+"র্থ";case 6:return n+"ষ্ঠ";default:return n+"ম"}},era:(0,r.default)({values:{narrow:["খ্রিঃপূঃ","খ্রিঃ"],abbreviated:["খ্রিঃপূর্ব","খ্রিঃ"],wide:["খ্রিস্টপূর্ব","খ্রিস্টাব্দ"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["১","২","৩","৪"],abbreviated:["১ত্রৈ","২ত্রৈ","৩ত্রৈ","৪ত্রৈ"],wide:["১ম ত্রৈমাসিক","২য় ত্রৈমাসিক","৩য় ত্রৈমাসিক","৪র্থ ত্রৈমাসিক"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],abbreviated:["জানু","ফেব্রু","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্ট","অক্টো","নভে","ডিসে"],wide:["জানুয়ারি","ফেব্রুয়ারি","মার্চ","এপ্রিল","মে","জুন","জুলাই","আগস্ট","সেপ্টেম্বর","অক্টোবর","নভেম্বর","ডিসেম্বর"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["র","সো","ম","বু","বৃ","শু","শ"],short:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],abbreviated:["রবি","সোম","মঙ্গল","বুধ","বৃহ","শুক্র","শনি"],wide:["রবিবার","সোমবার","মঙ্গলবার","বুধবার","বৃহস্পতিবার ","শুক্রবার","শনিবার"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultWidth:"wide",formattingValues:{narrow:{am:"পূ",pm:"অপ",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},abbreviated:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"},wide:{am:"পূর্বাহ্ন",pm:"অপরাহ্ন",midnight:"মধ্যরাত",noon:"মধ্যাহ্ন",morning:"সকাল",afternoon:"বিকাল",evening:"সন্ধ্যা",night:"রাত"}},defaultFormattingWidth:"wide"})};t.default=o},76068:function(e,t,a){a(36947),a(96054);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(7184)),i={ordinalNumber:(0,n(a(83518)).default)({matchPattern:/^(\d+)(ম|য়|র্থ|ষ্ঠ|শে|ই|তম)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(খ্রিঃপূঃ|খ্রিঃ)/i,abbreviated:/^(খ্রিঃপূর্ব|খ্রিঃ)/i,wide:/^(খ্রিস্টপূর্ব|খ্রিস্টাব্দ)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^খ্রিঃপূঃ/i,/^খ্রিঃ/i],abbreviated:[/^খ্রিঃপূর্ব/i,/^খ্রিঃ/i],wide:[/^খ্রিস্টপূর্ব/i,/^খ্রিস্টাব্দ/i]},defaultParseWidth:"wide"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[১২৩৪]/i,abbreviated:/^[১২৩৪]ত্রৈ/i,wide:/^[১২৩৪](ম|য়|র্থ)? ত্রৈমাসিক/i},defaultMatchWidth:"wide",parsePatterns:{any:[/১/i,/২/i,/৩/i,/৪/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,abbreviated:/^(জানু|ফেব্রু|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্ট|অক্টো|নভে|ডিসে)/i,wide:/^(জানুয়ারি|ফেব্রুয়ারি|মার্চ|এপ্রিল|মে|জুন|জুলাই|আগস্ট|সেপ্টেম্বর|অক্টোবর|নভেম্বর|ডিসেম্বর)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^জানু/i,/^ফেব্রু/i,/^মার্চ/i,/^এপ্রিল/i,/^মে/i,/^জুন/i,/^জুলাই/i,/^আগস্ট/i,/^সেপ্ট/i,/^অক্টো/i,/^নভে/i,/^ডিসে/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^(র|সো|ম|বু|বৃ|শু|শ)+/i,short:/^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,abbreviated:/^(রবি|সোম|মঙ্গল|বুধ|বৃহ|শুক্র|শনি)+/i,wide:/^(রবিবার|সোমবার|মঙ্গলবার|বুধবার|বৃহস্পতিবার |শুক্রবার|শনিবার)+/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^র/i,/^সো/i,/^ম/i,/^বু/i,/^বৃ/i,/^শু/i,/^শ/i],short:[/^রবি/i,/^সোম/i,/^মঙ্গল/i,/^বুধ/i,/^বৃহ/i,/^শুক্র/i,/^শনি/i],abbreviated:[/^রবি/i,/^সোম/i,/^মঙ্গল/i,/^বুধ/i,/^বৃহ/i,/^শুক্র/i,/^শনি/i],wide:[/^রবিবার/i,/^সোমবার/i,/^মঙ্গলবার/i,/^বুধবার/i,/^বৃহস্পতিবার /i,/^শুক্রবার/i,/^শনিবার/i]},defaultParseWidth:"wide"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(পূ|অপ|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,abbreviated:/^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i,wide:/^(পূর্বাহ্ন|অপরাহ্ন|মধ্যরাত|মধ্যাহ্ন|সকাল|বিকাল|সন্ধ্যা|রাত)/i},defaultMatchWidth:"wide",parsePatterns:{any:{am:/^পূ/i,pm:/^অপ/i,midnight:/^মধ্যরাত/i,noon:/^মধ্যাহ্ন/i,morning:/সকাল/i,afternoon:/বিকাল/i,evening:/সন্ধ্যা/i,night:/রাত/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},22356:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(14866)),i=n(a(6339)),u=n(a(97073)),o=n(a(82681)),d=n(a(76068)),l={code:"bn",formatDistance:r.default,formatLong:i.default,formatRelative:u.default,localize:o.default,match:d.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);