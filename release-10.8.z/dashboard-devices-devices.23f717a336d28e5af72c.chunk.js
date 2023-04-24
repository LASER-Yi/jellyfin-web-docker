"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9375],{96084:function(e,t,n){n.r(t),n.d(t,{default:function(){return P}}),n(5769),n(86248),n(63238),n(61418),n(17460),n(14078),n(61013),n(98010),n(23938);var a=n(65009),r=n.n(a),i=n(61097),c=n(56705),s=n(83094),o=n(44614),d=n(7816),l=n(64258),u=n(9785),Z=(n(78066),n(32420),n(46650),n(76543)),v=n(56346);function f(e,t,n,a,r,i,c){try{var s=e[i](c),o=s.value}catch(e){return void n(e)}s.done?t(o):Promise.resolve(o).then(a,r)}function p(e){return function(){var t=this,n=arguments;return new Promise((function(a,r){var i=e.apply(t,n);function c(e){f(i,a,r,c,s,"next",e)}function s(e){f(i,a,r,c,s,"throw",e)}c(void 0)}))}}var h=[];function m(e){return e!==ApiClient.deviceId()}function g(e){c.ZP.show(),ApiClient.getJSON(ApiClient.getUrl("Devices")).then((function(t){!function(e,t){var n=(0,u.LP)(),a="";a+=t.map((function(e){var t="";t+="<div data-id='"+r()(e.Id)+"' class='card backdropCard'>",t+='<div class="cardBox visualCardBox">',t+='<div class="cardScalable">',t+='<div class="cardPadder cardPadder-backdrop"></div>',t+='<a is="emby-linkbutton" href="'.concat(b?"#!/device.html?id="+r()(e.Id):"#",'" class="cardContent cardImageContainer ').concat(i.default.getDefaultBackgroundClass(),'">');var a=d.ZP.getDeviceIcon(e);return a?(t+='<div class="cardImage" style="background-image:url(\''+a+"');background-size: auto 64%;background-position:center center;\">",t+="</div>"):t+='<span class="cardImageIcon material-icons tablet_android" aria-hidden="true"></span>',t+="</a>",t+="</div>",t+='<div class="cardFooter">',(b||m(e.Id))&&(t+='<div style="text-align:right; float:right;padding-top:5px;">',t+='<button type="button" is="paper-icon-button-light" data-id="'+r()(e.Id)+'" title="'+o.ZP.translate("Menu")+'" class="btnDeviceMenu"><span class="material-icons more_vert" aria-hidden="true"></span></button>',t+="</div>"),t+="<div class='cardText'>",t+=r()(e.Name),t+="</div>",t+="<div class='cardText cardText-secondary'>",t+=r()(e.AppName+" "+e.AppVersion),t+="</div>",t+="<div class='cardText cardText-secondary'>",e.LastUserName&&(t+=r()(e.LastUserName),t+=", "+(0,l.Z)(Date.parse(e.DateLastActivity),n)),t+="&nbsp;",t+="</div>",t+="</div>",(t+="</div>")+"</div>"})).join(""),e.querySelector(".devicesList").innerHTML=a}(e,t.Items),h=t.Items.map((function(e){return e.Id})),c.ZP.hide()}))}var b=ApiClient.isMinServerVersion("3.4.1.31");function P(e){e.querySelector(".devicesList").addEventListener("click",(function(t){var a=s.ZP.parentWithClass(t.target,"btnDeviceMenu");a&&function(e,t,a){var r=[];b&&r.push({name:o.ZP.translate("Edit"),id:"open",icon:"mode_edit"}),m(a)&&r.push({name:o.ZP.translate("Delete"),id:"delete",icon:"delete"}),Promise.resolve().then(n.bind(n,78407)).then((function(n){n.default.show({items:r,positionTo:t,callback:function(t){switch(t){case"open":Z.ZP.navigate("device.html?id="+a);break;case"delete":!function(e,t){var n=o.ZP.translate("DeleteDeviceConfirmation");(0,v.Z)({text:n,title:o.ZP.translate("HeaderDeleteDevice"),confirmText:o.ZP.translate("Delete"),primary:"delete"}).then(p(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return c.ZP.show(),n.next=3,ApiClient.deleteDevice(t);case 3:g(e);case 4:case"end":return n.stop()}}),n)}))))}(e,a)}}})}))}(e,a,a.getAttribute("data-id"))})),e.addEventListener("viewshow",(function(){g(this)})),e.querySelector("#deviceDeleteAll").addEventListener("click",(function(){var t,n;t=e,n=o.ZP.translate("DeleteDevicesConfirmation"),(0,v.Z)({text:n,title:o.ZP.translate("HeaderDeleteDevices"),confirmText:o.ZP.translate("Delete"),primary:"delete"}).then(p(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c.ZP.show(),e.next=3,Promise.all(h.filter(m).map((function(e){return ApiClient.deleteDevice(e)})));case 3:g(t);case 4:case"end":return e.stop()}}),e)}))))}))}},9785:function(e,t,n){n.d(t,{Kd:function(){return re},LP:function(){return ie}}),n(52077),n(911);var a=n(77946),r=n(42845),i=n(11401),c=n(84146),s=n(59996),o=n(78210),d=n(9477),l=n(28024),u=n(33026),Z=n(91814),v=n(88303),f=n(22410),p=n(35997),h=n(73956),m=n(86496),g=n(47182),b=n(87994),P=n(6902),k=n(35163),x=n(36749),D=n(89310),C=n(22481),w=n(75710),y=n(11109),L=n(74270),I=n(37159),A=n(27324),T=n(68490),S=n(19046),M=n(81905),N=n(19656),z=n(5905),E=n(64660),R=n(82025),q=n(69509),B=n(69984),H=n(84216),U=n(195),_=n(77411),j=n(23282),V=n(42395),W=n(30318),F=n(45614),J=n(83305),K=n(95861),O=n(37405),G=n(6148),Q=n(63258),X=n(50281),Y=n(67889),$=n(44362),ee=n(69244),te=n(96730),ne=n(44614),ae=function(e){return{af:a.Z,ar:r.Z,"be-by":i.Z,"bg-bg":c.Z,bn:s.Z,ca:o.Z,cs:d.Z,cy:l.Z,da:u.Z,de:Z.Z,el:v.Z,"en-gb":f.Z,"en-us":p.Z,eo:h.Z,es:m.Z,"es-ar":m.Z,"es-do":m.Z,"es-mx":m.Z,et:g.Z,eu:b.Z,fa:P.Z,fi:k.Z,fr:x.Z,"fr-ca":D.Z,gl:C.Z,gsw:Z.Z,he:w.Z,"hi-in":y.Z,hr:L.Z,hu:I.Z,id:A.Z,is:T.Z,it:S.Z,ja:M.Z,kk:N.Z,ko:z.Z,"lt-lt":E.Z,lv:R.Z,ms:q.Z,nb:B.Z,nl:H.Z,nn:U.Z,pl:_.Z,pt:j.Z,"pt-br":V.Z,"pt-pt":j.Z,ro:W.Z,ru:F.Z,sk:J.Z,"sl-si":K.Z,sv:O.Z,ta:G.Z,th:Q.Z,tr:X.Z,uk:Y.Z,vi:$.Z,"zh-cn":ee.Z,"zh-hk":ee.Z,"zh-tw":te.Z}[e]};function re(){return ae(ne.ZP.getCurrentLocale())||ae(ne.ZP.getCurrentLocale().replace(/-.*/,""))||p.Z}function ie(){return{addSuffix:!0,locale:re()}}t.ZP={getLocale:re,getLocaleWithSuffix:ie}}}]);