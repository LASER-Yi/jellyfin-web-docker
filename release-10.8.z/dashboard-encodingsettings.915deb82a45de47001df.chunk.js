"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2832],{56669:function(e,t,a){a.r(t),a(5769),a(63238),a(27471),a(32081),a(61013),a(98010),a(52077),a(72482),a(61418),a(17460),a(14078),a(72326);var n,c=a(56705),r=a(44614),o=a(83094),l=a(3319),i=a(76543),d=a(61642);function u(){c.ZP.hide(),(0,d.Z)(r.ZP.translate("FFmpegSavePathNotFound"))}function s(){var e=this,t=function(){c.ZP.show(),ApiClient.getNamedConfiguration("encoding").then((function(t){t.DownMixAudioBoost=$("#txtDownMixAudioBoost",e).val(),t.MaxMuxingQueueSize=e.querySelector("#txtMaxMuxingQueueSize").value,t.TranscodingTempPath=$("#txtTranscodingTempPath",e).val(),t.FallbackFontPath=e.querySelector("#txtFallbackFontPath").value,t.EnableFallbackFont=!!e.querySelector("#txtFallbackFontPath").value&&e.querySelector("#chkEnableFallbackFont").checked,t.EncodingThreadCount=$("#selectThreadCount",e).val(),t.HardwareAccelerationType=$("#selectVideoDecoder",e).val(),t.VaapiDevice=$("#txtVaapiDevice",e).val(),t.EnableTonemapping=e.querySelector("#chkTonemapping").checked,t.EnableVppTonemapping=e.querySelector("#chkVppTonemapping").checked,t.TonemappingAlgorithm=e.querySelector("#selectTonemappingAlgorithm").value,t.TonemappingMode=e.querySelector("#selectTonemappingMode").value,t.TonemappingRange=e.querySelector("#selectTonemappingRange").value,t.TonemappingDesat=e.querySelector("#txtTonemappingDesat").value,t.TonemappingPeak=e.querySelector("#txtTonemappingPeak").value,t.TonemappingParam=e.querySelector("#txtTonemappingParam").value||"0",t.VppTonemappingBrightness=e.querySelector("#txtVppTonemappingBrightness").value,t.VppTonemappingContrast=e.querySelector("#txtVppTonemappingContrast").value,t.EncoderPreset=e.querySelector("#selectEncoderPreset").value,t.H264Crf=parseInt(e.querySelector("#txtH264Crf").value||"0"),t.H265Crf=parseInt(e.querySelector("#txtH265Crf").value||"0"),t.DeinterlaceMethod=e.querySelector("#selectDeinterlaceMethod").value,t.DeinterlaceDoubleRate=e.querySelector("#chkDoubleRateDeinterlacing").checked,t.EnableSubtitleExtraction=e.querySelector("#chkEnableSubtitleExtraction").checked,t.EnableThrottling=e.querySelector("#chkEnableThrottling").checked,t.HardwareDecodingCodecs=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkDecodeCodec"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-codec")})),t.EnableDecodingColorDepth10Hevc=e.querySelector("#chkDecodingColorDepth10Hevc").checked,t.EnableDecodingColorDepth10Vp9=e.querySelector("#chkDecodingColorDepth10Vp9").checked,t.EnableEnhancedNvdecDecoder=e.querySelector("#chkEnhancedNvdecDecoder").checked,t.PreferSystemNativeHwDecoder=e.querySelector("#chkSystemNativeHwDecoder").checked,t.EnableIntelLowPowerH264HwEncoder=e.querySelector("#chkIntelLpH264HwEncoder").checked,t.EnableIntelLowPowerHevcHwEncoder=e.querySelector("#chkIntelLpHevcHwEncoder").checked,t.EnableHardwareEncoding=e.querySelector("#chkHardwareEncoding").checked,t.AllowHevcEncoding=e.querySelector("#chkAllowHevcEncoding").checked,ApiClient.updateNamedConfiguration("encoding",t).then((function(){!function(e){ApiClient.getSystemInfo().then((function(){return ApiClient.ajax({url:ApiClient.getUrl("System/MediaEncoder/Path"),type:"POST",data:JSON.stringify({Path:e.querySelector(".txtEncoderPath").value,PathType:"Custom"}),contentType:"application/json"}).then(i.ZP.processServerConfigurationUpdateResult,u)}))}(e)}),(function(){(0,d.Z)(r.ZP.translate("ErrorDefault")),i.ZP.processServerConfigurationUpdateResult()}))}))};return $("#selectVideoDecoder",e).val()?(0,d.Z)({title:r.ZP.translate("TitleHardwareAcceleration"),text:r.ZP.translate("HardwareAccelerationWarning")}).then(t):t(),!1}function p(){return[{href:"#!/encodingsettings.html",name:r.ZP.translate("Transcoding")},{href:"#!/playbackconfiguration.html",name:r.ZP.translate("ButtonResume")},{href:"#!/streamingsettings.html",name:r.ZP.translate("TabStreaming")}]}$(document).on("pageinit","#encodingSettingsPage",(function(){var e=this;n?Promise.resolve(n):ApiClient.getPublicSystemInfo().then((function(e){return n=e,e})),e.querySelector("#selectVideoDecoder").addEventListener("change",(function(){var t,a,c;"vaapi"==this.value?(e.querySelector(".fldVaapiDevice").classList.remove("hide"),e.querySelector("#txtVaapiDevice").setAttribute("required","required")):(e.querySelector(".fldVaapiDevice").classList.add("hide"),e.querySelector("#txtVaapiDevice").removeAttribute("required")),"amf"==this.value||"nvenc"==this.value||"qsv"==this.value||"vaapi"==this.value||"videotoolbox"==this.value?e.querySelector(".fld10bitHevcVp9HwDecoding").classList.remove("hide"):e.querySelector(".fld10bitHevcVp9HwDecoding").classList.add("hide"),"amf"==this.value||"nvenc"==this.value||"qsv"==this.value||"vaapi"==this.value?e.querySelector(".tonemappingOptions").classList.remove("hide"):e.querySelector(".tonemappingOptions").classList.add("hide"),"qsv"==this.value||"vaapi"==this.value?e.querySelector(".fldIntelLp").classList.remove("hide"):e.querySelector(".fldIntelLp").classList.add("hide"),"linux"!==n.OperatingSystem.toLowerCase()||"qsv"!=this.value&&"vaapi"!=this.value?e.querySelector(".vppTonemappingOptions").classList.add("hide"):e.querySelector(".vppTonemappingOptions").classList.remove("hide"),"qsv"==this.value?e.querySelector(".fldSysNativeHwDecoder").classList.remove("hide"):e.querySelector(".fldSysNativeHwDecoder").classList.add("hide"),"nvenc"==this.value?e.querySelector(".fldEnhancedNvdec").classList.remove("hide"):e.querySelector(".fldEnhancedNvdec").classList.add("hide"),this.value?e.querySelector(".hardwareAccelerationOptions").classList.remove("hide"):e.querySelector(".hardwareAccelerationOptions").classList.add("hide"),t=e,a=(a=this.value)||"",Array.prototype.forEach.call(t.querySelectorAll(".chkDecodeCodec"),(function(e){-1===e.getAttribute("data-types").split(",").indexOf(a)?o.ZP.parentWithTag(e,"LABEL").classList.add("hide"):(o.ZP.parentWithTag(e,"LABEL").classList.remove("hide"),c=!0)})),c?t.querySelector(".decodingCodecsList").classList.remove("hide"):t.querySelector(".decodingCodecsList").classList.add("hide")})),$("#btnSelectTranscodingTempPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(a.bind(a,89618)).then((function(t){var a=new(0,t.default);a.show({callback:function(t){t&&$("#txtTranscodingTempPath",e).val(t),a.close()},validateWriteable:!0,header:r.ZP.translate("HeaderSelectTranscodingPath"),instruction:r.ZP.translate("HeaderSelectTranscodingPathHelp")})}))})),$("#btnSelectFallbackFontPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(a.bind(a,89618)).then((function(t){var a=new(0,t.default);a.show({includeDirectories:!0,callback:function(t){t&&(e.querySelector("#txtFallbackFontPath").value=t),a.close()},header:r.ZP.translate("HeaderSelectFallbackFontPath"),instruction:r.ZP.translate("HeaderSelectFallbackFontPathHelp")})}))})),$(".encodingSettingsForm").off("submit",s).on("submit",s)})).on("pageshow","#encodingSettingsPage",(function(){c.ZP.show(),l.Z.setTabs("playback",0,p);var e=this;ApiClient.getNamedConfiguration("encoding").then((function(t){ApiClient.getSystemInfo().then((function(a){!function(e,t,a){Array.prototype.forEach.call(e.querySelectorAll(".chkDecodeCodec"),(function(e){e.checked=-1!==(t.HardwareDecodingCodecs||[]).indexOf(e.getAttribute("data-codec"))})),e.querySelector("#chkDecodingColorDepth10Hevc").checked=t.EnableDecodingColorDepth10Hevc,e.querySelector("#chkDecodingColorDepth10Vp9").checked=t.EnableDecodingColorDepth10Vp9,e.querySelector("#chkEnhancedNvdecDecoder").checked=t.EnableEnhancedNvdecDecoder,e.querySelector("#chkSystemNativeHwDecoder").checked=t.PreferSystemNativeHwDecoder,e.querySelector("#chkIntelLpH264HwEncoder").checked=t.EnableIntelLowPowerH264HwEncoder,e.querySelector("#chkIntelLpHevcHwEncoder").checked=t.EnableIntelLowPowerHevcHwEncoder,e.querySelector("#chkHardwareEncoding").checked=t.EnableHardwareEncoding,e.querySelector("#chkAllowHevcEncoding").checked=t.AllowHevcEncoding,$("#selectVideoDecoder",e).val(t.HardwareAccelerationType),$("#selectThreadCount",e).val(t.EncodingThreadCount),$("#txtDownMixAudioBoost",e).val(t.DownMixAudioBoost),e.querySelector("#txtMaxMuxingQueueSize").value=t.MaxMuxingQueueSize||"",e.querySelector(".txtEncoderPath").value=t.EncoderAppPathDisplay||"",$("#txtTranscodingTempPath",e).val(a.TranscodingTempPath||""),e.querySelector("#txtFallbackFontPath").value=t.FallbackFontPath||"",e.querySelector("#chkEnableFallbackFont").checked=t.EnableFallbackFont,$("#txtVaapiDevice",e).val(t.VaapiDevice||""),e.querySelector("#chkTonemapping").checked=t.EnableTonemapping,e.querySelector("#chkVppTonemapping").checked=t.EnableVppTonemapping,e.querySelector("#selectTonemappingAlgorithm").value=t.TonemappingAlgorithm,e.querySelector("#selectTonemappingMode").value=t.TonemappingMode,e.querySelector("#selectTonemappingRange").value=t.TonemappingRange,e.querySelector("#txtTonemappingDesat").value=t.TonemappingDesat,e.querySelector("#txtTonemappingPeak").value=t.TonemappingPeak,e.querySelector("#txtTonemappingParam").value=t.TonemappingParam||"",e.querySelector("#txtVppTonemappingBrightness").value=t.VppTonemappingBrightness,e.querySelector("#txtVppTonemappingContrast").value=t.VppTonemappingContrast,e.querySelector("#selectEncoderPreset").value=t.EncoderPreset||"",e.querySelector("#txtH264Crf").value=t.H264Crf||"",e.querySelector("#txtH265Crf").value=t.H265Crf||"",e.querySelector("#selectDeinterlaceMethod").value=t.DeinterlaceMethod||"",e.querySelector("#chkDoubleRateDeinterlacing").checked=t.DeinterlaceDoubleRate,e.querySelector("#chkEnableSubtitleExtraction").checked=t.EnableSubtitleExtraction||!1,e.querySelector("#chkEnableThrottling").checked=t.EnableThrottling||!1,e.querySelector("#selectVideoDecoder").dispatchEvent(new CustomEvent("change",{bubbles:!0})),c.ZP.hide()}(e,t,a)}))}))}))}}]);