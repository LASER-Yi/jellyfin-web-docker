"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[90520],{58779:function(e,t,o){o.r(t),o(44962),o(78557),o(90076),o(83994),o(82367),o(63855);var n=o(56869),i=o(9482),r=(o(10353),o(89100)),c=o(41177);function a(){n.Ay.show();var e=this;return ApiClient.getNamedConfiguration("livetv").then((function(t){t.GuideDays=$("#selectGuideDays",e).val()||null;var o=e.querySelector("#txtRecordingPath").value||null,n=e.querySelector("#txtMovieRecordingPath").value||null,a=e.querySelector("#txtSeriesRecordingPath").value||null,s=o!=t.RecordingPath||n!=t.MovieRecordingPath||a!=t.SeriesRecordingPath;t.RecordingPath=o,t.MovieRecordingPath=n,t.SeriesRecordingPath=a,t.RecordingEncodingFormat="mkv",t.PrePaddingSeconds=60*$("#txtPrePaddingMinutes",e).val(),t.PostPaddingSeconds=60*$("#txtPostPaddingMinutes",e).val(),t.RecordingPostProcessor=$("#txtPostProcessor",e).val(),t.RecordingPostProcessorArguments=$("#txtPostProcessorArguments",e).val(),t.SaveRecordingNFO=e.querySelector("#chkSaveRecordingNFO").checked,t.SaveRecordingImages=e.querySelector("#chkSaveRecordingImages").checked,ApiClient.updateNamedConfiguration("livetv",t).then((function(){r.default.processServerConfigurationUpdateResult(),function(e){var t="";e&&(t+=i.Ay.translate("MessageChangeRecordingPath")),t&&(0,c.A)(t)}(s)}))})),!1}$(document).on("pageinit","#liveTvSettingsPage",(function(){var e=this;$(".liveTvSettingsForm").off("submit",a).on("submit",a),$("#btnSelectRecordingPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(o.bind(o,21840)).then((function(t){var o=new(0,t.default);o.show({callback:function(t){t&&$("#txtRecordingPath",e).val(t),o.close()},validateWriteable:!0})}))})),$("#btnSelectMovieRecordingPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(o.bind(o,21840)).then((function(t){var o=new(0,t.default);o.show({callback:function(t){t&&$("#txtMovieRecordingPath",e).val(t),o.close()},validateWriteable:!0})}))})),$("#btnSelectSeriesRecordingPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(o.bind(o,21840)).then((function(t){var o=new(0,t.default);o.show({callback:function(t){t&&$("#txtSeriesRecordingPath",e).val(t),o.close()},validateWriteable:!0})}))})),$("#btnSelectPostProcessorPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(o.bind(o,21840)).then((function(t){var o=new(0,t.default);o.show({includeFiles:!0,callback:function(t){t&&$("#txtPostProcessor",e).val(t),o.close()}})}))}))})).on("pageshow","#liveTvSettingsPage",(function(){n.Ay.show();var e=this;ApiClient.getNamedConfiguration("livetv").then((function(t){!function(e,t){$(".liveTvSettingsForm",e).show(),$(".noLiveTvServices",e).hide(),$("#selectGuideDays",e).val(t.GuideDays||""),$("#txtPrePaddingMinutes",e).val(t.PrePaddingSeconds/60),$("#txtPostPaddingMinutes",e).val(t.PostPaddingSeconds/60),e.querySelector("#txtRecordingPath").value=t.RecordingPath||"",e.querySelector("#txtMovieRecordingPath").value=t.MovieRecordingPath||"",e.querySelector("#txtSeriesRecordingPath").value=t.SeriesRecordingPath||"",e.querySelector("#txtPostProcessor").value=t.RecordingPostProcessor||"",e.querySelector("#txtPostProcessorArguments").value=t.RecordingPostProcessorArguments||"",e.querySelector("#chkSaveRecordingNFO").checked=t.SaveRecordingNFO,e.querySelector("#chkSaveRecordingImages").checked=t.SaveRecordingImages,n.Ay.hide()}(e,t)}))}))}}]);