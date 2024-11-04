"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[10856],{10856:function(e,r,t){t.r(r),t(14382),t(44962),t(78557),t(96054),t(90076),t(83994),t(82367);var a=t(22696),n=t.n(a),s=(t(96244),t(54048)),i=t(8566),o=t(5898),c=t(47629),u=t(32203),d=(t(84158),t(89100)),l=t(40532),h=t(36645);function m(e,r){Promise.all([t.e(95454),t.e(76221)]).then(t.bind(t,73696)).then((function(t){new(0,t.default)({refresh:v(e),library:r}).then((function(r){r&&f(e)}))}))}function f(e){i.Ay.show(),ApiClient.getVirtualFolders().then((function(r){!function(e,r){var a="";r.push({Name:o.Ay.translate("ButtonAddMediaLibrary"),icon:"add_circle",Locations:[],showType:!1,showLocations:!1,showMenu:!1,showNameWithIcon:!1,elementId:"addLibrary"});for(var n=0;n<r.length;n++){var s=r[n];a+=b(e,s,n)}var u=e.querySelector("#divVirtualFolders");u.innerHTML=a,u.classList.add("itemsContainer"),u.classList.add("vertical-wrap"),$(".btnCardMenu",u).on("click",(function(){!function(e,r,a){var n=c.Ay.parentWithClass(r,"card"),s=a[parseInt(n.getAttribute("data-index"),10)],i=[];i.push({name:o.Ay.translate("EditImages"),id:"editimages",icon:"photo"}),i.push({name:o.Ay.translate("ManageLibrary"),id:"edit",icon:"folder"}),i.push({name:o.Ay.translate("ButtonRename"),id:"rename",icon:"mode_edit"}),i.push({name:o.Ay.translate("ScanLibrary"),id:"refresh",icon:"refresh"}),i.push({name:o.Ay.translate("ButtonRemove"),id:"delete",icon:"delete"}),t.e(62882).then(t.bind(t,62882)).then((function(a){a.show({items:i,positionTo:r,callback:function(r){switch(r){case"edit":m(e,s);break;case"editimages":!function(e,r){Promise.all([t.e(4350),t.e(38102)]).then(t.bind(t,4350)).then((function(t){t.show({itemId:r.ItemId,serverId:ApiClient.serverId()}).then((function(){f(e)}))}))}(e,s);break;case"rename":!function(e,r){t.e(72521).then(t.bind(t,72521)).then((function(t){(0,t.default)({label:o.Ay.translate("LabelNewName"),description:o.Ay.translate("MessageRenameMediaFolder"),confirmText:o.Ay.translate("ButtonRename")}).then((function(t){if(t&&t!=r.Name){var a=v(e);ApiClient.renameVirtualFolder(r.Name,t,a).then((function(){f(e)}))}}))}))}(e,s);break;case"delete":!function(e,r){var t=o.Ay.translate("MessageAreYouSureYouWishToRemoveMediaFolder");r.Locations.length&&(t+="<br/><br/>"+o.Ay.translate("MessageTheFollowingLocationWillBeRemovedFromLibrary")+"<br/><br/>",t+=r.Locations.join("<br/>")),(0,l.A)({text:t,title:o.Ay.translate("HeaderRemoveMediaFolder"),confirmText:o.Ay.translate("Delete"),primary:"delete"}).then((function(){var t=v(e);ApiClient.removeVirtualFolder(r.Name,t).then((function(){f(e)}))}))}(e,s);break;case"refresh":!function(e,r){t.e(77004).then(t.bind(t,77004)).then((function(e){new(0,e.default)({itemIds:[r.ItemId],serverId:ApiClient.serverId(),mode:"scan"}).show()}))}(0,s)}}})}))}(e,this,r)})),u.querySelector("#addLibrary").addEventListener("click",(function(){!function(e){Promise.all([t.e(95454),t.e(80091)]).then(t.bind(t,84826)).then((function(r){new(0,r.default)({collectionTypeOptions:p().filter((function(e){return!e.hidden})),refresh:v(e)}).then((function(r){r&&f(e)}))}))}(e)})),$(".editLibrary",u).on("click",(function(){var t=$(this).parents(".card")[0],a=parseInt(t.getAttribute("data-index"),10),n=r[a];n.ItemId&&m(e,n)})),i.Ay.hide()}(e,r)}))}function v(e){return"mediaLibraryPage"===e.id}function g(e,r){return o.Ay.translate(e,'<a is="emby-linkbutton" class="button-link" href="'+r+'" target="_blank" data-autohide="true">',"</a>")}function p(){return[{name:"",value:""},{name:o.Ay.translate("Movies"),value:"movies",message:g("MovieLibraryHelp","https://jellyfin.org/docs/general/server/media/movies")},{name:o.Ay.translate("TabMusic"),value:"music",message:g("MusicLibraryHelp","https://jellyfin.org/docs/general/server/media/music")},{name:o.Ay.translate("Shows"),value:"tvshows",message:g("TvLibraryHelp","https://jellyfin.org/docs/general/server/media/shows")},{name:o.Ay.translate("Books"),value:"books",message:g("BookLibraryHelp","https://jellyfin.org/docs/general/server/media/books")},{name:o.Ay.translate("HomeVideosPhotos"),value:"homevideos"},{name:o.Ay.translate("MusicVideos"),value:"musicvideos"},{name:o.Ay.translate("MixedMoviesShows"),value:"mixed",message:o.Ay.translate("MessageUnsetContentHelp")}]}function b(e,r,t){var a="",s="";e.classList.contains("wizardPage")&&(s+="min-width:33.3%;"),a+="<div "+(r.elementId?'id="'.concat(r.elementId,'" '):"")+'class="card backdropCard scalableCard backdropCard-scalable" style="'+s+'" data-index="'+t+'" data-id="'+r.ItemId+'">',a+='<div class="cardBox visualCardBox">',a+='<div class="cardScalable visualCardBox-cardScalable">',a+='<div class="cardPadder cardPadder-backdrop"></div>',a+='<div class="cardContent">';var i,d="";if(r.PrimaryImageItemId&&(d=ApiClient.getScaledImageUrl(r.PrimaryImageItemId,{maxWidth:Math.round(.4*c.Ay.getScreenWidth()),type:"Primary"})),d?(a+='<div class="cardImageContainer editLibrary '.concat(d?"":(0,h.Qp)(),'" style="cursor:pointer">'),a+='<img src="'.concat(d,'" style="width:100%" />'),i=!0):r.showNameWithIcon||(a+='<div class="cardImageContainer editLibrary '.concat((0,h.Qp)(),'" style="cursor:pointer;">'),a+='<span class="cardImageIcon material-icons '+(r.icon||u.Ay.getLibraryIcon(r.CollectionType))+'" aria-hidden="true"></span>',i=!0),i&&(a+='<div class="cardIndicators backdropCardIndicators">',a+='<div is="emby-itemrefreshindicator"'+(r.RefreshProgress||r.RefreshStatus&&"Idle"!==r.RefreshStatus?"":' class="hide"')+' data-progress="'+(r.RefreshProgress||0)+'" data-status="'+r.RefreshStatus+'"></div>',a+="</div>",a+="</div>"),!d&&r.showNameWithIcon&&(a+='<h3 class="cardImageContainer addLibrary" style="position:absolute;top:0;left:0;right:0;bottom:0;cursor:pointer;flex-direction:column;">',a+='<span class="cardImageIcon material-icons '+(r.icon||u.Ay.getLibraryIcon(r.CollectionType))+'" aria-hidden="true"></span>',r.showNameWithIcon&&(a+='<div style="margin:1em 0;position:width:100%;">',a+=n()(r.Name),a+="</div>"),a+="</h3>"),a+="</div>",a+="</div>",a+='<div class="cardFooter visualCardBox-cardFooter">',!1!==r.showMenu){var l=o.Ay.getIsRTL()?"left":"right";a+='<div style="text-align:'+l+"; float:"+l+';padding-top:5px;">',a+='<button type="button" is="paper-icon-button-light" class="btnCardMenu autoSize"><span class="material-icons more_vert" aria-hidden="true"></span></button>',a+="</div>"}a+="<div class='cardText'>",r.showNameWithIcon?a+="&nbsp;":a+=n()(r.Name),a+="</div>";var m=p().filter((function(e){return e.value==r.CollectionType}))[0];return m=m?m.name:o.Ay.translate("Other"),a+="<div class='cardText cardText-secondary'>",!1===r.showType?a+="&nbsp;":a+=m,a+="</div>",!1===r.showLocations?(a+="<div class='cardText cardText-secondary'>",a+="&nbsp;",a+="</div>"):r.Locations.length&&1===r.Locations.length?(a+="<div class='cardText cardText-secondary' dir='ltr' style='text-align:left;'>",a+=r.Locations[0],a+="</div>"):(a+="<div class='cardText cardText-secondary'>",a+=o.Ay.translate("NumLocationsValue",r.Locations.length),a+="</div>"),a+="</div>",(a+="</div>")+"</div>"}window.WizardLibraryPage={next:function(){d.default.navigate("wizardsettings.html")}},(0,d.pageClassOn)("pageshow","mediaLibraryPage",(function(){f(this)})),(0,d.pageIdOn)("pageshow","mediaLibraryPage",(function(){(0,s.A)({mode:"on",progressElem:this.querySelector(".refreshProgress"),taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})})),(0,d.pageIdOn)("pagebeforehide","mediaLibraryPage",(function(){(0,s.A)({mode:"off",progressElem:this.querySelector(".refreshProgress"),taskKey:"RefreshLibrary",button:this.querySelector(".btnRefresh")})}))},84158:function(e,r,t){t(67593),t(78557),t(23630),t(69177);var a=t(5898),n=t(58953),s=Object.create(HTMLDivElement.prototype);s.createdCallback=function(){this.classList.add("progressring"),this.setAttribute("dir","ltr");var e=this;if(e.innerHTML='<div class="progressring-bg"> <div class="progressring-text"></div> </div> <div class="spiner-holder-one animate-0-25-a"> <div class="spiner-holder-two animate-0-25-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-25-50-a"> <div class="spiner-holder-two animate-25-50-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-50-75-a"> <div class="spiner-holder-two animate-50-75-b"> <div class="progressring-spiner"></div> </div> </div> <div class="spiner-holder-one animate-75-100-a"> <div class="spiner-holder-two animate-75-100-b"> <div class="progressring-spiner"></div> </div> </div> ',window.MutationObserver){var r=new MutationObserver((function(r){r.forEach((function(){e.setProgress(parseFloat(e.getAttribute("data-progress")||"0"))}))}));r.observe(e,{attributes:!0,childList:!1,characterData:!1}),e.observer=r}e.setProgress(parseFloat(e.getAttribute("data-progress")||"0"))},s.setProgress=function(e){var r;(e=Math.floor(e))<25?(r=e/100*360-90,this.querySelector(".animate-0-25-b").style.transform="rotate("+r+"deg)",this.querySelector(".animate-25-50-b").style.transform="rotate(-90deg)",this.querySelector(".animate-50-75-b").style.transform="rotate(-90deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=25&&e<50?(r=(e-25)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="rotate("+r+"deg)",this.querySelector(".animate-50-75-b").style.transform="rotate(-90deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=50&&e<75?(r=(e-50)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="none",this.querySelector(".animate-50-75-b").style.transform="rotate("+r+"deg)",this.querySelector(".animate-75-100-b").style.transform="rotate(-90deg)"):e>=75&&e<=100&&(r=(e-75)/100*360-90,this.querySelector(".animate-0-25-b").style.transform="none",this.querySelector(".animate-25-50-b").style.transform="none",this.querySelector(".animate-50-75-b").style.transform="none",this.querySelector(".animate-75-100-b").style.transform="rotate("+r+"deg)"),this.querySelector(".progressring-text").innerHTML=(0,n.BY)(e/100,(0,a.jE)())},s.attachedCallback=function(){},s.detachedCallback=function(){var e=this.observer;e&&(e.disconnect(),this.observer=null)},document.registerElement("emby-progressring",{prototype:s,extends:"div"});var i=s,o=t(47629),c=t(10736),u=t(44797);function d(e,r,t){var a=this;if(a.itemId||(a.itemId=o.Ay.parentWithAttribute(a,"data-id").getAttribute("data-id")),t.ItemId===a.itemId){var n=parseFloat(t.Progress);n&&n<100?this.classList.remove("hide"):this.classList.add("hide"),this.setAttribute("data-progress",n)}}var l=Object.create(i);l.createdCallback=function(){var e,r;i.createdCallback&&i.createdCallback.call(this),e="RefreshProgress",r=d.bind(this),u.A.on(c.default,e,r),this[e]=r},l.attachedCallback=function(){i.attachedCallback&&i.attachedCallback.call(this)},l.detachedCallback=function(){var e,r;i.detachedCallback&&i.detachedCallback.call(this),(r=this[e="RefreshProgress"])&&(u.A.off(c.default,e,r),this[e]=null),this.itemId=null},document.registerElement("emby-itemrefreshindicator",{prototype:l,extends:"div"})},36645:function(e,r,t){t.d(r,{QW:function(){return w},Qp:function(){return p},Rn:function(){return g},Tj:function(){return m},a_:function(){return f},hn:function(){return d},n5:function(){return l},uA:function(){return v},w:function(){return h},zo:function(){return y}});var a=t(76942),n=t(58953),s=t(4452),i=t.n(s),o=2/3,c=16/9,u=1e3/185,d=function(e){return"Program"===e||"Timer"===e||"Recording"===e},l=function(e){return"play"===e.defaultAction&&e.isFolder?"link":e.isPhoto?"play":e.defaultAction},h=function(e){var r=window.screen;return!!(r&&r.availWidth-e>20)},m=function(e){return null==e?a.G8.MixedSquare:e>=1.33?a.G8.MixedBackdrop:e>.8?a.G8.MixedSquare:a.G8.MixedPortrait},f=function(e){var r;return i()(((r={card:!0})["".concat(e.shape,"Card")]=e.shape,r["".concat(e.cardCssClass)]=e.cardCssClass,r["".concat(e.cardClass)]=e.cardClass,r["card-hoverable"]=e.isDesktop,r["show-focus"]=e.isTV,r["show-animation"]=e.isTV&&e.enableFocusTransform,r.groupedCard=e.showChildCountIndicator&&e.childCount,r["card-withuserdata"]=!["MusicAlbum","MusicArtist","Audio"].includes(e.itemType),r.itemAction="button"===e.tagName,r))},v=function(e){var r;return i()(((r={cardImageContainer:!0,coveredImage:e.hasCoverImage,"coveredImage-contain":e.hasCoverImage&&"TvChannel"===e.itemType})[p(e.itemName)]=!e.imgUrl,r))},g=function(e){return i()({cardBox:!0,visualCardBox:e.cardLayout,"cardBox-bottompadded":e.hasOuterCardFooter&&!e.cardLayout})},p=function(e){return"defaultCardBackground defaultCardBackground".concat(b(e))},b=function(e){if(e){for(var r=Math.floor(e.length/2),t=String(e.slice(r,r+1).charCodeAt(0)),a=0,s=0;s<t.length;s++)a+=parseInt(t.charAt(s),10);return parseInt(String(a).slice(-1),10)%5+1}return(0,n.HO)(1,5)},y=function(e){return e?-1!==(e=e.toLowerCase()).indexOf("portrait")?o:-1!==e.indexOf("backdrop")?c:-1!==e.indexOf("square")?1:-1!==e.indexOf("banner")?u:null:null},w=function(e,r,t,a){switch(e){case"portrait":return A(r,a);case"square":return I(r,a);case"banner":return C(r);case"backdrop":return k(r,a);case"smallBackdrop":return S(r);case"overflowSmallBackdrop":return x(r,t,a);case"overflowPortrait":return L(r,t,a);case"overflowSquare":return P(r,t,a);case"overflowBackdrop":return M(r,t,a);default:return 4}},A=function(e,r){switch(!0){case r:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;default:return 3.0000000003}},I=function(e,r){switch(!0){case r:return 5.9999999988;case e>=2200:return 10;case e>=1920:return 9.000000000009;case e>=1600:return 8;case e>=1400:return 7.0000000000021;case e>=1200:return 5.9999999988;case e>=800:return 5;case e>=700:return 4;case e>=500:return 3.0000000003;default:return 2}},C=function(e){switch(!0){case e>=2200:return 4;case e>=1200:return 3.0000000003;case e>=800:return 2;default:return 1}},k=function(e,r){switch(!0){case r:return 4;case e>=2500:return 6;case e>=1600:return 5;case e>=1200:return 4;case e>=770:return 3;case e>=420:return 2;default:return 1}},S=function(e){switch(!0){case e>=1600:return 8;case e>=1400:return 7.000000000007001;case e>=1200:return 5.9999999988;case e>=1e3:return 5;case e>=800:return 4;case e>=500:return 3.0000000003;default:return 2}},x=function(e,r,t){switch(!0){case t:return 100/18.9;case r&&e>=800:return 100/15.5;case r:return 100/23.3;case e>=540:return 100/30;default:return 100/72}},L=function(e,r,t){switch(!0){case t:return 100/15.5;case r&&e>=1700:return 100/11.6;case r:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=400:return 100/31.5;default:return 100/42}},P=function(e,r,t){switch(!0){case t:return 100/15.5;case r&&e>=1700:return 100/11.6;case r:return 100/15.5;case e>=1400:return 100/15;case e>=1200:return 100/18;case e>=760:return 100/23;case e>=540:return 100/31.5;default:return 100/42}},M=function(e,r,t){switch(!0){case t:return 100/23.3;case r&&e>=1700:return 100/18.5;case r:return 100/23.3;case e>=1800:return 100/23.5;case e>=1400:return 100/30;case e>=760:return 2.5;case e>=640:return 100/56;default:return 100/72}}},76942:function(e,r,t){var a;function n(e){return void 0===e&&(e=!0),e?a.SquareOverflow:a.Square}function s(e){return void 0===e&&(e=!0),e?a.BackdropOverflow:a.Backdrop}function i(e){return void 0===e&&(e=!0),e?a.PortraitOverflow:a.Portrait}t.d(r,{G8:function(){return a},UI:function(){return s},xK:function(){return i},zP:function(){return n}}),function(e){e.Backdrop="backdrop",e.BackdropOverflow="overflowBackdrop",e.Banner="banner",e.Portrait="portrait",e.PortraitOverflow="overflowPortrait",e.Square="square",e.SquareOverflow="overflowSquare",e.Auto="auto",e.AutoHome="autohome",e.AutoOverflow="autooverflow",e.AutoVertical="autoVertical",e.Mixed="mixed",e.MixedSquare="mixedSquare",e.MixedBackdrop="mixedBackdrop",e.MixedPortrait="mixedPortrait"}(a||(a={}))},32203:function(e,r,t){t.d(r,{Bq:function(){return o},Jd:function(){return i}});var a=t(65369),n=t(11444),s="assets/img/devices/";function i(e){switch(e){case a.X.Movies:return"movie";case a.X.Music:return"music_note";case a.X.Homevideos:case a.X.Photos:return"photo";case a.X.Livetv:return"live_tv";case a.X.Tvshows:return"tv";case a.X.Trailers:return"theaters";case a.X.Musicvideos:return"music_video";case a.X.Books:return"book";case a.X.Boxsets:return"video_library";case a.X.Playlists:return"queue";case"channels":return"videocam";case void 0:return"quiz";default:return"folder"}}function o(e,r){switch(e){case n.D.MusicAlbum:return"album";case n.D.MusicArtist:case n.D.Person:return"person";case n.D.Audio:return"audiotrack";case n.D.Movie:return"movie";case n.D.Episode:case n.D.Series:return"tv";case n.D.Program:return"live_tv";case n.D.Book:return"book";case n.D.Folder:return"folder";case n.D.BoxSet:return"video_library";case n.D.Playlist:return"queue";case n.D.Photo:return"photo";case n.D.PhotoAlbum:return"photo_album";default:return r}}r.Ay={getDeviceIcon:function(e){var r;switch(e.AppName||e.Client){case"Samsung Smart TV":return s+"samsung.svg";case"Xbox One":return s+"xbox.svg";case"Sony PS4":return s+"playstation.svg";case"Kodi":case"Kodi JellyCon":return s+"kodi.svg";case"Jellyfin Android":case"AndroidTV":case"Android TV":return s+"android.svg";case"Jellyfin Mobile (iOS)":case"Jellyfin Mobile (iPadOS)":case"Jellyfin iOS":case"Infuse":return s+"apple.svg";case"Home Assistant":return s+"home-assistant.svg";case"Jellyfin Roku":return s+"roku.svg";case"Finamp":return s+"finamp.svg";case"Jellyfin Web":return function(e){switch(e){case"Opera":case"Opera TV":case"Opera Android":return s+"opera.svg";case"Chrome":case"Chrome Android":return s+"chrome.svg";case"Firefox":case"Firefox Android":return s+"firefox.svg";case"Safari":case"Safari iPad":case"Safari iPhone":return s+"safari.svg";case"Edge Chromium":case"Edge Chromium Android":case"Edge Chromium iPad":case"Edge Chromium iPhone":return s+"edgechromium.svg";case"Edge":return s+"edge.svg";case"Internet Explorer":return s+"msie.svg";default:return s+"html5.svg"}}(e.Name||e.DeviceName);default:if(null===(r=e.Capabilities)||void 0===r?void 0:r.IconUrl)try{return new URL(e.Capabilities.IconUrl).toString()}catch(r){console.error("[getDeviceIcon] device capabilities has invalid IconUrl",e,r)}return s+"other.svg"}},getLibraryIcon:i,getItemTypeIcon:o}}}]);