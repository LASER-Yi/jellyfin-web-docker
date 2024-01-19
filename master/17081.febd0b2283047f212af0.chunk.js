/*! For license information please see 17081.febd0b2283047f212af0.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17081,15065,23852],{12801:function(t,e,n){n.r(e),n.d(e,{show:function(){return h}}),n(13227),n(81414),n(37666),n(14011),n(11431),n(44901),n(88646),n(54134),n(91270),n(59139),n(56187),n(38690),n(89228);var r=n(65009),o=n.n(r),i=n(93355),a=n(30325),c=n(94994),s=n(72365);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e,r){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=r?"on":"off";n.centerFocus[o](t,e)}))}function h(t){var e,n={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};a.Z.tv?(n.size="fullscreen",e=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=t.entryAnimation,n.exitAnimation=t.exitAnimation,n.entryAnimationDuration=t.entryAnimationDuration||140,n.exitAnimationDuration=t.exitAnimationDuration||100,n.autoFocus=!1);var r=i.default.createDialog(n);e?r.classList.add("actionsheet-fullscreen"):r.classList.add("actionsheet-not-fullscreen"),r.classList.add("actionSheet"),t.dialogClass&&r.classList.add(t.dialogClass);var u="",h=a.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",d="";t.items.length>20&&(d+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var y,v,p=!1,m=[],S=l(t.items);try{for(S.s();!(v=S.n()).done;){var g=v.value;(y=g.icon||(g.selected?"check":null))&&(p=!0),m.push(y||"")}}catch(t){S.e(t)}finally{S.f()}a.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(c.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var b=t.title&&!p;b||a.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',t.title&&(u+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(u+='<p class="actionSheetText">'+o()(t.text)+"</p>");var x="actionSheetScroller";a.Z.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+x+" "+h+'" style="'+d+'">';var w="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(w+=" listItem-border"),t.menuItemClass&&(w+=" "+t.menuItemClass),a.Z.tv&&(w+=" listItem-focusscale"),a.Z.mobile&&(w+=" actionsheet-xlargeFont");for(var k=0;k<t.items.length;k++){var T=t.items[k];T.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(T.selected&&a.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+w+'" data-id="'+(null==T.id||""===T.id?T.value:T.id)+'">',(y=m[k])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(y,'" aria-hidden="true"></span>'):p&&!b&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=o()(T.name||T.textContent||T.innerText),u+="</div>",T.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(o()(T.secondaryText),"</div>")),u+="</div>",T.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(T.asideText),"</div>")),u+="</button>")}t.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(c.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",r.innerHTML=u,a.Z.tv&&f(r.querySelector(".actionSheetScroller"),!1,!0);var L,E,C=r.querySelector(".btnCloseActionSheet");return C&&C.addEventListener("click",(function(){i.default.close(r)})),t.timeout&&(E=setTimeout((function(){i.default.close(r)}),t.timeout)),new Promise((function(e,o){var c;r.addEventListener("click",(function(n){var o=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(L=o.getAttribute("data-id"),t.resolveOnClick&&(t.resolveOnClick.indexOf?-1!==t.resolveOnClick.indexOf(L)&&(e(L),c=!0):(e(L),c=!0)),i.default.close(r))})),r.addEventListener("close",(function(){a.Z.tv&&f(r.querySelector(".actionSheetScroller"),!1,!1),E&&(clearTimeout(E),E=null),c||(null!=L?(t.callback&&t.callback(L),e(L)):o("ActionSheet closed without resolving"))})),i.default.open(r);var u=t.positionTo&&"fullscreen"!==n.size?function(t,e){var n=s.ZP.getWindowSize(),r=n.innerHeight,o=n.innerWidth,i=function(t){var e=[];if(!document)return e;var n,r=l(t);try{for(r.s();!(n=r.n()).done;){var o=n.value.getBoundingClientRect();e.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(t){r.e(t)}finally{r.f()}return e}([t.positionTo])[0];"top"!==t.positionY&&(i.top+=(i.height||0)/2),i.left+=(i.width||0)/2;var a=e.offsetHeight||300,c=e.offsetWidth||160;i.top-=a/2,i.left-=c/2;var u=i.left+c-o,f=i.top+a-r;return u>0&&(i.left-=u+20),f>0&&(i.top-=f+20),i.top+=t.offsetTop||0,i.left+=t.offsetLeft||0,i.top=Math.max(i.top,10),i.left=Math.max(i.left,10),i}(t,r):null;u&&(r.style.position="fixed",r.style.margin=0,r.style.left=u.left+"px",r.style.top=u.top+"px")}))}n(38228),e.default={show:h}},15856:function(t,e,n){var r=n(30325),o=n(57366),i=n(12801),a=(n(67752),Object.create(HTMLSelectElement.prototype));function c(){return!(!o.Z.edgeUwp&&!o.Z.xboxOne&&(o.Z.tizen||o.Z.orsay||o.Z.web0s||!o.Z.tv&&r.Z.tv))}function s(t){var e=l(t),n=e?e.textContent||e.innerText:null;i.default.show({items:t.options,positionTo:t,title:n}).then((function(e){!function(t,e){t.value=e}(t,e),function(t){var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),t.dispatchEvent(e)}(t)}))}function l(t){for(var e=t.previousSibling;e&&"LABEL"!==e.tagName;)e=e.previousSibling;return e}function u(){var t=l(this);t&&t.classList.add("selectLabelFocused")}function f(){var t=l(this);t&&t.classList.remove("selectLabelFocused")}function h(t){t.button||c()||(t.preventDefault(),s(this))}function d(t){switch(t.keyCode){case 13:return void(c()||(t.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(r.Z.tv&&t.preventDefault())}}var y=0;a.createdCallback=function(){this.id||(this.id="embyselect"+y,y++),this.classList.add("emby-select-withcolor"),r.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",h),this.addEventListener("keydown",d),this.addEventListener("focus",u),this.addEventListener("blur",f)},a.attachedCallback=function(){var t;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var e,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(t=this.parentNode)||void 0===t||t.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(e=this.parentNode)||void 0===e||e.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},a.setLabel=function(t){var e;(null===(e=this.parentNode)||void 0===e?void 0:e.querySelector("label")).innerText=t},document.registerElement("emby-select",{prototype:a,extends:"select"})},40599:function(t,e,n){n.r(e),n.d(e,{getSetting:function(){return i},setSetting:function(){return a}});var r=n(59858),o="syncPlay";function i(t){return r.Z.get(t,o)}function a(t,e){return r.Z.set(t,e,o)}},17081:function(t,e,n){n.r(e),n(13227),n(81414),n(37666),n(14011),n(11431),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228),n(9883),n(70753),n(61632),n(77337),n(39574),n(47134),n(43908),n(91162),n(88646);var r=n(40599),o=n(93355),i=n(30325),a=n(67932),c=n(84597),s=n(56663),l=n(94994),u=n(90846),f=n(67561);function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(){d=function(){return e};var t,e={},n=Object.prototype,r=n.hasOwnProperty,o=Object.defineProperty||function(t,e,n){t[e]=n.value},i="function"==typeof Symbol?Symbol:{},a=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",s=i.toStringTag||"@@toStringTag";function l(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{l({},"")}catch(t){l=function(t,e,n){return t[e]=n}}function u(t,e,n,r){var i=e&&e.prototype instanceof g?e:g,a=Object.create(i.prototype),c=new D(r||[]);return o(a,"_invoke",{value:P(t,n,c)}),a}function f(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}e.wrap=u;var y="suspendedStart",v="suspendedYield",p="executing",m="completed",S={};function g(){}function b(){}function x(){}var w={};l(w,a,(function(){return this}));var k=Object.getPrototypeOf,T=k&&k(k(A([])));T&&T!==n&&r.call(T,a)&&(w=T);var L=x.prototype=g.prototype=Object.create(w);function E(t){["next","throw","return"].forEach((function(e){l(t,e,(function(t){return this._invoke(e,t)}))}))}function C(t,e){function n(o,i,a,c){var s=f(t[o],t,i);if("throw"!==s.type){var l=s.arg,u=l.value;return u&&"object"==h(u)&&r.call(u,"__await")?e.resolve(u.__await).then((function(t){n("next",t,a,c)}),(function(t){n("throw",t,a,c)})):e.resolve(u).then((function(t){l.value=t,a(l)}),(function(t){return n("throw",t,a,c)}))}c(s.arg)}var i;o(this,"_invoke",{value:function(t,r){function o(){return new e((function(e,o){n(t,r,e,o)}))}return i=i?i.then(o,o):o()}})}function P(e,n,r){var o=y;return function(i,a){if(o===p)throw new Error("Generator is already running");if(o===m){if("throw"===i)throw a;return{value:t,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var s=Z(c,r);if(s){if(s===S)continue;return s}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===y)throw o=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);o=p;var l=f(e,n,r);if("normal"===l.type){if(o=r.done?m:v,l.arg===S)continue;return{value:l.arg,done:r.done}}"throw"===l.type&&(o=m,r.method="throw",r.arg=l.arg)}}}function Z(e,n){var r=n.method,o=e.iterator[r];if(o===t)return n.delegate=null,"throw"===r&&e.iterator.return&&(n.method="return",n.arg=t,Z(e,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),S;var i=f(o,e.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,S;var a=i.arg;return a?a.done?(n[e.resultName]=a.value,n.next=e.nextLoc,"return"!==n.method&&(n.method="next",n.arg=t),n.delegate=null,S):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,S)}function I(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function O(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function D(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(I,this),this.reset(!0)}function A(e){if(e||""===e){var n=e[a];if(n)return n.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var o=-1,i=function n(){for(;++o<e.length;)if(r.call(e,o))return n.value=e[o],n.done=!1,n;return n.value=t,n.done=!0,n};return i.next=i}}throw new TypeError(h(e)+" is not iterable")}return b.prototype=x,o(L,"constructor",{value:x,configurable:!0}),o(x,"constructor",{value:b,configurable:!0}),b.displayName=l(x,s,"GeneratorFunction"),e.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===b||"GeneratorFunction"===(e.displayName||e.name))},e.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,x):(t.__proto__=x,l(t,s,"GeneratorFunction")),t.prototype=Object.create(L),t},e.awrap=function(t){return{__await:t}},E(C.prototype),l(C.prototype,c,(function(){return this})),e.AsyncIterator=C,e.async=function(t,n,r,o,i){void 0===i&&(i=Promise);var a=new C(u(t,n,r,o),i);return e.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},E(L),l(L,s,"Generator"),l(L,a,(function(){return this})),l(L,"toString",(function(){return"[object Generator]"})),e.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},e.values=A,D.prototype={constructor:D,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=t,this.done=!1,this.delegate=null,this.method="next",this.arg=t,this.tryEntries.forEach(O),!e)for(var n in this)"t"===n.charAt(0)&&r.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=t)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var n=this;function o(r,o){return c.type="throw",c.arg=e,n.next=r,o&&(n.method="next",n.arg=t),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var s=r.call(a,"catchLoc"),l=r.call(a,"finallyLoc");if(s&&l){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(s){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!l)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var o=this.tryEntries[n];if(o.tryLoc<=this.prev&&r.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,S):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),S},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),O(n),S}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;O(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(e,n,r){return this.delegate={iterator:A(e),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=t),S}},e}function y(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function v(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){y(i,r,o,a,c,"next",t)}function c(t){y(i,r,o,a,c,"throw",t)}a(void 0)}))}}function p(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,m(r.key),r)}}function m(t){var e=function(t,e){if("object"!=h(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,"string");if("object"!=h(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==h(e)?e:String(e)}function S(t,e,r){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=r?"on":"off";n.centerFocus[o](t,e)}))}n(62033),n(15856),n(38228),n(61414),n(12291);var g=function(){function t(e,n){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.apiClient=e,this.timeSyncCore=n,this.options=o,this.SyncPlay=null===(r=a.E.firstOfType(u.z.SyncPlay))||void 0===r?void 0:r.instance}var e,h,y,m,g,b;return e=t,h=[{key:"embed",value:(b=v(d().mark((function t(){var e,r,a,c=this;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={removeOnClose:!0,scrollY:!0},i.Z.tv?e.size="fullscreen":e.size="small",this.context=o.default.createDialog(e),this.context.classList.add("formDialog"),t.next=6,n.e(76440).then(n.bind(n,97356));case 6:return r=t.sent,a=r.default,this.context.innerHTML=l.ZP.translateHtml(a,"core"),this.context.querySelector("form").addEventListener("submit",(function(t){return t&&t.preventDefault(),!1})),this.context.querySelector(".btnSave").addEventListener("click",(function(){c.onSubmit()})),this.context.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(c.context)})),t.next=14,this.initEditor();case 14:return i.Z.tv&&S(this.context.querySelector(".formDialogContent"),!1,!0),t.abrupt("return",o.default.open(this.context).then((function(){return i.Z.tv&&S(c.context.querySelector(".formDialogContent"),!1,!1),c.context.submitted?Promise.resolve():Promise.reject()})));case 16:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)})},{key:"initEditor",value:(g=v(d().mark((function t(){var e,n,r,o,i,a,c,s,l;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(l=this.context).querySelector("#txtExtraTimeOffset").value=null===(e=this.SyncPlay)||void 0===e?void 0:e.Manager.timeSyncCore.extraTimeOffset,l.querySelector("#chkSyncCorrection").checked=null===(n=this.SyncPlay)||void 0===n?void 0:n.Manager.playbackCore.enableSyncCorrection,l.querySelector("#txtMinDelaySpeedToSync").value=null===(r=this.SyncPlay)||void 0===r?void 0:r.Manager.playbackCore.minDelaySpeedToSync,l.querySelector("#txtMaxDelaySpeedToSync").value=null===(o=this.SyncPlay)||void 0===o?void 0:o.Manager.playbackCore.maxDelaySpeedToSync,l.querySelector("#txtSpeedToSyncDuration").value=null===(i=this.SyncPlay)||void 0===i?void 0:i.Manager.playbackCore.speedToSyncDuration,l.querySelector("#txtMinDelaySkipToSync").value=null===(a=this.SyncPlay)||void 0===a?void 0:a.Manager.playbackCore.minDelaySkipToSync,l.querySelector("#chkSpeedToSync").checked=null===(c=this.SyncPlay)||void 0===c?void 0:c.Manager.playbackCore.useSpeedToSync,l.querySelector("#chkSkipToSync").checked=null===(s=this.SyncPlay)||void 0===s?void 0:s.Manager.playbackCore.useSkipToSync;case 9:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)})},{key:"onSubmit",value:function(){this.save(),o.default.close(this.context)}},{key:"save",value:(m=v(d().mark((function t(){return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.ZP.show(),t.next=3,this.saveToAppSettings();case 3:c.ZP.hide(),(0,s.Z)(l.ZP.translate("SettingsSaved")),f.Z.trigger(this,"saved");case 6:case"end":return t.stop()}}),t,this)}))),function(){return m.apply(this,arguments)})},{key:"saveToAppSettings",value:(y=v(d().mark((function t(){var e,n,o,i,a,c,s,l,u,h;return d().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.context,o=n.querySelector("#txtExtraTimeOffset").value,i=n.querySelector("#chkSyncCorrection").checked,a=n.querySelector("#txtMinDelaySpeedToSync").value,c=n.querySelector("#txtMaxDelaySpeedToSync").value,s=n.querySelector("#txtSpeedToSyncDuration").value,l=n.querySelector("#txtMinDelaySkipToSync").value,u=n.querySelector("#chkSpeedToSync").checked,h=n.querySelector("#chkSkipToSync").checked,(0,r.setSetting)("extraTimeOffset",o),(0,r.setSetting)("enableSyncCorrection",i),(0,r.setSetting)("minDelaySpeedToSync",a),(0,r.setSetting)("maxDelaySpeedToSync",c),(0,r.setSetting)("speedToSyncDuration",s),(0,r.setSetting)("minDelaySkipToSync",l),(0,r.setSetting)("useSpeedToSync",u),(0,r.setSetting)("useSkipToSync",h),f.Z.trigger(null===(e=this.SyncPlay)||void 0===e?void 0:e.Manager,"settings-update");case 18:case"end":return t.stop()}}),t,this)}))),function(){return y.apply(this,arguments)})}],h&&p(e.prototype,h),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=g}}]);