"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61989],{61989:function(e,t,a){a.r(t),a.d(t,{default:function(){return g},show:function(){return y}}),a(95021),a(53819),a(64062),a(78557),a(90076);var i,n,o,s=a(79754),r=a(47629),l=a(56869),c=a(46345),d=a(46782),u=a(9482),p=(a(10353),a(63001),a(86191)),v=a(50764),m='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderUploadImage} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner"> <form class="uploadItemImageForm" style="max-width:100%"> <div class="flex align-items-center" style="margin:1.5em 0"> <h2 style="margin:0">${HeaderAddUpdateImage}</h2> <button is="emby-button" type="button" class="raised raised-mini btnBrowse"> <span class="material-icons folder" aria-hidden="true"></span> <span>${Browse}</span> </button> </div> <div> <div class="imageEditor-dropZone fieldDescription"> <div id="dropImageText">${LabelDropImageHere}</div> <output id="imageOutput" class="flex align-items-center justify-content-center" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%"></output> <input type="file" accept="image/*" id="uploadImage" name="uploadImage" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;opacity:0"/> </div> <div id="fldUpload" class="hide"> <br/> <div class="selectContainer"> <select is="emby-select" id="selectImageType" name="selectImageType" label="${LabelImageType}"> <option value="None"></option> <option value="Primary">${Primary}</option> <option value="Art">${Art}</option> <option value="Backdrop">${Backdrop}</option> <option value="Banner">${Banner}</option> <option value="Box">${Box}</option> <option value="BoxRear">${BoxRear}</option> <option value="Disc">${Disc}</option> <option value="Logo">${Logo}</option> <option value="Menu">${Menu}</option> <option value="Thumb">${Thumb}</option> </select> </div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Upload}</span> </button> </div> </div> </form> </div> </div> ',f=!1;function h(e){switch(l.Ay.hide(),e.target.error.code){case e.target.error.NOT_FOUND_ERR:(0,v.A)(u.Ay.translate("MessageFileReadError"));break;case e.target.error.ABORT_ERR:break;default:(0,v.A)(u.Ay.translate("MessageFileReadError"))}}function b(e){var t=o;if(!t)return!1;if(!t.type.startsWith("image/"))return(0,v.A)(u.Ay.translate("MessageImageFileTypeAllowed")),e.preventDefault(),!1;l.Ay.show();var a=r.Ay.parentWithClass(this,"dialog"),c=a.querySelector("#selectImageType").value;return"None"===c?((0,v.A)(u.Ay.translate("MessageImageTypeNotSelected")),e.preventDefault(),!1):(p.A.getApiClient(n).uploadItemImage(i,c,t).then((function(){a.querySelector("#uploadImage").value="",l.Ay.hide(),f=!0,s.default.close(a)})),e.preventDefault(),!1)}function y(e){return new Promise((function(t){f=!1,function(e,t){i=(e=e||{}).itemId,n=e.serverId;var a={removeOnClose:!0};d.A.tv?a.size="fullscreen":a.size="small";var r,p=s.default.createDialog(a);p.classList.add("formDialog"),p.innerHTML=u.Ay.translateHtml(m,"core"),d.A.tv&&c.default.centerFocus.on(p,!1),p.addEventListener("close",(function(){d.A.tv&&c.default.centerFocus.off(p,!1),l.Ay.hide(),t(f)})),s.default.open(p),(r=p).querySelector("form").addEventListener("submit",b),r.querySelector("#uploadImage").addEventListener("change",(function(){!function(e,t){var a=t[0];if(null==a||!a.type.match("image.*"))return e.querySelector("#imageOutput").innerHTML="",e.querySelector("#fldUpload").classList.add("hide"),void(o=null);o=a;var i,n=new FileReader;n.onerror=h,n.onloadstart=function(){e.querySelector("#fldUpload").classList.add("hide")},n.onabort=function(){l.Ay.hide(),console.debug("File read cancelled")},n.onload=(i=a,function(t){var a=['<img style="max-width:100%;max-height:100%;" src="',t.target.result,'" title="',escape(i.name),'"/>'].join("");e.querySelector("#imageOutput").innerHTML=a,e.querySelector("#dropImageText").classList.add("hide"),e.querySelector("#fldUpload").classList.remove("hide")}),n.readAsDataURL(a)}(r,this.files)})),r.querySelector(".btnBrowse").addEventListener("click",(function(){r.querySelector("#uploadImage").click()})),p.querySelector("#selectImageType").value=e.imageType||"Primary",p.querySelector(".btnCancel").addEventListener("click",(function(){s.default.close(p)}))}(e,t)}))}var g={show:y}},63001:function(e,t,a){var i=a(46782),n=a(34789),o=a(79617),s=(a(69177),Object.create(HTMLSelectElement.prototype));function r(){return!(!n.A.edgeUwp&&!n.A.xboxOne&&(n.A.tizen||n.A.orsay||n.A.web0s||!n.A.tv&&i.A.tv))}function l(e){var t=c(e),a=t?t.textContent||t.innerText:null;o.default.show({items:e.options,positionTo:e,title:a}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function p(e){e.button||r()||(e.preventDefault(),l(this))}function v(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(i.A.tv&&e.preventDefault())}}var m=0;s.createdCallback=function(){this.id||(this.id="embyselect"+m,m++),this.classList.add("emby-select-withcolor"),i.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",p),this.addEventListener("keydown",v),this.addEventListener("focus",d),this.addEventListener("blur",u)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,a=this.ownerDocument.createElement("label");a.innerText=this.getAttribute("label")||"",a.classList.add("selectLabel"),a.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(a,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})}}]);