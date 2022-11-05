/*! For license information please see dashboard-devices-devices.1295bc809fb38f9d043b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[69375],{69552:function(t,e,r){r.r(e),r.d(e,{default:function(){return L}}),r(5769),r(63238),r(61418),r(17460),r(14078),r(61013),r(98010),r(23938),r(25901),r(92189),r(91047),r(98521),r(6798),r(82923),r(21897),r(99785),r(12274),r(55849),r(50987),r(60190),r(72410);var n=r(65009),o=r.n(n),i=r(61570),a=r(28540),c=r(72365),u=r(94994),s=r(51869),l=r(20990),d=r(15039),f=(r(38228),r(82427),r(60635)),h=r(3137);function v(t){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},v(t)}function p(){p=function(){return t};var t={},e=Object.prototype,r=e.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},o=n.iterator||"@@iterator",i=n.asyncIterator||"@@asyncIterator",a=n.toStringTag||"@@toStringTag";function c(t,e,r){return Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{c({},"")}catch(t){c=function(t,e,r){return t[e]=r}}function u(t,e,r,n){var o=e&&e.prototype instanceof d?e:d,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,e,r){var n="suspendedStart";return function(o,i){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw i;return{value:void 0,done:!0}}for(r.method=o,r.arg=i;;){var a=r.delegate;if(a){var c=L(a,r);if(c){if(c===l)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(t,e,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===l)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(t,r,a),i}function s(t,e,r){try{return{type:"normal",arg:t.call(e,r)}}catch(t){return{type:"throw",arg:t}}}t.wrap=u;var l={};function d(){}function f(){}function h(){}var y={};c(y,o,(function(){return this}));var m=Object.getPrototypeOf,g=m&&m(m(D([])));g&&g!==e&&r.call(g,o)&&(y=g);var w=h.prototype=d.prototype=Object.create(y);function b(t){["next","throw","return"].forEach((function(e){c(t,e,(function(t){return this._invoke(e,t)}))}))}function x(t,e){function n(o,i,a,c){var u=s(t[o],t,i);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==v(d)&&r.call(d,"__await")?e.resolve(d.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(d).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(u.arg)}var o;this._invoke=function(t,r){function i(){return new e((function(e,o){n(t,r,e,o)}))}return o=o?o.then(i,i):i()}}function L(t,e){var r=t.iterator[e.method];if(void 0===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method))return l;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return l}var n=s(r,t.iterator,e.arg);if("throw"===n.type)return e.method="throw",e.arg=n.arg,e.delegate=null,l;var o=n.arg;return o?o.done?(e[t.resultName]=o.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,l):o:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,l)}function P(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(P,this),this.reset(!0)}function D(t){if(t){var e=t[o];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(r.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=void 0,e.done=!0,e};return i.next=i}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return f.prototype=h,c(w,"constructor",h),c(h,"constructor",f),f.displayName=c(h,a,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===f||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,h):(t.__proto__=h,c(t,a,"GeneratorFunction")),t.prototype=Object.create(w),t},t.awrap=function(t){return{__await:t}},b(x.prototype),c(x.prototype,i,(function(){return this})),t.AsyncIterator=x,t.async=function(e,r,n,o,i){void 0===i&&(i=Promise);var a=new x(u(e,r,n,o),i);return t.isGeneratorFunction(r)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},b(w),c(w,a,"Generator"),c(w,o,(function(){return this})),c(w,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=[];for(var r in t)e.push(r);return e.reverse(),function r(){for(;e.length;){var n=e.pop();if(n in t)return r.value=n,r.done=!1,r}return r.done=!0,r}},t.values=D,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&r.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function n(r,n){return a.type="throw",a.arg=t,e.next=r,n&&(e.method="next",e.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return n("end");if(i.tryLoc<=this.prev){var c=r.call(i,"catchLoc"),u=r.call(i,"finallyLoc");if(c&&u){if(this.prev<i.catchLoc)return n(i.catchLoc,!0);if(this.prev<i.finallyLoc)return n(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return n(i.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return n(i.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,l):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),l},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.finallyLoc===t)return this.complete(r.completion,r.afterLoc),E(r),l}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var r=this.tryEntries[e];if(r.tryLoc===t){var n=r.completion;if("throw"===n.type){var o=n.arg;E(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,r){return this.delegate={iterator:D(t),resultName:e,nextLoc:r},"next"===this.method&&(this.arg=void 0),l}},t}function y(t,e,r,n,o,i,a){try{var c=t[i](a),u=c.value}catch(t){return void r(t)}c.done?e(u):Promise.resolve(u).then(n,o)}function m(t){return function(){var e=this,r=arguments;return new Promise((function(n,o){var i=t.apply(e,r);function a(t){y(i,n,o,a,c,"next",t)}function c(t){y(i,n,o,a,c,"throw",t)}a(void 0)}))}}var g=[];function w(t){return t!==ApiClient.deviceId()}function b(t){a.ZP.show(),ApiClient.getJSON(ApiClient.getUrl("Devices")).then((function(e){!function(t,e){var r=(0,d.LP)(),n="";n+=e.map((function(t){var e="";e+="<div data-id='"+t.Id+"' class='card backdropCard'>",e+='<div class="cardBox visualCardBox">',e+='<div class="cardScalable">',e+='<div class="cardPadder cardPadder-backdrop"></div>',e+='<a is="emby-linkbutton" href="'.concat(x?"#/device.html?id="+t.Id:"#",'" class="cardContent cardImageContainer ').concat(i.default.getDefaultBackgroundClass(),'">');var n=s.ZP.getDeviceIcon(t);return n?(e+='<div class="cardImage" style="background-image:url(\''+n+"');background-size: auto 64%;background-position:center center;\">",e+="</div>"):e+='<span class="cardImageIcon material-icons tablet_android" aria-hidden="true"></span>',e+="</a>",e+="</div>",e+='<div class="cardFooter">',(x||w(t.Id))&&(u.ZP.getIsRTL()?e+='<div style="text-align:left; float:left;padding-top:5px;">':e+='<div style="text-align:right; float:right;padding-top:5px;">',e+='<button type="button" is="paper-icon-button-light" data-id="'+t.Id+'" title="'+u.ZP.translate("Menu")+'" class="btnDeviceMenu"><span class="material-icons more_vert" aria-hidden="true"></span></button>',e+="</div>"),e+="<div class='cardText'>",e+=o()(t.Name),e+="</div>",e+="<div class='cardText cardText-secondary'>",e+=o()(t.AppName+" "+t.AppVersion),e+="</div>",e+="<div class='cardText cardText-secondary'>",t.LastUserName&&(e+=o()(t.LastUserName),e+=", "+(0,l.Z)(Date.parse(t.DateLastActivity),r)),e+="&nbsp;",e+="</div>",e+="</div>",(e+="</div>")+"</div>"})).join(""),t.querySelector(".devicesList").innerHTML=n}(t,e.Items),g=e.Items.map((function(t){return t.Id})),a.ZP.hide()}))}var x=ApiClient.isMinServerVersion("3.4.1.31");function L(t){t.querySelector(".devicesList").addEventListener("click",(function(e){var n=c.ZP.parentWithClass(e.target,"btnDeviceMenu");n&&function(t,e,n){var o=[];x&&o.push({name:u.ZP.translate("Edit"),id:"open",icon:"mode_edit"}),w(n)&&o.push({name:u.ZP.translate("Delete"),id:"delete",icon:"delete"}),Promise.resolve().then(r.bind(r,12801)).then((function(r){r.default.show({items:o,positionTo:e,callback:function(e){switch(e){case"open":f.ZP.navigate("device.html?id="+n);break;case"delete":!function(t,e){var r=u.ZP.translate("DeleteDeviceConfirmation");(0,h.Z)({text:r,title:u.ZP.translate("HeaderDeleteDevice"),confirmText:u.ZP.translate("Delete"),primary:"delete"}).then(m(p().mark((function r(){return p().wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return a.ZP.show(),r.next=3,ApiClient.deleteDevice(e);case 3:b(t);case 4:case"end":return r.stop()}}),r)}))))}(t,n)}}})}))}(t,n,n.getAttribute("data-id"))})),t.addEventListener("viewshow",(function(){b(this)})),t.querySelector("#deviceDeleteAll").addEventListener("click",(function(){var e,r;e=t,r=u.ZP.translate("DeleteDevicesConfirmation"),(0,h.Z)({text:r,title:u.ZP.translate("HeaderDeleteDevices"),confirmText:u.ZP.translate("Delete"),primary:"delete"}).then(m(p().mark((function t(){return p().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a.ZP.show(),t.next=3,Promise.all(g.filter(w).map((function(t){return ApiClient.deleteDevice(t)})));case 3:b(e);case 4:case"end":return t.stop()}}),t)}))))}))}}}]);