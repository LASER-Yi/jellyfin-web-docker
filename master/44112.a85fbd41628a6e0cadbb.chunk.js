"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[44112],{44112:function(e,a,t){t.r(a),t.d(a,{default:function(){return B},show:function(){return A}}),t(61013),t(23938),t(76056),t(63238),t(61418);var n,i,r,o,l,s,c=t(72365),d=t(28540),u=t(84881),v=t(93355),g=t(98301),m=t(57366),p=t(30325),b=t(54517),h=t(94994),y=(t(12291),t(61414),t(38228),t(18613)),f=!m.Z.slow&&!m.Z.edge,P=!1,k=m.Z.slow?6:30,C=0,w="Primary";function I(e){var a=arguments.length>1&&void 0!==arguments[1]&&arguments[1],t={};return!a&&e.querySelector("#chkShowParentImages").checked&&s?t.itemId=s:t.itemId=n,t}function x(e,a){d.ZP.show();var t=I(e);t.type=w,t.startIndex=C,t.limit=k,t.IncludeAllLanguages=e.querySelector("#chkAllLanguages").checked;var n=l||"";n&&(t.ProviderName=n),a.getAvailableRemoteImages(t).then((function(i){!function(e,a,t,n,i,r){e.querySelector(".availableImagesPaging").innerHTML=function(e,a,t){var n="",i=Math.min(e+a,t),r=t>a;n+='<div class="listPaging">',n+='<span style="margin-right: 10px;">';var o=t?e+1:0;return n+=h.ZP.translate("ListPaging",o,i,t),n+="</span>",r&&(n+='<div data-role="controlgroup" data-type="horizontal" style="display:inline-block;">',n+='<button is="paper-icon-button-light" title="'.concat(h.ZP.translate("Previous"),'" class="btnPreviousPage autoSize" ').concat(e?"":"disabled",'><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),n+='<button is="paper-icon-button-light" title="'.concat(h.ZP.translate("Next"),'" class="btnNextPage autoSize" ').concat(e+a>=t?"disabled":"",'><span class="material-icons arrow_forward" aria-hidden="true"></span></button>'),n+="</div>"),n+"</div>"}(i,r,t.TotalRecordCount);for(var o="",l=0,s=t.Images.length;l<s;l++)o+=S(t.Images[l],n);var c=e.querySelector(".availableImagesList");c.innerHTML=o,g.default.lazyChildren(c);var d=e.querySelector(".btnNextPage"),u=e.querySelector(".btnPreviousPage");d&&d.addEventListener("click",(function(){C+=k,x(e,a)})),u&&u.addEventListener("click",(function(){C-=k,x(e,a)}))}(e,a,i,w,t.startIndex,t.limit),e.querySelector("#selectBrowsableImageType").value=w;var r=i.Providers.map((function(e){return'<option value="'+e+'">'+e+"</option>"})),o=e.querySelector("#selectImageProvider");o.innerHTML='<option value="">'+h.ZP.translate("All")+"</option>"+r,o.value=n,d.ZP.hide()}))}function L(e,a,t,n,i){var r=I(e,!0);r.Type=n,r.ImageUrl=t,r.ProviderName=i,d.ZP.show(),a.downloadRemoteImage(r).then((function(){P=!0;var a=c.ZP.parentWithClass(e,"dialog");v.default.close(a)}))}function S(e,a){var t,n=p.Z.tv?"button":"div",r=!p.Z.tv,o="",l="card scalableCard imageEditorCard";return l+=" "+(t="Backdrop"===a||"Art"===a||"Thumb"===a||"Logo"===a?"backdrop":"Banner"===a?"banner":"Disc"===a?"square":"Episode"===i?"backdrop":"MusicAlbum"===i||"MusicArtist"===i?"square":"portrait")+"Card "+t+"Card-scalable","button"===n?(l+=" btnImageCard",p.Z.tv&&(l+=" show-focus",f&&(l+=" show-animation")),o+='<button type="button" class="'+l+'"'):o+='<div class="'+l+'"',o+=' data-imageprovider="'+e.ProviderName+'" data-imageurl="'+e.Url+'" data-imagetype="'+e.Type+'"',o+=">",o+='<div class="cardBox visualCardBox">',o+='<div class="cardScalable visualCardBox-cardScalable" style="background-color:transparent;">',o+='<div class="cardPadder-'+t+'"></div>',o+='<div class="cardContent">',p.Z.tv||!u.M.supports("externallinks")?o+='<div class="cardImageContainer lazy" data-src="'+e.Url+'" style="background-position:center center;background-size:contain;"></div>':o+='<a is="emby-linkbutton" target="_blank" href="'+e.Url+'" class="button-link cardImageContainer lazy" data-src="'+e.Url+'" style="background-position:center center;background-size:contain"></a>',o+="</div>",o+="</div>",o+='<div class="cardFooter visualCardBox-cardFooter">',o+='<div class="cardText cardTextCentered">'+e.ProviderName+"</div>",(e.Width||e.Height||e.Language)&&(o+='<div class="cardText cardText-secondary cardTextCentered">',e.Width&&e.Height?(o+=e.Width+" x "+e.Height,e.Language&&(o+=" • "+e.Language)):e.Language&&(o+=e.Language),o+="</div>"),null!=e.CommunityRating&&(o+='<div class="cardText cardText-secondary cardTextCentered">',"Likes"===e.RatingType?o+=e.CommunityRating+(1===e.CommunityRating?" like":" likes"):e.CommunityRating?(o+=e.CommunityRating.toFixed(1),e.VoteCount&&(o+=" • "+e.VoteCount+(1===e.VoteCount?" vote":" votes"))):o+="Unrated",o+="</div>"),r&&(o+='<div class="cardText cardTextCentered">',o+='<button is="paper-icon-button-light" class="btnDownloadRemoteImage autoSize" raised" title="'.concat(h.ZP.translate("Download"),'"><span class="material-icons cloud_download" aria-hidden="true"></span></button>'),o+="</div>"),o+="</div>",(o+="</div>")+"</"+n+">"}function T(e,a){C=0,x(e,a)}function Z(){p.Z.tv&&b.default.centerFocus.off(this,!1),d.ZP.hide(),P?r():o()}function A(e,a,t,u,g){return new Promise((function(m,f){r=m,o=f,P=!1,C=0,w=u||"Primary",l=null,s=g,function(e,a,t){d.ZP.show();var r=y.Z.getApiClient(a);n=e,i=t;var o={removeOnClose:!0};p.Z.tv?o.size="fullscreen":o.size="small";var u=v.default.createDialog(o);u.innerHTML=h.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${Search} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner"> <div class="flex align-items-center justify-content-center flex-wrap-wrap" style="margin:2em 0"> <div style="margin:0"> <div class="selectContainer"> <select id="selectImageProvider" name="selectImageProvider" is="emby-select" label="${LabelSource}"> <option value="">${All}</option> </select> </div> </div> <div style="margin-left:1em"> <div class="selectContainer"> <select id="selectBrowsableImageType" name="selectBrowsableImageType" is="emby-select" label="${LabelType}"> <option value="Primary">${Primary}</option> <option value="Art">${Art}</option> <option value="Backdrop">${Backdrop}</option> <option value="Banner">${Banner}</option> <option value="Box">${Box}</option> <option value="BoxRear">${BoxRear}</option> <option value="Disc">${Disc}</option> <option value="Logo">${Logo}</option> <option value="Menu">${Menu}</option> <option value="Thumb">${Thumb}</option> </select> </div> </div> <div class="availableImagesPaging" style="margin-left:1em"></div> <label style="margin:0 0 0 1em;width:auto"> <input id="chkAllLanguages" type="checkbox" is="emby-checkbox"/> <span>${AllLanguages}</span> </label> <label id="lblShowParentImages" class="hide" style="margin:0 0 0 1em;width:auto"> <input id="chkShowParentImages" type="checkbox" is="emby-checkbox"/> <span>${ShowParentImages}</span> </label> </div> <div class="availableImagesList vertical-wrap centered"></div> </div> </div> ',"core"),p.Z.tv&&b.default.centerFocus.on(u,!1),s&&u.querySelector("#lblShowParentImages").classList.remove("hide"),u.addEventListener("close",Z),v.default.open(u);var g=u.querySelector(".formDialogContent");!function(e,a){e.querySelector("#selectBrowsableImageType").addEventListener("change",(function(){w=this.value,l=null,T(e,a)})),e.querySelector("#selectImageProvider").addEventListener("change",(function(){l=this.value,T(e,a)})),e.querySelector("#chkAllLanguages").addEventListener("change",(function(){T(e,a)})),e.querySelector("#chkShowParentImages").addEventListener("change",(function(){T(e,a)})),e.addEventListener("click",(function(t){var n=c.ZP.parentWithClass(t.target,"btnDownloadRemoteImage");if(n){var i=c.ZP.parentWithClass(n,"card");L(e,a,i.getAttribute("data-imageurl"),i.getAttribute("data-imagetype"),i.getAttribute("data-imageprovider"))}else{var r=c.ZP.parentWithClass(t.target,"btnImageCard");r&&L(e,a,r.getAttribute("data-imageurl"),r.getAttribute("data-imagetype"),r.getAttribute("data-imageprovider"))}}))}(g,r),u.querySelector(".btnCancel").addEventListener("click",(function(){v.default.close(u)})),x(g,r)}(e,a,t)}))}var B={show:A}}}]);