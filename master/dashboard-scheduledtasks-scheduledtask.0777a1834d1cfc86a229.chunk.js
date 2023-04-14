"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[53006,12801,49213,31473],{12801:function(e,t,i){i.r(t),i.d(t,{show:function(){return f}}),i(5769),i(63238),i(61418),i(17460),i(14078),i(27471),i(72410),i(15610),i(52077),i(25901),i(92189),i(91047);var n=i(65009),r=i.n(n),a=i(93355),s=i(30325),l=i(94994),o=i(72365);function c(e,t){var i="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!i){if(Array.isArray(e)||(i=function(e,t){if(e){if("string"==typeof e)return d(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?d(e,t):void 0}}(e))||t&&e&&"number"==typeof e.length){i&&(e=i);var n=0,r=function(){};return{s:r,n:function(){return n>=e.length?{done:!0}:{done:!1,value:e[n++]}},e:function(e){throw e},f:r}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,s=!0,l=!1;return{s:function(){i=i.call(e)},n:function(){var e=i.next();return s=e.done,e},e:function(e){l=!0,a=e},f:function(){try{s||null==i.return||i.return()}finally{if(l)throw a}}}}function d(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}function u(e,t,n){Promise.resolve().then(i.bind(i,54517)).then((function(i){var r=n?"on":"off";i.centerFocus[r](e,t)}))}function f(e){var t,i={removeOnClose:!0,enableHistory:e.enableHistory,scrollY:!1};s.Z.tv?(i.size="fullscreen",t=!0,i.autoFocus=!0):(i.modal=!1,i.entryAnimation=e.entryAnimation,i.exitAnimation=e.exitAnimation,i.entryAnimationDuration=e.entryAnimationDuration||140,i.exitAnimationDuration=e.exitAnimationDuration||100,i.autoFocus=!1);var n=a.default.createDialog(i);t?n.classList.add("actionsheet-fullscreen"):n.classList.add("actionsheet-not-fullscreen"),n.classList.add("actionSheet"),e.dialogClass&&n.classList.add(e.dialogClass);var d="",f=s.Z.tv?"scrollY smoothScrollY hiddenScrollY":"scrollY",v="";e.items.length>20&&(v+="min-width:"+(o.ZP.getWindowSize().innerWidth>=300?240:200)+"px;");var h,m,g=!1,y=[],T=c(e.items);try{for(T.s();!(m=T.n()).done;){var p=m.value;(h=p.icon||(p.selected?"check":null))&&(g=!0),y.push(h||"")}}catch(e){T.e(e)}finally{T.f()}s.Z.tv&&(d+='<button is="paper-icon-button-light" class="btnCloseActionSheet hide-mouse-idle-tv" tabindex="-1" title="'.concat(l.ZP.translate("ButtonBack"),'">\n                     <span class="material-icons arrow_back" aria-hidden="true"></span>\n                 </button>'));var S=e.title&&!g;S||s.Z.tv?d+='<div class="actionSheetContent actionSheetContent-centered">':d+='<div class="actionSheetContent">',e.title&&(d+='<h1 class="actionSheetTitle">'+r()(e.title)+"</h1>"),e.text&&(d+='<p class="actionSheetText">'+r()(e.text)+"</p>");var b="actionSheetScroller";s.Z.tv&&(b+=" actionSheetScroller-tv focuscontainer-x focuscontainer-y"),d+='<div class="'+b+" "+f+'" style="'+v+'">';var k="listItem listItem-button actionSheetMenuItem";(e.border||e.shaded)&&(k+=" listItem-border"),e.menuItemClass&&(k+=" "+e.menuItemClass),s.Z.tv&&(k+=" listItem-focusscale"),s.Z.mobile&&(k+=" actionsheet-xlargeFont");for(var D=0;D<e.items.length;D++){var I=e.items[D];I.divider?d+='<div class="actionsheetDivider"></div>':(d+="<button"+(I.selected&&s.Z.tv?" autoFocus":"")+' is="emby-button" type="button" class="'+k+'" data-id="'+(null==I.id||""===I.id?I.value:I.id)+'">',(h=y[D])?d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons '.concat(h,'" aria-hidden="true"></span>'):g&&!S&&(d+='<span class="actionsheetMenuItemIcon listItemIcon listItemIcon-transparent material-icons check" aria-hidden="true" style="visibility:hidden;"></span>'),d+='<div class="listItemBody actionsheetListItemBody">',d+='<div class="listItemBodyText actionSheetItemText">',d+=r()(I.name||I.textContent||I.innerText),d+="</div>",I.secondaryText&&(d+='<div class="listItemBodyText secondary">'.concat(r()(I.secondaryText),"</div>")),d+="</div>",I.asideText&&(d+='<div class="listItemAside actionSheetItemAsideText">'.concat(r()(I.asideText),"</div>")),d+="</button>")}e.showCancel&&(d+='<div class="buttons">',d+='<button is="emby-button" type="button" class="btnCloseActionSheet">'.concat(l.ZP.translate("ButtonCancel"),"</button>"),d+="</div>"),d+="</div>",n.innerHTML=d,s.Z.tv&&u(n.querySelector(".actionSheetScroller"),!1,!0);var w,A,x=n.querySelector(".btnCloseActionSheet");return x&&x.addEventListener("click",(function(){a.default.close(n)})),e.timeout&&(A=setTimeout((function(){a.default.close(n)}),e.timeout)),new Promise((function(t,r){var l;n.addEventListener("click",(function(i){var r=o.ZP.parentWithClass(i.target,"actionSheetMenuItem");r&&(w=r.getAttribute("data-id"),e.resolveOnClick&&(e.resolveOnClick.indexOf?-1!==e.resolveOnClick.indexOf(w)&&(t(w),l=!0):(t(w),l=!0)),a.default.close(n))})),n.addEventListener("close",(function(){s.Z.tv&&u(n.querySelector(".actionSheetScroller"),!1,!1),A&&(clearTimeout(A),A=null),l||(null!=w?(e.callback&&e.callback(w),t(w)):r("ActionSheet closed without resolving"))})),a.default.open(n);var d=e.positionTo&&"fullscreen"!==i.size?function(e,t){var i=o.ZP.getWindowSize(),n=i.innerHeight,r=i.innerWidth,a=function(e){var t=[];if(!document)return t;var i,n=c(e);try{for(n.s();!(i=n.n()).done;){var r=i.value.getBoundingClientRect();t.push({top:r.top,left:r.left,width:r.width,height:r.height})}}catch(e){n.e(e)}finally{n.f()}return t}([e.positionTo])[0];"top"!==e.positionY&&(a.top+=(a.height||0)/2),a.left+=(a.width||0)/2;var s=t.offsetHeight||300,l=t.offsetWidth||160;a.top-=s/2,a.left-=l/2;var d=a.left+l-r,u=a.top+s-n;return d>0&&(a.left-=d+20),u>0&&(a.top-=u+20),a.top+=e.offsetTop||0,a.left+=e.offsetLeft||0,a.top=Math.max(a.top,10),a.left=Math.max(a.left,10),a}(e,n):null;d&&(n.style.position="fixed",n.style.margin=0,n.style.left=d.left+"px",n.style.top=d.top+"px")}))}i(38228),t.default={show:f}},76293:function(e,t,i){i.r(t),i.d(t,{default:function(){return d}}),i(5769),i(61013),i(72410),i(63238),i(61418),i(17460),i(14078),i(43512),i(32081),i(72326);var n=i(28540),r=i(61693),a=i(72365),s=i(94994),l=(i(62033),i(38228),i(15856),i(3137)),o=i(85951);Array.prototype.remove=function(e,t){var i=this.slice((t||e)+1||this.length);return this.length=e<0?this.length+e:e,this.push.apply(this,i)};var c={refreshScheduledTask:function(e){n.ZP.show();var t=(0,o.a)("id");ApiClient.getScheduledTask(t).then((function(t){c.loadScheduledTask(e,t)}))},loadScheduledTask:function(e,t){$(".taskName",e).html(t.Name),$("#pTaskDescription",e).html(t.Description),i.e(1826).then(i.bind(i,1826)).then((function(){c.loadTaskTriggers(e,t)})),n.ZP.hide()},loadTaskTriggers:function(e,t){var i="";i+='<div class="paperList">';for(var n=0,r=t.Triggers.length;n<r;n++){var a=t.Triggers[n];if(i+='<div class="listItem listItem-border">',i+='<span class="material-icons listItemIcon schedule" aria-hidden="true"></span>',a.MaxRuntimeMs?i+='<div class="listItemBody two-line">':i+='<div class="listItemBody">',i+="<div class='listItemBodyText'>"+c.getTriggerFriendlyName(a)+"</div>",a.MaxRuntimeMs){i+='<div class="listItemBodyText secondary">';var l=a.MaxRuntimeTicks/36e9;i+=1==l?s.ZP.translate("ValueTimeLimitSingleHour"):s.ZP.translate("ValueTimeLimitMultiHour",l),i+="</div>"}i+="</div>",i+='<button class="btnDeleteTrigger" data-index="'+n+'" type="button" is="paper-icon-button-light" title="'+s.ZP.translate("Delete")+'"><span class="material-icons delete" aria-hidden="true"></span></button>',i+="</div>"}i+="</div>",e.querySelector(".taskTriggers").innerHTML=i},getTriggerFriendlyName:function(e){if("DailyTrigger"==e.Type)return s.ZP.translate("DailyAt",c.getDisplayTime(e.TimeOfDayTicks));if("WeeklyTrigger"==e.Type)return s.ZP.translate("WeeklyAt",e.DayOfWeek,c.getDisplayTime(e.TimeOfDayTicks));if("SystemEventTrigger"==e.Type&&"WakeFromSleep"==e.SystemEvent)return s.ZP.translate("OnWakeFromSleep");if("IntervalTrigger"==e.Type){var t=e.IntervalTicks/36e9;return.25==t?s.ZP.translate("EveryXMinutes","15"):.5==t?s.ZP.translate("EveryXMinutes","30"):.75==t?s.ZP.translate("EveryXMinutes","45"):1==t?s.ZP.translate("EveryHour"):s.ZP.translate("EveryXHours",t)}return"StartupTrigger"==e.Type?s.ZP.translate("OnApplicationStartup"):e.Type},getDisplayTime:function(e){var t=e/1e4,i=new Date;return i.setHours(0,0,0,0),i.setTime(i.getTime()+t),r.ZP.getDisplayTime(i)},showAddTriggerPopup:function(e){$("#selectTriggerType",e).val("DailyTrigger"),e.querySelector("#selectTriggerType").dispatchEvent(new CustomEvent("change",{})),$("#popupAddTrigger",e).removeClass("hide")},confirmDeleteTrigger:function(e,t){(0,l.Z)(s.ZP.translate("MessageDeleteTaskTrigger"),s.ZP.translate("HeaderDeleteTaskTrigger")).then((function(){c.deleteTrigger(e,t)}))},deleteTrigger:function(e,t){n.ZP.show();var i=(0,o.a)("id");ApiClient.getScheduledTask(i).then((function(i){i.Triggers.remove(t),ApiClient.updateScheduledTaskTriggers(i.Id,i.Triggers).then((function(){c.refreshScheduledTask(e)}))}))},refreshTriggerFields:function(e,t){"DailyTrigger"==t?($("#fldTimeOfDay",e).show(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).attr("required","required")):"WeeklyTrigger"==t?($("#fldTimeOfDay",e).show(),$("#fldDayOfWeek",e).show(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).attr("required","required")):"SystemEventTrigger"==t?($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).show(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).removeAttr("required")):"IntervalTrigger"==t?($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).show(),$("#selectTimeOfDay",e).removeAttr("required")):"StartupTrigger"==t&&($("#fldTimeOfDay",e).hide(),$("#fldDayOfWeek",e).hide(),$("#fldSelectSystemEvent",e).hide(),$("#fldSelectInterval",e).hide(),$("#selectTimeOfDay",e).removeAttr("required"))},getTriggerToAdd:function(e){var t={Type:$("#selectTriggerType",e).val()};"DailyTrigger"==t.Type?t.TimeOfDayTicks=$("#selectTimeOfDay",e).val():"WeeklyTrigger"==t.Type?(t.DayOfWeek=$("#selectDayOfWeek",e).val(),t.TimeOfDayTicks=$("#selectTimeOfDay",e).val()):"SystemEventTrigger"==t.Type?t.SystemEvent=$("#selectSystemEvent",e).val():"IntervalTrigger"==t.Type&&(t.IntervalTicks=$("#selectInterval",e).val());var i=$("#txtTimeLimit",e).val()||"0";return i=36e5*parseFloat(i),t.MaxRuntimeMs=i||null,t}};function d(e){e.querySelector(".addTriggerForm").addEventListener("submit",(function(t){n.ZP.show();var i=(0,o.a)("id");ApiClient.getScheduledTask(i).then((function(t){t.Triggers.push(c.getTriggerToAdd(e)),ApiClient.updateScheduledTaskTriggers(t.Id,t.Triggers).then((function(){$("#popupAddTrigger").addClass("hide"),c.refreshScheduledTask(e)}))})),t.preventDefault()})),function(e){for(var t=[],i=0;i<864e5;i+=9e5)t.push({name:c.getDisplayTime(1e4*i),value:1e4*i});e.innerHTML=t.map((function(e){return'<option value="'+e.value+'">'+e.name+"</option>"})).join("")}(e.querySelector("#selectTimeOfDay")),$(e.querySelector("#popupAddTrigger").parentNode).trigger("create"),e.querySelector(".selectTriggerType").addEventListener("change",(function(){c.refreshTriggerFields(e,this.value)})),e.querySelector(".btnAddTrigger").addEventListener("click",(function(){c.showAddTriggerPopup(e)})),e.addEventListener("click",(function(t){var i=a.ZP.parentWithClass(t.target,"btnDeleteTrigger");i&&c.confirmDeleteTrigger(e,parseInt(i.getAttribute("data-index"),10))})),e.addEventListener("viewshow",(function(){c.refreshScheduledTask(e)}))}},15856:function(e,t,i){var n=i(30325),r=i(57366),a=i(12801),s=(i(67752),Object.create(HTMLSelectElement.prototype));function l(){return!(!r.Z.edgeUwp&&!r.Z.xboxOne&&(r.Z.tizen||r.Z.orsay||r.Z.web0s||!r.Z.tv&&n.Z.tv))}function o(e){var t=c(e),i=t?t.textContent||t.innerText:null;a.default.show({items:e.options,positionTo:e,title:i}).then((function(t){!function(e,t){e.value=t}(e,t),function(e){var t=document.createEvent("HTMLEvents");t.initEvent("change",!1,!0),e.dispatchEvent(t)}(e)}))}function c(e){for(var t=e.previousSibling;t&&"LABEL"!==t.tagName;)t=t.previousSibling;return t}function d(){var e=c(this);e&&e.classList.add("selectLabelFocused")}function u(){var e=c(this);e&&e.classList.remove("selectLabelFocused")}function f(e){e.button||l()||(e.preventDefault(),o(this))}function v(e){switch(e.keyCode){case 13:return void(l()||(e.preventDefault(),o(this)));case 37:case 38:case 39:case 40:return void(n.Z.tv&&e.preventDefault())}}var h=0;s.createdCallback=function(){this.id||(this.id="embyselect"+h,h++),this.classList.add("emby-select-withcolor"),n.Z.tv&&this.classList.add("emby-select-focusscale"),this.addEventListener("mousedown",f),this.addEventListener("keydown",v),this.addEventListener("focus",d),this.addEventListener("blur",u)},s.attachedCallback=function(){var e;if(!this.classList.contains("emby-select")){this.classList.add("emby-select");var t,i=this.ownerDocument.createElement("label");i.innerText=this.getAttribute("label")||"",i.classList.add("selectLabel"),i.htmlFor=this.id,null===(e=this.parentNode)||void 0===e||e.insertBefore(i,this),this.classList.contains("emby-select-withcolor")&&(null===(t=this.parentNode)||void 0===t||t.insertAdjacentHTML("beforeend",'<div class="selectArrowContainer"><div style="visibility:hidden;display:none;">0</div><span class="selectArrow material-icons keyboard_arrow_down" aria-hidden="true"></span></div>'))}},s.setLabel=function(e){var t;(null===(t=this.parentNode)||void 0===t?void 0:t.querySelector("label")).innerText=e},document.registerElement("emby-select",{prototype:s,extends:"select"})}}]);