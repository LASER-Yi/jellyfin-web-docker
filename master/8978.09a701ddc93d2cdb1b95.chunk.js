"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8978],{78978:function(t,e,a){a.r(e),a.d(e,{default:function(){return S},showEditor:function(){return Z}}),a(5769),a(48410),a(32081),a(98010),a(63238),a(61013),a(61418),a(17460),a(14078),a(99785);var r=a(65009),i=a.n(r),n=(a(72326),a(51161)),o=a(48102),l=a(72365),s=a(31214),d=a(94994),c=(a(38228),a(664),a(61414),a(6626),a(7975),a(15359),a(29016)),u=a(3137);function b(t,e){for(var a=0;a<e.length;a++){var r=e[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function f(t,e,a){return e&&b(t.prototype,e),a&&b(t,a),Object.defineProperty(t,"prototype",{writable:!1}),t}function h(){if(I)return!1;I=!0,n.ZP.show();var t=l.ZP.parentWithClass(this,"dlg-libraryeditor"),e=s.ZP.getLibraryOptions(t.querySelector(".libraryOptions"));return e=Object.assign(k.library.LibraryOptions||{},e),ApiClient.updateVirtualFolderOptions(k.library.ItemId,e).then((function(){w=!0,I=!1,n.ZP.hide(),o.default.close(t)}),(function(){I=!1,n.ZP.hide()})),!1}function y(t){var e=l.ZP.parentWithClass(t.target,"listItem");if(e){var a=parseInt(e.getAttribute("data-index")),r=(k.library.LibraryOptions||{}).PathInfos||[],i=null==a?{}:r[a]||{},n=i.Path||(null==a?null:k.library.Locations[a]),o=l.ZP.parentWithClass(t.target,"btnRemovePath");if(o)return void function(t,e){var a=t,r=k.library;(0,u.Z)({title:d.ZP.translate("HeaderRemoveMediaLocation"),text:d.ZP.translate("MessageConfirmRemoveMediaLocation"),confirmText:d.ZP.translate("Delete"),primary:"delete"}).then((function(){var t=k.refresh;ApiClient.removeMediaPath(r.Name,e,t).then((function(){w=!0,p(l.ZP.parentWithClass(a,"dlg-libraryeditor"))}),(function(){(0,c.Z)(d.ZP.translate("ErrorDefault"))}))}))}(o,n);g(l.ZP.parentWithClass(e,"dlg-libraryeditor"),n,i.NetworkPath)}}function m(t,e){var a="";return a+='<div class="listItem listItem-border lnkPath" data-index="'.concat(e,'" style="padding-left:.5em;">'),a+='<div class="'.concat(t.NetworkPath?"listItemBody two-line":"listItemBody",'">'),a+='<h3 class="listItemBodyText">',a+=i()(t.Path),a+="</h3>",t.NetworkPath&&(a+='<div class="listItemBodyText secondary">'.concat(i()(t.NetworkPath),"</div>")),a+="</div>",(a+='<button type="button" is="paper-icon-button-light" class="listItemButton btnRemovePath" data-index="'.concat(e,'"><span class="material-icons remove_circle" aria-hidden="true"></span></button>'))+"</div>"}function p(t){ApiClient.getVirtualFolders().then((function(e){var a=e.filter((function(t){return t.Name===k.library.Name}))[0];a&&(k.library=a,v(t,k))}))}function v(t,e){var a=(e.library.LibraryOptions||{}).PathInfos||[];a.length||(a=e.library.Locations.map((function(t){return{Path:t}}))),"boxsets"===e.library.CollectionType?t.querySelector(".folders").classList.add("hide"):t.querySelector(".folders").classList.remove("hide"),t.querySelector(".folderList").innerHTML=a.map(m).join("")}function P(){g(l.ZP.parentWithClass(this,"dlg-libraryeditor"))}function g(t,e,r){Promise.resolve().then(a.bind(a,19403)).then((function(a){var i=new(0,a.default);i.show({enableNetworkSharePath:!0,pathReadOnly:null!=e,path:e,networkSharePath:r,callback:function(a,r){a&&(e?function(t,e,a){var r=k.library;ApiClient.updateMediaPath(r.Name,{Path:e,NetworkPath:a}).then((function(){w=!0,p(t)}),(function(){(0,c.Z)(d.ZP.translate("ErrorAddingMediaPathToVirtualFolder"))}))}(t,e,r):function(t,e,a){var r=k.library,i=k.refresh;ApiClient.addMediaPath(r.Name,e,a,i).then((function(){w=!0,p(t)}),(function(){(0,c.Z)(d.ZP.translate("ErrorAddingMediaPathToVirtualFolder"))}))}(t,a,r)),i.close()}})}))}function L(){C.resolveWith(null,[w])}var C,k,Z=f((function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t);var a=jQuery.Deferred();k=e,C=a,w=!1;var r=o.default.createDialog({size:"small",modal:!1,removeOnClose:!0,scrollY:!1});return r.classList.add("dlg-libraryeditor"),r.classList.add("ui-body-a"),r.classList.add("background-theme-a"),r.classList.add("formDialog"),r.innerHTML=d.ZP.translateHtml('<div class="formDialogHeader"> <button type="button" is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"></h3> </div> <div class="formDialogContent scrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <div class="infoBanner" style="margin-bottom:1.8em"> ${ChangingMetadataImageSettingsNewContent} </div> <div class="folders hide"> <div style="display:flex;align-items:center"> <h1 style="margin:.5em 0">${Folders}</h1> <button is="emby-button" type="button" class="fab btnAddFolder submit" style="margin-left:1em" title="${Add}"> <span class="material-icons add" aria-hidden="true"></span> </button> </div> <div class="paperList folderList" style="margin-bottom:2em"></div> </div> <div class="libraryOptions"></div> </div> </div> <div class="formDialogFooter"> <button is="emby-button" type="button" class="raised btnSubmit button-submit block formDialogFooterItem"> <span>${ButtonOk}</span> </button> </div> '),r.querySelector(".formDialogHeaderTitle").innerText=e.library.Name,function(t,e){v(t,e),t.querySelector(".btnAddFolder").addEventListener("click",P),t.querySelector(".folderList").addEventListener("click",y),t.querySelector(".btnSubmit").addEventListener("click",h),s.ZP.embed(t.querySelector(".libraryOptions"),e.library.CollectionType,e.library.LibraryOptions)}(r,e),r.addEventListener("close",L),o.default.open(r),r.querySelector(".btnCancel").addEventListener("click",(function(){o.default.close(r)})),p(r),a.promise()})),w=!1,I=!1,S=Z}}]);