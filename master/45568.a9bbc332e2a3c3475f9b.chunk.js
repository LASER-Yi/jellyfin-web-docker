/*! For license information please see 45568.a9bbc332e2a3c3475f9b.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[45568,14510,96307],{63001:function(t,e,n){var r=n(46782),o=n(34789),i=n(79617),a=(n(69177),Object.create(HTMLSelectElement.prototype));function c(){return!(!o.A.edgeUwp&&!o.A.xboxOne&&(o.A.tizen||o.A.orsay||o.A.web0s||!o.A.tv&&r.A.tv))}function s(t){var e=l(t),n=e?e.textContent||e.innerText:null;i.default.show({items:t.options,positionTo:t,title:n}).then((function(e){!function(t,e){t.value=e}(t,e),function(t){var e=new Event("change",{bubbles:!1,cancelable:!0});t.dispatchEvent(e)}(t)}))}function l(t){for(var e=t.previousSibling;e&&"LABEL"!==e.tagName;)e=e.previousSibling;return e}function u(){var t=l(this);t&&t.classList.add("selectLabelFocused")}function h(){var t=l(this);t&&t.classList.remove("selectLabelFocused")}function f(t){t.button||c()||(t.preventDefault(),s(this))}function d(t){switch(t.keyCode){case 13:return void(c()||(t.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(r.A.tv&&t.preventDefault())}}var y=0;a.createdCallback=function(){this.id||(this.id="embyselect"+y,y++),this.classList.add("emby-select-withcolor"),r.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",f),this.addEventListener("keydown",d),this.addEventListener("focus",u),this.addEventListener("blur",h)},a.attachedCallback=function(){var t;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var e,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(t=this.parentNode)||void 0===t||t.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(e=this.parentNode)||void 0===e||e.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},a.setLabel=function(t){var e;(null===(e=this.parentNode)||void 0===e?void 0:e.querySelector("label")).innerText=t},document.registerElement("emby-select",{prototype:a,extends:"select"})},4438:function(t,e,n){n.r(e),n.d(e,{getSetting:function(){return i},setSetting:function(){return a}});var r=n(90381),o="syncPlay";function i(t){return r.A.get(t,o)}function a(t,e){return r.A.set(t,e,o)}},45568:function(t,e,n){n.r(e),n(44962),n(78557),n(90076),n(83994),n(82367),n(81678),n(4754),n(29305),n(32733),n(94),n(36947),n(84701),n(51770),n(2623),n(10849),n(70389),n(26437),n(23630),n(52697),n(87324),n(89336);var r=n(4438),o=n(79754),i=n(46782),a=n(38829),c=n(56869),s=n(50764),l=n(9482),u=n(66176),h=n(62014);function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function d(){d=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof b?e:b,a=Object.create(i.prototype),c=new P(r||[]);return o(a,"_invoke",{value:C(t,n,c)}),a}function h(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var y="suspendedStart",v="suspendedYield",p="executing",m="completed",S={};function b(){}function g(){}function x(){}var w={};l(w,a,(function(){return this}));var k=Object.getPrototypeOf,T=k&&k(k(q([])));T&&T!==n&&r.call(T,a)&&(w=T);var L=x.prototype=b.prototype=Object.create(w);function A(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function E(t,e){function n(o,i,a,c){var s=h(t[o],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==f(u)&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function C(e,n,r){var o=y;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=D(c,r);if(s){if(s===S)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=h(e,n,r);if("normal"===l.type){if(o=r.done?m:v,l.arg===S)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function D(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,D(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),S;var i=h(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,S;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,S):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,S)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function P(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function q(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(f(e)+" is not iterable")}return g.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:g,configurable:!0}),g.displayName=l(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===g||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},A(E.prototype),l(E.prototype,c,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new E(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},A(L),l(L,s,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=q,P.prototype={constructor:P,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,S):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),S}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:q(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),S}},e}function y(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))}}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!=f(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=f(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==f(e)?e:String(e)}function S(t,e,r){Promise.resolve().then(n.bind(n,46345)).then((function(n){var o=r?"on":"off";n.centerFocus[o](t,e)}))}n(98959),n(63001),n(10353),n(15453),n(77157);var b=function(){function t(e,n){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.apiClient=e,this.timeSyncCore=n,this.options=o,this.SyncPlay=null===(r=a.X.firstOfType(u.Q.SyncPlay))||void 0===r?void 0:r.instance}var e,f,y,m,b,g;return e=t,f=[{key:"embed",value:(g=v(d().mark((function t(){var e,r,a,c=this;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={removeOnClose:!0,scrollY:!0},i.A.tv?e.size="fullscreen":e.size="small",this.context=o.default.createDialog(e),this.context.classList.add("formDialog"),t.next=6,n.e(18895).then(n.bind(n,70123));case 6:return r=t.sent,a=r.default,this.context.innerHTML=l.Ay.translateHtml(a,"core"),this.context.querySelector("form").addEventListener("submit",(function(t){return t&&t.preventDefault(),!1})),this.context.querySelector(".btnSave").addEventListener("click",(function(){c.onSubmit()})),this.context.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(c.context)})),t.next=14,this.initEditor();case 14:return i.A.tv&&S(this.context.querySelector(".formDialogContent"),!1,!0),t.abrupt("return",o.default.open(this.context).then((function(){return i.A.tv&&S(c.context.querySelector(".formDialogContent"),!1,!1),c.context.submitted?Promise.resolve():Promise.reject()})));case 16:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)})},{key:"initEditor",value:(b=v(d().mark((function t(){var e,n,r,o,i,a,c,s,l;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(l=this.context).querySelector("#txtExtraTimeOffset").value=null===(e=this.SyncPlay)||void 0===e?void 0:e.Manager.timeSyncCore.extraTimeOffset,l.querySelector("#chkSyncCorrection").checked=null===(n=this.SyncPlay)||void 0===n?void 0:n.Manager.playbackCore.enableSyncCorrection,l.querySelector("#txtMinDelaySpeedToSync").value=null===(r=this.SyncPlay)||void 0===r?void 0:r.Manager.playbackCore.minDelaySpeedToSync,l.querySelector("#txtMaxDelaySpeedToSync").value=null===(o=this.SyncPlay)||void 0===o?void 0:o.Manager.playbackCore.maxDelaySpeedToSync,l.querySelector("#txtSpeedToSyncDuration").value=null===(i=this.SyncPlay)||void 0===i?void 0:i.Manager.playbackCore.speedToSyncDuration,l.querySelector("#txtMinDelaySkipToSync").value=null===(a=this.SyncPlay)||void 0===a?void 0:a.Manager.playbackCore.minDelaySkipToSync,l.querySelector("#chkSpeedToSync").checked=null===(c=this.SyncPlay)||void 0===c?void 0:c.Manager.playbackCore.useSpeedToSync,l.querySelector("#chkSkipToSync").checked=null===(s=this.SyncPlay)||void 0===s?void 0:s.Manager.playbackCore.useSkipToSync;case 9:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)})},{key:"onSubmit",value:function(){this.save(),o.default.close(this.context)}},{key:"save",value:(m=v(d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.Ay.show(),t.next=3,this.saveToAppSettings();case 3:c.Ay.hide(),(0,s.A)(l.Ay.translate("SettingsSaved")),h.A.trigger(this,"saved");case 6:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},{key:"saveToAppSettings",value:(y=v(d().mark((function t(){var e,n,o,i,a,c,s,l,u,f;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.context,o=n.querySelector("#txtExtraTimeOffset").value,i=n.querySelector("#chkSyncCorrection").checked,a=n.querySelector("#txtMinDelaySpeedToSync").value,c=n.querySelector("#txtMaxDelaySpeedToSync").value,s=n.querySelector("#txtSpeedToSyncDuration").value,l=n.querySelector("#txtMinDelaySkipToSync").value,u=n.querySelector("#chkSpeedToSync").checked,f=n.querySelector("#chkSkipToSync").checked,(0,r.setSetting)("extraTimeOffset",o),(0,r.setSetting)("enableSyncCorrection",i),(0,r.setSetting)("minDelaySpeedToSync",a),(0,r.setSetting)("maxDelaySpeedToSync",c),(0,r.setSetting)("speedToSyncDuration",s),(0,r.setSetting)("minDelaySkipToSync",l),(0,r.setSetting)("useSpeedToSync",u),(0,r.setSetting)("useSkipToSync",f),h.A.trigger(null===(e=this.SyncPlay)||void 0===e?void 0:e.Manager,"settings-update");case 18:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})}],f&&p(e.prototype,f),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=b},79617:function(t,e,n){n.r(e),n.d(e,{show:function(){return h}});var r=n(22696),o=n.n(r),i=n(79754),a=n(46782),c=n(9482),s=n(47629),l=(n(10353),function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")});function u(t,e,r){Promise.resolve().then(n.bind(n,46345)).then((function(n){var o=r?"on":"off";n.centerFocus[o](t,e)})).catch((function(t){console.warn("Error in centerFocus",t)}))}function h(t){var e,n,r,h={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};a.A.tv?(h.size="fullscreen",r=!0,h.autoFocus=!0):(h.modal=!1,h.entryAnimation=t.entryAnimation,h.exitAnimation=t.exitAnimation,h.entryAnimationDuration=t.entryAnimationDuration||140,h.exitAnimationDuration=t.exitAnimationDuration||100,h.autoFocus=!1);var f=i.default.createDialog(h);r?f.classList.add("actionsheet-fullscreen"):f.classList.add("actionsheet-not-fullscreen"),f.classList.add("actionSheet"),t.dialogClass&&f.classList.add(t.dialogClass);var d="",y=a.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",v="";t.items.length>20&&(v+="min-width:"+(s.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var p,m=!1,S=[];try{for(var b=l(t.items),g=b.next();!g.done;g=b.next())(p=(L=g.value).icon||(L.selected?"check":null))&&(m=!0),S.push(p||"")}catch(t){e={error:t}}finally{try{g&&!g.done&&(n=b.return)&&n.call(b)}finally{if(e)throw e.error}}a.A.tv&&(d+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(c.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var x=t.title&&!m;x||a.A.tv?d+='<div class="actionSheetContent actionSheetContent-centered">':d+='<div class="actionSheetContent">',t.title&&(d+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(d+='<p class="actionSheetText">'+o()(t.text)+"</p>");var w="actionSheetScroller";a.A.tv&&(w+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),d+='<div class="'+w+" "+y+'" style="'+v+'">';var k="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(k+=" listItem-border"),t.menuItemClass&&(k+=" "+t.menuItemClass),a.A.tv&&(k+=" listItem-focusscale"),a.A.mobile&&(k+=" actionsheet-xlargeFont");for(var T=0;T<t.items.length;T++){var L;(L=t.items[T]).divider?d+='<div class="actionsheetDivider"></div>':(d+="<button"+(L.selected&&a.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+k+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(p=S[T])?d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(p,'" aria-hidden="true"></span>'):m&&!x&&(d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),d+='<div class="listItemBody actionsheetListItemBody">',d+='<div class="listItemBodyText actionSheetItemText">',d+=o()(L.name||L.textContent||L.innerText),d+="</div>",L.secondaryText&&(d+='<div class="listItemBodyText secondary">'.concat(o()(L.secondaryText),"</div>")),d+="</div>",L.asideText&&(d+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(L.asideText),"</div>")),d+="</button>")}if(t.showCancel&&(d+='<div class="buttons">',d+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(c.Ay.translate("ButtonCancel"),"</button>"),d+="</div>"),d+="</div>",f.innerHTML=d,a.A.tv){var A=f.querySelector(".actionSheetScroller");A&&u(A,!1,!0)}var E=f.querySelector(".btnCloseActionSheet");E&&E.addEventListener("click",(function(){i.default.close(f)}));var C,D=null;return t.timeout&&(C=setTimeout((function(){i.default.close(f)}),t.timeout)),new Promise((function(e,n){var r=!1;f.addEventListener("click",(function(n){var o=s.Ay.parentWithClass(n.target,"actionSheetMenuItem");o&&(D=o.getAttribute("data-id"),t.resolveOnClick&&(Array.isArray(t.resolveOnClick)?-1!==t.resolveOnClick.indexOf(D)&&(e(D),r=!0):(e(D),r=!0)),i.default.close(f))})),f.addEventListener("close",(function(){if(a.A.tv){var o=f.querySelector(".actionSheetScroller");o&&u(o,!1,!1)}C&&(clearTimeout(C),C=void 0),r||(null!=D?(t.callback&&t.callback(D),e(D)):n("ActionSheet closed without resolving"))})),i.default.open(f).catch((function(t){console.warn("DialogHelper.open error",t)}));var o=t.positionTo&&"fullscreen"!==h.size?function(t,e,n){var r=s.Ay.getWindowSize(),o=r.innerHeight,i=r.innerWidth,a=function(t){var e,n,r=[];if(!document)return r;try{for(var o=l(t),i=o.next();!i.done;i=o.next()){var a=i.value.getBoundingClientRect();r.push({top:a.top,left:a.left,width:a.width,height:a.height})}}catch(t){e={error:t}}finally{try{i&&!i.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return r}([t])[0];"top"!==e.positionY&&(a.top+=(a.height||0)/2),a.left+=(a.width||0)/2;var c=n.offsetHeight||300,u=n.offsetWidth||160;a.top-=c/2,a.left-=u/2;var h=a.left+u-i,f=a.top+c-o;return h>0&&(a.left-=h+20),f>0&&(a.top-=f+20),a.top+=e.offsetTop||0,a.left+=e.offsetLeft||0,a.top=Math.max(a.top,10),a.left=Math.max(a.left,10),a}(t.positionTo,t,f):null;o&&(f.style.position="fixed",f.style.margin="0",f.style.left=o.left+"px",f.style.top=o.top+"px")}))}e.default={show:h}}}]);