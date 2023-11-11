/*! For license information please see 6535.7e2094882e7610624806.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6535],{31214:function(e,t,a){a.d(t,{ZP:function(){return M}}),a(54134),a(91270),a(59139),a(56187),a(38690),a(89228),a(33096),a(9883),a(70753),a(61632),a(77337),a(39574),a(43908),a(91162),a(13227),a(84159),a(96626),a(81414),a(47134),a(66066),a(33370),a(37666),a(14011),a(11431),a(2663),a(54112),a(88646),a(19131),a(44901);var r,n,i=a(65009),o=a.n(i),c=a(94994),l=a(72365),s=(a(12291),a(15856),a(62033),'<h2>${HeaderLibrarySettings}</h2> <div class="selectContainer fldMetadataLanguage hide"> <select is="emby-select" id="selectLanguage" label="${LabelMetadataDownloadLanguage}"></select> </div> <div class="selectContainer fldMetadataCountry hide"> <select is="emby-select" id="selectCountry" label="${LabelCountry}"></select> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnablePhotosContainer"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnablePhotos" checked="checked"/> <span>${EnablePhotos}</span> </label> <div class="fieldDescription checkboxFieldDescription">${EnablePhotosHelp}</div> </div> <div class="inputContainer fldSeasonZeroDisplayName hide advanced"> <input is="emby-input" type="text" id="txtSeasonZeroName" label="${LabelSpecialSeasonsDisplayName}" value="Specials" required/> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedTitlesContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedTitles"/> <span>${PreferEmbeddedTitlesOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedTitlesOverFileNamesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedExtrasTitlesContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedExtrasTitles"/> <span>${PreferEmbeddedExtrasTitlesOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedExtrasTitlesOverFileNamesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableEmbeddedEpisodeInfosContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkEnableEmbeddedEpisodeInfos"/> <span>${PreferEmbeddedEpisodeInfosOverFileNames}</span> </label> <div class="fieldDescription checkboxFieldDescription">${PreferEmbeddedEpisodeInfosOverFileNamesHelp}</div> </div> <div class="selectContainer fldAllowEmbeddedSubtitlesContainer hide advanced" style="margin:2em 0"> <select is="emby-select" id="selectAllowEmbeddedSubtitles" label="${AllowEmbeddedSubtitles}"> <option value="AllowAll">${AllowEmbeddedSubtitlesAllowAllOption}</option> <option value="AllowText">${AllowEmbeddedSubtitlesAllowTextOption}</option> <option value="AllowImage">${AllowEmbeddedSubtitlesAllowImageOption}</option> <option value="AllowNone">${AllowEmbeddedSubtitlesAllowNoneOption}</option> </select> <div class="fieldDescription">${AllowEmbeddedSubtitlesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableRealtimeMonitor" checked="checked"/> <span>${LabelEnableRealtimeMonitor}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableRealtimeMonitorHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkEnableLUFSScanContainer advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkEnableLUFSScan" checked="checked"/> <span>${LabelEnableLUFSScan}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableLUFSScanHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkAutomaticallyAddToCollectionContainer hide advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkAutomaticallyAddToCollection"/> <span>${LabelAutomaticallyAddToCollection}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelAutomaticallyAddToCollectionHelp}</div> </div> <div class="metadataReaders hide advanced" style="margin-bottom:2em"> </div> <div class="metadataFetchers hide" style="margin-bottom:2em"> </div> <div class="selectContainer fldAutoRefreshInterval hide advanced" style="margin:2em 0"> <select is="emby-select" id="selectAutoRefreshInterval" label="${LabelAutomaticallyRefreshInternetMetadataEvery}"></select> <div class="fieldDescription">${MessageEnablingOptionLongerScans}</div> </div> <div class="metadataSavers hide" style="margin-bottom:2em"> </div> <div class="imageFetchers hide advanced" style="margin-bottom:2em"> </div> <div class="checkboxContainer checkboxContainer-withDescription chkSaveLocalContainer hide"> <label> <input is="emby-checkbox" type="checkbox" id="chkSaveLocal"/> <span>${LabelSaveLocalMetadata}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSaveLocalMetadataHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription chkAutomaticallyGroupSeriesContainer hide advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkAutomaticallyGroupSeries"/> <span>${OptionAutomaticallyGroupSeries}</span> </label> <div class="fieldDescription checkboxFieldDescription">${OptionAutomaticallyGroupSeriesHelp}</div> </div> <div class="chapterSettingsSection hide"> <h2>${HeaderChapterImages}</h2> <div class="checkboxContainer checkboxContainer-withDescription fldExtractChapterImages"> <label> <input type="checkbox" is="emby-checkbox" class="chkExtractChapterImages"/> <span>${OptionExtractChapterImage}</span> </label> <div class="fieldDescription checkboxFieldDescription">${ExtractChapterImagesHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription fldExtractChaptersDuringLibraryScan advanced"> <label> <input type="checkbox" is="emby-checkbox" class="chkExtractChaptersDuringLibraryScan"/> <span>${LabelExtractChaptersDuringLibraryScan}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelExtractChaptersDuringLibraryScanHelp}</div> </div> </div> <div class="subtitleDownloadSettings hide"> <h2>${HeaderSubtitleDownloads}</h2> <div> <h3 class="checkboxListLabel">${LabelDownloadLanguages}</h3> <div class="subtitleDownloadLanguages paperList checkboxList" style="max-height:10.5em;overflow-y:auto;padding:.5em 1em"> </div> </div> <br/> <div class="subtitleFetchers advanced" style="margin-bottom:2em"> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input is="emby-checkbox" type="checkbox" id="chkRequirePerfectMatch" checked="checked"/> <span>${OptionRequirePerfectSubtitleMatch}</span> </label> <div class="fieldDescription checkboxFieldDescription">${OptionRequirePerfectSubtitleMatchHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkSkipIfAudioTrackPresent"/> <span>${LabelSkipIfAudioTrackPresent}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSkipIfAudioTrackPresentHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input is="emby-checkbox" type="checkbox" id="chkSkipIfGraphicalSubsPresent"/> <span>${LabelSkipIfGraphicalSubsPresent}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelSkipIfGraphicalSubsPresentHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription advanced"> <label> <input type="checkbox" is="emby-checkbox" id="chkSaveSubtitlesLocally" checked="checked"/> <span>${SaveSubtitlesIntoMediaFolders}</span> </label> <div class="fieldDescription checkboxFieldDescription">${SaveSubtitlesIntoMediaFoldersHelp}</div> </div> </div> ');function d(e){return d="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},d(e)}function u(){u=function(){return t};var e,t={},a=Object.prototype,r=a.hasOwnProperty,n=Object.defineProperty||function(e,t,a){e[t]=a.value},i="function"==typeof Symbol?Symbol:{},o=i.iterator||"@@iterator",c=i.asyncIterator||"@@asyncIterator",l=i.toStringTag||"@@toStringTag";function s(e,t,a){return Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,a){return e[t]=a}}function h(e,t,a,r){var i=t&&t.prototype instanceof S?t:S,o=Object.create(i.prototype),c=new M(r||[]);return n(o,"_invoke",{value:q(e,a,c)}),o}function p(e,t,a){try{return{type:"normal",arg:e.call(t,a)}}catch(e){return{type:"throw",arg:e}}}t.wrap=h;var b="suspendedStart",y="suspendedYield",v="executing",m="completed",f={};function S(){}function k(){}function g(){}var L={};s(L,o,(function(){return this}));var E=Object.getPrototypeOf,x=E&&E(E(F([])));x&&x!==a&&r.call(x,o)&&(L=x);var w=g.prototype=S.prototype=Object.create(L);function A(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function C(e,t){function a(n,i,o,c){var l=p(e[n],e,i);if("throw"!==l.type){var s=l.arg,u=s.value;return u&&"object"==d(u)&&r.call(u,"__await")?t.resolve(u.__await).then((function(e){a("next",e,o,c)}),(function(e){a("throw",e,o,c)})):t.resolve(u).then((function(e){s.value=e,o(s)}),(function(e){return a("throw",e,o,c)}))}c(l.arg)}var i;n(this,"_invoke",{value:function(e,r){function n(){return new t((function(t,n){a(e,r,t,n)}))}return i=i?i.then(n,n):n()}})}function q(t,a,r){var n=b;return function(i,o){if(n===v)throw new Error("Generator is already running");if(n===m){if("throw"===i)throw o;return{value:e,done:!0}}for(r.method=i,r.arg=o;;){var c=r.delegate;if(c){var l=D(c,r);if(l){if(l===f)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(n===b)throw n=m,r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n=v;var s=p(t,a,r);if("normal"===s.type){if(n=r.done?m:y,s.arg===f)continue;return{value:s.arg,done:r.done}}"throw"===s.type&&(n=m,r.method="throw",r.arg=s.arg)}}}function D(t,a){var r=a.method,n=t.iterator[r];if(n===e)return a.delegate=null,"throw"===r&&t.iterator.return&&(a.method="return",a.arg=e,D(t,a),"throw"===a.method)||"return"!==r&&(a.method="throw",a.arg=new TypeError("The iterator does not provide a '"+r+"' method")),f;var i=p(n,t.iterator,a.arg);if("throw"===i.type)return a.method="throw",a.arg=i.arg,a.delegate=null,f;var o=i.arg;return o?o.done?(a[t.resultName]=o.value,a.next=t.nextLoc,"return"!==a.method&&(a.method="next",a.arg=e),a.delegate=null,f):o:(a.method="throw",a.arg=new TypeError("iterator result is not an object"),a.delegate=null,f)}function T(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function M(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(T,this),this.reset(!0)}function F(t){if(t||""===t){var a=t[o];if(a)return a.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function a(){for(;++n<t.length;)if(r.call(t,n))return a.value=t[n],a.done=!1,a;return a.value=e,a.done=!0,a};return i.next=i}}throw new TypeError(d(t)+" is not iterable")}return k.prototype=g,n(w,"constructor",{value:g,configurable:!0}),n(g,"constructor",{value:k,configurable:!0}),k.displayName=s(g,l,"GeneratorFunction"),t.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===k||"GeneratorFunction"===(t.displayName||t.name))},t.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,g):(e.__proto__=g,s(e,l,"GeneratorFunction")),e.prototype=Object.create(w),e},t.awrap=function(e){return{__await:e}},A(C.prototype),s(C.prototype,c,(function(){return this})),t.AsyncIterator=C,t.async=function(e,a,r,n,i){void 0===i&&(i=Promise);var o=new C(h(e,a,r,n),i);return t.isGeneratorFunction(a)?o:o.next().then((function(e){return e.done?e.value:o.next()}))},A(w),s(w,l,"Generator"),s(w,o,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),t.keys=function(e){var t=Object(e),a=[];for(var r in t)a.push(r);return a.reverse(),function e(){for(;a.length;){var r=a.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},t.values=F,M.prototype={constructor:M,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(I),!t)for(var a in this)"t"===a.charAt(0)&&r.call(this,a)&&!isNaN(+a.slice(1))&&(this[a]=e)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var a=this;function n(r,n){return c.type="throw",c.arg=t,a.next=r,n&&(a.method="next",a.arg=e),!!n}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],c=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),s=r.call(o,"finallyLoc");if(l&&s){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var a=this.tryEntries.length-1;a>=0;--a){var n=this.tryEntries[a];if(n.tryLoc<=this.prev&&r.call(n,"finallyLoc")&&this.prev<n.finallyLoc){var i=n;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var o=i?i.completion:{};return o.type=e,o.arg=t,i?(this.method="next",this.next=i.finallyLoc,f):this.complete(o)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.finallyLoc===e)return this.complete(a.completion,a.afterLoc),I(a),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var a=this.tryEntries[t];if(a.tryLoc===e){var r=a.completion;if("throw"===r.type){var n=r.arg;I(a)}return n}}throw new Error("illegal catch attempt")},delegateYield:function(t,a,r){return this.delegate={iterator:F(t),resultName:a,nextLoc:r},"next"===this.method&&(this.arg=e),f}},t}function h(e,t,a,r,n,i,o){try{var c=e[i](o),l=c.value}catch(e){return void a(e)}c.done?t(l):Promise.resolve(l).then(r,n)}function p(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return b(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?b(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,o=!0,c=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return o=e.done,e},e:function(e){c=!0,i=e},f:function(){try{o||null==a.return||a.return()}finally{if(c)throw i}}}}function b(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}function y(e){return ApiClient.getCultures().then((function(t){!function(e,t){var a="";a+="<option value=''></option>";var r,n=p(t);try{for(n.s();!(r=n.n()).done;){var i=r.value;a+="<option value='".concat(i.TwoLetterISOLanguageName,"'>").concat(i.DisplayName,"</option>")}}catch(e){n.e(e)}finally{n.f()}e.innerHTML=a}(e.querySelector("#selectLanguage"),t),function(e,t){var a,r="",n=p(t);try{for(n.s();!(a=n.n()).done;){var i=a.value;r+='<label><input type="checkbox" is="emby-checkbox" class="chkSubtitleLanguage" data-lang="'.concat(i.ThreeLetterISOLanguageName.toLowerCase(),'" /><span>').concat(i.DisplayName,"</span></label>")}}catch(e){n.e(e)}finally{n.f()}e.innerHTML=r}(e.querySelector(".subtitleDownloadLanguages"),t)}))}function v(e){return ApiClient.getCountries().then((function(t){var a="";a+="<option value=''></option>";var r,n=p(t);try{for(n.s();!(r=n.n()).done;){var i=r.value;a+="<option value='".concat(i.TwoLetterISORegionName,"'>").concat(i.DisplayName,"</option>")}}catch(e){n.e(e)}finally{n.f()}e.innerHTML=a}))}function m(e,t){var a="",r=e.querySelector(".metadataReaders");if(t.length<1)return r.innerHTML="",r.classList.add("hide"),!1;a+='<h3 class="checkboxListLabel">'.concat(c.ZP.translate("LabelMetadataReaders"),"</h3>"),a+='<div class="checkboxList paperList checkboxList-paperList">';for(var n=0;n<t.length;n++){var i=t[n];a+='<div class="listItem localReaderOption sortableOption" data-pluginname="'.concat(o()(i.Name),'">'),a+='<span class="listItemIcon material-icons live_tv" aria-hidden="true"></span>',a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=o()(i.Name),a+="</h3>",a+="</div>",n>0?a+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Up"),'" class="btnSortableMoveUp btnSortable" data-pluginindex="').concat(n,'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'):t.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Down"),'" class="btnSortableMoveDown btnSortable" data-pluginindex="').concat(n,'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>')),a+="</div>"}return a+="</div>",a+='<div class="fieldDescription">'.concat(c.ZP.translate("LabelMetadataReadersHelp"),"</div>"),t.length<2?r.classList.add("hide"):r.classList.remove("hide"),r.innerHTML=a,!0}function f(e,t){var a="",r=e.MetadataFetchers;return(r=T(r,t.MetadataFetcherOrder||[])).length?(a+='<div class="metadataFetcher" data-type="'+e.Type+'">',a+='<h3 class="checkboxListLabel">'+c.ZP.translate("LabelTypeMetadataDownloaders",c.ZP.translate("TypeOptionPlural"+e.Type))+"</h3>",a+='<div class="checkboxList paperList checkboxList-paperList">',r.forEach((function(e,n){a+='<div class="listItem metadataFetcherItem sortableOption" data-pluginname="'+o()(e.Name)+'">';var i=(t.MetadataFetchers?t.MetadataFetchers.includes(e.Name):e.DefaultEnabled)?' checked="checked"':"";a+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkMetadataFetcher" data-pluginname="'+o()(e.Name)+'" '+i+"><span></span></label>",a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=o()(e.Name),a+="</h3>",a+="</div>",n>0?a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Up")+'" class="btnSortableMoveUp btnSortable" data-pluginindex="'+n+'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>':r.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Down")+'" class="btnSortableMoveDown btnSortable" data-pluginindex="'+n+'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'),a+="</div>"})),a+="</div>",a+='<div class="fieldDescription">'+c.ZP.translate("LabelMetadataDownloadersHelp")+"</div>",a+="</div>"):a}function S(e,t){var a,r=p(e.TypeOptions||[]);try{for(r.s();!(a=r.n()).done;){var n=a.value;if(n.Type===t)return n}}catch(e){r.e(e)}finally{r.f()}return null}function k(e,t,a){var r,n="",i=e.querySelector(".metadataFetchers"),o=p(t.TypeOptions);try{for(o.s();!(r=o.n()).done;){var c=r.value;n+=f(c,S(a,c.Type)||{})}}catch(e){o.e(e)}finally{o.f()}return i.innerHTML=n,n?(i.classList.remove("hide"),e.querySelector(".fldAutoRefreshInterval").classList.remove("hide"),e.querySelector(".fldMetadataLanguage").classList.remove("hide"),e.querySelector(".fldMetadataCountry").classList.remove("hide")):(i.classList.add("hide"),e.querySelector(".fldAutoRefreshInterval").classList.add("hide"),e.querySelector(".fldMetadataLanguage").classList.add("hide"),e.querySelector(".fldMetadataCountry").classList.add("hide")),!0}function g(e,t,a){var r="",n=e.querySelector(".subtitleFetchers"),i=t.SubtitleFetchers;if(!(i=T(i,a.SubtitleFetcherOrder||[])).length)return r;r+='<h3 class="checkboxListLabel">'.concat(c.ZP.translate("LabelSubtitleDownloaders"),"</h3>"),r+='<div class="checkboxList paperList checkboxList-paperList">';for(var l=0;l<i.length;l++){var s=i[l];r+='<div class="listItem subtitleFetcherItem sortableOption" data-pluginname="'.concat(o()(s.Name),'">');var d=(a.DisabledSubtitleFetchers?!a.DisabledSubtitleFetchers.includes(s.Name):s.DefaultEnabled)?' checked="checked"':"";r+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkSubtitleFetcher" data-pluginname="'.concat(o()(s.Name),'" ').concat(d,"><span></span></label>"),r+='<div class="listItemBody">',r+='<h3 class="listItemBodyText">',r+=o()(s.Name),r+="</h3>",r+="</div>",l>0?r+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Up"),'" class="btnSortableMoveUp btnSortable" data-pluginindex="').concat(l,'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>'):i.length>1&&(r+='<button type="button" is="paper-icon-button-light" title="'.concat(c.ZP.translate("Down"),'" class="btnSortableMoveDown btnSortable" data-pluginindex="').concat(l,'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>')),r+="</div>"}r+="</div>",r+='<div class="fieldDescription">'.concat(c.ZP.translate("SubtitleDownloadersHelp"),"</div>"),n.innerHTML=r}function L(e,t){var a="",r=e.ImageFetchers;if(!(r=T(r,t.ImageFetcherOrder||[])).length)return a;a+='<div class="imageFetcher" data-type="'+e.Type+'">',a+='<div class="flex align-items-center" style="margin:1.5em 0 .5em;">',a+='<h3 class="checkboxListLabel" style="margin:0;">'+c.ZP.translate("HeaderTypeImageFetchers",c.ZP.translate("TypeOptionPlural"+e.Type))+"</h3>";var n=e.SupportedImageTypes||[];(n.length>1||1===n.length&&"Primary"!==n[0])&&(a+='<button is="emby-button" class="raised btnImageOptionsForType" type="button" style="font-size:90%;"><span>'+c.ZP.translate("HeaderFetcherSettings")+"</span></button>"),a+="</div>",a+='<div class="checkboxList paperList checkboxList-paperList">';for(var i=0;i<r.length;i++){var l=r[i];a+='<div class="listItem imageFetcherItem sortableOption" data-pluginname="'+o()(l.Name)+'">';var s=(t.ImageFetchers?t.ImageFetchers.includes(l.Name):l.DefaultEnabled)?' checked="checked"':"";a+='<label class="listItemCheckboxContainer"><input type="checkbox" is="emby-checkbox" class="chkImageFetcher" data-pluginname="'+o()(l.Name)+'" '+s+"><span></span></label>",a+='<div class="listItemBody">',a+='<h3 class="listItemBodyText">',a+=o()(l.Name),a+="</h3>",a+="</div>",i>0?a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Up")+'" class="btnSortableMoveUp btnSortable" data-pluginindex="'+i+'"><span class="material-icons keyboard_arrow_up" aria-hidden="true"></span></button>':r.length>1&&(a+='<button type="button" is="paper-icon-button-light" title="'+c.ZP.translate("Down")+'" class="btnSortableMoveDown btnSortable" data-pluginindex="'+i+'"><span class="material-icons keyboard_arrow_down" aria-hidden="true"></span></button>'),a+="</div>"}return a+="</div>",(a+='<div class="fieldDescription">'+c.ZP.translate("LabelImageFetchersHelp")+"</div>")+"</div>"}function E(e,t,a){var r,n="",i=e.querySelector(".imageFetchers"),o=p(t.TypeOptions);try{for(o.s();!(r=o.n()).done;){var c=r.value;n+=L(c,S(a,c.Type)||{})}}catch(e){o.e(e)}finally{o.f()}return i.innerHTML=n,n?(i.classList.remove("hide"),e.querySelector(".chkSaveLocalContainer").classList.remove("hide")):(i.classList.add("hide"),e.querySelector(".chkSaveLocalContainer").classList.add("hide")),!0}function x(e){var t=e.querySelector(".btnSortable"),a=t.querySelector(".material-icons");e.previousSibling?(t.title=c.ZP.translate("Up"),t.classList.add("btnSortableMoveUp"),t.classList.remove("btnSortableMoveDown"),a.classList.remove("keyboard_arrow_down"),a.classList.add("keyboard_arrow_up")):(t.title=c.ZP.translate("Down"),t.classList.remove("btnSortableMoveUp"),t.classList.add("btnSortableMoveDown"),a.classList.remove("keyboard_arrow_up"),a.classList.add("keyboard_arrow_down"))}function w(e){var t,i=l.ZP.parentWithClass(e.target,"btnImageOptionsForType");if(i)return t=l.ZP.parentWithClass(i,"imageFetcher").getAttribute("data-type"),void a.e(59263).then(a.bind(a,59263)).then((function(e){var a=e.default,i=S(r,t);i||(i={Type:t},r.TypeOptions.push(i));var o=S(n||{},t);(new a).show(t,i,o)}));A.call(this,e)}function A(e){var t=l.ZP.parentWithClass(e.target,"btnSortable");if(t){var a=l.ZP.parentWithClass(t,"sortableOption"),r=l.ZP.parentWithClass(a,"paperList");if(t.classList.contains("btnSortableMoveDown")){var n=a.nextSibling;n&&(a.parentNode.removeChild(a),n.parentNode.insertBefore(a,n.nextSibling))}else{var i=a.previousSibling;i&&(a.parentNode.removeChild(a),i.parentNode.insertBefore(a,i))}Array.prototype.forEach.call(r.querySelectorAll(".sortableOption"),x)}}function C(e){e.querySelector(".metadataReaders").addEventListener("click",A),e.querySelector(".subtitleFetchers").addEventListener("click",A),e.querySelector(".metadataFetchers").addEventListener("click",A),e.querySelector(".imageFetchers").addEventListener("click",w),e.querySelector("#chkEnableEmbeddedTitles").addEventListener("change",(function(t){e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.toggle("hide",!t.currentTarget.checked)}))}function q(){var e;return e=u().mark((function e(t,a,i){var o;return u().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:r={TypeOptions:[]},n=null,null===i&&t.classList.add("newlibrary"),t.innerHTML=c.ZP.translateHtml(s),l=t.querySelector("#selectAutoRefreshInterval"),d=void 0,d="",d+="<option value='0'>".concat(c.ZP.translate("Never"),"</option>"),d+=[30,60,90].map((function(e){return"<option value='".concat(e,"'>").concat(c.ZP.translate("EveryNDays",e),"</option>")})).join(""),l.innerHTML=d,o=[y(t),v(t.querySelector("#selectCountry"))],Promise.all(o).then((function(){return D(t,a).then((function(){i&&I(t,i),C(t)}))}));case 8:case"end":return e.stop()}var l,d}),e)})),q=function(){var t=this,a=arguments;return new Promise((function(r,n){var i=e.apply(t,a);function o(e){h(i,r,n,o,c,"next",e)}function c(e){h(i,r,n,o,c,"throw",e)}o(void 0)}))},q.apply(this,arguments)}function D(e,t){return"homevideos"===t||"photos"===t?e.querySelector(".chkEnablePhotosContainer").classList.remove("hide"):e.querySelector(".chkEnablePhotosContainer").classList.add("hide"),"tvshows"!==t&&"movies"!==t&&"homevideos"!==t&&"musicvideos"!==t&&"mixed"!==t?e.querySelector(".chapterSettingsSection").classList.add("hide"):e.querySelector(".chapterSettingsSection").classList.remove("hide"),"tvshows"===t?(e.querySelector(".chkAutomaticallyGroupSeriesContainer").classList.remove("hide"),e.querySelector(".fldSeasonZeroDisplayName").classList.remove("hide"),e.querySelector("#txtSeasonZeroName").setAttribute("required","required")):(e.querySelector(".chkAutomaticallyGroupSeriesContainer").classList.add("hide"),e.querySelector(".fldSeasonZeroDisplayName").classList.add("hide"),e.querySelector("#txtSeasonZeroName").removeAttribute("required")),"books"===t||"boxsets"===t||"playlists"===t||"music"===t?(e.querySelector(".chkEnableEmbeddedTitlesContainer").classList.add("hide"),e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.add("hide")):(e.querySelector(".chkEnableEmbeddedTitlesContainer").classList.remove("hide"),e.querySelector("#chkEnableEmbeddedTitles").checked&&e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.remove("hide")),e.querySelector(".chkEnableLUFSScanContainer").classList.toggle("hide","music"!==t),"tvshows"===t?e.querySelector(".chkEnableEmbeddedEpisodeInfosContainer").classList.remove("hide"):e.querySelector(".chkEnableEmbeddedEpisodeInfosContainer").classList.add("hide"),"tvshows"===t||"movies"===t||"musicvideos"===t||"mixed"===t?e.querySelector(".fldAllowEmbeddedSubtitlesContainer").classList.remove("hide"):e.querySelector(".fldAllowEmbeddedSubtitlesContainer").classList.add("hide"),e.querySelector(".chkAutomaticallyAddToCollectionContainer").classList.toggle("hide","movies"!==t&&"mixed"!==t),function(e,t){var a=e.classList.contains("newlibrary");return ApiClient.getJSON(ApiClient.getUrl("Libraries/AvailableOptions",{LibraryContentType:t,IsNewLibrary:a})).then((function(t){n=t,e.availableOptions=t,function(e,t){var a="",r=e.querySelector(".metadataSavers");if(!t.length)return r.innerHTML="",r.classList.add("hide"),!1;a+='<h3 class="checkboxListLabel">'.concat(c.ZP.translate("LabelMetadataSavers"),"</h3>"),a+='<div class="checkboxList paperList checkboxList-paperList">';var n,i=p(t);try{for(i.s();!(n=i.n()).done;){var l=n.value;a+='<label><input type="checkbox" data-defaultenabled="'.concat(l.DefaultEnabled,'" is="emby-checkbox" class="chkMetadataSaver" data-pluginname="').concat(o()(l.Name),'" ',!1,"><span>").concat(o()(l.Name),"</span></label>")}}catch(e){i.e(e)}finally{i.f()}a+="</div>",a+='<div class="fieldDescription" style="margin-top:.25em;">'.concat(c.ZP.translate("LabelMetadataSaversHelp"),"</div>"),r.innerHTML=a,r.classList.remove("hide")}(e,t.MetadataSavers),m(e,t.MetadataReaders),k(e,t,{}),g(e,t,{}),E(e,t,{}),t.SubtitleFetchers.length?e.querySelector(".subtitleDownloadSettings").classList.remove("hide"):e.querySelector(".subtitleDownloadSettings").classList.add("hide")})).catch((function(){return Promise.resolve()}))}(e,t)}function T(e,t){return(e=e.slice(0)).sort((function(e,a){return(e=t.indexOf(e.Name))-t.indexOf(a.Name)})),e}function I(e,t){r=t,n=e.availableOptions,e.querySelector("#selectLanguage").value=t.PreferredMetadataLanguage||"",e.querySelector("#selectCountry").value=t.MetadataCountryCode||"",e.querySelector("#selectAutoRefreshInterval").value=t.AutomaticRefreshIntervalDays||"0",e.querySelector("#txtSeasonZeroName").value=t.SeasonZeroDisplayName||"Specials",e.querySelector(".chkEnablePhotos").checked=t.EnablePhotos,e.querySelector(".chkEnableRealtimeMonitor").checked=t.EnableRealtimeMonitor,e.querySelector(".chkEnableLUFSScan").checked=t.EnableLUFSScan,e.querySelector(".chkExtractChaptersDuringLibraryScan").checked=t.ExtractChapterImagesDuringLibraryScan,e.querySelector(".chkExtractChapterImages").checked=t.EnableChapterImageExtraction,e.querySelector("#chkSaveLocal").checked=t.SaveLocalMetadata,e.querySelector(".chkAutomaticallyGroupSeries").checked=t.EnableAutomaticSeriesGrouping,e.querySelector("#chkEnableEmbeddedTitles").checked=t.EnableEmbeddedTitles,e.querySelector(".chkEnableEmbeddedExtrasTitlesContainer").classList.toggle("hide",!t.EnableEmbeddedTitles),e.querySelector("#chkEnableEmbeddedExtrasTitles").checked=t.EnableEmbeddedExtrasTitles,e.querySelector("#chkEnableEmbeddedEpisodeInfos").value=t.EnableEmbeddedEpisodeInfos,e.querySelector("#selectAllowEmbeddedSubtitles").value=t.AllowEmbeddedSubtitles,e.querySelector("#chkSkipIfGraphicalSubsPresent").checked=t.SkipSubtitlesIfEmbeddedSubtitlesPresent,e.querySelector("#chkSaveSubtitlesLocally").checked=t.SaveSubtitlesWithMedia,e.querySelector("#chkSkipIfAudioTrackPresent").checked=t.SkipSubtitlesIfAudioTrackMatches,e.querySelector("#chkRequirePerfectMatch").checked=t.RequirePerfectSubtitleMatch,e.querySelector("#chkAutomaticallyAddToCollection").checked=t.AutomaticallyAddToCollection,Array.prototype.forEach.call(e.querySelectorAll(".chkMetadataSaver"),(function(e){e.checked=t.MetadataSavers?t.MetadataSavers.includes(e.getAttribute("data-pluginname")):"true"===e.getAttribute("data-defaultenabled")})),Array.prototype.forEach.call(e.querySelectorAll(".chkSubtitleLanguage"),(function(e){e.checked=!!t.SubtitleDownloadLanguages&&t.SubtitleDownloadLanguages.includes(e.getAttribute("data-lang"))})),m(e,T(e.availableOptions.MetadataReaders,t.LocalMetadataReaderOrder||[])),k(e,e.availableOptions,t),E(e,e.availableOptions,t),g(e,e.availableOptions,t)}var M={embed:function(e,t,a){return q.apply(this,arguments)},setContentType:D,getLibraryOptions:function(e){var t={EnableArchiveMediaFiles:!1,EnablePhotos:e.querySelector(".chkEnablePhotos").checked,EnableRealtimeMonitor:e.querySelector(".chkEnableRealtimeMonitor").checked,EnableLUFSScan:e.querySelector(".chkEnableLUFSScan").checked,ExtractChapterImagesDuringLibraryScan:e.querySelector(".chkExtractChaptersDuringLibraryScan").checked,EnableChapterImageExtraction:e.querySelector(".chkExtractChapterImages").checked,EnableInternetProviders:!0,SaveLocalMetadata:e.querySelector("#chkSaveLocal").checked,EnableAutomaticSeriesGrouping:e.querySelector(".chkAutomaticallyGroupSeries").checked,PreferredMetadataLanguage:e.querySelector("#selectLanguage").value,MetadataCountryCode:e.querySelector("#selectCountry").value,SeasonZeroDisplayName:e.querySelector("#txtSeasonZeroName").value,AutomaticRefreshIntervalDays:parseInt(e.querySelector("#selectAutoRefreshInterval").value,10),EnableEmbeddedTitles:e.querySelector("#chkEnableEmbeddedTitles").checked,EnableEmbeddedExtrasTitles:e.querySelector("#chkEnableEmbeddedExtrasTitles").checked,EnableEmbeddedEpisodeInfos:e.querySelector("#chkEnableEmbeddedEpisodeInfos").checked,AllowEmbeddedSubtitles:e.querySelector("#selectAllowEmbeddedSubtitles").value,SkipSubtitlesIfEmbeddedSubtitlesPresent:e.querySelector("#chkSkipIfGraphicalSubsPresent").checked,SkipSubtitlesIfAudioTrackMatches:e.querySelector("#chkSkipIfAudioTrackPresent").checked,SaveSubtitlesWithMedia:e.querySelector("#chkSaveSubtitlesLocally").checked,RequirePerfectSubtitleMatch:e.querySelector("#chkRequirePerfectMatch").checked,AutomaticallyAddToCollection:e.querySelector("#chkAutomaticallyAddToCollection").checked,MetadataSavers:Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkMetadataSaver"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),TypeOptions:[]};return t.LocalMetadataReaderOrder=Array.prototype.map.call(e.querySelectorAll(".localReaderOption"),(function(e){return e.getAttribute("data-pluginname")})),t.SubtitleDownloadLanguages=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkSubtitleLanguage"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-lang")})),function(e,t){t.DisabledSubtitleFetchers=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkSubtitleFetcher"),(function(e){return!e.checked})),(function(e){return e.getAttribute("data-pluginname")})),t.SubtitleFetcherOrder=Array.prototype.map.call(e.querySelectorAll(".subtitleFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}(e,t),function(e,t){var a,r=p(e.querySelectorAll(".metadataFetcher"));try{for(r.s();!(a=r.n()).done;){var n=a.value,i=n.getAttribute("data-type"),o=S(t,i);o||(o={Type:i},t.TypeOptions.push(o)),o.MetadataFetchers=Array.prototype.map.call(Array.prototype.filter.call(n.querySelectorAll(".chkMetadataFetcher"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),o.MetadataFetcherOrder=Array.prototype.map.call(n.querySelectorAll(".metadataFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}}catch(e){r.e(e)}finally{r.f()}}(e,t),function(e,t){var a,r=p(e.querySelectorAll(".imageFetcher"));try{for(r.s();!(a=r.n()).done;){var n=a.value,i=n.getAttribute("data-type"),o=S(t,i);o||(o={Type:i},t.TypeOptions.push(o)),o.ImageFetchers=Array.prototype.map.call(Array.prototype.filter.call(n.querySelectorAll(".chkImageFetcher"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-pluginname")})),o.ImageFetcherOrder=Array.prototype.map.call(n.querySelectorAll(".imageFetcherItem"),(function(e){return e.getAttribute("data-pluginname")}))}}catch(e){r.e(e)}finally{r.f()}}(e,t),function(e){var t,a,n=p((null===(t=r)||void 0===t?void 0:t.TypeOptions)||[]);try{for(n.s();!(a=n.n()).done;){var i=a.value,o=S(e,i.Type);o||(o={Type:i.Type},e.TypeOptions.push(o)),i.ImageOptions&&(o.ImageOptions=i.ImageOptions)}}catch(e){n.e(e)}finally{n.f()}}(t),t},setLibraryOptions:I}},99338:function(e,t,a){a(67752);var r=Object.create(HTMLInputElement.prototype);function n(e){if(13===e.keyCode)return e.preventDefault(),this.checked=!this.checked,this.dispatchEvent(new CustomEvent("change",{bubbles:!0})),!1}r.attachedCallback=function(){if("true"!==this.getAttribute("data-embytoggle")){this.setAttribute("data-embytoggle","true"),this.classList.add("mdl-switch__input");var e=this.parentNode;e.classList.add("mdl-switch"),e.classList.add("mdl-js-switch");var t=e.querySelector("span");e.insertAdjacentHTML("beforeend",'<div class="mdl-switch__trackContainer"><div class="mdl-switch__track"></div><div class="mdl-switch__thumb"><span class="mdl-switch__focus-helper"></span></div></div>'),t.classList.add("toggleButtonLabel"),t.classList.add("mdl-switch__label"),this.addEventListener("keydown",n)}},document.registerElement("emby-toggle",{prototype:r,extends:"input"})}}]);