"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[43260,79617,1998],{43260:function(t,e,n){n.r(e),n.d(e,{default:function(){return m}}),n(26448),n(86584),n(24776),n(78557),n(90076),n(81678),n(4754),n(29305),n(32733),n(94),n(36947),n(84701),n(44962),n(83994),n(82367);var i=n(22696),o=n.n(i),a=n(47629),r=n(79754),l=n(56869),s=n(9482),c=n(79617),d=(n(98959),n(15453),n(10353),n(86191));function u(t){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},u(t)}function v(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,h(i.key),i)}}function f(t,e,n){return e&&v(t.prototype,e),n&&v(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(t){var e=function(t,e){if("object"!=u(t)||!t)return t;var n=t[Symbol.toPrimitive];if(void 0!==n){var i=n.call(t,"string");if("object"!=u(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==u(e)?e:String(e)}var m=f((function t(e){function n(t){var n=a.Ay.parentWithClass(t.target,"btnMap");if(n){var o=n.getAttribute("data-id"),r=n.getAttribute("data-providerid"),s=u.ProviderChannels.map((function(t){return{name:t.Name,id:t.Id,selected:t.Id.toLowerCase()===r.toLowerCase()}})).sort((function(t,e){return t.name.localeCompare(e.name)}));c.default.show({positionTo:n,items:s}).then((function(t){!function(t,n,o){l.Ay.show();var r=e.providerId;d.A.getApiClient(e.serverId).ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ChannelMappings"),data:JSON.stringify({providerId:r,tunerChannelId:n,providerChannelId:o}),contentType:"application/json",dataType:"json"}).then((function(e){var n=a.Ay.parentWithClass(t,"listItem");t.setAttribute("data-providerid",e.ProviderChannelId),n.querySelector(".secondary").innerText=i(e,u.ProviderName),l.Ay.hide()}))}(n,o,t)}))}}function i(t,e){return"".concat(t.ProviderChannelName||""," - ").concat(e)}var u;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this.show=function(){var t=r.default.createDialog({removeOnClose:!0,size:"small"});t.classList.add("formDialog"),t.classList.add("ui-body-a"),t.classList.add("background-theme-a");var a="",l=s.Ay.translate("MapChannels");return a+='<div class="formDialogHeader">',a+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(s.Ay.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),a+='<h3 class="formDialogHeaderTitle">',a+=l,a+="</h3>",a+="</div>",a+=function(){var t="";return t+='<div class="formDialogContent smoothScrollY">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+="<h1>".concat(s.Ay.translate("Channels"),"</h1>"),t+='<div class="channels paperList">',t+="</div>",t+="</form>",(t+="</div>")+"</div>"}(),t.innerHTML=a,function(t,e){var a,r,l;(a=e.serverId,r=e.providerId,l=d.A.getApiClient(a),l.getJSON(l.getUrl("LiveTv/ChannelMappingOptions",{providerId:r}))).then((function(e){u=e;var a=t.querySelector(".channels");a.innerHTML=e.TunerChannels.map((function(t){return function(t,e){var n="";return n+='<div class="listItem">',n+='<span class="material-icons listItemIcon dvr" aria-hidden="true"></span>',n+='<div class="listItemBody two-line">',n+='<h3 class="listItemBodyText">',n+=o()(t.Name),n+="</h3>",n+='<div class="secondary listItemBodyText">',t.ProviderChannelName&&(n+=o()(i(t,e))),n+="</div>",n+="</div>",(n+='<button class="btnMap autoSize" is="paper-icon-button-light" type="button" data-id="'.concat(t.Id,'" data-providerid="').concat(t.ProviderChannelId,'"><span class="material-icons mode_edit" aria-hidden="true"></span></button>'))+"</div>"}(t,e.ProviderName)})).join(""),a.addEventListener("click",n)}))}(t,e),t.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(t)})),new Promise((function(e){t.addEventListener("close",e),r.default.open(t)}))}}))},79617:function(t,e,n){n.r(e),n.d(e,{show:function(){return u}});var i=n(22696),o=n.n(i),a=n(79754),r=n(46782),l=n(9482),s=n(47629),c=(n(10353),function(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],i=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&i>=t.length&&(t=void 0),{value:t&&t[i++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(t,e,i){Promise.resolve().then(n.bind(n,46345)).then((function(n){var o=i?"on":"off";n.centerFocus[o](t,e)})).catch((function(t){console.warn("Error in centerFocus",t)}))}function u(t){var e,n,i,u={removeOnClose:!0,enableHistory:t.enableHistory,scrollY:!1};r.A.tv?(u.size="fullscreen",i=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=t.entryAnimation,u.exitAnimation=t.exitAnimation,u.entryAnimationDuration=t.entryAnimationDuration||140,u.exitAnimationDuration=t.exitAnimationDuration||100,u.autoFocus=!1);var v=a.default.createDialog(u);i?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),t.dialogClass&&v.classList.add(t.dialogClass);var f="",h=r.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";t.items.length>20&&(m+="min-width:"+(s.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var p,y=!1,b=[];try{for(var g=c(t.items),S=g.next();!S.done;S=g.next())(p=(w=S.value).icon||(w.selected?"check":null))&&(y=!0),b.push(p||"")}catch(t){e={error:t}}finally{try{S&&!S.done&&(n=g.return)&&n.call(g)}finally{if(e)throw e.error}}r.A.tv&&(f+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var I=t.title&&!y;I||r.A.tv?f+='<div class="actionSheetContent actionSheetContent-centered">':f+='<div class="actionSheetContent">',t.title&&(f+='<h1 class="actionSheetTitle">'+o()(t.title)+"</h1>"),t.text&&(f+='<p class="actionSheetText">'+o()(t.text)+"</p>");var A="actionSheetScroller";r.A.tv&&(A+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),f+='<div class="'+A+" "+h+'" style="'+m+'">';var C="listItem listItem-button actionSheetMenuItem";(t.border||t.shaded)&&(C+=" listItem-border"),t.menuItemClass&&(C+=" "+t.menuItemClass),r.A.tv&&(C+=" listItem-focusscale"),r.A.mobile&&(C+=" actionsheet-xlargeFont");for(var x=0;x<t.items.length;x++){var w;(w=t.items[x]).divider?f+='<div class="actionsheetDivider"></div>':(f+="<button"+(w.selected&&r.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+C+'" data-id="'+(null==w.id||""===w.id?w.value:w.id)+'">',(p=b[x])?f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(p,'" aria-hidden="true"></span>'):y&&!I&&(f+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),f+='<div class="listItemBody actionsheetListItemBody">',f+='<div class="listItemBodyText actionSheetItemText">',f+=o()(w.name||w.textContent||w.innerText),f+="</div>",w.secondaryText&&(f+='<div class="listItemBodyText secondary">'.concat(o()(w.secondaryText),"</div>")),f+="</div>",w.asideText&&(f+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(w.asideText),"</div>")),f+="</button>")}if(t.showCancel&&(f+='<div class="buttons">',f+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.Ay.translate("ButtonCancel"),"</button>"),f+="</div>"),f+="</div>",v.innerHTML=f,r.A.tv){var T=v.querySelector(".actionSheetScroller");T&&d(T,!1,!0)}var L=v.querySelector(".btnCloseActionSheet");L&&L.addEventListener("click",(function(){a.default.close(v)}));var k,P=null;return t.timeout&&(k=setTimeout((function(){a.default.close(v)}),t.timeout)),new Promise((function(e,n){var i=!1;v.addEventListener("click",(function(n){var o=s.Ay.parentWithClass(n.target,"actionSheetMenuItem");o&&(P=o.getAttribute("data-id"),t.resolveOnClick&&(Array.isArray(t.resolveOnClick)?-1!==t.resolveOnClick.indexOf(P)&&(e(P),i=!0):(e(P),i=!0)),a.default.close(v))})),v.addEventListener("close",(function(){if(r.A.tv){var o=v.querySelector(".actionSheetScroller");o&&d(o,!1,!1)}k&&(clearTimeout(k),k=void 0),i||(null!=P?(t.callback&&t.callback(P),e(P)):n("ActionSheet closed without resolving"))})),a.default.open(v).catch((function(t){console.warn("DialogHelper.open error",t)}));var o=t.positionTo&&"fullscreen"!==u.size?function(t,e,n){var i=s.Ay.getWindowSize(),o=i.innerHeight,a=i.innerWidth,r=function(t){var e,n,i=[];if(!document)return i;try{for(var o=c(t),a=o.next();!a.done;a=o.next()){var r=a.value.getBoundingClientRect();i.push({top:r.top,left:r.left,width:r.width,height:r.height})}}catch(t){e={error:t}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(e)throw e.error}}return i}([t])[0];"top"!==e.positionY&&(r.top+=(r.height||0)/2),r.left+=(r.width||0)/2;var l=n.offsetHeight||300,d=n.offsetWidth||160;r.top-=l/2,r.left-=d/2;var u=r.left+d-a,v=r.top+l-o;return u>0&&(r.left-=u+20),v>0&&(r.top-=v+20),r.top+=e.offsetTop||0,r.left+=e.offsetLeft||0,r.top=Math.max(r.top,10),r.left=Math.max(r.left,10),r}(t.positionTo,t,v):null;o&&(v.style.position="fixed",v.style.margin="0",v.style.left=o.left+"px",v.style.top=o.top+"px")}))}e.default={show:u}}}]);