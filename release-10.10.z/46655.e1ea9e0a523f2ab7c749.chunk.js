"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[46655,37658],{37658:function(e,t,d){d(36947),Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){return function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=t.width?String(t.width):e.defaultWidth;return e.formats[d]||e.formats[e.defaultWidth]}},e.exports=t.default},46655:function(e,t,d){d(36947);var u=d(96784).default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var l=u(d(37658)),f={date:(0,l.default)({formats:{full:"EEEE, d 'de' MMMM 'de' y",long:"d 'de' MMMM 'de' y",medium:"d 'de' MMM 'de' y",short:"dd/MM/y"},defaultWidth:"full"}),time:(0,l.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,l.default)({formats:{full:"{{date}} 'às' {{time}}",long:"{{date}} 'às' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};t.default=f,e.exports=t.default}}]);