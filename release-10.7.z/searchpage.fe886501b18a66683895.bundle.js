(self.webpackChunk=self.webpackChunk||[]).push([[9448],{71033:function(e,t,i){"use strict";i.d(t,{w:function(){return p},Z:function(){return f}}),i(23938),i(61013),i(19068),i(87211),i(25901),i(92189),i(63238),i(95163),i(99785),i(91047),i(5769),i(17460),i(14078);var s=i(27515),o=i(78695),r=i(83094),a=i(1892),l=i.n(a),n=i(97672);function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function d(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==c(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!==c(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(s.key,"string"),"symbol"===c(o)?o:String(o)),s)}var o}l()(n.Z,{insert:"head",singleton:!1}),n.Z.locals,i(21865),i(56561);var u="alphaPickerButton-selected";function h(){var e=this.querySelector(".".concat(u));e?s.Z.focus(e):s.Z.autoFocus(this,!0)}function v(e){var t="alphaPickerButton";return o.Z.tv&&(t+=" alphaPickerButton-tv"),e&&(t+=" alphaPickerButton-vertical"),t}function m(e,t){return e.map((function(e){return function(e,t){return'<button data-value="'.concat(e,'" class="').concat(v(t),'">').concat(e,"</button>")}(e,t)}))}var p=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e);var i=this;this.options=t;var s,a,l,n,c=t.element,d=t.itemsContainer,u=t.itemClass;function p(){a=null,i.value(s)}function f(){if(n=null,document.activeElement===l){var e=l.getAttribute("data-value");i.value(e,!0)}}function y(e){var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var i=t.getAttribute("data-value");c.dispatchEvent(new CustomEvent("alphavalueclicked",{cancelable:!1,detail:{value:i}}))}}function b(e){var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");if(t){var i=t.getAttribute("data-value");(this._currentValue||"").toUpperCase()===i.toUpperCase()?this.value(null,!0):this.value(i,!0)}}function T(e){n&&(clearTimeout(n),n=null);var t=r.ZP.parentWithClass(e.target,"alphaPickerButton");t&&(l=t,n=setTimeout(f,600))}function g(e){var t=r.ZP.parentWithClass(e.target,u);if(t){var i=t.getAttribute("data-prefix");i&&i.length&&(s=i[0],a&&clearTimeout(a),a=setTimeout(p,100))}}this.enabled=function(e){e?(d&&d.addEventListener("focus",g,!0),"keyboard"===t.mode&&c.addEventListener("click",y),"click"!==t.valueChangeEvent?c.addEventListener("focus",T,!0):c.addEventListener("click",b.bind(this))):(d&&d.removeEventListener("focus",g,!0),c.removeEventListener("click",y),c.removeEventListener("focus",T,!0),c.removeEventListener("click",b.bind(this)))},function(e,t){e.classList.add("alphaPicker"),o.Z.tv&&e.classList.add("alphaPicker-tv");var i=e.classList.contains("alphaPicker-vertical");i||e.classList.add("focuscontainer-x");var s,r="",a=v(i),l="alphaPickerRow";i&&(l+=" alphaPickerRow-vertical"),r+='<div class="'.concat(l,'">'),"keyboard"===t.mode?r+='<button data-value=" " is="paper-icon-button-light" class="'.concat(a,'"><span class="material-icons alphaPickerButtonIcon space_bar"></span></button>'):r+=m(s=["#"],i).join(""),r+=m(s=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"],i).join(""),"keyboard"===t.mode?(r+='<button data-value="backspace" is="paper-icon-button-light" class="'.concat(a,'"><span class="material-icons alphaPickerButtonIcon backspace"></span></button>'),r+="</div>",s=["0","1","2","3","4","5","6","7","8","9"],r+='<div class="'.concat(l,'">'),r+="<br/>",r+=m(s,i).join(""),r+="</div>"):r+="</div>",e.innerHTML=r,e.classList.add("focusable"),e.focus=h}(c,t),this.enabled(!0),this.visible(!0)}var t,i;return t=e,(i=[{key:"value",value:function(e,t){var i,s,o=this.options.element;if(void 0!==e)if(null!=e){if(e=e.toUpperCase(),this._currentValue=e,"keyboard"!==this.options.mode){s=o.querySelector(".".concat(u));try{i=o.querySelector(".alphaPickerButton[data-value='".concat(e,"']"))}catch(e){console.error("error in querySelector:",e)}i&&i!==s&&i.classList.add(u),s&&s!==i&&s.classList.remove(u)}}else this._currentValue=e,(s=o.querySelector(".".concat(u)))&&s.classList.remove(u);return t&&o.dispatchEvent(new CustomEvent("alphavaluechanged",{cancelable:!1,detail:{value:e}})),this._currentValue}},{key:"on",value:function(e,t){this.options.element.addEventListener(e,t)}},{key:"off",value:function(e,t){this.options.element.removeEventListener(e,t)}},{key:"visible",value:function(e){this.options.element.style.visibility=e?"visible":"hidden"}},{key:"values",value:function(){for(var e=this.options.element.querySelectorAll(".alphaPickerButton"),t=[],i=0,s=e.length;i<s;i++)t.push(e[i].getAttribute("data-value"));return t}},{key:"focus",value:function(){var e=this.options.element;s.Z.autoFocus(e,!0)}},{key:"destroy",value:function(){var e=this.options.element;this.enabled(!1),e.classList.remove("focuscontainer-x"),this.options=null}}])&&d(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),f=p},55282:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return B}}),i(52077),i(83526),i(20266),i(19068),i(87211),i(25901),i(92189),i(63238),i(95163),i(99785),i(91047),i(5769),i(17460),i(14078);var s=i(78695),o=i(53754),r=i(47005),a=i(47518),l=i(71033),n=(i(30983),i(93462),i(56561),i(1892)),c=i.n(n),d=i(57730),u=(c()(d.Z,{insert:"head",singleton:!1}),d.Z.locals,i(26180)),h=i.n(u);function v(e){return v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},v(e)}function m(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==v(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!==v(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(s.key,"string"),"symbol"===v(o)?o:String(o)),s)}var o}function p(){var e=this.nextSearchValue;e=(e||"").trim(),r.Events.trigger(this,"search",[e])}function f(e,t){e.searchTimeout&&clearTimeout(e.searchTimeout),e.nextSearchValue=t,e.searchTimeout=setTimeout(p.bind(e),400)}function y(e){var t=e.detail.value,i=this.options.element.querySelector(".searchfields-txtSearch");if("backspace"===t){var s=i.value;i.value=s.length?s.substring(0,s.length-1):""}else i.value+=t;i.dispatchEvent(new CustomEvent("input",{bubbles:!0}))}function b(e,t){t.alphaPicker=new l.Z({element:e,mode:"keyboard"}),e.addEventListener("alphavalueclicked",y.bind(t))}function T(e){f(this,e.target.value)}function g(e,t,i){e.innerHTML=o.ZP.translateHtml(h(),"core"),e.classList.add("searchFields");var r=e.querySelector(".searchfields-txtSearch");if(s.Z.tv&&!a.Z.tv){var l=e.querySelector(".alphaPicker");e.querySelector(".alphaPicker").classList.remove("hide"),b(l,t)}r.addEventListener("input",T.bind(t)),t.focus()}var I=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,g(t.element,this)}var t,i;return t=e,i=[{key:"focus",value:function(){this.options.element.querySelector(".searchfields-txtSearch").focus()}},{key:"destroy",value:function(){var e=this.options;e&&e.element.classList.remove("searchFields"),this.options=null;var t=this.alphaPicker;t&&t.destroy(),this.alphaPicker=null;var i=this.searchTimeout;i&&clearTimeout(i),this.searchTimeout=null,this.nextSearchValue=null}}],i&&m(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),S=I,P=(i(61013),i(61418),i(48410),i(82759),i(40895),i(911),i(61097)),w=i(6383),k=(i(48366),i(32420),i(78066),i(53913)),x=i(25682),A=i.n(x);function C(e){return C="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(e)}function L(e,t){for(var i=0;i<t.length;i++){var s=t[i];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,(void 0,o=function(e,t){if("object"!==C(e)||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var s=i.call(e,t);if("object"!==C(s))return s;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(s.key,"string"),"symbol"===C(o)?o:String(o)),s)}var o}function M(e,t,i,s,o,r){i.Limit=24,i.ParentId=e.options.parentId,function(e,t,i){if(!i.searchTerm)return Promise.resolve({SearchHints:[]});var s=!0,o=i.IncludeItemTypes;if("tvshows"===e.options.collectionType?i.IncludeArtists?s=!1:"Movie"!==o&&"LiveTvProgram"!==o&&"MusicAlbum"!==o&&"Audio"!==o&&"Book"!==o&&"AudioBook"!==o&&"Playlist"!==o&&"PhotoAlbum"!==o&&"Video"!==i.MediaTypes&&"Photo"!==i.MediaTypes||(s=!1):"movies"===e.options.collectionType?i.IncludeArtists?s=!1:"Series"!==o&&"Episode"!==o&&"LiveTvProgram"!==o&&"MusicAlbum"!==o&&"Audio"!==o&&"Book"!==o&&"AudioBook"!==o&&"Playlist"!==o&&"PhotoAlbum"!==o&&"Video"!==i.MediaTypes&&"Photo"!==i.MediaTypes||(s=!1):"music"===e.options.collectionType?i.People?s=!1:"Series"!==o&&"Episode"!==o&&"LiveTvProgram"!==o&&"Movie"!==o||(s=!1):"livetv"===e.options.collectionType&&(i.IncludeArtists||i.IncludePeople?s=!1:"Series"!==o&&"Episode"!==o&&"MusicAlbum"!==o&&"Audio"!==o&&"Book"!==o&&"AudioBook"!==o&&"PhotoAlbum"!==o&&"Movie"!==o&&"Video"!==i.MediaTypes&&"Photo"!==i.MediaTypes||(s=!1)),"NullType"===o&&(s=!1),!s)return Promise.resolve({SearchHints:[]});if(t.isMinServerVersion("3.4.1.31")){i.Fields="PrimaryImageAspectRatio,CanDelete,BasicSyncInfo,MediaSourceCount",i.Recursive=!0,i.EnableTotalRecordCount=!1,i.ImageTypeLimit=1;var r="getItems";return i.IncludeMedia||(i.IncludePeople?r="getPeople":i.IncludeArtists&&(r="getArtists")),t[r](t.getCurrentUserId(),i)}return i.UserId=t.getCurrentUserId(),t.getSearchHints(i)}(e,t,i).then((function(e){!function(e,t,i,s){i=t.querySelector(i);var o=e.Items||e.SearchHints,r=i.querySelector(".itemsContainer");P.default.buildCards(o,Object.assign({itemsContainer:r,parentContainer:i,shape:"autooverflow",scalable:!0,overlayText:!1,centerText:!0,allowBottomPadding:!1},s||{}))}(e,s,o,r)}))}var R=function(){function e(t){var i,s,r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t,i=t.element,s=A(),r=o.ZP.translateHtml(s,"core"),i.innerHTML=r,i.classList.add("searchResults"),this.search("")}var t,i;return t=e,i=[{key:"search",value:function(e){!function(e,t,i,o){o||s.Z.tv?(e.mode="search",i.querySelector(".searchSuggestions").classList.add("hide")):(e.mode="suggestions",function(e,t,i){var s={SortBy:"IsFavoriteOrLiked,Random",IncludeItemTypes:"Movie,Series,MusicArtist",Limit:20,Recursive:!0,ImageTypeLimit:0,EnableImages:!1,ParentId:e.options.parentId,EnableTotalRecordCount:!1};i.getItems(i.getCurrentUserId(),s).then((function(i){"suggestions"!==e.mode&&(i.Items=[]);var s=i.Items.map((function(e){var t='<div><a is="emby-linkbutton" class="button-link" style="display:inline-block;padding:.5em 1em;" href="'+w.appRouter.getRouteUrl(e)+'">';return(t+=e.Name)+"</a></div>"})).join(""),o=t.querySelector(".searchSuggestions");o.querySelector(".searchSuggestionsList").innerHTML=s,i.Items.length&&o.classList.remove("hide")}))}(e,i,t)),"livetv"===e.options.collectionType?M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"LiveTvProgram",IsMovie:!0,IsKids:!1,IsNews:!1},i,".movieResults",{preferThumb:!0,inheritThumb:!1,shape:"overflowPortrait",showParentTitleOrTitle:!0,showTitle:!1,centerText:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}):M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"Movie"},i,".movieResults",{showTitle:!0,overlayText:!1,centerText:!0,showYear:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"Series"},i,".seriesResults",{showTitle:!0,overlayText:!1,centerText:!0,showYear:!0}),"livetv"===e.options.collectionType?M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"LiveTvProgram",IsSeries:!0,IsSports:!1,IsKids:!1,IsNews:!1},i,".episodeResults",{preferThumb:!0,inheritThumb:!1,shape:"overflowBackdrop",showParentTitleOrTitle:!0,showTitle:!1,centerText:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}):M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"Episode"},i,".episodeResults",{coverImage:!0,showTitle:!0,showParentTitle:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"livetv"===e.options.collectionType?"LiveTvProgram":"NullType",IsSports:!0},i,".sportsResults",{preferThumb:!0,inheritThumb:!1,shape:"overflowBackdrop",showParentTitleOrTitle:!0,showTitle:!1,centerText:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"livetv"===e.options.collectionType?"LiveTvProgram":"NullType",IsKids:!0},i,".kidsResults",{preferThumb:!0,inheritThumb:!1,shape:"overflowBackdrop",showParentTitleOrTitle:!0,showTitle:!1,centerText:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"livetv"===e.options.collectionType?"LiveTvProgram":"NullType",IsNews:!0},i,".newsResults",{preferThumb:!0,inheritThumb:!1,shape:"overflowBackdrop",showParentTitleOrTitle:!0,showTitle:!1,centerText:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"LiveTvProgram",IsMovie:"livetv"!==e.options.collectionType&&null,IsSeries:"livetv"!==e.options.collectionType&&null,IsSports:"livetv"!==e.options.collectionType&&null,IsKids:"livetv"!==e.options.collectionType&&null,IsNews:"livetv"!==e.options.collectionType&&null},i,".programResults",{preferThumb:!0,inheritThumb:!1,shape:"overflowBackdrop",showParentTitleOrTitle:!0,showTitle:!1,centerText:!0,coverImage:!0,overlayText:!1,overlayMoreButton:!0,showAirTime:!0,showAirDateTime:!0,showChannelName:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,MediaTypes:"Video",ExcludeItemTypes:"Movie,Episode"},i,".videoResults",{showParentTitle:!0,showTitle:!0,overlayText:!1,centerText:!0}),M(e,t,{searchTerm:o,IncludePeople:!0,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1},i,".peopleResults",{coverImage:!0,showTitle:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!1,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!0},i,".artistResults",{coverImage:!0,showTitle:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"MusicAlbum"},i,".albumResults",{showParentTitle:!0,showTitle:!0,overlayText:!1,centerText:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"Audio"},i,".songResults",{showParentTitle:!0,showTitle:!0,overlayText:!1,centerText:!0,overlayPlayButton:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,MediaTypes:"Photo"},i,".photoResults",{showParentTitle:!1,showTitle:!0,overlayText:!1,centerText:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"PhotoAlbum"},i,".photoAlbumResults",{showTitle:!0,overlayText:!1,centerText:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"Book"},i,".bookResults",{showTitle:!0,overlayText:!1,centerText:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"AudioBook"},i,".audioBookResults",{showTitle:!0,overlayText:!1,centerText:!0}),M(e,t,{searchTerm:o,IncludePeople:!1,IncludeMedia:!0,IncludeGenres:!1,IncludeStudios:!1,IncludeArtists:!1,IncludeItemTypes:"Playlist"},i,".playlistResults",{showTitle:!0,overlayText:!1,centerText:!0})}(this,k.Z.getApiClient(this.options.serverId),this.options.element,e)}},{key:"destroy",value:function(){var e=this.options;e&&e.element.classList.remove("searchFields"),this.options=null}}],i&&L(t.prototype,i),Object.defineProperty(t,"prototype",{writable:!1}),e}(),E=R;function B(e,t){function i(e,t){s.searchResults.search(t)}var s=this;e.addEventListener("viewshow",(function(){s.searchFields||(s.searchFields=new S({element:e.querySelector(".searchFields")}),s.searchResults=new E({element:e.querySelector(".searchResults"),serverId:t.serverId||ApiClient.serverId(),parentId:t.parentId,collectionType:t.collectionType}),r.Events.on(s.searchFields,"search",i))})),e.addEventListener("viewdestroy",(function(){s.searchFields&&(s.searchFields.destroy(),s.searchFields=null),s.searchResults&&(s.searchResults.destroy(),s.searchResults=null)}))}},48366:function(e,t,i){"use strict";i(5769),i(63238),i(61418),i(17460),i(14078);var s=i(13800),o=i(83094),r=i(78695),a=i(12392),l=i(27515),n=i(47518),c=(i(67752),i(1892)),d=i.n(c),u=i(75869),h=(d()(u.Z,{insert:"head",singleton:!1}),u.Z.locals,Object.create(HTMLDivElement.prototype));function v(e){var t=e.detail.command;"end"===t?(l.Z.focusLast(this,"."+this.getAttribute("data-navcommands")),e.preventDefault(),e.stopPropagation()):"pageup"===t?(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),-12),e.preventDefault(),e.stopPropagation()):"pagedown"===t&&(l.Z.moveFocus(e.target,this,"."+this.getAttribute("data-navcommands"),12),e.preventDefault(),e.stopPropagation())}h.createdCallback=function(){this.classList.add("emby-scroller")},h.scrollToBeginning=function(){this.scroller&&this.scroller.slideTo(0,!0)},h.toStart=function(e,t){this.scroller&&this.scroller.toStart(e,t)},h.toCenter=function(e,t){this.scroller&&this.scroller.toCenter(e,t)},h.scrollToPosition=function(e,t){this.scroller&&this.scroller.slideTo(e,t)},h.getScrollPosition=function(){if(this.scroller)return this.scroller.getScrollPosition()},h.getScrollSize=function(){if(this.scroller)return this.scroller.getScrollSize()},h.getScrollEventName=function(){if(this.scroller)return this.scroller.getScrollEventName()},h.getScrollSlider=function(){if(this.scroller)return this.scroller.getScrollSlider()},h.addScrollEventListener=function(e,t){this.scroller&&o.ZP.addEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},h.removeScrollEventListener=function(e,t){this.scroller&&o.ZP.removeEventListener(this.scroller.getScrollFrame(),this.scroller.getScrollEventName(),e,t)},h.attachedCallback=function(){this.getAttribute("data-navcommands")&&a.ZP.on(this,v);var e="false"!==this.getAttribute("data-horizontal"),t=this.querySelector(".scrollSlider");e&&(t.style["white-space"]="nowrap");var c,d=r.Z.desktop&&e&&"false"!==this.getAttribute("data-scrollbuttons"),u={horizontal:e,mouseDragging:1,mouseWheel:"false"!==this.getAttribute("data-mousewheel"),touchDragging:1,slidee:t,scrollBy:200,speed:e?270:240,elasticBounds:1,dragHandle:1,autoImmediate:!0,skipSlideToWhenVisible:"true"===this.getAttribute("data-skipfocuswhenvisible"),dispatchScrollEvent:d||"true"===this.getAttribute("data-scrollevent"),hideScrollbar:d||"true"===this.getAttribute("data-hidescrollbar"),allowNativeSmoothScroll:"true"===this.getAttribute("data-allownativesmoothscroll")&&!d,allowNativeScroll:!d,forceHideScrollbars:d,requireAnimation:d&&n.Z.edge};this.scroller=new s.Z(this,u),this.scroller.init(),this.scroller.reload(),r.Z.tv&&this.getAttribute("data-centerfocus")&&(this,c=this.scroller,o.ZP.addEventListener(this,"focus",(function(e){var t=l.Z.focusableParent(e.target);t&&c.toCenter(t)}),{capture:!0,passive:!0})),d&&function(e){i.e(6229).then(i.bind(i,6229)).then((function(){e.insertAdjacentHTML("beforebegin",'<div is="emby-scrollbuttons" class="emby-scrollbuttons padded-right"></div>')}))}(this)},h.pause=function(){var e=this.headroom;e&&e.pause()},h.resume=function(){var e=this.headroom;e&&e.resume()},h.detachedCallback=function(){this.getAttribute("data-navcommands")&&a.ZP.off(this,v);var e=this.headroom;e&&(e.destroy(),this.headroom=null);var t=this.scroller;t&&(t.destroy(),this.scroller=null)},document.registerElement("emby-scroller",{prototype:h,extends:"div"})},97672:function(e,t,i){"use strict";var s=i(93476),o=i.n(s)()((function(e){return e[1]}));o.push([e.id,".alphaPicker{text-align:center;display:-webkit-flex;display:flex;-webkit-flex-direction:column;flex-direction:column;-webkit-align-self:center;align-self:center}.alphaPicker-vertical{line-height:1}.alphaPicker-fixed{position:fixed;bottom:5.5em}.alphaPickerRow{display:-webkit-flex;display:flex;-webkit-align-items:center;align-items:center;-webkit-justify-content:center;justify-content:center;-webkit-flex-direction:row;flex-direction:row}.alphaPickerRow-vertical{-webkit-flex-direction:column;flex-direction:column}.alphaPickerButton{border:0!important;cursor:pointer;outline:none!important;vertical-align:middle;font-family:inherit;font-size:inherit;min-width:0;margin:0;padding:.1em .4em;width:auto;border-radius:.1em;font-weight:400;-webkit-flex-shrink:0;flex-shrink:0;-webkit-flex-grow:1;flex-grow:1}@media (max-height:50em){.alphaPicker-fixed{bottom:5em}.alphaPickerButton-vertical{padding-top:1px!important;padding-bottom:1px!important}}@media (max-height:49em){.alphaPicker-vertical{font-size:94%}}@media (max-height:44em){.alphaPicker-vertical{font-size:90%}.alphaPickerButton-vertical{padding-top:0!important;padding-bottom:0!important}}@media (max-height:37em){.alphaPicker-vertical{font-size:82%}}@media (max-height:32em){.alphaPicker-vertical{font-size:74%}}.alphaPicker-vertical.alphaPicker-tv{font-size:86%}.alphaPickerButton-tv.alphaPickerButton-vertical{padding:0}.alphaPickerButton-vertical{width:1.5em;display:-webkit-flex;display:flex;-webkit-justify-content:center;justify-content:center;text-align:center}.alphaPickerButtonIcon{font-size:100%!important}.alphaPicker-fixed.alphaPicker-tv{bottom:1%}.alphaPicker-fixed-right{right:.4em}@media (min-width:62.5em){.alphaPicker-fixed-right{right:1em}}@media (max-height:31.25em){.alphaPicker-fixed{display:none!important}}",""]),t.Z=o},57730:function(e,t,i){"use strict";var s=i(93476),o=i.n(s)()((function(e){return e[1]}));o.push([e.id,".searchFieldsInner{max-width:60em;margin:0 auto}.searchfields-icon{margin-bottom:.1em;margin-right:.25em;font-size:2em;-webkit-align-self:flex-end;align-self:flex-end}",""]),t.Z=o},75869:function(e,t,i){"use strict";var s=i(93476),o=i.n(s)()((function(e){return e[1]}));o.push([e.id,".emby-scroller-container{position:relative}.emby-scroller{margin-left:3.3%;margin-right:3.3%}.itemsContainer>.card>.cardBox{margin-left:0;margin-right:1.2em}.servers>.card>.cardBox{margin-left:.6em;margin-right:.6em}.layout-mobile .emby-scroller,.layout-tv .emby-scroller{padding-left:3.3%;padding-right:3.3%;margin-left:0;margin-right:0}",""]),t.Z=o},26180:function(e){e.exports='<div class="searchFieldsInner flex align-items-center justify-content-center"> <span class="searchfields-icon material-icons search"></span> <div class="inputContainer flex-grow" style="margin-bottom:0"> <input is="emby-input" class="searchfields-txtSearch" type="text" data-keyboard="true" placeholder="${Search}" autocomplete="off" maxlength="40" autofocus/> </div> </div> <div class="alphaPicker align-items-center hide"></div> '},25682:function(e){e.exports='<div class="hide verticalSection searchSuggestions" style="text-align:center"> <div> <h2 class="sectionTitle padded-left padded-right">${Suggestions}</h2> </div> <div class="searchSuggestionsList padded-left padded-right"> </div> </div> <div class="hide verticalSection movieResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Movies}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection seriesResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Shows}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection episodeResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Episodes}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection sportsResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Sports}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection kidsResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Kids}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection newsResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${News}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection programResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Programs}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection videoResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Videos}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection playlistResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Playlists}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection artistResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Artists}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection albumResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Albums}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection songResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Songs}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection photoAlbumResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${HeaderPhotoAlbums}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection photoResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Photos}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection audioBookResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${HeaderAudioBooks}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection bookResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${Books}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> <div class="hide verticalSection peopleResults"> <h2 class="sectionTitle sectionTitle-cards focuscontainer-x padded-left padded-right">${People}</h2> <div is="emby-scroller" data-horizontal="true" data-centerfocus="card" class="padded-top-focusscale padded-bottom-focusscale"> <div is="emby-itemscontainer" class="focuscontainer-x itemsContainer scrollSlider"></div> </div> </div> '}}]);