"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[49092,4330],{63001:function(e,t,l){var i=l(46782),n=l(34789),a=l(62882),r=(l(69177),Object.create(HTMLSelectElement.prototype));function o(){return!(!n.A.edgeUwp&&!n.A.xboxOne&&(n.A.tizen||n.A.orsay||n.A.web0s||!n.A.tv&&i.A.tv))}function s(e){var t=c(e),l=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:l}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function y(e){e.button||o()||(e.preventDefault(),s(this))}function v(e){switch(e.keyCode){case 13:return void(o()||(e.preventDefault(),s(this)));case 37:case 38:case 39:case 40:return void(i.A.tv&&e.preventDefault())}}var f=0;r.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),i.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",y),this.addEventListener("keydown",v),this.addEventListener("focus",d),this.addEventListener("blur",u)},r.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,l=this.ownerDocument.createElement("label");l.innerText=this.getAttribute("label")||"",l.classList.add("selectLabel"),l.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(l,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},r.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:r,extends:"select"})},4330:function(e,t,l){l.r(t),l.d(t,{PlaylistEditor:function(){return T}});var i,n=l(11444),a=l(77612),r=l(32215),o=l(4748),s=l(42247),c=l(22696),d=l.n(c),u=l(50764),y=l(47629),v=l(5898),f=l(82885),p=l(38783),h=l(75384),m=l(44305),b=l(79754),P=l(8566),A=l(46782),g=l(21069),I=l(38829),S=l(70267),w=l(86191),C=(l(10353),l(98959),l(15453),l(63001),function(){return C=Object.assign||function(e){for(var t,l=1,i=arguments.length;l<i;l++)for(var n in t=arguments[l])Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e},C.apply(this,arguments)});function E(e){var t,l=y.Ay.parentWithClass(this,"dialog");if(l){var n=null===(t=l.querySelector("#selectPlaylistToAddTo"))||void 0===t?void 0:t.value;P.Ay.show(),n?(f.currentSettings.set("playlisteditor-lastplaylistid",n),function(e,t){var l,n=w.A.getApiClient(i),a=(0,h.C)(n),r=(null===(l=e.querySelector(".fldSelectedItemIds"))||void 0===l?void 0:l.value)||"";return"queue"===t?(g.f.queue({serverId:i,ids:r.split(",")}).catch((function(e){console.error("[PlaylistEditor] failed to add to queue",e)})),e.submitted=!0,b.default.close(e),Promise.resolve()):(0,o.C)(a).addItemToPlaylist({playlistId:t,ids:r.split(","),userId:n.getCurrentUserId()}).then((function(){e.submitted=!0,b.default.close(e)}))}(l,n).catch((function(e){console.error("[PlaylistEditor] Failed to add to playlist %s",n,e),(0,u.A)(v.Ay.translate("PlaylistError.AddFailed"))})).finally(P.Ay.hide)):l.playlistId?function(e){var t,l;if(!e.playlistId)return Promise.reject(new Error("Missing playlist ID"));var n=null===(t=e.querySelector("#txtNewPlaylistName"))||void 0===t?void 0:t.value;if((0,m.z3)(n))return Promise.reject(new Error("Playlist name should not be blank"));var a=w.A.getApiClient(i),r=(0,h.C)(a);return(0,o.C)(r).updatePlaylist({playlistId:e.playlistId,updatePlaylistDto:{Name:n,IsPublic:null===(l=e.querySelector("#chkPlaylistPublic"))||void 0===l?void 0:l.checked}}).then((function(){e.submitted=!0,b.default.close(e)}))}(l).catch((function(e){console.error("[PlaylistEditor] Failed to update to playlist %s",l.playlistId,e),(0,u.A)(v.Ay.translate("PlaylistError.UpdateFailed"))})).finally(P.Ay.hide):function(e){var t,l,n,a=null===(t=e.querySelector("#txtNewPlaylistName"))||void 0===t?void 0:t.value;if((0,m.z3)(a))return Promise.reject(new Error("Playlist name should not be blank"));var r=w.A.getApiClient(i),s=(0,h.C)(r),c=(null===(l=e.querySelector(".fldSelectedItemIds"))||void 0===l?void 0:l.value)||void 0;return(0,o.C)(s).createPlaylist({createPlaylistDto:{Name:a,IsPublic:null===(n=e.querySelector("#chkPlaylistPublic"))||void 0===n?void 0:n.checked,Ids:null==c?void 0:c.split(","),UserId:r.getCurrentUserId()}}).then((function(t){var l;e.submitted=!0,b.default.close(e),l=t.data.Id,S.appRouter.showItem(l,i)}))}(l).catch((function(e){console.error("[PlaylistEditor] Failed to create playlist",e),(0,u.A)(v.Ay.translate("PlaylistError.CreateFailed"))})).finally(P.Ay.hide)}else console.error("[PlaylistEditor] Dialog element is missing!");return e.preventDefault(),!1}function q(e){e.dispatchEvent(new CustomEvent("change",{}))}function L(e,t,l){var c,u,m,b,A;null===(c=e.querySelector("#selectPlaylistToAddTo"))||void 0===c||c.addEventListener("change",(function(){var t,l,i,n;this.value?(null===(t=e.querySelector(".newPlaylistInfo"))||void 0===t||t.classList.add("hide"),null===(l=e.querySelector("#txtNewPlaylistName"))||void 0===l||l.removeAttribute("required")):(null===(i=e.querySelector(".newPlaylistInfo"))||void 0===i||i.classList.remove("hide"),null===(n=e.querySelector("#txtNewPlaylistName"))||void 0===n||n.setAttribute("required","required"))})),null===(u=e.querySelector("form"))||void 0===u||u.addEventListener("submit",E);var S=e.querySelector(".fldSelectedItemIds");if(S&&(S.value=l.join(",")),l.length)null===(m=e.querySelector(".fldSelectPlaylist"))||void 0===m||m.classList.remove("hide"),function(e,t){var l,s,c=t.querySelector("#selectPlaylistToAddTo");if(!c)return Promise.reject(new Error("Playlist <select> element is missing"));P.Ay.show(),null===(l=t.querySelector(".newPlaylistInfo"))||void 0===l||l.classList.add("hide");var u=w.A.getApiClient(i),y=(0,h.C)(u),m=null===(s=I.X.firstOfType(p.Q.SyncPlay))||void 0===s?void 0:s.instance;return(0,r.n)(y).getItems({userId:u.getCurrentUserId(),includeItemTypes:[n.D.Playlist],sortBy:[a.B.SortName],recursive:!0}).then((function(e){var t=e.data;return Promise.all((t.Items||[]).map((function(e){var t={item:e,permissions:void 0};return e.Id?(0,o.C)(y).getPlaylistUser({playlistId:e.Id,userId:u.getCurrentUserId()}).then((function(e){var l=e.data;return C(C({},t),{permissions:l})})).catch((function(e){return console.info("[PlaylistEditor] Failed to fetch playlist permissions",e),t})):t})))})).then((function(t){var l="";(!1!==e.enableAddToPlayQueue&&g.f.isPlaying()||(null==m?void 0:m.Manager.isSyncPlayEnabled()))&&(l+='<option value="queue">'.concat(v.Ay.translate("AddToPlayQueue"),"</option>")),l+='<option value="">'.concat(v.Ay.translate("OptionNew"),"</option>"),l+=t.map((function(e){var t=e.item,l=e.permissions;return(null==l?void 0:l.CanEdit)?'<option value="'.concat(t.Id,'">').concat(d()(t.Name),"</option>"):""})),c.innerHTML=l;var i=e.defaultValue;i||(i=f.currentSettings.get("playlisteditor-lastplaylistid")||""),c.value="new"===i?"":i,c.value||(c.value=""),q(c)}))}(t,e).catch((function(e){console.error("[PlaylistEditor] failed to populate playlists",e)})).finally(P.Ay.hide);else if(t.id){null===(b=e.querySelector(".fldSelectPlaylist"))||void 0===b||b.classList.add("hide");var L=y.Ay.parentWithClass(e,"dialog");if(!L)return void console.error("[PlaylistEditor] could not find dialog element");var k=w.A.getApiClient(i),T=(0,h.C)(k);Promise.all([(0,s.P)(T).getItem({itemId:t.id}),(0,o.C)(T).getPlaylist({playlistId:t.id})]).then((function(e){var l=function(e,t){var l="function"==typeof Symbol&&e[Symbol.iterator];if(!l)return e;var i,n,a=l.call(e),r=[];try{for(;(void 0===t||t-- >0)&&!(i=a.next()).done;)r.push(i.value)}catch(e){n={error:e}}finally{try{i&&!i.done&&(l=a.return)&&l.call(a)}finally{if(n)throw n.error}}return r}(e,2),i=l[0].data,n=l[1].data;L.playlistId=t.id;var a=L.querySelector("#txtNewPlaylistName");a&&(a.value=i.Name||"");var r=L.querySelector("#chkPlaylistPublic");r&&(r.checked=!!n.OpenAccess)})).catch((function(e){console.error("[playlistEditor] failed to get playlist details",e)}))}else{null===(A=e.querySelector(".fldSelectPlaylist"))||void 0===A||A.classList.add("hide");var N=e.querySelector("#selectPlaylistToAddTo");N&&(N.innerHTML="",N.value="",q(N))}}function k(e,t,i){e?Promise.resolve().then(l.bind(l,10838)).then((function(l){var n=i?"on":"off";l.centerFocus[n](e,t)})).catch((function(e){console.error("[PlaylistEditor] failed to load scroll helper",e)})):console.error("[PlaylistEditor] cannot focus null element")}var T=function(){function e(){}return e.prototype.show=function(e){var t,l=e.items||[];i=e.serverId;var n={removeOnClose:!0,scrollY:!1,size:A.A.tv?"fullscreen":"small"},a=b.default.createDialog(n);a.classList.add("formDialog");var r="";return r+='<div class="formDialogHeader">',r+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(v.Ay.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),r+='<h3 class="formDialogHeaderTitle">',l.length?r+=v.Ay.translate("HeaderAddToPlaylist"):e.id?r+=v.Ay.translate("HeaderEditPlaylist"):r+=v.Ay.translate("HeaderNewPlaylist"),r+="</h3>",r+="</div>",r+=function(e,t){var l="";l+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',l+='<div class="dialogContentInner dialog-content-centered">',l+='<form style="margin:auto;">',l+='<div class="fldSelectPlaylist selectContainer">';var i=e.length?" autofocus":"";return l+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(v.Ay.translate("LabelPlaylist"),'"').concat(i,"></select>"),l+="</div>",l+='<div class="newPlaylistInfo">',l+='<div class="inputContainer">',i=e.length?"":" autofocus",l+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(v.Ay.translate("LabelName"),'"').concat(i," />"),l+="</div>",l+='\n    <div class="checkboxContainer checkboxContainer-withDescription">\n        <label>\n            <input type="checkbox" is="emby-checkbox" id="chkPlaylistPublic" />\n            <span>'.concat(v.Ay.translate("PlaylistPublic"),'</span>\n        </label>\n        <div class="fieldDescription checkboxFieldDescription">\n            ').concat(v.Ay.translate("PlaylistPublicDescription"),"\n        </div>\n    </div>"),l+="</div>",l+='<div class="formDialogFooter">',l+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(t.id?v.Ay.translate("Save"):v.Ay.translate("Add"),"</button>"),l+="</div>",l+='<input type="hidden" class="fldSelectedItemIds" />',l+="</form>",(l+="</div>")+"</div>"}(l,e),a.innerHTML=r,L(a,e,l),null===(t=a.querySelector(".btnCancel"))||void 0===t||t.addEventListener("click",(function(){b.default.close(a)})),A.A.tv&&k(a.querySelector(".formDialogContent"),!1,!0),b.default.open(a).then((function(){return A.A.tv&&k(a.querySelector(".formDialogContent"),!1,!1),a.submitted?Promise.resolve():Promise.reject(new Error)}))},e}();t.default=T}}]);