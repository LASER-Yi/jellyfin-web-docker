(self.webpackChunk=self.webpackChunk||[]).push([[6970],{96970:function(t,e,i){"use strict";i.r(e),i.d(e,{showEditor:function(){return w}}),i(5769),i(61013),i(23938),i(52077),i(911),i(98010),i(63238),i(61418),i(17460),i(14078),i(32081),i(19068),i(87211),i(25901),i(92189),i(95163),i(99785),i(91047);var n=i(6594),r=i(1115),o=i(83094),a=(i(71848),i(28046)),l=i(53754),s=(i(78066),i(21865),i(30983),i(50447),i(32819),i(17734),i(16589),i(93462),i(38440)),c=i(61642),d=i(30058),u=i.n(d);function p(t){return p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},p(t)}function f(t,e){for(var i=0;i<e.length;i++){var n=e[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,r=function(t,e){if("object"!==p(t)||null===t)return t;var i=t[Symbol.toPrimitive];if(void 0!==i){var n=i.call(t,e);if("object"!==p(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key,"string"),"symbol"===p(r)?r:String(r)),n)}var r}function b(t,e,i){return e&&f(t.prototype,e),i&&f(t,i),Object.defineProperty(t,"prototype",{writable:!1}),t}function y(){if(T)return!1;if(0==S.length)return(0,c.Z)({text:l.ZP.translate("PleaseAddAtLeastOneFolder"),type:"error"}),!1;T=!0,n.ZP.show();var t=o.ZP.parentWithClass(this,"dlg-librarycreator"),e=$("#txtValue",t).val(),i=$("#selectCollectionType",t).val();"mixed"==i&&(i=null);var d=a.ZP.getLibraryOptions(t.querySelector(".libraryOptions"));return d.PathInfos=S,ApiClient.addVirtualFolder(e,i,C.refresh,d).then((function(){k=!0,T=!1,n.ZP.hide(),r.default.close(t)}),(function(){(0,s.Z)(l.ZP.translate("ErrorAddingMediaPathToVirtualFolder")),T=!1,n.ZP.hide()})),!1}function v(){var t=o.ZP.parentWithClass(this,"dlg-librarycreator");i.e(3688).then(i.bind(i,63688)).then((function(e){var i=new(0,e.default);i.show({enableNetworkSharePath:!0,callback:function(e,n){e&&function(t,e,i){var n=e.toLowerCase();if(!S.filter((function(t){return t.Path.toLowerCase()==n})).length){var r={Path:e};i&&(r.NetworkPath=i),S.push(r),h(t)}}(t,e,n),i.close()}})}))}function m(t,e){var i="";return i+='<div class="listItem listItem-border lnkPath" style="padding-left:.5em;">',i+='<div class="'.concat(t.NetworkPath?"listItemBody two-line":"listItemBody",'">'),i+='<div class="listItemBodyText">'.concat(t.Path,"</div>"),t.NetworkPath&&(i+='<div class="listItemBodyText secondary">'.concat(t.NetworkPath,"</div>")),i+="</div>",(i+='<button type="button" is="paper-icon-button-light"" class="listItemButton btnRemovePath" data-index="'.concat(e,'"><span class="material-icons remove_circle"></span></button>'))+"</div>"}function h(t){var e=S.map(m).join(""),i=t.querySelector(".folderList");i.innerHTML=e,e?i.classList.remove("hide"):i.classList.add("hide")}function g(t){var e=o.ZP.parentWithClass(t.target,"btnRemovePath"),i=parseInt(e.getAttribute("data-index")),n=S[i].Path.toLowerCase();S=S.filter((function(t){return t.Path.toLowerCase()!=n})),h(o.ZP.parentWithClass(e,"dlg-librarycreator"))}function P(){L(k)}var L,C,w=b((function t(e){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),new Promise((function(t){C=e,L=t,k=!1;var i,n,o=r.default.createDialog({size:"small",modal:!1,removeOnClose:!0,scrollY:!1});o.classList.add("ui-body-a"),o.classList.add("background-theme-a"),o.classList.add("dlg-librarycreator"),o.classList.add("formDialog"),o.innerHTML=l.ZP.translateHtml(u()),i=o,n=e.collectionTypeOptions,$("#selectCollectionType",i).html(function(t){return t.map((function(t){return'<option value="'.concat(t.value,'">').concat(t.name,"</option>")})).join("")}(n)).val("").on("change",(function(){var t=this.value,e=$(this).parents(".dialog")[0];if(a.ZP.setContentType(e.querySelector(".libraryOptions"),"mixed"==t?"":t),t?e.querySelector(".libraryOptions").classList.remove("hide"):e.querySelector(".libraryOptions").classList.add("hide"),"mixed"!=t){var i=this.selectedIndex;if(-1!=i){var r=this.options[i].innerHTML.replace("*","").replace("&amp;","&");$("#txtValue",e).val(r);var o=n.filter((function(e){return e.value==t}))[0];$(".collectionTypeFieldDescription",e).html(o.message||"")}}})),i.querySelector(".btnAddFolder").addEventListener("click",v),i.querySelector(".btnSubmit").addEventListener("click",y),i.querySelector(".folderList").addEventListener("click",g),o.addEventListener("close",P),r.default.open(o),o.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(o)})),S=[],h(o),function(t){a.ZP.embed(t.querySelector(".libraryOptions")).then((function(){$("#selectCollectionType",t).trigger("change")}))}(o)}))})),S=[],k=!1,T=!1;e.default=w},30058:function(t){t.exports='<div class="formDialogHeader"> <button type="button" is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1"><span class="material-icons arrow_back"></span></button> <h3 class="formDialogHeaderTitle">${ButtonAddMediaLibrary}</h3> </div> <div class="formDialogContent scrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <div id="fldCollectionType" class="selectContainer"> <select is="emby-select" id="selectCollectionType" data-mini="true" required="required" label="${LabelContentType}"></select> <div class="collectionTypeFieldDescription fieldDescription"> </div> </div> <div class="inputContainer"> <input is="emby-input" type="text" id="txtValue" required="required" label="${LabelDisplayName}"/> </div> <div class="folders"> <div style="display:flex;align-items:center"> <h1 style="margin:.5em 0">${Folders}</h1> <button is="emby-button" type="button" class="fab btnAddFolder submit" style="margin-left:1em" title="${Add}"> <span class="material-icons add"></span> </button> </div> <div class="paperList folderList hide" style="margin-bottom:2em"></div> </div> <div class="libraryOptions"></div> </div> </div> <div class="formDialogFooter"> <button is="emby-button" type="button" class="raised btnSubmit button-submit block formDialogFooterItem"> <span>${ButtonOk}</span> </button> </div> '}}]);