"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[34644,37658,94160,7184,83518,15277,71779,9911,82420,49398,32292,60039,27017,65149,27182,4636,87530,16914,45859,93969,72409,3767,4801,82255,99435,77077,71944,59874,21816],{37658:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},94160:function(e,t,a){a(36947),a(44962),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,i=null!=a&&a.width?String(a.width):r;n=e.formattingValues[i]||e.formattingValues[r]}else{var o=e.defaultWidth,d=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[d]||e.values[o]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},7184:function(e,t,a){a(36947),a(95021),a(53819),a(89336),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],i=t.match(r);if(!i)return null;var o,d=i[0],u=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(d))return a}(u):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(d))return a}(u);return o=e.valueCallback?e.valueCallback(l):l,{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(d.length)}}},e.exports=t.default},83518:function(e,t,a){a(36947),a(95021),a(53819),a(89336),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],i=t.match(e.parsePattern);if(!i)return null;var o=e.valueCallback?e.valueCallback(i[0]):i[0];return{value:o=a.valueCallback?a.valueCallback(o):o,rest:t.slice(r.length)}}},e.exports=t.default},16914:function(e,t,a){a(36947),a(95021),a(93062),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"më pak se një sekondë",other:"më pak se {{count}} sekonda"},xSeconds:{one:"1 sekondë",other:"{{count}} sekonda"},halfAMinute:"gjysëm minuti",lessThanXMinutes:{one:"më pak se një minute",other:"më pak se {{count}} minuta"},xMinutes:{one:"1 minutë",other:"{{count}} minuta"},aboutXHours:{one:"rreth 1 orë",other:"rreth {{count}} orë"},xHours:{one:"1 orë",other:"{{count}} orë"},xDays:{one:"1 ditë",other:"{{count}} ditë"},aboutXWeeks:{one:"rreth 1 javë",other:"rreth {{count}} javë"},xWeeks:{one:"1 javë",other:"{{count}} javë"},aboutXMonths:{one:"rreth 1 muaj",other:"rreth {{count}} muaj"},xMonths:{one:"1 muaj",other:"{{count}} muaj"},aboutXYears:{one:"rreth 1 vit",other:"rreth {{count}} vite"},xYears:{one:"1 vit",other:"{{count}} vite"},overXYears:{one:"mbi 1 vit",other:"mbi {{count}} vite"},almostXYears:{one:"pothuajse 1 vit",other:"pothuajse {{count}} vite"}};t.default=function(e,t,a){var r,i=n[e];return r="string"==typeof i?i:1===t?i.one:i.other.replace("{{count}}",String(t)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"në "+r:r+" më parë":r},e.exports=t.default},45859:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(37658)),i={date:(0,r.default)({formats:{full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'në' {{time}}",long:"{{date}} 'në' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=i,e.exports=t.default},93969:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"'të' eeee 'e shkuar në' p",yesterday:"'dje në' p",today:"'sot në' p",tomorrow:"'nesër në' p",nextWeek:"eeee 'at' p",other:"P"};t.default=function(e,t,a,r){return n[e]},e.exports=t.default},72409:function(e,t,a){a(36947),a(94);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(94160)),i={ordinalNumber:function(e,t){var a=Number(e);return"hour"===(null==t?void 0:t.unit)?String(a):1===a?a+"-rë":4===a?a+"t":a+"-të"},era:(0,r.default)({values:{narrow:["P","M"],abbreviated:["PK","MK"],wide:["Para Krishtit","Mbas Krishtit"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["4-mujori I","4-mujori II","4-mujori III","4-mujori IV"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","S","M","P","M","Q","K","G","S","T","N","D"],abbreviated:["Jan","Shk","Mar","Pri","Maj","Qer","Kor","Gus","Sht","Tet","Nën","Dhj"],wide:["Janar","Shkurt","Mars","Prill","Maj","Qershor","Korrik","Gusht","Shtator","Tetor","Nëntor","Dhjetor"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["D","H","M","M","E","P","S"],short:["Di","Hë","Ma","Më","En","Pr","Sh"],abbreviated:["Die","Hën","Mar","Mër","Enj","Pre","Sht"],wide:["Dielë","Hënë","Martë","Mërkurë","Enjte","Premte","Shtunë"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"mëngjes",afternoon:"dite",evening:"mbrëmje",night:"natë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnëtë",noon:"drek",morning:"mëngjes",afternoon:"mbasdite",evening:"mbrëmje",night:"natë"}},defaultWidth:"wide",formattingValues:{narrow:{am:"p",pm:"m",midnight:"m",noon:"d",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},abbreviated:{am:"PD",pm:"MD",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"},wide:{am:"p.d.",pm:"m.d.",midnight:"mesnatë",noon:"drek",morning:"në mëngjes",afternoon:"në mbasdite",evening:"në mbrëmje",night:"në mesnatë"}},defaultFormattingWidth:"wide"})};t.default=i,e.exports=t.default},3767:function(e,t,a){a(36947),a(96054);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(7184)),i={ordinalNumber:(0,n(a(83518)).default)({matchPattern:/^(\d+)(-rë|-të|t|)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^(p|m)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(para krishtit|mbas krishtit)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b/i,/^(p|m)/i]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234]-mujori (i{1,3}|iv)/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jsmpqkftnd]/i,abbreviated:/^(jan|shk|mar|pri|maj|qer|kor|gus|sht|tet|nën|dhj)/i,wide:/^(janar|shkurt|mars|prill|maj|qershor|korrik|gusht|shtator|tetor|nëntor|dhjetor)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^j/i,/^s/i,/^m/i,/^p/i,/^m/i,/^q/i,/^k/i,/^g/i,/^s/i,/^t/i,/^n/i,/^d/i],any:[/^ja/i,/^shk/i,/^mar/i,/^pri/i,/^maj/i,/^qer/i,/^kor/i,/^gu/i,/^sht/i,/^tet/i,/^n/i,/^d/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[dhmeps]/i,short:/^(di|hë|ma|më|en|pr|sh)/i,abbreviated:/^(die|hën|mar|mër|enj|pre|sht)/i,wide:/^(dielë|hënë|martë|mërkurë|enjte|premte|shtunë)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^d/i,/^h/i,/^m/i,/^m/i,/^e/i,/^p/i,/^s/i],any:[/^d/i,/^h/i,/^ma/i,/^më/i,/^e/i,/^p/i,/^s/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{narrow:/^(p|m|me|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i,any:/^([pm]\.?\s?d\.?|drek|në (mëngjes|mbasdite|mbrëmje|mesnatë))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^p/i,pm:/^m/i,midnight:/^me/i,noon:/^dr/i,morning:/mëngjes/i,afternoon:/mbasdite/i,evening:/mbrëmje/i,night:/natë/i}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},34644:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(16914)),i=n(a(45859)),o=n(a(93969)),d=n(a(72409)),u=n(a(3767)),l={code:"sq",formatDistance:r.default,formatLong:i.default,formatRelative:o.default,localize:d.default,match:u.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);