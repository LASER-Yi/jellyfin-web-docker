"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[51032,12801,49213,78886,31473],{12801:function(t,e,n){n.r(e),n.d(e,{show:function(){return f}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var i=n(65009),o=n.n(i),a=n(93355),r=n(30325),s=n(94994),l=n(72365);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return u(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?u(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw a}}}}function u(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function d(t,e,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=i?"on":"off";n.centerFocus[o](t,e)}))}function f(t){var e,n={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};r.Z.tv?(n.size="fullscreen",e=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=t.entryAnimation,n.exitAnimation=t.exitAnimation,n.entryAnimationDuration=t.entryAnimationDuration||140,n.exitAnimationDuration=t.exitAnimationDuration||100,n.autoFocus=!1);var i=a.default.createDialog(n);e?i.classList.add("actionsheet-fullscreen"):i.classList.add("actionsheet-not-fullscreen"),i.classList.add("actionSheet"),t.dialogClass&&i.classList.add(t.dialogClass);var u="",f=r.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",h="";t.items.length>20&&(h+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var v,m,p=!1,y=[],b=c(t.items);try{for(b.s();!(m=b.n()).done;){var S=m.value;(v=S.icon||(S.selected?"check":null))&&(p=!0),y.push(v||"")}}catch(t){b.e(t)}finally{b.f()}r.Z.tv&&(u+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(s.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var I=t.title&&!p;I||r.Z.tv?u+='<div class="actionSheetContent actionSheetContent-centered">':u+='<div class="actionSheetContent">',t.title&&(u+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(u+='<p class="actionSheetText">'+o()(t.text)+"</p>");var x="actionSheetScroller";r.Z.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),u+='<div class="'+x+" "+f+'" style="'+h+'">';var g="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(g+=" listItem-border"),t.menuItemClass&&(g+=" "+t.menuItemClass),r.Z.tv&&(g+=" listItem-focusscale"),r.Z.mobile&&(g+=" actionsheet-xlargeFont");for(var C=0;C<t.items.length;C++){var A=t.items[C];A.divider?u+='<div class="actionsheetDivider"></div>':(u+="<button"+(A.selected&&r.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+g+'" data-id="'+(null==A.id||""===A.id?A.value:A.id)+'">',(v=y[C])?u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(v,'" aria-hidden="true"></span>'):p&&!I&&(u+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),u+='<div class="listItemBody actionsheetListItemBody">',u+='<div class="listItemBodyText actionSheetItemText">',u+=o()(A.name||A.textContent||A.innerText),u+="</div>",A.secondaryText&&(u+='<div class="listItemBodyText secondary">'.concat(o()(A.secondaryText),"</div>")),u+="</div>",A.asideText&&(u+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(A.asideText),"</div>")),u+="</button>")}t.showCancel&&(u+='<div class="buttons">',u+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(s.ZP.translate("ButtonCancel"),"</button>"),u+="</div>"),u+="</div>",i.innerHTML=u,r.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!0);var w,T,k=i.querySelector(".btnCloseActionSheet");return k&&k.addEventListener("click",(function(){a.default.close(i)})),t.timeout&&(T=setTimeout((function(){a.default.close(i)}),t.timeout)),new Promise((function(e,o){var s;i.addEventListener("click",(function(n){var o=l.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(w=o.getAttribute("data-id"),t.resolveOnClick&&(t.resolveOnClick.indexOf?-1!==t.resolveOnClick.indexOf(w)&&(e(w),s=!0):(e(w),s=!0)),a.default.close(i))})),i.addEventListener("close",(function(){r.Z.tv&&d(i.querySelector(".actionSheetScroller"),!1,!1),T&&(clearTimeout(T),T=null),s||(null!=w?(t.callback&&t.callback(w),e(w)):o("ActionSheet closed without resolving"))})),a.default.open(i);var u=t.positionTo&&"fullscreen"!==n.size?function(t,e){var n=l.ZP.getWindowSize(),i=n.innerHeight,o=n.innerWidth,a=function(t){var e=[];if(!document)return e;var n,i=c(t);try{for(i.s();!(n=i.n()).done;){var o=n.value.getBoundingClientRect();e.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(t){i.e(t)}finally{i.f()}return e}([t.positionTo])[0];"top"!==t.positionY&&(a.top+=(a.height||0)/2),a.left+=(a.width||0)/2;var r=e.offsetHeight||300,s=e.offsetWidth||160;a.top-=r/2,a.left-=s/2;var u=a.left+s-o,d=a.top+r-i;return u>0&&(a.left-=u+20),d>0&&(a.top-=d+20),a.top+=t.offsetTop||0,a.left+=t.offsetLeft||0,a.top=Math.max(a.top,10),a.left=Math.max(a.left,10),a}(t,i):null;u&&(i.style.position="fixed",i.style.margin=0,i.style.left=u.left+"px",i.style.top=u.top+"px")}))}n(38228),e.default={show:f}}}]);