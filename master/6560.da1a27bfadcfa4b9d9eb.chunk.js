"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6560],{76560:function(t,e,a){a.r(e);var i=a(1197),r=a(47005),s=a(44614),n=a(78066),d=a(53913);function l(){var t=this,e=t.getAttribute("data-id"),a=t.getAttribute("data-serverid"),i=d.Z.getApiClient(a),r=this.getAttribute("data-likes");r="true"===r||"false"!==r&&null,function(t,e,a,i,r){return e.updateFavoriteStatus(e.getCurrentUserId(),a,!r)}(0,i,e,0,"true"===this.getAttribute("data-isfavorite")).then((function(e){c(t,e.Likes,e.IsFavorite)}))}function u(t,e,a){a.ItemId===this.getAttribute("data-id")&&c(this,a.Likes,a.IsFavorite)}function c(t,e,a,i){var r=t.querySelector(".material-icons");a?(r&&(r.classList.add("favorite"),r.classList.add("ratingbutton-icon-withrating")),t.classList.add("ratingbutton-withrating")):(r&&(r.classList.add("favorite"),r.classList.remove("ratingbutton-icon-withrating")),t.classList.remove("ratingbutton-withrating")),!1!==i&&(t.setAttribute("data-isfavorite",a),t.setAttribute("data-likes",null===e?"":e))}function o(t){var e,a,s;t.removeEventListener("click",l),(s=(e=t)[a="UserDataChanged"])&&(r.Events.off(i.default,a,s),e[a]=null)}function h(t){var e,a,s;o(t),t.addEventListener("click",l),e=t,a="UserDataChanged",s=u.bind(e),r.Events.on(i.default,a,s),e[a]=s}var b=Object.create(n.Z);b.createdCallback=function(){n.Z.createdCallback&&n.Z.createdCallback.call(this)},b.attachedCallback=function(){n.Z.attachedCallback&&n.Z.attachedCallback.call(this);var t=this.getAttribute("data-id"),e=this.getAttribute("data-serverid");if(t&&e){var a=this.getAttribute("data-likes");c(this,a="true"===a||"false"!==a&&null,"true"===this.getAttribute("data-isfavorite"),!1),h(this)}!function(t){t.title=s.ZP.translate("Favorite");var e=t.querySelector(".button-text");e&&(e.innerHTML=t.title)}(this)},b.detachedCallback=function(){n.Z.detachedCallback&&n.Z.detachedCallback.call(this),o(this)},b.setItem=function(t){if(t){this.setAttribute("data-id",t.Id),this.setAttribute("data-serverid",t.ServerId);var e=t.UserData||{};c(this,e.Likes,e.IsFavorite),h(this)}else this.removeAttribute("data-id"),this.removeAttribute("data-serverid"),this.removeAttribute("data-likes"),this.removeAttribute("data-isfavorite"),o(this)},document.registerElement("emby-ratingbutton",{prototype:b,extends:"button"})}}]);