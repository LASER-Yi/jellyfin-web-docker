"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[12519],{12519:function(a,t,e){e.r(t),e.d(t,{buildChapterCards:function(){return u}}),e(24776),e(14382),e(78557);var n=e(22696),c=e.n(n),r=e(98320),i=e(76542),d=e(46782),o=e(34789),s=e(86191),l=!o.A.slow&&!o.A.edge;function v(a,t,e,n,i,d,o){var s=i.width,l=i.coverImage,v=function(a,t,e,n,c){var r=a.Id,i=t.ImageTag;return i?c.getScaledImageUrl(r,{maxWidth:n,tag:i,type:"Chapter",index:e}):null}(a,e,n,s||400,t),u="cardContent cardContent-shadow cardImageContainer chapterCardImageContainer";l&&(u+=" coveredImage");var p=' data-action="play" data-isfolder="'.concat(a.IsFolder,'" data-id="').concat(a.Id,'" data-serverid="').concat(a.ServerId,'" data-type="').concat(a.Type,'" data-mediatype="').concat(a.MediaType,'" data-positionticks="').concat(e.StartPositionTicks,'"'),h=v?'<div class="'.concat(u,' lazy" data-src="').concat(v,'">'):'<div class="'.concat(u,'">');v||(h+='<span class="material-icons cardImageIcon local_movies" aria-hidden="true"></span>');var C="";return C+='<div class="cardText">'.concat(c()(e.Name),"</div>"),C+='<div class="cardText">'.concat(r.Ay.getDisplayRunningTime(e.StartPositionTicks),"</div>"),'<button type="button" class="'.concat(d,'"').concat(p,'><div class="').concat("cardBox",'"><div class="').concat("cardScalable",'"><div class="cardPadder-').concat(o,'"></div>').concat(h,'</div><div class="innerCardFooter">').concat(C,"</div></div></div></button>")}function u(a,t,e){if(e.parentContainer){if(!document.body.contains(e.parentContainer))return;if(!t.length)return void e.parentContainer.classList.add("hide");e.parentContainer.classList.remove("hide")}var n=function(a,t,e){var n,c="card itemAction chapterCard";d.A.tv&&(c+=" show-focus",l&&(c+=" show-animation"));var r=((null===(n=(a.MediaSources||[])[0])||void 0===n?void 0:n.MediaStreams)||[]).filter((function(a){return"Video"===a.Type}))[0]||{},i=e.backdropShape||"backdrop";r.Width&&r.Height&&r.Width/r.Height<=1.2&&(i=e.squareShape||"square"),c+=" ".concat(i,"Card"),(e.block||e.rows)&&(c+=" block");for(var o="",u=0,p=s.A.getApiClient(a.ServerId),h=0,C=t.length;h<C;h++)e.rows&&0===u&&(o+='<div class="cardColumn">'),o+=v(a,p,t[h],h,e,c,i),u++,e.rows&&u>=e.rows&&(u=0,o+="</div>");return o}(a,t,e);e.itemsContainer.innerHTML=n,i.default.lazyChildren(e.itemsContainer)}t.default={buildChapterCards:u}}}]);