"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4083],{4282:function(e,t,a){a.r(t),a.d(t,{default:function(){return c}}),a(5769),a(61013),a(63238),a(61418),a(17460),a(14078),a(72326);var n=a(51161),r=a(94994),i=(a(25141),a(61881),a(33310),a(19099),a(38228),a(60635)),l=a(37099);function o(){n.ZP.show();var e=this;return $(e).parents(".page"),ApiClient.getServerConfiguration().then((function(t){t.ServerName=$("#txtServerName",e).val(),t.UICulture=$("#selectLocalizationLanguage",e).val(),t.CachePath=e.querySelector("#txtCachePath").value,t.MetadataPath=$("#txtMetadataPath",e).val(),t.MetadataNetworkPath=$("#txtMetadataNetworkPath",e).val(),t.QuickConnectAvailable=e.querySelector("#chkQuickConnectAvailable").checked,ApiClient.updateServerConfiguration(t).then((function(){ApiClient.getNamedConfiguration(s).then((function(t){t.LoginDisclaimer=e.querySelector("#txtLoginDisclaimer").value,t.CustomCss=e.querySelector("#txtCustomCss").value,t.SplashscreenEnabled=e.querySelector("#chkSplashScreenAvailable").checked,ApiClient.updateNamedConfiguration(s,t).then((function(){i.ZP.processServerConfigurationUpdateResult()}))}))}),(function(){(0,l.Z)(r.ZP.translate("ErrorDefault")),i.ZP.processServerConfigurationUpdateResult()}))})),!1}var s="branding";function c(e){$("#btnSelectCachePath",e).on("click.selectDirectory",(function(){Promise.resolve().then(a.bind(a,19403)).then((function(t){var a=new(0,t.default);a.show({callback:function(t){t&&(e.querySelector("#txtCachePath").value=t),a.close()},validateWriteable:!0,header:r.ZP.translate("HeaderSelectServerCachePath"),instruction:r.ZP.translate("HeaderSelectServerCachePathHelp")})}))})),$("#btnSelectMetadataPath",e).on("click.selectDirectory",(function(){Promise.resolve().then(a.bind(a,19403)).then((function(t){var a=new(0,t.default);a.show({path:$("#txtMetadataPath",e).val(),networkSharePath:$("#txtMetadataNetworkPath",e).val(),callback:function(t,n){t&&$("#txtMetadataPath",e).val(t),n&&$("#txtMetadataNetworkPath",e).val(n),a.close()},validateWriteable:!0,header:r.ZP.translate("HeaderSelectMetadataPath"),instruction:r.ZP.translate("HeaderSelectMetadataPathHelp"),enableNetworkSharePath:!0})}))})),$(".dashboardGeneralForm",e).off("submit",o).on("submit",o),e.addEventListener("viewshow",(function(){var t=ApiClient.getServerConfiguration(),a=ApiClient.getJSON(ApiClient.getUrl("Localization/Options")),r=ApiClient.getSystemInfo();Promise.all([t,a,r]).then((function(t){var a,r,i,l;a=e,r=t[0],i=t[1],l=t[2],a.querySelector("#txtServerName").value=l.ServerName,a.querySelector("#txtCachePath").value=l.CachePath||"",a.querySelector("#chkQuickConnectAvailable").checked=!0===r.QuickConnectAvailable,$("#txtMetadataPath",a).val(l.InternalMetadataPath||""),$("#txtMetadataNetworkPath",a).val(l.MetadataNetworkPath||""),$("#selectLocalizationLanguage",a).html(i.map((function(e){return'<option value="'+e.Value+'">'+e.Name+"</option>"}))).val(r.UICulture),n.ZP.hide()})),ApiClient.getNamedConfiguration(s).then((function(t){e.querySelector("#txtLoginDisclaimer").value=t.LoginDisclaimer||"",e.querySelector("#txtCustomCss").value=t.CustomCss||"",e.querySelector("#chkSplashScreenAvailable").checked=!0===t.SplashscreenEnabled}))}))}},61881:function(e,t,a){a(32081),a(20252),a(99785);var n=a(1892),r=a.n(n),i=a(95760),l=a.n(i),o=a(38311),s=a.n(o),c=a(58192),u=a.n(c),h=a(38060),d=a.n(h),v=a(54865),f=a.n(v),b=a(6918),m={};function p(e,t){var a,n=this;function r(){if((!n.lineHeight||n.lineHeight<=0)&&(e.rows=1,a=n.getOffset(e),n.rows=e.rows||1,n.lineHeight=e.scrollHeight/n.rows-a/n.rows,n.maxAllowedHeight=n.lineHeight*t-a),n.lineHeight<=0)return e.style.overflowY="scroll",e.style.height="auto",void(e.rows=3);var r=0;e.scrollHeight-a>n.maxAllowedHeight?(e.style.overflowY="scroll",r=n.maxAllowedHeight):(e.style.overflowY="hidden",e.style.height="auto",r=e.scrollHeight),e.style.height=r+"px"}void 0===t&&(t=999),n.getOffset=function(e){for(var t=window.getComputedStyle(e,null),a=["paddingTop","paddingBottom"],n=0,r=0;r<a.length;r++)n+=parseInt(t[a[r]]);return n},e.addEventListener("input",r),e.addEventListener("focus",r),e.addEventListener("valueset",r),r()}m.styleTagTransform=f(),m.setAttributes=u(),m.insert=s().bind(null,"head"),m.domAPI=l(),m.insertStyleElement=d(),r()(b.Z,m),b.Z&&b.Z.locals&&b.Z.locals,a(67752),a(33310);var g=Object.create(HTMLTextAreaElement.prototype),C=0;if(Object.getOwnPropertyDescriptor&&Object.defineProperty){var x=Object.getOwnPropertyDescriptor(HTMLTextAreaElement.prototype,"value");if(x&&x.configurable){var y=x.set;x.set=function(e){y.call(this,e),this.dispatchEvent(new CustomEvent("valueset",{bubbles:!1,cancelable:!1}))},Object.defineProperty(HTMLTextAreaElement.prototype,"value",x)}}g.createdCallback=function(){this.id||(this.id="embytextarea"+C,C++)},g.attachedCallback=function(){if(!this.classList.contains("emby-textarea")){this.rows=1,this.classList.add("emby-textarea");var e=this.parentNode,t=this.ownerDocument.createElement("label");t.innerText=this.getAttribute("label")||"",t.classList.add("textareaLabel"),t.htmlFor=this.id,e.insertBefore(t,this),this.addEventListener("focus",(function(){t.classList.add("textareaLabelFocused"),t.classList.remove("textareaLabelUnfocused")})),this.addEventListener("blur",(function(){t.classList.remove("textareaLabelFocused"),t.classList.add("textareaLabelUnfocused")})),this.label=function(e){t.innerText=e},new p(this)}},document.registerElement("emby-textarea",{prototype:g,extends:"textarea"})},6918:function(e,t,a){var n=a(54933),r=a.n(n),i=a(93476),l=a.n(i)()(r());l.push([e.id,".emby-textarea{-webkit-tap-highlight-color:rgba(0,0,0,0);box-sizing:border-box;color:inherit;display:block;font-family:inherit;font-size:inherit;font-weight:inherit;margin-bottom:0!important;margin:0;outline:none!important;padding:.35em .25em;width:100%}.emby-textarea::-moz-focus-inner{border:0}.textareaLabel{display:inline-block;margin-bottom:.25em;transition:all .2s ease-out}.emby-textarea+.fieldDescription{margin-top:.25em}",""]),t.Z=l}}]);