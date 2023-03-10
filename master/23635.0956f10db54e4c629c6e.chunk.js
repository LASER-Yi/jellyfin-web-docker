"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[23635,98301,40176],{23635:function(e,t,a){a.r(t),a.d(t,{default:function(){return Z},show:function(){return x}}),a(5769),a(98010),a(63238),a(69217),a(61418),a(17460),a(14078),a(32081);var n,r=a(93355),i=a(28540),o=a(72365),s=a(30325),l=a(34643),d=a(94994),c=a(54517),u=a(98301),m=a(57366),h=a(84881),g=(a(38228),a(61414),a(18613)),f=a(37099),v=a(3137),b=!m.Z.slow&&!m.Z.edge,p=!1;function y(e,t,a){var r;i.ZP.show(),t?(r=g.Z.getApiClient(t.ServerId),C(e,t,r,a)):(r=g.Z.getApiClient(n.ServerId)).getItem(r.getCurrentUserId(),n.Id).then((function(t){C(e,t,r,a)}))}function I(e,t,a,n){e.addEventListener(a,(function(e){var a=o.ZP.parentWithClass(e.target,t);a&&n.call(a,e)}))}function C(e,t,a,r){n=t,a.getRemoteImageProviders({itemId:n.Id}).then((function(t){for(var o=e.querySelectorAll(".btnBrowseAllImages"),d=0,c=o.length;d<c;d++)t.length?o[d].classList.remove("hide"):o[d].classList.add("hide");a.getItemImageInfos(n.Id).then((function(n){!function(e,t,a,n,r){var i=n.filter((function(e){return"Backdrop"!==e.ImageType&&"Chapter"!==e.ImageType}));w(0,0,t,i,r,e.querySelector("#images"))}(e,a,0,n,t),function(e,t,a,n,r){var i=n.filter((function(e){return"Backdrop"===e.ImageType})).sort((function(e,t){return e.ImageIndex-t.ImageIndex}));i.length?(e.querySelector("#backdropsContainer",e).classList.remove("hide"),w(0,0,t,i,r,e.querySelector("#backdrops"))):e.querySelector("#backdropsContainer",e).classList.add("hide")}(e,a,0,n,t),i.ZP.hide(),s.Z.tv&&l.Z.autoFocus(r||e)}))}))}function A(e,t,a){var r="",i="card scalableCard imageEditorCard";i+=" backdropCard backdropCard-scalable","button"===a.tagName?(i+=" btnImageCard",s.Z.tv&&(i+=" show-focus",b&&(i+=" show-animation")),r+='<button type="button" class="'+i+'"'):r+='<div class="'+i+'"',r+=' data-id="'+n.Id+'" data-serverid="'+t.serverId()+'" data-index="'+a.index+'" data-numimages="'+a.numImages+'" data-imagetype="'+e.ImageType+'" data-providers="'+a.imageProviders.length+'"',r+=">",r+='<div class="cardBox visualCardBox">',r+='<div class="cardScalable visualCardBox-cardScalable" style="background-color:transparent;">',r+='<div class="cardPadder-backdrop"></div>',r+='<div class="cardContent">';var o=function(e,t,a,n,r){return(r=r||{}).type=a,r.index=n,r.tag="Backdrop"===a?e.BackdropImageTags[n]:"Primary"===a&&e.PrimaryImageTag||e.ImageTags[a],t.getScaledImageUrl(e.Id||e.ItemId,r)}(n,t,e.ImageType,e.ImageIndex,{maxWidth:a.imageSize});return r+='<div class="cardImageContainer" style="background-image:url(\''+o+"');background-position:center center;background-size:contain;\"></div>",r+="</div>",r+="</div>",r+='<div class="cardFooter visualCardBox-cardFooter">',r+='<h3 class="cardText cardTextCentered" style="margin:0;">'+d.ZP.translate(""+e.ImageType)+"</h3>",r+='<div class="cardText cardText-secondary cardTextCentered">',e.Width&&e.Height?r+=e.Width+" X "+e.Height:r+="&nbsp;",r+="</div>",a.enableFooterButtons&&(r+='<div class="cardText cardTextCentered">',"Backdrop"===e.ImageType?(a.index>0?r+='<button type="button" is="paper-icon-button-light" class="btnMoveImage autoSize" data-imagetype="'+e.ImageType+'" data-index="'+e.ImageIndex+'" data-newindex="'+(e.ImageIndex-1)+'" title="'+d.ZP.translate("MoveLeft")+'"><span class="material-icons chevron_left"></span></button>':r+='<button type="button" is="paper-icon-button-light" class="autoSize" disabled title="'+d.ZP.translate("MoveLeft")+'"><span class="material-icons chevron_left" aria-hidden="true"></span></button>',a.index<a.numImages-1?r+='<button type="button" is="paper-icon-button-light" class="btnMoveImage autoSize" data-imagetype="'+e.ImageType+'" data-index="'+e.ImageIndex+'" data-newindex="'+(e.ImageIndex+1)+'" title="'+d.ZP.translate("MoveRight")+'"><span class="material-icons chevron_right" aria-hidden="true"></span></button>':r+='<button type="button" is="paper-icon-button-light" class="autoSize" disabled title="'+d.ZP.translate("MoveRight")+'"><span class="material-icons chevron_right" aria-hidden="true"></span></button>'):a.imageProviders.length&&(r+='<button type="button" is="paper-icon-button-light" data-imagetype="'+e.ImageType+'" class="btnSearchImages autoSize" title="'+d.ZP.translate("Search")+'"><span class="material-icons search" aria-hidden="true"></span></button>'),r+='<button type="button" is="paper-icon-button-light" data-imagetype="'+e.ImageType+'" data-index="'+(null!=e.ImageIndex?e.ImageIndex:"null")+'" class="btnDeleteImage autoSize" title="'+d.ZP.translate("Delete")+'"><span class="material-icons delete" aria-hidden="true"></span></button>',r+="</div>"),r+="</div>",(r+="</div>")+"</"+a.tagName+">"}function S(e,t,a,n,r,i){var o=function(){r.deleteItemImage(t,a,n).then((function(){p=!0,y(e)}))};i?(0,v.Z)({text:d.ZP.translate("ConfirmDeleteImage"),confirmText:d.ZP.translate("Delete"),primary:"delete"}).then(o):o()}function k(e,t,a,n,r,i,o){t.updateItemImageIndex(a,n,r,i).then((function(){p=!0,y(e,null,o)}),(function(){(0,f.Z)(d.ZP.translate("ErrorDefault"))}))}function w(e,t,a,n,r,i){var l="",d=300,c=o.ZP.getWindowSize();c.innerWidth>=1280&&(d=Math.round(c.innerWidth/4));for(var m=s.Z.tv?"button":"div",h=!s.Z.tv,g=0,f=n.length;g<f;g++)l+=A(n[g],a,{index:g,numImages:f,imageProviders:r,imageSize:d,tagName:m,enableFooterButtons:h});i.innerHTML=l,u.default.lazyChildren(i)}function P(e,t){a.e(44112).then(a.bind(a,44112)).then((function(a){a.show(n.Id,n.ServerId,n.Type,t,"Season"==n.Type?n.ParentId:null).then((function(){p=!0,y(e)}))}))}function x(e){return new Promise((function(t,l){p=!1,function(e,t,l){var u=e.itemId,m=e.serverId;i.ZP.show();var f=g.Z.getApiClient(m);f.getItem(f.getCurrentUserId(),u).then((function(u){var m={removeOnClose:!0};s.Z.tv?m.size="fullscreen":m.size="small";var f=r.default.createDialog(m);f.classList.add("formDialog"),f.innerHTML=d.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" tabindex="-1" title="${ButtonBack}"><span class="material-icons arrow_back" aria-hidden="true"></span></button> <h3 class="formDialogHeaderTitle"> ${HeaderEditImages} </h3> </div> <div class="formDialogContent smoothScrollY"> <div class="dialogContentInner"> <div id="imagesContainer"> <div class="imageEditor-buttons first-imageEditor-buttons"> <h2 style="margin:0">${Images}</h2> <button type="button" is="emby-button" class="btnBrowseAllImages fab mini autoSize"> <span class="material-icons search" aria-hidden="true"></span> </button> <button type="button" is="emby-button" class="btnOpenUploadMenu fab mini hide"> <span class="material-icons add" aria-hidden="true"></span> </button> </div> <div id="images" class="itemsContainer vertical-wrap"> </div> <br/> </div> <div id="backdropsContainer" class="hide"> <div class="imageEditor-buttons"> <h2 style="margin:0">${Backdrops}</h2> <button type="button" is="emby-button" class="btnBrowseAllImages fab mini autoSize" data-imagetype="Backdrop"> <span class="material-icons search" aria-hidden="true"></span> </button> <button type="button" is="emby-button" class="btnOpenUploadMenu fab mini hide" data-imagetype="Backdrop"> <span class="material-icons add" aria-hidden="true"></span> </button> </div> <div id="backdrops" class="itemsContainer vertical-wrap"> </div> <br/> </div> </div> </div> ',"core"),s.Z.tv&&c.default.centerFocus.on(f,!1),function(e,t){for(var r=e.querySelectorAll(".btnOpenUploadMenu"),i=h.M.supports("fileinput"),s=0,l=r.length;s<l;s++)i?r[s].classList.remove("hide"):r[s].classList.add("hide");I(e,"btnOpenUploadMenu","click",(function(){var r=this.getAttribute("data-imagetype");a.e(42470).then(a.bind(a,42470)).then((function(a){a.default.show({theme:t.theme,imageType:r,itemId:n.Id,serverId:n.ServerId}).then((function(t){t&&(p=!0,y(e))}))}))})),I(e,"btnSearchImages","click",(function(){P(e,this.getAttribute("data-imagetype"))})),I(e,"btnBrowseAllImages","click",(function(){P(e,this.getAttribute("data-imagetype")||"Primary")})),I(e,"btnImageCard","click",(function(){!function(e,t){var n=t.getAttribute("data-id"),r=t.getAttribute("data-serverid"),i=g.Z.getApiClient(r),s=t.getAttribute("data-imagetype"),l=parseInt(t.getAttribute("data-index")),c=parseInt(t.getAttribute("data-providers")),u=parseInt(t.getAttribute("data-numimages"));Promise.resolve().then(a.bind(a,12801)).then((function(a){var r=a.default,m=[];m.push({name:d.ZP.translate("Delete"),id:"delete"}),"Backdrop"===s&&(l>0&&m.push({name:d.ZP.translate("MoveLeft"),id:"moveleft"}),l<u-1&&m.push({name:d.ZP.translate("MoveRight"),id:"moveright"})),c&&m.push({name:d.ZP.translate("Search"),id:"search"}),r.show({items:m,positionTo:t}).then((function(a){switch(a){case"delete":S(e,n,s,l,i,!1);break;case"search":P(e,s);break;case"moveleft":k(e,i,n,s,l,l-1,o.ZP.parentWithClass(t,"itemsContainer"));break;case"moveright":k(e,i,n,s,l,l+1,o.ZP.parentWithClass(t,"itemsContainer"))}}))}))}(e,this)})),I(e,"btnDeleteImage","click",(function(){var t=this.getAttribute("data-imagetype"),a=this.getAttribute("data-index");a="null"===a?null:parseInt(a);var r=g.Z.getApiClient(n.ServerId);S(e,n.Id,t,a,r,!0)})),I(e,"btnMoveImage","click",(function(){var t=this.getAttribute("data-imagetype"),a=this.getAttribute("data-index"),r=this.getAttribute("data-newindex"),i=g.Z.getApiClient(n.ServerId);k(e,i,n.Id,t,a,r,o.ZP.parentWithClass(this,"itemsContainer"))}))}(f,e),f.addEventListener("close",(function(){s.Z.tv&&c.default.centerFocus.off(f,!1),i.ZP.hide(),p?t():l()})),r.default.open(f),y(f,u),f.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(f)}))}))}(e,t,l)}))}var Z={show:x}},98301:function(e,t,a){a.r(t),a.d(t,{default:function(){return y},fillImage:function(){return m},fillImages:function(){return b},getPrimaryImageAspectRatio:function(){return v},lazyChildren:function(){return f},lazyImage:function(){return d},setLazyImage:function(){return p}}),a(98010),a(63238),a(52077),a(911),a(72410),a(69217),a(15610),a(17460),a(25901),a(92189),a(91047),a(5769),a(14078);var n=a(31338),r=a(60934);function i(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return o(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?o(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,s=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return s=e.done,e},e:function(e){l=!0,i=e},f:function(){try{s||null==a.return||a.return()}finally{if(l)throw i}}}}function o(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var s=new function(){return new Worker(a.p+"blurhash.worker.bundle.worker.js")},l={};function d(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e.getAttribute("data-src");t&&g(e,t)}function c(e,t,a,n){var r=document.createElement("canvas");r.setAttribute("aria-hidden","true"),r.width=a,r.height=n;var i=r.getContext("2d"),o=i.createImageData(a,n);o.data.set(t),i.putImageData(o,0,0),requestAnimationFrame((function(){r.classList.add("blurhash-canvas"),e.parentNode.insertBefore(r,e),e.classList.add("blurhashed"),e.removeAttribute("data-blurhash")}))}function u(e,t){try{l[t]=(l[t]||[]).filter((function(t){return t!==e})),l[t].push(e),s.postMessage({hash:t,width:20,height:20})}catch(t){return console.error(t),void e.classList.add("non-blurhashable")}}function m(e){if(!e)throw new Error("entry cannot be null");var t,a=e.target;t=a?a.getAttribute("data-src"):e,e.isIntersecting?t&&g(a,t):t||function(e){var t,a;e.removeEventListener("animationend",h);var n,r=e.previousSibling;"CANVAS"===(null==r?void 0:r.tagName)&&r.classList.remove("lazy-hidden"),null===(t=e.parentNode)||void 0===t||null===(a=t.querySelector(".cardPadder"))||void 0===a||a.classList.remove("lazy-hidden-children"),"IMG"!==e.tagName?(n=e.style.backgroundImage.slice(4,-1).replace(/"/g,""),e.style.backgroundImage="none"):(n=e.getAttribute("src"),e.setAttribute("src","")),e.setAttribute("data-src",n),e.classList.remove("lazy-image-fadein-fast","lazy-image-fadein"),e.classList.add("lazy-hidden")}(a)}function h(e){var t=e.target;requestAnimationFrame((function(){var e,a,n=t.previousSibling;t.classList.contains("blurhashed")&&"CANVAS"===(null==n?void 0:n.tagName)&&n.classList.add("lazy-hidden"),null===(e=t.parentNode)||void 0===e||null===(a=e.querySelector(".cardPadder"))||void 0===a||a.classList.add("lazy-hidden-children")})),t.removeEventListener("animationend",h)}function g(e,t){if(void 0===t)throw new TypeError("url cannot be undefined");var a=new Image;a.src=t,e.classList.add("lazy-hidden"),e.addEventListener("animationend",h),a.addEventListener("load",(function(){requestAnimationFrame((function(){"IMG"!==e.tagName?e.style.backgroundImage="url('"+t+"')":e.setAttribute("src",t),e.removeAttribute("data-src"),r.enableFastFadein()?e.classList.add("lazy-image-fadein-fast"):e.classList.add("lazy-image-fadein"),e.classList.remove("lazy-hidden")}))}))}function f(e){if(r.enableBlurhash()){var t,a=i(e.querySelectorAll(".lazy"));try{for(a.s();!(t=a.n()).done;){var o=t.value,s=o.getAttribute("data-blurhash");!o.classList.contains("blurhashed","non-blurhashable")&&s?u(o,s):s||o.classList.contains("blurhashed")||o.classList.add("non-blurhashable")}}catch(e){a.e(e)}finally{a.f()}}n.NC(e,m)}function v(e){for(var t=[],a=0,n=e.length;a<n;a++){var r=e[a].PrimaryImageAspectRatio||0;r&&(t[t.length]=r)}if(!t.length)return null;t.sort((function(e,t){return e-t}));var i,o=Math.floor(t.length/2);i=t.length%2?t[o]:(t[o-1]+t[o])/2;var s=2/3;if(Math.abs(s-i)<=.15)return s;var l=16/9;if(Math.abs(l-i)<=.2)return l;if(Math.abs(1-i)<=.15)return 1;var d=4/3;return Math.abs(d-i)<=.15?d:i}function b(e){for(var t=0,a=e.length;t<a;t++)m(e[0])}function p(e,t){e.classList.add("lazy"),e.setAttribute("data-src",t),d(e)}s.addEventListener("message",(function(e){var t=e.data,a=t.pixels,n=t.hsh,r=t.width,o=t.height,s=l[n];if(s&&s.length){var d,u=i(s);try{for(u.s();!(d=u.n()).done;)c(d.value,a,r,o)}catch(e){u.e(e)}finally{u.f()}delete l[n]}}));var y={setLazyImage:p,fillImages:b,fillImage:m,lazyImage:d,lazyChildren:f,getPrimaryImageAspectRatio:v}},31338:function(e,t,a){function n(e){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},n(e)}function r(e,t){for(var a=0;a<t.length;a++){var r=t[a];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,(void 0,i=function(e,t){if("object"!==n(e)||null===e)return e;var a=e[Symbol.toPrimitive];if(void 0!==a){var r=a.call(e,t);if("object"!==n(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(r.key,"string"),"symbol"===n(i)?i:String(i)),r)}var i}a.d(t,{NC:function(){return o}}),a(63238),a(55849),a(15610),a(17460),a(19068),a(87211),a(25901),a(92189),a(95163),a(99785),a(91047),a(5769),a(14078);var i=function(){function e(t){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.options=t}var t,a;return t=e,(a=[{key:"createObserver",value:function(){var e=this.options.callback,t=new IntersectionObserver((function(t){t.forEach((function(t){e(t)}))}),{rootMargin:"50%",threshold:0});this.observer=t}},{key:"addElements",value:function(e){var t=this.observer;t||(this.createObserver(),t=this.observer),Array.from(e).forEach((function(e){t.observe(e)}))}},{key:"destroyObserver",value:function(){var e=this.observer;e&&(e.disconnect(),this.observer=null)}},{key:"destroy",value:function(){this.destroyObserver(),this.options=null}}])&&r(t.prototype,a),Object.defineProperty(t,"prototype",{writable:!1}),e}();function o(e,t){!function(e,t,a){e.length&&new i({callback:a}).addElements(e)}(e.getElementsByClassName("lazy"),0,t)}t.ZP={LazyLoader:i,lazyChildren:o}}}]);