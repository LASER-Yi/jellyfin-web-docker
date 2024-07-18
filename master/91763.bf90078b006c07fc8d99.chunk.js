"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91763,37658,94160,7184,83518,8117,4800,37202,83370,34286,15277,71779,9911,82420,49398,32292,60039,27017,65149,27182,4636,87530,4801,82255,99435,77077,71944,59874,21816],{37658:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},a=t.width?String(t.width):e.defaultWidth;return e.formats[a]||e.formats[e.defaultWidth]}},e.exports=t.default},94160:function(e,t,a){a(44962),a(36947),a(78557),a(82367),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t,a){var n;if("formatting"===(null!=a&&a.context?String(a.context):"standalone")&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,o=null!=a&&a.width?String(a.width):r;n=e.formattingValues[o]||e.formattingValues[r]}else{var i=e.defaultWidth,u=null!=a&&a.width?String(a.width):e.defaultWidth;n=e.values[u]||e.values[i]}return n[e.argumentCallback?e.argumentCallback(t):t]}},e.exports=t.default},7184:function(e,t,a){a(89336),a(36947),a(95021),a(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=a.width,r=n&&e.matchPatterns[n]||e.matchPatterns[e.defaultMatchWidth],o=t.match(r);if(!o)return null;var i,u=o[0],d=n&&e.parsePatterns[n]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(d)?function(e,t){for(var a=0;a<e.length;a++)if(e[a].test(u))return a}(d):function(e,t){for(var a in e)if(e.hasOwnProperty(a)&&e[a].test(u))return a}(d);return i=e.valueCallback?e.valueCallback(l):l,{value:i=a.valueCallback?a.valueCallback(i):i,rest:t.slice(u.length)}}},e.exports=t.default},83518:function(e,t,a){a(89336),a(36947),a(95021),a(53819),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=t.match(e.matchPattern);if(!n)return null;var r=n[0],o=t.match(e.parsePattern);if(!o)return null;var i=e.valueCallback?e.valueCallback(o[0]):o[0];return{value:i=a.valueCallback?a.valueCallback(i):i,rest:t.slice(r.length)}}},e.exports=t.default},8117:function(e,t,a){a(36947),a(95021),a(93062),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lessThanXSeconds:{one:"أقل من ثانية",two:"أقل من ثانيتين",threeToTen:"أقل من {{count}} ثواني",other:"أقل من {{count}} ثانية"},xSeconds:{one:"ثانية واحدة",two:"ثانيتان",threeToTen:"{{count}} ثواني",other:"{{count}} ثانية"},halfAMinute:"نصف دقيقة",lessThanXMinutes:{one:"أقل من دقيقة",two:"أقل من دقيقتين",threeToTen:"أقل من {{count}} دقائق",other:"أقل من {{count}} دقيقة"},xMinutes:{one:"دقيقة واحدة",two:"دقيقتان",threeToTen:"{{count}} دقائق",other:"{{count}} دقيقة"},aboutXHours:{one:"ساعة واحدة تقريباً",two:"ساعتين تقريبا",threeToTen:"{{count}} ساعات تقريباً",other:"{{count}} ساعة تقريباً"},xHours:{one:"ساعة واحدة",two:"ساعتان",threeToTen:"{{count}} ساعات",other:"{{count}} ساعة"},xDays:{one:"يوم واحد",two:"يومان",threeToTen:"{{count}} أيام",other:"{{count}} يوم"},aboutXWeeks:{one:"أسبوع واحد تقريبا",two:"أسبوعين تقريبا",threeToTen:"{{count}} أسابيع تقريبا",other:"{{count}} أسبوعا تقريبا"},xWeeks:{one:"أسبوع واحد",two:"أسبوعان",threeToTen:"{{count}} أسابيع",other:"{{count}} أسبوعا"},aboutXMonths:{one:"شهر واحد تقريباً",two:"شهرين تقريبا",threeToTen:"{{count}} أشهر تقريبا",other:"{{count}} شهرا تقريباً"},xMonths:{one:"شهر واحد",two:"شهران",threeToTen:"{{count}} أشهر",other:"{{count}} شهرا"},aboutXYears:{one:"سنة واحدة تقريباً",two:"سنتين تقريبا",threeToTen:"{{count}} سنوات تقريباً",other:"{{count}} سنة تقريباً"},xYears:{one:"سنة واحد",two:"سنتان",threeToTen:"{{count}} سنوات",other:"{{count}} سنة"},overXYears:{one:"أكثر من سنة",two:"أكثر من سنتين",threeToTen:"أكثر من {{count}} سنوات",other:"أكثر من {{count}} سنة"},almostXYears:{one:"ما يقارب سنة واحدة",two:"ما يقارب سنتين",threeToTen:"ما يقارب {{count}} سنوات",other:"ما يقارب {{count}} سنة"}};t.default=function(e,t,a){var r,o=n[e];return r="string"==typeof o?o:1===t?o.one:2===t?o.two:t<=10?o.threeToTen.replace("{{count}}",String(t)):o.other.replace("{{count}}",String(t)),null!=a&&a.addSuffix?a.comparison&&a.comparison>0?"خلال "+r:"منذ "+r:r},e.exports=t.default},4800:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(37658)),o={date:(0,r.default)({formats:{full:"EEEE، do MMMM y",long:"do MMMM y",medium:"d MMM y",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,r.default)({formats:{full:"HH:mm:ss",long:"HH:mm:ss",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,r.default)({formats:{full:"{{date}} 'عند الساعة' {{time}}",long:"{{date}} 'عند الساعة' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=o,e.exports=t.default},37202:function(e,t,a){a(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={lastWeek:"eeee 'الماضي عند الساعة' p",yesterday:"'الأمس عند الساعة' p",today:"'اليوم عند الساعة' p",tomorrow:"'غدا عند الساعة' p",nextWeek:"eeee 'القادم عند الساعة' p",other:"P"};t.default=function(e){return n[e]},e.exports=t.default},83370:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(94160)),o={ordinalNumber:function(e){return String(e)},era:(0,r.default)({values:{narrow:["ق","ب"],abbreviated:["ق.م.","ب.م."],wide:["قبل الميلاد","بعد الميلاد"]},defaultWidth:"wide"}),quarter:(0,r.default)({values:{narrow:["1","2","3","4"],abbreviated:["ر1","ر2","ر3","ر4"],wide:["الربع الأول","الربع الثاني","الربع الثالث","الربع الرابع"]},defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:(0,r.default)({values:{narrow:["ي","ف","م","أ","م","ي","ي","أ","س","أ","ن","د"],abbreviated:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"],wide:["يناير","فبراير","مارس","أبريل","مايو","يونيو","يوليو","أغسطس","سبتمبر","أكتوبر","نوفمبر","ديسمبر"]},defaultWidth:"wide"}),day:(0,r.default)({values:{narrow:["ح","ن","ث","ر","خ","ج","س"],short:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],abbreviated:["أحد","اثنين","ثلاثاء","أربعاء","خميس","جمعة","سبت"],wide:["الأحد","الاثنين","الثلاثاء","الأربعاء","الخميس","الجمعة","السبت"]},defaultWidth:"wide"}),dayPeriod:(0,r.default)({values:{narrow:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"},abbreviated:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"},wide:{am:"ص",pm:"م",morning:"الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"المساء",night:"الليل",midnight:"منتصف الليل"}},defaultWidth:"wide",formattingValues:{narrow:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"},abbreviated:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"},wide:{am:"ص",pm:"م",morning:"في الصباح",noon:"الظهر",afternoon:"بعد الظهر",evening:"في المساء",night:"في الليل",midnight:"منتصف الليل"}},defaultFormattingWidth:"wide"})};t.default=o,e.exports=t.default},34286:function(e,t,a){a(36947),a(96054);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(83518)),o=n(a(7184)),i={ordinalNumber:(0,r.default)({matchPattern:/^(\d+)(th|st|nd|rd)?/i,parsePattern:/\d+/i,valueCallback:function(e){return parseInt(e,10)}}),era:(0,o.default)({matchPatterns:{narrow:/[قب]/,abbreviated:/[قب]\.م\./,wide:/(قبل|بعد) الميلاد/},defaultMatchWidth:"wide",parsePatterns:{any:[/قبل/,/بعد/]},defaultParseWidth:"any"}),quarter:(0,o.default)({matchPatterns:{narrow:/^[1234]/i,abbreviated:/ر[1234]/,wide:/الربع (الأول|الثاني|الثالث|الرابع)/},defaultMatchWidth:"wide",parsePatterns:{any:[/1/i,/2/i,/3/i,/4/i]},defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:(0,o.default)({matchPatterns:{narrow:/^[أيفمسند]/,abbreviated:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/,wide:/^(يناير|فبراير|مارس|أبريل|مايو|يونيو|يوليو|أغسطس|سبتمبر|أكتوبر|نوفمبر|ديسمبر)/},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ي/i,/^ف/i,/^م/i,/^أ/i,/^م/i,/^ي/i,/^ي/i,/^أ/i,/^س/i,/^أ/i,/^ن/i,/^د/i],any:[/^يناير/i,/^فبراير/i,/^مارس/i,/^أبريل/i,/^مايو/i,/^يونيو/i,/^يوليو/i,/^أغسطس/i,/^سبتمبر/i,/^أكتوبر/i,/^نوفمبر/i,/^ديسمبر/i]},defaultParseWidth:"any"}),day:(0,o.default)({matchPatterns:{narrow:/^[حنثرخجس]/i,short:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,abbreviated:/^(أحد|اثنين|ثلاثاء|أربعاء|خميس|جمعة|سبت)/i,wide:/^(الأحد|الاثنين|الثلاثاء|الأربعاء|الخميس|الجمعة|السبت)/i},defaultMatchWidth:"wide",parsePatterns:{narrow:[/^ح/i,/^ن/i,/^ث/i,/^ر/i,/^خ/i,/^ج/i,/^س/i],wide:[/^الأحد/i,/^الاثنين/i,/^الثلاثاء/i,/^الأربعاء/i,/^الخميس/i,/^الجمعة/i,/^السبت/i],any:[/^أح/i,/^اث/i,/^ث/i,/^أر/i,/^خ/i,/^ج/i,/^س/i]},defaultParseWidth:"any"}),dayPeriod:(0,o.default)({matchPatterns:{narrow:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/,any:/^(ص|م|منتصف الليل|الظهر|بعد الظهر|في الصباح|في المساء|في الليل)/},defaultMatchWidth:"any",parsePatterns:{any:{am:/^ص/,pm:/^م/,midnight:/منتصف الليل/,noon:/الظهر/,afternoon:/بعد الظهر/,morning:/في الصباح/,evening:/في المساء/,night:/في الليل/}},defaultParseWidth:"any"})};t.default=i,e.exports=t.default},91763:function(e,t,a){a(36947);var n=a(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=n(a(8117)),o=n(a(4800)),i=n(a(37202)),u=n(a(83370)),d=n(a(34286)),l={code:"ar",formatDistance:r.default,formatLong:o.default,formatRelative:i.default,localize:u.default,match:d.default,options:{weekStartsOn:6,firstWeekContainsDate:1}};t.default=l,e.exports=t.default}}]);