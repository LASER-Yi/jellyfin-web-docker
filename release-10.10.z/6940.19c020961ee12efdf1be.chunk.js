"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6940,38965,15605],{6940:function(t,e,a){a(29305),a(32733),a(84701),a(24776),a(69892),a(84734),a(44962),a(86584),a(89336),a(78557),a(95021),a(73687),a(83994),a(93062),a(82367);var i=a(22696),r=a.n(i),n=a(23648),o=a(82180),s=a(51938),l=a(46782),d=a(5898),c=a(98320),u=a(24468),m=(a(15605),a(38965),a(86191)),p=a(36645),y=a(47593),f=a(31234),h=a.n(f);function I(t,e){if(t){if("string"==typeof t)return g(t,e);var a={}.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?g(t,e):void 0}}function g(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=Array(e);a<e;a++)i[a]=t[a];return i}function v(t,e){if("disc"===e.index)return null==t.ParentIndexNumber?"":d.Ay.translate("ValueDiscNumber",t.ParentIndexNumber);var a,i,r=(e.sortBy||"").toLowerCase();return 0===r.indexOf("sortname")?"Episode"===t.Type?"":(a=(i=(t.SortName||t.Name||"?")[0].toUpperCase()).charCodeAt(0))<65||a>90?"#":i.toUpperCase():0===r.indexOf("officialrating")?t.OfficialRating||d.Ay.translate("Unrated"):0===r.indexOf("communityrating")?null==t.CommunityRating?d.Ay.translate("Unrated"):Math.floor(t.CommunityRating):0===r.indexOf("criticrating")?null==t.CriticRating?d.Ay.translate("Unrated"):Math.floor(t.CriticRating):0===r.indexOf("albumartist")&&t.AlbumArtist?(a=(i=t.AlbumArtist[0].toUpperCase()).charCodeAt(0))<65||a>90?"#":i.toUpperCase():""}function A(t,e){var a,i,r=m.A.getApiClient(t.ServerId),n={fillWidth:e,fillHeight:e,type:"Primary"};return null!==(a=t.ImageTags)&&void 0!==a&&a.Primary?(n.tag=t.ImageTags.Primary,i=t.Id):t.AlbumId&&t.AlbumPrimaryImageTag?(n.tag=t.AlbumPrimaryImageTag,i=t.AlbumId):t.SeriesId&&t.SeriesPrimaryImageTag?(n.tag=t.SeriesPrimaryImageTag,i=t.SeriesId):t.ParentPrimaryImageTag&&(n.tag=t.ParentPrimaryImageTag,i=t.ParentPrimaryImageItemId),i?r.getScaledImageUrl(i,n):null}function b(t,e){var a=m.A.getApiClient(t.ServerId),i={fillWidth:e,fillHeight:e,type:"Primary"};if(t.ChannelId&&t.ChannelPrimaryImageTag&&(i.tag=t.ChannelPrimaryImageTag),t.ChannelId)return a.getScaledImageUrl(t.ChannelId,i)}function T(t,e){var a,i,n,o="",s=l.A.tv?"h2":"div",d=function(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=I(t))){a&&(t=a);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,n=t},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw n}}}}(t.entries());try{for(d.s();!(a=d.n()).done;){var c=(i=a.value,n=2,function(t){if(Array.isArray(t))return t}(i)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i,r,n,o,s=[],l=!0,d=!1;try{if(n=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;l=!1}else for(;!(l=(i=n.call(a)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){d=!0,r=t}finally{try{if(!l&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(d)throw r}}return s}}(i,n)||I(i,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),u=c[0],m=c[1];if(m){var p=void 0;0===u?p=e?document.createElement(s):document.createElement("div"):(p=document.createElement("div")).classList.add("secondary"),p.classList.add("listItemBodyText"),p.innerHTML="<bdi>"+r()(m)+"</bdi>",o+=p.outerHTML}}}catch(t){d.e(t)}finally{d.f()}return o}function C(t){for(var e="",a=0,i=t.rightButtons.length;a<i;a++){var r=t.rightButtons[a];e+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="custom" data-customaction="'.concat(r.id,'" title="').concat(r.title,'"><span class="material-icons ').concat(r.icon,'" aria-hidden="true"></span></button>')}return e}e.A={getListViewHtml:function(t){for(var e=t.items,a="",i=t.action||"link",d="large"===t.imageSize,m=t.enableOverview,f=l.A.tv,I=f?"button":"div",g=null==t.enableSideMediaInfo||t.enableSideMediaInfo,S="",P=t.enableOverview&&!l.A.tv,D=0,k=e.length;D<k;D++){var w,x=e[D],L="";if(t.showIndex){var R=v(x,t);R!==a&&(L&&(L+="</div>"),L+=0===D?'<h2 class="listGroupHeader listGroupHeader-first">':'<h2 class="listGroupHeader">',L+=r()(R),L+="</h2>",L+="<div>",a=R)}var M="listItem";(t.border||!1!==t.highlight&&!l.A.tv)&&(M+=" listItem-border"),f&&(M+=" itemAction listItem-button"),l.A.tv&&(M+=" listItem-focusscale");var B=80;d&&(M+=" listItem-largeImage",B=500);var E=x.PlaylistItemId?' data-playlistitemid="'.concat(x.PlaylistItemId,'"'):"",O=null!==(w=x.UserData)&&void 0!==w&&w.PlaybackPositionTicks?' data-positionticks="'.concat(x.UserData.PlaybackPositionTicks,'"'):"",N=t.collectionId?' data-collectionid="'.concat(t.collectionId,'"'):"",U=t.playlistId?' data-playlistid="'.concat(t.playlistId,'"'):"",H=x.MediaType?' data-mediatype="'.concat(x.MediaType,'"'):"",F=x.CollectionType?' data-collectiontype="'.concat(x.CollectionType,'"'):"",V=x.ChannelId?' data-channelid="'.concat(x.ChannelId,'"'):"";if(P&&(M+=" listItem-withContentWrapper"),L+="<".concat(I,' class="').concat(M,'"').concat(E,' data-action="').concat(i,'" data-isfolder="').concat(x.IsFolder,'" data-id="').concat(x.Id,'" data-serverid="').concat(x.ServerId,'" data-type="').concat(x.Type,'"').concat(H).concat(F).concat(V).concat(O).concat(N).concat(U,">"),P&&(L+='<div class="listItem-content">'),!f&&t.dragHandle&&(L+='<span class="listViewDragHandle material-icons listItemIcon listItemIcon-transparent drag_handle" aria-hidden="true"></span>'),!1!==t.image){var Y="channel"===t.imageSource?b(x,B):A(x,B),_=d?"listItemImage listItemImage-large":"listItemImage";"channel"===t.imageSource&&(_+=" listItemImage-channel"),d&&l.A.tv&&(_+=" listItemImage-large-tv");var j=t.imagePlayButton&&!l.A.tv;f||(_+=" itemAction"),L+=Y?'<div data-action="'+(j?"link":i)+'" class="'+_+' lazy" data-src="'+Y+'" item-icon>':'<div class="'+_+" cardImageContainer "+(0,p.Qp)(x.Name)+'">'+u.default.getDefaultText(x,t);var W=x.MediaSourceCount||1;W>1&&!0!==t.disableIndicators&&(L+='<div class="mediaSourceIndicator">'+W+"</div>");var G="";(G+=s.Ay.getPlayedIndicatorHtml(x))&&(L+='<div class="indicators listItemIndicators">'.concat(G,"</div>")),j&&(L+='<button is="paper-icon-button-light" class="listItemImageButton itemAction" data-action="resume"><span class="material-icons listItemImageButton-icon play_arrow" aria-hidden="true"></span></button>');var q=s.Ay.getProgressBarHtml(x,{containerClass:"listItemProgressBar"});q&&(L+=q),L+="</div>"}t.showIndexNumberLeft&&(L+='<div class="listItem-indexnumberleft">',L+=x.IndexNumber||"&nbsp;",L+="</div>");var z=[];t.showProgramDateTime&&z.push(c.Ay.toLocaleString(c.Ay.parseISO8601Date(x.StartDate),{weekday:"long",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})),t.showProgramTime&&z.push(c.Ay.getDisplayTime(c.Ay.parseISO8601Date(x.StartDate))),t.showChannel&&x.ChannelName&&z.push(x.ChannelName);var K=null;t.showParentTitle&&("Episode"===x.Type?K=x.SeriesName:(x.IsSeries||x.EpisodeTitle&&x.Name)&&(K=x.Name));var Q=n.Ay.getDisplayName(x,{includeParentInfo:t.includeParentInfoInTitle});if(t.showIndexNumber&&null!=x.IndexNumber&&(Q="".concat(x.IndexNumber,". ").concat(Q)),t.showParentTitle&&t.parentTitleWithTitle?(Q&&(K&&(K+=" - "),K=(K||"")+Q),z.push(K||"")):t.showParentTitle&&z.push(K||""),Q&&!t.parentTitleWithTitle&&z.push(Q),x.IsFolder)!1!==t.artist&&x.AlbumArtist&&"MusicAlbum"===x.Type&&z.push(x.AlbumArtist);else if(t.artist){var $=x.ArtistItems;$&&"MusicAlbum"!==x.Type&&z.push($.map((function(t){return t.Name})).join(", "))}if("TvChannel"===x.Type&&x.CurrentProgram&&z.push(n.Ay.getDisplayName(x.CurrentProgram)),M="listItemBody",f||(M+=" itemAction"),!1===t.image&&(M+=" listItemBody-noleftpadding"),L+='<div class="'.concat(M,'">'),L+=T(z,d),!1===t.mediaInfo||g||(L+='<div class="'.concat("secondary listItemMediaInfo listItemBodyText",'">'),L+=o.Ay.getPrimaryMediaInfoHtml(x,{episodeTitle:!1,originalAirDate:!1,subtitles:!1}),L+="</div>"),m&&x.Overview&&(L+='<div class="secondary listItem-overview listItemBodyText">',L+="<bdi>"+h().sanitize((0,y.A)({html:!0}).render(x.Overview||""))+"</bdi>",L+="</div>"),L+="</div>",!1!==t.mediaInfo&&g&&(L+='<div class="secondary listItemMediaInfo">',L+=o.Ay.getPrimaryMediaInfoHtml(x,{year:!1,container:!1,episodeTitle:!1,criticRating:!1,officialRating:!1,endsAt:!1}),L+="</div>"),t.recordButton||"Timer"!==x.Type&&"Program"!==x.Type||(L+=s.Ay.getTimerIndicator(x).replace("indicatorIcon","indicatorIcon listItemAside")),L+='<div class="listViewUserDataButtons">',!f){if(t.addToListButton&&(L+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="addtoplaylist"><span class="material-icons playlist_add" aria-hidden="true"></span></button>'),t.infoButton&&(L+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="link"><span class="material-icons info_outline" aria-hidden="true"></span></button>'),t.rightButtons&&(L+=C(t)),!1!==t.enableUserDataButtons){var J=x.UserData||{},X=null==J.Likes?"":J.Likes;n.Ay.canMarkPlayed(x)&&!1!==t.enablePlayedButton&&(L+='<button is="emby-playstatebutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+x.Id+'" data-serverid="'+x.ServerId+'" data-itemtype="'+x.Type+'" data-played="'+J.Played+'"><span class="material-icons check" aria-hidden="true"></span></button>'),n.Ay.canRate(x)&&!1!==t.enableRatingButton&&(L+='<button is="emby-ratingbutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+x.Id+'" data-serverid="'+x.ServerId+'" data-itemtype="'+x.Type+'" data-likes="'+X+'" data-isfavorite="'+J.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>')}!1!==t.moreButton&&(L+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="menu"><span class="material-icons more_vert" aria-hidden="true"></span></button>')}L+="</div>",P&&(L+="</div>",m&&x.Overview&&(L+='<div class="listItem-bottomoverview secondary">',L+="<bdi>"+x.Overview+"</bdi>",L+="</div>")),S+=L+="</".concat(I,">")}return S}}},82180:function(t,e,a){a(24776),a(14382),a(86584),a(9698),a(78557);var i=a(22696),r=a.n(i),n=a(98320),o=a(5898),s=a(70267),l=a(23648),d=a(51938),c=(a(10353),a(82885));function u(t){if("Video"===t.MediaType&&t.RunTimeTicks&&!t.StartDate){var e=(new Date).getTime()+t.RunTimeTicks/1e4;e=new Date(e);var a=n.Ay.getDisplayTime(e);return o.Ay.translate("EndsAtValue",a)}return null}function m(t,e){e=e?"".concat(e," mediaInfoItem"):"mediaInfoItem";var a=t;if("string"!=typeof t&&"number"!=typeof t){if(t.html)return t.html;a=t.text,e+=" ".concat(t.cssClass)}return'<div class="'.concat(e,'">').concat(a,"</div>")}function p(t,e,a){if(!1!==a.endsAt){var i=t.querySelector(".endsAt");i&&function(t,e){var a=setInterval((function(){document.body.contains(t)?t.innerHTML=u(e):clearInterval(a)}),6e4)}(i,e)}var r=t.querySelector(".lnkChannel");r&&r.addEventListener("click",y)}function y(t){var e=this.getAttribute("data-id"),a=this.getAttribute("data-serverid");return s.appRouter.showItem(e,a),t.preventDefault(),!1}function f(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e.interactive&&(e.interactive=!1),function(t){var e,a,i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},p="",y=[],f="MusicAlbum"===t.Type||"MusicArtist"===t.MediaType||"Playlist"===t.Type||"Playlist"===t.MediaType||"MusicGenre"===t.MediaType;if(f?((i=t.SongCount||t.ChildCount)&&y.push(o.Ay.translate("TrackCount",i)),t.RunTimeTicks&&y.push(n.Ay.getDisplayDuration(t.RunTimeTicks))):"PhotoAlbum"!==t.Type&&"BoxSet"!==t.Type||(i=t.ChildCount)&&y.push(o.Ay.translate("ItemCount",i)),("Episode"===t.Type||"Photo"===t.MediaType)&&!1!==s.originalAirDate&&t.PremiereDate)try{a=n.Ay.parseISO8601Date(t.PremiereDate,"Episode"!==t.Type),e=n.Ay.toLocaleDateString(a),y.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}if("SeriesTimer"===t.Type&&(t.RecordAnyTime?y.push(o.Ay.translate("Anytime")):y.push(n.Ay.getDisplayTime(t.StartDate)),t.RecordAnyChannel?y.push(o.Ay.translate("AllChannels")):y.push(t.ChannelName||o.Ay.translate("OneChannel"))),t.StartDate&&"Program"!==t.Type&&"SeriesTimer"!==t.Type&&"Timer"!==t.Type)try{a=n.Ay.parseISO8601Date(t.StartDate),e=n.Ay.toLocaleDateString(a),y.push(e),"Recording"!==t.Type&&(e=n.Ay.getDisplayTime(a),y.push(e))}catch(e){console.error("error parsing date:",t.StartDate)}if(!1!==s.year&&t.ProductionYear&&"Series"===t.Type)if("Continuing"===t.Status)y.push(o.Ay.translate("SeriesYearToPresent",n.Ay.toLocaleString(t.ProductionYear,{useGrouping:!1})));else if(t.ProductionYear){if(e=n.Ay.toLocaleString(t.ProductionYear,{useGrouping:!1}),t.EndDate)try{var h=n.Ay.toLocaleString(n.Ay.parseISO8601Date(t.EndDate).getFullYear(),{useGrouping:!1});h!==e&&(e+=" - ".concat(h))}catch(e){console.error("error parsing date:",t.EndDate)}y.push(e)}if("Program"===t.Type||"Timer"===t.Type){var I=t;if("Timer"===t.Type&&(I=t.ProgramInfo),!1!==s.programIndicator&&(I.IsLive&&"true"===c.get("guide-indicator-live")?y.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem liveTvProgram">'.concat(o.Ay.translate("Live"),"</div>")}):I.IsPremiere&&"true"===c.get("guide-indicator-premiere")?y.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem premiereTvProgram">'.concat(o.Ay.translate("Premiere"),"</div>")}):I.IsSeries&&!I.IsRepeat&&"true"===c.get("guide-indicator-new")?y.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem newTvProgram">'.concat(o.Ay.translate("New"),"</div>")}):I.IsSeries&&I.IsRepeat&&"true"===c.get("guide-indicator-repeat")&&y.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem repeatTvProgram">'.concat(o.Ay.translate("Repeat"),"</div>")})),(I.IsSeries||I.EpisodeTitle)&&!1!==s.episodeTitle)(e=l.Ay.getDisplayName(I,{includeIndexNumber:s.episodeTitleIndexNumber}))&&y.push(r()(e));else if(I.IsMovie&&I.ProductionYear&&!1!==s.originalAirDate)y.push(I.ProductionYear);else if(I.PremiereDate&&!1!==s.originalAirDate)try{a=n.Ay.parseISO8601Date(I.PremiereDate),e=o.Ay.translate("OriginalAirDateValue",n.Ay.toLocaleDateString(a)),y.push(e)}catch(t){console.error("error parsing date:",I.PremiereDate)}else I.ProductionYear&&!1!==s.year&&y.push(I.ProductionYear)}if(!1!==s.year&&"Series"!==t.Type&&"Episode"!==t.Type&&"Person"!==t.Type&&"Photo"!==t.MediaType&&"Program"!==t.Type&&"Season"!==t.Type)if(t.ProductionYear)y.push(t.ProductionYear);else if(t.PremiereDate)try{e=n.Ay.toLocaleString(n.Ay.parseISO8601Date(t.PremiereDate).getFullYear(),{useGrouping:!1}),y.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}if(t.RunTimeTicks&&"Series"!==t.Type&&"Program"!==t.Type&&"Timer"!==t.Type&&"Book"!==t.Type&&!f&&!1!==s.runtime&&("Audio"===t.Type?y.push(n.Ay.getDisplayRunningTime(t.RunTimeTicks)):y.push(n.Ay.getDisplayDuration(t.RunTimeTicks))),!1!==s.officialRating&&t.OfficialRating&&"Season"!==t.Type&&"Episode"!==t.Type&&y.push({text:t.OfficialRating,cssClass:"mediaInfoText mediaInfoOfficialRating"}),t.Video3DFormat&&y.push("3D"),"Photo"===t.MediaType&&t.Width&&t.Height&&y.push("".concat(t.Width,"x").concat(t.Height)),!1!==s.container&&"Audio"===t.Type&&t.Container&&y.push(t.Container),p+=y.map((function(t){return m(t)})).join(""),!1!==s.starRating&&(p+=function(t){var e="";return t.CommunityRating&&(e+='<div class="starRatingContainer mediaInfoItem">',e+='<span class="material-icons starIcon star" aria-hidden="true"></span>',e+=t.CommunityRating.toFixed(1),e+="</div>"),e}(t)),t.HasSubtitles&&!1!==s.subtitles&&(p+='<div class="mediaInfoItem mediaInfoText closedCaptionMediaInfoText">CC</div>'),t.CriticRating&&!1!==s.criticRating&&(t.CriticRating>=60?p+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingFresh">'.concat(t.CriticRating,"</div>"):p+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingRotten">'.concat(t.CriticRating,"</div>")),!1!==s.endsAt){var g=u(t);g&&(p+=m(g,"endsAt"))}return p+d.Ay.getMissingIndicator(t)}(t,e)}function h(t,e){return null==(e=e||{}).interactive&&(e.interactive=!1),"Program"===t.Type?function(t,e){var a,i,o=[];if(t.StartDate&&!1!==e.programTime)try{a="",i=n.Ay.parseISO8601Date(t.StartDate),!1!==e.startDate&&(a+=n.Ay.toLocaleDateString(i,{weekday:"short",month:"short",day:"numeric"})),a+=" ".concat(n.Ay.getDisplayTime(i)),t.EndDate&&(i=n.Ay.parseISO8601Date(t.EndDate),a+=" - ".concat(n.Ay.getDisplayTime(i))),o.push(a)}catch(e){console.error("error parsing date:",t.StartDate)}if(t.ChannelNumber&&o.push("CH ".concat(t.ChannelNumber)),t.ChannelName&&(e.interactive&&t.ChannelId?o.push({html:'<a is="emby-linkbutton" class="button-flat mediaInfoItem" href="'.concat(s.appRouter.getRouteUrl({ServerId:t.ServerId,Type:"TvChannel",Name:t.ChannelName,Id:t.ChannelId}),'">').concat(r()(t.ChannelName),"</a>")}):o.push(r()(t.ChannelName))),!1!==e.timerIndicator){var l=function(t){var e;if("SeriesTimer"===t.Type)return'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record" aria-hidden="true"></span>';if(t.TimerId||t.SeriesTimerId)e=t.Status||"Cancelled";else{if("Timer"!==t.Type)return"";e=t.Status}return t.SeriesTimerId?"Cancelled"!==e?'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_manual_record" aria-hidden="true"></span>'}(t);l&&o.push({html:l})}return""+o.map((function(t){return m(t)})).join("")}(t,e):""}function I(t){var e=t.Width,a=t.Height;if(e&&a){if(e>=3800||a>=2e3)return"4K";if(e>=2500||a>=1400)return t.IsInterlaced?"1440i":"1440p";if(e>=1800||a>=1e3)return t.IsInterlaced?"1080i":"1080p";if(e>=1200||a>=700)return t.IsInterlaced?"720i":"720p";if(e>=700||a>=400)return t.IsInterlaced?"480i":"480p"}return null}e.Ay={getMediaInfoHtml:f,getEndsAt:u,getEndsAtFromPosition:function(t,e,a,i){var r=(new Date).getTime()+1/a*((t-(e||0))/1e4);r=new Date(r);var s=n.Ay.getDisplayTime(r);return!1===i?s:o.Ay.translate("EndsAtValue",s)},getPrimaryMediaInfoHtml:f,getSecondaryMediaInfoHtml:h,fillPrimaryMediaInfo:function(t,e,a){var i=f(e,a);t.innerHTML=i,p(t,e,a)},fillSecondaryMediaInfo:function(t,e,a){var i=h(e,a);t.innerHTML=i,p(t,e,a)},getMediaInfoStats:function(t){var e=[],a=(((t.MediaSources||[])[0]||{}).MediaStreams||[]).filter((function(t){return"Video"===t.Type}))[0]||{},i=function(t){if(!t.MediaSources)return null;var e=t.MediaSources[0];return e?(e.MediaStreams||[]).filter((function(t){return"Audio"===t.Type&&(t.Index===e.DefaultAudioStreamIndex||null==e.DefaultAudioStreamIndex)}))[0]:null}(t)||{};"Dvd"===t.VideoType&&e.push({type:"mediainfo",text:"Dvd"}),"BluRay"===t.VideoType&&e.push({type:"mediainfo",text:"BluRay"});var r=I(a);r&&e.push({type:"mediainfo",text:r}),a.Codec&&e.push({type:"mediainfo",text:a.Codec});var s,d=i.Channels;8===d?s="7.1":7===d?s="6.1":6===d?s="5.1":2===d&&(s="2.0"),s&&e.push({type:"mediainfo",text:s});var c=(i.Codec||"").toLowerCase();if("dca"!==c&&"dts"!==c||!i.Profile?i.Codec&&e.push({type:"mediainfo",text:i.Codec}):e.push({type:"mediainfo",text:i.Profile}),t.DateCreated&&l.Ay.enableDateAddedDisplay(t)){var u=n.Ay.parseISO8601Date(t.DateCreated);e.push({type:"added",text:o.Ay.translate("AddedOnValue","".concat(n.Ay.toLocaleDateString(u)," ").concat(n.Ay.getDisplayTime(u)))})}return e},getResolutionText:I}},38965:function(t,e,a){a.r(e);var i=a(10736),r=a(5898),n=a(44797),o=a(10353),s=a(86191);function l(){var t=this,e=t.getAttribute("data-id"),a=t.getAttribute("data-serverid"),i=s.A.getApiClient(a);t.classList.contains("playstatebutton-played")?(i.markUnplayed(i.getCurrentUserId(),e,new Date),c(t,!1)):(i.markPlayed(i.getCurrentUserId(),e,new Date),c(t,!0))}function d(t,e,a){a.ItemId===this.getAttribute("data-id")&&c(this,a.Played)}function c(t,e,a){var i=t.iconElement;i||(t.iconElement=t.querySelector(".material-icons"),i=t.iconElement),e?(t.classList.add("playstatebutton-played"),i&&(i.classList.add("playstatebutton-icon-played"),i.classList.remove("playstatebutton-icon-unplayed"))):(t.classList.remove("playstatebutton-played"),i&&(i.classList.remove("playstatebutton-icon-played"),i.classList.add("playstatebutton-icon-unplayed"))),!1!==a&&t.setAttribute("data-played",e),function(t,e,a){t.title="AudioBook"!==e&&"AudioPodcast"!==e?a?r.Ay.translate("Watched"):r.Ay.translate("MarkPlayed"):a?r.Ay.translate("Played"):r.Ay.translate("MarkPlayed");var i=t.querySelector(".button-text");i&&(i.innerText=t.title)}(t,t.getAttribute("data-type"),e)}function u(t){var e,a,r;t.removeEventListener("click",l),(r=(e=t)[a="UserDataChanged"])&&(n.A.off(i.default,a,r),e[a]=null)}function m(t){var e,a,r;u(t),t.addEventListener("click",l),e=t,a="UserDataChanged",r=d.bind(e),n.A.on(i.default,a,r),e[a]=r}var p=Object.create(o.A);p.createdCallback=function(){o.A.createdCallback&&o.A.createdCallback.call(this)},p.attachedCallback=function(){o.A.attachedCallback&&o.A.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");t&&e&&(c(this,"true"===this.getAttribute("data-played"),!1),m(this))},p.detachedCallback=function(){o.A.detachedCallback&&o.A.detachedCallback.call(this),u(this),this.iconElement=null},p.setItem=function(t){var e;t?(this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId),this.setAttribute("data-type",t.Type),c(this,null===(e=t.UserData)||void 0===e?void 0:e.Played),m(this)):(this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-type"),this.removeAttribute("data-played"),u(this))},document.registerElement("emby-playstatebutton",{prototype:p,extends:"button"})},15605:function(t,e,a){a.r(e);var i=a(10736),r=a(5898),n=a(44797),o=a(10353),s=a(86191);function l(){var t=this,e=t.getAttribute("data-id"),a=t.getAttribute("data-serverid"),i=s.A.getApiClient(a),r=this.getAttribute("data-likes");r="true"===r||"false"!==r&&null,function(t,e,a,i,r){return e.updateFavoriteStatus(e.getCurrentUserId(),a,!r)}(0,i,e,0,"true"===this.getAttribute("data-isfavorite")).then((function(e){c(t,e.Likes,e.IsFavorite)}))}function d(t,e,a){a.ItemId===this.getAttribute("data-id")&&c(this,a.Likes,a.IsFavorite)}function c(t,e,a,i){var r=t.querySelector(".material-icons");a?(r&&(r.classList.add("favorite"),r.classList.add("ratingbutton-icon-withrating")),t.classList.add("ratingbutton-withrating")):(r&&(r.classList.add("favorite"),r.classList.remove("ratingbutton-icon-withrating")),t.classList.remove("ratingbutton-withrating")),!1!==i&&(t.setAttribute("data-isfavorite",a),t.setAttribute("data-likes",null===e?"":e)),u(t,a)}function u(t,e){t.title=e?r.Ay.translate("Favorite"):r.Ay.translate("AddToFavorites");var a=t.querySelector(".button-text");a&&(a.innerText=t.title)}function m(t){var e,a,r;t.removeEventListener("click",l),(r=(e=t)[a="UserDataChanged"])&&(n.A.off(i.default,a,r),e[a]=null)}function p(t){var e,a,r;m(t),t.addEventListener("click",l),e=t,a="UserDataChanged",r=d.bind(e),n.A.on(i.default,a,r),e[a]=r}var y=Object.create(o.A);y.createdCallback=function(){o.A.createdCallback&&o.A.createdCallback.call(this)},y.attachedCallback=function(){o.A.attachedCallback&&o.A.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");if(t&&e){var a=this.getAttribute("data-likes");c(this,a="true"===a||"false"!==a&&null,"true"===this.getAttribute("data-isfavorite"),!1),p(this)}else u(this)},y.detachedCallback=function(){o.A.detachedCallback&&o.A.detachedCallback.call(this),m(this)},y.setItem=function(t){if(t){this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId);var e=t.UserData||{};c(this,e.Likes,e.IsFavorite),p(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),m(this)},document.registerElement("emby-ratingbutton",{prototype:y,extends:"button"})}}]);