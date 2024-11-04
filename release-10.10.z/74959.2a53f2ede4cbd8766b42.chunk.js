"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[74959],{74959:function(e,t,r){r.r(t),r(86584),r(77575);var s=r(6940),i=r(24468),a=r(76542),o=r(5898),n=(r(1177),r(10353),r(86191));function l(e,t,r){switch(r){case"Program":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"Program",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"StartDate"},{shape:"overflowBackdrop",showTitle:!0,centerText:!0,overlayMoreButton:!0,preferThumb:!0,overlayText:!1,showAirTime:!0,showAirDateTime:!0,showChannelName:!0});break;case"Movie":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"Movie",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortOrder:"Descending,Descending,Ascending",SortBy:"PremiereDate,ProductionYear,SortName"},{shape:"overflowPortrait",showTitle:!0,centerText:!0,overlayMoreButton:!0,overlayText:!1,showYear:!0});break;case"MusicVideo":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"MusicVideo",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"SortName"},{shape:"overflowBackdrop",showTitle:!0,centerText:!0,overlayPlayButton:!0});break;case"Trailer":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"Trailer",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"SortName"},{shape:"overflowPortrait",showTitle:!0,centerText:!0,overlayPlayButton:!0});break;case"Series":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"Series",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:10,SortBy:"SortName"},{shape:"overflowPortrait",showTitle:!0,centerText:!0,overlayMoreButton:!0});break;case"MusicAlbum":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"MusicAlbum",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",SortOrder:"Descending,Descending,Ascending",SortBy:"PremiereDate,ProductionYear,Sortname"},{shape:"overflowSquare",playFromHere:!0,showTitle:!0,showYear:!0,coverImage:!0,centerText:!0,overlayPlayButton:!0});break;case"MusicArtist":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"MusicArtist",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:8,SortBy:"SortName"},{shape:"overflowSquare",playFromHere:!0,showTitle:!0,showParentTitle:!0,coverImage:!0,centerText:!0,overlayPlayButton:!0});break;case"Episode":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"Episode",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",Limit:6,SortBy:"SortName"},{shape:"overflowBackdrop",showTitle:!0,showParentTitle:!0,centerText:!0,overlayPlayButton:!0});break;case"Audio":d(t,e,r,{MediaTypes:"",IncludeItemTypes:"Audio",PersonTypes:"",ArtistIds:"",AlbumArtistIds:"",SortBy:"AlbumArtist,Album,SortName"},{playFromHere:!0,action:"playallfromhere",smallIcon:!0,artist:!0})}}function d(e,t,r,o,l){(function(e,t){var r=u(e,t);return function(e,s,i){r.StartIndex=e,r.Limit=s,i&&(r.Fields+=","+i);var a=n.A.getApiClient(t.ServerId);return"MusicArtist"===r.IncludeItemTypes?(r.IncludeItemTypes=null,a.getAlbumArtists(a.getCurrentUserId(),r)):a.getItems(a.getCurrentUserId(),r)}})(o=u(o,t),t)(o.StartIndex,o.Limit,o.Fields).then((function(n){var d;if(null!==(d=n.Items)&&void 0!==d&&d.length){var u="";if(o.Limit&&n.TotalRecordCount>o.Limit){var c=e.querySelector("a");c.classList.remove("hide"),c.setAttribute("href",function(e,t){return"Genre"===e.Type?"#/list.html?type="+t+"&genreId="+e.Id+"&serverId="+e.ServerId:"MusicGenre"===e.Type?"#/list.html?type="+t+"&musicGenreId="+e.Id+"&serverId="+e.ServerId:"Studio"===e.Type?"#/list.html?type="+t+"&studioId="+e.Id+"&serverId="+e.ServerId:"MusicArtist"===e.Type?"#/list.html?type="+t+"&artistId="+e.Id+"&serverId="+e.ServerId:"Person"===e.Type?"#/list.html?type="+t+"&personId="+e.Id+"&serverId="+e.ServerId:"#/list.html?type="+t+"&parentId="+e.Id+"&serverId="+e.ServerId}(t,r))}else e.querySelector("a").classList.add("hide");l.items=n.Items;var m=e.querySelector(".itemsContainer");"Audio"===r?(u=s.A.getListViewHtml(l),m.classList.remove("vertical-wrap"),m.classList.add("vertical-list")):(u=i.default.getCardsHtml(l),m.classList.add("vertical-wrap"),m.classList.remove("vertical-list")),m.innerHTML=u,a.default.lazyChildren(m)}else e.classList.add("hide")}))}function u(e,t){var r={SortOrder:"Ascending",IncludeItemTypes:"",Recursive:!0,Fields:"ParentId,PrimaryImageAspectRatio",Limit:100,StartIndex:0,CollapseBoxSetItems:!1};return function(e,t){"Person"===t.Type?e.PersonIds=t.Id:"Genre"===t.Type||"MusicGenre"===t.Type?e.Genres=t.Name:"Studio"===t.Type?e.StudioIds=t.Id:"MusicArtist"===t.Type&&(e.AlbumArtistIds=t.Id)}(r=Object.assign(r,e||{}),t),r}var c={renderItems:function(e,t){var r=[];t.ArtistCount&&r.push({name:o.Ay.translate("Artists"),type:"MusicArtist"}),t.ProgramCount&&"Person"===t.Type&&r.push({name:o.Ay.translate("HeaderUpcomingOnTV"),type:"Program"}),t.MovieCount&&r.push({name:o.Ay.translate("Movies"),type:"Movie"}),t.SeriesCount&&r.push({name:o.Ay.translate("Shows"),type:"Series"}),t.EpisodeCount&&r.push({name:o.Ay.translate("Episodes"),type:"Episode"}),t.TrailerCount&&r.push({name:o.Ay.translate("Trailers"),type:"Trailer"}),t.AlbumCount&&r.push({name:o.Ay.translate("Albums"),type:"MusicAlbum"}),t.MusicVideoCount&&r.push({name:o.Ay.translate("MusicVideos"),type:"MusicVideo"});var s=e.querySelector("#childrenContent");s.innerHTML=r.map((function(e){var t="",r="verticalSection";return"Audio"===e.type&&(r+=" verticalSection-extrabottompadding"),t+='<div class="'+r+'" data-type="'+e.type+'">',t+='<div class="sectionTitleContainer sectionTitleContainer-cards">',t+='<h2 class="sectionTitle sectionTitle-cards">',t+=e.name,t+="</h2>",t+='<a is="emby-linkbutton" href="#" class="clearLink hide" style="margin-left:1em;vertical-align:middle;"><button is="emby-button" type="button" class="raised more raised-mini noIcon">'+o.Ay.translate("ButtonMore")+"</button></a>",t+="</div>",t+='<div is="emby-itemscontainer" class="itemsContainer padded-right">',(t+="</div>")+"</div>"})).join("");for(var i=s.querySelectorAll(".verticalSection"),a=0,n=i.length;a<n;a++)l(t,i[a],i[a].getAttribute("data-type"))}};t.default=c}}]);