"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6170,42490,79829,5526,46879,42796,78688,5054],{42490:function(t,e,d){d(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=e.width?String(e.width):t.defaultWidth;return t.formats[d]||t.formats[t.defaultWidth]}},t.exports=e.default},6170:function(t,e,d){d(99785);var u=d(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(d(42490)),f={date:(0,a.default)({formats:{full:"EEEE, do 'de' MMMM y",long:"y-MMMM-dd",medium:"y-MMM-dd",short:"yyyy-MM-dd"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"Ho 'horo kaj' m:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{any:"{{date}} {{time}}"},defaultWidth:"any"})};e.default=f,t.exports=e.default}}]);