/*! For license information please see comicsPlayer-plugin.2aec90ad7d85722c67ef.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2430,2126],{6781:function(e,t,n){n.r(t),n.d(t,{ComicsPlayer:function(){return w}}),n(15610),n(52077),n(25901),n(92189),n(91047),n(98521),n(6798),n(82923),n(21897),n(12274),n(50987),n(60190),n(5769),n(61484),n(63238),n(17460),n(14078),n(23938),n(61418),n(95289),n(98010),n(58112),n(95623),n(72410),n(69217),n(70684),n(68581),n(55849),n(99785);var r=n(44839),i=n(51161),o=n(48102),a=n(84280),s=n(52050),c=n(18613),l=n(60934);function u(e){return u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u(e)}function h(){h=function(){return e};var e={},t=Object.prototype,n=t.hasOwnProperty,r="function"==typeof Symbol?Symbol:{},i=r.iterator||"@@iterator",o=r.asyncIterator||"@@asyncIterator",a=r.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"")}catch(e){s=function(e,t,n){return e[t]=n}}function c(e,t,n,r){var i=t&&t.prototype instanceof d?t:d,o=Object.create(i.prototype),a=new L(r||[]);return o._invoke=function(e,t,n){var r="suspendedStart";return function(i,o){if("executing"===r)throw new Error("Generator is already running");if("completed"===r){if("throw"===i)throw o;return{value:void 0,done:!0}}for(n.method=i,n.arg=o;;){var a=n.delegate;if(a){var s=P(a,n);if(s){if(s===f)continue;return s}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if("suspendedStart"===r)throw r="completed",n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r="executing";var c=l(e,t,n);if("normal"===c.type){if(r=n.done?"completed":"suspendedYield",c.arg===f)continue;return{value:c.arg,done:n.done}}"throw"===c.type&&(r="completed",n.method="throw",n.arg=c.arg)}}}(e,n,a),o}function l(e,t,n){try{return{type:"normal",arg:e.call(t,n)}}catch(e){return{type:"throw",arg:e}}}e.wrap=c;var f={};function d(){}function p(){}function v(){}var g={};s(g,i,(function(){return this}));var y=Object.getPrototypeOf,m=y&&y(y(x([])));m&&m!==t&&n.call(m,i)&&(g=m);var w=v.prototype=d.prototype=Object.create(g);function b(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}))}))}function E(e,t){function r(i,o,a,s){var c=l(e[i],e,o);if("throw"!==c.type){var h=c.arg,f=h.value;return f&&"object"==u(f)&&n.call(f,"__await")?t.resolve(f.__await).then((function(e){r("next",e,a,s)}),(function(e){r("throw",e,a,s)})):t.resolve(f).then((function(e){h.value=e,a(h)}),(function(e){return r("throw",e,a,s)}))}s(c.arg)}var i;this._invoke=function(e,n){function o(){return new t((function(t,i){r(e,n,t,i)}))}return i=i?i.then(o,o):o()}}function P(e,t){var n=e.iterator[t.method];if(void 0===n){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,P(e,t),"throw"===t.method))return f;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return f}var r=l(n,e.iterator,t.arg);if("throw"===r.type)return t.method="throw",t.arg=r.arg,t.delegate=null,f;var i=r.arg;return i?i.done?(t[e.resultName]=i.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,f):i:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,f)}function S(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function k(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function L(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(S,this),this.reset(!0)}function x(e){if(e){var t=e[i];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var r=-1,o=function t(){for(;++r<e.length;)if(n.call(e,r))return t.value=e[r],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:I}}function I(){return{value:void 0,done:!0}}return p.prototype=v,s(w,"constructor",v),s(v,"constructor",p),p.displayName=s(v,a,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===p||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,v):(e.__proto__=v,s(e,a,"GeneratorFunction")),e.prototype=Object.create(w),e},e.awrap=function(e){return{__await:e}},b(E.prototype),s(E.prototype,o,(function(){return this})),e.AsyncIterator=E,e.async=function(t,n,r,i,o){void 0===o&&(o=Promise);var a=new E(c(t,n,r,i),o);return e.isGeneratorFunction(n)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},b(w),s(w,a,"Generator"),s(w,i,(function(){return this})),s(w,"toString",(function(){return"[object Generator]"})),e.keys=function(e){var t=[];for(var n in e)t.push(n);return t.reverse(),function n(){for(;t.length;){var r=t.pop();if(r in e)return n.value=r,n.done=!1,n}return n.done=!0,n}},e.values=x,L.prototype={constructor:L,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(k),!e)for(var t in this)"t"===t.charAt(0)&&n.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function r(n,r){return a.type="throw",a.arg=e,t.next=n,r&&(t.method="next",t.arg=void 0),!!r}for(var i=this.tryEntries.length-1;i>=0;--i){var o=this.tryEntries[i],a=o.completion;if("root"===o.tryLoc)return r("end");if(o.tryLoc<=this.prev){var s=n.call(o,"catchLoc"),c=n.call(o,"finallyLoc");if(s&&c){if(this.prev<o.catchLoc)return r(o.catchLoc,!0);if(this.prev<o.finallyLoc)return r(o.finallyLoc)}else if(s){if(this.prev<o.catchLoc)return r(o.catchLoc,!0)}else{if(!c)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return r(o.finallyLoc)}}}},abrupt:function(e,t){for(var r=this.tryEntries.length-1;r>=0;--r){var i=this.tryEntries[r];if(i.tryLoc<=this.prev&&n.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var o=i;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var a=o?o.completion:{};return a.type=e,a.arg=t,o?(this.method="next",this.next=o.finallyLoc,f):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),f},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),k(n),f}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var i=r.arg;k(n)}return i}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,n){return this.delegate={iterator:x(e),resultName:t,nextLoc:n},"next"===this.method&&(this.arg=void 0),f}},e}function f(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return d(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,i=function(){};return{s:i,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:i}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,s=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){s=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(s)throw o}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function p(e,t,n,r,i,o,a){try{var s=e[o](a),c=s.value}catch(e){return void n(e)}s.done?t(c):Promise.resolve(c).then(r,i)}function v(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function g(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function y(e,t,n){return t&&g(e.prototype,t),n&&g(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function m(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}n(33609);var w=function(){function e(){var t=this;v(this,e),m(this,"onDirChanged",(function(){var e=t.comicsPlayerSettings.langDir;e=e&&"ltr"!==e?"ltr":"rtl",t.changeLanguageDirection(e),t.comicsPlayerSettings.langDir=e})),m(this,"onViewChanged",(function(){var e=t.comicsPlayerSettings.pagesPerView;e=e&&1!==e?1:2,t.changeView(e),t.comicsPlayerSettings.pagesPerView=e})),this.name="Comics Player",this.type="mediaplayer",this.id="comicsplayer",this.priority=1,this.imageMap=new Map,this.onDialogClosed=this.onDialogClosed.bind(this),this.onWindowKeyUp=this.onWindowKeyUp.bind(this)}return y(e,[{key:"play",value:function(e){this.currentPage=0,this.pageCount=0;var t=e.items[0].Id;this.comicsPlayerSettings=l.getComicsPlayerSettings(t);var n=this.createMediaElement();return this.setCurrentSrc(n,e)}},{key:"stop",value:function(){var e;this.unbindEvents();var t={src:this.item};Events.trigger(this,"stopped",[t]);var n=this.item.Id;l.setComicsPlayerSettings(this.comicsPlayerSettings,n),null===(e=this.archiveSource)||void 0===e||e.release();var r=this.mediaElement;r&&(o.default.close(r),this.mediaElement=null),i.ZP.hide()}},{key:"destroy",value:function(){}},{key:"currentTime",value:function(){return this.currentPage}},{key:"duration",value:function(){return this.pageCount}},{key:"currentItem",value:function(){return this.item}},{key:"volume",value:function(){return 100}},{key:"isMuted",value:function(){return!1}},{key:"paused",value:function(){return!1}},{key:"seekable",value:function(){return!0}},{key:"onDialogClosed",value:function(){this.stop()}},{key:"changeLanguageDirection",value:function(e){var t=this.currentPage;this.swiperInstance.changeLanguageDirection(e);var n="ltr"===e?"arrow_circle_left":"arrow_circle_right";this.mediaElement.querySelector(".btnToggleLangDir > span").classList.remove(n);var r="ltr"===e?"arrow_circle_right":"arrow_circle_left";this.mediaElement.querySelector(".btnToggleLangDir > span").classList.add(r);var i="ltr"===e?"Right To Left":"Left To Right";this.mediaElement.querySelector(".btnToggleLangDir").title=i,this.reload(t)}},{key:"changeView",value:function(e){var t=this.currentPage;this.swiperInstance.params.slidesPerView=e,this.swiperInstance.params.slidesPerGroup=e;var n=1===e?"devices_fold":"import_contacts";this.mediaElement.querySelector(".btnToggleView > span").classList.remove(n);var r=1===e?"import_contacts":"devices_fold";this.mediaElement.querySelector(".btnToggleView > span").classList.add(r);var i=1===e?"Double Page View":"Single Page View";this.mediaElement.querySelector(".btnToggleView").title=i,this.reload(t)}},{key:"reload",value:function(e){var t=this.swiperInstance.params.effect;this.swiperInstance.params.effect="none",this.swiperInstance.update(),this.swiperInstance.slideNext(),this.swiperInstance.slidePrev(),this.currentPage!=e&&(this.swiperInstance.slideTo(e),this.swiperInstance.update()),this.swiperInstance.params.effect=t,this.swiperInstance.update()}},{key:"onWindowKeyUp",value:function(e){"Escape"===a.ZP.getKeyName(e)&&this.stop()}},{key:"bindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.addEventListener("close",this.onDialogClosed,{once:!0}),null==e||e.querySelector(".btnExit").addEventListener("click",this.onDialogClosed,{once:!0}),null==e||e.querySelector(".btnToggleLangDir").addEventListener("click",this.onDirChanged),null==e||e.querySelector(".btnToggleView").addEventListener("click",this.onViewChanged)}},{key:"bindEvents",value:function(){this.bindMediaElementEvents(),document.addEventListener("keyup",this.onWindowKeyUp)}},{key:"unbindMediaElementEvents",value:function(){var e=this.mediaElement;null==e||e.removeEventListener("close",this.onDialogClosed),null==e||e.querySelector(".btnExit").removeEventListener("click",this.onDialogClosed),null==e||e.querySelector(".btnToggleLangDir").removeEventListener("click",this.onDirChanged),null==e||e.querySelector(".btnToggleView").removeEventListener("click",this.onViewChanged)}},{key:"unbindEvents",value:function(){this.unbindMediaElementEvents(),document.removeEventListener("keyup",this.onWindowKeyUp)}},{key:"createMediaElement",value:function(){var e=this.mediaElement;if(e)return e;if(!(e=document.getElementById("comicsPlayer"))){e=o.default.createDialog({exitAnimationDuration:400,size:"fullscreen",autoFocus:!1,scrollY:!1,exitAnimation:"fadeout",removeOnClose:!0});var t=1===this.comicsPlayerSettings.pagesPerView?"import_contacts":"devices_fold",n="ltr"===this.comicsPlayerSettings.langDir?"arrow_circle_right":"arrow_circle_left";e.id="comicsPlayer",e.classList.add("slideshowDialog"),e.innerHTML="<div dir=".concat(this.comicsPlayerSettings.langDir,' class="slideshowSwiperContainer">\n                                <div class="swiper-wrapper"></div>\n                                <div class="swiper-button-next actionButtonIcon"></div>\n                                <div class="swiper-button-prev actionButtonIcon"></div>\n                                <div class="swiper-pagination"></div>\n                            </div>\n                            <div class="actionButtons">\n                                <button is="paper-icon-button-light" class="autoSize btnToggleLangDir" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon ').concat(n,'" aria-hidden="true"></span>\n                                </button>\n                                <button is="paper-icon-button-light" class="autoSize btnToggleView" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon ').concat(t,'" aria-hidden="true"></span>\n                                </button>\n                                <button is="paper-icon-button-light" class="autoSize btnExit" tabindex="-1">\n                                    <span class="material-icons actionButtonIcon close" aria-hidden="true"></span>\n                                </button>\n                            </div>'),o.default.open(e)}this.mediaElement=e;var r="ltr"===this.comicsPlayerSettings.langDir?"Right To Left":"Left To Right";this.mediaElement.querySelector(".btnToggleLangDir").title=r;var i=1===this.comicsPlayerSettings.pagesPerView?"Double Page View":"Single Page View";return this.mediaElement.querySelector(".btnToggleView").title=i,this.bindEvents(),e}},{key:"setCurrentSrc",value:function(e,t){var o=this,a=t.items[0];this.item=a,this.streamInfo={started:!0,ended:!1,item:this.item,mediaSource:{Id:a.Id}},i.ZP.show();var l=a.ServerId,u=c.Z.getApiClient(l);r.X.init({workerUrl:s.appRouter.baseUrl()+"/libraries/worker-bundle.js"});var h=u.getItemDownloadUrl(a.Id);return this.archiveSource=new E(h),Promise.all([n.e(5359),n.e(538)]).then(n.bind(n,11309)),this.archiveSource.load().then((function(){return Promise.all([n.e(5359),n.e(4259)]).then(n.bind(n,16870))})).then((function(n){var r=n.Swiper;i.ZP.hide(),o.pageCount=o.archiveSource.urls.length,o.currentPage=t.startPositionTicks/1e4||0,o.swiperInstance=new r(e.querySelector(".slideshowSwiperContainer"),{direction:"horizontal",loop:!1,zoom:{minRatio:1,toggle:!0,containerClass:"slider-zoom-container"},autoplay:!1,keyboard:{enabled:!0},preloadImages:!0,slidesPerView:o.comicsPlayerSettings.pagesPerView,slidesPerGroup:o.comicsPlayerSettings.pagesPerView,slidesPerColumn:1,initialSlide:o.currentPage,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,type:"fraction"},virtual:{slides:o.archiveSource.urls,cache:!0,renderSlide:o.getImgFromUrl,addSlidesBefore:1,addSlidesAfter:1}}),o.swiperInstance.on("slideChange",(function(){o.currentPage=o.swiperInstance.activeIndex,Events.trigger(o,"pause")}))}))}},{key:"getImgFromUrl",value:function(e){return'<div class="swiper-slide">\n                   <div class="slider-zoom-container">\n                       <img src="'.concat(e,'" class="swiper-slide-img">\n                   </div>\n               </div>')}},{key:"canPlayMediaType",value:function(e){return"book"===(e||"").toLowerCase()}},{key:"canPlayItem",value:function(e){return!(!e.Path||!e.Path.endsWith("cbz")&&!e.Path.endsWith("cbr"))}}]),e}(),b=["jpg","jpeg","jpe","jif","jfif","jfi","png","avif","gif","bmp","dib","tiff","tif","webp"],E=function(){function e(t){v(this,e),this.url=t,this.files=[],this.urls=[]}var t,n;return y(e,[{key:"load",value:(t=h().mark((function e(){var t,n,i,o,a,s,c;return h().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(this.url);case 2:if((t=e.sent).ok){e.next=5;break}return e.abrupt("return");case 5:return e.next=7,t.blob();case 7:return n=e.sent,e.next=10,r.X.open(n);case 10:return this.archive=e.sent,e.next=13,this.archive.getFilesArray();case 13:return this.raw=e.sent,e.next=16,this.archive.extractFiles();case 16:return e.next=18,this.archive.getFilesArray();case 18:i=(i=e.sent).filter((function(e){var t=e.file.name,n=t.lastIndexOf(".");return-1!==n&&b.includes(t.slice(n+1))})),i.sort((function(e,t){return e.file.name<t.file.name?-1:1})),o=f(i);try{for(o.s();!(a=o.n()).done;)s=a.value,c=URL.createObjectURL(s.file),this.urls.push(c)}catch(e){o.e(e)}finally{o.f()}case 23:case"end":return e.stop()}}),e,this)})),n=function(){var e=this,n=arguments;return new Promise((function(r,i){var o=t.apply(e,n);function a(e){p(o,r,i,a,s,"next",e)}function s(e){p(o,r,i,a,s,"throw",e)}a(void 0)}))},function(){return n.apply(this,arguments)})},{key:"release",value:function(){this.files=[],this.urls.forEach(URL.revokeObjectURL),this.urls=[]}}]),e}();t.default=w},18375:function(e,t,n){var r=n(54933),i=n.n(r),o=n(93476),a=n.n(o)()(i());a.push([e.id,"#comicsPlayer{background:#fff}#comicsPlayer .slideshowSwiperContainer{height:100%}#comicsPlayer .slider-zoom-container{height:100%;text-align:center}#comicsPlayer .swiper-slide-img{height:100%;max-height:100%;max-width:100%;object-fit:contain;width:100%}#comicsPlayer .swiper-pagination{background:#fff;color:#000;left:50%;padding:2px 5px;text-shadow:0 0 20px #fff;-webkit-transform:translate(-50%);transform:translate(-50%);width:-webkit-max-content;width:max-content}#comicsPlayer .actionButtons>button:hover{background:#fff}",""]),t.Z=a},33609:function(e,t,n){n.r(t);var r=n(1892),i=n.n(r),o=n(95760),a=n.n(o),s=n(38311),c=n.n(s),l=n(58192),u=n.n(l),h=n(38060),f=n.n(h),d=n(54865),p=n.n(d),v=n(18375),g={};g.styleTagTransform=p(),g.setAttributes=u(),g.insert=c().bind(null,"head"),g.domAPI=a(),g.insertStyleElement=f(),i()(v.Z,g),t.default=v.Z&&v.Z.locals?v.Z.locals:void 0}}]);