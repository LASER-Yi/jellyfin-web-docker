"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53687,37658,94160,7184,83518,82393,70356,62654,79870,25242,9911,77077],{37658:function(e,a,t){t(36947),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=a.width?String(a.width):e.defaultWidth;return e.formats[t]||e.formats[e.defaultWidth]}},e.exports=a.default},94160:function(e,a,t){t(44962),t(36947),t(78557),t(82367),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,d=null!=t&&t.width?String(t.width):r;n=e.formattingValues[d]||e.formattingValues[r]}else{var i=e.defaultWidth,u=null!=t&&t.width?String(t.width):e.defaultWidth;n=e.values[u]||e.values[i]}return n[e.argumentCallback?e.argumentCallback(a):a]}},e.exports=a.default},7184:function(e,a,t){t(89336),t(36947),t(95021),t(53819),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],d=a.match(r);if(!d)return null;var i,u=d[0],o=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(o)?function(e,a){for(var t=0;t<e.length;t++)if(e[t].test(u))return t}(o):function(e,a){for(var t in e)if(e.hasOwnProperty(t)&&e[t].test(u))return t}(o);return i=e.valueCallback?e.valueCallback(l):l,{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(u.length)}}},e.exports=a.default},83518:function(e,a,t){t(89336),t(36947),t(95021),t(53819),Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){return function(a){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.match(e.matchPattern);if(!n)return null;var r=n[0],d=a.match(e.parsePattern);if(!d)return null;var i=e.valueCallback?e.valueCallback(d[0]):d[0];return{value:i=t.valueCallback?t.valueCallback(i):i,rest:a.slice(r.length)}}},e.exports=a.default},82393:function(e,a,t){t(36947),t(95021),t(93062),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={lessThanXSeconds:{one:"minder as 'n sekonde",other:"minder as {{count}} sekondes"},xSeconds:{one:"1 sekonde",other:"{{count}} sekondes"},halfAMinute:"'n halwe minuut",lessThanXMinutes:{one:"minder as 'n minuut",other:"minder as {{count}} minute"},xMinutes:{one:"'n minuut",other:"{{count}} minute"},aboutXHours:{one:"ongeveer 1 uur",other:"ongeveer {{count}} ure"},xHours:{one:"1 uur",other:"{{count}} ure"},xDays:{one:"1 dag",other:"{{count}} dae"},aboutXWeeks:{one:"ongeveer 1 week",other:"ongeveer {{count}} weke"},xWeeks:{one:"1 week",other:"{{count}} weke"},aboutXMonths:{one:"ongeveer 1 maand",other:"ongeveer {{count}} maande"},xMonths:{one:"1 maand",other:"{{count}} maande"},aboutXYears:{one:"ongeveer 1 jaar",other:"ongeveer {{count}} jaar"},xYears:{one:"1 jaar",other:"{{count}} jaar"},overXYears:{one:"meer as 1 jaar",other:"meer as {{count}} jaar"},almostXYears:{one:"byna 1 jaar",other:"byna {{count}} jaar"}};a.default=function(e,a,t){var r,d=n[e];return r="string"==typeof d?d:1===a?d.one:d.other.replace("{{count}}",String(a)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?"oor "+r:r+" gelede":r},e.exports=a.default},70356:function(e,a,t){t(36947);var n=t(96784).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(37658)),d={date:(0,r.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"yyyy/MM/dd"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'om' {{time}}",long:"{{date}} 'om' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};a.default=d,e.exports=a.default},62654:function(e,a,t){t(36947),Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var n={lastWeek:"'verlede' eeee 'om' p",yesterday:"'gister om' p",today:"'vandag om' p",tomorrow:"'môre om' p",nextWeek:"eeee 'om' p",other:"P"};a.default=function(e,a,t,r){return n[e]},e.exports=a.default},79870:function(e,a,t){t(94),t(36947);var n=t(96784).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(94160)),d={ordinalNumber:function(e){var a=Number(e),t=a%100;if(t<20)switch(t){case 1:case 8:return a+"ste";default:return a+"de"}return a+"ste"},era:(0,r.default)({values:{narrow:["vC","nC"],abbreviated:["vC","nC"],wide:["voor Christus","na Christus"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ste kwartaal","2de kwartaal","3de kwartaal","4de kwartaal"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mrt","Apr","Mei","Jun","Jul","Aug","Sep","Okt","Nov","Des"],wide:["Januarie","Februarie","Maart","April","Mei","Junie","Julie","Augustus","September","Oktober","November","Desember"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["S","M","D","W","D","V","S"],short:["So","Ma","Di","Wo","Do","Vr","Sa"],abbreviated:["Son","Maa","Din","Woe","Don","Vry","Sat"],wide:["Sondag","Maandag","Dinsdag","Woensdag","Donderdag","Vrydag","Saterdag"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"middaguur",morning:"oggend",afternoon:"middag",evening:"laat middag",night:"aand"}},defaultWidth:"wide",formattingValues:{narrow:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},abbreviated:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"},wide:{am:"vm",pm:"nm",midnight:"middernag",noon:"uur die middag",morning:"uur die oggend",afternoon:"uur die middag",evening:"uur die aand",night:"uur die aand"}},defaultFormattingWidth:"wide"})};a.default=d,e.exports=a.default},25242:function(e,a,t){t(36947),t(96054);var n=t(96784).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(7184)),d={ordinalNumber:(0,n(t(83518)).default)({matchPattern:/^(\d+)(ste|de)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,r.default)({matchPatterns:{narrow:/^([vn]\.? ?C\.?)/,abbreviated:/^([vn]\. ?C\.?)/,wide:/^((voor|na) Christus)/},defaultMatchWidth:"wide",parsePatterns:{any:[/^v/,/^n/]},defaultParseWidth:"any"}),quarter:(0,r.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/^K[1234]/i,wide:/^[1234](st|d)e kwartaal/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,r.default)({matchPatterns:{narrow:/^[jfmasond]/i,abbreviated:/^(Jan|Feb|Mrt|Apr|Mei|Jun|Jul|Aug|Sep|Okt|Nov|Dec)\.?/i,wide:/^(Januarie|Februarie|Maart|April|Mei|Junie|Julie|Augustus|September|Oktober|November|Desember)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^J/i,/^F/i,/^M/i,/^A/i,/^M/i,/^J/i,/^J/i,/^A/i,/^S/i,/^O/i,/^N/i,/^D/i],any:[/^Jan/i,/^Feb/i,/^Mrt/i,/^Apr/i,/^Mei/i,/^Jun/i,/^Jul/i,/^Aug/i,/^Sep/i,/^Okt/i,/^Nov/i,/^Dec/i]},defaultParseWidth:"any"}),day:(0,r.default)({matchPatterns:{narrow:/^[smdwv]/i,short:/^(So|Ma|Di|Wo|Do|Vr|Sa)/i,abbreviated:/^(Son|Maa|Din|Woe|Don|Vry|Sat)/i,wide:/^(Sondag|Maandag|Dinsdag|Woensdag|Donderdag|Vrydag|Saterdag)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^S/i,/^M/i,/^D/i,/^W/i,/^D/i,/^V/i,/^S/i],any:[/^So/i,/^Ma/i,/^Di/i,/^Wo/i,/^Do/i,/^Vr/i,/^Sa/i]},defaultParseWidth:"any"}),dayPeriod:(0,r.default)({matchPatterns:{any:/^(vm|nm|middernag|(?:uur )?die (oggend|middag|aand))/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^vm/i,pm:/^nm/i,midnight:/^middernag/i,noon:/^middaguur/i,morning:/oggend/i,afternoon:/middag/i,evening:/laat middag/i,night:/aand/i}},defaultParseWidth:"any"})};a.default=d,e.exports=a.default},53687:function(e,a,t){t(36947);var n=t(96784).default;Object.defineProperty(a,"__esModule",{value:!0}),a.default=void 0;var r=n(t(82393)),d=n(t(70356)),i=n(t(62654)),u=n(t(79870)),o=n(t(25242)),l={code:"af",formatDistance:r.default,formatLong:d.default,formatRelative:i.default,localize:u.default,match:o.default,options:{weekStartsOn:0,firstWeekContainsDate:1}};a.default=l,e.exports=a.default}}]);