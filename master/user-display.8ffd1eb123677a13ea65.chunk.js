"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1999],{76045:function(e,o,t){t.r(o),t.d(o,{default:function(){return C}}),t(61013),t(23938),t(52327),t(63238),t(99785);var i=t(47518),n=t(78695),a=t(66272),s=t(94389),l=t(27515),r=t(28469),p=t(44614),c=t(56705),u=t(47956),d=t(47005),v=(t(20716),t(45368),t(78066),t(38737),t(53913)),h=t(25152);function b(e,o){for(var t=0;t<o.length;t++){var i=o[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function m(e,o){u.Z.getThemes().then((function(t){e.innerHTML=t.map((function(e){return'<option value="'.concat(e.id,'">').concat(e.name,"</option>")})).join("");var i=t.find((function(e){return e.default}));e.value=o||i.id}))}function y(e){var o=this,t=v.Z.getApiClient(o.options.serverId),i=o.options.userId,a=o.options.userSettings;return a.setUserInfo(i,t).then((function(){var e=o.options.enableSaveConfirmation;!function(e,o,t,i,a,l){c.ZP.show(),a.getUser(t).then((function(t){(function(e,o,t,i){return o.Configuration.DisplayMissingEpisodes=e.querySelector(".chkDisplayMissingEpisodes").checked,s.M.supports("displaylanguage")&&t.language(e.querySelector("#selectLanguage").value),t.dateTimeLocale(e.querySelector(".selectDateTimeLocale").value),t.enableThemeSongs(e.querySelector("#chkThemeSong").checked),t.enableThemeVideos(e.querySelector("#chkThemeVideo").checked),t.theme(e.querySelector("#selectTheme").value),t.dashboardTheme(e.querySelector("#selectDashboardTheme").value),t.screensaver(e.querySelector(".selectScreensaver").value),t.libraryPageSize(e.querySelector("#txtLibraryPageSize").value),t.maxDaysForNextUp(e.querySelector("#txtMaxDaysForNextUp").value),t.enableFastFadein(e.querySelector("#chkFadein").checked),t.enableBlurhash(e.querySelector("#chkBlurhash").checked),t.enableBackdrops(e.querySelector("#chkBackdrops").checked),t.detailsBanner(e.querySelector("#chkDetailsBanner").checked),t.useEpisodeImagesInNextUpAndResume(e.querySelector("#chkUseEpisodeImagesInNextUp").checked),t.disableCustomCss(e.querySelector("#chkDisableCustomCss").checked),t.customCss(e.querySelector("#txtLocalCustomCss").value),o.Id===i.getCurrentUserId()&&u.Z.setTheme(t.theme()),n.Z.setLayout(e.querySelector(".selectLayout").value),i.updateUserConfiguration(o.Id,o.Configuration)})(o,t,i,a).then((function(){c.ZP.hide(),l&&(0,h.Z)(p.ZP.translate("SettingsSaved")),d.Events.trigger(e,"saved")}),(function(){c.ZP.hide()}))}))}(o,o.options.element,i,a,t,e)})),e&&e.preventDefault(),!1}var g=function(){function e(o){!function(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=o,function(e,o){e.element.innerHTML=p.ZP.translateHtml('<form style="margin:0 auto"> <h2 class="sectionTitle"> ${Display} </h2> <div class="selectContainer languageSection hide"> <select id="selectLanguage" is="emby-select" label="${LabelDisplayLanguage}"> <option value="">${Auto}</option> <option value="af">Afrikaans</option> <option value="ar">العربية</option> <option value="be-BY">Беларуская</option> <option value="bg-BG">Български</option> <option value="bn_BD">বাংলা (বাংলাদেশ)</option> <option value="ca">Català</option> <option value="cs">Čeština</option> <option value="cy">Cymraeg</option> <option value="da">Dansk</option> <option value="de">Deutsch</option> <option value="el">Ελληνικά</option> <option value="en-GB">English (United Kingdom)</option> <option value="en-US">English</option> <option value="eo">Esperanto</option> <option value="es">Español</option> <option value="es_419">Español americano</option> <option value="es-AR">Español (Argentina)</option> <option value="es_DO">Español (Dominicana)</option> <option value="es-MX">Español (México)</option> <option value="et">Eesti</option> <option value="fa">فارسی</option> <option value="fi">Suomi</option> <option value="fil">Filipino</option> <option value="fr">Français</option> <option value="fr-CA">Français (Canada)</option> <option value="gl">Galego</option> <option value="gsw">Schwiizerdütsch</option> <option value="he">עִבְרִית</option> <option value="hi-IN">हिन्दी</option> <option value="hr">Hrvatski </option> <option value="hu">Magyar</option> <option value="id">Bahasa Indonesia</option> <option value="is-IS">Íslenska</option> <option value="it">Italiano</option> <option value="ja">日本語</option> <option value="kk">Qazaqşa</option> <option value="ko">한국어</option> <option value="lt-LT">Lietuvių</option> <option value="lv">Latviešu</option> <option value="mk">Македонски</option> <option value="ml">മലയാളം</option> <option value="mr">मराठी</option> <option value="ms">Bahasa Melayu</option> <option value="nb">Norsk bokmål</option> <option value="ne">नेपाली</option> <option value="nl">Nederlands</option> <option value="nn">Norsk nynorsk</option> <option value="pa">ਪੰਜਾਬੀ</option> <option value="pl">Polski</option> <option value="pr">Pirate</option> <option value="pt">Português</option> <option value="pt-BR">Português (Brasil)</option> <option value="pt-PT">Português (Portugal)</option> <option value="ro">Românește</option> <option value="ru">Русский</option> <option value="sk">Slovenčina</option> <option value="sl-SI">Slovenščina</option> <option value="sq">Shqip</option> <option value="sr">Српски</option> <option value="sv">Svenska</option> <option value="ta">தமிழ்</option> <option value="te">తెలుగు</option> <option value="th">ภาษาไทย</option> <option value="tr">Türkçe</option> <option value="uk">Українська</option> <option value="ur_PK">اُردُو</option> <option value="vi">Tiếng Việt</option> <option value="zh-CN">汉语 (简化字)</option> <option value="zh-TW">漢語 (繁体字)</option> <option value="zh-HK">廣東話 (香港)</option> </select> <div class="fieldDescription"> <div>${LabelDisplayLanguageHelp}</div> <div class="learnHowToContributeContainer hide" style="margin-top:.25em"> <a is="emby-linkbutton" rel="noopener noreferrer" class="button-link" href="https://github.com/jellyfin/jellyfin" target="_blank">${LearnHowYouCanContribute}</a> </div> </div> </div> <div class="selectContainer fldDateTimeLocale hide"> <select is="emby-select" class="selectDateTimeLocale" label="${LabelDateTimeLocale}"> <option value="">${Auto}</option> <option value="af">Afrikaans</option> <option value="ar">العربية</option> <option value="be-BY">Беларуская</option> <option value="bg-BG">Български</option> <option value="bn_BD">বাংলা (বাংলাদেশ)</option> <option value="ca">Català</option> <option value="cs">Čeština</option> <option value="cy">Cymraeg</option> <option value="da">Dansk</option> <option value="de">Deutsch</option> <option value="el">Ελληνικά</option> <option value="en-GB">English (United Kingdom)</option> <option value="en-US">English</option> <option value="eo">Esperanto</option> <option value="es">Español</option> <option value="es_419">Español americano</option> <option value="es-AR">Español (Argentina)</option> <option value="es_DO">Español (Dominicana)</option> <option value="es-MX">Español (México)</option> <option value="et">Eesti</option> <option value="fa">فارسی</option> <option value="fi">Suomi</option> <option value="fil">Filipino</option> <option value="fr">Français</option> <option value="fr-CA">Français (Canada)</option> <option value="gl">Galego</option> <option value="gsw">Schwiizerdütsch</option> <option value="he">עִבְרִית</option> <option value="hi-IN">हिन्दी</option> <option value="hr">Hrvatski </option> <option value="hu">Magyar</option> <option value="id">Bahasa Indonesia</option> <option value="is-IS">Íslenska</option> <option value="it">Italiano</option> <option value="ja">日本語</option> <option value="kk">Qazaqşa</option> <option value="ko">한국어</option> <option value="lt-LT">Lietuvių</option> <option value="lv">Latviešu</option> <option value="mk">Македонски</option> <option value="ml">മലയാളം</option> <option value="mr">मराठी</option> <option value="ms">Bahasa Melayu</option> <option value="nb">Norsk bokmål</option> <option value="ne">नेपाली</option> <option value="nl">Nederlands</option> <option value="nn">Norsk nynorsk</option> <option value="pa">ਪੰਜਾਬੀ</option> <option value="pl">Polski</option> <option value="pr">Pirate</option> <option value="pt">Português</option> <option value="pt-BR">Português (Brasil)</option> <option value="pt-PT">Português (Portugal)</option> <option value="ro">Românește</option> <option value="ru">Русский</option> <option value="sk">Slovenčina</option> <option value="sl-SI">Slovenščina</option> <option value="sq">Shqip</option> <option value="sr">Српски</option> <option value="sv">Svenska</option> <option value="ta">தமிழ்</option> <option value="te">తెలుగు</option> <option value="th">ภาษาไทย</option> <option value="tr">Türkçe</option> <option value="uk">Українська</option> <option value="ur_PK">اُردُو</option> <option value="vi">Tiếng Việt</option> <option value="zh-CN">汉语 (简化字)</option> <option value="zh-TW">漢語 (繁体字)</option> <option value="zh-HK">廣東話 (香港)</option> </select> </div> <div class="selectContainer fldDisplayMode hide"> <select is="emby-select" class="selectLayout" label="${LabelDisplayMode}"> <option value="">${Auto}</option> <option value="desktop">${Desktop}</option> <option value="mobile">${Mobile}</option> <option value="tv">${TV}</option> </select> <div class="fieldDescription">${DisplayModeHelp}</div> <div class="fieldDescription">${LabelPleaseRestart}</div> </div> <div class="selectContainer"> <select id="selectTheme" is="emby-select" label="${LabelTheme}"></select> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkDisableCustomCss"/> <span>${DisableCustomCss}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelDisableCustomCss}</div> </div> <div class="inputContainer customCssContainer"> <textarea is="emby-textarea" id="txtLocalCustomCss" label="${LabelCustomCss}" class="textarea-mono"></textarea> <div class="fieldDescription">${LabelLocalCustomCss}</div> </div> <div class="selectContainer selectDashboardThemeContainer hide"> <select id="selectDashboardTheme" is="emby-select" label="${LabelDashboardTheme}"></select> </div> <div class="selectContainer hide selectScreensaverContainer"> <select is="emby-select" class="selectScreensaver" label="${LabelScreensaver}"></select> </div> <div class="inputContainer inputContainer-withDescription"> <input is="emby-input" type="number" id="txtLibraryPageSize" pattern="[0-9]*" required="required" min="0" max="1000" step="1" label="${LabelLibraryPageSize}"/> <div class="fieldDescription">${LabelLibraryPageSizeHelp}</div> </div> <div class="inputContainer inputContainer-withDescription"> <input is="emby-input" type="number" id="txtMaxDaysForNextUp" pattern="[0-9]*" required="required" min="0" max="1000" step="1" label="${LabelMaxDaysForNextUp}"/> <div class="fieldDescription">${LabelMaxDaysForNextUpHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkFadein"/> <span>${EnableFasterAnimations}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableFasterAnimationsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkBlurhash"/> <span>${EnableBlurHash}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableBlurHashHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkDetailsBanner"/> <span>${EnableDetailsBanner}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableDetailsBannerHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldBackdrops hide"> <label> <input type="checkbox" is="emby-checkbox" id="chkBackdrops"/> <span>${Backdrops}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableBackdropsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldThemeSong hide"> <label> <input type="checkbox" is="emby-checkbox" id="chkThemeSong"/> <span>${ThemeSongs}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableThemeSongsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldThemeVideo hide"> <label> <input type="checkbox" is="emby-checkbox" id="chkThemeVideo"/> <span>${ThemeVideos}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableThemeVideosHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldDisplayMissingEpisodes hide"> <label> <input type="checkbox" is="emby-checkbox" class="chkDisplayMissingEpisodes"/> <span>${DisplayMissingEpisodesWithinSeasons}</span> </label> <div class="fieldDescription checkboxFieldDescription">${DisplayMissingEpisodesWithinSeasonsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldUseEpisodeImagesInNextUp"> <label> <input type="checkbox" is="emby-checkbox" id="chkUseEpisodeImagesInNextUp"/> <span>${UseEpisodeImagesInNextUp}</span> </label> <div class="fieldDescription checkboxFieldDescription">${UseEpisodeImagesInNextUpHelp}</div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',"core"),e.element.querySelector("form").addEventListener("submit",y.bind(o)),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),o.loadData(e.autoFocus)}(o,this)}var o,t;return o=e,t=[{key:"loadData",value:function(e){var o=this,t=o.options.element;c.ZP.show();var u=o.options.userId,d=v.Z.getApiClient(o.options.serverId),h=o.options.userSettings;return d.getUser(u).then((function(v){return h.setUserInfo(u,d).then((function(){o.dataLoaded=!0,function(e,o,t){s.M.supports("displaylanguage")?e.querySelector(".languageSection").classList.remove("hide"):e.querySelector(".languageSection").classList.add("hide"),s.M.supports("displaymode")?e.querySelector(".fldDisplayMode").classList.remove("hide"):e.querySelector(".fldDisplayMode").classList.add("hide"),s.M.supports("externallinks")?e.querySelector(".learnHowToContributeContainer").classList.remove("hide"):e.querySelector(".learnHowToContributeContainer").classList.add("hide"),e.querySelector(".selectDashboardThemeContainer").classList.toggle("hide",!o.Policy.IsAdministrator),s.M.supports("screensaver")?e.querySelector(".selectScreensaverContainer").classList.remove("hide"):e.querySelector(".selectScreensaverContainer").classList.add("hide"),r.ZP.supportsLocalization()?e.querySelector(".fldDateTimeLocale").classList.remove("hide"):e.querySelector(".fldDateTimeLocale").classList.add("hide"),i.Z.tizen||i.Z.web0s?(e.querySelector(".fldBackdrops").classList.add("hide"),e.querySelector(".fldThemeSong").classList.add("hide"),e.querySelector(".fldThemeVideo").classList.add("hide")):(e.querySelector(".fldBackdrops").classList.remove("hide"),e.querySelector(".fldThemeSong").classList.remove("hide"),e.querySelector(".fldThemeVideo").classList.remove("hide")),m(e.querySelector("#selectTheme"),t.theme()),m(e.querySelector("#selectDashboardTheme"),t.dashboardTheme()),function(e,o){var t=e.querySelector(".selectScreensaver"),i=a.E.ofType("screensaver").map((function(e){return{name:e.name,value:e.id}}));i.unshift({name:p.ZP.translate("None"),value:"none"}),t.innerHTML=i.map((function(e){return'<option value="'.concat(e.value,'">').concat(e.name,"</option>")})).join(""),t.value=o.screensaver(),t.value||(t.value="none")}(e,t),e.querySelector(".chkDisplayMissingEpisodes").checked=o.Configuration.DisplayMissingEpisodes||!1,e.querySelector("#chkThemeSong").checked=t.enableThemeSongs(),e.querySelector("#chkThemeVideo").checked=t.enableThemeVideos(),e.querySelector("#chkFadein").checked=t.enableFastFadein(),e.querySelector("#chkBlurhash").checked=t.enableBlurhash(),e.querySelector("#chkBackdrops").checked=t.enableBackdrops(),e.querySelector("#chkDetailsBanner").checked=t.detailsBanner(),e.querySelector("#chkUseEpisodeImagesInNextUp").checked=t.useEpisodeImagesInNextUpAndResume(),e.querySelector("#chkDisableCustomCss").checked=t.disableCustomCss(),e.querySelector("#txtLocalCustomCss").value=t.customCss(),e.querySelector("#selectLanguage").value=t.language()||"",e.querySelector(".selectDateTimeLocale").value=t.dateTimeLocale()||"",e.querySelector("#txtLibraryPageSize").value=t.libraryPageSize(),e.querySelector("#txtMaxDaysForNextUp").value=t.maxDaysForNextUp(),e.querySelector(".selectLayout").value=n.Z.getSavedLayout()||"",function(e){i.Z.tizen||i.Z.web0s?e.querySelector(".fldDisplayMissingEpisodes").classList.add("hide"):e.querySelector(".fldDisplayMissingEpisodes").classList.remove("hide")}(e),c.ZP.hide()}(t,v,h),e&&l.Z.autoFocus(t)}))}))}},{key:"submit",value:function(){y.call(this)}},{key:"destroy",value:function(){this.options=null}}],t&&b(o.prototype,t),Object.defineProperty(o,"prototype",{writable:!1}),e}(),k=g,f=t(28978),S=t(6610),x=f.UserSettings;function C(e,o){var t,i=o.userId||ApiClient.getCurrentUserId(),n=i===ApiClient.getCurrentUserId()?f:new x;e.addEventListener("viewshow",(function(){t?t.loadData():t=new k({serverId:ApiClient.serverId(),userId:i,element:e.querySelector(".settingsContainer"),userSettings:n,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:S.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){t&&(t.destroy(),t=null)}))}},38737:function(e,o,t){t(32081),t(20252),t(99785);var i=t(1892),n=t.n(i),a=t(95760),s=t.n(a),l=t(38311),r=t.n(l),p=t(58192),c=t.n(p),u=t(38060),d=t.n(u),v=t(54865),h=t.n(v),b=t(6918),m={};function y(e,o){var t,i=this;function n(){if((!i.lineHeight||i.lineHeight<=0)&&(e.rows=1,t=i.getOffset(e),i.rows=e.rows||1,i.lineHeight=e.scrollHeight/i.rows-t/i.rows,i.maxAllowedHeight=i.lineHeight*o-t),i.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var n=0;e.scrollHeight-t>i.maxAllowedHeight?(e.style.overflowY="scroll",n=i.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",n=e.scrollHeight),e.style.height=n+"px"}void 0===o&&(o=999),i.getOffset=function(e){for(var o=window.getComputedStyle(e,null),t=["paddingTop","paddingBottom"],i=0,n=0;n<t.length;n++)i+=parseInt(o[t[n]]);return i},e.addEventListener("input",n),e.addEventListener("focus",n),e.addEventListener("valueset",n),n()}m.styleTagTransform=h(),m.setAttributes=c(),m.insert=r().bind(null,"head"),m.domAPI=s(),m.insertStyleElement=d(),n()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals,t(67752),t(83225);var g=Object.create(HTMLTextAreaElement.prototype),k=0;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var f=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(f&&f.configurable){var S=f.set;f.set=function(e){S.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",f)}}g.createdCallback=function(){this.id||(this.id="embytextarea"+k,k++)},g.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var e=this.parentNode,o=this.ownerDocument.createElement("label");o.innerHTML=this.getAttribute("label")||"",o.classList.add("textareaLabel"),o.htmlFor=this.id,e.insertBefore(o,this),this.addEventListener("focus",(function(){o.classList.add("textareaLabelFocused"),o.classList.remove("textareaLabelUnfocused")})),this.addEventListener("blur",(function(){o.classList.remove("textareaLabelFocused"),o.classList.add("textareaLabelUnfocused")})),this.label=function(e){o.innerHTML=e},new y(this)}},document.registerElement("emby-textarea",{prototype:g,extends:"textarea"})},6918:function(e,o,t){var i=t(54933),n=t.n(i),a=t(93476),s=t.n(a)()(n());s.push([e.id,".emby-textarea{-webkit-tap-highlight-color:rgba(0,0,0,0);box-sizing:border-box;color:inherit;display:block;font-family:inherit;font-size:inherit;font-weight:inherit;margin:0;margin-bottom:0!important;outline:none!important;padding:.35em .25em;width:100%}.emby-textarea::-moz-focus-inner{border:0}.textareaLabel{display:inline-block;margin-bottom:.25em;transition:all .2s ease-out}.emby-textarea+.fieldDescription{margin-top:.25em}",""]),o.Z=s}}]);