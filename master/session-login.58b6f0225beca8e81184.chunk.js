/*! For license information please see session-login.58b6f0225beca8e81184.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[37051],{76933:function(e,t,r){r.r(t),r.d(t,{default:function(){return E}}),r(99785),r(25901),r(92189),r(91047),r(98521),r(6798),r(82923),r(21897),r(12274),r(55849),r(50987),r(60190),r(72410),r(15610),r(52077),r(5769),r(95623),r(23938),r(63238),r(61418),r(17460),r(14078);var n=r(31699),o=r.n(n),a=r(76728),i=r(84881),c=r(59858),u=r(72365),l=r(28540),s=r(30325),d=r(71487),f=r(57366),h=r(94994),v=(r(12291),r(60635)),y=r(18613),p=r(56663),m=r(93355),g=r(37099),b=r(61570);function w(e){return w="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},w(e)}function S(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function L(){L=function(){return e};var e={},t=Object.prototype,r=t.hasOwnProperty,n=Object.defineProperty||function(e,t,r){e[t]=r.value},o="function"==typeof Symbol?Symbol:{},a=o.iterator||"@@iterator",i=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{u({},"")}catch(e){u=function(e,t,r){return e[t]=r}}function l(e,t,r,o){var a=t&&t.prototype instanceof f?t:f,i=Object.create(a.prototype),c=new C(o||[]);return n(i,"_invoke",{value:x(e,r,c)}),i}function s(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=l;var d={};function f(){}function h(){}function v(){}var y={};u(y,a,(function(){return this}));var p=Object.getPrototypeOf,m=p&&p(p(E([])));m&&m!==t&&r.call(m,a)&&(y=m);var g=v.prototype=f.prototype=Object.create(y);function b(e){["next","throw","return"].forEach((function(t){u(e,t,(function(e){return this._invoke(t,e)}))}))}function S(e,t){function o(n,a,i,c){var u=s(e[n],e,a);if("throw"!==u.type){var l=u.arg,d=l.value;return d&&"object"==w(d)&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){o("next",e,i,c)}),(function(e){o("throw",e,i,c)})):t.resolve(d).then((function(e){l.value=e,i(l)}),(function(e){return o("throw",e,i,c)}))}c(u.arg)}var a;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){o(e,r,t,n)}))}return a=a?a.then(n,n):n()}})}function x(e,t,r){var n="suspendedStart";return function(o,a){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===o)throw a;return{value:void 0,done:!0}}for(r.method=o,r.arg=a;;){var i=r.delegate;if(i){var c=k(i,r);if(c){if(c===d)continue;return c}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=s(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===d)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}function k(e,t){var r=t.method,n=e.iterator[r];if(void 0===n)return t.delegate=null,"throw"===r&&e.iterator.return&&(t.method="return",t.arg=void 0,k(e,t),"throw"===t.method)||"return"!==r&&(t.method="throw",t.arg=new TypeError("The iterator does not provide a '"+r+"' method")),d;var o=s(n,e.iterator,t.arg);if("throw"===o.type)return t.method="throw",t.arg=o.arg,t.delegate=null,d;var a=o.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,d):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,d)}function P(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function q(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function C(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(P,this),this.reset(!0)}function E(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return h.prototype=v,n(g,"constructor",{value:v,configurable:!0}),n(v,"constructor",{value:h,configurable:!0}),h.displayName=u(v,c,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===h||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,u(e,c,"GeneratorFunction")),e.prototype=Object.create(g),e},e.awrap=function(e){return{__await:e}},b(S.prototype),u(S.prototype,i,(function(){return this})),e.AsyncIterator=S,e.async=function(t,r,n,o,a){void 0===a&&(a=Promise);var i=new S(l(t,r,n,o),a);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},b(g),u(g,c,"Generator"),u(g,a,(function(){return this})),u(g,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=Object(e),r=[];for(var n in t)r.push(n);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},e.values=E,C.prototype={constructor:C,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(q),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var o=this.tryEntries.length-1;o>=0;--o){var a=this.tryEntries[o],i=a.completion;if("root"===a.tryLoc)return n("end");if(a.tryLoc<=this.prev){var c=r.call(a,"catchLoc"),u=r.call(a,"finallyLoc");if(c&&u){if(this.prev<a.catchLoc)return n(a.catchLoc,!0);if(this.prev<a.finallyLoc)return n(a.finallyLoc)}else if(c){if(this.prev<a.catchLoc)return n(a.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return n(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var a=o;break}}a&&("break"===e||"continue"===e)&&a.tryLoc<=t&&t<=a.finallyLoc&&(a=null);var i=a?a.completion:{};return i.type=e,i.arg=t,a?(this.method="next",this.next=a.finallyLoc,d):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),d},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),q(r),d}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var o=n.arg;q(r)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:E(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),d}},e}function x(e,t,r,n,o,a,i){try{var c=e[a](i),u=c.value}catch(e){return void r(e)}c.done?t(u):Promise.resolve(u).then(n,o)}var k=!f.Z.slow&&!f.Z.edge;function P(e,t,r,n){l.ZP.show(),t.authenticateUserByName(r,n).then((function(e){var r=e.User;l.ZP.hide(),q(r.Id,e.AccessToken,t)}),(function(t){if(e.querySelector("#txtManualPassword").value="",l.ZP.hide(),[401,403].includes(t.status)){var r=401===t.status?"MessageInvalidUser":"MessageUnauthorizedUser";(0,p.Z)(h.ZP.translate(r))}else v.ZP.alert({message:h.ZP.translate("MessageUnableToConnectToServer"),title:h.ZP.translate("HeaderConnectionFailure")})}))}function q(e,t,r){v.ZP.onServerChanged(e,t,r),v.ZP.navigate("home.html")}function C(e,t,r){e.querySelector(".chkRememberLogin").checked=c.Z.enableAutoLogin(),e.querySelector(".manualLoginForm").classList.remove("hide"),e.querySelector(".visualLoginForm").classList.add("hide"),e.querySelector(".btnManual").classList.add("hide"),r?e.querySelector("#txtManualPassword").focus():e.querySelector("#txtManualName").focus(),t?e.querySelector(".btnCancel").classList.remove("hide"):e.querySelector(".btnCancel").classList.add("hide")}function E(e,t){function n(){var e=t.serverid;return e?y.Z.getOrCreateApiClient(e):ApiClient}function f(){e.querySelector(".visualLoginForm").classList.remove("hide"),e.querySelector(".manualLoginForm").classList.add("hide"),e.querySelector(".btnManual").classList.remove("hide"),Promise.resolve().then(r.bind(r,87680)).then((function(t){t.default.autoFocus(e)}))}e.querySelector("#divUsers").addEventListener("click",(function(t){var r=u.ZP.parentWithClass(t.target,"card"),o=r?r.querySelector(".cardContent"):null;if(o){var a=e,i=o.getAttribute("data-userid"),c=o.getAttribute("data-username"),l=o.getAttribute("data-haspw");"manual"===i?(a.querySelector("#txtManualName").value="",C(a,!0)):"false"==l?P(a,n(),c,""):(a.querySelector("#txtManualName").value=c,a.querySelector("#txtManualPassword").value="",C(a,!0,!0))}})),e.querySelector(".manualLoginForm").addEventListener("submit",(function(t){c.Z.enableAutoLogin(e.querySelector(".chkRememberLogin").checked);var r=n();return P(e,r,e.querySelector("#txtManualName").value,e.querySelector("#txtManualPassword").value),t.preventDefault(),!1})),e.querySelector(".btnForgotPassword").addEventListener("click",(function(){v.ZP.navigate("forgotpassword.html")})),e.querySelector(".btnCancel").addEventListener("click",f),e.querySelector(".btnQuick").addEventListener("click",(function(){return e=n(),t=e.getUrl("/QuickConnect/Initiate"),e.ajax({type:"POST",url:t},!0).then((function(e){return e.json()})).then((function(t){if(!t.Secret||!t.Code)return console.error("Malformed quick connect response",t),!1;(0,g.Z)({dialogOptions:{id:"quickConnectAlert"},title:h.ZP.translate("QuickConnect"),text:h.ZP.translate("QuickConnectAuthorizeCode",t.Code)});var r=e.getUrl("/QuickConnect/Connect?Secret="+t.Secret),n=setInterval((function(){e.getJSON(r).then(function(){var t,r=(t=L().mark((function t(r){var o,a;return L().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(r.Authenticated){t.next=2;break}return t.abrupt("return");case 2:return clearInterval(n),(o=document.getElementById("quickConnectAlert"))&&m.default.close(o),t.next=7,e.quickConnect(r.Secret);case 7:q((a=t.sent).User.Id,a.AccessToken,e);case 9:case"end":return t.stop()}}),t)})),function(){var e=this,r=arguments;return new Promise((function(n,o){var a=t.apply(e,r);function i(e){x(a,n,o,i,c,"next",e)}function c(e){x(a,n,o,i,c,"throw",e)}i(void 0)}))});return function(e){return r.apply(this,arguments)}}(),(function(e){clearInterval(n);var t=document.getElementById("quickConnectAlert");t&&m.default.close(t),v.ZP.alert({message:h.ZP.translate("QuickConnectDeactivated"),title:h.ZP.translate("HeaderError")}),console.error("Unable to login with quick connect",e)}))}),5e3,r);return!0}),(function(e){return v.ZP.alert({message:h.ZP.translate("QuickConnectNotActive"),title:h.ZP.translate("HeaderError")}),console.error("Quick connect error: ",e),!1})),!1;var e,t})),e.querySelector(".btnManual").addEventListener("click",(function(){e.querySelector("#txtManualName").value="",C(e,!0)})),e.querySelector(".btnSelectServer").addEventListener("click",(function(){v.ZP.selectServer()})),e.addEventListener("viewshow",(function(){l.ZP.show(),d.Z.setTransparentMenu(!0),i.M.supports("multiserver")||e.querySelector(".btnSelectServer").classList.add("hide");var t=n();t.getQuickConnect("Enabled").then((function(t){!0===t&&e.querySelector(".btnQuick").classList.remove("hide")})).catch((function(){console.debug("Failed to get QuickConnect status")})),t.getPublicUsers().then((function(r){r.length?(f(),function(e,t,r){for(var n="",o=0;o<r.length;o++){var a=r[o],i="card squareCard scalableCard squareCard-scalable";s.Z.tv&&(i+=" show-focus",k&&(i+=" show-animation")),n+='<button type="button" class="'+i+'">',n+='<div class="cardBox cardBox-bottompadded">',n+='<div class="cardScalable">',n+='<div class="cardPadder cardPadder-square"></div>',n+='<div class="cardContent" data-haspw="'.concat(a.HasPassword,'" data-username="').concat(a.Name,'" data-userid="').concat(a.Id,'">'),a.PrimaryImageTag?n+='<div class="cardImageContainer coveredImage" style="background-image:url(\''+t.getUserImageUrl(a.Id,{width:300,tag:a.PrimaryImageTag,type:"Primary"})+"');\"></div>":(n+='<div class="cardImage flex align-items-center justify-content-center '.concat(b.default.getDefaultBackgroundClass(),'">'),n+='<span class="material-icons cardImageIcon person" aria-hidden="true"></span>',n+="</div>"),n+="</div>",n+="</div>",n+='<div class="cardFooter visualCardBox-cardFooter">',n+='<div class="cardText singleCardText cardTextCentered">'+a.Name+"</div>",n+="</div>",n+="</div>",n+="</button>"}e.querySelector("#divUsers").innerHTML=n}(e,t,r)):(e.querySelector("#txtManualName").value="",C(e,!1,!1))})).catch().then((function(){l.ZP.hide()})),t.getJSON(t.getUrl("Branding/Configuration")).then((function(t){var r=e.querySelector(".disclaimer");r.innerHTML=o().sanitize((0,a.TU)(t.LoginDisclaimer||""));var n,i=function(e,t){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=function(e,t){if(e){if("string"==typeof e)return S(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?S(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){r&&(e=r);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,c=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return i=e.done,e},e:function(e){c=!0,a=e},f:function(){try{i||null==r.return||r.return()}finally{if(c)throw a}}}}(r.querySelectorAll("a"));try{for(i.s();!(n=i.n()).done;){var c=n.value;c.rel="noopener noreferrer",c.target="_blank",c.classList.add("button-link"),c.setAttribute("is","emby-linkbutton"),s.Z.tv&&(c.tabIndex=-1)}}catch(e){i.e(e)}finally{i.f()}}))})),e.addEventListener("viewhide",(function(){d.Z.setTransparentMenu(!1)}))}}}]);