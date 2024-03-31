"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[80835,65849],{20919:function(e,t,r){r.r(t),r.d(t,{TicksPerMillisecond:function(){return u},WaitForEventDefaultTimeout:function(){return o},WaitForPlayerEventTimeout:function(){return s},getItemsForPlayback:function(){return a},stringToGuid:function(){return l},translateItemsForPlayback:function(){return f},waitForEventOnce:function(){return d}}),r(78557),r(90076),r(23630),r(95021),r(93062),r(77575),r(84734),r(26448),r(86584),r(14382);var n=r(62014),i=r(55967),o=3e4,s=500,u=1e4;function d(e,t,r,i){var o=arguments;return new Promise((function(s,u){var d;r&&(d=setTimeout((function(){u("Timed out.")}),r));var l=function(){n.A.off(e,t,a),d&&clearTimeout(d),Array.isArray(i)&&i.forEach((function(t){n.A.off(e,t,f)}))},a=function(){l(),s(o)},f=function(e){l(),u(e.type)};n.A.on(e,t,a),Array.isArray(i)&&i.forEach((function(t){n.A.on(e,t,f)}))}))}function l(e){return e.replace(/([0-z]{8})([0-z]{4})([0-z]{4})([0-z]{4})([0-z]{12})/,"$1-$2-$3-$4-$5")}function a(e,t){if(t.Ids&&1===t.Ids.split(",").length){var r=t.Ids.split(",");return e.getItem(e.getCurrentUserId(),r).then((function(e){return{Items:[e]}}))}return t.Limit=t.Limit||300,t.Fields=["Chapters","Trickplay"],t.ExcludeLocationTypes="Virtual",t.EnableTotalRecordCount=!1,t.CollapseBoxSetItems=!1,(0,i.J)(e,e.getCurrentUserId(),t)}function f(e,t,r){t.length>1&&r&&r.ids&&t.sort((function(e,t){return r.ids.indexOf(e.Id)-r.ids.indexOf(t.Id)}));var n,i,o,s,u,d=t[0],l=r.queryOptions||{};if("Program"===d.Type)n=a(e,{Ids:d.ChannelId});else if("Playlist"===d.Type)n=a(e,{ParentId:d.Id,SortBy:r.shuffle?"Random":null});else if("MusicArtist"===d.Type)n=a(e,{ArtistIds:d.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:r.shuffle?"Random":"SortName",MediaTypes:"Audio"});else if("Photo"===d.MediaType)n=a(e,{ParentId:d.ParentId,Filters:"IsNotFolder",Recursive:!1,SortBy:r.shuffle?"Random":"SortName",MediaTypes:"Photo,Video"}).then((function(e){var t=e.Items.map((function(e){return e.Id})).indexOf(d.Id);return-1===t&&(t=0),r.startIndex=t,Promise.resolve(e)}));else if("PhotoAlbum"===d.Type)n=a(e,{ParentId:d.Id,Filters:"IsNotFolder",Recursive:!1,SortBy:r.shuffle?"Random":"SortName",MediaTypes:"Photo,Video",Limit:1e3});else if("MusicGenre"===d.Type)n=a(e,{GenreIds:d.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:r.shuffle?"Random":"SortName",MediaTypes:"Audio"});else if(d.IsFolder){var f=null;r.shuffle?f="Random":"BoxSet"===d.Type&&(f="SortName"),n=a(e,(i={ParentId:d.Id,Filters:"IsNotFolder",Recursive:!0,SortBy:f,MediaTypes:"Audio,Video"},o=l,-1===(u=(s=Object.assign(i,o)).Filters?s.Filters.split(","):[]).indexOf("IsNotFolder")&&u.push("IsNotFolder"),s.Filters=u.join(","),s))}else"Episode"===d.Type&&1===t.length&&(n=new Promise((function(t,r){e.getCurrentUser().then((function(n){n.Configuration.EnableNextEpisodeAutoPlay&&d.SeriesId?e.getEpisodes(d.SeriesId,{IsVirtualUnaired:!1,IsMissing:!1,UserId:e.getCurrentUserId(),Fields:["Chapters","Trickplay"]}).then((function(e){var r=!1;e.Items=e.Items.filter((function(e){return!!r||e.Id===d.Id&&(r=!0,!0)})),e.TotalRecordCount=e.Items.length,t(e)}),r):t(null)}))})));return n?n.then((function(e){return e?e.Items:t})):Promise.resolve(t)}}}]);