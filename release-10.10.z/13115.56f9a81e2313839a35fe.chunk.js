"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[13115,37658,94160,7184,83518,653,83208,80106,85234,15190,9911,77077],{37658:function(a,e,t){t(36947),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=e.width?String(e.width):a.defaultWidth;return a.formats[t]||a.formats[a.defaultWidth]}},a.exports=e.default},94160:function(a,e,t){t(44962),t(36947),t(78557),t(82367),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e,t){var n;if("formatting"===(null!=t&&t.context?String(t.context):"standalone")&&a.formattingValues){var i=a.defaultFormattingWidth||a.defaultWidth,r=null!=t&&t.width?String(t.width):i;n=a.formattingValues[r]||a.formattingValues[i]}else{var u=a.defaultWidth,d=null!=t&&t.width?String(t.width):a.defaultWidth;n=a.values[d]||a.values[u]}return n[a.argumentCallback?a.argumentCallback(e):e]}},a.exports=e.default},7184:function(a,e,t){t(89336),t(36947),t(95021),t(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.width,i=n&&a.matchPatterns[n]||a.matchPatterns[a.defaultMatchWidth],r=e.match(i);if(!r)return null;var u,d=r[0],o=n&&a.parsePatterns[n]||a.parsePatterns[a.defaultParseWidth],l=Array.isArray(o)?function(a,e){for(var t=0;t<a.length;t++)if(a[t].test(d))return t}(o):function(a,e){for(var t in a)if(a.hasOwnProperty(t)&&a[t].test(d))return t}(o);return u=a.valueCallback?a.valueCallback(l):l,{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(d.length)}}},a.exports=e.default},83518:function(a,e,t){t(89336),t(36947),t(95021),t(53819),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(a){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.match(a.matchPattern);if(!n)return null;var i=n[0],r=e.match(a.parsePattern);if(!r)return null;var u=a.valueCallback?a.valueCallback(r[0]):r[0];return{value:u=t.valueCallback?t.valueCallback(u):u,rest:e.slice(i.length)}}},a.exports=e.default},653:function(a,e,t){t(36947),t(95021),t(93062),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"bir saniyədən az",other:"{{count}} bir saniyədən az"},xSeconds:{one:"1 saniyə",other:"{{count}} saniyə"},halfAMinute:"yarım dəqiqə",lessThanXMinutes:{one:"bir dəqiqədən az",other:"{{count}} bir dəqiqədən az"},xMinutes:{one:"bir dəqiqə",other:"{{count}} dəqiqə"},aboutXHours:{one:"təxminən 1 saat",other:"təxminən {{count}} saat"},xHours:{one:"1 saat",other:"{{count}} saat"},xDays:{one:"1 gün",other:"{{count}} gün"},aboutXWeeks:{one:"təxminən 1 həftə",other:"təxminən {{count}} həftə"},xWeeks:{one:"1 həftə",other:"{{count}} həftə"},aboutXMonths:{one:"təxminən 1 ay",other:"təxminən {{count}} ay"},xMonths:{one:"1 ay",other:"{{count}} ay"},aboutXYears:{one:"təxminən 1 il",other:"təxminən {{count}} il"},xYears:{one:"1 il",other:"{{count}} il"},overXYears:{one:"1 ildən çox",other:"{{count}} ildən çox"},almostXYears:{one:"demək olar ki 1 il",other:"demək olar ki {{count}} il"}};e.default=function(a,e,t){var i,r=n[a];return i="string"==typeof r?r:1===e?r.one:r.other.replace("{{count}}",String(e)),null!=t&&t.addSuffix?t.comparison&&t.comparison>0?i+" sonra":i+" əvvəl":i},a.exports=e.default},83208:function(a,e,t){t(36947);var n=t(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(37658)),r={date:(0,i.default)({formats:{full:"EEEE, do MMMM y 'il'",long:"do MMMM y 'il'",medium:"d MMM y 'il'",short:"dd.MM.yyyy"},defaultWidth:"full"}),time:(0,i.default)({formats:{full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,i.default)({formats:{full:"{{date}} {{time}} - 'də'",long:"{{date}} {{time}} - 'də'",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=r,a.exports=e.default},80106:function(a,e,t){t(36947),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lastWeek:"'sonuncu' eeee p -'də'",yesterday:"'dünən' p -'də'",today:"'bugün' p -'də'",tomorrow:"'sabah' p -'də'",nextWeek:"eeee p -'də'",other:"P"};e.default=function(a,e,t,i){return n[a]},a.exports=e.default},85234:function(a,e,t){t(94),t(36947);var n=t(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(94160)),r={1:"-inci",5:"-inci",8:"-inci",70:"-inci",80:"-inci",2:"-nci",7:"-nci",20:"-nci",50:"-nci",3:"-üncü",4:"-üncü",100:"-üncü",6:"-ncı",9:"-uncu",10:"-uncu",30:"-uncu",60:"-ıncı",90:"-ıncı"},u={ordinalNumber:function(a,e){var t=Number(a),n=function(a){if(0===a)return a+"-ıncı";var e=a%10,t=a%100-e,n=a>=100?100:null;return r[e]?r[e]:r[t]?r[t]:null!==n?r[n]:""}(t);return t+n},era:(0,i.default)({values:{narrow:["e.ə","b.e"],abbreviated:["e.ə","b.e"],wide:["eramızdan əvvəl","bizim era"]},defaultWidth:"wide"}),quarter:(0,i.default)({values:{narrow:["1","2","3","4"],abbreviated:["K1","K2","K3","K4"],wide:["1ci kvartal","2ci kvartal","3cü kvartal","4cü kvartal"]},defaultWidth:"wide",argumentCallback:function(a){return a-1}}),month:(0,i.default)({values:{narrow:["Y","F","M","A","M","İ","İ","A","S","O","N","D"],abbreviated:["Yan","Fev","Mar","Apr","May","İyun","İyul","Avq","Sen","Okt","Noy","Dek"],wide:["Yanvar","Fevral","Mart","Aprel","May","İyun","İyul","Avqust","Sentyabr","Oktyabr","Noyabr","Dekabr"]},defaultWidth:"wide"}),day:(0,i.default)({values:{narrow:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],short:["B.","B.e","Ç.a","Ç.","C.a","C.","Ş."],abbreviated:["Baz","Baz.e","Çər.a","Çər","Cüm.a","Cüm","Şə"],wide:["Bazar","Bazar ertəsi","Çərşənbə axşamı","Çərşənbə","Cümə axşamı","Cümə","Şənbə"]},defaultWidth:"wide"}),dayPeriod:(0,i.default)({values:{narrow:{am:"am",pm:"pm",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultWidth:"wide",formattingValues:{narrow:{am:"a",pm:"p",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},abbreviated:{am:"AM",pm:"PM",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"},wide:{am:"a.m.",pm:"p.m.",midnight:"gecəyarı",noon:"gün",morning:"səhər",afternoon:"gündüz",evening:"axşam",night:"gecə"}},defaultFormattingWidth:"wide"})};e.default=u,a.exports=e.default},15190:function(a,e,t){t(36947),t(96054);var n=t(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(7184)),r={ordinalNumber:(0,n(t(83518)).default)({matchPattern:/^(\d+)(-?(ci|inci|nci|uncu|üncü|ncı))?/i,parsePattern:/\d+/i,valueCallback:function(a){return parseInt(a,10)}}),era:(0,i.default)({matchPatterns:{narrow:/^(b|a)$/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)$/i,wide:/^(bizim eradan əvvəl|bizim era)$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/^b$/i,/^(a|c)$/i]},defaultParseWidth:"any"}),quarter:(0,i.default)({matchPatterns:{narrow:/^[1234]$/i,abbreviated:/^K[1234]$/i,wide:/^[1234](ci)? kvartal$/i},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(a){return a+1}}),month:(0,i.default)({matchPatterns:{narrow:/^[(?-i)yfmaisond]$/i,abbreviated:/^(Yan|Fev|Mar|Apr|May|İyun|İyul|Avq|Sen|Okt|Noy|Dek)$/i,wide:/^(Yanvar|Fevral|Mart|Aprel|May|İyun|İyul|Avgust|Sentyabr|Oktyabr|Noyabr|Dekabr)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^[(?-i)y]$/i,/^[(?-i)f]$/i,/^[(?-i)m]$/i,/^[(?-i)a]$/i,/^[(?-i)m]$/i,/^[(?-i)i]$/i,/^[(?-i)i]$/i,/^[(?-i)a]$/i,/^[(?-i)s]$/i,/^[(?-i)o]$/i,/^[(?-i)n]$/i,/^[(?-i)d]$/i],abbreviated:[/^Yan$/i,/^Fev$/i,/^Mar$/i,/^Apr$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avg$/i,/^Sen$/i,/^Okt$/i,/^Noy$/i,/^Dek$/i],wide:[/^Yanvar$/i,/^Fevral$/i,/^Mart$/i,/^Aprel$/i,/^May$/i,/^İyun$/i,/^İyul$/i,/^Avgust$/i,/^Sentyabr$/i,/^Oktyabr$/i,/^Noyabr$/i,/^Dekabr$/i]},defaultParseWidth:"narrow"}),day:(0,i.default)({matchPatterns:{narrow:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,short:/^(B\.|B\.e|Ç\.a|Ç\.|C\.a|C\.|Ş\.)$/i,abbreviated:/^(Baz\.e|Çər|Çər\.a|Cüm|Cüm\.a|Şə)$/i,wide:/^(Bazar|Bazar ertəsi|Çərşənbə axşamı|Çərşənbə|Cümə axşamı|Cümə|Şənbə)$/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i],abbreviated:[/^Baz$/i,/^Baz\.e$/i,/^Çər\.a$/i,/^Çər$/i,/^Cüm\.a$/i,/^Cüm$/i,/^Şə$/i],wide:[/^Bazar$/i,/^Bazar ertəsi$/i,/^Çərşənbə axşamı$/i,/^Çərşənbə$/i,/^Cümə axşamı$/i,/^Cümə$/i,/^Şənbə$/i],any:[/^B\.$/i,/^B\.e$/i,/^Ç\.a$/i,/^Ç\.$/i,/^C\.a$/i,/^C\.$/i,/^Ş\.$/i]},defaultParseWidth:"any"}),dayPeriod:(0,i.default)({matchPatterns:{narrow:/^(a|p|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i,any:/^(am|pm|a\.m\.|p\.m\.|AM|PM|gecəyarı|gün|səhər|gündüz|axşam|gecə)$/i},defaultMatchWidth:"any",parsePatterns:{any:{am:/^a$/i,pm:/^p$/i,midnight:/^gecəyarı$/i,noon:/^gün$/i,morning:/səhər$/i,afternoon:/gündüz$/i,evening:/axşam$/i,night:/gecə$/i}},defaultParseWidth:"any"})};e.default=r,a.exports=e.default},13115:function(a,e,t){t(36947);var n=t(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var i=n(t(653)),r=n(t(83208)),u=n(t(80106)),d=n(t(85234)),o=n(t(15190)),l={code:"az",formatDistance:i.default,formatLong:r.default,formatRelative:u.default,localize:d.default,match:o.default,options:{weekStartsOn:1,firstWeekContainsDate:1}};e.default=l,a.exports=e.default}}]);