"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[82145],{82145:function(e,t,n){n.r(t),n(44901);var a=n(84881),d=0,i=1,c=12,o=13,s=14,u=15,r=.75,f=!1,m=!1,g=!1,p=!1,l=!1,h=!1,b=!1,k=!1,w=!1,v=!1,P=[c,o,s,u,d,i],T={getgamepadA:function(){return w},setgamepadA:function(e){A(w,e,"GamepadA",13,!1,!0),w=e},getgamepadB:function(){return v},setgamepadB:function(e){A(v,e,"GamepadB",27),v=e},getleftThumbstickUp:function(){return f},setleftThumbstickUp:function(e){A(f,e,"GamepadLeftThumbStickUp",38,!0),f=e},getleftThumbstickDown:function(){return m},setleftThumbstickDown:function(e){A(m,e,"GamepadLeftThumbStickDown",40,!0),m=e},getleftThumbstickLeft:function(){return g},setleftThumbstickLeft:function(e){A(g,e,"GamepadLeftThumbStickLeft",37,!0),g=e},getleftThumbstickRight:function(){return p},setleftThumbstickRight:function(e){A(p,e,"GamepadLeftThumbStickRight",39,!0),p=e},getdPadUp:function(){return l},setdPadUp:function(e){A(l,e,"GamepadDPadUp",38,!0),l=e},getdPadDown:function(){return h},setdPadDown:function(e){A(h,e,"GamepadDPadDown",40,!0),h=e},getdPadLeft:function(){return b},setdPadLeft:function(e){A(b,e,"GamepadDPadLeft",37,!0),b=e},getdPadRight:function(){return k},setdPadRight:function(e){A(k,e,"GamepadDPadRight",39,!0),k=e}},L={};function D(e){L[e]=(new Date).getTime()}var G,R=-1!==navigator.userAgent.toLowerCase().indexOf("electron");function U(){return!(!R&&document.hidden)&&"Minimized"!==a.M.getWindowState()}function E(e,t,n){if(U()){var a=new Event(e,{bubbles:!0,cancelable:!0});a.key=t,a.keyCode=n,(document.activeElement||document.body).dispatchEvent(a)}}function A(e,t,n,a,d,i){if(!0===t){var c=!1;!1===e?(c=!0,D(n)):d&&(c=function(e){var t=L[e]||0;return(new Date).getTime()-t>=200}(n)),c&&a&&E("keydown",n,a)}else!1===t&&!0===e&&(D(n),a&&E("keyup",n,a),i&&(o=document.activeElement||window,U()&&o.click()));var o}function y(){for(var e=navigator.getGamepads(),t=0,n=e.length;t<n;t++){var a=e[t];if(a){var f=a.axes,m=f[0],g=f[1];m>r?T.setleftThumbstickRight(!0):m<-r?T.setleftThumbstickLeft(!0):g<-r?T.setleftThumbstickUp(!0):g>r?T.setleftThumbstickDown(!0):(T.setleftThumbstickLeft(!1),T.setleftThumbstickRight(!1),T.setleftThumbstickUp(!1),T.setleftThumbstickDown(!1));for(var p=a.buttons,l=0,h=p.length;l<h;l++)if(-1!==P.indexOf(l))if(p[l].pressed)switch(l){case c:T.setdPadUp(!0);break;case o:T.setdPadDown(!0);break;case s:T.setdPadLeft(!0);break;case u:T.setdPadRight(!0);break;case d:T.setgamepadA(!0);break;case i:T.setgamepadB(!0)}else switch(l){case c:T.getdPadUp()&&T.setdPadUp(!1);break;case o:T.getdPadDown()&&T.setdPadDown(!1);break;case s:T.getdPadLeft()&&T.setdPadLeft(!1);break;case u:T.getdPadRight()&&T.setdPadRight(!1);break;case d:T.getgamepadA()&&T.setgamepadA(!1);break;case i:T.getgamepadB()&&T.setgamepadB(!1)}}}G=requestAnimationFrame(y)}function B(){for(var e=navigator.getGamepads(),t=0,n=e.length;t<n;t++){var a=e[t];if(null!=a&&a.connected)return!0}return!1}function S(){B()&&document.hasFocus()&&(console.log("Gamepad connected! Starting input loop"),G||y())}function C(){B()&&document.hasFocus()?console.log("Gamepad disconnected! There are gamepads still connected."):(console.log("Gamepad disconnected! No other gamepads are connected, stopping input loop"),cancelAnimationFrame(G),G=void 0)}window.addEventListener("gamepaddisconnected",C),window.addEventListener("gamepadconnected",S),window.addEventListener("blur",C),window.addEventListener("focus",S),S(),window.navigator&&"string"==typeof window.navigator.gamepadInputEmulation&&(window.navigator.gamepadInputEmulation="gamepad")}}]);