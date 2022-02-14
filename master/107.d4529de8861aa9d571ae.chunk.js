"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[107],{80107:function(e,t,n){n.r(t),n.d(t,{default:function(){return f}}),n(72410),n(15610),n(52077),n(25901),n(92189),n(91047),n(99785),n(5769),n(63238),n(61418),n(17460),n(14078),n(27471);var i=n(90914),r=n(78695),o=n(44614),a=n(28978);function l(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function c(e,t){var n="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!n){if(Array.isArray(e)||(n=function(e,t){if(e){if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?s(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var i=0,r=function(){};return{s:r,n:function(){return i>=e.length?{done:!0}:{done:!1,value:e[i++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,l=!1;return{s:function(){n=n.call(e)},n:function(){var e=n.next();return a=e.done,e},e:function(e){l=!0,o=e},f:function(){try{a||null==n.return||n.return()}finally{if(l)throw o}}}}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,i=new Array(t);n<t;n++)i[n]=e[n];return i}function u(e){return e.preventDefault(),!1}function d(e,t,i){Promise.resolve().then(n.bind(n,74227)).then((function(n){var r=i?"on":"off";n.centerFocus[r](e,t)}))}function v(e,t,n){var i=e.querySelector(t);n&&!i.classList.contains("hiddenFromViewSettings")?i.classList.remove("hide"):i.classList.add("hide")}n(45368),n(83225),n(78066),n(21865),n(20716),n(85427),n(6626),n(15359);var f=function(){function e(){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e)}var t,n;return t=e,(n=[{key:"show",value:function(e){return new Promise((function(t,n){var l={removeOnClose:!0,scrollY:!1};r.Z.tv?l.size="fullscreen":l.size="small";var s=i.default.createDialog(l);s.classList.add("formDialog"),s.innerHTML=o.ZP.translateHtml('<div class="formDialogHeader"><button is="paper-icon-button-light" class="btnCancel hide-mouse-idle-tv" tabindex="-1"><span class="material-icons arrow_back"></span></button><h3 class="formDialogHeaderTitle">${Settings}</h3></div><div class="formDialogContent smoothScrollY" style="padding-top:2em"> <div class="dialogContentInner dialog-content-centered"> <form style="margin:auto"> <div class="verticalSection"> <div class="selectContainer viewSetting hide" data-settingname="imageType"> <select is="emby-select" label="${LabelImageType}" class="selectImageType"> <option value="primary">${Primary}</option> <option value="banner">${Banner}</option> <option value="disc">${Disc}</option> <option value="logo">${Logo}</option> <option value="thumb">${Thumb}</option> <option value="list">${List}</option> </select> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide chkTitleContainer" data-settingname="showTitle"> <label> <input is="emby-checkbox" type="checkbox"/> <span>${ShowTitle}</span> </label> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide chkYearContainer" data-settingname="showYear"> <label> <input is="emby-checkbox" type="checkbox"/> <span>${ShowYear}</span> </label> </div> <div class="checkboxContainer viewSetting viewSetting-checkboxContainer hide" data-settingname="groupBySeries"> <label> <input is="emby-checkbox" type="checkbox"/> <span>${GroupBySeries}</span> </label> </div> </div> </form> </div> </div> ',"core");var f,h,y=c(s.querySelectorAll(".viewSetting"));try{for(y.s();!(f=y.n()).done;){var p=f.value;-1===e.visibleSettings.indexOf(p.getAttribute("data-settingname"))?(p.classList.add("hide"),p.classList.add("hiddenFromViewSettings")):(p.classList.remove("hide"),p.classList.remove("hiddenFromViewSettings"))}}catch(e){y.e(e)}finally{y.f()}!function(e,t){e.querySelector("form").addEventListener("submit",u);var n,i=c(e.querySelectorAll(".viewSetting-checkboxContainer"));try{for(i.s();!(n=i.n()).done;){var r=n.value;r.querySelector("input").checked=t[r.getAttribute("data-settingname")]||!1}}catch(e){i.e(e)}finally{i.f()}e.querySelector(".selectImageType").value=t.imageType||"primary"}(s,e.settings),s.querySelector(".selectImageType").addEventListener("change",(function(){v(s,".chkTitleContainer","list"!==this.value),v(s,".chkYearContainer","list"!==this.value)})),s.querySelector(".btnCancel").addEventListener("click",(function(){i.default.close(s)})),r.Z.tv&&d(s.querySelector(".formDialogContent"),!1,!0),s.querySelector(".selectImageType").dispatchEvent(new CustomEvent("change",{})),s.querySelector("form").addEventListener("change",(function(){h=!0}),!0),i.default.open(s).then((function(){if(r.Z.tv&&d(s.querySelector(".formDialogContent"),!1,!1),h)return function(e,t,n){var i,r=c(e.querySelectorAll(".viewSetting-checkboxContainer"));try{for(r.s();!(i=r.n()).done;){var o=i.value;a.set(n+"-"+o.getAttribute("data-settingname"),o.querySelector("input").checked)}}catch(e){r.e(e)}finally{r.f()}a.set(n+"-imageType",e.querySelector(".selectImageType").value)}(s,e.settings,e.settingsKey),void t();n()}))}))}}])&&l(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}()}}]);