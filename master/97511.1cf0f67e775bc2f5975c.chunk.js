"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[97511,42490,79829,5526,46879,42796,78688,5054],{42490:function(t,e,d){d(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=e.width?String(e.width):t.defaultWidth;return t.formats[d]||t.formats[t.defaultWidth]}},t.exports=e.default},97511:function(t,e,d){d(99785);var u=d(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var l=u(d(42490)),f={date:(0,l.default)({formats:{full:"EEEE d MMMM y",long:"d MMMM y",medium:"d MMM y",short:"yy-MM-dd"},defaultWidth:"full"}),time:(0,l.default)({formats:{full:"HH:mm:ss zzzz",long:"HH:mm:ss z",medium:"HH:mm:ss",short:"HH:mm"},defaultWidth:"full"}),dateTime:(0,l.default)({formats:{full:"{{date}} 'à' {{time}}",long:"{{date}} 'à' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},defaultWidth:"full"})};e.default=f,t.exports=e.default}}]);