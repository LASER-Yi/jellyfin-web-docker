"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[30010,14044,39548,63365,94115,70594,22943,98574,59015,11136],{17240:function(e,a,n){n.d(a,{A:function(){return s}}),n(63696);var l=n(91785),t=n(62540);function s(e){var a=e.styles,n=e.defaultTheme,s=void 0===n?{}:n,r="function"==typeof a?function(e){return a(null==(n=e)||0===Object.keys(n).length?s:e);var n}:a;return(0,t.jsx)(l.mL,{styles:r})}},21:function(e,a,n){n.r(a),n.d(a,{DisplayPreferences:function(){return j}});var l=n(62540),t=n(94828),s=n(52502),r=n(37538),i=n(99797),o=n(36559),u=n(52974),c=n(71713),d=n(58765),p=n(11e3),b=n(99851),h=n(63696),y=n(22622),v=n(14847),g=n(88063),f=n(9482),m=n(34161),A=function(e,a){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var l,t,s=n.call(e),r=[];try{for(;(void 0===a||a-- >0)&&!(l=s.next()).done;)r.push(l.value)}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return r},x=function(e,a,n){if(n||2===arguments.length)for(var l,t=0,s=a.length;t<s;t++)!l&&t in a||(l||(l=Array.prototype.slice.call(a,0,t)),l[t]=a[t]);return e.concat(l||Array.prototype.slice.call(a))};function j(e){var a,n=e.onChange,j=e.values,C=(0,v.gf)().user,S=(0,m.useScreensavers)().screensavers,k=(0,g.U)().themes;return(0,l.jsxs)(d.A,{spacing:3,children:[(0,l.jsx)(b.A,{variant:"h2",children:f.Ay.translate("Display")}),y.g.supports("displaymode")&&(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(o.A,{id:"display-settings-layout-label",children:f.Ay.translate("LabelDisplayMode")}),(0,l.jsxs)(c.A,{"aria-describedby":"display-settings-layout-description",inputProps:{name:"layout"},labelId:"display-settings-layout-label",onChange:n,value:j.layout,children:[(0,l.jsx)(u.A,{value:"auto",children:f.Ay.translate("Auto")}),(0,l.jsx)(u.A,{value:"desktop",children:f.Ay.translate("Desktop")}),(0,l.jsx)(u.A,{value:"mobile",children:f.Ay.translate("Mobile")}),(0,l.jsx)(u.A,{value:"tv",children:f.Ay.translate("TV")}),(0,l.jsx)(u.A,{value:"experimental",children:f.Ay.translate("Experimental")})]}),(0,l.jsxs)(i.A,{component:d.A,id:"display-settings-layout-description",children:[(0,l.jsx)("span",{children:f.Ay.translate("DisplayModeHelp")}),(0,l.jsx)("span",{children:f.Ay.translate("LabelPleaseRestart")})]})]}),k.length>0&&(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(o.A,{id:"display-settings-theme-label",children:f.Ay.translate("LabelTheme")}),(0,l.jsxs)(c.A,{inputProps:{name:"theme"},labelId:"display-settings-theme-label",onChange:n,value:j.theme,children:x([],A(k.map((function(e){var a=e.id,n=e.name;return(0,l.jsx)(u.A,{value:a,children:n},a)}))),!1)})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-disable-css-description",control:(0,l.jsx)(t.A,{checked:j.disableCustomCss,onChange:n}),label:f.Ay.translate("DisableCustomCss"),name:"disableCustomCss"}),(0,l.jsx)(i.A,{id:"display-settings-disable-css-description",children:f.Ay.translate("LabelDisableCustomCss")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(p.A,{"aria-describedby":"display-settings-custom-css-description",value:j.customCss,label:f.Ay.translate("LabelCustomCss"),multiline:!0,name:"customCss",onChange:n}),(0,l.jsx)(i.A,{id:"display-settings-custom-css-description",children:f.Ay.translate("LabelLocalCustomCss")})]}),k.length>0&&(null===(a=null==C?void 0:C.Policy)||void 0===a?void 0:a.IsAdministrator)&&(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(o.A,{id:"display-settings-dashboard-theme-label",children:f.Ay.translate("LabelDashboardTheme")}),(0,l.jsxs)(c.A,{inputProps:{name:"dashboardTheme"},labelId:"display-settings-dashboard-theme-label",onChange:n,value:j.dashboardTheme,children:x([],A(k.map((function(e){var a=e.id,n=e.name;return(0,l.jsx)(u.A,{value:a,children:n},a)}))),!1)})]}),S.length>0&&y.g.supports("screensaver")&&(0,l.jsxs)(h.Fragment,{children:[(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(o.A,{id:"display-settings-screensaver-label",children:f.Ay.translate("LabelScreensaver")}),(0,l.jsxs)(c.A,{inputProps:{name:"screensaver"},labelId:"display-settings-screensaver-label",onChange:n,value:j.screensaver,children:x([],A(S.map((function(e){var a=e.id,n=e.name;return(0,l.jsx)(u.A,{value:a,children:n},a)}))),!1)})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(p.A,{"aria-describedby":"display-settings-screensaver-interval-description",value:j.screensaverInterval,inputProps:{inputMode:"numeric",max:"3600",min:"1",pattern:"[0-9]",required:!0,step:"1",type:"number"},label:f.Ay.translate("LabelBackdropScreensaverInterval"),name:"screensaverInterval",onChange:n}),(0,l.jsx)(i.A,{id:"display-settings-screensaver-interval-description",children:f.Ay.translate("LabelBackdropScreensaverIntervalHelp")})]})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-faster-animations-description",control:(0,l.jsx)(t.A,{checked:j.enableFasterAnimation,onChange:n}),label:f.Ay.translate("EnableFasterAnimations"),name:"enableFasterAnimation"}),(0,l.jsx)(i.A,{id:"display-settings-faster-animations-description",children:f.Ay.translate("EnableFasterAnimationsHelp")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-blurhash-description",control:(0,l.jsx)(t.A,{checked:j.enableBlurHash,onChange:n}),label:f.Ay.translate("EnableBlurHash"),name:"enableBlurHash"}),(0,l.jsx)(i.A,{id:"display-settings-blurhash-description",children:f.Ay.translate("EnableBlurHashHelp")})]})]})}},41365:function(e,a,n){n.r(a),n.d(a,{ItemDetailPreferences:function(){return d}});var l=n(62540),t=n(94828),s=n(52502),r=n(37538),i=n(99797),o=n(58765),u=n(99851),c=(n(63696),n(9482));function d(e){var a=e.onChange,n=e.values;return(0,l.jsxs)(o.A,{spacing:2,children:[(0,l.jsx)(u.A,{variant:"h2",children:c.Ay.translate("ItemDetails")}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-item-details-banner-description",control:(0,l.jsx)(t.A,{checked:n.enableItemDetailsBanner,onChange:a}),label:c.Ay.translate("EnableDetailsBanner"),name:"enableItemDetailsBanner"}),(0,l.jsx)(i.A,{id:"display-settings-item-details-banner-description",children:c.Ay.translate("EnableDetailsBannerHelp")})]})]})}},11816:function(e,a,n){n.r(a),n.d(a,{LibraryPreferences:function(){return p}});var l=n(62540),t=n(94828),s=n(52502),r=n(37538),i=n(99797),o=n(58765),u=n(11e3),c=n(99851),d=(n(63696),n(9482));function p(e){var a=e.onChange,n=e.values;return(0,l.jsxs)(o.A,{spacing:3,children:[(0,l.jsx)(c.A,{variant:"h2",children:d.Ay.translate("HeaderLibraries")}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(u.A,{"aria-describedby":"display-settings-lib-pagesize-description",inputProps:{type:"number",inputMode:"numeric",max:"1000",min:"0",pattern:"[0-9]",required:!0,step:"1"},value:n.libraryPageSize,label:d.Ay.translate("LabelLibraryPageSize"),name:"libraryPageSize",onChange:a}),(0,l.jsx)(i.A,{id:"display-settings-lib-pagesize-description",children:d.Ay.translate("LabelLibraryPageSizeHelp")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-lib-backdrops-description",control:(0,l.jsx)(t.A,{checked:n.enableLibraryBackdrops,onChange:a}),label:d.Ay.translate("Backdrops"),name:"enableLibraryBackdrops"}),(0,l.jsx)(i.A,{id:"display-settings-lib-backdrops-description",children:d.Ay.translate("EnableBackdropsHelp")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-lib-theme-songs-description",control:(0,l.jsx)(t.A,{checked:n.enableLibraryThemeSongs,onChange:a}),label:d.Ay.translate("ThemeSongs"),name:"enableLibraryThemeSongs"}),(0,l.jsx)(i.A,{id:"display-settings-lib-theme-songs-description",children:d.Ay.translate("EnableThemeSongsHelp")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-lib-theme-videos-description",control:(0,l.jsx)(t.A,{checked:n.enableLibraryThemeVideos,onChange:a}),label:d.Ay.translate("ThemeVideos"),name:"enableLibraryThemeVideos"}),(0,l.jsx)(i.A,{id:"display-settings-lib-theme-videos-description",children:d.Ay.translate("EnableThemeVideosHelp")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-show-missing-episodes-description",control:(0,l.jsx)(t.A,{checked:n.displayMissingEpisodes,onChange:a}),label:d.Ay.translate("DisplayMissingEpisodesWithinSeasons"),name:"displayMissingEpisodes"}),(0,l.jsx)(i.A,{id:"display-settings-show-missing-episodes-description",children:d.Ay.translate("DisplayMissingEpisodesWithinSeasonsHelp")})]})]})}},36042:function(e,a,n){n.r(a),n.d(a,{LocalizationPreferences:function(){return f}});var l=n(62540),t=n(52502),s=n(99797),r=n(36559),i=n(76007),o=n(52974),u=n(71713),c=n(58765),d=n(99851),p=(n(63696),n(22622)),b=n(98320),h=n(9482),y=n(25838),v=function(e,a){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var l,t,s=n.call(e),r=[];try{for(;(void 0===a||a-- >0)&&!(l=s.next()).done;)r.push(l.value)}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return r},g=function(e,a,n){if(n||2===arguments.length)for(var l,t=0,s=a.length;t<s;t++)!l&&t in a||(l||(l=Array.prototype.slice.call(a,0,t)),l[t]=a[t]);return e.concat(l||Array.prototype.slice.call(a))};function f(e){var a=e.onChange,n=e.values;return p.g.supports("displaylanguage")||b.Ay.supportsLocalization()?(0,l.jsxs)(c.A,{spacing:3,children:[(0,l.jsx)(d.A,{variant:"h2",children:h.Ay.translate("Localization")}),p.g.supports("displaylanguage")&&(0,l.jsxs)(t.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{id:"display-settings-language-label",children:h.Ay.translate("LabelDisplayLanguage")}),(0,l.jsxs)(u.A,{"aria-describedby":"display-settings-language-description",inputProps:{name:"language"},labelId:"display-settings-language-label",onChange:a,value:n.language,children:g([],v(y.LANGUAGE_OPTIONS.map((function(e){var a=e.value,n=e.label;return(0,l.jsx)(o.A,{value:a,children:n},a)}))),!1)}),(0,l.jsxs)(s.A,{component:c.A,id:"display-settings-language-description",children:[(0,l.jsx)("span",{children:h.Ay.translate("LabelDisplayLanguageHelp")}),p.g.supports("externallinks")&&(0,l.jsx)(i.A,{href:"https://github.com/jellyfin/jellyfin",rel:"noopener noreferrer",target:"_blank",children:h.Ay.translate("LearnHowYouCanContribute")})]})]}),b.Ay.supportsLocalization()&&(0,l.jsxs)(t.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{id:"display-settings-locale-label",children:h.Ay.translate("LabelDateTimeLocale")}),(0,l.jsxs)(u.A,{inputProps:{name:"dateTimeLocale"},labelId:"display-settings-locale-label",onChange:a,value:n.dateTimeLocale,children:g([],v(y.DATE_LOCALE_OPTIONS.map((function(e){var a=e.value,n=e.label;return(0,l.jsx)(o.A,{value:a,children:n},a)}))),!1)})]})]}):null}},19943:function(e,a,n){n.r(a),n.d(a,{NextUpPreferences:function(){return p}});var l=n(62540),t=n(94828),s=n(52502),r=n(37538),i=n(99797),o=n(58765),u=n(11e3),c=n(99851),d=(n(63696),n(9482));function p(e){var a=e.onChange,n=e.values;return(0,l.jsxs)(o.A,{spacing:3,children:[(0,l.jsx)(c.A,{variant:"h2",children:d.Ay.translate("NextUp")}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(u.A,{"aria-describedby":"display-settings-max-days-next-up-description",value:n.maxDaysForNextUp,inputProps:{type:"number",inputMode:"numeric",max:"1000",min:"0",pattern:"[0-9]",required:!0,step:"1"},label:d.Ay.translate("LabelMaxDaysForNextUp"),name:"maxDaysForNextUp",onChange:a}),(0,l.jsx)(i.A,{id:"display-settings-max-days-next-up-description",children:d.Ay.translate("LabelMaxDaysForNextUpHelp")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-next-up-rewatching-description",control:(0,l.jsx)(t.A,{checked:n.enableRewatchingInNextUp,onChange:a}),label:d.Ay.translate("EnableRewatchingNextUp"),name:"enableRewatchingInNextUp"}),(0,l.jsx)(i.A,{id:"display-settings-next-up-rewatching-description",children:d.Ay.translate("EnableRewatchingNextUpHelp")})]}),(0,l.jsxs)(s.A,{fullWidth:!0,children:[(0,l.jsx)(r.A,{"aria-describedby":"display-settings-next-up-images-description",control:(0,l.jsx)(t.A,{checked:n.episodeImagesInNextUp,onChange:a}),label:d.Ay.translate("UseEpisodeImagesInNextUp"),name:"episodeImagesInNextUp"}),(0,l.jsx)(i.A,{id:"display-settings-next-up-images-description",children:d.Ay.translate("UseEpisodeImagesInNextUpHelp")})]})]})}},25838:function(e,a,n){n.r(a),n.d(a,{DATE_LOCALE_OPTIONS:function(){return t},LANGUAGE_OPTIONS:function(){return l}});var l=[{value:"auto",label:n(9482).Ay.translate("Auto")},{value:"af",label:"Afrikaans"},{value:"ar",label:"العربية"},{value:"be-BY",label:"Беларуская"},{value:"bg-BG",label:"Български"},{value:"bn_BD",label:"বাংলা (বাংলাদেশ)"},{value:"ca",label:"Català"},{value:"cs",label:"Čeština"},{value:"cy",label:"Cymraeg"},{value:"da",label:"Dansk"},{value:"de",label:"Deutsch"},{value:"el",label:"Ελληνικά"},{value:"en-GB",label:"English (United Kingdom)"},{value:"en-US",label:"English"},{value:"eo",label:"Esperanto"},{value:"es",label:"Español"},{value:"es_419",label:"Español americano"},{value:"es-AR",label:"Español (Argentina)"},{value:"es_DO",label:"Español (Dominicana)"},{value:"es-MX",label:"Español (México)"},{value:"et",label:"Eesti"},{value:"eu",label:"Euskara"},{value:"fa",label:"فارسی"},{value:"fi",label:"Suomi"},{value:"fil",label:"Filipino"},{value:"fr",label:"Français"},{value:"fr-CA",label:"Français (Canada)"},{value:"gl",label:"Galego"},{value:"gsw",label:"Schwiizerdütsch"},{value:"he",label:"עִבְרִית"},{value:"hi-IN",label:"हिन्दी"},{value:"hr",label:"Hrvatski"},{value:"hu",label:"Magyar"},{value:"id",label:"Bahasa Indonesia"},{value:"is-IS",label:"Íslenska"},{value:"it",label:"Italiano"},{value:"ja",label:"日本語"},{value:"kk",label:"Qazaqşa"},{value:"ko",label:"한국어"},{value:"lt-LT",label:"Lietuvių"},{value:"lv",label:"Latviešu"},{value:"mk",label:"Македонски"},{value:"ml",label:"മലയാളം"},{value:"mr",label:"मराठी"},{value:"ms",label:"Bahasa Melayu"},{value:"nb",label:"Norsk bokmål"},{value:"ne",label:"नेपाली"},{value:"nl",label:"Nederlands"},{value:"nn",label:"Norsk nynorsk"},{value:"pa",label:"ਪੰਜਾਬੀ"},{value:"pl",label:"Polski"},{value:"pr",label:"Pirate"},{value:"pt",label:"Português"},{value:"pt-BR",label:"Português (Brasil)"},{value:"pt-PT",label:"Português (Portugal)"},{value:"ro",label:"Românește"},{value:"ru",label:"Русский"},{value:"sk",label:"Slovenčina"},{value:"sl-SI",label:"Slovenščina"},{value:"sq",label:"Shqip"},{value:"sr",label:"Српски"},{value:"sv",label:"Svenska"},{value:"ta",label:"தமிழ்"},{value:"te",label:"తెలుగు"},{value:"th",label:"ภาษาไทย"},{value:"tr",label:"Türkçe"},{value:"uk",label:"Українська"},{value:"ur_PK",label:" اُردُو"},{value:"vi",label:"Tiếng Việt"},{value:"zh-CN",label:"汉语 (简化字)"},{value:"zh-TW",label:"漢語 (繁体字)"},{value:"zh-HK",label:"廣東話 (香港)"}],t=l.filter((function(e){return"eu"!==e.value}))},47235:function(e,a,n){n.r(a),n.d(a,{useDisplaySettingForm:function(){return p}});var l=n(63696),t=n(9055),s=n(50764),r=n(9482),i=n(80724),o=function(){return o=Object.assign||function(e){for(var a,n=1,l=arguments.length;n<l;n++)for(var t in a=arguments[n])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e},o.apply(this,arguments)},u=function(e,a,n,l){return new(n||(n=Promise))((function(t,s){function r(e){try{o(l.next(e))}catch(e){s(e)}}function i(e){try{o(l.throw(e))}catch(e){s(e)}}function o(e){var a;e.done?t(e.value):(a=e.value,a instanceof n?a:new n((function(e){e(a)}))).then(r,i)}o((l=l.apply(e,a||[])).next())}))},c=function(e,a){var n,l,t,s,r={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(r=0)),r;)try{if(n=1,l&&(t=2&i[0]?l.return:i[0]?l.throw||((t=l.return)&&t.call(l),0):l.next)&&!(t=t.call(l,i[1])).done)return t;switch(l=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,l=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!((t=(t=r.trys).length>0&&t[t.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){r.label=i[1];break}if(6===i[0]&&r.label<t[1]){r.label=t[1],t=i;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(i);break}t[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(e,r)}catch(e){i=[6,e],l=0}finally{n=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},d=function(e,a){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var l,t,s=n.call(e),r=[];try{for(;(void 0===a||a-- >0)&&!(l=s.next()).done;)r.push(l.value)}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return r};function p(){var e=this,a=d((0,t.ok)(),1)[0],n=(0,i.useDisplaySettings)({userId:a.get("userId")}),p=n.displaySettings,b=n.loading,h=n.saveDisplaySettings,y=d((0,l.useState)(),2),v=y[0],g=y[1];(0,l.useEffect)((function(){b||!p||v||g(p)}),[v,b,p]);var f=(0,l.useCallback)((function(e){var a,n=e.name,l=e.value;v&&g(o(o({},v),((a={})[n]=l,a)))}),[v,g]),m=(0,l.useCallback)((function(){return u(e,void 0,void 0,(function(){return c(this,(function(e){switch(e.label){case 0:return v?[4,h(v)]:[3,2];case 1:e.sent(),(0,s.A)(r.Ay.translate("SettingsSaved")),e.label=2;case 2:return[2]}}))}))}),[v,h]);return{loading:b,values:v,submitChanges:m,updateField:f}}},80724:function(e,a,n){n.r(a),n.d(a,{useDisplaySettings:function(){return p}});var l=n(63696),t=n(22622),s=n(46782),r=n(14847),i=n(39641),o=n(82885),u=function(e,a,n,l){return new(n||(n=Promise))((function(t,s){function r(e){try{o(l.next(e))}catch(e){s(e)}}function i(e){try{o(l.throw(e))}catch(e){s(e)}}function o(e){var a;e.done?t(e.value):(a=e.value,a instanceof n?a:new n((function(e){e(a)}))).then(r,i)}o((l=l.apply(e,a||[])).next())}))},c=function(e,a){var n,l,t,s,r={label:0,sent:function(){if(1&t[0])throw t[1];return t[1]},trys:[],ops:[]};return s={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function i(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s&&(s=0,i[0]&&(r=0)),r;)try{if(n=1,l&&(t=2&i[0]?l.return:i[0]?l.throw||((t=l.return)&&t.call(l),0):l.next)&&!(t=t.call(l,i[1])).done)return t;switch(l=0,t&&(i=[2&i[0],t.value]),i[0]){case 0:case 1:t=i;break;case 4:return r.label++,{value:i[1],done:!1};case 5:r.label++,l=i[1],i=[0];continue;case 7:i=r.ops.pop(),r.trys.pop();continue;default:if(!((t=(t=r.trys).length>0&&t[t.length-1])||6!==i[0]&&2!==i[0])){r=0;continue}if(3===i[0]&&(!t||i[1]>t[0]&&i[1]<t[3])){r.label=i[1];break}if(6===i[0]&&r.label<t[1]){r.label=t[1],t=i;break}if(t&&r.label<t[2]){r.label=t[2],r.ops.push(i);break}t[2]&&r.ops.pop(),r.trys.pop();continue}i=a.call(e,r)}catch(e){i=[6,e],l=0}finally{n=t=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},d=function(e,a){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var l,t,s=n.call(e),r=[];try{for(;(void 0===a||a-- >0)&&!(l=s.next()).done;)r.push(l.value)}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return r};function p(e){var a=this,n=e.userId,t=d((0,l.useState)(!0),2),s=t[0],i=t[1],o=d((0,l.useState)(),2),p=o[0],y=o[1],v=d((0,l.useState)(),2),g=v[0],f=v[1],m=(0,r.gf)(),A=m.__legacyApiClient__,x=m.user;return(0,l.useEffect)((function(){if(n&&x&&A)return i(!0),u(a,void 0,void 0,(function(){var e;return c(this,(function(a){switch(a.label){case 0:return[4,b({api:A,currentUser:x,userId:n})];case 1:return e=a.sent(),f(e.displaySettings),y(e.userSettings),i(!1),[2]}}))})),function(){i(!1)}}),[A,x,n]),{displaySettings:g,loading:s,saveDisplaySettings:(0,l.useCallback)((function(e){return u(a,void 0,void 0,(function(){return c(this,(function(a){return n&&p&&A?[2,h({api:A,newDisplaySettings:e,userSettings:p,userId:n})]:[2]}))}))}),[A,p,n])}}function b(e){return u(this,arguments,void 0,(function(e){var a,n,l,t,r,i=e.currentUser,u=e.userId,d=e.api;return c(this,(function(e){switch(e.label){case 0:return a=u&&u!==(null==i?void 0:i.Id)?new o.UserSettings:o.currentSettings,u&&u!==(null==i?void 0:i.Id)?[3,1]:(l=i,[3,3]);case 1:return[4,d.getUser(u)];case 2:l=e.sent(),e.label=3;case 3:return n=l,[4,a.setUserInfo(u,d)];case 4:return e.sent(),[2,{displaySettings:{customCss:a.customCss(),dashboardTheme:a.dashboardTheme()||"auto",dateTimeLocale:a.dateTimeLocale()||"auto",disableCustomCss:Boolean(a.disableCustomCss()),displayMissingEpisodes:null!==(r=null===(t=null==n?void 0:n.Configuration)||void 0===t?void 0:t.DisplayMissingEpisodes)&&void 0!==r&&r,enableBlurHash:Boolean(a.enableBlurhash()),enableFasterAnimation:Boolean(a.enableFastFadein()),enableItemDetailsBanner:Boolean(a.detailsBanner()),enableLibraryBackdrops:Boolean(a.enableBackdrops()),enableLibraryThemeSongs:Boolean(a.enableThemeSongs()),enableLibraryThemeVideos:Boolean(a.enableThemeVideos()),enableRewatchingInNextUp:Boolean(a.enableRewatchingInNextUp()),episodeImagesInNextUp:Boolean(a.useEpisodeImagesInNextUpAndResume()),language:a.language()||"auto",layout:s.A.getSavedLayout()||"auto",libraryPageSize:a.libraryPageSize(),maxDaysForNextUp:a.maxDaysForNextUp(),screensaver:a.screensaver()||"none",screensaverInterval:a.backdropScreensaverInterval(),theme:a.theme()},userSettings:a}]}}))}))}function h(e){return u(this,arguments,void 0,(function(e){var a,n,l=e.api,r=e.newDisplaySettings,o=e.userSettings,u=e.userId;return c(this,(function(e){switch(e.label){case 0:return[4,l.getUser(u)];case 1:return a=e.sent(),t.g.supports("displaylanguage")&&o.language(y(r.language)),o.customCss(y(r.customCss)),o.dashboardTheme(y(r.dashboardTheme)),o.dateTimeLocale(y(r.dateTimeLocale)),o.disableCustomCss(r.disableCustomCss),o.enableBlurhash(r.enableBlurHash),o.enableFastFadein(r.enableFasterAnimation),o.detailsBanner(r.enableItemDetailsBanner),o.enableBackdrops(r.enableLibraryBackdrops),o.enableThemeSongs(r.enableLibraryThemeSongs),o.enableThemeVideos(r.enableLibraryThemeVideos),o.enableRewatchingInNextUp(r.enableRewatchingInNextUp),o.useEpisodeImagesInNextUpAndResume(r.episodeImagesInNextUp),o.libraryPageSize(r.libraryPageSize),o.maxDaysForNextUp(r.maxDaysForNextUp),o.screensaver(y(r.screensaver)),o.backdropScreensaverInterval(r.screensaverInterval),o.theme(r.theme),s.A.setLayout(y(r.layout)),n=[i.A.setTheme(o.theme())],a.Id&&a.Configuration&&(a.Configuration.DisplayMissingEpisodes=r.displayMissingEpisodes,n.push(l.updateUserConfiguration(a.Id,a.Configuration))),[4,Promise.all(n)];case 2:return e.sent(),[2]}}))}))}function y(e){return/^(auto|none)$/.test(e)?"":e}},34161:function(e,a,n){n.r(a),n.d(a,{useScreensavers:function(){return c}});var l=n(63696),t=n(38829),s=n(66176),r=n(9482),i=function(){return i=Object.assign||function(e){for(var a,n=1,l=arguments.length;n<l;n++)for(var t in a=arguments[n])Object.prototype.hasOwnProperty.call(a,t)&&(e[t]=a[t]);return e},i.apply(this,arguments)},o=function(e,a){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var l,t,s=n.call(e),r=[];try{for(;(void 0===a||a-- >0)&&!(l=s.next()).done;)r.push(l.value)}catch(e){t={error:e}}finally{try{l&&!l.done&&(n=s.return)&&n.call(s)}finally{if(t)throw t.error}}return r},u=function(e,a,n){if(n||2===arguments.length)for(var l,t=0,s=a.length;t<s;t++)!l&&t in a||(l||(l=Array.prototype.slice.call(a,0,t)),l[t]=a[t]);return e.concat(l||Array.prototype.slice.call(a))};function c(){var e=(0,l.useMemo)((function(){var e=t.X.ofType(s.Q.Screensaver).map((function(e){return i(i({},e),{name:r.Ay.translate(e.name)})}));return u([{id:"none",name:r.Ay.translate("None"),type:s.Q.Screensaver}],o(e),!1)}),[]);return{screensavers:null!=e?e:[]}}},2833:function(e,a,n){n.r(a),n.d(a,{default:function(){return v}});var l=n(62540),t=n(77890),s=n(58765),r=n(63696),i=n(7397),o=n(9482),u=n(21),c=n(41365),d=n(11816),p=n(36042),b=n(19943),h=n(47235),y=n(79142);function v(){var e=(0,h.useDisplaySettingForm)(),a=e.loading,n=e.submitChanges,v=e.updateField,g=e.values,f=(0,r.useCallback)((function(e){e.preventDefault(),n()}),[n]),m=(0,r.useCallback)((function(e){var a=e.target,n=a.name,l="checkbox"===a.type?a.checked:a.value;(null==g?void 0:g[n])!==l&&v({name:n,value:l})}),[v,g]);return a||!g?(0,l.jsx)(y.A,{}):(0,l.jsx)(i.A,{className:"libraryPage userPreferencesPage noSecondaryNavPage",id:"displayPreferencesPage",title:o.Ay.translate("Display"),children:(0,l.jsx)("div",{className:"settingsContainer padded-left padded-right padded-bottom-page",children:(0,l.jsx)("form",{onSubmit:f,style:{margin:"auto"},children:(0,l.jsxs)(s.A,{spacing:4,children:[(0,l.jsx)(p.LocalizationPreferences,{onChange:m,values:g}),(0,l.jsx)(u.DisplayPreferences,{onChange:m,values:g}),(0,l.jsx)(d.LibraryPreferences,{onChange:m,values:g}),(0,l.jsx)(b.NextUpPreferences,{onChange:m,values:g}),(0,l.jsx)(c.ItemDetailPreferences,{onChange:m,values:g}),(0,l.jsx)(t.A,{type:"submit",size:"large",children:o.Ay.translate("Save")})]})})})})}},7397:function(e,a,n){var l=n(62540),t=n(63696),s=n(62156);a.A=function(e){var a=e.children,n=e.id,r=e.className,i=void 0===r?"":r,o=e.title,u=e.isBackButtonEnabled,c=void 0===u||u,d=e.isMenuButtonEnabled,p=void 0!==d&&d,b=e.isNowPlayingBarEnabled,h=void 0===b||b,y=e.isThemeMediaSupported,v=void 0!==y&&y,g=e.backDropType,f=(0,t.useRef)(null);return(0,t.useEffect)((function(){s.A.hideView()}),[]),(0,t.useEffect)((function(){var e,a,n,l,t={bubbles:!0,cancelable:!1,detail:{isRestored:!1,options:{enableMediaControl:h,supportsThemeMedia:v}}};null===(e=f.current)||void 0===e||e.dispatchEvent(new CustomEvent("viewbeforeshow",t)),null===(a=f.current)||void 0===a||a.dispatchEvent(new CustomEvent("pagebeforeshow",t)),null===(n=f.current)||void 0===n||n.dispatchEvent(new CustomEvent("viewshow",t)),null===(l=f.current)||void 0===l||l.dispatchEvent(new CustomEvent("pageshow",t))}),[f,h,v]),(0,l.jsx)("div",{ref:f,id:n,"data-role":"page",className:"page ".concat(i),"data-title":o,"data-backbutton":c,"data-menubutton":p,"data-backdroptype":g,children:a})}}}]);