"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8013],{8013:function(e,t,l){l.r(t),l.d(t,{showEditor:function(){return h}}),l(5769),l(52077),l(72482),l(61013),l(23938),l(63238),l(61418),l(17460),l(14078),l(19068),l(87211),l(25901),l(92189),l(95163),l(99785),l(91047);var r,o=l(83094),n=l(1115),a=l(6594),i=l(78695),s=l(53218),u=l(22155),c=l(28978),d=l(6383),y=l(53754),f=(l(78066),l(30983),l(21865),l(50447),l(56561),l(16589),l(53913));function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var l=0;l<t.length;l++){var r=t[l];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var r=l.call(e,t);if("object"!==v(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===v(o)?o:String(o)),r)}var o}function p(e,t,l){return t&&m(e.prototype,t),l&&m(e,l),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e){var t=o.ZP.parentWithClass(this,"dialog"),l=t.querySelector("#selectPlaylistToAddTo").value,i=f.Z.getApiClient(r);return l?(c.set("playlisteditor-lastplaylistid",l),function(e,t,l){var r=t.querySelector(".fldSelectedItemIds").value||"";if("queue"===l)return s.O.queue({serverId:e.serverId(),ids:r.split(",")}),t.submitted=!0,void n.default.close(t);a.ZP.show();var o=e.getUrl("Playlists/".concat(l,"/Items"),{Ids:r,userId:e.getCurrentUserId()});e.ajax({type:"POST",url:o}).then((function(){a.ZP.hide(),t.submitted=!0,n.default.close(t)}))}(i,t,l)):function(e,t){a.ZP.show();var l=e.getUrl("Playlists",{Name:t.querySelector("#txtNewPlaylistName").value,Ids:t.querySelector(".fldSelectedItemIds").value||"",userId:e.getCurrentUserId()});e.ajax({type:"POST",url:l,dataType:"json",contentType:"application/json"}).then((function(l){a.ZP.hide();var r=l.Id;t.submitted=!0,n.default.close(t),function(e,t){d.appRouter.showItem(t,e.serverId())}(e,r)}))}(i,t),e.preventDefault(),!1}function P(e){e.dispatchEvent(new CustomEvent("change",{}))}function S(e,t,r){Promise.resolve().then(l.bind(l,74227)).then((function(l){var o=r?"on":"off";l.centerFocus[o](e,t)}))}var h=p((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var l=t.items||{};r=t.serverId;var o={removeOnClose:!0,scrollY:!1};i.Z.tv?o.size="fullscreen":o.size="small";var d=n.default.createDialog(o);d.classList.add("formDialog");var v="";return v+='<div class="formDialogHeader">',v+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button>',v+='<h3 class="formDialogHeaderTitle">',v+=y.ZP.translate("HeaderAddToPlaylist"),v+="</h3>",v+="</div>",v+=function(e){var t="";t+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+='<div class="fldSelectPlaylist selectContainer">';var l=e.length?" autofocus":"";return t+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(y.ZP.translate("LabelPlaylist"),'"').concat(l,"></select>"),t+="</div>",t+='<div class="newPlaylistInfo">',t+='<div class="inputContainer">',l=e.length?"":" autofocus",t+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(y.ZP.translate("LabelName"),'"').concat(l," />"),t+="</div>",t+="</div>",t+='<div class="formDialogFooter">',t+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(y.ZP.translate("Add"),"</button>"),t+="</div>",t+='<input type="hidden" class="fldSelectedItemIds" />',t+="</form>",(t+="</div>")+"</div>"}(l),d.innerHTML=v,function(e,t,l){if(e.querySelector("#selectPlaylistToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newPlaylistInfo").classList.add("hide"),e.querySelector("#txtNewPlaylistName").removeAttribute("required")):(e.querySelector(".newPlaylistInfo").classList.remove("hide"),e.querySelector("#txtNewPlaylistName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",b),e.querySelector(".fldSelectedItemIds",e).value=l.join(","),l.length)e.querySelector(".fldSelectPlaylist").classList.remove("hide"),function(e,t){var l=t.querySelector("#selectPlaylistToAddTo");a.ZP.hide(),t.querySelector(".newPlaylistInfo").classList.add("hide");var o=f.Z.getApiClient(r);o.getItems(o.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"Playlist",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(t){var r="";(!1!==e.enableAddToPlayQueue&&s.O.isPlaying()||u.Z.Manager.isSyncPlayEnabled())&&(r+='<option value="queue">'.concat(y.ZP.translate("AddToPlayQueue"),"</option>")),r+='<option value="">'.concat(y.ZP.translate("OptionNew"),"</option>"),r+=t.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(e.Name,"</option>")})),l.innerHTML=r;var o=e.defaultValue;o||(o=c.get("playlisteditor-lastplaylistid")||""),l.value="new"===o?"":o,l.value||(l.value=""),P(l),a.ZP.hide()}))}(t,e);else{e.querySelector(".fldSelectPlaylist").classList.add("hide");var o=e.querySelector("#selectPlaylistToAddTo");o.innerHTML="",o.value="",P(o)}}(d,t,l),d.querySelector(".btnCancel").addEventListener("click",(function(){n.default.close(d)})),i.Z.tv&&S(d.querySelector(".formDialogContent"),!1,!0),n.default.open(d).then((function(){return i.Z.tv&&S(d.querySelector(".formDialogContent"),!1,!1),d.submitted?Promise.resolve():Promise.reject()}))}));t.default=h}}]);