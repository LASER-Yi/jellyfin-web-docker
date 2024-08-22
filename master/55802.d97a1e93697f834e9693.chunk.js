"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[55802],{55802:function(e,t,n){n.r(t),n.d(t,{getCommands:function(){return b},show:function(){return v}}),n(44962),n(24776),n(64771),n(86584),n(25352),n(78557),n(90076),n(95021),n(83994),n(93062),n(82367);var a=n(34789),i=n(27351),r=n(47629),o=n(5898),s=n(79617),l=n(22622),c=n(70267),d=n(23648),u=n(80669),m=n(86191),h=n(50764),y=n(82885),p=n(11444);function f(e){switch(e){case p.D.Series:return o.Ay.translate("DeleteSeries");case p.D.Episode:return o.Ay.translate("DeleteEpisode");case p.D.Playlist:case p.D.BoxSet:return o.Ay.translate("Delete");default:return o.Ay.translate("DeleteMedia")}}function b(e){var t,n=e.item,i=e.user,s=[];if(u.f.canPlay(n)&&"Photo"!==n.MediaType&&(!1!==e.play&&s.push({name:o.Ay.translate("Play"),id:"resume",icon:"play_arrow"}),e.playAllFromHere&&"Program"!==n.Type&&"TvChannel"!==n.Type&&s.push({name:o.Ay.translate("PlayAllFromHere"),id:"playallfromhere",icon:"play_arrow"})),null!==u.f.getCurrentPlayer()&&(e.stopPlayback&&s.push({name:o.Ay.translate("StopPlayback"),id:"stopPlayback",icon:"stop"}),e.clearQueue&&s.push({name:o.Ay.translate("ClearQueue"),id:"clearQueue",icon:"clear_all"})),u.f.canQueue(n)&&(!1!==e.queue&&s.push({name:o.Ay.translate("AddToPlayQueue"),id:"queue",icon:"playlist_add"}),!1!==e.queue&&s.push({name:o.Ay.translate("PlayNext"),id:"queuenext",icon:"playlist_add"})),!n.IsFolder&&"MusicArtist"!==n.Type&&"MusicGenre"!==n.Type||"livetv"===n.CollectionType||!1===e.shuffle||s.push({name:o.Ay.translate("Shuffle"),id:"shuffle",icon:"shuffle"}),"Audio"!==n.MediaType&&"MusicAlbum"!==n.Type&&"MusicArtist"!==n.Type&&"MusicGenre"!==n.Type||!1===e.instantMix||d.Ay.isLocalItem(n)||s.push({name:o.Ay.translate("InstantMix"),id:"instantmix",icon:"explore"}),s.length&&s.push({divider:!0}),a.A.tv||(e.positionTo&&null!==r.Ay.parentWithClass(e.positionTo,"card")&&s.push({name:o.Ay.translate("Select"),id:"multiSelect",icon:"library_add_check"}),d.Ay.supportsAddingToCollection(n)&&(i.Policy.IsAdministrator||i.Policy.EnableCollectionManagement)&&s.push({name:o.Ay.translate("AddToCollection"),id:"addtocollection",icon:"playlist_add"}),d.Ay.supportsAddingToPlaylist(n)&&!1!==e.playlist&&s.push({name:o.Ay.translate("AddToPlaylist"),id:"addtoplaylist",icon:"playlist_add"})),"Timer"===n.Type&&i.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&s.push({name:o.Ay.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"Recording"===n.Type&&"InProgress"===n.Status&&i.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&s.push({name:o.Ay.translate("CancelRecording"),id:"canceltimer",icon:"cancel"}),"SeriesTimer"===n.Type&&i.Policy.EnableLiveTvManagement&&!1!==e.cancelTimer&&s.push({name:o.Ay.translate("CancelSeries"),id:"cancelseriestimer",icon:"cancel"}),l.g.supports("filedownload")&&(!i.Policy.EnableContentDownloading||"Season"!==n.Type&&"Series"!=n.Type||s.push({name:o.Ay.translate("DownloadAll"),id:"downloadall",icon:"file_download"}),n.CanDownload&&"Book"!==n.Type&&(s.push({name:o.Ay.translate("Download"),id:"download",icon:"file_download"}),s.push({name:o.Ay.translate("CopyStreamURL"),id:"copy-stream",icon:"content_copy"}))),n.CanDelete&&!1!==e.deleteItem&&s.push({name:f(n.Type),id:"delete",icon:"delete"}),s.length&&s.push({divider:!0}),d.Ay.canEdit(i,n)&&!1!==e.edit&&"SeriesTimer"!==n.Type){var c="Timer"===n.Type||"SeriesTimer"===n.Type?o.Ay.translate("Edit"):o.Ay.translate("EditMetadata");s.push({name:c,id:"edit",icon:"edit"})}return d.Ay.canEditImages(i,n)&&!1!==e.editImages&&s.push({name:o.Ay.translate("EditImages"),id:"editimages",icon:"image"}),d.Ay.canEditSubtitles(i,n)&&!1!==e.editSubtitles&&s.push({name:o.Ay.translate("EditSubtitles"),id:"editsubtitles",icon:"closed_caption"}),d.Ay.canEditLyrics(i,n)&&s.push({name:o.Ay.translate("EditLyrics"),id:"editlyrics",icon:"lyrics"}),!1!==e.identify&&d.Ay.canIdentify(i,n)&&s.push({name:o.Ay.translate("Identify"),id:"identify",icon:"edit"}),n.MediaSources&&!1!==e.moremediainfo&&s.push({name:o.Ay.translate("MoreMediaInfo"),id:"moremediainfo",icon:"info"}),"Program"===n.Type&&!1!==e.record&&(n.TimerId?s.push({name:o.Ay.translate("ManageRecording"),id:"record",icon:"fiber_manual_record"}):s.push({name:o.Ay.translate("Record"),id:"record",icon:"fiber_manual_record"})),d.Ay.canRefreshMetadata(n,i)&&s.push({name:o.Ay.translate("RefreshMetadata"),id:"refresh",icon:"refresh"}),n.PlaylistItemId&&e.playlistId&&e.canEditPlaylist&&s.push({name:o.Ay.translate("RemoveFromPlaylist"),id:"removefromplaylist",icon:"playlist_remove"}),e.collectionId&&s.push({name:o.Ay.translate("RemoveFromCollection"),id:"removefromcollection",icon:"playlist_remove"}),!a.A.tv&&!0===e.share&&d.Ay.canShare(n,i)&&s.push({name:o.Ay.translate("Share"),id:"share",icon:"share"}),!1!==e.openAlbum&&n.AlbumId&&"Photo"!==n.MediaType&&s.push({name:o.Ay.translate("ViewAlbum"),id:"album",icon:"album"}),!1!==e.openArtist&&null!==(t=n.AlbumArtists)&&void 0!==t&&t.length&&s.push({name:o.Ay.translate("ViewAlbumArtist"),id:"artist",icon:"person"}),n.HasLyrics&&s.push({name:o.Ay.translate("ViewLyrics"),id:"lyrics",icon:"lyrics"}),s}function I(e,t,n,a){return function(){e({command:t,updated:n,deleted:a})}}function A(e,t,n,a){var i,r="play";n&&(r=a?"queueNext":"queue");var o=0;if(t&&null!==(i=e.UserData)&&void 0!==i&&i.PlaybackPositionTicks&&(o=e.UserData.PlaybackPositionTicks),"Program"===e.Type)u.f[r]({ids:[e.ChannelId],startPositionTicks:o,serverId:e.ServerId});else{var s="items-"+(e.IsFolder?e.Id:e.ParentId)+"-Folder",l=y.getSortValuesLegacy(s);u.f[r]({items:[e],startPositionTicks:o,queryOptions:{SortBy:l.sortBy,SortOrder:l.sortOrder}})}}function v(e){var t=b(e);return t.length?s.default.show({items:t,positionTo:e.positionTo,resolveOnClick:["share"]}).then((function(t){return function(e,t,a){var s=e.Id,l=e.ServerId,d=m.A.getApiClient(l);return new Promise((function(m,y){switch(t){case"addtocollection":n.e(80999).then(n.bind(n,3380)).then((function(e){(new(0,e.default)).show({items:[s],serverId:l}).then(I(m,t,!0),I(m,t))}));break;case"addtoplaylist":Promise.all([n.e(45642),n.e(24451)]).then(n.bind(n,79689)).then((function(e){(new(0,e.default)).show({items:[s],serverId:l}).then(I(m,t,!0),I(m,t))}));break;case"download":n.e(23717).then(n.bind(n,23717)).then((function(n){var a=d.getItemDownloadUrl(s);n.download([{url:a,itemId:s,serverId:l,title:e.Name,filename:e.Path.replace(/^.*[\\/]/,"")}]),I(I(m,t),t)()}));break;case"downloadall":var p=function(e){Promise.all(e.map((function(e){return d.getEpisodes(e.SeriesId,{seasonId:e.Id,userId:a.user.Id,Fields:"CanDownload,Path"})}))).then((function(e){var t;t=e.map((function(e){return e.Items})).flat(),n.e(23717).then(n.bind(n,23717)).then((function(e){var n=t.map((function(e){return{url:d.getItemDownloadUrl(e.Id),itemId:e.Id,serverId:l,title:e.Name,filename:e.Path.replace(/^.*[\\/]/,"")}}));e.download(n)}))}))};"Season"===e.Type?p([e]):"Series"===e.Type&&d.getSeasons(e.Id,{userId:a.user.Id,Fields:"ItemCounts"}).then((function(e){return p(e.Items)})),I(I(m,t),t)();break;case"copy-stream":var f=d.getItemDownloadUrl(s);(0,i.C)(f).then((function(){(0,h.A)(o.Ay.translate("CopyStreamURLSuccess"))})).catch((function(){prompt(o.Ay.translate("CopyStreamURL"),f)})),I(m,t)();break;case"editsubtitles":n.e(39345).then(n.bind(n,39345)).then((function(e){e.default.show(s,l).then(I(m,t,!0),I(m,t))}));break;case"editlyrics":Promise.all([n.e(45642),n.e(69729)]).then(n.bind(n,69729)).then((function(e){e.default.show(s,l).then(I(m,t,!0),I(m,t))}));break;case"edit":(function(e,t){return new Promise((function(a,i){var r=e.serverInfo().Id;"Timer"===t.Type?n.e(59801).then(n.bind(n,59801)).then((function(e){e.default.show(t.Id,r).then(a,i)})):"SeriesTimer"===t.Type?n.e(95062).then(n.bind(n,72681)).then((function(e){e.default.show(t.Id,r).then(a,i)})):Promise.all([n.e(45642),n.e(26855),n.e(57506)]).then(n.bind(n,26855)).then((function(e){e.default.show(t.Id,r).then(a,i)}))}))})(d,e).then(I(m,t,!0),I(m,t));break;case"editimages":n.e(4350).then(n.bind(n,4350)).then((function(e){e.show({itemId:s,serverId:l}).then(I(m,t,!0),I(m,t))}));break;case"identify":Promise.resolve().then(n.bind(n,92305)).then((function(e){e.show(s,l).then(I(m,t,!0),I(m,t))}));break;case"moremediainfo":n.e(20963).then(n.bind(n,20963)).then((function(e){e.show(s,l).then(I(m,t),I(m,t))}));break;case"multiSelect":n.e(35308).then(n.bind(n,35308)).then((function(e){(0,e.startMultiSelect)(r.Ay.parentWithClass(a.positionTo,"card"))}));break;case"refresh":!function(e,t){n.e(54623).then(n.bind(n,77004)).then((function(n){new(0,n.default)({itemIds:[t.Id],serverId:e.serverInfo().Id,mode:"CollectionFolder"===t.Type?"scan":null}).show()}))}(d,e),I(m,t)();break;case"open":c.appRouter.showItem(e),I(m,t)();break;case"play":A(e,!1),I(m,t)();break;case"resume":A(e,!0),I(m,t)();break;case"queue":A(e,!1,!0),I(m,t)();break;case"queuenext":A(e,!1,!0,!0),I(m,t)();break;case"stopPlayback":u.f.stop();break;case"clearQueue":u.f.clearQueue();break;case"record":Promise.all([n.e(10739),n.e(32764)]).then(n.bind(n,63834)).then((function(e){e.default.show(s,l).then(I(m,t,!0),I(m,t))}));break;case"shuffle":u.f.shuffle(e),I(m,t)();break;case"instantmix":u.f.instantMix(e),I(m,t)();break;case"delete":(function(e,t){return new Promise((function(e,a){n.e(46634).then(n.bind(n,46634)).then((function(n){n.deleteItem({item:t,navigate:!1}).then((function(){e(!0)}),a)}))}))})(0,e).then(I(m,t,!0,!0),I(m,t));break;case"share":navigator.share({title:e.Name,text:e.Overview,url:"".concat(d.serverAddress(),"/web/index.html").concat(c.appRouter.getRouteUrl(e))});break;case"album":c.appRouter.showItem(e.AlbumId,e.ServerId),I(m,t)();break;case"artist":c.appRouter.showItem(e.AlbumArtists[0].Id,e.ServerId),I(m,t)();break;case"lyrics":a.isMobile?c.appRouter.show("lyrics"):c.appRouter.showItem(e.Id,e.ServerId),I(m,t)();break;case"playallfromhere":case"queueallfromhere":I(m,t)();break;case"removefromplaylist":d.ajax({url:d.getUrl("Playlists/"+a.playlistId+"/Items",{EntryIds:[e.PlaylistItemId].join(",")}),type:"DELETE"}).then((function(){I(m,t,!0)()}));break;case"removefromcollection":d.ajax({type:"DELETE",url:d.getUrl("Collections/"+a.collectionId+"/Items",{Ids:[e.Id].join(",")})}).then((function(){I(m,t,!0)()}));break;case"canceltimer":!function(e,t,a,i){n.e(78938).then(n.bind(n,78938)).then((function(e){var n=e.default,r=t.TimerId||t.Id;n.cancelTimerWithConfirmation(r,t.ServerId).then((function(){I(a,i,!0)()}))}))}(0,e,m,t);break;case"cancelseriestimer":!function(e,t,a,i){n.e(78938).then(n.bind(n,78938)).then((function(e){e.default.cancelSeriesTimerWithConfirmation(t.Id,t.ServerId).then((function(){I(a,i,!0)()}))}))}(0,e,m,t);break;default:y()}}))}(e.item,t,e)})):Promise.reject()}t.default={getCommands:b,show:v}},27351:function(e,t,n){n.d(t,{C:function(){return r}}),n(78557),n(90076);var a=n(34789);function i(e){var t,n=document.createElement("textarea");if(n.value=e,document.body.appendChild(n),n.focus(),a.A.iOS&&a.A.iOSVersion<13.4){var i=document.createRange();i.selectNodeContents(n);var r=window.getSelection();r.removeAllRanges(),r.addRange(i),n.setSelectionRange(0,999999)}else n.select();try{t=document.execCommand("copy")?Promise.resolve():Promise.reject()}catch(e){t=Promise.reject()}return document.body.removeChild(n),t}function r(e){return void 0===navigator.clipboard?i(e):navigator.clipboard.writeText(e).catch((function(){return i(e)}))}}}]);