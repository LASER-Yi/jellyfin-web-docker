/*! For license information please see 17081.47bf3f42fc7954f3c5a4.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[17081,15065,23852],{12801:function(t,e,n){n.r(e),n.d(e,{show:function(){return d}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var r=n(65009),o=n.n(r),i=n(93355),a=n(30325),c=n(94994),s=n(72365);function l(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var r=0,o=function(){};return{s:o,n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,a=!0,c=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return a=t.done,t},e:function(t){c=!0,i=t},f:function(){try{a||null==n.return||n.return()}finally{if(c)throw i}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function f(t,e,r){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=r?"on":"off";n.centerFocus[o](t,e)}))}function d(t){var e,n={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};a.Z.tv?(n.size="fullscreen",e=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=t.entryAnimation,n.exitAnimation=t.exitAnimation,n.entryAnimationDuration=t.entryAnimationDuration||140,n.exitAnimationDuration=t.exitAnimationDuration||100,n.autoFocus=!1);var r=i.default.createDialog(n);e?r.classList.add("actionsheet-fullscreen"):r.classList.add("actionsheet-not-fullscreen"),r.classList.add("actionSheet"),t.dialogClass&&r.classList.add(t.dialogClass);var u="",d=a.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";t.items.length>20&&(h+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var v,y,p=!1,m=[],S=l(t.items);try{for(S.s();!(y=S.n()).done;){var g=y.value;(v=g.icon||(g.selected?"check":null))&&(p=!0),m.push(v||"")}}catch(t){S.e(t)}finally{S.f()}a.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(c.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var b=t.title&&!p;b||a.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',t.title&&(u+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(u+='<p class="actionSheetText">'+o()(t.text)+"</p>");var x="actionSheetScroller";a.Z.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+x+" "+d+'" style="'+h+'">';var w="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(w+=" listItem-border"),t.menuItemClass&&(w+=" "+t.menuItemClass),a.Z.tv&&(w+=" listItem-focusscale"),a.Z.mobile&&(w+=" actionsheet-xlargeFont");for(var k=0;k<t.items.length;k++){var L=t.items[k];L.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(L.selected&&a.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+w+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(v=m[k])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(v,'" aria-hidden="true"></span>'):p&&!b&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=o()(L.name||L.textContent||L.innerText),u+="</div>",L.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(o()(L.secondaryText),"</div>")),u+="</div>",L.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(L.asideText),"</div>")),u+="</button>")}t.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(c.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",r.innerHTML=u,a.Z.tv&&f(r.querySelector(".actionSheetScroller"),!1,!0);var T,E,C=r.querySelector(".btnCloseActionSheet");return C&&C.addEventListener("click",(function(){i.default.close(r)})),t.timeout&&(E=setTimeout((function(){i.default.close(r)}),t.timeout)),new Promise((function(e,o){var c;r.addEventListener("click",(function(n){var o=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(T=o.getAttribute("data-id"),t.resolveOnClick&&(t.resolveOnClick.indexOf?-1!==t.resolveOnClick.indexOf(T)&&(e(T),c=!0):(e(T),c=!0)),i.default.close(r))})),r.addEventListener("close",(function(){a.Z.tv&&f(r.querySelector(".actionSheetScroller"),!1,!1),E&&(clearTimeout(E),E=null),c||(null!=T?(t.callback&&t.callback(T),e(T)):o("ActionSheet closed without resolving"))})),i.default.open(r);var u=t.positionTo&&"fullscreen"!==n.size?function(t,e){var n=s.ZP.getWindowSize(),r=n.innerHeight,o=n.innerWidth,i=function(t){var e=[];if(!document)return e;var n,r=l(t);try{for(r.s();!(n=r.n()).done;){var o=n.value.getBoundingClientRect();e.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(t){r.e(t)}finally{r.f()}return e}([t.positionTo])[0];"top"!==t.positionY&&(i.top+=(i.height||0)/2),i.left+=(i.width||0)/2;var a=e.offsetHeight||300,c=e.offsetWidth||160;i.top-=a/2,i.left-=c/2;var u=i.left+c-o,f=i.top+a-r;return u>0&&(i.left-=u+20),f>0&&(i.top-=f+20),i.top+=t.offsetTop||0,i.left+=t.offsetLeft||0,i.top=Math.max(i.top,10),i.left=Math.max(i.left,10),i}(t,r):null;u&&(r.style.position="fixed",r.style.margin=0,r.style.left=u.left+"px",r.style.top=u.top+"px")}))}n(38228),e.default={show:d}},15856:function(t,e,n){var r=n(30325),o=n(57366),i=n(12801),a=(n(67752),Object.create(HTMLSelectElement.prototype));function c(){return!(!o.Z.edgeUwp&&!o.Z.xboxOne&&(o.Z.tizen||o.Z.orsay||o.Z.web0s||!o.Z.tv&&r.Z.tv))}function s(t){var e=l(t),n=e?e.textContent||e.innerText:null;i.default.show({items:t.options,positionTo:t,title:n}).then((function(e){!function(t,e){t.value=e}(t,e),function(t){var e=document.createEvent("HTMLEvents");e.initEvent("change",!1,!0),t.dispatchEvent(e)}(t)}))}function l(t){for(var e=t.previousSibling;e&&"LABEL"!==e.tagName;)e=e.previousSibling;return e}function u(){var t=l(this);t&&t.classList.add("selectLabelFocused")}function f(){var t=l(this);t&&t.classList.remove("selectLabelFocused")}function d(t){t.button||c()||(t.preventDefault(),s(this))}function h(t){switch(t.keyCode){case 13:return void(c()||(t.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(r.Z.tv&&t.preventDefault())}}var v=0;a.createdCallback=function(){this.id||(this.id="embyselect"+v,v++),this.classList.add("emby-select-withcolor"),r.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",d),this.addEventListener("keydown",h),this.addEventListener("focus",u),this.addEventListener("blur",f)},a.attachedCallback=function(){var t;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var e,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(t=this.parentNode)||void 0===t||t.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(e=this.parentNode)||void 0===e||e.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},a.setLabel=function(t){var e;(null===(e=this.parentNode)||void 0===e?void 0:e.querySelector("label")).innerText=t},document.registerElement("emby-select",{prototype:a,extends:"select"})},40599:function(t,e,n){n.r(e),n.d(e,{getSetting:function(){return i},setSetting:function(){return a}});var r=n(59858),o="syncPlay";function i(t){return r.Z.get(t,o)}function a(t,e){return r.Z.set(t,e,o)}},17081:function(t,e,n){n.r(e),n(5769),n(63238),n(61418),n(17460),n(14078),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(98521),n(6798),n(82923),n(21897),n(12274),n(55849),n(50987),n(60190),n(72410);var r=n(40599),o=n(93355),i=n(30325),a=n(67932),c=n(28540),s=n(56663),l=n(94994),u=n(20484),f=n(81643);function d(t){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},d(t)}function h(){h=function(){return t};var t={},e=Object.prototype,n=e.hasOwnProperty,r=Object.defineProperty||function(t,e,n){t[e]=n.value},o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function s(t,e,n){return Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}),t[e]}try{s({},"")}catch(t){s=function(t,e,n){return t[e]=n}}function l(t,e,n,o){var i=e&&e.prototype instanceof v?e:v,a=Object.create(i.prototype),c=new C(o||[]);return r(a,"_invoke",{value:k(t,n,c)}),a}function u(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}t.wrap=l;var f={};function v(){}function y(){}function p(){}var m={};s(m,i,(function(){return this}));var S=Object.getPrototypeOf,g=S&&S(S(P([])));g&&g!==e&&n.call(g,i)&&(m=g);var b=p.prototype=v.prototype=Object.create(m);function x(t){["next","throw","return"].forEach((function(e){s(t,e,(function(t){return this._invoke(e,t)}))}))}function w(t,e){function o(r,i,a,c){var s=u(t[r],t,i);if("throw"!==s.type){var l=s.arg,f=l.value;return f&&"object"==d(f)&&n.call(f,"__await")?e.resolve(f.__await).then((function(t){o("next",t,a,c)}),(function(t){o("throw",t,a,c)})):e.resolve(f).then((function(t){l.value=t,a(l)}),(function(t){return o("throw",t,a,c)}))}c(s.arg)}var i;r(this,"_invoke",{value:function(t,n){function r(){return new e((function(e,r){o(t,n,e,r)}))}return i=i?i.then(r,r):r()}})}function k(t,e,n){var r="suspendedStart";return function(o,i){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===o)throw i;return{value:void 0,done:!0}}for(n.method=o,n.arg=i;;){var a=n.delegate;if(a){var c=L(a,n);if(c){if(c===f)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var s=u(t,e,n);if("normal"===s.type){if(r=n.done?"completed":"suspendedYield",s.arg===f)continue;return{value:s.arg,done:n.done}}"throw"===s.type&&(r="completed",n.method="throw",n.arg=s.arg)}}}function L(t,e){var n=e.method,r=t.iterator[n];if(void 0===r)return e.delegate=null,"throw"===n&&t.iterator.return&&(e.method="return",e.arg=void 0,L(t,e),"throw"===e.method)||"return"!==n&&(e.method="throw",e.arg=new TypeError("The iterator does not provide a '"+n+"' method")),f;var o=u(r,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,f;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=void 0),e.delegate=null,f):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,f)}function T(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function E(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function C(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(T,this),this.reset(!0)}function P(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var r=-1,o=function e(){for(;++r<t.length;)if(n.call(t,r))return e.value=t[r],e.done=!1,e;return e.value=void 0,e.done=!0,e};return o.next=o}}return{next:Z}}function Z(){return{value:void 0,done:!0}}return y.prototype=p,r(b,"constructor",{value:p,configurable:!0}),r(p,"constructor",{value:y,configurable:!0}),y.displayName=s(p,c,"GeneratorFunction"),t.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===y||"GeneratorFunction"===(e.displayName||e.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,p):(t.__proto__=p,s(t,c,"GeneratorFunction")),t.prototype=Object.create(b),t},t.awrap=function(t){return{__await:t}},x(w.prototype),s(w.prototype,a,(function(){return this})),t.AsyncIterator=w,t.async=function(e,n,r,o,i){void 0===i&&(i=Promise);var a=new w(l(e,n,r,o),i);return t.isGeneratorFunction(n)?a:a.next().then((function(t){return t.done?t.value:a.next()}))},x(b),s(b,c,"Generator"),s(b,i,(function(){return this})),s(b,"toString",(function(){return"[object Generator]"})),t.keys=function(t){var e=Object(t),n=[];for(var r in e)n.push(r);return n.reverse(),function t(){for(;n.length;){var r=n.pop();if(r in e)return t.value=r,t.done=!1,t}return t.done=!0,t}},t.values=P,C.prototype={constructor:C,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(E),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=void 0)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function r(n,r){return a.type="throw",a.arg=t,e.next=n,r&&(e.method="next",e.arg=void 0),!!r}for(var o=this.tryEntries.length-1;o>=0;--o){var i=this.tryEntries[o],a=i.completion;if("root"===i.tryLoc)return r("end");if(i.tryLoc<=this.prev){var c=n.call(i,"catchLoc"),s=n.call(i,"finallyLoc");if(c&&s){if(this.prev<i.catchLoc)return r(i.catchLoc,!0);if(this.prev<i.finallyLoc)return r(i.finallyLoc)}else if(c){if(this.prev<i.catchLoc)return r(i.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<i.finallyLoc)return r(i.finallyLoc)}}}},abrupt:function(t,e){for(var r=this.tryEntries.length-1;r>=0;--r){var o=this.tryEntries[r];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=e&&e<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=e,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),f},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),E(n),f}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var r=n.completion;if("throw"===r.type){var o=r.arg;E(n)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:P(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},t}function v(t,e,n,r,o,i,a){try{var c=t[i](a),s=c.value}catch(t){return void n(t)}c.done?e(s):Promise.resolve(s).then(r,o)}function y(t){return function(){var e=this,n=arguments;return new Promise((function(r,o){var i=t.apply(e,n);function a(t){v(i,r,o,a,c,"next",t)}function c(t){v(i,r,o,a,c,"throw",t)}a(void 0)}))}}function p(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function m(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==d(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var r=n.call(t,e);if("object"!==d(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(r.key,"string"),"symbol"===d(o)?o:String(o)),r)}var o}function S(t,e,r){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=r?"on":"off";n.centerFocus[o](t,e)}))}n(62033),n(15856),n(38228),n(61414),n(12291);var g=function(){function t(e,n){var r,o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};p(this,t),this.apiClient=e,this.timeSyncCore=n,this.options=o,this.SyncPlay=null===(r=a.E.firstOfType(u.z.SyncPlay))||void 0===r?void 0:r.instance}var e,d,v,g,b,x;return e=t,d=[{key:"embed",value:(x=y(h().mark((function t(){var e,r,a,c=this;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e={removeOnClose:!0,scrollY:!0},i.Z.tv?e.size="fullscreen":e.size="small",this.context=o.default.createDialog(e),this.context.classList.add("formDialog"),t.next=6,n.e(76440).then(n.bind(n,97356));case 6:return r=t.sent,a=r.default,this.context.innerHTML=l.ZP.translateHtml(a,"core"),this.context.querySelector("form").addEventListener("submit",(function(t){return t&&t.preventDefault(),!1})),this.context.querySelector(".btnSave").addEventListener("click",(function(){c.onSubmit()})),this.context.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(c.context)})),t.next=14,this.initEditor();case 14:return i.Z.tv&&S(this.context.querySelector(".formDialogContent"),!1,!0),t.abrupt("return",o.default.open(this.context).then((function(){return i.Z.tv&&S(c.context.querySelector(".formDialogContent"),!1,!1),c.context.submitted?Promise.resolve():Promise.reject()})));case 16:case"end":return t.stop()}}),t,this)}))),function(){return x.apply(this,arguments)})},{key:"initEditor",value:(b=y(h().mark((function t(){var e,n,r,o,i,a,c,s,l;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:(l=this.context).querySelector("#txtExtraTimeOffset").value=null===(e=this.SyncPlay)||void 0===e?void 0:e.Manager.timeSyncCore.extraTimeOffset,l.querySelector("#chkSyncCorrection").checked=null===(n=this.SyncPlay)||void 0===n?void 0:n.Manager.playbackCore.enableSyncCorrection,l.querySelector("#txtMinDelaySpeedToSync").value=null===(r=this.SyncPlay)||void 0===r?void 0:r.Manager.playbackCore.minDelaySpeedToSync,l.querySelector("#txtMaxDelaySpeedToSync").value=null===(o=this.SyncPlay)||void 0===o?void 0:o.Manager.playbackCore.maxDelaySpeedToSync,l.querySelector("#txtSpeedToSyncDuration").value=null===(i=this.SyncPlay)||void 0===i?void 0:i.Manager.playbackCore.speedToSyncDuration,l.querySelector("#txtMinDelaySkipToSync").value=null===(a=this.SyncPlay)||void 0===a?void 0:a.Manager.playbackCore.minDelaySkipToSync,l.querySelector("#chkSpeedToSync").checked=null===(c=this.SyncPlay)||void 0===c?void 0:c.Manager.playbackCore.useSpeedToSync,l.querySelector("#chkSkipToSync").checked=null===(s=this.SyncPlay)||void 0===s?void 0:s.Manager.playbackCore.useSkipToSync;case 9:case"end":return t.stop()}}),t,this)}))),function(){return b.apply(this,arguments)})},{key:"onSubmit",value:function(){this.save(),o.default.close(this.context)}},{key:"save",value:(g=y(h().mark((function t(){return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c.ZP.show(),t.next=3,this.saveToAppSettings();case 3:c.ZP.hide(),(0,s.Z)(l.ZP.translate("SettingsSaved")),f.Z.trigger(this,"saved");case 6:case"end":return t.stop()}}),t,this)}))),function(){return g.apply(this,arguments)})},{key:"saveToAppSettings",value:(v=y(h().mark((function t(){var e,n,o,i,a,c,s,l,u,d;return h().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:n=this.context,o=n.querySelector("#txtExtraTimeOffset").value,i=n.querySelector("#chkSyncCorrection").checked,a=n.querySelector("#txtMinDelaySpeedToSync").value,c=n.querySelector("#txtMaxDelaySpeedToSync").value,s=n.querySelector("#txtSpeedToSyncDuration").value,l=n.querySelector("#txtMinDelaySkipToSync").value,u=n.querySelector("#chkSpeedToSync").checked,d=n.querySelector("#chkSkipToSync").checked,(0,r.setSetting)("extraTimeOffset",o),(0,r.setSetting)("enableSyncCorrection",i),(0,r.setSetting)("minDelaySpeedToSync",a),(0,r.setSetting)("maxDelaySpeedToSync",c),(0,r.setSetting)("speedToSyncDuration",s),(0,r.setSetting)("minDelaySkipToSync",l),(0,r.setSetting)("useSpeedToSync",u),(0,r.setSetting)("useSkipToSync",d),f.Z.trigger(null===(e=this.SyncPlay)||void 0===e?void 0:e.Manager,"settings-update");case 18:case"end":return t.stop()}}),t,this)}))),function(){return v.apply(this,arguments)})}],d&&m(e.prototype,d),Object.defineProperty(e,"prototype",{writable:!1}),t}();e.default=g}}]);