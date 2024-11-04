"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4330],{4330:function(e,t,l){l.r(t),l.d(t,{PlaylistEditor:function(){return T}});var i,a=l(11444),r=l(77612),n=l(32215),o=l(4748),s=l(42247),d=l(22696),c=l.n(d),u=l(50764),y=l(47629),v=l(5898),f=l(82885),p=l(38783),m=l(75384),P=l(44305),h=l(79754),b=l(8566),A=l(46782),g=l(47750),I=l(38829),S=l(70267),C=l(86191),q=(l(10353),l(98959),l(15453),l(63001),function(){return q=Object.assign||function(e){for(var t,l=1,i=arguments.length;l<i;l++)for(var a in t=arguments[l])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},q.apply(this,arguments)});function w(e){var t,l=y.Ay.parentWithClass(this,"dialog");if(l){var a=null===(t=l.querySelector("#selectPlaylistToAddTo"))||void 0===t?void 0:t.value;b.Ay.show(),a?(f.currentSettings.set("playlisteditor-lastplaylistid",a),function(e,t){var l,a=C.A.getApiClient(i),r=(0,m.C)(a),n=(null===(l=e.querySelector(".fldSelectedItemIds"))||void 0===l?void 0:l.value)||"";return"queue"===t?(g.f.queue({serverId:i,ids:n.split(",")}).catch((function(e){console.error("[PlaylistEditor] failed to add to queue",e)})),e.submitted=!0,h.default.close(e),Promise.resolve()):(0,o.C)(r).addItemToPlaylist({playlistId:t,ids:n.split(","),userId:a.getCurrentUserId()}).then((function(){e.submitted=!0,h.default.close(e)}))}(l,a).catch((function(e){console.error("[PlaylistEditor] Failed to add to playlist %s",a,e),(0,u.A)(v.Ay.translate("PlaylistError.AddFailed"))})).finally(b.Ay.hide)):l.playlistId?function(e){var t,l;if(!e.playlistId)return Promise.reject(new Error("Missing playlist ID"));var a=null===(t=e.querySelector("#txtNewPlaylistName"))||void 0===t?void 0:t.value;if((0,P.z3)(a))return Promise.reject(new Error("Playlist name should not be blank"));var r=C.A.getApiClient(i),n=(0,m.C)(r);return(0,o.C)(n).updatePlaylist({playlistId:e.playlistId,updatePlaylistDto:{Name:a,IsPublic:null===(l=e.querySelector("#chkPlaylistPublic"))||void 0===l?void 0:l.checked}}).then((function(){e.submitted=!0,h.default.close(e)}))}(l).catch((function(e){console.error("[PlaylistEditor] Failed to update to playlist %s",l.playlistId,e),(0,u.A)(v.Ay.translate("PlaylistError.UpdateFailed"))})).finally(b.Ay.hide):function(e){var t,l,a,r=null===(t=e.querySelector("#txtNewPlaylistName"))||void 0===t?void 0:t.value;if((0,P.z3)(r))return Promise.reject(new Error("Playlist name should not be blank"));var n=C.A.getApiClient(i),s=(0,m.C)(n),d=(null===(l=e.querySelector(".fldSelectedItemIds"))||void 0===l?void 0:l.value)||void 0;return(0,o.C)(s).createPlaylist({createPlaylistDto:{Name:r,IsPublic:null===(a=e.querySelector("#chkPlaylistPublic"))||void 0===a?void 0:a.checked,Ids:null==d?void 0:d.split(","),UserId:n.getCurrentUserId()}}).then((function(t){var l;e.submitted=!0,h.default.close(e),l=t.data.Id,S.appRouter.showItem(l,i)}))}(l).catch((function(e){console.error("[PlaylistEditor] Failed to create playlist",e),(0,u.A)(v.Ay.translate("PlaylistError.CreateFailed"))})).finally(b.Ay.hide)}else console.error("[PlaylistEditor] Dialog element is missing!");return e.preventDefault(),!1}function E(e){e.dispatchEvent(new CustomEvent("change",{}))}function k(e,t,l){var d,u,P,h,A;null===(d=e.querySelector("#selectPlaylistToAddTo"))||void 0===d||d.addEventListener("change",(function(){var t,l,i,a;this.value?(null===(t=e.querySelector(".newPlaylistInfo"))||void 0===t||t.classList.add("hide"),null===(l=e.querySelector("#txtNewPlaylistName"))||void 0===l||l.removeAttribute("required")):(null===(i=e.querySelector(".newPlaylistInfo"))||void 0===i||i.classList.remove("hide"),null===(a=e.querySelector("#txtNewPlaylistName"))||void 0===a||a.setAttribute("required","required"))})),null===(u=e.querySelector("form"))||void 0===u||u.addEventListener("submit",w);var S=e.querySelector(".fldSelectedItemIds");if(S&&(S.value=l.join(",")),l.length)null===(P=e.querySelector(".fldSelectPlaylist"))||void 0===P||P.classList.remove("hide"),function(e,t){var l,s,d=t.querySelector("#selectPlaylistToAddTo");if(!d)return Promise.reject(new Error("Playlist <select> element is missing"));b.Ay.show(),null===(l=t.querySelector(".newPlaylistInfo"))||void 0===l||l.classList.add("hide");var u=C.A.getApiClient(i),y=(0,m.C)(u),P=null===(s=I.X.firstOfType(p.Q.SyncPlay))||void 0===s?void 0:s.instance;return(0,n.n)(y).getItems({userId:u.getCurrentUserId(),includeItemTypes:[a.D.Playlist],sortBy:[r.B.SortName],recursive:!0}).then((function(e){var t=e.data;return Promise.all((t.Items||[]).map((function(e){var t={item:e,permissions:void 0};return e.Id?(0,o.C)(y).getPlaylistUser({playlistId:e.Id,userId:u.getCurrentUserId()}).then((function(e){var l=e.data;return q(q({},t),{permissions:l})})).catch((function(e){return console.info("[PlaylistEditor] Failed to fetch playlist permissions",e),t})):t})))})).then((function(t){var l="";(!1!==e.enableAddToPlayQueue&&g.f.isPlaying()||(null==P?void 0:P.Manager.isSyncPlayEnabled()))&&(l+='<option value="queue">'.concat(v.Ay.translate("AddToPlayQueue"),"</option>")),l+='<option value="">'.concat(v.Ay.translate("OptionNew"),"</option>"),l+=t.map((function(e){var t=e.item,l=e.permissions;return(null==l?void 0:l.CanEdit)?'<option value="'.concat(t.Id,'">').concat(c()(t.Name),"</option>"):""})),d.innerHTML=l;var i=e.defaultValue;i||(i=f.currentSettings.get("playlisteditor-lastplaylistid")||""),d.value="new"===i?"":i,d.value||(d.value=""),E(d)}))}(t,e).catch((function(e){console.error("[PlaylistEditor] failed to populate playlists",e)})).finally(b.Ay.hide);else if(t.id){null===(h=e.querySelector(".fldSelectPlaylist"))||void 0===h||h.classList.add("hide");var k=y.Ay.parentWithClass(e,"dialog");if(!k)return void console.error("[PlaylistEditor] could not find dialog element");var N=C.A.getApiClient(i),T=(0,m.C)(N);Promise.all([(0,s.P)(T).getItem({itemId:t.id}),(0,o.C)(T).getPlaylist({playlistId:t.id})]).then((function(e){var l=function(e,t){var l="function"==typeof Symbol&&e[Symbol.iterator];if(!l)return e;var i,a,r=l.call(e),n=[];try{for(;(void 0===t||t-- >0)&&!(i=r.next()).done;)n.push(i.value)}catch(e){a={error:e}}finally{try{i&&!i.done&&(l=r.return)&&l.call(r)}finally{if(a)throw a.error}}return n}(e,2),i=l[0].data,a=l[1].data;k.playlistId=t.id;var r=k.querySelector("#txtNewPlaylistName");r&&(r.value=i.Name||"");var n=k.querySelector("#chkPlaylistPublic");n&&(n.checked=!!a.OpenAccess)})).catch((function(e){console.error("[playlistEditor] failed to get playlist details",e)}))}else{null===(A=e.querySelector(".fldSelectPlaylist"))||void 0===A||A.classList.add("hide");var D=e.querySelector("#selectPlaylistToAddTo");D&&(D.innerHTML="",D.value="",E(D))}}function N(e,t,i){e?Promise.resolve().then(l.bind(l,10838)).then((function(l){var a=i?"on":"off";l.centerFocus[a](e,t)})).catch((function(e){console.error("[PlaylistEditor] failed to load scroll helper",e)})):console.error("[PlaylistEditor] cannot focus null element")}var T=function(){function e(){}return e.prototype.show=function(e){var t,l=e.items||[];i=e.serverId;var a={removeOnClose:!0,scrollY:!1,size:A.A.tv?"fullscreen":"small"},r=h.default.createDialog(a);r.classList.add("formDialog");var n="";return n+='<div class="formDialogHeader">',n+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(v.Ay.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),n+='<h3 class="formDialogHeaderTitle">',l.length?n+=v.Ay.translate("HeaderAddToPlaylist"):e.id?n+=v.Ay.translate("HeaderEditPlaylist"):n+=v.Ay.translate("HeaderNewPlaylist"),n+="</h3>",n+="</div>",n+=function(e,t){var l="";l+='<div class="formDialogContent smoothScrollY" style="padding-top:2em;">',l+='<div class="dialogContentInner dialog-content-centered">',l+='<form style="margin:auto;">',l+='<div class="fldSelectPlaylist selectContainer">';var i=e.length?" autofocus":"";return l+='<select is="emby-select" id="selectPlaylistToAddTo" label="'.concat(v.Ay.translate("LabelPlaylist"),'"').concat(i,"></select>"),l+="</div>",l+='<div class="newPlaylistInfo">',l+='<div class="inputContainer">',i=e.length?"":" autofocus",l+='<input is="emby-input" type="text" id="txtNewPlaylistName" required="required" label="'.concat(v.Ay.translate("LabelName"),'"').concat(i," />"),l+="</div>",l+='\n    <div class="checkboxContainer checkboxContainer-withDescription">\n        <label>\n            <input type="checkbox" is="emby-checkbox" id="chkPlaylistPublic" />\n            <span>'.concat(v.Ay.translate("PlaylistPublic"),'</span>\n        </label>\n        <div class="fieldDescription checkboxFieldDescription">\n            ').concat(v.Ay.translate("PlaylistPublicDescription"),"\n        </div>\n    </div>"),l+="</div>",l+='<div class="formDialogFooter">',l+='<button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit">'.concat(t.id?v.Ay.translate("Save"):v.Ay.translate("Add"),"</button>"),l+="</div>",l+='<input type="hidden" class="fldSelectedItemIds" />',l+="</form>",(l+="</div>")+"</div>"}(l,e),r.innerHTML=n,k(r,e,l),null===(t=r.querySelector(".btnCancel"))||void 0===t||t.addEventListener("click",(function(){h.default.close(r)})),A.A.tv&&N(r.querySelector(".formDialogContent"),!1,!0),h.default.open(r).then((function(){return A.A.tv&&N(r.querySelector(".formDialogContent"),!1,!1),r.submitted?Promise.resolve():Promise.reject(new Error)}))},e}();t.default=T}}]);