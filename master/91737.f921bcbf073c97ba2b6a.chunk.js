"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[91737],{91737:function(e,s,n){n.r(s);var i,t,o,a,c,d,r=n(47750),l=n(47629),u=n(34789),f=n(44797);function v(){this.classList.add("hide")}function m(){d&&(clearTimeout(d),d=null)}function h(){m();var e=t;e&&(c?(e.offsetWidth,requestAnimationFrame((function(){e.classList.add("iconOsd-hidden"),l.Ay.addEventListener(e,l.Ay.whichTransitionEvent(),v,{once:!0})}))):v.call(e))}function p(){var e,s,n;(e=t)||(c=u.A.supportsCssAnimation(),(e=document.createElement("div")).classList.add("hide"),e.classList.add("iconOsd"),e.classList.add("iconOsd-hidden"),e.classList.add("volumeOsd"),e.innerHTML='<span class="material-icons iconOsdIcon volume_up" aria-hidden="true"></span><div class="iconOsdProgressOuter"><div class="iconOsdProgressInner"></div></div>',o=e.querySelector(".material-icons"),a=e.querySelector(".iconOsdProgressInner"),document.body.appendChild(e),t=e),s=this.isMuted(),n=this.getVolume(),o&&(o.classList.remove("volume_off","volume_up"),o.classList.add(s?"volume_off":"volume_up")),a&&(a.style.width=(n||0)+"%"),function(){m();var e=t;l.Ay.removeEventListener(e,l.Ay.whichTransitionEvent(),v,{once:!0}),e.classList.remove("hide"),e.offsetWidth,requestAnimationFrame((function(){e.classList.remove("iconOsd-hidden"),d=setTimeout(h,3e3)}))}()}function y(e){e!==i&&(function(){var e=i;e&&(f.A.off(e,"volumechange",p),f.A.off(e,"playbackstop",h),i=null)}(),i=e,e&&(h(),f.A.on(e,"volumechange",p),f.A.on(e,"playbackstop",h)))}f.A.on(r.f,"playerchange",(function(){y(r.f.getCurrentPlayer())})),y(r.f.getCurrentPlayer())}}]);