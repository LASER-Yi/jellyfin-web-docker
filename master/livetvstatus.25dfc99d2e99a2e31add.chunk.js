"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[20745],{7204:function(e,t,i){i.r(t),i(5769),i(61013),i(63238),i(61418),i(17460),i(14078),i(72326);var n=i(94994),a=i(5607),s=i(72365),r=i(61570),o=i(30325),d=i(28540),c=i(57366),l=(i(82427),i(38228),i(60635)),u=i(3137),v=!c.Z.slow&&!c.Z.edge;function h(e){var t="card scalableCard backdropCard backdropCard-scalable",i="";return o.Z.tv&&(t+=" show-focus",v&&(t+=" show-animation")),i+='<div type="button" class="'+t+'" data-id="'+e.Id+'">',i+='<div class="cardBox visualCardBox">',i+='<div class="cardScalable visualCardBox-cardScalable">',i+='<div class="cardPadder-backdrop"></div>',i+='<div class="cardContent searchImage">',i+='<div class="cardImageContainer coveredImage '.concat(r.default.getDefaultBackgroundClass(),'"><span class="cardImageIcon material-icons dvr" aria-hidden="true"></span></div>'),i+="</div>",i+="</div>",i+='<div class="cardFooter visualCardBox-cardFooter">',i+='<button is="paper-icon-button-light" class="itemAction btnCardOptions autoSize" data-action="menu"><span class="material-icons more_vert" aria-hidden="true"></span></button>',i+='<div class="cardText">'+(e.FriendlyName||function(e){switch(e.toLowerCase()){case"m3u":return"M3U";case"hdhomerun":return"HDHomeRun";case"hauppauge":return"Hauppauge";case"satip":return"DVB";default:return"Unknown"}}(e.Type))+"</div>",i+='<div class="cardText cardText-secondary">',i+=e.Url||"&nbsp;",i+="</div>",i+="</div>",(i+="</div>")+"</div>"}function p(e){d.ZP.show(),ApiClient.getNamedConfiguration("livetv").then((function(t){!function(e,t){e.querySelector(".devicesList").innerHTML=t.map(h).join("")}(e,t.TunerHosts),function(e,t){var a="";if(t.length){a+='<div class="paperList">';for(var s=0,r=t.length;s<r;s++){var o=t[s];a+='<div class="listItem">',a+='<span class="listItemIcon material-icons dvr" aria-hidden="true"></span>',a+='<div class="listItemBody two-line">',a+='<a is="emby-linkbutton" style="display:block;padding:0;margin:0;text-align:left;" class="clearLink" href="'+m(o.Type)+"&id="+o.Id+'">',a+='<h3 class="listItemBodyText">',a+=f(o.Type),a+="</h3>",a+='<div class="listItemBodyText secondary">',a+=o.Path||o.ListingsId||"",a+="</div>",a+="</a>",a+="</div>",a+='<button type="button" is="paper-icon-button-light" class="btnOptions" data-id="'+o.Id+'"><span class="material-icons listItemAside more_vert" aria-hidden="true"></span></button>',a+="</div>"}a+="</div>"}var c=$(".providerList",e).html(a);$(".btnOptions",c).on("click",(function(){var t=this.getAttribute("data-id");!function(e,t,a){var s=[];s.push({name:n.ZP.translate("Delete"),id:"delete"}),s.push({name:n.ZP.translate("MapChannels"),id:"map"}),Promise.resolve().then(i.bind(i,12801)).then((function(r){r.default.show({items:s,positionTo:a}).then((function(a){switch(a){case"delete":!function(e,t){var i=n.ZP.translate("MessageConfirmDeleteGuideProvider");(0,u.Z)(i,n.ZP.translate("HeaderDeleteProvider")).then((function(){d.ZP.show(),ApiClient.ajax({type:"DELETE",url:ApiClient.getUrl("LiveTv/ListingProviders",{Id:t})}).then((function(){p(e)}),(function(){p(e)}))}))}(e,t);break;case"map":!function(e,t){i.e(89394).then(i.bind(i,89394)).then((function(e){new(0,e.default)({serverId:ApiClient.serverInfo().Id,providerId:t}).show()}))}(0,t)}}))}))}(e,t,this)}))}(e,t.ListingProviders)})),d.ZP.hide()}function f(e){switch(e.toLowerCase()){case"schedulesdirect":return"Schedules Direct";case"xmltv":return"XMLTV";default:return"Unknown"}}function m(e){switch(e.toLowerCase()){case"xmltv":return"#/livetvguideprovider.html?type=xmltv";case"schedulesdirect":return"#/livetvguideprovider.html?type=schedulesdirect"}}function g(e){var t,a,r,o=s.ZP.parentWithClass(e.target,"card");if(o){var c=o.getAttribute("data-id"),v=s.ZP.parentWithClass(e.target,"btnCardOptions");v?(t=v,a=c,(r=[]).push({name:n.ZP.translate("Delete"),id:"delete"}),r.push({name:n.ZP.translate("Edit"),id:"edit"}),Promise.resolve().then(i.bind(i,12801)).then((function(e){e.default.show({items:r,positionTo:t}).then((function(e){switch(e){case"delete":!function(e,t){var i=n.ZP.translate("MessageConfirmDeleteTunerDevice");(0,u.Z)(i,n.ZP.translate("HeaderDeleteDevice")).then((function(){d.ZP.show(),ApiClient.ajax({type:"DELETE",url:ApiClient.getUrl("LiveTv/TunerHosts",{Id:t})}).then((function(){p(e)}))}))}(s.ZP.parentWithClass(t,"page"),a);break;case"edit":l.ZP.navigate("livetvtuner.html?id="+a)}}))}))):l.ZP.navigate("livetvtuner.html?id="+c)}}$(document).on("pageinit","#liveTvStatusPage",(function(){var e=this;$(".btnAddDevice",e).on("click",(function(){l.ZP.navigate("livetvtuner.html")})),$(".formAddDevice",e).on("submit",(function(){return function(e){e.querySelector(".dlgAddDevice").close(),d.ZP.show(),ApiClient.ajax({type:"POST",url:ApiClient.getUrl("LiveTv/TunerHosts"),data:JSON.stringify({Type:$("#selectTunerDeviceType",e).val(),Url:$("#txtDevicePath",e).val()}),contentType:"application/json"}).then((function(){p(e)}),(function(){l.ZP.alert({message:n.ZP.translate("ErrorAddingTunerDevice")})}))}(e),!1})),$(".btnAddProvider",e).on("click",(function(){var e,t;e=this,(t=[]).push({name:"Schedules Direct",id:"SchedulesDirect"}),t.push({name:"XMLTV",id:"xmltv"}),Promise.resolve().then(i.bind(i,12801)).then((function(i){i.default.show({items:t,positionTo:e,callback:function(e){l.ZP.navigate(m(e))}})}))})),e.querySelector(".devicesList").addEventListener("click",g)})).on("pageshow","#liveTvStatusPage",(function(){var e=this;p(e),(0,a.Z)({mode:"on",progressElem:e.querySelector(".refreshGuideProgress"),taskKey:"RefreshGuide",button:e.querySelector(".btnRefresh")})})).on("pagehide","#liveTvStatusPage",(function(){(0,a.Z)({mode:"off",progressElem:this.querySelector(".refreshGuideProgress"),taskKey:"RefreshGuide",button:this.querySelector(".btnRefresh")})}))}}]);