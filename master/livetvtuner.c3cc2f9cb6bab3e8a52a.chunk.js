"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32379],{34300:function(e,t,r){r.r(t),r.d(t,{default:function(){return d}}),r(5769),r(27471),r(61013),r(98010),r(63238),r(61418),r(17460),r(14078);var l=r(94994),o=r(28540),n=r(72365),c=(r(62033),r(38228),r(12291),r(15856),r(60635)),u=r(85951);function i(e){return-1!==["nextpvr"].indexOf(e||"")}function a(e,t){var r=e.querySelector(".selectType"),l=t.Type||"";t.Source&&i(t.Source)&&(l=t.Source),r.value=l,s.call(r),e.querySelector(".txtDevicePath").value=t.Url||"",e.querySelector(".txtFriendlyName").value=t.FriendlyName||"",e.querySelector(".txtUserAgent").value=t.UserAgent||"",e.querySelector(".fldDeviceId").value=t.DeviceId||"",e.querySelector(".chkFavorite").checked=t.ImportFavoritesOnly,e.querySelector(".chkTranscode").checked=t.AllowHWTranscoding,e.querySelector(".chkStreamLoop").checked=t.EnableStreamLooping,e.querySelector(".chkIgnoreDts").checked=t.IgnoreDts,e.querySelector(".txtTunerCount").value=t.TunerCount||"0"}function s(){var e=this.value,t=n.ZP.parentWithClass(this,"page"),r="hdhomerun"===e,o="hdhomerun"===e,c="hdhomerun"===e,u="hdhomerun"===e,i="m3u"===e,a="m3u"===e,s="m3u"===e,d="m3u"===e,h="m3u"===e,v="other"!==e,y=i,S=t.querySelector(".txtDevicePath");u?(S.label(l.ZP.translate("LabelTunerIpAddress")),t.querySelector(".fldPath").classList.remove("hide")):i?(S.label(l.ZP.translate("LabelFileOrUrl")),t.querySelector(".fldPath").classList.remove("hide")):t.querySelector(".fldPath").classList.add("hide"),y?(t.querySelector(".btnSelectPath").classList.remove("hide"),t.querySelector(".txtDevicePath").setAttribute("required","required")):(t.querySelector(".btnSelectPath").classList.add("hide"),t.querySelector(".txtDevicePath").removeAttribute("required")),h?t.querySelector(".fldUserAgent").classList.remove("hide"):t.querySelector(".fldUserAgent").classList.add("hide"),c?t.querySelector(".fldFavorites").classList.remove("hide"):t.querySelector(".fldFavorites").classList.add("hide"),o?t.querySelector(".fldTranscode").classList.remove("hide"):t.querySelector(".fldTranscode").classList.add("hide"),a?t.querySelector(".fldStreamLoop").classList.remove("hide"):t.querySelector(".fldStreamLoop").classList.add("hide"),s?t.querySelector(".fldIgnoreDts").classList.remove("hide"):t.querySelector(".fldIgnoreDts").classList.add("hide"),d?(t.querySelector(".fldTunerCount").classList.remove("hide"),t.querySelector(".txtTunerCount").setAttribute("required","required")):(t.querySelector(".fldTunerCount").classList.add("hide"),t.querySelector(".txtTunerCount").removeAttribute("required")),r?t.querySelector(".drmMessage").classList.remove("hide"):t.querySelector(".drmMessage").classList.add("hide"),v?t.querySelector(".button-submit").classList.remove("hide"):t.querySelector(".button-submit").classList.add("hide")}function d(e,t){t.id||e.querySelector(".btnDetect").classList.remove("hide"),e.addEventListener("viewshow",(function(){var r=t.id;(function(e,t){return ApiClient.getJSON(ApiClient.getUrl("LiveTv/TunerHosts/Types")).then((function(r){var o=e.querySelector(".selectType"),n="";n+=r.map((function(e){return'<option value="'+e.Id+'">'+e.Name+"</option>"})).join(""),n+='<option value="other">',n+=l.ZP.translate("TabOther"),n+="</option>",o.innerHTML=n,o.disabled=null!=t,o.value="",s.call(o)}))})(e,r).then((function(){!function(e,t){e.querySelector(".txtDevicePath").value="",e.querySelector(".chkFavorite").checked=!1,e.querySelector(".txtDevicePath").value="",t&&ApiClient.getNamedConfiguration("livetv").then((function(r){var l=r.TunerHosts.filter((function(e){return e.Id===t}))[0];a(e,l)}))}(e,r)}))})),e.querySelector("form").addEventListener("submit",(function(t){return function(e){o.ZP.show();var t={Type:e.querySelector(".selectType").value,Url:e.querySelector(".txtDevicePath").value||null,UserAgent:e.querySelector(".txtUserAgent").value||null,FriendlyName:e.querySelector(".txtFriendlyName").value||null,DeviceId:e.querySelector(".fldDeviceId").value||null,TunerCount:e.querySelector(".txtTunerCount").value||0,ImportFavoritesOnly:e.querySelector(".chkFavorite").checked,AllowHWTranscoding:e.querySelector(".chkTranscode").checked,EnableStreamLooping:e.querySelector(".chkStreamLoop").checked,IgnoreDts:e.querySelector(".chkIgnoreDts").checked};i(t.Type)&&(t.Source=t.Type,t.Type="m3u"),(0,u.a)("id")&&(t.Id=(0,u.a)("id")),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/TunerHosts"),data:JSON.stringify(t),contentType:"application/json"}).then((function(){c.ZP.processServerConfigurationUpdateResult(),c.ZP.navigate("livetvstatus.html")}),(function(){o.ZP.hide(),c.ZP.alert({message:l.ZP.translate("ErrorSavingTvProvider")})}))}(e),t.preventDefault(),t.stopPropagation(),!1})),e.querySelector(".selectType").addEventListener("change",s),e.querySelector(".btnDetect").addEventListener("click",(function(){r.e(27021).then(r.bind(r,27021)).then((function(e){return(new(0,e.default)).show({serverId:ApiClient.serverId()})})).then((function(t){a(e,t)}))})),e.querySelector(".btnSelectPath").addEventListener("click",(function(){Promise.resolve().then(r.bind(r,98043)).then((function(t){var r=new(0,t.default);r.show({includeFiles:!0,callback:function(t){t&&(e.querySelector(".txtDevicePath").value=t),r.close()}})}))}))}}}]);