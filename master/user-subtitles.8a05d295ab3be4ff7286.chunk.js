"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[92594,79617,96084,1998,64763],{64763:function(e,t,n){function i(e,t){var n=[];switch(e.textSize||""){case"smaller":n.push({name:"font-size",value:".8em"});break;case"small":n.push({name:"font-size",value:"inherit"});break;case"larger":n.push({name:"font-size",value:"2em"});break;case"extralarge":n.push({name:"font-size",value:"2.2em"});break;case"large":n.push({name:"font-size",value:"1.72em"});break;default:n.push({name:"font-size",value:"1.36em"})}switch("bold"===(e.textWeight||"")?n.push({name:"font-weight",value:"bold"}):n.push({name:"font-weight",value:"normal"}),e.dropShadow||""){case"raised":n.push({name:"text-shadow",value:"-0.04em -0.04em #fff, 0px -0.04em #fff, -0.04em 0px #fff, 0.04em 0.04em #000, 0px 0.04em #000, 0.04em 0px #000"});break;case"depressed":n.push({name:"text-shadow",value:"0.04em 0.04em #fff, 0px 0.04em #fff, 0.04em 0px #fff, -0.04em -0.04em #000, 0px -0.04em #000, -0.04em 0px #000"});break;case"uniform":n.push({name:"text-shadow",value:"#000 0px 0.03em, #000 0px -0.03em, #000 0px 0.05em, #000 0px -0.05em, #000 0.03em 0px, #000 -0.03em 0px, #000 0.03em 0.03em, #000 -0.03em 0.03em, #000 0.03em -0.03em, #000 -0.03em -0.03em, #000 0.03em 0.05em, #000 -0.03em 0.05em, #000 0.03em -0.05em, #000 -0.03em -0.05em, #000 0.05em 0px, #000 -0.05em 0px, #000 0.05em 0.03em, #000 -0.05em 0.03em, #000 0.05em -0.03em, #000 -0.05em -0.03em"});break;case"none":n.push({name:"text-shadow",value:"none"});break;default:n.push({name:"text-shadow",value:"#000000 0px 0px 7px"})}var i=e.textBackground||"transparent";i&&n.push({name:"background-color",value:i});var a=e.textColor||"#ffffff";switch(a&&n.push({name:"color",value:a}),e.font||""){case"typewriter":n.push({name:"font-family",value:'"Courier New",monospace'}),n.push({name:"font-variant",value:"none"});break;case"print":n.push({name:"font-family",value:"Georgia,Times New Roman,Arial,Helvetica,serif"}),n.push({name:"font-variant",value:"none"});break;case"console":n.push({name:"font-family",value:"Consolas,Lucida Console,Menlo,Monaco,monospace"}),n.push({name:"font-variant",value:"none"});break;case"cursive":n.push({name:"font-family",value:"Lucida Handwriting,Brush Script MT,Segoe Script,cursive,Quintessential,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"none"});break;case"casual":n.push({name:"font-family",value:"Gabriola,Segoe Print,Comic Sans MS,Chalkboard,Short Stack,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"none"});break;case"smallcaps":n.push({name:"font-family",value:"Copperplate Gothic,Copperplate Gothic Bold,Copperplate,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),n.push({name:"font-variant",value:"small-caps"});break;default:n.push({name:"font-family",value:"-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol"}),n.push({name:"font-variant",value:"none"})}if(!t){var l=parseInt(e.verticalPosition,10),o=Math.abs(1.35*l);l<0?(n.push({name:"min-height",value:"".concat(o,"em")}),n.push({name:"margin-top",value:""})):(n.push({name:"min-height",value:""}),n.push({name:"margin-top",value:"".concat(o,"em")}))}return n}function a(e,t){var n=[];return t||(parseInt(e.verticalPosition,10)<0?(n.push({name:"top",value:""}),n.push({name:"bottom",value:"0"})):(n.push({name:"top",value:"0"}),n.push({name:"bottom",value:""}))),n}function l(e,t){return{text:i(e,t),window:a(e,t)}}function o(e,t){for(var n=0,i=e.length;n<i;n++){var a=e[n];t.style[a.name]=a.value}}function s(e,t){var n=l(t,!!e.preview);e.text&&o(n.text,e.text),e.window&&o(n.window,e.window)}n.r(t),n.d(t,{applyStyles:function(){return s},getStyles:function(){return l}}),n(96054),t.default={getStyles:l,applyStyles:s}},9070:function(e,t,n){n.r(t),n.d(t,{default:function(){return I}}),n(77575),n(81678),n(4754),n(29305),n(32733),n(78557),n(94),n(36947),n(84701),n(44962),n(83994),n(82367);var i=n(9482),a=n(22622),l=n(90381),o=n(83775),s=n(46782),r=n(56869),u=n(64763),c=function(e,t){var n="";n+="<option value=''>"+i.Ay.translate("AnyLanguage")+"</option>";for(var a=0,l=t.length;a<l;a++){var o=t[a];n+="<option value='"+o.ThreeLetterISOLanguageName+"'>"+o.DisplayName+"</option>"}e.innerHTML=n},d=n(47629),p=n(62014),v=(n(63001),n(57949),n(98959),n(77157),n(86191)),f=n(50764);function m(e){return m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},m(e)}function b(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,h(i.key),i)}}function h(e){var t=function(e,t){if("object"!=m(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var i=n.call(e,"string");if("object"!=m(i))return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==m(t)?t:String(t)}function y(e){return{textSize:e.querySelector("#selectTextSize").value,textWeight:e.querySelector("#selectTextWeight").value,dropShadow:e.querySelector("#selectDropShadow").value,font:e.querySelector("#selectFont").value,textBackground:e.querySelector("#inputTextBackground").value,textColor:s.A.tv?e.querySelector("#selectTextColor").value:e.querySelector("#inputTextColor").value,verticalPosition:e.querySelector("#sliderVerticalPosition").value}}function S(e){for(var t=d.Ay.parentWithClass(e.target,"subtitlesettings"),n=t.querySelectorAll(".subtitlesHelp"),i=0,a=n.length;i<a;i++)n[i].classList.add("hide");t.querySelector(".subtitles"+this.value+"Help").classList.remove("hide")}function g(e){var t=d.Ay.parentWithClass(e.target,"subtitlesettings"),n=y(t),i={window:t.querySelector(".subtitleappearance-preview-window"),text:t.querySelector(".subtitleappearance-preview-text"),preview:!0};u.default.applyStyles(i,n),u.default.applyStyles({window:t.querySelector(".subtitleappearance-fullpreview-window"),text:t.querySelector(".subtitleappearance-fullpreview-text")},n)}var w;function x(e){clearTimeout(w),this._fullPreview.classList.remove("subtitleappearance-fullpreview-hide"),e&&this._refFullPreview++,0===this._refFullPreview&&(w=setTimeout(A.bind(this),1e3))}function A(e){clearTimeout(w),e&&this._refFullPreview--,0===this._refFullPreview&&this._fullPreview.classList.add("subtitleappearance-fullpreview-hide")}var C=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){if(e.element.classList.add("subtitlesettings"),e.element.innerHTML=i.Ay.translateHtml('<form style="margin:0 auto"> <div class="verticalSection"> <h2 class="sectionTitle"> ${Subtitles} </h2> <div class="selectContainer"> <select is="emby-select" id="selectSubtitleLanguage" label="${LabelPreferredSubtitleLanguage}"></select> </div> <div class="selectContainer"> <select is="emby-select" id="selectSubtitlePlaybackMode" label="${LabelSubtitlePlaybackMode}"> <option value="Default">${Default}</option> <option value="Smart">${Smart}</option> <option value="OnlyForced">${OnlyForcedSubtitles}</option> <option value="Always">${AlwaysPlaySubtitles}</option> <option value="None">${None}</option> </select> <div class="fieldDescription subtitlesDefaultHelp subtitlesHelp hide">${DefaultSubtitlesHelp}</div> <div class="fieldDescription subtitlesSmartHelp subtitlesHelp hide">${SmartSubtitlesHelp}</div> <div class="fieldDescription subtitlesAlwaysHelp subtitlesHelp hide">${AlwaysPlaySubtitlesHelp}</div> <div class="fieldDescription subtitlesOnlyForcedHelp subtitlesHelp hide">${OnlyForcedSubtitlesHelp}</div> <div class="fieldDescription subtitlesNoneHelp subtitlesHelp hide">${NoSubtitlesHelp}</div> </div> <div class="selectContainer fldBurnIn hide"> <select is="emby-select" id="selectSubtitleBurnIn" label="${LabelBurnSubtitles}"> <option value="">${Auto}</option> <option value="onlyimageformats">${OnlyImageFormats}</option> <option value="allcomplexformats">${AllComplexFormats}</option> <option value="all">${All}</option> </select> <div class="fieldDescription">${BurnSubtitlesHelp}</div> </div> </div> <div class="verticalSection subtitleAppearanceSection hide"> <h2 class="sectionTitle"> ${HeaderSubtitleAppearance} </h2> <div class="subtitleappearance-fullpreview subtitleappearance-fullpreview-hide"> <div class="subtitleappearance-fullpreview-window"> <div class="subtitleappearance-fullpreview-text"> ${HeaderSubtitleAppearance} <br> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div style="margin:2em 0 2em"> <div class="subtitleappearance-preview flex align-items-center justify-content-center" style="margin:2em 0;padding:1.6em;color:#000;background:linear-gradient(140deg,#aa5cc3,#00a4dc)"> <div class="subtitleappearance-preview-window flex align-items-center justify-content-center" style="width:90%;padding:.25em"> <div class="subtitleappearance-preview-text flex align-items-center justify-content-center"> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div class="fieldDescription">${SubtitleAppearanceSettingsDisclaimer}</div> <div class="fieldDescription">${SubtitleAppearanceSettingsAlsoPassedToCastDevices}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextSize" label="${LabelTextSize}"> <option value="smaller">${Smaller}</option> <option value="small">${Small}</option> <option value="">${Normal}</option> <option value="large">${Large}</option> <option value="larger">${Larger}</option> <option value="extralarge">${ExtraLarge}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextWeight" label="${LabelTextWeight}"> <option value="normal">${Normal}</option> <option value="bold">${Bold}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectFont" label="${LabelFont}"> <option value="">${Default}</option> <option value="typewriter">${Typewriter}</option> <option value="print">${Print}</option> <option value="console">${Console}</option> <option value="cursive">${Cursive}</option> <option value="casual">${Casual}</option> <option value="smallcaps">${SmallCaps}</option> </select> </div> <div class="inputContainer hide"> <input is="emby-input" id="inputTextBackground" label="${LabelTextBackgroundColor}" type="text"/> </div> <div class="selectContainer"> <input is="emby-input" id="inputTextColor" label="${LabelTextColor}" type="color"/> </div> <div class="selectContainer hide"> <select is="emby-select" id="selectTextColor" label="${LabelTextColor}"> <option value="#ffffff">${SubtitleWhite}</option> <option value="#d3d3d3">${SubtitleLightGray}</option> <option value="#808080">${SubtitleGray}</option> <option value="#ffff00">${SubtitleYellow}</option> <option value="#008000">${SubtitleGreen}</option> <option value="#00ffff">${SubtitleCyan}</option> <option value="#0000ff">${SubtitleBlue}</option> <option value="#ff00ff">${SubtitleMagenta}</option> <option value="#ff0000">${SubtitleRed}</option> <option value="#000000">${SubtitleBlack}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectDropShadow" label="${LabelDropShadow}"> <option value="none">${None}</option> <option value="raised">${Raised}</option> <option value="depressed">${Depressed}</option> <option value="uniform">${Uniform}</option> <option value="">${DropShadow}</option> </select> </div> <div class="sliderContainer-settings"> <div class="sliderContainer"> <input is="emby-slider" id="sliderVerticalPosition" label="${LabelSubtitleVerticalPosition}" type="range" min="-16" max="16"/> </div> <div class="fieldDescription">${SubtitleVerticalPositionHelp}</div> </div> <div class="checkboxContainer"> <label> <input is="emby-checkbox" type="checkbox" class="chkPreview"/> <span>${Preview}</span> </label> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',"core"),e.element.querySelector("form").addEventListener("submit",t.onSubmit.bind(t)),e.element.querySelector("#selectSubtitlePlaybackMode").addEventListener("change",S),e.element.querySelector("#selectTextSize").addEventListener("change",g),e.element.querySelector("#selectTextWeight").addEventListener("change",g),e.element.querySelector("#selectDropShadow").addEventListener("change",g),e.element.querySelector("#selectFont").addEventListener("change",g),e.element.querySelector("#selectTextColor").addEventListener("change",g),e.element.querySelector("#inputTextColor").addEventListener("change",g),e.element.querySelector("#inputTextBackground").addEventListener("change",g),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),a.g.supports("subtitleappearancesettings")){e.element.querySelector(".subtitleAppearanceSection").classList.remove("hide"),t._fullPreview=e.element.querySelector(".subtitleappearance-fullpreview"),t._refFullPreview=0;var n=e.element.querySelector("#sliderVerticalPosition");n.addEventListener("input",g),n.addEventListener("input",(function(){return x.call(t)}));var l=window.PointerEvent?"pointer":"mouse";n.addEventListener("".concat(l,"enter"),(function(){return x.call(t,!0)})),n.addEventListener("".concat(l,"leave"),(function(){return A.call(t,!0)})),s.A.tv&&(n.addEventListener("focus",(function(){return x.call(t,!0)})),n.addEventListener("blur",(function(){return A.call(t,!0)})),setTimeout((function(){n.classList.add("focusable"),n.enableKeyboardDragging()}),0),d.Ay.parentWithTag(e.element.querySelector("#inputTextColor"),"DIV").classList.add("hide"),d.Ay.parentWithTag(e.element.querySelector("#selectTextColor"),"DIV").classList.remove("hide")),e.element.querySelector(".chkPreview").addEventListener("change",(function(e){e.target.checked?x.call(t,!0):A.call(t,!0)}))}t.loadData(),e.autoFocus&&o.A.autoFocus(e.element)}(t,this)}var t,n;return t=e,n=[{key:"loadData",value:function(){var e=this,t=e.options.element;r.Ay.show();var n=e.options.userId,i=v.A.getApiClient(e.options.serverId),o=e.options.userSettings;i.getUser(n).then((function(s){o.setUserInfo(n,i).then((function(){e.dataLoaded=!0;var n=o.getSubtitleAppearanceSettings(e.options.appearanceKey);!function(e,t,n,i,o){o.getCultures().then((function(n){a.g.supports("subtitleburnsettings")&&t.Policy.EnableVideoPlaybackTranscoding&&e.querySelector(".fldBurnIn").classList.remove("hide");var o=e.querySelector("#selectSubtitleLanguage");c(o,n),o.value=t.Configuration.SubtitleLanguagePreference||"",e.querySelector("#selectSubtitlePlaybackMode").value=t.Configuration.SubtitleMode||"",e.querySelector("#selectSubtitlePlaybackMode").dispatchEvent(new CustomEvent("change",{})),e.querySelector("#selectTextSize").value=i.textSize||"",e.querySelector("#selectTextWeight").value=i.textWeight||"normal",e.querySelector("#selectDropShadow").value=i.dropShadow||"",e.querySelector("#inputTextBackground").value=i.textBackground||"transparent",e.querySelector("#selectTextColor").value=i.textColor||"#ffffff",e.querySelector("#inputTextColor").value=i.textColor||"#ffffff",e.querySelector("#selectFont").value=i.font||"",e.querySelector("#sliderVerticalPosition").value=i.verticalPosition,e.querySelector("#selectSubtitleBurnIn").value=l.A.get("subtitleburnin")||"",g({target:e.querySelector("#selectTextSize")}),r.Ay.hide()}))}(t,s,0,n,i)}))}))}},{key:"submit",value:function(){this.onSubmit(null)}},{key:"destroy",value:function(){this.options=null}},{key:"onSubmit",value:function(e){var t=this,n=v.A.getApiClient(t.options.serverId),a=t.options.userId,o=t.options.userSettings;return o.setUserInfo(a,n).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,n,a,o,s){r.Ay.show(),l.A.set("subtitleburnin",t.querySelector("#selectSubtitleBurnIn").value),o.getUser(n).then((function(n){(function(e,t,n,i,a){var l=n.getSubtitleAppearanceSettings(i);return l=Object.assign(l,y(e)),n.setSubtitleAppearanceSettings(l,i),t.Configuration.SubtitleLanguagePreference=e.querySelector("#selectSubtitleLanguage").value,t.Configuration.SubtitleMode=e.querySelector("#selectSubtitlePlaybackMode").value,a.updateUserConfiguration(t.Id,t.Configuration)})(t,n,a,e.appearanceKey,o).then((function(){r.Ay.hide(),s&&(0,f.A)(i.Ay.translate("SettingsSaved")),p.A.trigger(e,"saved")}),(function(){r.Ay.hide()}))}))}(t,t.options.element,a,o,n,e)})),e&&e.preventDefault(),!1}}],n&&b(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=C,T=n(82885),k=n(84069),$=T.UserSettings;function I(e,t){var n,i=t.userId||ApiClient.getCurrentUserId(),a=i===ApiClient.getCurrentUserId()?T:new $;e.addEventListener("viewshow",(function(){n?n.loadData():n=new L({serverId:ApiClient.serverId(),userId:i,element:e.querySelector(".settingsContainer"),userSettings:a,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:k.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){n&&(n.destroy(),n=null)}))}},63001:function(e,t,n){var i=n(46782),a=n(34789),l=n(79617),o=(n(69177),Object.create(HTMLSelectElement.prototype));function s(){return!(!a.A.edgeUwp&&!a.A.xboxOne&&(a.A.tizen||a.A.orsay||a.A.web0s||!a.A.tv&&i.A.tv))}function r(e){var t=u(e),n=t?t.textContent||t.innerText:null;l.default.show({items:e.options,positionTo:e,title:n}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function u(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function c(){var e=u(this);e&&e.classList.add("selectLabelFocused")}function d(){var e=u(this);e&&e.classList.remove("selectLabelFocused")}function p(e){e.button||s()||(e.preventDefault(),r(this))}function v(e){switch(e.keyCode){case 13:return void(s()||(e.preventDefault(),r(this)));case 37:case 38:case 39:case 40:return void(i.A.tv&&e.preventDefault())}}var f=0;o.createdCallback=function(){this.id||(this.id="embyselect"+f,f++),this.classList.add("emby-select-withcolor"),i.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",p),this.addEventListener("keydown",v),this.addEventListener("focus",c),this.addEventListener("blur",d)},o.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,n=this.ownerDocument.createElement("label");n.innerText=this.getAttribute("label")||"",n.classList.add("selectLabel"),n.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(n,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},o.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:o,extends:"select"})},79617:function(e,t,n){n.r(t),n.d(t,{show:function(){return d}});var i=n(22696),a=n.n(i),l=n(79754),o=n(46782),s=n(9482),r=n(47629),u=(n(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,n=t&&e[t],i=0;if(n)return n.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&i>=e.length&&(e=void 0),{value:e&&e[i++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function c(e,t,i){Promise.resolve().then(n.bind(n,46345)).then((function(n){var a=i?"on":"off";n.centerFocus[a](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function d(e){var t,n,i,d={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};o.A.tv?(d.size="fullscreen",i=!0,d.autoFocus=!0):(d.modal=!1,d.entryAnimation=e.entryAnimation,d.exitAnimation=e.exitAnimation,d.entryAnimationDuration=e.entryAnimationDuration||140,d.exitAnimationDuration=e.exitAnimationDuration||100,d.autoFocus=!1);var p=l.default.createDialog(d);i?p.classList.add("actionsheet-fullscreen"):p.classList.add("actionsheet-not-fullscreen"),p.classList.add("actionSheet"),e.dialogClass&&p.classList.add(e.dialogClass);var v="",f=o.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",m="";e.items.length>20&&(m+="min-width:"+(r.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var b,h=!1,y=[];try{for(var S=u(e.items),g=S.next();!g.done;g=S.next())(b=(L=g.value).icon||(L.selected?"check":null))&&(h=!0),y.push(b||"")}catch(e){t={error:e}}finally{try{g&&!g.done&&(n=S.return)&&n.call(S)}finally{if(t)throw t.error}}o.A.tv&&(v+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(s.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var w=e.title&&!h;w||o.A.tv?v+='<div class="actionSheetContent actionSheetContent-centered">':v+='<div class="actionSheetContent">',e.title&&(v+='<h1 class="actionSheetTitle">'+a()(e.title)+"</h1>"),e.text&&(v+='<p class="actionSheetText">'+a()(e.text)+"</p>");var x="actionSheetScroller";o.A.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),v+='<div class="'+x+" "+f+'" style="'+m+'">';var A="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(A+=" listItem-border"),e.menuItemClass&&(A+=" "+e.menuItemClass),o.A.tv&&(A+=" listItem-focusscale"),o.A.mobile&&(A+=" actionsheet-xlargeFont");for(var C=0;C<e.items.length;C++){var L;(L=e.items[C]).divider?v+='<div class="actionsheetDivider"></div>':(v+="<button"+(L.selected&&o.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+A+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(b=y[C])?v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(b,'" aria-hidden="true"></span>'):h&&!w&&(v+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),v+='<div class="listItemBody actionsheetListItemBody">',v+='<div class="listItemBodyText actionSheetItemText">',v+=a()(L.name||L.textContent||L.innerText),v+="</div>",L.secondaryText&&(v+='<div class="listItemBodyText secondary">'.concat(a()(L.secondaryText),"</div>")),v+="</div>",L.asideText&&(v+='<div class="listItemAside actionSheetItemAsideText">'.concat(a()(L.asideText),"</div>")),v+="</button>")}if(e.showCancel&&(v+='<div class="buttons">',v+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(s.Ay.translate("ButtonCancel"),"</button>"),v+="</div>"),v+="</div>",p.innerHTML=v,o.A.tv){var T=p.querySelector(".actionSheetScroller");T&&c(T,!1,!0)}var k=p.querySelector(".btnCloseActionSheet");k&&k.addEventListener("click",(function(){l.default.close(p)}));var $,I=null;return e.timeout&&($=setTimeout((function(){l.default.close(p)}),e.timeout)),new Promise((function(t,n){var i=!1;p.addEventListener("click",(function(n){var a=r.Ay.parentWithClass(n.target,"actionSheetMenuItem");a&&(I=a.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(I)&&(t(I),i=!0):(t(I),i=!0)),l.default.close(p))})),p.addEventListener("close",(function(){if(o.A.tv){var a=p.querySelector(".actionSheetScroller");a&&c(a,!1,!1)}$&&(clearTimeout($),$=void 0),i||(null!=I?(e.callback&&e.callback(I),t(I)):n("ActionSheet closed without resolving"))})),l.default.open(p).catch((function(e){console.warn("DialogHelper.open error",e)}));var a=e.positionTo&&"fullscreen"!==d.size?function(e,t,n){var i=r.Ay.getWindowSize(),a=i.innerHeight,l=i.innerWidth,o=function(e){var t,n,i=[];if(!document)return i;try{for(var a=u(e),l=a.next();!l.done;l=a.next()){var o=l.value.getBoundingClientRect();i.push({top:o.top,left:o.left,width:o.width,height:o.height})}}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=a.return)&&n.call(a)}finally{if(t)throw t.error}}return i}([e])[0];"top"!==t.positionY&&(o.top+=(o.height||0)/2),o.left+=(o.width||0)/2;var s=n.offsetHeight||300,c=n.offsetWidth||160;o.top-=s/2,o.left-=c/2;var d=o.left+c-l,p=o.top+s-a;return d>0&&(o.left-=d+20),p>0&&(o.top-=p+20),o.top+=t.offsetTop||0,o.left+=t.offsetLeft||0,o.top=Math.max(o.top,10),o.left=Math.max(o.left,10),o}(e.positionTo,e,p):null;a&&(p.style.position="fixed",p.style.margin="0",p.style.left=a.left+"px",p.style.top=a.top+"px")}))}t.default={show:d}}}]);