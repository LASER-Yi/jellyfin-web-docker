"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[33827],{64658:function(t,e,n){n.r(e),n.d(e,{default:function(){return r}}),n(61013),n(5769),n(63238),n(61418),n(17460),n(14078),n(72326);var i=n(28540),a=(n(38228),n(15856),n(60635));function o(){return function(t){i.ZP.show();var e=ApiClient;e.getJSON(e.getUrl("Startup/Configuration")).then((function(n){n.UICulture=$("#selectLocalizationLanguage",t).val(),e.ajax({type:"POST",data:JSON.stringify(n),url:e.getUrl("Startup/Configuration"),contentType:"application/json"}).then((function(){a.ZP.navigate("wizarduser.html")}))}))}($(this).parents(".page")),!1}function r(t){$(".wizardStartForm",t).on("submit",o),t.addEventListener("viewshow",(function(){document.querySelector(".skinHeader").classList.add("noHomeButtonHeader"),i.ZP.show();var t=this,e=ApiClient,n=e.getJSON(e.getUrl("Startup/Configuration")),a=e.getJSON(e.getUrl("Localization/Options"));Promise.all([n,a]).then((function(e){!function(t,e,n){$("#selectLocalizationLanguage",t).html(n.map((function(t){return'<option value="'+t.Value+'">'+t.Name+"</option>"}))).val(e.UICulture),i.ZP.hide()}(t,e[0],e[1])}))})),t.addEventListener("viewhide",(function(){document.querySelector(".skinHeader").classList.remove("noHomeButtonHeader")}))}}}]);