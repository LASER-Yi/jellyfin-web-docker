"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72681,62882,2217,95062,17443],{72681:function(e,t,n){n.r(t),n.d(t,{default:function(){return C}}),n(44962),n(78557),n(90076),n(83994),n(82367);var i,o,s,a=n(79754),l=n(5898),r=n(46782),c=n(8566),d=n(10838),u=n(98320),v=(n(10353),n(77157),n(98959),n(63001),n(15453),n(86191)),h='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderSeriesOptions} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner dialog-content-centered" style="padding-top:2em"> <form style="max-width:none"> <div class="selectContainer"> <select is="emby-select" class="selectShowType" label="${LabelRecord}"> <option value="new">${NewEpisodesOnly}</option> <option value="all">${AllEpisodes}</option> </select> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkSkipEpisodesInLibrary"/> <span>${SkipEpisodesAlreadyInMyLibrary}</span> </label> <div class="fieldDescription checkboxFieldDescription">${SkipEpisodesAlreadyInMyLibraryHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" class="selectChannels" label="${LabelChannels}"> <option class="optionChannelOnly" value="one">${OneChannel}</option> <option value="all">${AllChannels}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectAirTime" label="${LabelAirTime}"> <option class="optionAroundTime" value="original"></option> <option value="any">${Anytime}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" class="selectKeepUpTo" label="${LabelKeepUpTo}"></select> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPrePaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStartWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesBefore} </div> </div> </div> <div class="inputContainer"> <div class="flex align-items-center"> <div class="flex-grow"> <input is="emby-input" type="number" id="txtPostPaddingMinutes" pattern="[0-9]*" required="required" min="0" step="1" label="${LabelStopWhenPossible}"/> </div> <div class="fieldDescription" style="margin-left:.5em;font-size:90%;margin-top:1.3em"> ${MinutesAfter} </div> </div> </div> <br/> <div class="formDialogFooter"> <button is="emby-button" type="submit" class="raised btnSubmit block formDialogFooterItem button-submit hide"> <span>${Save}</span> </button> <button is="emby-button" type="button" class="raised btnCancelRecording block formDialogFooterItem button-cancel" style="white-space:nowrap"> <span>${HeaderCancelRecording}</span> </button> </div> </form> </div> </div> ',p=!1,m=!1;function y(e,t){e.querySelector("#txtPrePaddingMinutes").value=t.PrePaddingSeconds/60,e.querySelector("#txtPostPaddingMinutes").value=t.PostPaddingSeconds/60,e.querySelector(".selectChannels").value=t.RecordAnyChannel?"all":"one",e.querySelector(".selectAirTime").value=t.RecordAnyTime?"any":"original",e.querySelector(".selectShowType").value=t.RecordNewOnly?"new":"all",e.querySelector(".chkSkipEpisodesInLibrary").checked=t.SkipEpisodesInLibrary,e.querySelector(".selectKeepUpTo").value=t.KeepUpTo||0,t.ChannelName||t.ChannelNumber?e.querySelector(".optionChannelOnly").innerText=l.Ay.translate("ChannelNameOnly",t.ChannelName||t.ChannelNumber):e.querySelector(".optionChannelOnly").innerHTML=l.Ay.translate("OneChannel"),e.querySelector(".optionAroundTime").innerHTML=l.Ay.translate("AroundTime",u.Ay.getDisplayTime(u.Ay.parseISO8601Date(t.StartDate))),c.Ay.hide()}function f(e){p=!0,m=e,a.default.close(i)}function b(e){var t=this,n=v.A.getApiClient(s);return n.getLiveTvSeriesTimer(o).then((function(e){e.PrePaddingSeconds=60*t.querySelector("#txtPrePaddingMinutes").value,e.PostPaddingSeconds=60*t.querySelector("#txtPostPaddingMinutes").value,e.RecordAnyChannel="all"===t.querySelector(".selectChannels").value,e.RecordAnyTime="any"===t.querySelector(".selectAirTime").value,e.RecordNewOnly="new"===t.querySelector(".selectShowType").value,e.SkipEpisodesInLibrary=t.querySelector(".chkSkipEpisodesInLibrary").checked,e.KeepUpTo=t.querySelector(".selectKeepUpTo").value,n.updateLiveTvSeriesTimer(e)})),e.preventDefault(),!1}function S(e){!function(e){for(var t="",n=0;n<=50;n++)t+='<option value="'+n+'">'+(0===n?l.Ay.translate("AsManyAsPossible"):1===n?l.Ay.translate("ValueOneEpisode"):l.Ay.translate("ValueEpisodeCount",n))+"</option>";e.querySelector(".selectKeepUpTo").innerHTML=t}(e),e.querySelector(".btnCancel").addEventListener("click",(function(){f(!1)})),e.querySelector(".btnCancelRecording").addEventListener("click",(function(){var e,t;(e=v.A.getApiClient(s),t=o,new Promise((function(i,o){n.e(78938).then(n.bind(n,78938)).then((function(n){n.default.cancelSeriesTimerWithConfirmation(t,e.serverId()).then(i,o)}))}))).then((function(){f(!0)}))})),e.querySelector("form").addEventListener("submit",b)}function A(e,t){var n=v.A.getApiClient(s);c.Ay.show(),"string"==typeof t?(o=t,n.getLiveTvSeriesTimer(t).then((function(t){y(e,t),c.Ay.hide()}))):t&&(o=t.Id,y(e,t),c.Ay.hide())}function g(){this.querySelector(".btnSubmit").click()}var C={show:function(e,t,n){return new Promise((function(o,u){p=!1,m=!1,s=t,c.Ay.show(),n=n||{};var v={removeOnClose:!0,scrollY:!1};r.A.tv?v.size="fullscreen":v.size="small";var y=a.default.createDialog(v);y.classList.add("formDialog"),y.classList.add("recordingDialog"),r.A.tv||(y.style["min-width"]="20%");var f="";f+=l.Ay.translateHtml(h,"core"),y.innerHTML=f,!1===n.enableCancel&&y.querySelector(".formDialogFooter").classList.add("hide"),i=y,y.addEventListener("closing",(function(){m||this.querySelector(".btnSubmit").click()})),y.addEventListener("close",(function(){p?o({updated:!0,deleted:m}):u()})),r.A.tv&&d.default.centerFocus.on(y.querySelector(".formDialogContent"),!1),S(y),A(y,e),a.default.open(y)}))},embed:function(e,t,n){p=!1,m=!1,s=t,c.Ay.show(),n=n||{};var o={removeOnClose:!0,scrollY:!1};r.A.tv?o.size="fullscreen":o.size="small";var a=n.context;a.classList.add("hide"),a.innerHTML=l.Ay.translateHtml(h,"core"),a.querySelector(".formDialogHeader").classList.add("hide"),a.querySelector(".formDialogFooter").classList.add("hide"),a.querySelector(".formDialogContent").className="",a.querySelector(".dialogContentInner").className="",a.classList.remove("hide"),a.removeEventListener("change",g),a.addEventListener("change",g),i=a,S(a),A(a,e)}}},63001:function(e,t,n){var i=n(46782),o=n(34789),s=n(62882),a=(n(69177),Object.create(HTMLSelectElement.prototype));function l(){return!(!o.A.edgeUwp&&!o.A.xboxOne&&(o.A.tizen||o.A.orsay||o.A.web0s||!o.A.tv&&i.A.tv))}function r(e){var t=c(e),n=t?t.textContent||t.innerText:null;s.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function v(e){e.button||l()||(e.preventDefault(),r(this))}function h(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),r(this)));case 37:case 38:case 39:case 40:return void(i.A.tv&&e.preventDefault())}}var p=0;a.createdCallback=function(){this.id||(this.id="embyselect"+p,p++),this.classList.add("emby-select-withcolor"),i.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",v),this.addEventListener("keydown",h),this.addEventListener("focus",d),this.addEventListener("blur",u)},a.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},a.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:a,extends:"select"})},62882:function(e,t,n){n.r(t),n.d(t,{show:function(){return u}});var i=n(22696),o=n.n(i),s=n(79754),a=n(46782),l=n(5898),r=n(47629),c=(n(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(e,t,i){Promise.resolve().then(n.bind(n,10838)).then((function(n){var o=i?"on":"off";n.centerFocus[o](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function u(e){var t,n,i,u={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};a.A.tv?(u.size="fullscreen",i=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=e.entryAnimation,u.exitAnimation=e.exitAnimation,u.entryAnimationDuration=e.entryAnimationDuration||140,u.exitAnimationDuration=e.exitAnimationDuration||100,u.autoFocus=!1);var v=s.default.createDialog(u);i?v.classList.add("actionsheet-fullscreen"):v.classList.add("actionsheet-not-fullscreen"),v.classList.add("actionSheet"),e.dialogClass&&v.classList.add(e.dialogClass);var h="",p=a.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";e.items.length>20&&(m+="min-width:"+(r.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var y,f=!1,b=[];try{for(var S=c(e.items),A=S.next();!A.done;A=S.next())(y=(x=A.value).icon||(x.selected?"check":null))&&(f=!0),b.push(y||"")}catch(e){t={error:e}}finally{try{A&&!A.done&&(n=S.return)&&n.call(S)}finally{if(t)throw t.error}}a.A.tv&&(h+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var g=e.title&&!f;g||a.A.tv?h+='<div class="actionSheetContent actionSheetContent-centered">':h+='<div class="actionSheetContent">',e.title&&(h+='<h1 class="actionSheetTitle">'+o()(e.title)+"</h1>"),e.text&&(h+='<p class="actionSheetText">'+o()(e.text)+"</p>");var C="actionSheetScroller";a.A.tv&&(C+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),h+='<div class="'+C+" "+p+'" style="'+m+'">';var L="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(L+=" listItem-border"),e.menuItemClass&&(L+=" "+e.menuItemClass),a.A.tv&&(L+=" listItem-focusscale"),a.A.mobile&&(L+=" actionsheet-xlargeFont");for(var w=0;w<e.items.length;w++){var x;(x=e.items[w]).divider?h+='<div class="actionsheetDivider"></div>':(h+="<button"+(x.selected&&a.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+L+'" data-id="'+(null==x.id||""===x.id?x.value:x.id)+'">',(y=b[w])?h+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(y,'" aria-hidden="true"></span>'):f&&!g&&(h+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),h+='<div class="listItemBody actionsheetListItemBody">',h+='<div class="listItemBodyText actionSheetItemText">',h+=o()(x.name||x.textContent||x.innerText),h+="</div>",x.secondaryText&&(h+='<div class="listItemBodyText secondary">'.concat(o()(x.secondaryText),"</div>")),h+="</div>",x.asideText&&(h+='<div class="listItemAside actionSheetItemAsideText">'.concat(o()(x.asideText),"</div>")),h+="</button>")}if(e.showCancel&&(h+='<div class="buttons">',h+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.Ay.translate("ButtonCancel"),"</button>"),h+="</div>"),h+="</div>",v.innerHTML=h,a.A.tv){var T=v.querySelector(".actionSheetScroller");T&&d(T,!1,!0)}var k=v.querySelector(".btnCloseActionSheet");k&&k.addEventListener("click",(function(){s.default.close(v)}));var I,q=null;return e.timeout&&(I=setTimeout((function(){s.default.close(v)}),e.timeout)),new Promise((function(t,n){var i=!1;v.addEventListener("click",(function(n){var o=r.Ay.parentWithClass(n.target,"actionSheetMenuItem");o&&(q=o.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(q)&&(t(q),i=!0):(t(q),i=!0)),s.default.close(v))})),v.addEventListener("close",(function(){if(a.A.tv){var o=v.querySelector(".actionSheetScroller");o&&d(o,!1,!1)}I&&(clearTimeout(I),I=void 0),i||(null!=q?(e.callback&&e.callback(q),t(q)):n(new Error("ActionSheet closed without resolving")))})),s.default.open(v).catch((function(e){console.warn("DialogHelper.open error",e)}));var o=e.positionTo&&"fullscreen"!==u.size?function(e,t,n){var i=r.Ay.getWindowSize(),o=i.innerHeight,s=i.innerWidth,a=function(e){var t,n,i=[];if(!document)return i;try{for(var o=c(e),s=o.next();!s.done;s=o.next()){var a=s.value.getBoundingClientRect();i.push({top:a.top,left:a.left,width:a.width,height:a.height})}}catch(e){t={error:e}}finally{try{s&&!s.done&&(n=o.return)&&n.call(o)}finally{if(t)throw t.error}}return i}([e])[0];"top"!==t.positionY&&(a.top+=(a.height||0)/2),a.left+=(a.width||0)/2;var l=n.offsetHeight||300,d=n.offsetWidth||160;a.top-=l/2,a.left-=d/2;var u=a.left+d-s,v=a.top+l-o;return u>0&&(a.left-=u+20),v>0&&(a.top-=v+20),a.top+=t.offsetTop||0,a.left+=t.offsetLeft||0,a.top=Math.max(a.top,10),a.left=Math.max(a.left,10),a}(e.positionTo,e,v):null;o&&(v.style.position="fixed",v.style.margin="0",v.style.left=o.left+"px",v.style.top=o.top+"px")}))}t.default={show:u}}}]);