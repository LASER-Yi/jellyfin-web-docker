"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17355,37658],{37658:function(t,e,d){d(36947),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=e.width?String(e.width):t.defaultWidth;return t.formats[d]||t.formats[t.defaultWidth]}},t.exports=e.default},17355:function(t,e,d){d(36947);var a=d(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var u=a(d(37658)),l={date:(0,u.default)({formats:{full:"EEEE, d MMMM yyyy",long:"d MMMM yyyy",medium:"d MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,u.default)({formats:{full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},defaultWidth:"full"}),dateTime:(0,u.default)({formats:{full:"{{date}} 'am' {{time}}",long:"{{date}} 'am' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=l,t.exports=e.default}}]);