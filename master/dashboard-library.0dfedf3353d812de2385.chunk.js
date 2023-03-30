"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[32118,23366,53152],{77693:function(e,t,a){a.r(t),a(5769),a(63238),a(61418),a(17460),a(14078),a(98010),a(32081);var r=a(65009),i=a.n(r),s=(a(72326),a(5607)),n=a(28540),o=a(71487),d=a(94994),l=a(72365),c=a(51869),h=(a(23366),a(60635)),m=a(3137),u=a(61570);function v(e,t){Promise.all([a.e(6535),a.e(26783)]).then(a.bind(a,78978)).then((function(a){new(0,a.default)({refresh:f(e),library:t}).then((function(t){t&&b(e)}))}))}function b(e){n.ZP.show(),ApiClient.getVirtualFolders().then((function(t){!function(e,t){var r="";t.push({Name:d.ZP.translate("ButtonAddMediaLibrary"),icon:"add_circle",Locations:[],showType:!1,showLocations:!1,showMenu:!1,showNameWithIcon:!1,elementId:"addLibrary"});for(var i=0;i<t.length;i++){var s=t[i];r+=y(e,s,i)}var o=e.querySelector("#divVirtualFolders");o.innerHTML=r,o.classList.add("itemsContainer"),o.classList.add("vertical-wrap"),$(".btnCardMenu",o).on("click",(function(){!function(e,t,r){var i=l.ZP.parentWithClass(t,"card"),s=r[parseInt(i.getAttribute("data-index"),10)],n=[];n.push({name:d.ZP.translate("EditImages"),id:"editimages",icon:"photo"}),n.push({name:d.ZP.translate("ManageLibrary"),id:"edit",icon:"folder"}),n.push({name:d.ZP.translate("ButtonRename"),id:"rename",icon:"mode_edit"}),n.push({name:d.ZP.translate("ScanLibrary"),id:"refresh",icon:"refresh"}),n.push({name:d.ZP.translate("ButtonRemove"),id:"delete",icon:"delete"}),Promise.resolve().then(a.bind(a,12801)).then((function(r){r.show({items:n,positionTo:t,callback:function(t){switch(t){case"edit":v(e,s);break;case"editimages":!function(e,t){a.e(40176).then(a.bind(a,23635)).then((function(a){a.show({itemId:t.ItemId,serverId:ApiClient.serverId()}).then((function(){b(e)}))}))}(e,s);break;case"rename":!function(e,t){a.e(23690).then(a.bind(a,23690)).then((function(a){(0,a.default)({label:d.ZP.translate("LabelNewName"),description:d.ZP.translate("MessageRenameMediaFolder"),confirmText:d.ZP.translate("ButtonRename")}).then((function(a){if(a&&a!=t.Name){var r=f(e);ApiClient.renameVirtualFolder(t.Name,a,r).then((function(){b(e)}))}}))}))}(e,s);break;case"delete":!function(e,t){var a=d.ZP.translate("MessageAreYouSureYouWishToRemoveMediaFolder");t.Locations.length&&(a+="<br/><br/>"+d.ZP.translate("MessageTheFollowingLocationWillBeRemovedFromLibrary")+"<br/><br/>",a+=t.Locations.join("<br/>")),(0,m.Z)({text:a,title:d.ZP.translate("HeaderRemoveMediaFolder"),confirmText:d.ZP.translate("Delete"),primary:"delete"}).then((function(){var a=f(e);ApiClient.removeVirtualFolder(t.Name,a).then((function(){b(e)}))}))}(e,s);break;case"refresh":!function(e,t){a.e(36929).then(a.bind(a,36929)).then((function(e){new(0,e.default)({itemIds:[t.ItemId],serverId:ApiClient.serverId(),mode:"scan"}).show()}))}(0,s)}}})}))}(e,this,t)})),o.querySelector("#addLibrary").addEventListener("click",(function(){!function(e){Promise.all([a.e(6535),a.e(13791)]).then(a.bind(a,83173)).then((function(t){new(0,t.default)({collectionTypeOptions:p().filter((function(e){return!e.hidden})),refresh:f(e)}).then((function(t){t&&b(e)}))}))}(e)})),$(".editLibrary",o).on("click",(function(){var a=$(this).parents(".card")[0],r=parseInt(a.getAttribute("data-index"),10),i=t[r];i.ItemId&&v(e,i)})),n.ZP.hide()}(e,t)}))}function f(e){return"mediaLibraryPage"===e.id}function g(e,t){return d.ZP.translate(e,'<a is="emby-linkbutton" class="button-link" href="'+t+'" target="_blank" data-autohide="true">',"</a>")}function p(){return[{name:"",value:""},{name:d.ZP.translate("Movies"),value:"movies",message:g("MovieLibraryHelp","https://jellyfin.org/docs/general/server/media/movies")},{name:d.ZP.translate("TabMusic"),value:"music",message:g("MusicLibraryHelp","https://jellyfin.org/docs/general/server/media/music")},{name:d.ZP.translate("Shows"),value:"tvshows",message:g("TvLibraryHelp","https://jellyfin.org/docs/general/server/media/shows")},{name:d.ZP.translate("Books"),value:"books",message:g("BookLibraryHelp","https://jellyfin.org/docs/general/server/media/books")},{name:d.ZP.translate("HomeVideosPhotos"),value:"homevideos"},{name:d.ZP.translate("MusicVideos"),value:"musicvideos"},{name:d.ZP.translate("MixedMoviesShows"),value:"mixed",message:d.ZP.translate("MessageUnsetContentHelp")}]}function y(e,t,a){var r="",s="";e.classList.contains("wizardPage")&&(s+="min-width:33.3%;"),r+="<div "+(t.elementId?'id="'.concat(t.elementId,'" '):"")+'class="card backdropCard scalableCard backdropCard-scalable" style="'+s+'" data-index="'+a+'" data-id="'+t.ItemId+'">',r+='<div class="cardBox visualCardBox">',r+='<div class="cardScalable visualCardBox-cardScalable">',r+='<div class="cardPadder cardPadder-backdrop"></div>',r+='<div class="cardContent">';var n,o="";if(t.PrimaryImageItemId&&(o=ApiClient.getScaledImageUrl(t.PrimaryImageItemId,{maxWidth:Math.round(.4*l.ZP.getScreenWidth()),type:"Primary"})),o?(r+='<div class="cardImageContainer editLibrary '.concat(o?"":u.default.getDefaultBackgroundClass(),'" style="cursor:pointer">'),r+='<img src="'.concat(o,'" style="width:100%" />'),n=!0):t.showNameWithIcon||(r+='<div class="cardImageContainer editLibrary '.concat(u.default.getDefaultBackgroundClass(),'" style="cursor:pointer;">'),r+='<span class="cardImageIcon material-icons '+(t.icon||c.ZP.getLibraryIcon(t.CollectionType))+'" aria-hidden="true"></span>',n=!0),n&&(r+='<div class="cardIndicators backdropCardIndicators">',r+='<div is="emby-itemrefreshindicator"'+(t.RefreshProgress||t.RefreshStatus&&"Idle"!==t.RefreshStatus?"":' class="hide"')+' data-progress="'+(t.RefreshProgress||0)+'" data-status="'+t.RefreshStatus+'"></div>',r+="</div>",r+="</div>"),!o&&t.showNameWithIcon&&(r+='<h3 class="cardImageContainer addLibrary" style="position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer;flex-direction:column;">',r+='<span class="cardImageIcon material-icons '+(t.icon||c.ZP.getLibraryIcon(t.CollectionType))+'" aria-hidden="true"></span>',t.showNameWithIcon&&(r+='<div style="margin:1em 0;position:width:100%;">',r+=i()(t.Name),r+="</div>"),r+="</h3>"),r+="</div>",r+="</div>",r+='<div class="cardFooter visualCardBox-cardFooter">',!1!==t.showMenu){var h="right";d.ZP.getIsRTL()&&(h="left"),r+='<div style="text-align:'+h+"; float:"+h+';padding-top:5px;">',r+='<button type="button" is="paper-icon-button-light" class="btnCardMenu autoSize"><span class="material-icons more_vert" aria-hidden="true"></span></button>',r+="</div>"}r+="<div class='cardText'>",t.showNameWithIcon?r+="&nbsp;":r+=i()(t.Name),r+="</div>";var m=p().filter((function(e){return e.value==t.CollectionType}))[0];return m=m?m.name:d.ZP.translate("Other"),r+="<div class='cardText cardText-secondary'>",!1===t.showType?r+="&nbsp;":r+=m,r+="</div>",!1===t.showLocations?(r+="<div class='cardText cardText-secondary'>",r+="&nbsp;",r+="</div>"):t.Locations.length&&1===t.Locations.length?(r+="<div class='cardText cardText-secondary' dir='ltr' style='text-align:left;'>",r+=t.Locations[0],r+="</div>"):(r+="<div class='cardText cardText-secondary'>",r+=d.ZP.translate("NumLocationsValue",t.Locations.length),r+="</div>"),r+="</div>",(r+="</div>")+"</div>"}function P(){return[{href:"#/library.html",name:d.ZP.translate("HeaderLibraries")},{href:"#/librarydisplay.html",name:d.ZP.translate("Display")},{href:"#/metadataimages.html",name:d.ZP.translate("Metadata")},{href:"#/metadatanfo.html",name:d.ZP.translate("TabNfoSettings")}]}window.WizardLibraryPage={next:function(){h.default.navigate("wizardsettings.html")}},(0,h.pageClassOn)("pageshow","mediaLibraryPage",(function(){b(this)})),(0,h.pageIdOn)("pageshow","mediaLibraryPage",(function(){o.Z.setTabs("librarysetup",0,P),(0,s.Z)({mode:"on",progressElem:this.querySelector(".refreshProgress"),taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})})),(0,h.pageIdOn)("pagebeforehide","mediaLibraryPage",(function(){(0,s.Z)({mode:"off",progressElem:this.querySelector(".refreshProgress"),taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})}))},23366:function(e,t,a){a.r(t),a(43512),a(63238),a(55849),a(67752);var r=a(94994),i=a(21611),s=Object.create(HTMLDivElement.prototype);s.createdCallback=function(){this.classList.add("progressring"),this.setAttribute("dir","ltr");var e=this;if(e.innerHTML='<div class="progressring-bg"> <div class="progressring-text"></div> </div> <div class="spiner-holder-one animate-0-25-a"> <div class="spiner-holder-two animate-0-25-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-25-50-a"> <div class="spiner-holder-two animate-25-50-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-50-75-a"> <div class="spiner-holder-two animate-50-75-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-75-100-a"> <div class="spiner-holder-two animate-75-100-b"> <div class="progressring-spiner"></div> </div> </div> ',window.MutationObserver){var t=new MutationObserver((function(t){t.forEach((function(){e.setProgress(parseFloat(e.getAttribute("data-progress")||"0"))}))}));t.observe(e,{attributes:!0,childList:!1,characterData:!1}),e.observer=t}e.setProgress(parseFloat(e.getAttribute("data-progress")||"0"))},s.setProgress=function(e){var t;(e=Math.floor(e))<25?(t=e/100*360-90,this.querySelector(".animate-0-25-b").style.transform="rotate("+t+"deg)",this.querySelector(".animate-25-50-b").style.transform="rotate(-90deg)",this.querySelector(".animate-50-75-b").style.transform="rotate(-90deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=25&&e<50?(t=(e-25)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="rotate("+t+"deg)",this.querySelector(".animate-50-75-b").style.transform="rotate(-90deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=50&&e<75?(t=(e-50)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="none",this.querySelector(".animate-50-75-b").style.transform="rotate("+t+"deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=75&&e<=100&&(t=(e-75)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="none",this.querySelector(".animate-50-75-b").style.transform="none",this.querySelector(".animate-75-100-b").style.transform="rotate("+t+"deg)"),this.querySelector(".progressring-text").innerHTML=(0,i.y)(e/100,(0,r.cQ)())},s.attachedCallback=function(){},s.detachedCallback=function(){var e=this.observer;e&&(e.disconnect(),this.observer=null)},document.registerElement("emby-progressring",{prototype:s,extends:"div"});var n=s,o=a(72365),d=a(44038),l=a(81643);function c(e,t,a){var r=this;if(r.itemId||(r.itemId=o.ZP.parentWithAttribute(r,"data-id").getAttribute("data-id")),a.ItemId===r.itemId){var i=parseFloat(a.Progress);i&&i<100?this.classList.remove("hide"):this.classList.add("hide"),this.setAttribute("data-progress",i)}}var h=Object.create(n);h.createdCallback=function(){var e,t;n.createdCallback&&n.createdCallback.call(this),e="RefreshProgress",t=c.bind(this),l.Z.on(d.default,e,t),this[e]=t},h.attachedCallback=function(){n.attachedCallback&&n.attachedCallback.call(this)},h.detachedCallback=function(){var e,t;n.detachedCallback&&n.detachedCallback.call(this),(t=this[e="RefreshProgress"])&&(l.Z.off(d.default,e,t),this[e]=null),this.itemId=null},document.registerElement("emby-itemrefreshindicator",{prototype:h,extends:"div"})}}]);