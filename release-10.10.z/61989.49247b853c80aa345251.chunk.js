"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[61989,62882,2217],{61989:function(e,t,n){n.r(t),n.d(t,{default:function(){return g},show:function(){return b}}),n(78557),n(90076),n(95021),n(53819),n(64062);var i,o,a,s=n(79754),r=n(47629),l=n(8566),c=n(10838),d=n(46782),u=n(5898),v=(n(10353),n(63001),n(86191)),m=n(50764),f='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderUploadImage} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner"> <form class="uploadItemImageForm" style="max-width:100%"> <div class="flex align-items-center" style="margin:1.5em 0"> <h2 style="margin:0">${HeaderAddUpdateImage}</h2> <button is="emby-button" type="button" class="raised raised-mini btnBrowse"> <span class="material-icons folder" aria-hidden="true"></span> <span>${Browse}</span> </button> </div> <div> <div class="imageEditor-dropZone fieldDescription"> <div id="dropImageText">${LabelDropImageHere}</div> <output id="imageOutput" class="flex align-items-center justify-content-center" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%"></output> <input type="file" accept="image/*" id="uploadImage" name="uploadImage" style="position:absolute;top:0;left:0;right:0;bottom:0;width:100%;opacity:0"/> </div> <div id="fldUpload" class="hide"> <br/> <div class="selectContainer"> <select is="emby-select" id="selectImageType" name="selectImageType" label="${LabelImageType}"> <option value="None"></option> <option value="Primary">${Primary}</option> <option value="Art">${Art}</option> <option value="Backdrop">${Backdrop}</option> <option value="Banner">${Banner}</option> <option value="Box">${Box}</option> <option value="BoxRear">${BoxRear}</option> <option value="Disc">${Disc}</option> <option value="Logo">${Logo}</option> <option value="Menu">${Menu}</option> <option value="Thumb">${Thumb}</option> </select> </div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Upload}</span> </button> </div> </div> </form> </div> </div> ',p=!1;function h(e){switch(l.Ay.hide(),e.target.error.code){case e.target.error.NOT_FOUND_ERR:(0,m.A)(u.Ay.translate("MessageFileReadError"));break;case e.target.error.ABORT_ERR:break;default:(0,m.A)(u.Ay.translate("MessageFileReadError"))}}function y(e){var t=a;if(!t)return!1;if(!t.type.startsWith("image/"))return(0,m.A)(u.Ay.translate("MessageImageFileTypeAllowed")),e.preventDefault(),!1;l.Ay.show();var n=r.Ay.parentWithClass(this,"dialog"),c=n.querySelector("#selectImageType").value;return"None"===c?((0,m.A)(u.Ay.translate("MessageImageTypeNotSelected")),e.preventDefault(),!1):(v.A.getApiClient(o).uploadItemImage(i,c,t).then((function(){n.querySelector("#uploadImage").value="",l.Ay.hide(),p=!0,s.default.close(n)})),e.preventDefault(),!1)}function b(e){return new Promise((function(t){p=!1,function(e,t){i=(e=e||{}).itemId,o=e.serverId;var n={removeOnClose:!0};d.A.tv?n.size="fullscreen":n.size="small";var r,v=s.default.createDialog(n);v.classList.add("formDialog"),v.innerHTML=u.Ay.translateHtml(f,"core"),d.A.tv&&c.default.centerFocus.on(v,!1),v.addEventListener("close",(function(){d.A.tv&&c.default.centerFocus.off(v,!1),l.Ay.hide(),t(p)})),s.default.open(v),(r=v).querySelector("form").addEventListener("submit",y),r.querySelector("#uploadImage").addEventListener("change",(function(){!function(e,t){var n=t[0];if(null==n||!n.type.match("image.*"))return e.querySelector("#imageOutput").innerHTML="",e.querySelector("#fldUpload").classList.add("hide"),void(a=null);a=n;var i,o=new FileReader;o.onerror=h,o.onloadstart=function(){e.querySelector("#fldUpload").classList.add("hide")},o.onabort=function(){l.Ay.hide(),console.debug("File read cancelled")},o.onload=(i=n,function(t){var n=['<img style="max-width:100%;max-height:100%;" src="',t.target.result,'" title="',escape(i.name),'"/>'].join("");e.querySelector("#imageOutput").innerHTML=n,e.querySelector("#dropImageText").classList.add("hide"),e.querySelector("#fldUpload").classList.remove("hide")}),o.readAsDataURL(n)}(r,this.files)})),r.querySelector(".btnBrowse").addEventListener("click",(function(){r.querySelector("#uploadImage").click()})),v.querySelector("#selectImageType").value=e.imageType||"Primary",v.querySelector(".btnCancel").addEventListener("click",(function(){s.default.close(v)}))}(e,t)}))}var g={show:b}},63001:function(e,t,n){var i=n(46782),o=n(34789),a=n(62882),s=(n(69177),Object.create(HTMLSelectElement.prototype));function r(){return!(!o.A.edgeUwp&&!o.A.xboxOne&&(o.A.tizen||o.A.orsay||o.A.web0s||!o.A.tv&&i.A.tv))}function l(e){var t=c(e),n=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||r()||(e.preventDefault(),l(this))}function m(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(i.A.tv&&e.preventDefault())}}var f=0;s.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),i.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",m),this.addEventListener("focus",d),this.addEventListener("blur",u)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})},62882:function(e,t,n){n.r(t),n.d(t,{show:function(){return u}});var i=n(22696),o=n.n(i),a=n(79754),s=n(46782),r=n(5898),l=n(47629),c=(n(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(e,t,i){Promise.resolve().then(n.bind(n,10838)).then((function(n){var o=i?"on":"off";n.centerFocus[o](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function u(e){var t,n,i,u={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.A.tv?(u.size="fullscreen",i=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=e.entryAnimation,u.exitAnimation=e.exitAnimation,u.entryAnimationDuration=e.entryAnimationDuration||140,u.exitAnimationDuration=e.exitAnimationDuration||100,u.autoFocus=!1);var v=a.default.createDialog(u);i?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),e.dialogClass&&v.classList.add(e.dialogClass);var m="",f=s.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",p="";e.items.length>20&&(p+="min-width:"+(l.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var h,y=!1,b=[];try{for(var g=c(e.items),A=g.next();!A.done;A=g.next())(h=(L=A.value).icon||(L.selected?"check":null))&&(y=!0),b.push(h||"")}catch(e){t={error:e}}finally{try{A&&!A.done&&(n=g.return)&&n.call(g)}finally{if(t)throw t.error}}s.A.tv&&(m+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=e.title&&!y;S||s.A.tv?m+='<div class="actionSheetContent actionSheetContent-centered">':m+='<div class="actionSheetContent">',e.title&&(m+='<h1 class="actionSheetTitle">'+o()(e.title)+"</h1>"),e.text&&(m+='<p class="actionSheetText">'+o()(e.text)+"</p>");var x="actionSheetScroller";s.A.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),m+='<div class="'+x+" "+f+'" style="'+p+'">';var I="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(I+=" listItem-border"),e.menuItemClass&&(I+=" "+e.menuItemClass),s.A.tv&&(I+=" listItem-focusscale"),s.A.mobile&&(I+=" actionsheet-xlargeFont");for(var w=0;w<e.items.length;w++){var L;(L=e.items[w]).divider?m+='<div class="actionsheetDivider"></div>':(m+="<button"+(L.selected&&s.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+I+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(h=b[w])?m+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(h,'" aria-hidden="true"></span>'):y&&!S&&(m+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),m+='<div class="listItemBody actionsheetListItemBody">',m+='<div class="listItemBodyText actionSheetItemText">',m+=o()(L.name||L.textContent||L.innerText),m+="</div>",L.secondaryText&&(m+='<div class="listItemBodyText secondary">'.concat(o()(L.secondaryText),"</div>")),m+="</div>",L.asideText&&(m+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(L.asideText),"</div>")),m+="</button>")}if(e.showCancel&&(m+='<div class="buttons">',m+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(r.Ay.translate("ButtonCancel"),"</button>"),m+="</div>"),m+="</div>",v.innerHTML=m,s.A.tv){var T=v.querySelector(".actionSheetScroller");T&&d(T,!1,!0)}var C=v.querySelector(".btnCloseActionSheet");C&&C.addEventListener("click",(function(){a.default.close(v)}));var k,E=null;return e.timeout&&(k=setTimeout((function(){a.default.close(v)}),e.timeout)),new Promise((function(t,n){var i=!1;v.addEventListener("click",(function(n){var o=l.Ay.parentWithClass(n.target,"actionSheetMenuItem");o&&(E=o.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(E)&&(t(E),i=!0):(t(E),i=!0)),a.default.close(v))})),v.addEventListener("close",(function(){if(s.A.tv){var o=v.querySelector(".actionSheetScroller");o&&d(o,!1,!1)}k&&(clearTimeout(k),k=void 0),i||(null!=E?(e.callback&&e.callback(E),t(E)):n(new Error("ActionSheet closed without resolving")))})),a.default.open(v).catch((function(e){console.warn("DialogHelper.open error",e)}));var o=e.positionTo&&"fullscreen"!==u.size?function(e,t,n){var i=l.Ay.getWindowSize(),o=i.innerHeight,a=i.innerWidth,s=function(e){var t,n,i=[];if(!document)return i;try{for(var o=c(e),a=o.next();!a.done;a=o.next()){var s=a.value.getBoundingClientRect();i.push({top:s.top,left:s.left,width:s.width,height:s.height})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return i}([e])[0];"top"!==t.positionY&&(s.top+=(s.height||0)/2),s.left+=(s.width||0)/2;var r=n.offsetHeight||300,d=n.offsetWidth||160;s.top-=r/2,s.left-=d/2;var u=s.left+d-a,v=s.top+r-o;return u>0&&(s.left-=u+20),v>0&&(s.top-=v+20),s.top+=t.offsetTop||0,s.left+=t.offsetLeft||0,s.top=Math.max(s.top,10),s.left=Math.max(s.left,10),s}(e.positionTo,e,v):null;o&&(v.style.position="fixed",v.style.margin="0",v.style.left=o.left+"px",v.style.top=o.top+"px")}))}t.default={show:u}}}]);