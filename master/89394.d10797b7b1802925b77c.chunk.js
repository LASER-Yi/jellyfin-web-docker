"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89394,80454,33390],{89394:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}}),n(19131),n(96626),n(84159),n(81414),n(37666),n(26031),n(95822),n(56187),n(38690),n(11908),n(33096),n(89228),n(13227),n(14011),n(11431);var i=n(65009),o=n.n(i),a=n(72365),r=n(93355),l=n(84597),s=n(94994),c=n(80454),d=(n(62033),n(61414),n(38228),n(18613));function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,h(i.key),i)}}function f(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:String(e)}var m=f((function t(e){function n(t){var n=a.ZP.parentWithClass(t.target,"btnMap");if(n){var o=n.getAttribute("data-id"),r=n.getAttribute("data-providerid"),s=u.ProviderChannels.map((function(t){return{name:t.Name,id:t.Id,selected:t.Id.toLowerCase()===r.toLowerCase()}})).sort((function(t,e){return t.name.localeCompare(e.name)}));c.default.show({positionTo:n,items:s}).then((function(t){!function(t,n,o){l.ZP.show();var r=e.providerId;d.Z.getApiClient(e.serverId).ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ChannelMappings"),data:JSON.stringify({providerId:r,tunerChannelId:n,providerChannelId:o}),contentType:"application/json",dataType:"json"}).then((function(e){var n=a.ZP.parentWithClass(t,"listItem");t.setAttribute("data-providerid",e.ProviderChannelId),n.querySelector(".secondary").innerText=i(e,u.ProviderName),l.ZP.hide()}))}(n,o,t)}))}}function i(t,e){return"".concat(t.ProviderChannelName||""," - ").concat(e)}var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.show=function(){var t=r.default.createDialog({removeOnClose:!0,size:"small"});t.classList.add("formDialog"),t.classList.add("ui-body-a"),t.classList.add("background-theme-a");var a="",l=s.ZP.translate("MapChannels");return a+='<div class="formDialogHeader">',a+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(s.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),a+='<h3 class="formDialogHeaderTitle">',a+=l,a+="</h3>",a+="</div>",a+=function(){var t="";return t+='<div class="formDialogContent smoothScrollY">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+="<h1>".concat(s.ZP.translate("Channels"),"</h1>"),t+='<div class="channels paperList">',t+="</div>",t+="</form>",(t+="</div>")+"</div>"}(),t.innerHTML=a,function(t,e){var a,r,l;(a=e.serverId,r=e.providerId,l=d.Z.getApiClient(a),l.getJSON(l.getUrl("LiveTv/ChannelMappingOptions",{providerId:r}))).then((function(e){u=e;var a=t.querySelector(".channels");a.innerHTML=e.TunerChannels.map((function(t){return function(t,e){var n="";return n+='<div class="listItem">',n+='<span class="material-icons listItemIcon dvr" aria-hidden="true"></span>',n+='<div class="listItemBody two-line">',n+='<h3 class="listItemBodyText">',n+=o()(t.Name),n+="</h3>",n+='<div class="secondary listItemBodyText">',t.ProviderChannelName&&(n+=o()(i(t,e))),n+="</div>",n+="</div>",(n+='<button class="btnMap autoSize" is="paper-icon-button-light" type="button" data-id="'.concat(t.Id,'" data-providerid="').concat(t.ProviderChannelId,'"><span class="material-icons mode_edit" aria-hidden="true"></span></button>'))+"</div>"}(t,e.ProviderName)})).join(""),a.addEventListener("click",n)}))}(t,e),t.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(t)})),new Promise((function(e){t.addEventListener("close",e),r.default.open(t)}))}}))},80454:function(t,e,n){n.r(e),n.d(e,{show:function(){return u}});var i=n(65009),o=n.n(i),a=n(93355),r=n(30325),l=n(94994),s=n(72365),c=(n(38228),function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(t,e,i){Promise.resolve().then(n.bind(n,35545)).then((function(n){var o=i?"on":"off";n.centerFocus[o](t,e)})).catch((function(t){console.warn("Error in centerFocus",t)}))}function u(t){var e,n,i,u={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};r.Z.tv?(u.size="fullscreen",i=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=t.entryAnimation,u.exitAnimation=t.exitAnimation,u.entryAnimationDuration=t.entryAnimationDuration||140,u.exitAnimationDuration=t.exitAnimationDuration||100,u.autoFocus=!1);var v=a.default.createDialog(u);i?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),t.dialogClass&&v.classList.add(t.dialogClass);var f="",h=r.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";t.items.length>20&&(m+="min-width:"+(s.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var p,y=!1,b=[];try{for(var g=c(t.items),S=g.next();!S.done;S=g.next())(p=(T=S.value).icon||(T.selected?"check":null))&&(y=!0),b.push(p||"")}catch(t){e={error:t}}finally{try{S&&!S.done&&(n=g.return)&&n.call(g)}finally{if(e)throw e.error}}r.Z.tv&&(f+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var I=t.title&&!y;I||r.Z.tv?f+='<div class="actionSheetContent actionSheetContent-centered">':f+='<div class="actionSheetContent">',t.title&&(f+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(f+='<p class="actionSheetText">'+o()(t.text)+"</p>");var C="actionSheetScroller";r.Z.tv&&(C+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),f+='<div class="'+C+" "+h+'" style="'+m+'">';var x="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(x+=" listItem-border"),t.menuItemClass&&(x+=" "+t.menuItemClass),r.Z.tv&&(x+=" listItem-focusscale"),r.Z.mobile&&(x+=" actionsheet-xlargeFont");for(var w=0;w<t.items.length;w++){var T;(T=t.items[w]).divider?f+='<div class="actionsheetDivider"></div>':(f+="<button"+(T.selected&&r.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+x+'" data-id="'+(null==T.id||""===T.id?T.value:T.id)+'">',(p=b[w])?f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(p,'" aria-hidden="true"></span>'):y&&!I&&(f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),f+='<div class="listItemBody actionsheetListItemBody">',f+='<div class="listItemBodyText actionSheetItemText">',f+=o()(T.name||T.textContent||T.innerText),f+="</div>",T.secondaryText&&(f+='<div class="listItemBodyText secondary">'.concat(o()(T.secondaryText),"</div>")),f+="</div>",T.asideText&&(f+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(T.asideText),"</div>")),f+="</button>")}if(t.showCancel&&(f+='<div class="buttons">',f+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.ZP.translate("ButtonCancel"),"</button>"),f+="</div>"),f+="</div>",v.innerHTML=f,r.Z.tv){var P=v.querySelector(".actionSheetScroller");P&&d(P,!1,!0)}var Z=v.querySelector(".btnCloseActionSheet");Z&&Z.addEventListener("click",(function(){a.default.close(v)}));var A,L=null;return t.timeout&&(A=setTimeout((function(){a.default.close(v)}),t.timeout)),new Promise((function(e,n){var i=!1;v.addEventListener("click",(function(n){var o=s.ZP.parentWithClass(n.target,"actionSheetMenuItem");o&&(L=o.getAttribute("data-id"),t.resolveOnClick&&(Array.isArray(t.resolveOnClick)?-1!==t.resolveOnClick.indexOf(L)&&(e(L),i=!0):(e(L),i=!0)),a.default.close(v))})),v.addEventListener("close",(function(){if(r.Z.tv){var o=v.querySelector(".actionSheetScroller");o&&d(o,!1,!1)}A&&(clearTimeout(A),A=void 0),i||(null!=L?(t.callback&&t.callback(L),e(L)):n("ActionSheet closed without resolving"))})),a.default.open(v).catch((function(t){console.warn("DialogHelper.open error",t)}));var o=t.positionTo&&"fullscreen"!==u.size?function(t,e,n){var i=s.ZP.getWindowSize(),o=i.innerHeight,a=i.innerWidth,r=function(t){var e,n,i=[];if(!document)return i;try{for(var o=c(t),a=o.next();!a.done;a=o.next()){var r=a.value.getBoundingClientRect();i.push({top:r.top,left:r.left,width:r.width,height:r.height})}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i}([t])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var l=n.offsetHeight||300,d=n.offsetWidth||160;r.top-=l/2,r.left-=d/2;var u=r.left+d-a,v=r.top+l-o;return u>0&&(r.left-=u+20),v>0&&(r.top-=v+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(t.positionTo,t,v):null;o&&(v.style.position="fixed",v.style.margin="0",v.style.left=o.left+"px",v.style.top=o.top+"px")}))}e.default={show:u}}}]);