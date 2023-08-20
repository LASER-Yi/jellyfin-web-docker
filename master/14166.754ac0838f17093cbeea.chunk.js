"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[14166],{14166:function(e,t,a){a.r(t),a.d(t,{default:function(){return g},show:function(){return b}}),a(23938),a(61013),a(76056),a(69217),a(32081),a(72410),a(63238),a(15610),a(17460),a(52077),a(25901),a(92189),a(91047),a(5769),a(14078);var n=a(65009),o=a.n(n),i=a(93355),r=a(30325),s=a(56663),l=a(87796),c=a(72365),d=a(94994),u=a(21776),f=a(28540),p=(a(15856),a(38228),a(61414),a(18613)),h='<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle">${MoreMediaInfo}</h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner" style="padding:1em"> <div id="mediaInfoContent" class="mediaInfoContent"></div> </div> </div> ';function v(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return m(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?m(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,r=!0,s=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return r=e.done,e},e:function(e){s=!0,i=e},f:function(){try{r||null==a.return||a.return()}finally{if(s)throw i}}}}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var P=r.Z.tv?"":'<button is="paper-icon-button-light" class="btnCopy" title="'.concat(d.ZP.translate("Copy"),'" aria-label="').concat(d.ZP.translate("Copy"),'"\n        ><span class="material-icons content_copy" aria-hidden="true"></span></button>'),I=r.Z.tv?"":'<span class="hide">: </span>';function y(e,t,a){return'<span class="mediaInfoLabel">'.concat(e,"</span>").concat(I,'<span class="mediaInfoAttribute" ').concat(a&&'dir="ltr"',">").concat(o()(t),"</span>\n")}function b(e,t){return f.ZP.show(),function(e,t){var a=p.Z.getApiClient(t);return a.getItem(a.getCurrentUserId(),e).then((function(e){var t={size:"small",removeOnClose:!0,scrollY:!1};r.Z.tv&&(t.size="fullscreen");var n=i.default.createDialog(t);n.classList.add("formDialog");var p="";p+=d.ZP.translateHtml(h,"core"),n.innerHTML=p,r.Z.tv&&n.querySelector(".formDialogContent"),i.default.open(n),n.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(n)})),a.getCurrentUser().then((function(t){!function(e,t,a){var n=a.MediaSources.map((function(t){return function(e,t,a){var n,i='<div class="mediaInfoSource">';if(a.Name&&(i+='<div><h2 class="mediaInfoStreamType">'.concat(o()(a.Name)).concat(P,"</h2></div>\n")),a.Container&&(i+="".concat(y(d.ZP.translate("MediaInfoContainer"),a.Container),"<br/>")),null!==(n=a.Formats)&&void 0!==n&&n.length&&(i+="".concat(y(d.ZP.translate("MediaInfoFormat"),a.Formats.join(",")),"<br/>")),a.Path&&e&&e.Policy.IsAdministrator&&(i+="".concat(y(d.ZP.translate("MediaInfoPath"),a.Path,!0),"<br/>")),a.Size){var r="".concat((a.Size/1048576).toFixed(0)," MB");i+="".concat(y(d.ZP.translate("MediaInfoSize"),r),"<br/>")}a.MediaStreams.sort(u.ZP.sortTracks);var s,l=v(a.MediaStreams);try{for(l.s();!(s=l.n()).done;){var c=s.value;if("Data"!==c.Type){i+='<div class="mediaInfoStream">';var f=void 0;switch(c.Type){case"Audio":case"Data":case"Subtitle":case"Video":f=c.Type;break;case"EmbeddedImage":f="Image"}var p=d.ZP.translate(f);i+='\n<h2 class="mediaInfoStreamType">'.concat(p).concat(P,"</h2>\n");var h=[];c.DisplayTitle&&h.push(y(d.ZP.translate("MediaInfoTitle"),c.DisplayTitle)),c.Language&&"Video"!==c.Type&&h.push(y(d.ZP.translate("MediaInfoLanguage"),c.Language)),c.Codec&&h.push(y(d.ZP.translate("MediaInfoCodec"),c.Codec.toUpperCase())),c.CodecTag&&h.push(y(d.ZP.translate("MediaInfoCodecTag"),c.CodecTag)),null!=c.IsAVC&&h.push(y("AVC",c.IsAVC?"Yes":"No")),c.Profile&&h.push(y(d.ZP.translate("MediaInfoProfile"),c.Profile)),c.Level>0&&h.push(y(d.ZP.translate("MediaInfoLevel"),c.Level)),(c.Width||c.Height)&&h.push(y(d.ZP.translate("MediaInfoResolution"),"".concat(c.Width,"x").concat(c.Height))),c.AspectRatio&&"mjpeg"!==c.Codec&&h.push(y(d.ZP.translate("MediaInfoAspectRatio"),c.AspectRatio)),"Video"===c.Type&&(null!=c.IsAnamorphic&&h.push(y(d.ZP.translate("MediaInfoAnamorphic"),c.IsAnamorphic?"Yes":"No")),h.push(y(d.ZP.translate("MediaInfoInterlaced"),c.IsInterlaced?"Yes":"No"))),(c.AverageFrameRate||c.RealFrameRate)&&"Video"===c.Type&&h.push(y(d.ZP.translate("MediaInfoFramerate"),c.AverageFrameRate||c.RealFrameRate)),c.ChannelLayout&&h.push(y(d.ZP.translate("MediaInfoLayout"),c.ChannelLayout)),c.Channels&&h.push(y(d.ZP.translate("MediaInfoChannels"),"".concat(c.Channels," ch"))),c.BitRate&&h.push(y(d.ZP.translate("MediaInfoBitrate"),"".concat(parseInt(c.BitRate/1e3,10)," kbps"))),c.SampleRate&&h.push(y(d.ZP.translate("MediaInfoSampleRate"),"".concat(c.SampleRate," Hz"))),c.BitDepth&&h.push(y(d.ZP.translate("MediaInfoBitDepth"),"".concat(c.BitDepth," bit"))),c.VideoRange&&h.push(y(d.ZP.translate("MediaInfoVideoRange"),c.VideoRange)),c.VideoRangeType&&h.push(y(d.ZP.translate("MediaInfoVideoRangeType"),c.VideoRangeType)),c.VideoDoViTitle&&(h.push(y(d.ZP.translate("MediaInfoDoViTitle"),c.VideoDoViTitle)),null!=c.DvVersionMajor&&h.push(y(d.ZP.translate("MediaInfoDvVersionMajor"),c.DvVersionMajor)),null!=c.DvVersionMinor&&h.push(y(d.ZP.translate("MediaInfoDvVersionMinor"),c.DvVersionMinor)),null!=c.DvProfile&&h.push(y(d.ZP.translate("MediaInfoDvProfile"),c.DvProfile)),null!=c.DvLevel&&h.push(y(d.ZP.translate("MediaInfoDvLevel"),c.DvLevel)),null!=c.RpuPresentFlag&&h.push(y(d.ZP.translate("MediaInfoRpuPresentFlag"),c.RpuPresentFlag)),null!=c.ElPresentFlag&&h.push(y(d.ZP.translate("MediaInfoElPresentFlag"),c.ElPresentFlag)),null!=c.BlPresentFlag&&h.push(y(d.ZP.translate("MediaInfoBlPresentFlag"),c.BlPresentFlag)),null!=c.DvBlSignalCompatibilityId&&h.push(y(d.ZP.translate("MediaInfoDvBlSignalCompatibilityId"),c.DvBlSignalCompatibilityId))),c.ColorSpace&&h.push(y(d.ZP.translate("MediaInfoColorSpace"),c.ColorSpace)),c.ColorTransfer&&h.push(y(d.ZP.translate("MediaInfoColorTransfer"),c.ColorTransfer)),c.ColorPrimaries&&h.push(y(d.ZP.translate("MediaInfoColorPrimaries"),c.ColorPrimaries)),c.PixelFormat&&h.push(y(d.ZP.translate("MediaInfoPixelFormat"),c.PixelFormat)),c.RefFrames&&h.push(y(d.ZP.translate("MediaInfoRefFrames"),c.RefFrames)),c.NalLengthSize&&h.push(y("NAL",c.NalLengthSize)),"Subtitle"!==c.Type&&"Audio"!==c.Type||(h.push(y(d.ZP.translate("MediaInfoDefault"),c.IsDefault?"Yes":"No")),h.push(y(d.ZP.translate("MediaInfoForced"),c.IsForced?"Yes":"No")),h.push(y(d.ZP.translate("MediaInfoExternal"),c.IsExternal?"Yes":"No"))),"Video"===c.Type&&a.Timestamp&&h.push(y(d.ZP.translate("MediaInfoTimestamp"),a.Timestamp)),i+=h.join("<br/>"),i+="</div>"}}}catch(e){l.e(e)}finally{l.f()}return i+"</div>"}(e,0,t)})).join('<div style="border-top:1px solid #444;margin: 1em 0;"></div>');a.MediaSources.length>1&&(n="<br/>".concat(n));var i=t.querySelector("#mediaInfoContent");i.innerHTML=n;var r,f=v(i.querySelectorAll(".btnCopy"));try{var p=function(){var e=r.value;e.addEventListener("click",(function(){var t=c.ZP.parentWithClass(e,"mediaInfoStream")||c.ZP.parentWithClass(e,"mediaInfoSource")||i;(0,l.J)(t.textContent).then((function(){(0,s.Z)(d.ZP.translate("Copied"))})).catch((function(){console.error("Could not copy text"),(0,s.Z)(d.ZP.translate("CopyFailed"))}))}))};for(f.s();!(r=f.n()).done;)p()}catch(e){f.e(e)}finally{f.f()}}(t,n,e)})),f.ZP.hide()}))}(e,t)}var g={show:b}},15856:function(e,t,a){var n=a(30325),o=a(57366),i=a(12801),r=(a(67752),Object.create(HTMLSelectElement.prototype));function s(){return!(!o.Z.edgeUwp&&!o.Z.xboxOne&&(o.Z.tizen||o.Z.orsay||o.Z.web0s||!o.Z.tv&&n.Z.tv))}function l(e){var t=c(e),a=t?t.textContent||t.innerText:null;i.default.show({items:e.options,positionTo:e,title:a}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function f(e){e.button||s()||(e.preventDefault(),l(this))}function p(e){switch(e.keyCode){case 13:return void(s()||(e.preventDefault(),l(this)));case 37:case 38:case 39:case 40:return void(n.Z.tv&&e.preventDefault())}}var h=0;r.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),n.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",f),this.addEventListener("keydown",p),this.addEventListener("focus",d),this.addEventListener("blur",u)},r.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,a=this.ownerDocument.createElement("label");a.innerText=this.getAttribute("label")||"",a.classList.add("selectLabel"),a.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(a,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},r.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:r,extends:"select"})}}]);