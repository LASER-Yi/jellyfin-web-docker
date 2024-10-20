"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[94561,65849],{73391:function(e,t,n){n.r(t),n(29305),n(32733),n(84701),n(81678),n(44962),n(86584),n(4754),n(94),n(36947),n(78557),n(83994),n(82367);var r=n(20919);function i(e){return i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}function a(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,o(r.key),r)}}function o(e){var t=function(e,t){if("object"!=i(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=i(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==i(t)?t:t+""}var u=function(){return e=function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.manager=null},t=[{key:"init",value:function(e){this.manager=e}},{key:"playPause",value:function(){this.manager.isPlaying()?this.pause():this.unpause()}},{key:"unpause",value:function(){this.manager.getApiClient().requestSyncPlayUnpause()}},{key:"pause",value:function(){this.manager.getApiClient().requestSyncPlayPause(),this.manager.getPlayerWrapper().localPause()}},{key:"seek",value:function(e){this.manager.getApiClient().requestSyncPlaySeek({PositionTicks:e})}},{key:"play",value:function(e){var t=this.manager.getApiClient(),n=function(n){var r=n.map((function(e){return e.Id}));return t.requestSyncPlaySetNewQueue({PlayingQueue:r,PlayingItemPosition:e.startIndex?e.startIndex:0,StartPositionTicks:e.startPositionTicks?e.startPositionTicks:0})};return e.items?r.translateItemsForPlayback(t,e.items,e).then(n):r.getItemsForPlayback(t,{Ids:e.ids.join(",")}).then((function(i){return r.translateItemsForPlayback(t,i.Items,e).then(n)}))}},{key:"setCurrentPlaylistItem",value:function(e){this.manager.getApiClient().requestSyncPlaySetPlaylistItem({PlaylistItemId:e})}},{key:"clearPlaylist",value:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];this.manager.getApiClient().requestSyncPlayRemoveFromPlaylist({ClearPlaylist:!0,ClearPlayingItem:e})}},{key:"removeFromPlaylist",value:function(e){this.manager.getApiClient().requestSyncPlayRemoveFromPlaylist({PlaylistItemIds:e})}},{key:"movePlaylistItem",value:function(e,t){this.manager.getApiClient().requestSyncPlayMovePlaylistItem({PlaylistItemId:e,NewIndex:t})}},{key:"queue",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Queue",n=this.manager.getApiClient();e.items?r.translateItemsForPlayback(n,e.items,e).then((function(e){var r=e.map((function(e){return e.Id}));n.requestSyncPlayQueue({ItemIds:r,Mode:t})})):r.getItemsForPlayback(n,{Ids:e.ids.join(",")}).then((function(i){r.translateItemsForPlayback(n,i.Items,e).then((function(e){var r=e.map((function(e){return e.Id}));n.requestSyncPlayQueue({ItemIds:r,Mode:t})}))}))}},{key:"queueNext",value:function(e){this.queue(e,"QueueNext")}},{key:"nextItem",value:function(){this.manager.getApiClient().requestSyncPlayNextItem({PlaylistItemId:this.manager.getQueueCore().getCurrentPlaylistItemId()})}},{key:"previousItem",value:function(){this.manager.getApiClient().requestSyncPlayPreviousItem({PlaylistItemId:this.manager.getQueueCore().getCurrentPlaylistItemId()})}},{key:"setRepeatMode",value:function(e){this.manager.getApiClient().requestSyncPlaySetRepeatMode({Mode:e})}},{key:"setShuffleMode",value:function(e){this.manager.getApiClient().requestSyncPlaySetShuffleMode({Mode:e})}},{key:"toggleShuffleMode",value:function(){var e=this.manager.getQueueCore().getShuffleMode();e="Sorted"===e?"Shuffle":"Sorted",this.manager.getApiClient().requestSyncPlaySetShuffleMode({Mode:e})}}],t&&a(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e;var e,t}();t.default=u},20919:function(e,t,n){n.r(t),n.d(t,{TicksPerMillisecond:function(){return u},WaitForEventDefaultTimeout:function(){return a},WaitForPlayerEventTimeout:function(){return o},getItemsForPlayback:function(){return y},stringToGuid:function(){return l},translateItemsForPlayback:function(){return c},waitForEventOnce:function(){return s}}),n(14382),n(84734),n(86584),n(26448),n(77575),n(78557),n(90076),n(95021),n(93062),n(23630);var r=n(44797),i=n(2290),a=3e4,o=500,u=1e4;function s(e,t,n,i){var a=arguments;return new Promise((function(o,u){var s;n&&(s=setTimeout((function(){u(new Error("Timed out."))}),n));var l=function(){r.A.off(e,t,y),s&&clearTimeout(s),Array.isArray(i)&&i.forEach((function(t){r.A.off(e,t,c)}))},y=function(){l(),o(a)},c=function(e){l(),u(e.type)};r.A.on(e,t,y),Array.isArray(i)&&i.forEach((function(t){r.A.on(e,t,c)}))}))}function l(e){return e.replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,"$1-$2-$3-$4-$5")}function y(e,t){if(t.Ids&&1===t.Ids.split(",").length){var n=t.Ids.split(",");return e.getItem(e.getCurrentUserId(),n).then((function(e){return{Items:[e]}}))}return t.Limit=t.Limit||300,t.Fields=["Chapters","Trickplay"],t.ExcludeLocationTypes="Virtual",t.EnableTotalRecordCount=!1,t.CollapseBoxSetItems=!1,(0,i.J)(e,e.getCurrentUserId(),t)}function c(e,t,n){t.length>1&&null!=n&&n.ids&&t.sort((function(e,t){return n.ids.indexOf(e.Id)-n.ids.indexOf(t.Id)}));var r,i,a,o,u,s=t[0],l=n.queryOptions||{};if("Program"===s.Type)r=y(e,{Ids:s.ChannelId});else if("Playlist"===s.Type)r=y(e,{ParentId:s.Id,SortBy:n.shuffle?"Random":null});else if("MusicArtist"===s.Type)r=y(e,{ArtistIds:s.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Audio"});else if("Photo"===s.MediaType)r=y(e,{ParentId:s.ParentId,Filters:"IsNotFolder",Recursive:!1,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Photo,Video"}).then((function(e){var t=e.Items.map((function(e){return e.Id})).indexOf(s.Id);return-1===t&&(t=0),n.startIndex=t,Promise.resolve(e)}));else if("PhotoAlbum"===s.Type)r=y(e,{ParentId:s.Id,Filters:"IsNotFolder",Recursive:!1,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Photo,Video",Limit:1e3});else if("MusicGenre"===s.Type)r=y(e,{GenreIds:s.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:n.shuffle?"Random":"SortName",MediaTypes:"Audio"});else if(s.IsFolder){var c=null;n.shuffle?c="Random":"BoxSet"===s.Type&&(c="SortName"),r=y(e,(i={ParentId:s.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:c,MediaTypes:"Audio,Video"},a=l,-1===(u=(o=Object.assign(i,a)).Filters?o.Filters.split(","):[]).indexOf("IsNotFolder")&&u.push("IsNotFolder"),o.Filters=u.join(","),o))}else"Episode"===s.Type&&1===t.length&&(r=new Promise((function(t,n){e.getCurrentUser().then((function(r){r.Configuration.EnableNextEpisodeAutoPlay&&s.SeriesId?e.getEpisodes(s.SeriesId,{IsVirtualUnaired:!1,IsMissing:!1,UserId:e.getCurrentUserId(),Fields:["Chapters","Trickplay"]}).then((function(e){var n=!1;e.Items=e.Items.filter((function(e){return!!n||e.Id===s.Id&&(n=!0,!0)})),e.TotalRecordCount=e.Items.length,t(e)}),n):t(null)}))})));return r?r.then((function(e){return e?e.Items:t})):Promise.resolve(t)}}}]);