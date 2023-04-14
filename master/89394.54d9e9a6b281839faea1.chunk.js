"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89394,12801,31473],{12801:function(t,e,n){n.r(e),n.d(e,{show:function(){return f}}),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047);var i=n(65009),o=n.n(i),a=n(93355),r=n(30325),s=n(94994),l=n(72365);function c(t,e){var n="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!n){if(Array.isArray(t)||(n=function(t,e){if(t){if("string"==typeof t)return d(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(t,e):void 0}}(t))||e&&t&&"number"==typeof t.length){n&&(t=n);var i=0,o=function(){};return{s:o,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,r=!0,s=!1;return{s:function(){n=n.call(t)},n:function(){var t=n.next();return r=t.done,t},e:function(t){s=!0,a=t},f:function(){try{r||null==n.return||n.return()}finally{if(s)throw a}}}}function d(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function u(t,e,i){Promise.resolve().then(n.bind(n,54517)).then((function(n){var o=i?"on":"off";n.centerFocus[o](t,e)}))}function f(t){var e,n={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};r.Z.tv?(n.size="fullscreen",e=!0,n.autoFocus=!0):(n.modal=!1,n.entryAnimation=t.entryAnimation,n.exitAnimation=t.exitAnimation,n.entryAnimationDuration=t.entryAnimationDuration||140,n.exitAnimationDuration=t.exitAnimationDuration||100,n.autoFocus=!1);var i=a.default.createDialog(n);e?i.classList.add("actionsheet-fullscreen"):i.classList.add("actionsheet-not-fullscreen"),i.classList.add("actionSheet"),t.dialogClass&&i.classList.add(t.dialogClass);var d="",f=r.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",v="";t.items.length>20&&(v+="min-width:"+(l.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var h,m,p=!1,y=[],b=c(t.items);try{for(b.s();!(m=b.n()).done;){var g=m.value;(h=g.icon||(g.selected?"check":null))&&(p=!0),y.push(h||"")}}catch(t){b.e(t)}finally{b.f()}r.Z.tv&&(d+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(s.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var I=t.title&&!p;I||r.Z.tv?d+='<div class="actionSheetContent actionSheetContent-centered">':d+='<div class="actionSheetContent">',t.title&&(d+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(d+='<p class="actionSheetText">'+o()(t.text)+"</p>");var S="actionSheetScroller";r.Z.tv&&(S+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),d+='<div class="'+S+" "+f+'" style="'+v+'">';var C="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(C+=" listItem-border"),t.menuItemClass&&(C+=" "+t.menuItemClass),r.Z.tv&&(C+=" listItem-focusscale"),r.Z.mobile&&(C+=" actionsheet-xlargeFont");for(var x=0;x<t.items.length;x++){var w=t.items[x];w.divider?d+='<div class="actionsheetDivider"></div>':(d+="<button"+(w.selected&&r.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+C+'" data-id="'+(null==w.id||""===w.id?w.value:w.id)+'">',(h=y[x])?d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(h,'" aria-hidden="true"></span>'):p&&!I&&(d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),d+='<div class="listItemBody actionsheetListItemBody">',d+='<div class="listItemBodyText actionSheetItemText">',d+=o()(w.name||w.textContent||w.innerText),d+="</div>",w.secondaryText&&(d+='<div class="listItemBodyText secondary">'.concat(o()(w.secondaryText),"</div>")),d+="</div>",w.asideText&&(d+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(w.asideText),"</div>")),d+="</button>")}t.showCancel&&(d+='<div class="buttons">',d+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(s.ZP.translate("ButtonCancel"),"</button>"),d+="</div>"),d+="</div>",i.innerHTML=d,r.Z.tv&&u(i.querySelector(".actionSheetScroller"),!1,!0);var T,A,P=i.querySelector(".btnCloseActionSheet");return P&&P.addEventListener("click",(function(){a.default.close(i)})),t.timeout&&(A=setTimeout((function(){a.default.close(i)}),t.timeout)),new Promise((function(e,o){var s;i.addEventListener("click",(function(n){var o=l.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(T=o.getAttribute("data-id"),t.resolveOnClick&&(t.resolveOnClick.indexOf?-1!==t.resolveOnClick.indexOf(T)&&(e(T),s=!0):(e(T),s=!0)),a.default.close(i))})),i.addEventListener("close",(function(){r.Z.tv&&u(i.querySelector(".actionSheetScroller"),!1,!1),A&&(clearTimeout(A),A=null),s||(null!=T?(t.callback&&t.callback(T),e(T)):o("ActionSheet closed without resolving"))})),a.default.open(i);var d=t.positionTo&&"fullscreen"!==n.size?function(t,e){var n=l.ZP.getWindowSize(),i=n.innerHeight,o=n.innerWidth,a=function(t){var e=[];if(!document)return e;var n,i=c(t);try{for(i.s();!(n=i.n()).done;){var o=n.value.getBoundingClientRect();e.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(t){i.e(t)}finally{i.f()}return e}([t.positionTo])[0];"top"!==t.positionY&&(a.top+=(a.height||0)/2),a.left+=(a.width||0)/2;var r=e.offsetHeight||300,s=e.offsetWidth||160;a.top-=r/2,a.left-=s/2;var d=a.left+s-o,u=a.top+r-i;return d>0&&(a.left-=d+20),u>0&&(a.top-=u+20),a.top+=t.offsetTop||0,a.left+=t.offsetLeft||0,a.top=Math.max(a.top,10),a.left=Math.max(a.left,10),a}(t,i):null;d&&(i.style.position="fixed",i.style.margin=0,i.style.left=d.left+"px",i.style.top=d.top+"px")}))}n(38228),e.default={show:f}},89394:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}}),n(69217),n(61013),n(23938),n(63238),n(61418),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var i=n(65009),o=n.n(i),a=n(72365),r=n(93355),s=n(28540),l=n(94994),c=n(12801),d=(n(62033),n(61414),n(38228),n(18613));function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function f(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==u(t)||null===t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,e);if("object"!==u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(i.key,"string"),"symbol"===u(o)?o:String(o)),i)}var o}function v(t,e,n){return e&&f(t.prototype,e),n&&f(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}var h=v((function t(e){function n(t){var n=a.ZP.parentWithClass(t.target,"btnMap");if(n){var o=n.getAttribute("data-id"),r=n.getAttribute("data-providerid"),l=u.ProviderChannels.map((function(t){return{name:t.Name,id:t.Id,selected:t.Id.toLowerCase()===r.toLowerCase()}})).sort((function(t,e){return t.name.localeCompare(e.name)}));c.default.show({positionTo:n,items:l}).then((function(t){!function(t,n,o){s.ZP.show();var r=e.providerId;d.Z.getApiClient(e.serverId).ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ChannelMappings"),data:JSON.stringify({providerId:r,tunerChannelId:n,providerChannelId:o}),contentType:"application/json",dataType:"json"}).then((function(e){var n=a.ZP.parentWithClass(t,"listItem");t.setAttribute("data-providerid",e.ProviderChannelId),n.querySelector(".secondary").innerText=i(e,u.ProviderName),s.ZP.hide()}))}(n,o,t)}))}}function i(t,e){return"".concat(t.ProviderChannelName||""," - ").concat(e)}var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.show=function(){var t=r.default.createDialog({removeOnClose:!0,size:"small"});t.classList.add("formDialog"),t.classList.add("ui-body-a"),t.classList.add("background-theme-a");var a="",s=l.ZP.translate("MapChannels");return a+='<div class="formDialogHeader">',a+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(l.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),a+='<h3 class="formDialogHeaderTitle">',a+=s,a+="</h3>",a+="</div>",a+=function(){var t="";return t+='<div class="formDialogContent smoothScrollY">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+="<h1>".concat(l.ZP.translate("Channels"),"</h1>"),t+='<div class="channels paperList">',t+="</div>",t+="</form>",(t+="</div>")+"</div>"}(),t.innerHTML=a,function(t,e){var a,r,s;(a=e.serverId,r=e.providerId,s=d.Z.getApiClient(a),s.getJSON(s.getUrl("LiveTv/ChannelMappingOptions",{providerId:r}))).then((function(e){u=e;var a=t.querySelector(".channels");a.innerHTML=e.TunerChannels.map((function(t){return function(t,e){var n="";return n+='<div class="listItem">',n+='<span class="material-icons listItemIcon dvr" aria-hidden="true"></span>',n+='<div class="listItemBody two-line">',n+='<h3 class="listItemBodyText">',n+=o()(t.Name),n+="</h3>",n+='<div class="secondary listItemBodyText">',t.ProviderChannelName&&(n+=o()(i(t,e))),n+="</div>",n+="</div>",(n+='<button class="btnMap autoSize" is="paper-icon-button-light" type="button" data-id="'.concat(t.Id,'" data-providerid="').concat(t.ProviderChannelId,'"><span class="material-icons mode_edit" aria-hidden="true"></span></button>'))+"</div>"}(t,e.ProviderName)})).join(""),a.addEventListener("click",n)}))}(t,e),t.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(t)})),new Promise((function(e){t.addEventListener("close",e),r.default.open(t)}))}}))}}]);