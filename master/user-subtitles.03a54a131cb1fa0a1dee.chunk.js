"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20102,10763],{10763:function(e,t,i){function n(e,t){var i=[];switch(e.textSize||""){case"smaller":i.push({name:"font-size",value:".8em"});break;case"small":i.push({name:"font-size",value:"inherit"});break;case"larger":i.push({name:"font-size",value:"2em"});break;case"extralarge":i.push({name:"font-size",value:"2.2em"});break;case"large":i.push({name:"font-size",value:"1.72em"});break;default:i.push({name:"font-size",value:"1.36em"})}switch("bold"===(e.textWeight||"")?i.push({name:"font-weight",value:"bold"}):i.push({name:"font-weight",value:"normal"}),e.dropShadow||""){case"raised":i.push({name:"text-shadow",value:"-1px -1px white, 0px -1px white, -1px 0px white, 1px 1px black, 0px 1px black, 1px 0px black"});break;case"depressed":i.push({name:"text-shadow",value:"1px 1px white, 0px 1px white, 1px 0px white, -1px -1px black, 0px -1px black, -1px 0px black"});break;case"uniform":i.push({name:"text-shadow",value:"-1px 0px #000000, 0px 1px #000000, 1px 0px #000000, 0px -1px #000000"});break;case"none":i.push({name:"text-shadow",value:"none"});break;default:i.push({name:"text-shadow",value:"#000000 0px 0px 7px"})}var n=e.textBackground||"transparent";n&&i.push({name:"background-color",value:n});var a=e.textColor||"#ffffff";switch(a&&i.push({name:"color",value:a}),e.font||""){case"typewriter":i.push({name:"font-family",value:'"Courier New",monospace'}),i.push({name:"font-variant",value:"none"});break;case"print":i.push({name:"font-family",value:"Georgia,Times New Roman,Arial,Helvetica,serif"}),i.push({name:"font-variant",value:"none"});break;case"console":i.push({name:"font-family",value:"Consolas,Lucida Console,Menlo,Monaco,monospace"}),i.push({name:"font-variant",value:"none"});break;case"cursive":i.push({name:"font-family",value:"Lucida Handwriting,Brush Script MT,Segoe Script,cursive,Quintessential,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),i.push({name:"font-variant",value:"none"});break;case"casual":i.push({name:"font-family",value:"Gabriola,Segoe Print,Comic Sans MS,Chalkboard,Short Stack,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),i.push({name:"font-variant",value:"none"});break;case"smallcaps":i.push({name:"font-family",value:"Copperplate Gothic,Copperplate Gothic Bold,Copperplate,system-ui,-apple-system,BlinkMacSystemFont,sans-serif"}),i.push({name:"font-variant",value:"small-caps"});break;default:i.push({name:"font-family",value:"inherit"}),i.push({name:"font-variant",value:"none"})}if(!t){var l=parseInt(e.verticalPosition,10),r=Math.abs(1.35*l);l<0?(i.push({name:"min-height",value:"".concat(r,"em")}),i.push({name:"margin-top",value:""})):(i.push({name:"min-height",value:""}),i.push({name:"margin-top",value:"".concat(r,"em")}))}return i}function a(e,t){var i=[];return t||(parseInt(e.verticalPosition,10)<0?(i.push({name:"top",value:""}),i.push({name:"bottom",value:"0"})):(i.push({name:"top",value:"0"}),i.push({name:"bottom",value:""}))),i}function l(e,t){return{text:n(e,t),window:a(e,t)}}function r(e,t){for(var i=0,n=e.length;i<n;i++){var a=e[i];t.style[a.name]=a.value}}function o(e,t){var i=l(t,!!e.preview);e.text&&r(i.text,e.text),e.window&&r(i.window,e.window)}i.r(t),i.d(t,{applyStyles:function(){return o},getStyles:function(){return l}}),i(32081),t.default={getStyles:l,applyStyles:o}},11237:function(e,t,i){i.r(t),i.d(t,{default:function(){return $}}),i(48410),i(19068),i(87211),i(25901),i(92189),i(63238),i(95163),i(99785),i(91047),i(5769),i(17460),i(14078);var n,a=i(94994),l=i(84881),r=i(59858),o=i(34643),s=i(30325),u=i(28540),c=i(10763),d=function(e,t){var i="";i+="<option value=''>"+a.ZP.translate("AnyLanguage")+"</option>";for(var n=0,l=t.length;n<l;n++){var r=t[n];i+="<option value='"+r.ThreeLetterISOLanguageName+"'>"+r.DisplayName+"</option>"}e.innerHTML=i},p=i(72365),v=i(81643),h=(i(15856),i(42855),i(62033),i(12291),i(18613)),f=i(56663);function b(e){return b="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},b(e)}function m(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,(void 0,a=function(e,t){if("object"!==b(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var n=i.call(e,t);if("object"!==b(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(n.key,"string"),"symbol"===b(a)?a:String(a)),n)}var a}function g(e){return{textSize:e.querySelector("#selectTextSize").value,textWeight:e.querySelector("#selectTextWeight").value,dropShadow:e.querySelector("#selectDropShadow").value,font:e.querySelector("#selectFont").value,textBackground:e.querySelector("#inputTextBackground").value,textColor:s.Z.tv?e.querySelector("#selectTextColor").value:e.querySelector("#inputTextColor").value,verticalPosition:e.querySelector("#sliderVerticalPosition").value}}function y(e){for(var t=p.ZP.parentWithClass(e.target,"subtitlesettings"),i=t.querySelectorAll(".subtitlesHelp"),n=0,a=i.length;n<a;n++)i[n].classList.add("hide");t.querySelector(".subtitles"+this.value+"Help").classList.remove("hide")}function S(e){var t=p.ZP.parentWithClass(e.target,"subtitlesettings"),i=g(t),n={window:t.querySelector(".subtitleappearance-preview-window"),text:t.querySelector(".subtitleappearance-preview-text"),preview:!0};c.default.applyStyles(n,i),c.default.applyStyles({window:t.querySelector(".subtitleappearance-fullpreview-window"),text:t.querySelector(".subtitleappearance-fullpreview-text")},i)}function w(e){clearTimeout(n),this._fullPreview.classList.remove("subtitleappearance-fullpreview-hide"),e&&this._refFullPreview++,0===this._refFullPreview&&(n=setTimeout(x.bind(this),1e3))}function x(e){clearTimeout(n),e&&this._refFullPreview--,0===this._refFullPreview&&this._fullPreview.classList.add("subtitleappearance-fullpreview-hide")}var k=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,function(e,t){if(e.element.classList.add("subtitlesettings"),e.element.innerHTML=a.ZP.translateHtml('<form style="margin:0 auto"> <div class="verticalSection"> <h2 class="sectionTitle"> ${Subtitles} </h2> <div class="selectContainer"> <select is="emby-select" id="selectSubtitleLanguage" label="${LabelPreferredSubtitleLanguage}"></select> </div> <div class="selectContainer"> <select is="emby-select" id="selectSubtitlePlaybackMode" label="${LabelSubtitlePlaybackMode}"> <option value="Default">${Default}</option> <option value="Smart">${Smart}</option> <option value="OnlyForced">${OnlyForcedSubtitles}</option> <option value="Always">${AlwaysPlaySubtitles}</option> <option value="None">${None}</option> </select> <div class="fieldDescription subtitlesDefaultHelp subtitlesHelp hide">${DefaultSubtitlesHelp}</div> <div class="fieldDescription subtitlesSmartHelp subtitlesHelp hide">${SmartSubtitlesHelp}</div> <div class="fieldDescription subtitlesAlwaysHelp subtitlesHelp hide">${AlwaysPlaySubtitlesHelp}</div> <div class="fieldDescription subtitlesOnlyForcedHelp subtitlesHelp hide">${OnlyForcedSubtitlesHelp}</div> <div class="fieldDescription subtitlesNoneHelp subtitlesHelp hide">${NoSubtitlesHelp}</div> </div> <div class="selectContainer fldBurnIn hide"> <select is="emby-select" id="selectSubtitleBurnIn" label="${LabelBurnSubtitles}"> <option value="">${Auto}</option> <option value="onlyimageformats">${OnlyImageFormats}</option> <option value="allcomplexformats">${AllComplexFormats}</option> <option value="all">${All}</option> </select> <div class="fieldDescription">${BurnSubtitlesHelp}</div> </div> </div> <div class="verticalSection subtitleAppearanceSection hide"> <h2 class="sectionTitle"> ${HeaderSubtitleAppearance} </h2> <div class="subtitleappearance-fullpreview subtitleappearance-fullpreview-hide"> <div class="subtitleappearance-fullpreview-window"> <div class="subtitleappearance-fullpreview-text"> ${HeaderSubtitleAppearance} <br> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div style="margin:2em 0 2em"> <div class="subtitleappearance-preview flex align-items-center justify-content-center" style="margin:2em 0;padding:1.6em;color:#000;background:linear-gradient(140deg,#aa5cc3,#00a4dc)"> <div class="subtitleappearance-preview-window flex align-items-center justify-content-center" style="width:90%;padding:.25em"> <div class="subtitleappearance-preview-text flex align-items-center justify-content-center"> ${TheseSettingsAffectSubtitlesOnThisDevice} </div> </div> </div> <div class="fieldDescription">${SubtitleAppearanceSettingsDisclaimer}</div> <div class="fieldDescription">${SubtitleAppearanceSettingsAlsoPassedToCastDevices}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextSize" label="${LabelTextSize}"> <option value="smaller">${Smaller}</option> <option value="small">${Small}</option> <option value="">${Normal}</option> <option value="large">${Large}</option> <option value="larger">${Larger}</option> <option value="extralarge">${ExtraLarge}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectTextWeight" label="${LabelTextWeight}"> <option value="normal">${Normal}</option> <option value="bold">${Bold}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectFont" label="${LabelFont}"> <option value="">${Default}</option> <option value="typewriter">${Typewriter}</option> <option value="print">${Print}</option> <option value="console">${Console}</option> <option value="cursive">${Cursive}</option> <option value="casual">${Casual}</option> <option value="smallcaps">${SmallCaps}</option> </select> </div> <div class="inputContainer hide"> <input is="emby-input" id="inputTextBackground" label="${LabelTextBackgroundColor}" type="text"/> </div> <div class="selectContainer"> <input is="emby-input" id="inputTextColor" label="${LabelTextColor}" type="color"/> </div> <div class="selectContainer hide"> <select is="emby-select" id="selectTextColor" label="${LabelTextColor}"> <option value="#ffffff">${SubtitleWhite}</option> <option value="#d3d3d3">${SubtitleLightGray}</option> <option value="#808080">${SubtitleGray}</option> <option value="#ffff00">${SubtitleYellow}</option> <option value="#008000">${SubtitleGreen}</option> <option value="#00ffff">${SubtitleCyan}</option> <option value="#0000ff">${SubtitleBlue}</option> <option value="#ff00ff">${SubtitleMagenta}</option> <option value="#ff0000">${SubtitleRed}</option> <option value="#000000">${SubtitleBlack}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectDropShadow" label="${LabelDropShadow}"> <option value="none">${None}</option> <option value="raised">${Raised}</option> <option value="depressed">${Depressed}</option> <option value="uniform">${Uniform}</option> <option value="">${DropShadow}</option> </select> </div> <div class="sliderContainer-settings"> <div class="sliderContainer"> <input is="emby-slider" id="sliderVerticalPosition" label="${LabelSubtitleVerticalPosition}" type="range" min="-16" max="16"/> </div> <div class="fieldDescription">${SubtitleVerticalPositionHelp}</div> </div> <div class="checkboxContainer"> <label> <input is="emby-checkbox" type="checkbox" class="chkPreview"/> <span>${Preview}</span> </label> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',"core"),e.element.querySelector("form").addEventListener("submit",t.onSubmit.bind(t)),e.element.querySelector("#selectSubtitlePlaybackMode").addEventListener("change",y),e.element.querySelector("#selectTextSize").addEventListener("change",S),e.element.querySelector("#selectTextWeight").addEventListener("change",S),e.element.querySelector("#selectDropShadow").addEventListener("change",S),e.element.querySelector("#selectFont").addEventListener("change",S),e.element.querySelector("#selectTextColor").addEventListener("change",S),e.element.querySelector("#inputTextColor").addEventListener("change",S),e.element.querySelector("#inputTextBackground").addEventListener("change",S),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),l.M.supports("subtitleappearancesettings")){e.element.querySelector(".subtitleAppearanceSection").classList.remove("hide"),t._fullPreview=e.element.querySelector(".subtitleappearance-fullpreview"),t._refFullPreview=0;var i=e.element.querySelector("#sliderVerticalPosition");i.addEventListener("input",S),i.addEventListener("input",(function(){return w.call(t)}));var n=window.PointerEvent?"pointer":"mouse";i.addEventListener("".concat(n,"enter"),(function(){return w.call(t,!0)})),i.addEventListener("".concat(n,"leave"),(function(){return x.call(t,!0)})),s.Z.tv&&(i.addEventListener("focus",(function(){return w.call(t,!0)})),i.addEventListener("blur",(function(){return x.call(t,!0)})),setTimeout((function(){i.classList.add("focusable"),i.enableKeyboardDragging()}),0),p.ZP.parentWithTag(e.element.querySelector("#inputTextColor"),"DIV").classList.add("hide"),p.ZP.parentWithTag(e.element.querySelector("#selectTextColor"),"DIV").classList.remove("hide")),e.element.querySelector(".chkPreview").addEventListener("change",(function(e){e.target.checked?w.call(t,!0):x.call(t,!0)}))}t.loadData(),e.autoFocus&&o.Z.autoFocus(e.element)}(t,this)}var t,i;return t=e,i=[{key:"loadData",value:function(){var e=this,t=e.options.element;u.ZP.show();var i=e.options.userId,n=h.Z.getApiClient(e.options.serverId),a=e.options.userSettings;n.getUser(i).then((function(o){a.setUserInfo(i,n).then((function(){e.dataLoaded=!0;var i=a.getSubtitleAppearanceSettings(e.options.appearanceKey);!function(e,t,i,n,a){a.getCultures().then((function(i){l.M.supports("subtitleburnsettings")&&t.Policy.EnableVideoPlaybackTranscoding&&e.querySelector(".fldBurnIn").classList.remove("hide");var a=e.querySelector("#selectSubtitleLanguage");d(a,i),a.value=t.Configuration.SubtitleLanguagePreference||"",e.querySelector("#selectSubtitlePlaybackMode").value=t.Configuration.SubtitleMode||"",e.querySelector("#selectSubtitlePlaybackMode").dispatchEvent(new CustomEvent("change",{})),e.querySelector("#selectTextSize").value=n.textSize||"",e.querySelector("#selectTextWeight").value=n.textWeight||"normal",e.querySelector("#selectDropShadow").value=n.dropShadow||"",e.querySelector("#inputTextBackground").value=n.textBackground||"transparent",e.querySelector("#selectTextColor").value=n.textColor||"#ffffff",e.querySelector("#inputTextColor").value=n.textColor||"#ffffff",e.querySelector("#selectFont").value=n.font||"",e.querySelector("#sliderVerticalPosition").value=n.verticalPosition,e.querySelector("#selectSubtitleBurnIn").value=r.Z.get("subtitleburnin")||"",S({target:e.querySelector("#selectTextSize")}),u.ZP.hide()}))}(t,o,0,i,n)}))}))}},{key:"submit",value:function(){this.onSubmit(null)}},{key:"destroy",value:function(){this.options=null}},{key:"onSubmit",value:function(e){var t=this,i=h.Z.getApiClient(t.options.serverId),n=t.options.userId,l=t.options.userSettings;return l.setUserInfo(n,i).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,i,n,l,o){u.ZP.show(),r.Z.set("subtitleburnin",t.querySelector("#selectSubtitleBurnIn").value),l.getUser(i).then((function(i){(function(e,t,i,n,a){var l=i.getSubtitleAppearanceSettings(n);return l=Object.assign(l,g(e)),i.setSubtitleAppearanceSettings(l,n),t.Configuration.SubtitleLanguagePreference=e.querySelector("#selectSubtitleLanguage").value,t.Configuration.SubtitleMode=e.querySelector("#selectSubtitlePlaybackMode").value,a.updateUserConfiguration(t.Id,t.Configuration)})(t,i,n,e.appearanceKey,l).then((function(){u.ZP.hide(),o&&(0,f.Z)(a.ZP.translate("SettingsSaved")),v.Z.trigger(e,"saved")}),(function(){u.ZP.hide()}))}))}(t,t.options.element,n,l,i,e)})),e&&e.preventDefault(),!1}}],i&&m(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),L=k,C=i(60934),T=i(87680),P=C.UserSettings;function $(e,t){var i,n=t.userId||ApiClient.getCurrentUserId(),a=n===ApiClient.getCurrentUserId()?C:new P;e.addEventListener("viewshow",(function(){i?i.loadData():i=new L({serverId:ApiClient.serverId(),userId:n,element:e.querySelector(".settingsContainer"),userSettings:a,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:T.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){i&&(i.destroy(),i=null)}))}},42855:function(e,t,i){i(20252),i(99785),i(43512),i(23938),i(52077),i(911),i(63238),i(55849),i(61013),i(72410),i(15610),i(17460),i(25901),i(92189),i(91047),i(5769),i(14078);var n=i(57366),a=i(72365),l=i(30325),r=i(84280),o=(i(67752),i(62033),i(94994));function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}var u,c=Object.create(HTMLInputElement.prototype),d=!1;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var p=Object.getOwnPropertyDescriptor(HTMLInputElement.prototype,"value");p&&p.configurable&&(d=!0)}function v(e,t){var i=e.sliderBubbleTrack.getBoundingClientRect(),n=(t-i.left)/i.width;o.ZP.getIsElementRTL(e)&&(n=(i.right-t)/i.width);var a=e.max-e.min;if("any"!==e.step&&0!==a){var l=(e.step||1)/a;n=Math.round(n/l)*l}return Math.min(Math.max(n,0),1)}function h(e,t){var i=(e.max-e.min)*t;if("any"!==e.step){var n=e.step||1;i=Math.round(i/n)*n}return i+=parseFloat(e.min),Math.min(Math.max(i,e.min),e.max)}function f(e){if(!e||!this.keyboardDragging&&!this.touched){var t=this,i=t.value;cancelAnimationFrame(t.updateValuesFrame),t.updateValuesFrame=requestAnimationFrame((function(){var e=t.backgroundLower;if(e){var n=(i-t.min)/(t.max-t.min);n*=100,e.style.width=n+"%"}t.markerContainerElement&&(t.triedAddingMarkers||function(e){e.markerInfo=[],e.getMarkerInfo&&(e.markerInfo=e.getMarkerInfo()),e.markerInfo.forEach((function(t){var i,n;e.markerContainerElement.insertAdjacentHTML("beforeend",(n="","chapterMarker"===(i=t).className&&(n=i.className,"string"==typeof i.name&&i.name.length&&(n="".concat(i.className," marker-").concat(i.name.substring(0,100).toLowerCase().replace(" ","-")))),'<span class="material-icons sliderMarker '.concat(n,'" aria-hidden="true"></span>')))})),e.markerElements=e.markerContainerElement.querySelectorAll(".sliderMarker"),e.triedAddingMarkers=!0}(t),function(e,t){if(e.markerInfo&&e.markerInfo.length&&e.markerElements&&e.markerElements.length)for(var i=0,n=e.markerElements.length;i<n;i++)e.markerInfo.length>i&&m(e,h(e,e.markerInfo[i].progress),e.markerElements[i],t)}(t,i))}))}}function b(e,t,i){requestAnimationFrame((function(){var n=e.sliderBubbleTrack.getBoundingClientRect(),a=i.getBoundingClientRect(),l=n.width*t/100;o.ZP.getIsElementRTL(e)&&(l=n.width-l),l=Math.min(Math.max(l,a.width/2),n.width-a.width/2),i.style.left=l+"px",t=e.getBubbleHtml?e.getBubbleHtml(t):'<h1 class="sliderBubbleText">'+(t=e.getBubbleText?e.getBubbleText(t):h(e,t/100).toLocaleString())+"</h1>",i.innerHTML=t}))}function m(e,t,i,n){requestAnimationFrame((function(){var a=e.sliderBubbleTrack.getBoundingClientRect(),l=i.getBoundingClientRect();if(a.width&&l.width){var r=a.width*t/100-l.width/2;r=Math.min(Math.max(r,-l.width/2),a.width-l.width/2),i.style.left=r+"px",n>=t?(i.classList.remove("unwatched"),i.classList.add("watched")):(i.classList.add("unwatched"),i.classList.remove("watched"))}}))}function g(e,t){(function(e){e.keyboardDragging=!0,clearTimeout(u),u=setTimeout((function(){!function(e){clearTimeout(u),u=void 0,e.keyboardDragging=!1;var t=new Event("change",{bubbles:!0,cancelable:!1});e.dispatchEvent(t)}(e)}),1e3)})(e),e.value=Math.max(e.min,Math.min(e.max,parseFloat(e.value)+t));var i=new Event("input",{bubbles:!0,cancelable:!1});e.dispatchEvent(i)}function y(e){switch(r.ZP.getKeyName(e)){case"ArrowLeft":case"Left":g(this,-this.keyboardStepDown||-1),e.preventDefault(),e.stopPropagation();break;case"ArrowRight":case"Right":g(this,this.keyboardStepUp||1),e.preventDefault(),e.stopPropagation()}}function S(e,t,i){var n=e.style;o.ZP.getIsRTL()?n.right=Math.max(t,0)+"%":n.left=Math.max(t,0)+"%";var a=i-t;n.width=Math.max(Math.min(a,100),0)+"%"}c.attachedCallback=function(){if("true"!==this.getAttribute("data-embyslider")){this.setAttribute("data-embyslider","true"),this.classList.add("mdl-slider"),this.classList.add("mdl-js-slider"),n.Z.edge&&this.classList.add("slider-browser-edge"),l.Z.mobile||this.classList.add("mdl-slider-hoverthumb"),l.Z.tv&&this.classList.add("show-focus");var e=a.ZP.parentWithClass(this,"sliderContainer-settings");if(e&&this.getAttribute("label")){var t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label"),t.classList.add("sliderLabel"),t.htmlFor=this.id,e.insertBefore(t,e.firstChild)}var i=this.parentNode;i.classList.add("mdl-slider-container"),i.insertAdjacentHTML("beforeend",'<div class="mdl-slider-background-flex-container"><div class="mdl-slider-background-flex"><div class="mdl-slider-background-flex-inner"><div class="mdl-slider-background-upper"></div><div class="mdl-slider-background-lower"></div></div></div></div><div class="sliderBubbleTrack"><div class="sliderBubble hide"></div></div>'),this.sliderBubbleTrack=i.querySelector(".sliderBubbleTrack"),this.backgroundLower=i.querySelector(".mdl-slider-background-lower"),this.backgroundUpper=i.querySelector(".mdl-slider-background-upper");var r=i.querySelector(".sliderBubble"),o=r.classList.contains("hide");this.markerContainerElement=i.querySelector(".sliderMarkerContainer"),a.ZP.addEventListener(this,"input",(function(){var e,t,i,n;this.dragging=!0,"true"!==this.dataset.sliderKeepProgress&&f.call(this),b(this,100*(e=this,t=this.value,n=0!==(i=e.max-e.min)?(t-e.min)/i:0,Math.min(Math.max(n,0),1)),r),o&&(r.classList.remove("hide"),o=!1)}),{passive:!0}),a.ZP.addEventListener(this,"change",(function(){this.dragging=!1,"true"===this.dataset.sliderKeepProgress&&f.call(this),r.classList.add("hide"),o=!0}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointermove":"mousemove",(function(e){this.dragging||(b(this,100*v(this,e.clientX),r),o&&(r.classList.remove("hide"),o=!1))}),{passive:!0}),a.ZP.addEventListener(this,window.PointerEvent?"pointerleave":"mouseleave",(function(){r.classList.add("hide"),o=!0}),{passive:!0}),n.Z.iOS&&(a.ZP.addEventListener(this,"touchstart",(function(e){if(1===e.targetTouches.length){this.touched=!0;var t=v(this,e.targetTouches[0].clientX);this.value=h(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1})),e.preventDefault()}}),{capture:!0}),a.ZP.addEventListener(this,"touchmove",(function(e){if(this.touched&&1===e.targetTouches.length){var t=v(this,e.targetTouches[0].clientX);this.value=h(this,t),this.dispatchEvent(new Event("input",{bubbles:!0,cancelable:!1}))}}),{passive:!0}),a.ZP.addEventListener(this,"touchend",(function(){var e=this;setTimeout((function(){e.touched=!1,e.dispatchEvent(new Event("change",{bubbles:!0,cancelable:!1}))}),0)}),{passive:!0})),d?this.addEventListener("valueset",f.bind(this,!0)):((u=(s=this).interval)&&clearInterval(u),s.interval=setInterval(f.bind(s,!0),100))}var s,u},c.enableKeyboardDragging=function(){this.keyboardDraggingEnabled||(this.addEventListener("keydown",y),this.keyboardDraggingEnabled=!0)},c.setKeyboardSteps=function(e,t){this.keyboardStepDown=e||t||1,this.keyboardStepUp=t||e||1},c.setBufferedRanges=function(e,t,i){var n=this.backgroundUpper;if(n){null!=t&&(e=function(e,t){return t?e.map((function(e){return{start:e.start/t*100,end:e.end/t*100}})):[]}(e,t),i=i/t*100);var a,l=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return s(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,a=function(){};return{s:a,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var l,r=!0,o=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return r=e.done,e},e:function(e){o=!0,l=e},f:function(){try{r||null==i.return||i.return()}finally{if(o)throw l}}}}(e);try{for(l.s();!(a=l.n()).done;){var r=a.value;if(!(null!=i&&i>=r.end))return void S(n,r.start,r.end)}}catch(e){l.e(e)}finally{l.f()}S(n,0,0)}},c.setIsClear=function(e){var t=this.backgroundLower;t&&(e?t.classList.add("mdl-slider-background-lower-clear"):t.classList.remove("mdl-slider-background-lower-clear"))},c.detachedCallback=function(){var e=this.interval;e&&clearInterval(e),this.interval=null,this.backgroundUpper=null,this.backgroundLower=null},document.registerElement("emby-slider",{prototype:c,extends:"input"})}}]);