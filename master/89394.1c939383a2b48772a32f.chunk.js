"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[89394],{89394:function(e,t,n){n.r(t),n.d(t,{default:function(){return p}}),n(69217),n(61013),n(23938),n(63238),n(61418),n(99785);var a=n(65009),r=n.n(a),i=n(72365),o=n(93355),s=n(28540),d=n(94994),l=n(12801),c=(n(62033),n(61414),n(38228),n(18613));function u(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function v(e,t,n){return t&&u(e.prototype,t),n&&u(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var p=v((function e(t){function n(e){var n=i.ZP.parentWithClass(e.target,"btnMap");if(n){var r=n.getAttribute("data-id"),o=n.getAttribute("data-providerid"),d=u.ProviderChannels.map((function(e){return{name:e.Name,id:e.Id,selected:e.Id.toLowerCase()===o.toLowerCase()}})).sort((function(e,t){return e.name.localeCompare(t.name)}));l.default.show({positionTo:n,items:d}).then((function(e){!function(e,n,r){s.ZP.show();var o=t.providerId;c.Z.getApiClient(t.serverId).ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ChannelMappings"),data:JSON.stringify({providerId:o,tunerChannelId:n,providerChannelId:r}),contentType:"application/json",dataType:"json"}).then((function(t){var n=i.ZP.parentWithClass(e,"listItem");e.setAttribute("data-providerid",t.ProviderChannelId),n.querySelector(".secondary").innerText=a(t,u.ProviderName),s.ZP.hide()}))}(n,r,e)}))}}function a(e,t){return"".concat(e.ProviderChannelName||""," - ").concat(t)}var u;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.show=function(){var e=o.default.createDialog({removeOnClose:!0,size:"small"});e.classList.add("formDialog"),e.classList.add("ui-body-a"),e.classList.add("background-theme-a");var i="",s=d.ZP.translate("MapChannels");return i+='<div class="formDialogHeader">',i+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(d.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),i+='<h3 class="formDialogHeaderTitle">',i+=s,i+="</h3>",i+="</div>",i+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form style="margin:auto;">',e+="<h1>".concat(d.ZP.translate("Channels"),"</h1>"),e+='<div class="channels paperList">',e+="</div>",e+="</form>",(e+="</div>")+"</div>"}(),e.innerHTML=i,function(e,t){var i,o,s;(i=t.serverId,o=t.providerId,s=c.Z.getApiClient(i),s.getJSON(s.getUrl("LiveTv/ChannelMappingOptions",{providerId:o}))).then((function(t){u=t;var i=e.querySelector(".channels");i.innerHTML=t.TunerChannels.map((function(e){return function(e,t){var n="";return n+='<div class="listItem">',n+='<span class="material-icons listItemIcon dvr" aria-hidden="true"></span>',n+='<div class="listItemBody two-line">',n+='<h3 class="listItemBodyText">',n+=r()(e.Name),n+="</h3>",n+='<div class="secondary listItemBodyText">',e.ProviderChannelName&&(n+=r()(a(e,t))),n+="</div>",n+="</div>",(n+='<button class="btnMap autoSize" is="paper-icon-button-light" type="button" data-id="'.concat(e.Id,'" data-providerid="').concat(e.ProviderChannelId,'"><span class="material-icons mode_edit" aria-hidden="true"></span></button>'))+"</div>"}(e,t.ProviderName)})).join(""),i.addEventListener("click",n)}))}(e,t),e.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(e)})),new Promise((function(t){e.addEventListener("close",t),o.default.open(e)}))}}))}}]);