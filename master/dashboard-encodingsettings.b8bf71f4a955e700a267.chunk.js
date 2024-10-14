"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[81482],{27455:function(e,t,o){o.r(t),o(14382),o(76281),o(84734),o(44962),o(86584),o(78557),o(96054),o(90076),o(83994),o(82367),o(96244);var c,n=o(8566),r=o(5898),a=o(47629),l=o(89100),i=o(41177);function d(){n.Ay.hide(),(0,i.A)(r.Ay.translate("FFmpegSavePathNotFound"))}function u(){var e=this,t=function(){n.Ay.show(),ApiClient.getNamedConfiguration("encoding").then((function(t){t.EnableAudioVbr=e.querySelector("#chkEnableAudioVbr").checked,t.DownMixAudioBoost=$("#txtDownMixAudioBoost",e).val(),t.DownMixStereoAlgorithm=$("#selectStereoDownmixAlgorithm",e).val()||"None",t.MaxMuxingQueueSize=e.querySelector("#txtMaxMuxingQueueSize").value,t.TranscodingTempPath=$("#txtTranscodingTempPath",e).val(),t.FallbackFontPath=e.querySelector("#txtFallbackFontPath").value,t.EnableFallbackFont=!!e.querySelector("#txtFallbackFontPath").value&&e.querySelector("#chkEnableFallbackFont").checked,t.EncodingThreadCount=$("#selectThreadCount",e).val(),t.HardwareAccelerationType=$("#selectVideoDecoder",e).val(),t.VaapiDevice=$("#txtVaapiDevice",e).val(),t.QsvDevice=e.querySelector("#txtQsvDevice").value,t.EnableTonemapping=e.querySelector("#chkTonemapping").checked,t.EnableVppTonemapping=e.querySelector("#chkVppTonemapping").checked,t.EnableVideoToolboxTonemapping=e.querySelector("#chkVideoToolboxTonemapping").checked,t.TonemappingAlgorithm=e.querySelector("#selectTonemappingAlgorithm").value,t.TonemappingMode=e.querySelector("#selectTonemappingMode").value,t.TonemappingRange=e.querySelector("#selectTonemappingRange").value,t.TonemappingDesat=e.querySelector("#txtTonemappingDesat").value,t.TonemappingPeak=e.querySelector("#txtTonemappingPeak").value,t.TonemappingParam=e.querySelector("#txtTonemappingParam").value||"0",t.VppTonemappingBrightness=e.querySelector("#txtVppTonemappingBrightness").value,t.VppTonemappingContrast=e.querySelector("#txtVppTonemappingContrast").value,t.EncoderPreset=e.querySelector("#selectEncoderPreset").value,t.H264Crf=parseInt(e.querySelector("#txtH264Crf").value||"0",10),t.H265Crf=parseInt(e.querySelector("#txtH265Crf").value||"0",10),t.DeinterlaceMethod=e.querySelector("#selectDeinterlaceMethod").value,t.DeinterlaceDoubleRate=e.querySelector("#chkDoubleRateDeinterlacing").checked,t.EnableSubtitleExtraction=e.querySelector("#chkEnableSubtitleExtraction").checked,t.EnableThrottling=e.querySelector("#chkEnableThrottling").checked,t.EnableSegmentDeletion=e.querySelector("#chkEnableSegmentDeletion").checked,t.ThrottleDelaySeconds=parseInt(e.querySelector("#txtThrottleDelaySeconds").value||"0",10),t.SegmentKeepSeconds=parseInt(e.querySelector("#txtSegmentKeepSeconds").value||"0",10),t.HardwareDecodingCodecs=Array.prototype.map.call(Array.prototype.filter.call(e.querySelectorAll(".chkDecodeCodec"),(function(e){return e.checked})),(function(e){return e.getAttribute("data-codec")})),t.EnableDecodingColorDepth10Hevc=e.querySelector("#chkDecodingColorDepth10Hevc").checked,t.EnableDecodingColorDepth10Vp9=e.querySelector("#chkDecodingColorDepth10Vp9").checked,t.EnableDecodingColorDepth10HevcRext=e.querySelector("#chkDecodingColorDepth10HevcRext").checked,t.EnableDecodingColorDepth12HevcRext=e.querySelector("#chkDecodingColorDepth12HevcRext").checked,t.EnableEnhancedNvdecDecoder=e.querySelector("#chkEnhancedNvdecDecoder").checked,t.PreferSystemNativeHwDecoder=e.querySelector("#chkSystemNativeHwDecoder").checked,t.EnableIntelLowPowerH264HwEncoder=e.querySelector("#chkIntelLpH264HwEncoder").checked,t.EnableIntelLowPowerHevcHwEncoder=e.querySelector("#chkIntelLpHevcHwEncoder").checked,t.EnableHardwareEncoding=e.querySelector("#chkHardwareEncoding").checked,t.AllowHevcEncoding=e.querySelector("#chkAllowHevcEncoding").checked,t.AllowAv1Encoding=e.querySelector("#chkAllowAv1Encoding").checked,ApiClient.updateNamedConfiguration("encoding",t).then((function(){!function(e){ApiClient.getSystemInfo().then((function(){return ApiClient.ajax({url:ApiClient.getUrl("System/MediaEncoder/Path"),type:"POST",data:JSON.stringify({Path:e.querySelector(".txtEncoderPath").value,PathType:"Custom"}),contentType:"application/json"}).then(l.default.processServerConfigurationUpdateResult,d)}))}(e)}),(function(){(0,i.A)(r.Ay.translate("ErrorDefault")),l.default.processServerConfigurationUpdateResult()}))}))};return"none"!==$("#selectVideoDecoder",e).val()?(0,i.A)({title:r.Ay.translate("TitleHardwareAcceleration"),text:r.Ay.translate("HardwareAccelerationWarning")}).then(t):t(),!1}$(document).on("pageinit","#encodingSettingsPage",(function(){var e=this;c?Promise.resolve(c):ApiClient.getPublicSystemInfo().then((function(e){return c=e,e})),e.querySelector("#selectVideoDecoder").addEventListener("change",(function(){"vaapi"==this.value?(e.querySelector(".fldVaapiDevice").classList.remove("hide"),e.querySelector("#txtVaapiDevice").setAttribute("required","required")):(e.querySelector(".fldVaapiDevice").classList.add("hide"),e.querySelector("#txtVaapiDevice").removeAttribute("required")),"amf"==this.value||"nvenc"==this.value||"qsv"==this.value||"vaapi"==this.value||"rkmpp"==this.value?e.querySelector(".fld10bitHevcVp9HwDecoding").classList.remove("hide"):e.querySelector(".fld10bitHevcVp9HwDecoding").classList.add("hide"),"nvenc"==this.value||"qsv"==this.value||"vaapi"==this.value?e.querySelector(".fldHevcRextHwDecoding").classList.remove("hide"):e.querySelector(".fldHevcRextHwDecoding").classList.add("hide");var t,o,c,n=["amf","nvenc","qsv","vaapi","rkmpp","videotoolbox"].includes(this.value);"none"===this.value||n?e.querySelector(".tonemappingOptions").classList.remove("hide"):e.querySelector(".tonemappingOptions").classList.add("hide"),e.querySelector(".tonemappingModeOptions").classList.toggle("hide",!n),e.querySelector(".allowTonemappingHardwareHelp").classList.toggle("hide",!n),e.querySelector(".allowTonemappingSoftwareHelp").classList.toggle("hide",n),"qsv"==this.value||"vaapi"==this.value?e.querySelector(".fldIntelLp").classList.remove("hide"):e.querySelector(".fldIntelLp").classList.add("hide"),"videotoolbox"===this.value?e.querySelector(".videoToolboxTonemappingOptions").classList.remove("hide"):e.querySelector(".videoToolboxTonemappingOptions").classList.add("hide"),"qsv"==this.value||"vaapi"==this.value?e.querySelector(".vppTonemappingOptions").classList.remove("hide"):e.querySelector(".vppTonemappingOptions").classList.add("hide"),"qsv"==this.value?(e.querySelector(".fldSysNativeHwDecoder").classList.remove("hide"),e.querySelector(".fldQsvDevice").classList.remove("hide"),e.querySelector("#txtQsvDevice").setAttribute("required","required")):(e.querySelector(".fldSysNativeHwDecoder").classList.add("hide"),e.querySelector(".fldQsvDevice").classList.add("hide"),e.querySelector("#txtQsvDevice").removeAttribute("required")),"nvenc"==this.value?e.querySelector(".fldEnhancedNvdec").classList.remove("hide"):e.querySelector(".fldEnhancedNvdec").classList.add("hide"),"none"!==this.value?e.querySelector(".hardwareAccelerationOptions").classList.remove("hide"):e.querySelector(".hardwareAccelerationOptions").classList.add("hide"),t=e,o=(o=this.value)||"",Array.prototype.forEach.call(t.querySelectorAll(".chkDecodeCodec"),(function(e){-1===e.getAttribute("data-types").split(",").indexOf(o)?a.Ay.parentWithTag(e,"LABEL").classList.add("hide"):(a.Ay.parentWithTag(e,"LABEL").classList.remove("hide"),c=!0)})),c?t.querySelector(".decodingCodecsList").classList.remove("hide"):t.querySelector(".decodingCodecsList").classList.add("hide")})),$("#btnSelectTranscodingTempPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(o.bind(o,21840)).then((function(t){var o=new(0,t.default);o.show({callback:function(t){t&&$("#txtTranscodingTempPath",e).val(t),o.close()},validateWriteable:!0,header:r.Ay.translate("HeaderSelectTranscodingPath"),instruction:r.Ay.translate("HeaderSelectTranscodingPathHelp")})}))})),$("#btnSelectFallbackFontPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(o.bind(o,21840)).then((function(t){var o=new(0,t.default);o.show({includeDirectories:!0,callback:function(t){t&&(e.querySelector("#txtFallbackFontPath").value=t),o.close()},header:r.Ay.translate("HeaderSelectFallbackFontPath"),instruction:r.Ay.translate("HeaderSelectFallbackFontPathHelp")})}))})),$(".encodingSettingsForm").off("submit",u).on("submit",u)})).on("pageshow","#encodingSettingsPage",(function(){n.Ay.show();var e=this;ApiClient.getNamedConfiguration("encoding").then((function(t){ApiClient.getSystemInfo().then((function(o){!function(e,t,o){Array.prototype.forEach.call(e.querySelectorAll(".chkDecodeCodec"),(function(e){e.checked=-1!==(t.HardwareDecodingCodecs||[]).indexOf(e.getAttribute("data-codec"))})),e.querySelector("#chkDecodingColorDepth10Hevc").checked=t.EnableDecodingColorDepth10Hevc,e.querySelector("#chkDecodingColorDepth10Vp9").checked=t.EnableDecodingColorDepth10Vp9,e.querySelector("#chkDecodingColorDepth10HevcRext").checked=t.EnableDecodingColorDepth10HevcRext,e.querySelector("#chkDecodingColorDepth12HevcRext").checked=t.EnableDecodingColorDepth12HevcRext,e.querySelector("#chkEnhancedNvdecDecoder").checked=t.EnableEnhancedNvdecDecoder,e.querySelector("#chkSystemNativeHwDecoder").checked=t.PreferSystemNativeHwDecoder,e.querySelector("#chkIntelLpH264HwEncoder").checked=t.EnableIntelLowPowerH264HwEncoder,e.querySelector("#chkIntelLpHevcHwEncoder").checked=t.EnableIntelLowPowerHevcHwEncoder,e.querySelector("#chkHardwareEncoding").checked=t.EnableHardwareEncoding,e.querySelector("#chkAllowHevcEncoding").checked=t.AllowHevcEncoding,e.querySelector("#chkAllowAv1Encoding").checked=t.AllowAv1Encoding,$("#selectVideoDecoder",e).val(t.HardwareAccelerationType||"none"),$("#selectThreadCount",e).val(t.EncodingThreadCount),e.querySelector("#chkEnableAudioVbr").checked=t.EnableAudioVbr,$("#txtDownMixAudioBoost",e).val(t.DownMixAudioBoost),$("#selectStereoDownmixAlgorithm").val(t.DownMixStereoAlgorithm||"None"),e.querySelector("#txtMaxMuxingQueueSize").value=t.MaxMuxingQueueSize||"",e.querySelector(".txtEncoderPath").value=t.EncoderAppPathDisplay||"",$("#txtTranscodingTempPath",e).val(o.TranscodingTempPath||""),e.querySelector("#txtFallbackFontPath").value=t.FallbackFontPath||"",e.querySelector("#chkEnableFallbackFont").checked=t.EnableFallbackFont,$("#txtVaapiDevice",e).val(t.VaapiDevice||""),e.querySelector("#txtQsvDevice").value=t.QsvDevice||"",e.querySelector("#chkTonemapping").checked=t.EnableTonemapping,e.querySelector("#chkVppTonemapping").checked=t.EnableVppTonemapping,e.querySelector("#chkVideoToolboxTonemapping").checked=t.EnableVideoToolboxTonemapping,e.querySelector("#selectTonemappingAlgorithm").value=t.TonemappingAlgorithm||"none",e.querySelector("#selectTonemappingMode").value=t.TonemappingMode||"auto",e.querySelector("#selectTonemappingRange").value=t.TonemappingRange||"auto",e.querySelector("#txtTonemappingDesat").value=t.TonemappingDesat,e.querySelector("#txtTonemappingPeak").value=t.TonemappingPeak,e.querySelector("#txtTonemappingParam").value=t.TonemappingParam||"",e.querySelector("#txtVppTonemappingBrightness").value=t.VppTonemappingBrightness,e.querySelector("#txtVppTonemappingContrast").value=t.VppTonemappingContrast,e.querySelector("#selectEncoderPreset").value=t.EncoderPreset||"auto",e.querySelector("#txtH264Crf").value=t.H264Crf||"",e.querySelector("#txtH265Crf").value=t.H265Crf||"",e.querySelector("#selectDeinterlaceMethod").value=t.DeinterlaceMethod||"yadif",e.querySelector("#chkDoubleRateDeinterlacing").checked=t.DeinterlaceDoubleRate,e.querySelector("#chkEnableSubtitleExtraction").checked=t.EnableSubtitleExtraction||!1,e.querySelector("#chkEnableThrottling").checked=t.EnableThrottling||!1,e.querySelector("#chkEnableSegmentDeletion").checked=t.EnableSegmentDeletion||!1,e.querySelector("#txtThrottleDelaySeconds").value=t.ThrottleDelaySeconds||"",e.querySelector("#txtSegmentKeepSeconds").value=t.SegmentKeepSeconds||"",e.querySelector("#selectVideoDecoder").dispatchEvent(new CustomEvent("change",{bubbles:!0})),n.Ay.hide()}(e,t,o)}))}))}))}}]);