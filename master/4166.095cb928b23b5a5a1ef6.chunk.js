"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4166],{14166:function(e,a,t){t.r(a),t.d(a,{default:function(){return Z},show:function(){return g}}),t(23938),t(61013),t(76056),t(69217),t(32081),t(72410),t(63238),t(15610),t(17460),t(52077),t(25901),t(92189),t(91047),t(5769),t(14078);var n=t(65009),o=t.n(n),r=t(93355),i=t(30325),l=t(56663),s=t(87796),c=t(72365),d=t(94994),u=t(21776),f=t(28540),p=(t(15856),t(38228),t(61414),t(18613));function h(e,a){var t="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=function(e,a){if(e){if("string"==typeof e)return m(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?m(e,a):void 0}}(e))||a&&e&&"number"==typeof e.length){t&&(e=t);var n=0,o=function(){};return{s:o,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var r,i=!0,l=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){l=!0,r=e},f:function(){try{i||null==t.return||t.return()}finally{if(l)throw r}}}}function m(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,n=new Array(a);t<a;t++)n[t]=e[t];return n}var v=i.Z.tv?"":'<button is="paper-icon-button-light" class="btnCopy" title="'.concat(d.ZP.translate("Copy"),'" aria-label="').concat(d.ZP.translate("Copy"),'"\n        ><span class="material-icons content_copy" aria-hidden="true"></span></button>'),P=i.Z.tv?"":'<span class="hide">: </span>';function I(e,a,t){return'<span class="mediaInfoLabel">'.concat(e,"</span>").concat(P,'<span class="mediaInfoAttribute" ').concat(t&&'dir="ltr"',">").concat(o()(a),"</span>\n")}function g(e,a){return f.ZP.show(),function(e,a){var t=p.Z.getApiClient(a);return t.getItem(t.getCurrentUserId(),e).then((function(e){var a={size:"small",removeOnClose:!0,scrollY:!1};i.Z.tv&&(a.size="fullscreen");var n=r.default.createDialog(a);n.classList.add("formDialog");var p="";p+=d.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle">${MoreMediaInfo}</h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner" style="padding:1em"> <div id="mediaInfoContent" class="mediaInfoContent"></div> </div> </div> ',"core"),n.innerHTML=p,i.Z.tv&&n.querySelector(".formDialogContent"),r.default.open(n),n.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(n)})),t.getCurrentUser().then((function(a){!function(e,a,t){var n=t.MediaSources.map((function(a){return function(e,a,t){var n='<div class="mediaInfoSource">';if(t.Name&&(n+='<div><h2 class="mediaInfoStreamType">'.concat(o()(t.Name)).concat(v,"</h2></div>\n")),t.Container&&(n+="".concat(I(d.ZP.translate("MediaInfoContainer"),t.Container),"<br/>")),t.Formats&&t.Formats.length&&(n+="".concat(I(d.ZP.translate("MediaInfoFormat"),t.Formats.join(",")),"<br/>")),t.Path&&e&&e.Policy.IsAdministrator&&(n+="".concat(I(d.ZP.translate("MediaInfoPath"),t.Path,!0),"<br/>")),t.Size){var r="".concat((t.Size/1048576).toFixed(0)," MB");n+="".concat(I(d.ZP.translate("MediaInfoSize"),r),"<br/>")}t.MediaStreams.sort(u.ZP.sortTracks);var i,l=h(t.MediaStreams);try{for(l.s();!(i=l.n()).done;){var s=i.value;if("Data"!==s.Type){n+='<div class="mediaInfoStream">';var c=void 0;switch(s.Type){case"Audio":case"Data":case"Subtitle":case"Video":c=s.Type;break;case"EmbeddedImage":c="Image"}var f=d.ZP.translate(c);n+='\n<h2 class="mediaInfoStreamType">'.concat(f).concat(v,"</h2>\n");var p=[];s.DisplayTitle&&p.push(I(d.ZP.translate("MediaInfoTitle"),s.DisplayTitle)),s.Language&&"Video"!==s.Type&&p.push(I(d.ZP.translate("MediaInfoLanguage"),s.Language)),s.Codec&&p.push(I(d.ZP.translate("MediaInfoCodec"),s.Codec.toUpperCase())),s.CodecTag&&p.push(I(d.ZP.translate("MediaInfoCodecTag"),s.CodecTag)),null!=s.IsAVC&&p.push(I("AVC",s.IsAVC?"Yes":"No")),s.Profile&&p.push(I(d.ZP.translate("MediaInfoProfile"),s.Profile)),s.Level>0&&p.push(I(d.ZP.translate("MediaInfoLevel"),s.Level)),(s.Width||s.Height)&&p.push(I(d.ZP.translate("MediaInfoResolution"),"".concat(s.Width,"x").concat(s.Height))),s.AspectRatio&&"mjpeg"!==s.Codec&&p.push(I(d.ZP.translate("MediaInfoAspectRatio"),s.AspectRatio)),"Video"===s.Type&&(null!=s.IsAnamorphic&&p.push(I(d.ZP.translate("MediaInfoAnamorphic"),s.IsAnamorphic?"Yes":"No")),p.push(I(d.ZP.translate("MediaInfoInterlaced"),s.IsInterlaced?"Yes":"No"))),(s.AverageFrameRate||s.RealFrameRate)&&"Video"===s.Type&&p.push(I(d.ZP.translate("MediaInfoFramerate"),s.AverageFrameRate||s.RealFrameRate)),s.ChannelLayout&&p.push(I(d.ZP.translate("MediaInfoLayout"),s.ChannelLayout)),s.Channels&&p.push(I(d.ZP.translate("MediaInfoChannels"),"".concat(s.Channels," ch"))),s.BitRate&&p.push(I(d.ZP.translate("MediaInfoBitrate"),"".concat(parseInt(s.BitRate/1e3)," kbps"))),s.SampleRate&&p.push(I(d.ZP.translate("MediaInfoSampleRate"),"".concat(s.SampleRate," Hz"))),s.BitDepth&&p.push(I(d.ZP.translate("MediaInfoBitDepth"),"".concat(s.BitDepth," bit"))),s.VideoRange&&p.push(I(d.ZP.translate("MediaInfoVideoRange"),s.VideoRange)),s.VideoRangeType&&p.push(I(d.ZP.translate("MediaInfoVideoRangeType"),s.VideoRangeType)),s.VideoDoViTitle&&(p.push(I(d.ZP.translate("MediaInfoDoViTitle"),s.VideoDoViTitle)),null!=s.DvVersionMajor&&p.push(I(d.ZP.translate("MediaInfoDvVersionMajor"),s.DvVersionMajor)),null!=s.DvVersionMinor&&p.push(I(d.ZP.translate("MediaInfoDvVersionMinor"),s.DvVersionMinor)),null!=s.DvProfile&&p.push(I(d.ZP.translate("MediaInfoDvProfile"),s.DvProfile)),null!=s.DvLevel&&p.push(I(d.ZP.translate("MediaInfoDvLevel"),s.DvLevel)),null!=s.RpuPresentFlag&&p.push(I(d.ZP.translate("MediaInfoRpuPresentFlag"),s.RpuPresentFlag)),null!=s.ElPresentFlag&&p.push(I(d.ZP.translate("MediaInfoElPresentFlag"),s.ElPresentFlag)),null!=s.BlPresentFlag&&p.push(I(d.ZP.translate("MediaInfoBlPresentFlag"),s.BlPresentFlag)),null!=s.DvBlSignalCompatibilityId&&p.push(I(d.ZP.translate("MediaInfoDvBlSignalCompatibilityId"),s.DvBlSignalCompatibilityId))),s.ColorSpace&&p.push(I(d.ZP.translate("MediaInfoColorSpace"),s.ColorSpace)),s.ColorTransfer&&p.push(I(d.ZP.translate("MediaInfoColorTransfer"),s.ColorTransfer)),s.ColorPrimaries&&p.push(I(d.ZP.translate("MediaInfoColorPrimaries"),s.ColorPrimaries)),s.PixelFormat&&p.push(I(d.ZP.translate("MediaInfoPixelFormat"),s.PixelFormat)),s.RefFrames&&p.push(I(d.ZP.translate("MediaInfoRefFrames"),s.RefFrames)),s.NalLengthSize&&p.push(I("NAL",s.NalLengthSize)),"Subtitle"!==s.Type&&"Audio"!==s.Type||(p.push(I(d.ZP.translate("MediaInfoDefault"),s.IsDefault?"Yes":"No")),p.push(I(d.ZP.translate("MediaInfoForced"),s.IsForced?"Yes":"No")),p.push(I(d.ZP.translate("MediaInfoExternal"),s.IsExternal?"Yes":"No"))),"Video"===s.Type&&t.Timestamp&&p.push(I(d.ZP.translate("MediaInfoTimestamp"),t.Timestamp)),n+=p.join("<br/>"),n+="</div>"}}}catch(e){l.e(e)}finally{l.f()}return n+"</div>"}(e,0,a)})).join('<div style="border-top:1px solid #444;margin: 1em 0;"></div>');t.MediaSources.length>1&&(n="<br/>".concat(n));var r=a.querySelector("#mediaInfoContent");r.innerHTML=n;var i,f=h(r.querySelectorAll(".btnCopy"));try{var p=function(){var e=i.value;e.addEventListener("click",(function(){var a=c.ZP.parentWithClass(e,"mediaInfoStream")||c.ZP.parentWithClass(e,"mediaInfoSource")||r;(0,s.J)(a.textContent).then((function(){(0,l.Z)(d.ZP.translate("Copied"))})).catch((function(){console.error("Could not copy text"),(0,l.Z)(d.ZP.translate("CopyFailed"))}))}))};for(f.s();!(i=f.n()).done;)p()}catch(e){f.e(e)}finally{f.f()}}(a,n,e)})),f.ZP.hide()}))}(e,a)}var Z={show:g}}}]);