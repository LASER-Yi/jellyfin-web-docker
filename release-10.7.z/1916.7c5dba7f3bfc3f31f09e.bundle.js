"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1916],{61916:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}}),n(69217),n(61013),n(23938),n(63238),n(61418),n(19068),n(87211),n(25901),n(92189),n(95163),n(99785),n(91047),n(5769),n(17460),n(14078);var r=n(83094),a=n(1115),i=n(6594),o=n(53754),s=n(32465),l=(n(30983),n(21865),n(78066),n(17734),n(56561),n(16589),n(53913));function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==c(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,t);if("object"!==c(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===c(a)?a:String(a)),r)}var a}function u(e,t,n){return t&&d(e.prototype,t),n&&d(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}var v=u((function e(t){function n(e){var n=r.ZP.parentWithClass(e.target,"btnMap");if(n){var a=n.getAttribute("data-id"),o=n.getAttribute("data-providerid"),u=d.ProviderChannels.map((function(e){return{name:e.Name,id:e.Id,selected:e.Id.toLowerCase()===o.toLowerCase()}})).sort((function(e,t){return e.name.localeCompare(t.name)}));s.default.show({positionTo:n,items:u}).then((function(e){!function(e,n,a){i.ZP.show();var o=t.providerId;l.Z.getApiClient(t.serverId).ajax({type:"POST",url:ApiClient.getUrl("LiveTv/ChannelMappings"),data:JSON.stringify({providerId:o,tunerChannelId:n,providerChannelId:a}),contentType:"application/json",dataType:"json"}).then((function(t){var n=r.ZP.parentWithClass(e,"listItem");e.setAttribute("data-providerid",t.ProviderChannelId),n.querySelector(".secondary").innerHTML=c(t,d.ProviderName),i.ZP.hide()}))}(n,a,e)}))}}function c(e,t){return"".concat(e.ProviderChannelName||""," - ").concat(t)}var d;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.show=function(){var e=a.default.createDialog({removeOnClose:!0,size:"small"});e.classList.add("formDialog"),e.classList.add("ui-body-a"),e.classList.add("background-theme-a");var r="";return r+='<div class="formDialogHeader">',r+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button>',r+='<h3 class="formDialogHeaderTitle">',r+=o.ZP.translate("MapChannels"),r+="</h3>",r+="</div>",r+=function(){var e="";return e+='<div class="formDialogContent smoothScrollY">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<form style="margin:auto;">',e+="<h1>".concat(o.ZP.translate("Channels"),"</h1>"),e+='<div class="channels paperList">',e+="</div>",e+="</form>",(e+="</div>")+"</div>"}(),e.innerHTML=r,function(e,t){var r,a,i;(r=t.serverId,a=t.providerId,i=l.Z.getApiClient(r),i.getJSON(i.getUrl("LiveTv/ChannelMappingOptions",{providerId:a}))).then((function(t){d=t;var r=e.querySelector(".channels");r.innerHTML=t.TunerChannels.map((function(e){return function(e,t){var n="";return n+='<div class="listItem">',n+='<span class="material-icons listItemIcon dvr"></span>',n+='<div class="listItemBody two-line">',n+='<h3 class="listItemBodyText">',n+=e.Name,n+="</h3>",n+='<div class="secondary listItemBodyText">',e.ProviderChannelName&&(n+=c(e,t)),n+="</div>",n+="</div>",(n+='<button class="btnMap autoSize" is="paper-icon-button-light" type="button" data-id="'.concat(e.Id,'" data-providerid="').concat(e.ProviderChannelId,'"><span class="material-icons mode_edit"></span></button>'))+"</div>"}(e,t.ProviderName)})).join(""),r.addEventListener("click",n)}))}(e,t),e.querySelector(".btnCancel").addEventListener("click",(function(){a.default.close(e)})),new Promise((function(t){e.addEventListener("close",t),a.default.open(e)}))}}))}}]);