"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7469,42490,79829,5526,46879,42796,78688,5054],{42490:function(t,e,d){d(99785),Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(t){return function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},d=e.width?String(e.width):t.defaultWidth;return t.formats[d]||t.formats[t.defaultWidth]}},t.exports=e.default},7469:function(t,e,d){d(99785);var u=d(73203).default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=u(d(42490)),l={date:(0,a.default)({formats:{full:"y'年'M'月'd'日' EEEE",long:"y'年'M'月'd'日'",medium:"yyyy-MM-dd",short:"yy-MM-dd"},defaultWidth:"full"}),time:(0,a.default)({formats:{full:"zzzz a h:mm:ss",long:"z a h:mm:ss",medium:"a h:mm:ss",short:"a h:mm"},defaultWidth:"full"}),dateTime:(0,a.default)({formats:{full:"{{date}} {{time}}",long:"{{date}} {{time}}",medium:"{{date}} {{time}}",short:"{{date}} {{time}}"},defaultWidth:"full"})};e.default=l,t.exports=e.default}}]);