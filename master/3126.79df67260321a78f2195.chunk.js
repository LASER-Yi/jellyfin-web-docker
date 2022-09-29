"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3126],{43126:function(e,t,l){l.r(t),l.d(t,{showEditor:function(){return g}}),l(5769),l(61013),l(23938),l(63238),l(61418),l(17460),l(14078),l(99785);var a,n=l(65009),r=l.n(n),o=l(72365),i=l(48102),s=l(51161),c=l(30325),u=l(48957),d=l(99294),f=l(60934),v=l(52050),y=l(94994),m=(l(38228),l(33310),l(61414),l(19099),l(85427),l(6626),l(18613));function p(e,t){for(var l=0;l<t.length;l++){var a=t[l];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function P(e,t,l){return t&&p(e.prototype,t),l&&p(e,l),Object.defineProperty(e,"prototype",{writable:!1}),e}function b(e){var t=o.ZP.parentWithClass(this,"dialog"),l=t.querySelector("#selectPlaylistToAddTo").value,n=m.Z.getApiClient(a);return l?(f.set("playlisteditor-lastplaylistid",l),function(e,t,l){var a=t.querySelector(".fldSelectedItemIds").value||"";if("queue"===l)return u.O.queue({serverId:e.serverId(),ids:a.split(",")}),t.submitted=!0,void i.default.close(t);s.ZP.show();var n=e.getUrl("Playlists/".concat(l,"/Items"),{Ids:a,userId:e.getCurrentUserId()});e.ajax({type:"POST",url:n}).then((function(){s.ZP.hide(),t.submitted=!0,i.default.close(t)}))}(n,t,l)):function(e,t){s.ZP.show();var l=e.getUrl("Playlists",{Name:t.querySelector("#txtNewPlaylistName").value,Ids:t.querySelector(".fldSelectedItemIds").value||"",userId:e.getCurrentUserId()});e.ajax({type:"POST",url:l,dataType:"json",contentType:"application/json"}).then((function(l){s.ZP.hide();var a=l.Id;t.submitted=!0,i.default.close(t),function(e,t){v.appRouter.showItem(t,e.serverId())}(e,a)}))}(n,t),e.preventDefault(),!1}function h(e){e.dispatchEvent(new CustomEvent("change",{}))}function S(e,t,a){Promise.resolve().then(l.bind(l,54517)).then((function(l){var n=a?"on":"off";l.centerFocus[n](e,t)}))}var g=P((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var l=t.items||{};a=t.serverId;var n={removeOnClose:!0,scrollY:!1};c.Z.tv?n.size="fullscreen":n.size="small";var o=i.default.createDialog(n);o.classList.add("formDialog");var v="",p=y.ZP.translate("HeaderAddToPlaylist");return v+='<div class="formDialogHeader">',v+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(y.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),v+='<h3 class="formDialogHeaderTitle">',v+=p,v+="</h3>",v+="</div>",v+=function(e){var t="";t+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+='<div class="fldSelectPlaylist selectContainer">';var l=e.length?" autofocus":"";return t+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(y.ZP.translate("LabelPlaylist"),'"').concat(l,"></select>"),t+="</div>",t+='<div class="newPlaylistInfo">',t+='<div class="inputContainer">',l=e.length?"":" autofocus",t+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(y.ZP.translate("LabelName"),'"').concat(l," />"),t+="</div>",t+="</div>",t+='<div class="formDialogFooter">',t+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(y.ZP.translate("Add"),"</button>"),t+="</div>",t+='<input type="hidden" class="fldSelectedItemIds" />',t+="</form>",(t+="</div>")+"</div>"}(l),o.innerHTML=v,function(e,t,l){if(e.querySelector("#selectPlaylistToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newPlaylistInfo").classList.add("hide"),e.querySelector("#txtNewPlaylistName").removeAttribute("required")):(e.querySelector(".newPlaylistInfo").classList.remove("hide"),e.querySelector("#txtNewPlaylistName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",b),e.querySelector(".fldSelectedItemIds",e).value=l.join(","),l.length)e.querySelector(".fldSelectPlaylist").classList.remove("hide"),function(e,t){var l=t.querySelector("#selectPlaylistToAddTo");s.ZP.hide(),t.querySelector(".newPlaylistInfo").classList.add("hide");var n=m.Z.getApiClient(a);n.getItems(n.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"Playlist",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(t){var a="";(!1!==e.enableAddToPlayQueue&&u.O.isPlaying()||d.Z.Manager.isSyncPlayEnabled())&&(a+='<option value="queue">'.concat(y.ZP.translate("AddToPlayQueue"),"</option>")),a+='<option value="">'.concat(y.ZP.translate("OptionNew"),"</option>"),a+=t.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(r()(e.Name),"</option>")})),l.innerHTML=a;var n=e.defaultValue;n||(n=f.get("playlisteditor-lastplaylistid")||""),l.value="new"===n?"":n,l.value||(l.value=""),h(l),s.ZP.hide()}))}(t,e);else{e.querySelector(".fldSelectPlaylist").classList.add("hide");var n=e.querySelector("#selectPlaylistToAddTo");n.innerHTML="",n.value="",h(n)}}(o,t,l),o.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(o)})),c.Z.tv&&S(o.querySelector(".formDialogContent"),!1,!0),i.default.open(o).then((function(){return c.Z.tv&&S(o.querySelector(".formDialogContent"),!1,!1),o.submitted?Promise.resolve():Promise.reject()}))}));t.default=g}}]);