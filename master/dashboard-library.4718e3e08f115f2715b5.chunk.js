"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2118,1638],{84254:function(e,t,a){a.r(t),a(5769),a(63238),a(61418),a(17460),a(14078),a(98010),a(32081);var r=a(65009),i=a.n(r),n=(a(72326),a(30504)),s=a(56705),o=a(3319),d=a(33942),l=a(83094),c=a(7816),m=(a(46650),a(51638),a(93586)),h=a(56346),u=a(61097);function b(e,t){Promise.all([a.e(9904),a.e(8706)]).then(a.bind(a,18706)).then((function(a){new(0,a.default)({refresh:g(e),library:t}).then((function(t){t&&f(e)}))}))}function f(e){s.ZP.show(),ApiClient.getVirtualFolders().then((function(t){!function(e,t){var r="";t.push({Name:d.ZP.translate("ButtonAddMediaLibrary"),icon:"add_circle",Locations:[],showType:!1,showLocations:!1,showMenu:!1,showNameWithIcon:!1,elementId:"addLibrary"});for(var i=0;i<t.length;i++){var n=t[i];r+=y(e,n,i)}var o=e.querySelector("#divVirtualFolders");o.innerHTML=r,o.classList.add("itemsContainer"),o.classList.add("vertical-wrap"),$(".btnCardMenu",o).on("click",(function(){!function(e,t,r){var i=l.ZP.parentWithClass(t,"card"),n=r[parseInt(i.getAttribute("data-index"))],s=[];s.push({name:d.ZP.translate("EditImages"),id:"editimages",icon:"photo"}),s.push({name:d.ZP.translate("ManageLibrary"),id:"edit",icon:"folder"}),s.push({name:d.ZP.translate("ButtonRename"),id:"rename",icon:"mode_edit"}),s.push({name:d.ZP.translate("ScanLibrary"),id:"refresh",icon:"refresh"}),s.push({name:d.ZP.translate("ButtonRemove"),id:"delete",icon:"delete"}),Promise.resolve().then(a.bind(a,78407)).then((function(r){r.show({items:s,positionTo:t,callback:function(t){switch(t){case"edit":b(e,n);break;case"editimages":!function(e,t){a.e(1121).then(a.bind(a,71121)).then((function(a){a.show({itemId:t.ItemId,serverId:ApiClient.serverId()}).then((function(){f(e)}))}))}(e,n);break;case"rename":!function(e,t){a.e(8e3).then(a.bind(a,58e3)).then((function(a){(0,a.default)({label:d.ZP.translate("LabelNewName"),confirmText:d.ZP.translate("ButtonRename")}).then((function(a){if(a&&a!=t.Name){var r=g(e);ApiClient.renameVirtualFolder(t.Name,a,r).then((function(){f(e)}))}}))}))}(e,n);break;case"delete":!function(e,t){var a=d.ZP.translate("MessageAreYouSureYouWishToRemoveMediaFolder");t.Locations.length&&(a+="<br/><br/>"+d.ZP.translate("MessageTheFollowingLocationWillBeRemovedFromLibrary")+"<br/><br/>",a+=t.Locations.join("<br/>")),(0,h.Z)({text:a,title:d.ZP.translate("HeaderRemoveMediaFolder"),confirmText:d.ZP.translate("Delete"),primary:"delete"}).then((function(){var a=g(e);ApiClient.removeVirtualFolder(t.Name,a).then((function(){f(e)}))}))}(e,n);break;case"refresh":!function(e,t){a.e(4231).then(a.bind(a,14231)).then((function(e){new(0,e.default)({itemIds:[t.ItemId],serverId:ApiClient.serverId(),mode:"scan"}).show()}))}(0,n)}}})}))}(e,this,t)})),o.querySelector("#addLibrary").addEventListener("click",(function(){!function(e){Promise.all([a.e(9904),a.e(5661)]).then(a.bind(a,65661)).then((function(t){new(0,t.default)({collectionTypeOptions:p().filter((function(e){return!e.hidden})),refresh:g(e)}).then((function(t){t&&f(e)}))}))}(e)})),$(".editLibrary",o).on("click",(function(){var a=$(this).parents(".card")[0],r=parseInt(a.getAttribute("data-index")),i=t[r];i.ItemId&&b(e,i)})),s.ZP.hide()}(e,t)}))}function g(e){return"mediaLibraryPage"===e.id}function v(e,t){return d.ZP.translate(e,'<a is="emby-linkbutton" class="button-link" href="'+t+'" target="_blank" data-autohide="true">',"</a>")}function p(){return[{name:"",value:""},{name:d.ZP.translate("Movies"),value:"movies",message:v("MovieLibraryHelp","https://docs.jellyfin.org/general/server/media/movies.html")},{name:d.ZP.translate("TabMusic"),value:"music",message:v("MusicLibraryHelp","https://docs.jellyfin.org/general/server/media/music.html")},{name:d.ZP.translate("Shows"),value:"tvshows",message:v("TvLibraryHelp","https://docs.jellyfin.org/general/server/media/shows.html")},{name:d.ZP.translate("Books"),value:"books",message:v("BookLibraryHelp","https://docs.jellyfin.org/general/server/media/books.html")},{name:d.ZP.translate("Photos"),value:"homevideos"},{name:d.ZP.translate("MusicVideos"),value:"musicvideos"},{name:d.ZP.translate("MixedMoviesShows"),value:"mixed",message:d.ZP.translate("MessageUnsetContentHelp")}]}function y(e,t,a){var r="",n="";e.classList.contains("wizardPage")&&(n+="min-width:33.3%;"),r+="<div "+(t.elementId?'id="'.concat(t.elementId,'" '):"")+'class="card backdropCard scalableCard backdropCard-scalable" style="'+n+'" data-index="'+a+'" data-id="'+t.ItemId+'">',r+='<div class="cardBox visualCardBox">',r+='<div class="cardScalable visualCardBox-cardScalable">',r+='<div class="cardPadder cardPadder-backdrop"></div>',r+='<div class="cardContent">';var s,o="";t.PrimaryImageItemId&&(o=ApiClient.getScaledImageUrl(t.PrimaryImageItemId,{maxWidth:Math.round(.4*l.ZP.getScreenWidth()),type:"Primary"})),o?(r+='<div class="cardImageContainer editLibrary '.concat(o?"":u.default.getDefaultBackgroundClass(),'" style="cursor:pointer">'),r+='<img src="'.concat(o,'" style="width:100%" />'),s=!0):t.showNameWithIcon||(r+='<div class="cardImageContainer editLibrary '.concat(u.default.getDefaultBackgroundClass(),'" style="cursor:pointer;">'),r+='<span class="cardImageIcon material-icons '+(t.icon||c.ZP.getLibraryIcon(t.CollectionType))+'" aria-hidden="true"></span>',s=!0),s&&(r+='<div class="cardIndicators backdropCardIndicators">',r+='<div is="emby-itemrefreshindicator"'+(t.RefreshProgress||t.RefreshStatus&&"Idle"!==t.RefreshStatus?"":' class="hide"')+' data-progress="'+(t.RefreshProgress||0)+'" data-status="'+t.RefreshStatus+'"></div>',r+="</div>",r+="</div>"),!o&&t.showNameWithIcon&&(r+='<h3 class="cardImageContainer addLibrary" style="position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer;flex-direction:column;">',r+='<span class="cardImageIcon material-icons '+(t.icon||c.ZP.getLibraryIcon(t.CollectionType))+'" aria-hidden="true"></span>',t.showNameWithIcon&&(r+='<div style="margin:1em 0;position:width:100%;">',r+=i()(t.Name),r+="</div>"),r+="</h3>"),r+="</div>",r+="</div>",r+='<div class="cardFooter visualCardBox-cardFooter">',!1!==t.showMenu&&(r+='<div style="text-align:right; float:right;padding-top:5px;">',r+='<button type="button" is="paper-icon-button-light" class="btnCardMenu autoSize"><span class="material-icons more_vert" aria-hidden="true"></span></button>',r+="</div>"),r+="<div class='cardText'>",t.showNameWithIcon?r+="&nbsp;":r+=i()(t.Name),r+="</div>";var m=p().filter((function(e){return e.value==t.CollectionType}))[0];return m=m?m.name:d.ZP.translate("Other"),r+="<div class='cardText cardText-secondary'>",!1===t.showType?r+="&nbsp;":r+=m,r+="</div>",!1===t.showLocations?(r+="<div class='cardText cardText-secondary'>",r+="&nbsp;",r+="</div>"):t.Locations.length&&1===t.Locations.length?(r+="<div class='cardText cardText-secondary'>",r+=t.Locations[0],r+="</div>"):(r+="<div class='cardText cardText-secondary'>",r+=d.ZP.translate("NumLocationsValue",t.Locations.length),r+="</div>"),r+="</div>",(r+="</div>")+"</div>"}function w(){return[{href:"#!/library.html",name:d.ZP.translate("HeaderLibraries")},{href:"#!/librarydisplay.html",name:d.ZP.translate("Display")},{href:"#!/metadataimages.html",name:d.ZP.translate("Metadata")},{href:"#!/metadatanfo.html",name:d.ZP.translate("TabNfoSettings")}]}window.WizardLibraryPage={next:function(){m.ZP.navigate("wizardsettings.html")}},(0,m.RW)("pageshow","mediaLibraryPage",(function(){f(this)})),(0,m.Xz)("pageshow","mediaLibraryPage",(function(){o.Z.setTabs("librarysetup",0,w),(0,n.Z)({mode:"on",progressElem:this.querySelector(".refreshProgress"),taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})})),(0,m.Xz)("pagebeforehide","mediaLibraryPage",(function(){(0,n.Z)({mode:"off",progressElem:this.querySelector(".refreshProgress"),taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})}))},51638:function(e,t,a){a.r(t),a(43512),a(63238),a(55849);var r=a(1892),i=a.n(r),n=a(95760),s=a.n(n),o=a(38311),d=a.n(o),l=a(58192),c=a.n(l),m=a(38060),h=a.n(m),u=a(54865),b=a.n(u),f=a(85444),g={};g.styleTagTransform=b(),g.setAttributes=c(),g.insert=d().bind(null,"head"),g.domAPI=s(),g.insertStyleElement=h(),i()(f.Z,g),f.Z&&f.Z.locals&&f.Z.locals,a(67752);var v=Object.create(HTMLDivElement.prototype);v.createdCallback=function(){this.classList.add("progressring");var e=this;if(e.innerHTML='<div class="progressring-bg"> <div class="progressring-text"></div> </div> <div class="spiner-holder-one animate-0-25-a"> <div class="spiner-holder-two animate-0-25-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-25-50-a"> <div class="spiner-holder-two animate-25-50-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-50-75-a"> <div class="spiner-holder-two animate-50-75-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-75-100-a"> <div class="spiner-holder-two animate-75-100-b"> <div class="progressring-spiner"></div> </div> </div> ',window.MutationObserver){var t=new MutationObserver((function(t){t.forEach((function(){e.setProgress(parseFloat(e.getAttribute("data-progress")||"0"))}))}));t.observe(e,{attributes:!0,childList:!1,characterData:!1}),e.observer=t}e.setProgress(parseFloat(e.getAttribute("data-progress")||"0"))},v.setProgress=function(e){var t;(e=Math.floor(e))<25?(t=e/100*360-90,this.querySelector(".animate-0-25-b").style.transform="rotate("+t+"deg)",this.querySelector(".animate-25-50-b").style.transform="rotate(-90deg)",this.querySelector(".animate-50-75-b").style.transform="rotate(-90deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=25&&e<50?(t=(e-25)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="rotate("+t+"deg)",this.querySelector(".animate-50-75-b").style.transform="rotate(-90deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=50&&e<75?(t=(e-50)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="none",this.querySelector(".animate-50-75-b").style.transform="rotate("+t+"deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=75&&e<=100&&(t=(e-75)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="none",this.querySelector(".animate-50-75-b").style.transform="none",this.querySelector(".animate-75-100-b").style.transform="rotate("+t+"deg)"),this.querySelector(".progressring-text").innerHTML=e+"%"},v.attachedCallback=function(){},v.detachedCallback=function(){var e=this.observer;e&&(e.disconnect(),this.observer=null)},document.registerElement("emby-progressring",{prototype:v,extends:"div"});var p=v,y=a(83094),w=a(1197),k=a(47005);function P(e,t,a){var r=this;if(r.itemId||(r.itemId=y.ZP.parentWithAttribute(r,"data-id").getAttribute("data-id")),a.ItemId===r.itemId){var i=parseFloat(a.Progress);i&&i<100?this.classList.remove("hide"):this.classList.add("hide"),this.setAttribute("data-progress",i)}}var I=Object.create(p);I.createdCallback=function(){var e,t;p.createdCallback&&p.createdCallback.call(this),e="RefreshProgress",t=P.bind(this),k.Events.on(w.default,e,t),this[e]=t},I.attachedCallback=function(){p.attachedCallback&&p.attachedCallback.call(this)},I.detachedCallback=function(){var e,t;p.detachedCallback&&p.detachedCallback.call(this),(t=this[e="RefreshProgress"])&&(k.Events.off(w.default,e,t),this[e]=null),this.itemId=null},document.registerElement("emby-itemrefreshindicator",{prototype:I,extends:"div"})},85444:function(e,t,a){var r=a(54933),i=a.n(r),n=a(93476),s=a.n(n)()(i());s.push([e.id,".progressring{box-sizing:border-box;float:left;height:2.6em;position:relative;-webkit-user-select:none;-ms-user-select:none;user-select:none;width:2.6em}.progressring-bg{-webkit-align-items:center;align-items:center;background:rgba(0,0,0,.9);border:.25em solid #000;border-radius:50%;box-sizing:border-box;display:-webkit-flex;display:flex;height:100%;-webkit-justify-content:center;justify-content:center;width:100%}.progressring-text{color:#ddd;font-size:90%;text-align:center}.spiner-holder-one{height:51%;width:51%}.spiner-holder-one,.spiner-holder-two{background:transparent;box-sizing:border-box;left:0;overflow:hidden;position:absolute;top:0}.spiner-holder-two{height:100%;width:100%}.progressring-spiner{border-radius:50%;border-style:solid;border-width:.25em;box-sizing:border-box;height:200%;width:200%}.animate-0-25-a{-webkit-transform:rotate(90deg);transform:rotate(90deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.animate-0-25-a,.animate-0-25-b{transition:-webkit-transform .18s ease-out;transition:transform .18s ease-out;transition:transform .18s ease-out,-webkit-transform .18s ease-out}.animate-0-25-b{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.animate-25-50-a{-webkit-transform:rotate(180deg);transform:rotate(180deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.animate-25-50-a,.animate-25-50-b{transition:-webkit-transform .18s ease-out;transition:transform .18s ease-out;transition:transform .18s ease-out,-webkit-transform .18s ease-out}.animate-25-50-b{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.animate-50-75-a{-webkit-transform:rotate(270deg);transform:rotate(270deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.animate-50-75-a,.animate-50-75-b{transition:-webkit-transform .18s ease-out;transition:transform .18s ease-out;transition:transform .18s ease-out,-webkit-transform .18s ease-out}.animate-50-75-b{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.animate-75-100-a{-webkit-transform:rotate(0deg);transform:rotate(0deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}.animate-75-100-a,.animate-75-100-b{transition:-webkit-transform .18s ease-out;transition:transform .18s ease-out;transition:transform .18s ease-out,-webkit-transform .18s ease-out}.animate-75-100-b{-webkit-transform:rotate(-90deg);transform:rotate(-90deg);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}",""]),t.Z=s}}]);