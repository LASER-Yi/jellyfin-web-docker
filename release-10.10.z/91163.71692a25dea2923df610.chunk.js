"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91163],{91163:function(o,e,t){t(36947),t(95021),t(93062),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={lessThanXSeconds:{one:"1秒未満",other:"{{count}}秒未満",oneWithSuffix:"約1秒",otherWithSuffix:"約{{count}}秒"},xSeconds:{one:"1秒",other:"{{count}}秒"},halfAMinute:"30秒",lessThanXMinutes:{one:"1分未満",other:"{{count}}分未満",oneWithSuffix:"約1分",otherWithSuffix:"約{{count}}分"},xMinutes:{one:"1分",other:"{{count}}分"},aboutXHours:{one:"約1時間",other:"約{{count}}時間"},xHours:{one:"1時間",other:"{{count}}時間"},xDays:{one:"1日",other:"{{count}}日"},aboutXWeeks:{one:"約1週間",other:"約{{count}}週間"},xWeeks:{one:"1週間",other:"{{count}}週間"},aboutXMonths:{one:"約1か月",other:"約{{count}}か月"},xMonths:{one:"1か月",other:"{{count}}か月"},aboutXYears:{one:"約1年",other:"約{{count}}年"},xYears:{one:"1年",other:"{{count}}年"},overXYears:{one:"1年以上",other:"{{count}}年以上"},almostXYears:{one:"1年近く",other:"{{count}}年近く"}};e.default=function(o,e,t){var u;t=t||{};var r=n[o];return u="string"==typeof r?r:1===e?t.addSuffix&&r.oneWithSuffix?r.oneWithSuffix:r.one:t.addSuffix&&r.otherWithSuffix?r.otherWithSuffix.replace("{{count}}",String(e)):r.other.replace("{{count}}",String(e)),t.addSuffix?t.comparison&&t.comparison>0?u+"後":u+"前":u},o.exports=e.default}}]);