"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10763],{10763:function(e,a,n){function t(e,a){var n=[];switch(e.textSize||""){case"smaller":n.push({name:"font-size",value:".8em"});break;case"small":n.push({name:"font-size",value:"inherit"});break;case"larger":n.push({name:"font-size",value:"2em"});break;case"extralarge":n.push({name:"font-size",value:"2.2em"});break;case"large":n.push({name:"font-size",value:"1.72em"});break;default:n.push({name:"font-size",value:"1.36em"})}switch("bold"===(e.textWeight||"")?n.push({name:"font-weight",value:"bold"}):n.push({name:"font-weight",value:"normal"}),e.dropShadow||""){case"raised":n.push({name:"text-shadow",value:"-1px -1px white, 0px -1px white, -1px 0px white, 1px 1px black, 0px 1px black, 1px 0px black"});break;case"depressed":n.push({name:"text-shadow",value:"1px 1px white, 0px 1px white, 1px 0px white, -1px -1px black, 0px -1px black, -1px 0px black"});break;case"uniform":n.push({name:"text-shadow",value:"-1px 0px #000000, 0px 1px #000000, 1px 0px #000000, 0px -1px #000000"});break;case"none":n.push({name:"text-shadow",value:"none"});break;default:n.push({name:"text-shadow",value:"#000000 0px 0px 7px"})}var t=e.textBackground||"transparent";t&&n.push({name:"background-color",value:t});var s=e.textColor||"#ffffff";switch(s&&n.push({name:"color",value:s}),e.font||""){case"typewriter":n.push({name:"font-family",value:'"Courier New",monospace'}),n.push({name:"font-variant",value:"none"});break;case"print":n.push({name:"font-family",value:"Georgia,Times New Roman,Arial,Helvetica,serif"}),n.push({name:"font-variant",value:"none"});break;case"console":n.push({name:"font-family",value:"Consolas,Lucida Console,Menlo,Monaco,monospace"}),n.push({name:"font-variant",value:"none"});break;case"cursive":n.push({name:"font-family",value:"Lucida Handwriting,Brush Script MT,Segoe Script,cursive,Quintessential,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"none"});break;case"casual":n.push({name:"font-family",value:"Gabriola,Segoe Print,Comic Sans MS,Chalkboard,Short Stack,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"none"});break;case"smallcaps":n.push({name:"font-family",value:"Copperplate Gothic,Copperplate Gothic Bold,Copperplate,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"small-caps"});break;default:n.push({name:"font-family",value:"inherit"}),n.push({name:"font-variant",value:"none"})}if(!a){var p=parseInt(e.verticalPosition,10),u=Math.abs(1.35*p);p<0?(n.push({name:"min-height",value:"".concat(u,"em")}),n.push({name:"margin-top",value:""})):(n.push({name:"min-height",value:""}),n.push({name:"margin-top",value:"".concat(u,"em")}))}return n}function s(e,a){var n=[];return a||(parseInt(e.verticalPosition,10)<0?(n.push({name:"top",value:""}),n.push({name:"bottom",value:"0"})):(n.push({name:"top",value:"0"}),n.push({name:"bottom",value:""}))),n}function p(e,a){return{text:t(e,a),window:s(e,a)}}function u(e,a){for(var n=0,t=e.length;n<t;n++){var s=e[n];a.style[s.name]=s.value}}function o(e,a){var n=p(a,!!e.preview);e.text&&u(n.text,e.text),e.window&&u(n.window,e.window)}n.r(a),n.d(a,{applyStyles:function(){return o},getStyles:function(){return p}}),n(32081),a.default={getStyles:p,applyStyles:o}}}]);