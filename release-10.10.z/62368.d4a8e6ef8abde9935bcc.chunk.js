"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[62368,37658],{37658:function(t,e,d){d(36947),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=e.width?String(e.width):t.defaultWidth;return t.formats[d]||t.formats[t.defaultWidth]}},t.exports=e.default},62368:function(t,e,d){d(36947);var u=d(96784).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(d(37658)),f={date:(0,a.default)({formats:{full:"EEEE, dd MMMM yyyy",long:"dd MMMM yyyy",medium:"dd MMM yyyy",short:"dd/MM/yyyy"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"H:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};e.default=f,t.exports=e.default}}]);