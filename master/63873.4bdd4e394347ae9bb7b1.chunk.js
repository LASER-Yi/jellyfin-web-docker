"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[63873,36662,27636],{63873:function(t,e,a){a(27471),a(5769),a(63238),a(14078),a(23938),a(61013),a(52077),a(911),a(72410),a(15610),a(17460),a(25901),a(92189),a(91047);var i=a(65009),r=a.n(i),n=a(21776),o=a(70350),s=a(24102),l=a(30325),d=a(94994),c=a(61693),u=a(61570),m=(a(27636),a(36662),a(18613));function p(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){var a=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=a){var i,r,n,o,s=[],l=!0,d=!1;try{if(n=(a=a.call(t)).next,0===e){if(Object(a)!==a)return;l=!1}else for(;!(l=(i=n.call(a)).done)&&(s.push(i.value),s.length!==e);l=!0);}catch(t){d=!0,r=t}finally{try{if(!l&&null!=a.return&&(o=a.return(),Object(o)!==o))return}finally{if(d)throw r}}return s}}(t,e)||f(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function f(t,e){if(t){if("string"==typeof t)return h(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);return"Object"===a&&t.constructor&&(a=t.constructor.name),"Map"===a||"Set"===a?Array.from(t):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?h(t,e):void 0}}function h(t,e){(null==e||e>t.length)&&(e=t.length);for(var a=0,i=new Array(e);a<e;a++)i[a]=t[a];return i}function I(t,e){if("disc"===e.index)return null==t.ParentIndexNumber?"":d.ZP.translate("ValueDiscNumber",t.ParentIndexNumber);var a,i,r=(e.sortBy||"").toLowerCase();return 0===r.indexOf("sortname")?"Episode"===t.Type?"":(a=(i=(t.SortName||t.Name||"?")[0].toUpperCase()).charCodeAt(0))<65||a>90?"#":i.toUpperCase():0===r.indexOf("officialrating")?t.OfficialRating||d.ZP.translate("Unrated"):0===r.indexOf("communityrating")?null==t.CommunityRating?d.ZP.translate("Unrated"):Math.floor(t.CommunityRating):0===r.indexOf("criticrating")?null==t.CriticRating?d.ZP.translate("Unrated"):Math.floor(t.CriticRating):0===r.indexOf("albumartist")&&t.AlbumArtist?(a=(i=t.AlbumArtist[0].toUpperCase()).charCodeAt(0))<65||a>90?"#":i.toUpperCase():""}function g(t,e){var a,i=m.Z.getApiClient(t.ServerId),r={fillWidth:e,fillHeight:e,type:"Primary"};return t.ImageTags&&t.ImageTags.Primary?(r.tag=t.ImageTags.Primary,a=t.Id):t.AlbumId&&t.AlbumPrimaryImageTag?(r.tag=t.AlbumPrimaryImageTag,a=t.AlbumId):t.SeriesId&&t.SeriesPrimaryImageTag?(r.tag=t.SeriesPrimaryImageTag,a=t.SeriesId):t.ParentPrimaryImageTag&&(r.tag=t.ParentPrimaryImageTag,a=t.ParentPrimaryImageItemId),a?i.getScaledImageUrl(a,r):null}function v(t,e){var a=m.Z.getApiClient(t.ServerId),i={fillWidth:e,fillHeight:e,type:"Primary"};if(t.ChannelId&&t.ChannelPrimaryImageTag&&(i.tag=t.ChannelPrimaryImageTag),t.ChannelId)return a.getScaledImageUrl(t.ChannelId,i)}function y(t,e){var a,i="",n=l.Z.tv?"h2":"div",o=function(t,e){var a="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!a){if(Array.isArray(t)||(a=f(t))){a&&(t=a);var i=0,r=function(){};return{s:r,n:function(){return i>=t.length?{done:!0}:{done:!1,value:t[i++]}},e:function(t){throw t},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var n,o=!0,s=!1;return{s:function(){a=a.call(t)},n:function(){var t=a.next();return o=t.done,t},e:function(t){s=!0,n=t},f:function(){try{o||null==a.return||a.return()}finally{if(s)throw n}}}}(t.entries());try{for(o.s();!(a=o.n()).done;){var s=p(a.value,2),d=s[0],c=s[1];if(c){var u=void 0;0===d?u=e?document.createElement(n):document.createElement("div"):(u=document.createElement("div")).classList.add("secondary"),u.classList.add("listItemBodyText"),u.innerHTML="<bdi>"+r()(c)+"</bdi>",i+=u.outerHTML}}}catch(t){o.e(t)}finally{o.f()}return i}function b(t){for(var e="",a=0,i=t.rightButtons.length;a<i;a++){var r=t.rightButtons[a];e+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="custom" data-customaction="'.concat(r.id,'" title="').concat(r.title,'"><span class="material-icons ').concat(r.icon,'" aria-hidden="true"></span></button>')}return e}e.Z={getListViewHtml:function(t){for(var e=t.items,a="",i=t.action||"link",d="large"===t.imageSize,m=t.enableOverview,p=!!l.Z.tv,f=p?"button":"div",h=null==t.enableSideMediaInfo||t.enableSideMediaInfo,P="",T=t.enableOverview&&!l.Z.tv,C=0,A=e.length;C<A;C++){var S=e[C],Z="";if(t.showIndex){var D=I(S,t);D!==a&&(Z&&(Z+="</div>"),Z+=0===C?'<h2 class="listGroupHeader listGroupHeader-first">':'<h2 class="listGroupHeader">',Z+=r()(D),Z+="</h2>",Z+="<div>",a=D)}var k="listItem";(t.border||!1!==t.highlight&&!l.Z.tv)&&(k+=" listItem-border"),p&&(k+=" itemAction listItem-button"),l.Z.tv&&(k+=" listItem-focusscale");var w=80;d&&(k+=" listItem-largeImage",w=500);var x=S.PlaylistItemId?' data-playlistitemid="'.concat(S.PlaylistItemId,'"'):"",L=S.UserData&&S.UserData.PlaybackPositionTicks?' data-positionticks="'.concat(S.UserData.PlaybackPositionTicks,'"'):"",M=t.collectionId?' data-collectionid="'.concat(t.collectionId,'"'):"",R=t.playlistId?' data-playlistid="'.concat(t.playlistId,'"'):"",B=S.MediaType?' data-mediatype="'.concat(S.MediaType,'"'):"",O=S.CollectionType?' data-collectiontype="'.concat(S.CollectionType,'"'):"",E=S.ChannelId?' data-channelid="'.concat(S.ChannelId,'"'):"";if(T&&(k+=" listItem-withContentWrapper"),Z+="<".concat(f,' class="').concat(k,'"').concat(x,' data-action="').concat(i,'" data-isfolder="').concat(S.IsFolder,'" data-id="').concat(S.Id,'" data-serverid="').concat(S.ServerId,'" data-type="').concat(S.Type,'"').concat(B).concat(O).concat(E).concat(L).concat(M).concat(R,">"),T&&(Z+='<div class="listItem-content">'),!p&&t.dragHandle&&(Z+='<span class="listViewDragHandle material-icons listItemIcon listItemIcon-transparent drag_handle" aria-hidden="true"></span>'),!1!==t.image){var N="channel"===t.imageSource?v(S,w):g(S,w),U=d?"listItemImage listItemImage-large":"listItemImage";d&&l.Z.tv&&(U+=" listItemImage-large-tv");var H=t.imagePlayButton&&!l.Z.tv;p||(U+=" itemAction"),Z+=N?'<div data-action="'+(H?"link":i)+'" class="'+U+' lazy" data-src="'+N+'" item-icon>':'<div class="'+U+" cardImageContainer "+u.default.getDefaultBackgroundClass(S.Name)+'">'+u.default.getDefaultText(S,t);var F=S.MediaSourceCount||1;F>1&&!0!==t.disableIndicators&&(Z+='<div class="mediaSourceIndicator">'+F+"</div>");var Y="";(Y+=s.ZP.getPlayedIndicatorHtml(S))&&(Z+='<div class="indicators listItemIndicators">'.concat(Y,"</div>")),H&&(Z+='<button is="paper-icon-button-light" class="listItemImageButton itemAction" data-action="resume"><span class="material-icons listItemImageButton-icon play_arrow" aria-hidden="true"></span></button>');var V=s.ZP.getProgressBarHtml(S,{containerClass:"listItemProgressBar"});V&&(Z+=V),Z+="</div>"}t.showIndexNumberLeft&&(Z+='<div class="listItem-indexnumberleft">',Z+=S.IndexNumber||"&nbsp;",Z+="</div>");var _=[];t.showProgramDateTime&&_.push(c.ZP.toLocaleString(c.ZP.parseISO8601Date(S.StartDate),{weekday:"long",month:"short",day:"numeric",hour:"numeric",minute:"2-digit"})),t.showProgramTime&&_.push(c.ZP.getDisplayTime(c.ZP.parseISO8601Date(S.StartDate))),t.showChannel&&S.ChannelName&&_.push(S.ChannelName);var j=null;t.showParentTitle&&("Episode"===S.Type?j=S.SeriesName:(S.IsSeries||S.EpisodeTitle&&S.Name)&&(j=S.Name));var W=n.ZP.getDisplayName(S,{includeParentInfo:t.includeParentInfoInTitle});if(t.showIndexNumber&&null!=S.IndexNumber&&(W="".concat(S.IndexNumber,". ").concat(W)),t.showParentTitle&&t.parentTitleWithTitle?(W&&(j&&(j+=" - "),j=(j||"")+W),_.push(j||"")):t.showParentTitle&&_.push(j||""),W&&!t.parentTitleWithTitle&&_.push(W),S.IsFolder)!1!==t.artist&&S.AlbumArtist&&"MusicAlbum"===S.Type&&_.push(S.AlbumArtist);else if(t.artist){var G=S.ArtistItems;G&&"MusicAlbum"!==S.Type&&_.push(G.map((function(t){return t.Name})).join(", "))}if("TvChannel"===S.Type&&S.CurrentProgram&&_.push(n.ZP.getDisplayName(S.CurrentProgram)),k="listItemBody",p||(k+=" itemAction"),!1===t.image&&(k+=" listItemBody-noleftpadding"),Z+='<div class="'.concat(k,'">'),Z+=y(_,d),!1===t.mediaInfo||h||(Z+='<div class="'.concat("secondary listItemMediaInfo listItemBodyText",'">'),Z+=o.ZP.getPrimaryMediaInfoHtml(S,{episodeTitle:!1,originalAirDate:!1,subtitles:!1}),Z+="</div>"),m&&S.Overview&&(Z+='<div class="secondary listItem-overview listItemBodyText">',Z+="<bdi>"+S.Overview+"</bdi>",Z+="</div>"),Z+="</div>",!1!==t.mediaInfo&&h&&(Z+='<div class="secondary listItemMediaInfo">',Z+=o.ZP.getPrimaryMediaInfoHtml(S,{year:!1,container:!1,episodeTitle:!1,criticRating:!1,endsAt:!1}),Z+="</div>"),t.recordButton||"Timer"!==S.Type&&"Program"!==S.Type||(Z+=s.ZP.getTimerIndicator(S).replace("indicatorIcon","indicatorIcon listItemAside")),Z+='<div class="listViewUserDataButtons">',!p){if(t.addToListButton&&(Z+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="addtoplaylist"><span class="material-icons playlist_add" aria-hidden="true"></span></button>'),t.infoButton&&(Z+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="link"><span class="material-icons info_outline" aria-hidden="true"></span></button>'),t.rightButtons&&(Z+=b(t)),!1!==t.enableUserDataButtons){var q=S.UserData||{},z=null==q.Likes?"":q.Likes;n.ZP.canMarkPlayed(S)&&!1!==t.enablePlayedButton&&(Z+='<button is="emby-playstatebutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+S.Id+'" data-serverid="'+S.ServerId+'" data-itemtype="'+S.Type+'" data-played="'+q.Played+'"><span class="material-icons check" aria-hidden="true"></span></button>'),n.ZP.canRate(S)&&!1!==t.enableRatingButton&&(Z+='<button is="emby-ratingbutton" type="button" class="listItemButton paper-icon-button-light" data-id="'+S.Id+'" data-serverid="'+S.ServerId+'" data-itemtype="'+S.Type+'" data-likes="'+z+'" data-isfavorite="'+q.IsFavorite+'"><span class="material-icons favorite" aria-hidden="true"></span></button>')}!1!==t.moreButton&&(Z+='<button is="paper-icon-button-light" class="listItemButton itemAction" data-action="menu"><span class="material-icons more_vert" aria-hidden="true"></span></button>')}Z+="</div>",T&&(Z+="</div>",m&&S.Overview&&(Z+='<div class="listItem-bottomoverview secondary">',Z+="<bdi>"+S.Overview+"</bdi>",Z+="</div>")),P+=Z+="</".concat(f,">")}return P}}},70350:function(t,e,a){a(23938),a(61013),a(76056),a(98010),a(63238);var i=a(65009),r=a.n(i),n=a(61693),o=a(94994),s=a(52050),l=a(21776),d=a(24102);function c(t){var e,a,i,s=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},c="",f=[],h="MusicAlbum"===t.Type||"MusicArtist"===t.MediaType||"Playlist"===t.Type||"Playlist"===t.MediaType||"MusicGenre"===t.MediaType;if(h?((i=t.SongCount||t.ChildCount)&&f.push(o.ZP.translate("TrackCount",i)),t.RunTimeTicks&&f.push(n.ZP.getDisplayDuration(t.RunTimeTicks))):"PhotoAlbum"!==t.Type&&"BoxSet"!==t.Type||(i=t.ChildCount)&&f.push(o.ZP.translate("ItemCount",i)),("Episode"===t.Type||"Photo"===t.MediaType)&&!1!==s.originalAirDate&&t.PremiereDate)try{a=n.ZP.parseISO8601Date(t.PremiereDate,"Episode"!==t.Type),e=n.ZP.toLocaleDateString(a),f.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}if("SeriesTimer"===t.Type&&(t.RecordAnyTime?f.push(o.ZP.translate("Anytime")):f.push(n.ZP.getDisplayTime(t.StartDate)),t.RecordAnyChannel?f.push(o.ZP.translate("AllChannels")):f.push(t.ChannelName||o.ZP.translate("OneChannel"))),t.StartDate&&"Program"!==t.Type&&"SeriesTimer"!==t.Type)try{a=n.ZP.parseISO8601Date(t.StartDate),e=n.ZP.toLocaleDateString(a),f.push(e),"Recording"!==t.Type&&(e=n.ZP.getDisplayTime(a),f.push(e))}catch(e){console.error("error parsing date:",t.StartDate)}if(!1!==s.year&&t.ProductionYear&&"Series"===t.Type)if("Continuing"===t.Status)f.push(o.ZP.translate("SeriesYearToPresent",n.ZP.toLocaleString(t.ProductionYear,{useGrouping:!1})));else if(t.ProductionYear){if(e=n.ZP.toLocaleString(t.ProductionYear,{useGrouping:!1}),t.EndDate)try{var I=n.ZP.toLocaleString(n.ZP.parseISO8601Date(t.EndDate).getFullYear(),{useGrouping:!1});I!==t.ProductionYear&&(e+="-".concat(I))}catch(e){console.error("error parsing date:",t.EndDate)}f.push(e)}if("Program"===t.Type)if(!1!==s.programIndicator&&(t.IsLive?f.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem liveTvProgram">'.concat(o.ZP.translate("Live"),"</div>")}):t.IsPremiere?f.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem premiereTvProgram">'.concat(o.ZP.translate("Premiere"),"</div>")}):t.IsSeries&&!t.IsRepeat?f.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem newTvProgram">'.concat(o.ZP.translate("New"),"</div>")}):t.IsSeries&&t.IsRepeat&&f.push({html:'<div class="mediaInfoProgramAttribute mediaInfoItem repeatTvProgram">'.concat(o.ZP.translate("Repeat"),"</div>")})),(t.IsSeries||t.EpisodeTitle)&&!1!==s.episodeTitle)(e=l.ZP.getDisplayName(t,{includeIndexNumber:s.episodeTitleIndexNumber}))&&f.push(r()(e));else if(t.IsMovie&&t.ProductionYear&&!1!==s.originalAirDate)f.push(t.ProductionYear);else if(t.PremiereDate&&!1!==s.originalAirDate)try{a=n.ZP.parseISO8601Date(t.PremiereDate),e=o.ZP.translate("OriginalAirDateValue",n.ZP.toLocaleDateString(a)),f.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}else t.ProductionYear&&f.push(t.ProductionYear);if(!1!==s.year&&"Series"!==t.Type&&"Episode"!==t.Type&&"Person"!==t.Type&&"Photo"!==t.MediaType&&"Program"!==t.Type&&"Season"!==t.Type)if(t.ProductionYear)f.push(t.ProductionYear);else if(t.PremiereDate)try{e=n.ZP.toLocaleString(n.ZP.parseISO8601Date(t.PremiereDate).getFullYear(),{useGrouping:!1}),f.push(e)}catch(e){console.error("error parsing date:",t.PremiereDate)}if(t.RunTimeTicks&&"Series"!==t.Type&&"Program"!==t.Type&&"Book"!==t.Type&&!h&&!1!==s.runtime&&("Audio"===t.Type?f.push(n.ZP.getDisplayRunningTime(t.RunTimeTicks)):f.push(n.ZP.getDisplayDuration(t.RunTimeTicks))),t.OfficialRating&&"Season"!==t.Type&&"Episode"!==t.Type&&f.push({text:t.OfficialRating,cssClass:"mediaInfoOfficialRating"}),t.Video3DFormat&&f.push("3D"),"Photo"===t.MediaType&&t.Width&&t.Height&&f.push("".concat(t.Width,"x").concat(t.Height)),!1!==s.container&&"Audio"===t.Type&&t.Container&&f.push(t.Container),c+=f.map((function(t){return m(t)})).join(""),!1!==s.starRating&&(c+=p(t)),t.HasSubtitles&&!1!==s.subtitles&&(c+='<div class="mediaInfoItem mediaInfoText closedCaptionMediaInfoText">CC</div>'),t.CriticRating&&!1!==s.criticRating&&(t.CriticRating>=60?c+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingFresh">'.concat(t.CriticRating,"</div>"):c+='<div class="mediaInfoItem mediaInfoCriticRating mediaInfoCriticRatingRotten">'.concat(t.CriticRating,"</div>")),!1!==s.endsAt){var g=u(t);g&&(c+=m(g,"endsAt"))}return c+d.ZP.getMissingIndicator(t)}function u(t){if("Video"===t.MediaType&&t.RunTimeTicks&&!t.StartDate){var e=(new Date).getTime()+t.RunTimeTicks/1e4;e=new Date(e);var a=n.ZP.getDisplayTime(e);return o.ZP.translate("EndsAtValue",a)}return null}function m(t,e){e=e?"".concat(e," mediaInfoItem"):"mediaInfoItem";var a=t;if("string"!=typeof t&&"number"!=typeof t){if(t.html)return t.html;a=t.text,e+=" ".concat(t.cssClass)}return'<div class="'.concat(e,'">').concat(a,"</div>")}function p(t){var e="";return t.CommunityRating&&(e+='<div class="starRatingContainer mediaInfoItem">',e+='<span class="material-icons starIcon star" aria-hidden="true"></span>',e+=t.CommunityRating.toFixed(1),e+="</div>"),e}function f(t,e,a){if(!1!==a.endsAt){var i=t.querySelector(".endsAt");i&&function(t,e){var a=setInterval((function(){document.body.contains(t)?t.innerHTML=u(e):clearInterval(a)}),6e4)}(i,e)}var r=t.querySelector(".lnkChannel");r&&r.addEventListener("click",h)}function h(t){var e=this.getAttribute("data-id"),a=this.getAttribute("data-serverid");return s.appRouter.showItem(e,a),t.preventDefault(),!1}function I(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return void 0===e.interactive&&(e.interactive=!1),c(t,e)}function g(t,e){return null==(e=e||{}).interactive&&(e.interactive=!1),"Program"===t.Type?function(t,e){var a,i,o=[];if(t.StartDate&&!1!==e.programTime)try{a="",i=n.ZP.parseISO8601Date(t.StartDate),!1!==e.startDate&&(a+=n.ZP.toLocaleDateString(i,{weekday:"short",month:"short",day:"numeric"})),a+=" ".concat(n.ZP.getDisplayTime(i)),t.EndDate&&(i=n.ZP.parseISO8601Date(t.EndDate),a+=" - ".concat(n.ZP.getDisplayTime(i))),o.push(a)}catch(e){console.error("error parsing date:",t.StartDate)}if(t.ChannelNumber&&o.push("CH ".concat(t.ChannelNumber)),t.ChannelName&&(e.interactive&&t.ChannelId?o.push({html:'<a is="emby-linkbutton" class="button-flat mediaInfoItem" href="'.concat(s.appRouter.getRouteUrl({ServerId:t.ServerId,Type:"TvChannel",Name:t.ChannelName,Id:t.ChannelId}),'">').concat(r()(t.ChannelName),"</a>")}):o.push(r()(t.ChannelName))),!1!==e.timerIndicator){var l=function(t){var e;if("SeriesTimer"===t.Type)return'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record" aria-hidden="true"></span>';if(t.TimerId||t.SeriesTimerId)e=t.Status||"Cancelled";else{if("Timer"!==t.Type)return"";e=t.Status}return t.SeriesTimerId?"Cancelled"!==e?'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem fiber_smart_record" aria-hidden="true"></span>':'<span class="material-icons mediaInfoItem mediaInfoIconItem mediaInfoTimerIcon fiber_manual_record" aria-hidden="true"></span>'}(t);l&&o.push({html:l})}return""+o.map((function(t){return m(t)})).join("")}(t,e):""}function v(t){var e=t.Width,a=t.Height;if(e&&a){if(e>=3800||a>=2e3)return"4K";if(e>=2500||a>=1400)return t.IsInterlaced?"1440i":"1440p";if(e>=1800||a>=1e3)return t.IsInterlaced?"1080i":"1080p";if(e>=1200||a>=700)return t.IsInterlaced?"720i":"720p";if(e>=700||a>=400)return t.IsInterlaced?"480i":"480p"}return null}a(38228),e.ZP={getMediaInfoHtml:I,getEndsAt:u,getEndsAtFromPosition:function(t,e,a,i){var r=(new Date).getTime()+1/a*((t-(e||0))/1e4);r=new Date(r);var s=n.ZP.getDisplayTime(r);return!1===i?s:o.ZP.translate("EndsAtValue",s)},getPrimaryMediaInfoHtml:I,getSecondaryMediaInfoHtml:g,fillPrimaryMediaInfo:function(t,e,a){var i=I(e,a);t.innerHTML=i,f(t,e,a)},fillSecondaryMediaInfo:function(t,e,a){var i=g(e,a);t.innerHTML=i,f(t,e,a)},getMediaInfoStats:function(t){var e=[],a=(((t.MediaSources||[])[0]||{}).MediaStreams||[]).filter((function(t){return"Video"===t.Type}))[0]||{},i=function(t){if(!t.MediaSources)return null;var e=t.MediaSources[0];return e?(e.MediaStreams||[]).filter((function(t){return"Audio"===t.Type&&(t.Index===e.DefaultAudioStreamIndex||null==e.DefaultAudioStreamIndex)}))[0]:null}(t)||{};"Dvd"===t.VideoType&&e.push({type:"mediainfo",text:"Dvd"}),"BluRay"===t.VideoType&&e.push({type:"mediainfo",text:"BluRay"});var r=v(a);r&&e.push({type:"mediainfo",text:r}),a.Codec&&e.push({type:"mediainfo",text:a.Codec});var s,d=i.Channels;8===d?s="7.1":7===d?s="6.1":6===d?s="5.1":2===d&&(s="2.0"),s&&e.push({type:"mediainfo",text:s});var c=(i.Codec||"").toLowerCase();if("dca"!==c&&"dts"!==c||!i.Profile?i.Codec&&e.push({type:"mediainfo",text:i.Codec}):e.push({type:"mediainfo",text:i.Profile}),t.DateCreated&&l.ZP.enableDateAddedDisplay(t)){var u=n.ZP.parseISO8601Date(t.DateCreated);e.push({type:"added",text:o.ZP.translate("AddedOnValue","".concat(n.ZP.toLocaleDateString(u)," ").concat(n.ZP.getDisplayTime(u)))})}return e},getResolutionText:v}},36662:function(t,e,a){a.r(e);var i=a(44038),r=a(94994),n=a(81643),o=a(38228),s=a(18613);function l(){var t=this,e=t.getAttribute("data-id"),a=t.getAttribute("data-serverid"),i=s.Z.getApiClient(a);t.classList.contains("playstatebutton-played")?(i.markUnplayed(i.getCurrentUserId(),e,new Date),c(t,!1)):(i.markPlayed(i.getCurrentUserId(),e,new Date),c(t,!0))}function d(t,e,a){a.ItemId===this.getAttribute("data-id")&&c(this,a.Played)}function c(t,e,a){var i=t.iconElement;i||(t.iconElement=t.querySelector(".material-icons"),i=t.iconElement),e?(t.classList.add("playstatebutton-played"),i&&(i.classList.add("playstatebutton-icon-played"),i.classList.remove("playstatebutton-icon-unplayed"))):(t.classList.remove("playstatebutton-played"),i&&(i.classList.remove("playstatebutton-icon-played"),i.classList.add("playstatebutton-icon-unplayed"))),!1!==a&&t.setAttribute("data-played",e),function(t,e,a){t.title="AudioBook"!==e&&"AudioPodcast"!==e?a?r.ZP.translate("Watched"):r.ZP.translate("MarkPlayed"):a?r.ZP.translate("Played"):r.ZP.translate("MarkPlayed");var i=t.querySelector(".button-text");i&&(i.innerText=t.title)}(t,t.getAttribute("data-type"),e)}function u(t){var e,a,r;t.removeEventListener("click",l),(r=(e=t)[a="UserDataChanged"])&&(n.Z.off(i.default,a,r),e[a]=null)}function m(t){var e,a,r;u(t),t.addEventListener("click",l),e=t,a="UserDataChanged",r=d.bind(e),n.Z.on(i.default,a,r),e[a]=r}var p=Object.create(o.Z);p.createdCallback=function(){o.Z.createdCallback&&o.Z.createdCallback.call(this)},p.attachedCallback=function(){o.Z.attachedCallback&&o.Z.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");t&&e&&(c(this,"true"===this.getAttribute("data-played"),!1),m(this))},p.detachedCallback=function(){o.Z.detachedCallback&&o.Z.detachedCallback.call(this),u(this),this.iconElement=null},p.setItem=function(t){t?(this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId),this.setAttribute("data-type",t.Type),c(this,t.UserData&&t.UserData.Played),m(this)):(this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-type"),this.removeAttribute("data-played"),u(this))},document.registerElement("emby-playstatebutton",{prototype:p,extends:"button"})},27636:function(t,e,a){a.r(e);var i=a(44038),r=a(94994),n=a(81643),o=a(38228),s=a(18613);function l(){var t=this,e=t.getAttribute("data-id"),a=t.getAttribute("data-serverid"),i=s.Z.getApiClient(a),r=this.getAttribute("data-likes");r="true"===r||"false"!==r&&null,function(t,e,a,i,r){return e.updateFavoriteStatus(e.getCurrentUserId(),a,!r)}(0,i,e,0,"true"===this.getAttribute("data-isfavorite")).then((function(e){c(t,e.Likes,e.IsFavorite)}))}function d(t,e,a){a.ItemId===this.getAttribute("data-id")&&c(this,a.Likes,a.IsFavorite)}function c(t,e,a,i){var r=t.querySelector(".material-icons");a?(r&&(r.classList.add("favorite"),r.classList.add("ratingbutton-icon-withrating")),t.classList.add("ratingbutton-withrating")):(r&&(r.classList.add("favorite"),r.classList.remove("ratingbutton-icon-withrating")),t.classList.remove("ratingbutton-withrating")),!1!==i&&(t.setAttribute("data-isfavorite",a),t.setAttribute("data-likes",null===e?"":e)),u(t,a)}function u(t,e){t.title=e?r.ZP.translate("Favorite"):r.ZP.translate("AddToFavorites");var a=t.querySelector(".button-text");a&&(a.innerText=t.title)}function m(t){var e,a,r;t.removeEventListener("click",l),(r=(e=t)[a="UserDataChanged"])&&(n.Z.off(i.default,a,r),e[a]=null)}function p(t){var e,a,r;m(t),t.addEventListener("click",l),e=t,a="UserDataChanged",r=d.bind(e),n.Z.on(i.default,a,r),e[a]=r}var f=Object.create(o.Z);f.createdCallback=function(){o.Z.createdCallback&&o.Z.createdCallback.call(this)},f.attachedCallback=function(){o.Z.attachedCallback&&o.Z.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");if(t&&e){var a=this.getAttribute("data-likes");c(this,a="true"===a||"false"!==a&&null,"true"===this.getAttribute("data-isfavorite"),!1),p(this)}else u(this)},f.detachedCallback=function(){o.Z.detachedCallback&&o.Z.detachedCallback.call(this),m(this)},f.setItem=function(t){if(t){this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId);var e=t.UserData||{};c(this,e.Likes,e.IsFavorite),p(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),m(this)},document.registerElement("emby-ratingbutton",{prototype:f,extends:"button"})}}]);