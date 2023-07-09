"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10586],{43126:function(e,t,l){l.r(t),l.d(t,{PlaylistEditor:function(){return q}}),l(5769),l(61013),l(23938),l(63238),l(61418),l(17460),l(14078),l(19068),l(87211),l(25901),l(92189),l(95163),l(99785),l(91047);var n,r=l(65009),o=l.n(r),a=l(72365),i=l(93355),s=l(28540),u=l(30325),c=l(48957),d=l(67932),y=l(60934),f=l(66560),v=l(94994),m=l(20484),p=(l(38228),l(62033),l(61414),l(15856),l(18613));function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function P(e,t){for(var l=0;l<t.length;l++){var n=t[l];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,r=function(e,t){if("object"!==b(e)||null===e)return e;var l=e[Symbol.toPrimitive];if(void 0!==l){var n=l.call(e,"string");if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key),"symbol"===b(r)?r:String(r)),n)}var r}function S(e,t,l){return t&&P(e.prototype,t),l&&P(e,l),Object.defineProperty(e,"prototype",{writable:!1}),e}function h(e){var t=a.ZP.parentWithClass(this,"dialog"),l=t.querySelector("#selectPlaylistToAddTo").value,r=p.Z.getApiClient(n);return l?(y.set("playlisteditor-lastplaylistid",l),function(e,t,l){var n=t.querySelector(".fldSelectedItemIds").value||"";if("queue"===l)return c.O.queue({serverId:e.serverId(),ids:n.split(",")}),t.submitted=!0,void i.default.close(t);s.ZP.show();var r=e.getUrl("Playlists/".concat(l,"/Items"),{Ids:n,userId:e.getCurrentUserId()});e.ajax({type:"POST",url:r}).then((function(){s.ZP.hide(),t.submitted=!0,i.default.close(t)}))}(r,t,l)):function(e,t){s.ZP.show();var l=e.getUrl("Playlists",{Name:t.querySelector("#txtNewPlaylistName").value,Ids:t.querySelector(".fldSelectedItemIds").value||"",userId:e.getCurrentUserId()});e.ajax({type:"POST",url:l,dataType:"json",contentType:"application/json"}).then((function(l){s.ZP.hide();var n=l.Id;t.submitted=!0,i.default.close(t),function(e,t){f.appRouter.showItem(t,e.serverId())}(e,n)}))}(r,t),e.preventDefault(),!1}function g(e){e.dispatchEvent(new CustomEvent("change",{}))}function I(e,t,n){Promise.resolve().then(l.bind(l,54517)).then((function(l){var r=n?"on":"off";l.centerFocus[r](e,t)}))}var q=S((function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var l=t.items||{};n=t.serverId;var r={removeOnClose:!0,scrollY:!1};u.Z.tv?r.size="fullscreen":r.size="small";var a=i.default.createDialog(r);a.classList.add("formDialog");var f="",b=v.ZP.translate("HeaderAddToPlaylist");return f+='<div class="formDialogHeader">',f+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(v.ZP.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),f+='<h3 class="formDialogHeaderTitle">',f+=b,f+="</h3>",f+="</div>",f+=function(e){var t="";t+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',t+='<div class="dialogContentInner dialog-content-centered">',t+='<form style="margin:auto;">',t+='<div class="fldSelectPlaylist selectContainer">';var l=e.length?" autofocus":"";return t+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(v.ZP.translate("LabelPlaylist"),'"').concat(l,"></select>"),t+="</div>",t+='<div class="newPlaylistInfo">',t+='<div class="inputContainer">',l=e.length?"":" autofocus",t+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(v.ZP.translate("LabelName"),'"').concat(l," />"),t+="</div>",t+="</div>",t+='<div class="formDialogFooter">',t+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(v.ZP.translate("Add"),"</button>"),t+="</div>",t+='<input type="hidden" class="fldSelectedItemIds" />',t+="</form>",(t+="</div>")+"</div>"}(l),a.innerHTML=f,function(e,t,l){if(e.querySelector("#selectPlaylistToAddTo").addEventListener("change",(function(){this.value?(e.querySelector(".newPlaylistInfo").classList.add("hide"),e.querySelector("#txtNewPlaylistName").removeAttribute("required")):(e.querySelector(".newPlaylistInfo").classList.remove("hide"),e.querySelector("#txtNewPlaylistName").setAttribute("required","required"))})),e.querySelector("form").addEventListener("submit",h),e.querySelector(".fldSelectedItemIds",e).value=l.join(","),l.length)e.querySelector(".fldSelectPlaylist").classList.remove("hide"),function(e,t){var l,r=t.querySelector("#selectPlaylistToAddTo");s.ZP.hide(),t.querySelector(".newPlaylistInfo").classList.add("hide");var a=p.Z.getApiClient(n),i=null===(l=d.E.firstOfType(m.z.SyncPlay))||void 0===l?void 0:l.instance;a.getItems(a.getCurrentUserId(),{Recursive:!0,IncludeItemTypes:"Playlist",SortBy:"SortName",EnableTotalRecordCount:!1}).then((function(t){var l="";(!1!==e.enableAddToPlayQueue&&c.O.isPlaying()||null!=i&&i.Manager.isSyncPlayEnabled())&&(l+='<option value="queue">'.concat(v.ZP.translate("AddToPlayQueue"),"</option>")),l+='<option value="">'.concat(v.ZP.translate("OptionNew"),"</option>"),l+=t.Items.map((function(e){return'<option value="'.concat(e.Id,'">').concat(o()(e.Name),"</option>")})),r.innerHTML=l;var n=e.defaultValue;n||(n=y.get("playlisteditor-lastplaylistid")||""),r.value="new"===n?"":n,r.value||(r.value=""),g(r),s.ZP.hide()}))}(t,e);else{e.querySelector(".fldSelectPlaylist").classList.add("hide");var r=e.querySelector("#selectPlaylistToAddTo");r.innerHTML="",r.value="",g(r)}}(a,t,l),a.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(a)})),u.Z.tv&&I(a.querySelector(".formDialogContent"),!1,!0),i.default.open(a).then((function(){return u.Z.tv&&I(a.querySelector(".formDialogContent"),!1,!1),a.submitted?Promise.resolve():Promise.reject()}))}));t.default=q}}]);