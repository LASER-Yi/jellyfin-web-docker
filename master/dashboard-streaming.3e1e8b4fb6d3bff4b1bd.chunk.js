"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74785],{84305:function(t,e,n){n.r(e),n(32081),n(43512),n(72326);var i=n(71487),a=n(28540),r=n(94994),o=n(60635);function s(){a.ZP.show();var t=this;return ApiClient.getServerConfiguration().then((function(e){e.RemoteClientBitrateLimit=parseInt(1e6*parseFloat($("#txtRemoteClientBitrateLimit",t).val()||"0")),ApiClient.updateServerConfiguration(e).then(o.default.processServerConfigurationUpdateResult)})),!1}function u(){return[{href:"#/encodingsettings.html",name:r.ZP.translate("Transcoding")},{href:"#/playbackconfiguration.html",name:r.ZP.translate("ButtonResume")},{href:"#/streamingsettings.html",name:r.ZP.translate("TabStreaming")}]}$(document).on("pageinit","#streamingSettingsPage",(function(){$(".streamingSettingsForm").off("submit",s).on("submit",s)})).on("pageshow","#streamingSettingsPage",(function(){a.ZP.show(),i.Z.setTabs("playback",2,u);var t=this;ApiClient.getServerConfiguration().then((function(e){!function(t,e){$("#txtRemoteClientBitrateLimit",t).val(e.RemoteClientBitrateLimit/1e6||""),a.ZP.hide()}(t,e)}))}))}}]);