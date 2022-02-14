"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6281,2987],{96281:function(e,t,a){a.r(t),a.d(t,{default:function(){return d}}),a(27471),a(63238),a(61418),a(72410),a(15610),a(17460),a(52077),a(25901),a(92189),a(91047),a(5769),a(14078);var r=a(90914),o=a(44614),i=a(28978),n=a(78695),l=a(74227);function c(e,t){var a="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!a){if(Array.isArray(e)||(a=function(e,t){if(e){if("string"==typeof e)return s(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){a&&(e=a);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,n=!0,l=!1;return{s:function(){a=a.call(e)},n:function(){var e=a.next();return n=e.done,e},e:function(e){l=!0,i=e},f:function(){try{n||null==a.return||a.return()}finally{if(l)throw i}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,r=new Array(t);a<t;a++)r[a]=e[a];return r}a(45368),a(82987),a(6626),a(85427);var d={show:function(e){return new Promise((function(t,a){var s=!1,d={removeOnClose:!0,scrollY:!1};n.Z.tv?d.size="fullscreen":d.size="small";var u=r.default.createDialog(d);u.classList.add("formDialog");var b="";b+=o.ZP.translateHtml('<div class="formDialogHeader"> <button is="paper-icon-button-light" class="btnCancel autoSize" title="${Previous}" tabindex="-1"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <h3 class="formDialogHeaderTitle"> ${Settings} </h3> </div> <div class="formDialogContent smoothScrollY"> <form class="dialogContentInner dialog-content-centered" style="padding-top:2em"> <h3 class="checkboxListLabel">${SortChannelsBy}</h3> <label class="radio-label-block"><input type="radio" is="emby-radio" name="ChannelSortOrder" value="Number" class="chkSortOrder"/><span>${ChannelNumber}</span></label> <label class="radio-label-block"><input type="radio" is="emby-radio" name="ChannelSortOrder" value="DatePlayed" class="chkSortOrder"/><span>${RecentlyWatched}</span></label> <br/> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" class="chkFavoriteChannelsAtTop"/> <span>${PlaceFavoriteChannelsAtBeginning}</span> </label> <h3 class="checkboxListLabel">${ShowIndicatorsFor}</h3> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="chkIndicator" data-type="hd"/> <span>${HDPrograms}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkIndicator" data-type="live" data-default="true"/> <span>${LiveBroadcasts}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkIndicator" data-type="new"/> <span>${NewEpisodes}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkIndicator" data-type="premiere" data-default="true"/> <span>${Premieres}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkIndicator" data-type="repeat"/> <span>${RepeatEpisodes}</span> </label> </div> <br/> <label class="checkboxContainer"> <input type="checkbox" is="emby-checkbox" class="chkColorCodedBackgrounds"/> <span>${EnableColorCodedBackgrounds}</span> </label> <h3 class="checkboxListLabel">${Categories}</h3> <div class="checkboxList"> <label> <input type="checkbox" is="emby-checkbox" class="chkCategory" data-type="movies"/> <span>${Movies}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkCategory" data-type="sports"/> <span>${Sports}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkCategory" data-type="kids"/> <span>${Kids}</span> </label> <label> <input type="checkbox" is="emby-checkbox" class="chkCategory" data-type="news"/> <span>${News}</span> </label> </div> </form> </div> ',"core"),u.innerHTML=b,u.addEventListener("change",(function(){s=!0})),u.addEventListener("close",(function(){n.Z.tv&&l.default.centerFocus.off(u.querySelector(".formDialogContent"),!1),function(e){var t,a=c(e.querySelectorAll(".chkIndicator"));try{for(a.s();!(t=a.n()).done;){var r=t.value,o=r.getAttribute("data-type");i.set("guide-indicator-"+o,r.checked)}}catch(e){a.e(e)}finally{a.f()}i.set("guide-colorcodedbackgrounds",e.querySelector(".chkColorCodedBackgrounds").checked),i.set("livetv-favoritechannelsattop",e.querySelector(".chkFavoriteChannelsAtTop").checked);var n,l=c(e.querySelectorAll(".chkSortOrder"));try{for(l.s();!(n=l.n()).done;){var s=n.value;if(s.checked){i.set("livetv-channelorder",s.value);break}}}catch(e){l.e(e)}finally{l.f()}}(u),function(e,t){var a,r=[],o=c(e.querySelectorAll(".chkCategory"));try{for(o.s();!(a=o.n()).done;){var i=a.value,n=i.getAttribute("data-type");i.checked&&r.push(n)}}catch(e){o.e(e)}finally{o.f()}r.length>=4&&r.push("series"),r.push("all"),t.categories=r}(u,e),s?t():a()})),u.querySelector(".btnCancel").addEventListener("click",(function(){r.default.close(u)})),n.Z.tv&&l.default.centerFocus.on(u.querySelector(".formDialogContent"),!1),function(e){var t,a=c(e.querySelectorAll(".chkIndicator"));try{for(a.s();!(t=a.n()).done;){var r=t.value,o=r.getAttribute("data-type");"true"===r.getAttribute("data-default")?r.checked="false"!==i.get("guide-indicator-"+o):r.checked="true"===i.get("guide-indicator-"+o)}}catch(e){a.e(e)}finally{a.f()}e.querySelector(".chkColorCodedBackgrounds").checked="true"===i.get("guide-colorcodedbackgrounds"),e.querySelector(".chkFavoriteChannelsAtTop").checked="false"!==i.get("livetv-favoritechannelsattop");var n,l=i.get("livetv-channelorder")||"Number",s=c(e.querySelectorAll(".chkSortOrder"));try{for(s.s();!(n=s.n()).done;){var d=n.value;d.checked=d.value===l}}catch(e){s.e(e)}finally{s.f()}}(u),function(e,t){var a,r=t.categories||[],o=c(e.querySelectorAll(".chkCategory"));try{for(o.s();!(a=o.n()).done;){var i=a.value,n=i.getAttribute("data-type");i.checked=!r.length||-1!==r.indexOf(n)}}catch(e){o.e(e)}finally{o.f()}}(u,e),r.default.open(u)}))}}},82987:function(e,t,a){a.r(t);var r=a(78695),o=a(47518),i=(a(67752),a(1892)),n=a.n(i),l=a(95760),c=a.n(l),s=a(38311),d=a.n(s),u=a(58192),b=a.n(u),h=a(38060),p=a.n(h),f=a(54865),m=a.n(f),y=a(94966),k={};k.styleTagTransform=m(),k.setAttributes=b(),k.insert=d().bind(null,"head"),k.domAPI=c(),k.insertStyleElement=p(),n()(y.Z,k),y.Z&&y.Z.locals&&y.Z.locals;var v=Object.create(HTMLInputElement.prototype);function g(e){if(13===e.keyCode||32===e.keyCode&&o.Z.tizen)return e.preventDefault(),this.checked||(this.checked=!0,this.dispatchEvent(new CustomEvent("change",{bubbles:!0}))),!1}v.attachedCallback=function(){var e=!r.Z.mobile;if("true"!==this.getAttribute("data-radio")){this.setAttribute("data-radio","true"),this.classList.add("mdl-radio__button");var t=this.parentNode;t.classList.add("mdl-radio"),t.classList.add("mdl-js-radio"),t.classList.add("mdl-js-ripple-effect"),e&&t.classList.add("show-focus");var a=t.querySelector("span");a.classList.add("radioButtonLabel"),a.classList.add("mdl-radio__label");var o="";o+='<div class="mdl-radio__circles">',o+="<svg>",o+="<defs>",o+='<clipPath id="cutoff">',o+='<circle cx="50%" cy="50%" r="50%" />',o+="</clipPath>",o+="</defs>",o+='<circle class="mdl-radio__outer-circle" cx="50%" cy="50%" r="50%" fill="none" stroke="currentcolor" stroke-width="0.26em" clip-path="url(#cutoff)" />',o+='<circle class="mdl-radio__inner-circle" cx="50%" cy="50%" r="25%" fill="currentcolor" />',o+="</svg>",e&&(o+='<div class="mdl-radio__focus-circle"></div>'),o+="</div>",this.insertAdjacentHTML("afterend",o),this.addEventListener("keydown",g)}},document.registerElement("emby-radio",{prototype:v,extends:"input"})},94966:function(e,t,a){var r=a(54933),o=a.n(r),i=a(93476),n=a.n(i)()(o());n.push([e.id,".mdl-radio{box-sizing:border-box;display:inline-block;line-height:24px;margin:0;position:relative}.radio-label-block{-webkit-align-items:center;align-items:center;display:-webkit-flex;display:flex;margin-bottom:.5em;margin-top:.5em}.mdl-radio__button{-ms-appearance:none;-moz-appearance:none;-webkit-appearance:none;appearance:none;border:none;height:1px;line-height:24px;margin:0;opacity:0;padding:0;position:absolute;width:1px}.mdl-radio__circles{border-radius:50%;cursor:pointer;height:1.08em;margin-right:.54em;position:relative;width:1.08em}.mdl-radio__circles svg{height:100%;left:0;overflow:visible;position:absolute;top:0;width:100%;z-index:1}.mdl-radio__button:disabled+.mdl-radio__circles{cursor:auto}.mdl-radio__button:disabled+.mdl-radio__circles .mdl-radio__outer-circle{color:rgba(0,0,0,.26)}.mdl-radio.show-focus .mdl-radio__button:focus+.mdl-radio__circles .mdl-radio__outer-circle{color:#00a4dc}.mdl-radio__inner-circle{-webkit-transform:scale(0);transform:scale(0);-webkit-transform-origin:50% 50%;transform-origin:50% 50%;transition-duration:.2s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform}.mdl-radio__button:checked+.mdl-radio__circles .mdl-radio__inner-circle{-webkit-transform:scale(1);transform:scale(1)}.mdl-radio__button:disabled+.mdl-radio__circles .mdl-radio__inner-circle{color:rgba(0,0,0,.26)}.mdl-radio.show-focus .mdl-radio__button:focus+.mdl-radio__circles .mdl-radio__inner-circle{color:#00a4dc}.mdl-radio__focus-circle{background:#00a4dc;border-radius:50%;box-sizing:border-box;height:100%;left:0;margin:0;opacity:.26;position:absolute;top:0;-webkit-transform:scale(0);transform:scale(0);transition-duration:.2s;transition-property:-webkit-transform;transition-property:transform;transition-property:transform,-webkit-transform;width:100%}.mdl-radio.show-focus .mdl-radio__button:focus+.mdl-radio__circles .mdl-radio__focus-circle{-webkit-transform:scale(1.75);transform:scale(1.75)}.mdl-radio__label{cursor:pointer}.mdl-radio__button:disabled+.mdl-radio__label{color:rgba(0,0,0,.26);cursor:auto}",""]),t.Z=n}}]);