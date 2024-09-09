"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[73468,62882,96084,40501],{73706:function(e,t,i){var o=i(22622),n=i(5898),a=i(90381);t.Ay={getVideoQualityOptions:function(e){var t,i=e.currentMaxBitrate,l=e.videoWidth,r=e.videoHeight;l/r<16/9&&(l=r*(16/9));var c=null==e.maxVideoWidth?a.A.maxVideoWidth():e.maxVideoWidth,s=(c<0?null===(t=o.g.screen())||void 0===t?void 0:t.maxAllowedWidth:c)||4096,d=l||4096,u=[],p={name:n.Ay.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&u.push(p),d>=3800&&s>=1930&&(u.push({name:"4K - 120 Mbps",maxHeight:2160,bitrate:12e7}),u.push({name:"4K - 80 Mbps",maxHeight:2160,bitrate:8e7})),d>=1900&&s>=1290&&(u.push({name:"1080p - 60 Mbps",maxHeight:1080,bitrate:6e7}),u.push({name:"1080p - 40 Mbps",maxHeight:1080,bitrate:4e7}),u.push({name:"1080p - 20 Mbps",maxHeight:1080,bitrate:2e7}),u.push({name:"1080p - 15 Mbps",maxHeight:1080,bitrate:15e6}),u.push({name:"1080p - 10 Mbps",maxHeight:1080,bitrate:1e7})),d>=1260&&s>=650&&(u.push({name:"720p - 8 Mbps",maxHeight:720,bitrate:8e6}),u.push({name:"720p - 6 Mbps",maxHeight:720,bitrate:6e6}),u.push({name:"720p - 4 Mbps",maxHeight:720,bitrate:4e6})),d>=620&&(u.push({name:"480p - 3 Mbps",maxHeight:480,bitrate:3e6}),u.push({name:"480p - 1.5 Mbps",maxHeight:480,bitrate:15e5}),u.push({name:"480p - 720 kbps",maxHeight:480,bitrate:72e4})),u.push({name:"360p - 420 kbps",maxHeight:360,bitrate:42e4}),i){for(var b=u.length-1,h=0,v=u.length;h<v;h++){var y=u[h];if(y.bitrate>0&&y.bitrate<=i){b=h;break}}var m=u[b];e.isAutomaticBitrateEnabled?p.autoText=m.name:m.selected=!0}return u},getAudioQualityOptions:function(e){var t=e.currentMaxBitrate,i=[],o={name:n.Ay.translate("Auto"),bitrate:0,selected:e.isAutomaticBitrateEnabled};if(e.enableAuto&&i.push(o),i.push({name:"2 Mbps",bitrate:2e6}),i.push({name:"1.5 Mbps",bitrate:15e5}),i.push({name:"1 Mbps",bitrate:1e6}),i.push({name:"320 kbps",bitrate:32e4}),i.push({name:"256 kbps",bitrate:256e3}),i.push({name:"192 kbps",bitrate:192e3}),i.push({name:"128 kbps",bitrate:128e3}),i.push({name:"96 kbps",bitrate:96e3}),i.push({name:"64 kbps",bitrate:64e3}),t){for(var a=i.length-1,l=0,r=i.length;l<r;l++){var c=i[l];if(c.bitrate>0&&c.bitrate<=t){a=l;break}}var s=i[a];e.isAutomaticBitrateEnabled?o.autoText=s.name:s.selected=!0}return i}}},77506:function(e,t,i){i.r(t),i.d(t,{default:function(){return P}}),i(29305),i(32733),i(84701),i(81678),i(24776),i(69892),i(44962),i(86584),i(89336),i(4754),i(94),i(36947),i(78557),i(96054),i(95021),i(73687),i(83994),i(82367);var o=i(90381),n=i(22622),a=i(34789),l=i(9164),r=i(73706),c=i(5898),s=i(8566),d=i(44797),u=(i(63001),i(77157),i(86191)),p=i(50764),b=i(22696),h=i.n(b);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function y(e,t){for(var i=0;i<t.length;i++){var o=t[i];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,m(o.key),o)}}function m(e){var t=function(e,t){if("object"!=v(e)||!e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!=v(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==v(t)?t:t+""}function f(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,o=Array(t);i<t;i++)o[i]=e[i];return o}function S(e){e.innerHTML=[5,10,15,20,25,30].map((function(e){return{name:c.Ay.translate("ValueSeconds",e),value:1e3*e}})).map((function(e){return'<option value="'.concat(e.value,'">').concat(e.name,"</option>")})).join("")}function A(e,t,i,n){var a="Audio"===i?r.Ay.getAudioQualityOptions({currentMaxBitrate:o.A.maxStreamingBitrate(t,i),isAutomaticBitrateEnabled:o.A.enableAutomaticBitrateDetection(t,i),enableAuto:!0}):r.Ay.getVideoQualityOptions({currentMaxBitrate:o.A.maxStreamingBitrate(t,i),isAutomaticBitrateEnabled:o.A.enableAutomaticBitrateDetection(t,i),enableAuto:!0,maxVideoWidth:n});e.innerHTML=a.map((function(e){return'<option value="'.concat(e.bitrate||"",'">').concat(e.name,"</option>")})).join("")}function k(e,t,i){A(e,t,i),o.A.enableAutomaticBitrateDetection(t,i)?e.value="":e.value=o.A.maxStreamingBitrate(t,i)}function x(e,t){var i=r.Ay.getVideoQualityOptions({currentMaxBitrate:o.A.maxChromecastBitrate(),isAutomaticBitrateEnabled:!o.A.maxChromecastBitrate(),enableAuto:!0,maxVideoWidth:t});e.innerHTML=i.map((function(e){return'<option value="'.concat(e.bitrate||"",'">').concat(e.name,"</option>")})).join(""),e.value=o.A.maxChromecastBitrate()||""}function g(e,t,i){e.value?(o.A.maxStreamingBitrate(t,i,e.value),o.A.enableAutomaticBitrateDetection(t,i,!1)):o.A.enableAutomaticBitrateDetection(t,i,!0)}function C(e,t,i,l,r){var d=r.getCurrentUserId(),u=t.Id;!function(e,t,i){if(t.Policy.EnableVideoPlaybackTranscoding?e.querySelector(".videoQualitySection").classList.remove("hide"):e.querySelector(".videoQualitySection").classList.add("hide"),n.g.supports("multiserver"))return e.querySelector(".fldVideoInNetworkQuality").classList.remove("hide"),e.querySelector(".fldVideoInternetQuality").classList.remove("hide"),void(t.Policy.EnableAudioPlaybackTranscoding?e.querySelector(".musicQualitySection").classList.remove("hide"):e.querySelector(".musicQualitySection").classList.add("hide"));i.getEndpointInfo().then((function(i){i.IsInNetwork?(e.querySelector(".fldVideoInNetworkQuality").classList.remove("hide"),e.querySelector(".fldVideoInternetQuality").classList.add("hide"),e.querySelector(".musicQualitySection").classList.add("hide")):(e.querySelector(".fldVideoInNetworkQuality").classList.add("hide"),e.querySelector(".fldVideoInternetQuality").classList.remove("hide"),t.Policy.EnableAudioPlaybackTranscoding?e.querySelector(".musicQualitySection").classList.remove("hide"):e.querySelector(".musicQualitySection").classList.add("hide"))}))}(e,t,r),a.A.safari&&e.querySelector(".fldEnableHi10p").classList.remove("hide"),e.querySelector("#selectAllowedAudioChannels").value=i.allowedAudioChannels(),r.getCultures().then((function(i){!function(e,t){var i="";i+="<option value=''>".concat(c.Ay.translate("AnyLanguage"),"</option>");for(var o=0,n=t.length;o<n;o++){var a=t[o];i+="<option value='".concat(a.ThreeLetterISOLanguageName,"'>").concat(a.DisplayName,"</option>")}e.innerHTML=i}(e.querySelector("#selectAudioLanguage"),i),e.querySelector("#selectAudioLanguage",e).value=t.Configuration.AudioLanguagePreference||"",e.querySelector(".chkEpisodeAutoPlay").checked=t.Configuration.EnableNextEpisodeAutoPlay||!1})),n.g.supports("externalplayerintent")&&u===d?e.querySelector(".fldExternalPlayer").classList.remove("hide"):e.querySelector(".fldExternalPlayer").classList.add("hide"),u===d&&(t.Policy.EnableVideoPlaybackTranscoding||t.Policy.EnableAudioPlaybackTranscoding)?(e.querySelector(".qualitySections").classList.remove("hide"),n.g.supports("chromecast")&&t.Policy.EnableVideoPlaybackTranscoding?e.querySelector(".fldChromecastQuality").classList.remove("hide"):e.querySelector(".fldChromecastQuality").classList.add("hide")):(e.querySelector(".qualitySections").classList.add("hide"),e.querySelector(".fldChromecastQuality").classList.add("hide")),e.querySelector(".chkPlayDefaultAudioTrack").checked=t.Configuration.PlayDefaultAudioTrack||!1,e.querySelector(".chkPreferFmp4HlsContainer").checked=i.preferFmp4HlsContainer(),e.querySelector(".chkEnableDts").checked=o.A.enableDts(),e.querySelector(".chkEnableTrueHd").checked=o.A.enableTrueHd(),e.querySelector(".chkEnableHi10p").checked=o.A.enableHi10p(),e.querySelector(".chkEnableCinemaMode").checked=i.enableCinemaMode(),e.querySelector("#selectAudioNormalization").value=i.selectAudioNormalization(),e.querySelector(".chkEnableNextVideoOverlay").checked=i.enableNextVideoInfoOverlay(),e.querySelector(".chkRememberAudioSelections").checked=t.Configuration.RememberAudioSelections||!1,e.querySelector(".chkRememberSubtitleSelections").checked=t.Configuration.RememberSubtitleSelections||!1,e.querySelector(".chkExternalVideoPlayer").checked=o.A.enableSystemExternalPlayers(),e.querySelector(".chkLimitSupportedVideoResolution").checked=o.A.limitSupportedVideoResolution(),e.querySelector("#selectPreferredTranscodeVideoCodec").value=o.A.preferredTranscodeVideoCodec(),e.querySelector("#selectPreferredTranscodeVideoAudioCodec").value=o.A.preferredTranscodeVideoAudioCodec(),k(e.querySelector(".selectVideoInNetworkQuality"),!0,"Video"),k(e.querySelector(".selectVideoInternetQuality"),!1,"Video"),k(e.querySelector(".selectMusicInternetQuality"),!1,"Audio"),x(e.querySelector(".selectChromecastVideoQuality"));var p,b=e.querySelector(".selectChromecastVersion"),v="",y=function(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return f(e,t);var i={}.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?f(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var o=0,n=function(){};return{s:n,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,l=!0,r=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return l=e.done,e},e:function(e){r=!0,a=e},f:function(){try{l||null==i.return||i.return()}finally{if(r)throw a}}}}(l.CastReceiverApplications);try{for(y.s();!(p=y.n()).done;){var m=p.value;v+="<option value='".concat(h()(m.Id),"'>").concat(h()(m.Name),"</option>")}}catch(e){y.e(e)}finally{y.f()}b.innerHTML=v,b.value=t.Configuration.CastReceiverId,e.querySelector(".selectMaxVideoWidth").value=o.A.maxVideoWidth();var A=e.querySelector(".selectSkipForwardLength");S(A),A.value=i.skipForwardLength();var g=e.querySelector(".selectSkipBackLength");S(g),g.value=i.skipBackLength(),s.Ay.hide()}function L(e,t,i){e.value=t,e.selectedIndex<0&&(e.value=i)}function E(e){var t=this.options.element,i=t.querySelector(".selectVideoInNetworkQuality"),o=t.querySelector(".selectVideoInternetQuality"),n=t.querySelector(".selectChromecastVideoQuality"),a=i.value,l=o.value,r=n.value,c=parseInt(e.target.value||"0",10)||0;A(i,!0,"Video",c),A(o,!1,"Video",c),x(n,c),L(i,a,""),L(o,l,""),L(n,r,"")}function V(e){var t=this,i=u.A.getApiClient(t.options.serverId),n=t.options.userId,a=t.options.userSettings;return a.setUserInfo(n,i).then((function(){var e=t.options.enableSaveConfirmation;!function(e,t,i,n,a,l){s.Ay.show(),a.getUser(i).then((function(i){(function(e,t,i,n){return o.A.enableSystemExternalPlayers(e.querySelector(".chkExternalVideoPlayer").checked),o.A.maxChromecastBitrate(e.querySelector(".selectChromecastVideoQuality").value),o.A.maxVideoWidth(e.querySelector(".selectMaxVideoWidth").value),o.A.limitSupportedVideoResolution(e.querySelector(".chkLimitSupportedVideoResolution").checked),o.A.preferredTranscodeVideoCodec(e.querySelector("#selectPreferredTranscodeVideoCodec").value),o.A.preferredTranscodeVideoAudioCodec(e.querySelector("#selectPreferredTranscodeVideoAudioCodec").value),o.A.enableDts(e.querySelector(".chkEnableDts").checked),o.A.enableTrueHd(e.querySelector(".chkEnableTrueHd").checked),o.A.enableHi10p(e.querySelector(".chkEnableHi10p").checked),g(e.querySelector(".selectVideoInNetworkQuality"),!0,"Video"),g(e.querySelector(".selectVideoInternetQuality"),!1,"Video"),g(e.querySelector(".selectMusicInternetQuality"),!1,"Audio"),i.allowedAudioChannels(e.querySelector("#selectAllowedAudioChannels").value),t.Configuration.AudioLanguagePreference=e.querySelector("#selectAudioLanguage").value,t.Configuration.PlayDefaultAudioTrack=e.querySelector(".chkPlayDefaultAudioTrack").checked,t.Configuration.EnableNextEpisodeAutoPlay=e.querySelector(".chkEpisodeAutoPlay").checked,i.preferFmp4HlsContainer(e.querySelector(".chkPreferFmp4HlsContainer").checked),i.enableCinemaMode(e.querySelector(".chkEnableCinemaMode").checked),i.selectAudioNormalization(e.querySelector("#selectAudioNormalization").value),i.enableNextVideoInfoOverlay(e.querySelector(".chkEnableNextVideoOverlay").checked),t.Configuration.RememberAudioSelections=e.querySelector(".chkRememberAudioSelections").checked,t.Configuration.RememberSubtitleSelections=e.querySelector(".chkRememberSubtitleSelections").checked,t.Configuration.CastReceiverId=e.querySelector(".selectChromecastVersion").value,i.skipForwardLength(e.querySelector(".selectSkipForwardLength").value),i.skipBackLength(e.querySelector(".selectSkipBackLength").value),n.updateUserConfiguration(t.Id,t.Configuration)})(t,i,n,a).then((function(){s.Ay.hide(),l&&(0,p.A)(c.Ay.translate("SettingsSaved")),d.A.trigger(e,"saved")}),(function(){s.Ay.hide()}))}))}(t,t.options.element,n,a,i,e)})),e&&e.preventDefault(),!1}function q(e,t){e.element.innerHTML=c.Ay.translateHtml('<form style="margin:0 auto"> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle"> ${HeaderAudioSettings} </h2> <div class="selectContainer"> <select is="emby-select" id="selectAllowedAudioChannels" label="${LabelAllowedAudioChannels}"> <option value="-1">${Auto}</option> <option value="1">${LabelSelectMono}</option> <option value="2">${LabelSelectStereo}</option> <option value="6">5.1 ${LabelSelectAudioChannels}</option> <option value="8">7.1 ${LabelSelectAudioChannels}</option> </select> </div> <div class="selectContainer"> <select is="emby-select" id="selectAudioLanguage" label="${LabelAudioLanguagePreference}"></select> </div> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" class="chkPlayDefaultAudioTrack"/> <span>${LabelPlayDefaultAudioTrack}</span> </label> </div> <div class="qualitySections hide"> <div class="verticalSection verticalSection-extrabottompadding videoQualitySection hide"> <h2 class="sectionTitle"> ${HeaderVideoQuality} </h2> <div class="selectContainer fldVideoInNetworkQuality hide"> <select is="emby-select" class="selectVideoInNetworkQuality" label="${LabelHomeNetworkQuality}"></select> </div> <div class="selectContainer fldVideoInternetQuality hide"> <select is="emby-select" class="selectVideoInternetQuality" label="${LabelInternetQuality}"></select> </div> <div class="selectContainer fldChromecastQuality hide"> <select is="emby-select" class="selectChromecastVideoQuality" label="${LabelMaxChromecastBitrate}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectMaxVideoWidth" label="${LabelMaxVideoResolution}"> <option value="0">${Auto}</option> <option value="-1">${ScreenResolution}</option> <option value="640">360p</option> <option value="852">480p</option> <option value="1280">720p</option> <option value="1920">1080p</option> <option value="3840">4K</option> <option value="7680">8K</option> </select> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkLimitSupportedVideoResolution"/> <span>${LimitSupportedVideoResolution}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LimitSupportedVideoResolutionHelp}</div> </div> </div> <div class="verticalSection verticalSection-extrabottompadding musicQualitySection hide"> <h2> ${HeaderMusicQuality} </h2> <div class="selectContainer"> <select is="emby-select" class="selectMusicInternetQuality" label="${LabelInternetQuality}"></select> </div> </div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle"> ${TabAdvanced} </h2> <div class="selectContainer"> <select is="emby-select" id="selectAudioNormalization" label="${LabelSelectAudioNormalization}"> <option value="Off">${Off}</option> <option value="TrackGain">${LabelTrackGain}</option> <option value="AlbumGain">${LabelAlbumGain}</option> </select> <div class="fieldDescription">${SelectAudioNormalizationHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkPreferFmp4HlsContainer"/> <span>${PreferFmp4HlsContainer}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferFmp4HlsContainerHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription cinemaModeOptions"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableCinemaMode"/> <span>${EnableCinemaMode}</span> </label> <div class="fieldDescription checkboxFieldDescription">${CinemaModeConfigurationHelp}</div> </div> <div class="checkboxContainer fldEpisodeAutoPlay"> <label> <input type="checkbox" is="emby-checkbox" class="chkEpisodeAutoPlay"/> <span>${PlayNextEpisodeAutomatically}</span> </label> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkRememberAudioSelections"/> <span>${RememberAudioSelections}</span> </label> <div class="fieldDescription checkboxFieldDescription">${RememberAudioSelectionsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" class="chkRememberSubtitleSelections"/> <span>${RememberSubtitleSelections}</span> </label> <div class="fieldDescription checkboxFieldDescription">${RememberSubtitleSelectionsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldEnableNextVideoOverlay"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableNextVideoOverlay"/> <span>${EnableNextVideoInfoOverlay}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableNextVideoInfoOverlayHelp}</div> </div> <div class="checkboxContainer fldExternalPlayer checkboxContainer-withDescription hide"> <label> <input type="checkbox" is="emby-checkbox" class="chkExternalVideoPlayer"/> <span>${EnableExternalVideoPlayers}</span> </label> <div class="fieldDescription checkboxFieldDescription"> <div class="labelNativeExternalPlayers">${EnableExternalVideoPlayersHelp}</div> </div> </div> <div class="selectContainer"> <select is="emby-select" class="selectChromecastVersion" label="${LabelChromecastVersion}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectSkipForwardLength" label="${LabelSkipForwardLength}"></select> </div> <div class="selectContainer"> <select is="emby-select" class="selectSkipBackLength" label="${LabelSkipBackLength}"></select> </div> </div> <div class="verticalSection verticalSection-extrabottompadding"> <h2 class="sectionTitle"> ${HeaderVideoAdvanced} </h2> <div class="checkboxContainer checkboxContainer-withDescription fldEnableDts"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableDts"/> <span>${EnableDts}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableDtsHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldEnableTrueHd"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableTrueHd"/> <span>${EnableTrueHd}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableTrueHdHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldEnableHi10p hide"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableHi10p"/> <span>${EnableHi10p}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnableHi10pHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectPreferredTranscodeVideoCodec" label="${LabelSelectPreferredTranscodeVideoCodec}"> <option value="">${Auto}</option> <option value="h264">H264</option> <option value="hevc">HEVC</option> <option value="av1">AV1</option> </select> <div class="fieldDescription">${SelectPreferredTranscodeVideoCodecHelp}</div> </div> <div class="selectContainer"> <select is="emby-select" id="selectPreferredTranscodeVideoAudioCodec" label="${LabelSelectPreferredTranscodeVideoAudioCodec}"> <option value="">${Auto}</option> <option value="aac">AAC</option> <option value="ac3">AC3</option> <option value="alac">ALAC</option> <option value="dts">DTS</option> <option value="flac">FLAC</option> <option value="opus">Opus</option> </select> <div class="fieldDescription">${SelectPreferredTranscodeVideoAudioCodecHelp}</div> </div> </div> <button is="emby-button" type="submit" class="raised button-submit block btnSave hide"> <span>${Save}</span> </button> </form> ',"core"),e.element.querySelector("form").addEventListener("submit",V.bind(t)),e.enableSaveButton&&e.element.querySelector(".btnSave").classList.remove("hide"),e.element.querySelector(".selectMaxVideoWidth").addEventListener("change",E.bind(t)),t.loadData(),e.autoFocus&&l.A.autoFocus(e.element)}var w=function(){return e=function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,q(t,this)},t=[{key:"loadData",value:function(){var e=this,t=e.options.element;s.Ay.show();var i=e.options.userId,o=u.A.getApiClient(e.options.serverId),n=e.options.userSettings;o.getUser(i).then((function(a){o.getSystemInfo().then((function(l){n.setUserInfo(i,o).then((function(){e.dataLoaded=!0,C(t,a,n,l,o)}))}))}))}},{key:"submit",value:function(){V.call(this)}},{key:"destroy",value:function(){this.options=null}}],t&&y(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}(),I=w,T=i(82885),H=i(84069),D=T.UserSettings;function P(e,t){var i,o=t.userId||ApiClient.getCurrentUserId(),n=o===ApiClient.getCurrentUserId()?T:new D;e.addEventListener("viewshow",(function(){i?i.loadData():i=new I({serverId:ApiClient.serverId(),userId:o,element:e.querySelector(".settingsContainer"),userSettings:n,enableSaveButton:!0,enableSaveConfirmation:!0,autoFocus:H.default.isEnabled()})})),e.addEventListener("viewdestroy",(function(){i&&(i.destroy(),i=null)}))}},63001:function(e,t,i){var o=i(46782),n=i(34789),a=i(62882),l=(i(69177),Object.create(HTMLSelectElement.prototype));function r(){return!(!n.A.edgeUwp&&!n.A.xboxOne&&(n.A.tizen||n.A.orsay||n.A.web0s||!n.A.tv&&o.A.tv))}function c(e){var t=s(e),i=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:i}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=new Event("change",{bubbles:!1,cancelable:!0});e.dispatchEvent(t)}(e)}))}function s(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=s(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=s(this);e&&e.classList.remove("selectLabelFocused")}function p(e){e.button||r()||(e.preventDefault(),c(this))}function b(e){switch(e.keyCode){case 13:return void(r()||(e.preventDefault(),c(this)));case 37:case 38:case 39:case 40:return void(o.A.tv&&e.preventDefault())}}var h=0;l.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),o.A.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",p),this.addEventListener("keydown",b),this.addEventListener("focus",d),this.addEventListener("blur",u)},l.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,i=this.ownerDocument.createElement("label");i.innerText=this.getAttribute("label")||"",i.classList.add("selectLabel"),i.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(i,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},l.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:l,extends:"select"})},62882:function(e,t,i){i.r(t),i.d(t,{show:function(){return u}});var o=i(22696),n=i.n(o),a=i(79754),l=i(46782),r=i(5898),c=i(47629),s=(i(10353),function(e){var t="function"==typeof Symbol&&Symbol.iterator,i=t&&e[t],o=0;if(i)return i.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&o>=e.length&&(e=void 0),{value:e&&e[o++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")});function d(e,t,o){Promise.resolve().then(i.bind(i,10838)).then((function(i){var n=o?"on":"off";i.centerFocus[n](e,t)})).catch((function(e){console.warn("Error in centerFocus",e)}))}function u(e){var t,i,o,u={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};l.A.tv?(u.size="fullscreen",o=!0,u.autoFocus=!0):(u.modal=!1,u.entryAnimation=e.entryAnimation,u.exitAnimation=e.exitAnimation,u.entryAnimationDuration=e.entryAnimationDuration||140,u.exitAnimationDuration=e.exitAnimationDuration||100,u.autoFocus=!1);var p=a.default.createDialog(u);o?p.classList.add("actionsheet-fullscreen"):p.classList.add("actionsheet-not-fullscreen"),p.classList.add("actionSheet"),e.dialogClass&&p.classList.add(e.dialogClass);var b="",h=l.A.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",v="";e.items.length>20&&(v+="min-width:"+(c.Ay.getWindowSize().innerWidth>=300?240:200)+"px;");var y,m=!1,f=[];try{for(var S=s(e.items),A=S.next();!A.done;A=S.next())(y=(L=A.value).icon||(L.selected?"check":null))&&(m=!0),f.push(y||"")}catch(e){t={error:e}}finally{try{A&&!A.done&&(i=S.return)&&i.call(S)}finally{if(t)throw t.error}}l.A.tv&&(b+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(r.Ay.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var k=e.title&&!m;k||l.A.tv?b+='<div class="actionSheetContent actionSheetContent-centered">':b+='<div class="actionSheetContent">',e.title&&(b+='<h1 class="actionSheetTitle">'+n()(e.title)+"</h1>"),e.text&&(b+='<p class="actionSheetText">'+n()(e.text)+"</p>");var x="actionSheetScroller";l.A.tv&&(x+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),b+='<div class="'+x+" "+h+'" style="'+v+'">';var g="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(g+=" listItem-border"),e.menuItemClass&&(g+=" "+e.menuItemClass),l.A.tv&&(g+=" listItem-focusscale"),l.A.mobile&&(g+=" actionsheet-xlargeFont");for(var C=0;C<e.items.length;C++){var L;(L=e.items[C]).divider?b+='<div class="actionsheetDivider"></div>':(b+="<button"+(L.selected&&l.A.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+g+'" data-id="'+(null==L.id||""===L.id?L.value:L.id)+'">',(y=f[C])?b+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(y,'" aria-hidden="true"></span>'):m&&!k&&(b+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),b+='<div class="listItemBody actionsheetListItemBody">',b+='<div class="listItemBodyText actionSheetItemText">',b+=n()(L.name||L.textContent||L.innerText),b+="</div>",L.secondaryText&&(b+='<div class="listItemBodyText secondary">'.concat(n()(L.secondaryText),"</div>")),b+="</div>",L.asideText&&(b+='<div class="listItemAside actionSheetItemAsideText">'.concat(n()(L.asideText),"</div>")),b+="</button>")}if(e.showCancel&&(b+='<div class="buttons">',b+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(r.Ay.translate("ButtonCancel"),"</button>"),b+="</div>"),b+="</div>",p.innerHTML=b,l.A.tv){var E=p.querySelector(".actionSheetScroller");E&&d(E,!1,!0)}var V=p.querySelector(".btnCloseActionSheet");V&&V.addEventListener("click",(function(){a.default.close(p)}));var q,w=null;return e.timeout&&(q=setTimeout((function(){a.default.close(p)}),e.timeout)),new Promise((function(t,i){var o=!1;p.addEventListener("click",(function(i){var n=c.Ay.parentWithClass(i.target,"actionSheetMenuItem");n&&(w=n.getAttribute("data-id"),e.resolveOnClick&&(Array.isArray(e.resolveOnClick)?-1!==e.resolveOnClick.indexOf(w)&&(t(w),o=!0):(t(w),o=!0)),a.default.close(p))})),p.addEventListener("close",(function(){if(l.A.tv){var n=p.querySelector(".actionSheetScroller");n&&d(n,!1,!1)}q&&(clearTimeout(q),q=void 0),o||(null!=w?(e.callback&&e.callback(w),t(w)):i(new Error("ActionSheet closed without resolving")))})),a.default.open(p).catch((function(e){console.warn("DialogHelper.open error",e)}));var n=e.positionTo&&"fullscreen"!==u.size?function(e,t,i){var o=c.Ay.getWindowSize(),n=o.innerHeight,a=o.innerWidth,l=function(e){var t,i,o=[];if(!document)return o;try{for(var n=s(e),a=n.next();!a.done;a=n.next()){var l=a.value.getBoundingClientRect();o.push({top:l.top,left:l.left,width:l.width,height:l.height})}}catch(e){t={error:e}}finally{try{a&&!a.done&&(i=n.return)&&i.call(n)}finally{if(t)throw t.error}}return o}([e])[0];"top"!==t.positionY&&(l.top+=(l.height||0)/2),l.left+=(l.width||0)/2;var r=i.offsetHeight||300,d=i.offsetWidth||160;l.top-=r/2,l.left-=d/2;var u=l.left+d-a,p=l.top+r-n;return u>0&&(l.left-=u+20),p>0&&(l.top-=p+20),l.top+=t.offsetTop||0,l.left+=t.offsetLeft||0,l.top=Math.max(l.top,10),l.left=Math.max(l.left,10),l}(e.positionTo,e,p):null;n&&(p.style.position="fixed",p.style.margin="0",p.style.left=n.left+"px",p.style.top=n.top+"px")}))}t.default={show:u}}}]);