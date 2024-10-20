"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[72993,19069],{70249:function(e,t,i){i.r(t),i(14382),i(78557),i(90076);var r=i(79754),n=i(47629),a=i(46782),s=i(5898),d=i(8566),l=i(34789),o=i(9164),c=i(10838),u=(i(10353),i(1177),!l.A.slow&&!l.A.edge);function h(e){var t="",i="card scalableCard backdropCard backdropCard-scalable";return a.A.tv&&(i+=" show-focus",u&&(i+=" show-animation")),t+='<button type="button" class="'+i+'" data-id="'+e.DeviceId+'" style="min-width:33.3333%;">',t+='<div class="cardBox visualCardBox">',t+='<div class="cardScalable visualCardBox-cardScalable">',t+='<div class="cardPadder-backdrop"></div>',t+='<div class="cardContent searchImage">',t+='<div class="cardImageContainer coveredImage"><span class="cardImageIcon material-icons dvr" aria-hidden="true"></span></div>',t+="</div>",t+="</div>",t+='<div class="cardFooter visualCardBox-cardFooter">',t+='<div class="cardText cardTextCentered">'+function(e){switch(e.toLowerCase()){case"m3u":return"M3U";case"hdhomerun":return"HDHomerun";case"hauppauge":return"Hauppauge";case"satip":return"DVB";default:return"Unknown"}}(e.Type)+"</div>",t+='<div class="cardText cardTextCentered cardText-secondary">'+e.FriendlyName+"</div>",t+='<div class="cardText cardText-secondary cardTextCentered">',t+=e.Url||"&nbsp;",t+="</div>",t+="</div>",(t+="</div>")+"</button>"}var f=[];t.default=function(){this.show=function(){var e={removeOnClose:!0,scrollY:!1};a.A.tv?e.size="fullscreen":e.size="small";var t=r.default.createDialog(e);t.classList.add("formDialog");var i,l,u="";return u+='<div class="formDialogHeader">',u+='<button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="'.concat(s.Ay.translate("ButtonBack"),'"><span class="material-icons arrow_back" aria-hidden="true"></span></button>'),u+='<h3 class="formDialogHeaderTitle">',u+=s.Ay.translate("HeaderLiveTvTunerSetup"),u+="</h3>",u+="</div>",u+=function(){var e="";return e+='<div class="formDialogContent scrollY">',e+='<div class="dialogContentInner dialog-content-centered">',e+='<div class="loadingContent hide">',e+="<h1>"+s.Ay.translate("DetectingDevices")+"...</h1>",e+="<p>"+s.Ay.translate("MessagePleaseWait")+"</p>",e+="</div>",e+='<h1 style="margin-bottom:.25em;" class="devicesHeader hide">'+s.Ay.translate("HeaderNewDevices")+"</h1>",e+='<div is="emby-itemscontainer" class="results vertical-wrap">',e+="</div>",(e+="</div>")+"</div>"}(),t.innerHTML=u,t.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(t)})),t.querySelector(".results").addEventListener("click",(function(e){var a=n.Ay.parentWithClass(e.target,"card");if(a){var s=a.getAttribute("data-id");i=f.filter((function(e){return e.DeviceId===s}))[0],r.default.close(t)}})),a.A.tv&&c.default.centerFocus.on(t.querySelector(".formDialogContent"),!1),l=t,d.Ay.show(),l.querySelector(".loadingContent").classList.remove("hide"),ApiClient.getJSON(ApiClient.getUrl("LiveTv/Tuners/Discover",{NewDevicesOnly:!0})).then((function(e){f=e,function(e,t){for(var i="",r=0,n=t.length;r<n;r++)i+=h(t[r]);t.length?e.querySelector(".devicesHeader").classList.remove("hide"):(i="<p><br/>"+s.Ay.translate("NoNewDevicesFound")+"</p>",e.querySelector(".devicesHeader").classList.add("hide"));var d=e.querySelector(".results");d.innerHTML=i,a.A.tv&&o.A.autoFocus(d)}(l,e),l.querySelector(".loadingContent").classList.add("hide"),d.Ay.hide()})),a.A.tv&&c.default.centerFocus.off(t.querySelector(".formDialogContent"),!1),r.default.open(t).then((function(){return i?Promise.resolve(i):Promise.reject()}))}}},1177:function(e,t,i){i(84734),i(44962),i(78557),i(96054),i(90076),i(83994),i(82367);var r=i(22832),n=i(38490),a=i(21069),s=i(76542),d=i(46782),l=i(34789),o=i(47629),c=i(8566),u=i(9164),h=i(10736),f=i(44797),v=(i(69177),i(86191)),m=i(65210),b=Object.create(HTMLDivElement.prototype);function g(e){var t=this,i=t.multiSelect;!1!==(null==i?void 0:i.onContainerClick.call(t,e))&&r.Ay.onClick.call(t,e)}function y(e){return e.preventDefault(),e.stopPropagation(),!1}function p(e){var t=e.target,i=o.Ay.parentWithAttribute(t,"data-id");if(null!=i&&i.getAttribute("data-serverid"))return n.default.handleCommand("menu",{sourceElement:i}),e.preventDefault(),e.stopPropagation(),!1}function C(e,t,r){var n=this;Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onUserDataChanged(r,n)}));var a=A(n);-1===a.indexOf("markfavorite")&&-1===a.indexOf("markplayed")||n.notifyRefreshNeeded()}function A(e){var t=e.getAttribute("data-monitor");return t?t.split(","):[]}function I(e,t,r){var n=this;if(-1===A(n).indexOf("timers")){var a=r.ProgramId,s=r.Id;Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onTimerCreated(a,s,n)}))}else n.notifyRefreshNeeded()}function T(){-1!==A(this).indexOf("seriestimers")&&this.notifyRefreshNeeded()}function x(e,t,r){var n=this;-1===A(n).indexOf("timers")?Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onTimerCancelled(r.Id,n)})):n.notifyRefreshNeeded()}function D(e,t,r){var n=this;-1===A(n).indexOf("seriestimers")?Promise.all([i.e(45642),i.e(24468),i.e(14980)]).then(i.bind(i,24468)).then((function(e){e.onSeriesTimerCancelled(r.Id,n)})):n.notifyRefreshNeeded()}function k(e,t,i){var r=this,n=A(r);if(-1===n.indexOf("seriestimers")&&-1===n.indexOf("timers")){var a=i.ItemsAdded||[],s=i.ItemsRemoved||[];if(a.length||s.length){var d=r.getAttribute("data-parentid");if(d){var l=i.FoldersAddedTo||[],o=i.FoldersRemovedFrom||[],c=i.CollectionFolders||[];if(-1===l.indexOf(d)&&-1===o.indexOf(d)&&-1===c.indexOf(d))return}r.notifyRefreshNeeded()}}}function w(e,t){var i,r=this,n=t.state,a=A(r);if(n.NowPlayingItem&&"Video"===n.NowPlayingItem.MediaType){if(-1!==a.indexOf("videoplayback"))return void r.notifyRefreshNeeded(!0)}else if("Audio"===(null===(i=n.NowPlayingItem)||void 0===i?void 0:i.MediaType)&&-1!==a.indexOf("audioplayback"))return void r.notifyRefreshNeeded(!0)}function S(e,t,i,r){var n=i.bind(e);r=r||h.default,f.A.on(r,t,n),e["event_"+t]=n}function L(e,t,i){var r=e["event_"+t];r&&(i=i||h.default,f.A.off(i,t,r),e["event_"+t]=null)}function R(e,t){e.refreshInterval&&(clearInterval(e.refreshInterval),e.refreshInterval=null,t||(e.refreshIntervalEndTime=null))}function E(e,t){R(e),t||(t=parseInt(e.getAttribute("data-refreshinterval")||"0",10)),t&&(e.refreshInterval=setInterval(e.notifyRefreshNeeded.bind(e),t),e.refreshIntervalEndTime=(new Date).getTime()+t)}function N(e){var t=e.Items||e,i=this.parentContainer;i&&(t.length?i.classList.remove("hide"):i.classList.add("hide"));var r,n,a=document.activeElement;this.contains(a)&&(n=!0,r=a.getAttribute("data-id")),this.innerHTML=this.getItemsHtml(t),s.default.lazyChildren(this),n&&function(e,t){if(t){var i=e.querySelector('[data-id="'+t+'"]');if(i)try{return void u.A.focus(i)}catch(e){console.error(e)}}u.A.autoFocus(e)}(this,r),E(this),this.afterRefresh&&this.afterRefresh(e)}b.enableMultiSelect=function(e){var t=this.multiSelect;if(e){if(!t){var r=this;i.e(35308).then(i.bind(i,35308)).then((function(e){var t=e.default;r.multiSelect=new t({container:r,bindOnClick:!1})}))}}else t&&(t.destroy(),this.multiSelect=null)},b.enableDragReordering=function(e){var t=this.sortable;if(e){if(!t){var i=this;i.sortable=new m.Ay(i,{draggable:".listItem",handle:".listViewDragHandle",onEnd:function(e){return function(e,t){var i=e.item,r=e.newIndex,n=i.getAttribute("data-playlistitemid"),a=i.getAttribute("data-playlistid");if(a){var s=i.getAttribute("data-serverid"),d=v.A.getApiClient(s);c.Ay.show(),d.ajax({url:d.getUrl("Playlists/"+a+"/Items/"+n+"/Move/"+r),type:"POST"}).then((function(){c.Ay.hide()}),(function(){c.Ay.hide(),t.refreshItems()}))}else{var l=e.oldIndex;i.dispatchEvent(new CustomEvent("itemdrop",{detail:{oldIndex:l,newIndex:r,playlistItemId:n},bubbles:!0,cancelable:!1}))}}(e,i)}})}}else t&&(t.destroy(),this.sortable=null)},b.createdCallback=function(){this.classList.add("itemsContainer")},b.attachedCallback=function(){this.addEventListener("click",g),l.A.touch?this.addEventListener("contextmenu",y):"false"!==this.getAttribute("data-contextmenu")&&this.addEventListener("contextmenu",p),(d.A.desktop||d.A.mobile&&"false"!==this.getAttribute("data-multiselect"))&&this.enableMultiSelect(!0),d.A.tv&&this.classList.add("itemsContainer-tv"),r.Ay.on(this,{click:!1}),S(this,"UserDataChanged",C),S(this,"TimerCreated",I),S(this,"SeriesTimerCreated",T),S(this,"TimerCancelled",x),S(this,"SeriesTimerCancelled",D),S(this,"LibraryChanged",k),S(this,"playbackstop",w,a.f),"true"===this.getAttribute("data-dragreorder")&&this.enableDragReordering(!0)},b.detachedCallback=function(){R(this),this.enableMultiSelect(!1),this.enableDragReordering(!1),this.removeEventListener("click",g),this.removeEventListener("contextmenu",p),this.removeEventListener("contextmenu",y),r.Ay.off(this,{click:!1}),L(this,"UserDataChanged"),L(this,"TimerCreated"),L(this,"SeriesTimerCreated"),L(this,"TimerCancelled"),L(this,"SeriesTimerCancelled"),L(this,"LibraryChanged"),L(this,"playbackstop",a.f),this.fetchData=null,this.getItemsHtml=null,this.parentContainer=null},b.pause=function(){R(this,!0),this.paused=!0},b.resume=function(e){this.paused=!1;var t=this.refreshIntervalEndTime;if(t){var i=t-(new Date).getTime();i>0&&!this.needsRefresh?E(this,i):(this.needsRefresh=!0,this.refreshIntervalEndTime=null)}return this.needsRefresh||null!=e&&e.refresh?this.refreshItems():Promise.resolve()},b.refreshItems=function(){return this.fetchData?this.paused?(this.needsRefresh=!0,Promise.resolve()):(this.needsRefresh=!1,this.fetchData().then(N.bind(this))):Promise.resolve()},b.notifyRefreshNeeded=function(e){if(this.paused)this.needsRefresh=!0;else{var t=this.refreshTimeout;t&&clearTimeout(t),!0===e?this.refreshItems():this.refreshTimeout=setTimeout(this.refreshItems.bind(this),1e4)}},document.registerElement("emby-itemscontainer",{prototype:b,extends:"div"})}}]);