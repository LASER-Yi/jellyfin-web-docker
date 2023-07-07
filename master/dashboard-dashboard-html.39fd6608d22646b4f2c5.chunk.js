"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[99706],{89853:function(t,i,s){s.r(i),i.default='<div id="dashboardPage" data-role="page" class="page type-interior dashboardHomePage fullWidthContent"> <div class="content-primary"> <div class="dashboardSections" style="padding-top:.5em"> <div class="dashboardColumn dashboardColumn-2-60 dashboardColumn-3-46"> <div class="dashboardSection"> <a is="emby-linkbutton" href="#/dashboardgeneral.html" class="button-flat sectionTitleTextButton"> <h3>${TabServer}</h3> <span class="material-icons chevron_right" aria-hidden="true"></span> </a> <div class="paperList" style="padding:1em"> <p id="serverName"></p> <p id="versionNumber"></p> </div> <div class="dashboardActionsContainer"> <button is="emby-button" type="button" class="raised btnRefresh"> <span>${ButtonScanAllLibraries}</span> </button> <button is="emby-button" type="button" id="btnRestartServer" class="raised hide" onclick="DashboardPage.restart(this)"> <span>${Restart}</span> </button> <button is="emby-button" type="button" id="btnShutdown" class="raised" onclick="DashboardPage.shutdown(this)"> <span>${ButtonShutdown}</span> </button> </div> <div style="margin-top:2em" class="runningTasksContainer hide"> <h3>${HeaderRunningTasks}</h3> <div id="divRunningTasks" class="paperList" style="padding:1em"> </div> </div> </div> <div class="dashboardSection"> <a is="emby-linkbutton" href="#/devices.html" class="button-flat sectionTitleTextButton"> <h3>${HeaderActiveDevices}</h3> <span class="material-icons chevron_right" aria-hidden="true"></span> </a> <div class="activeDevices itemsContainer vertical-wrap"> </div> </div> </div> <div class="dashboardColumn dashboardColumn-2-40 dashboardColumn-3-27"> <div class="dashboardSection"> <a is="emby-linkbutton" href="#/dashboard/activity?useractivity=true" class="button-flat sectionTitleTextButton"> <h3>${HeaderActivity}</h3> <span class="material-icons chevron_right" aria-hidden="true"></span> </a> <div class="paperList userActivityItems" data-activitylimit="7" data-useractivity="true"> </div> </div> </div> <div class="dashboardColumn dashboardColumn-3-27"> <div class="dashboardSection activeRecordingsSection hide"> <h3>${HeaderActiveRecordings}</h3> <div class="activeRecordingItems vertical-wrap" is="emby-itemscontainer"> </div> </div> <div class="dashboardSection serverActivitySection hide activityContainer"> <a is="emby-linkbutton" href="#/dashboard/activity?useractivity=false" class="button-flat sectionTitleTextButton"> <h3>${Alerts}</h3> <span class="material-icons chevron_right" aria-hidden="true"></span> </a> <div class="paperList serverActivityItems" data-activitylimit="4" data-useractivity="false"> </div> </div> <div class="dashboardSection"> <a is="emby-linkbutton" href="#/dashboardgeneral.html" class="button-flat sectionTitleTextButton"> <h3>${HeaderPaths}</h3> <span class="material-icons chevron_right" aria-hidden="true"></span> </a> <div class="paperList"> <div class="listItem listItem-border"> <div class="listItemBody two-line"> <div class="listItemBodyText secondary" style="margin:0">${LabelCache}</div> <div class="listItemBodyText" id="cachePath" dir="ltr" style="text-align:left"></div> </div> </div> <div class="listItem listItem-border"> <div class="listItemBody two-line"> <div class="listItemBodyText secondary" style="margin:0">${LabelLogs}</div> <div class="listItemBodyText" id="logPath" dir="ltr" style="text-align:left"></div> </div> </div> <div class="listItem listItem-border"> <div class="listItemBody two-line"> <div class="listItemBodyText secondary" style="margin:0">${LabelMetadata}</div> <div class="listItemBodyText" id="metadataPath" dir="ltr" style="text-align:left"></div> </div> </div> <div class="listItem listItem-border"> <div class="listItemBody two-line"> <div class="listItemBodyText secondary" style="margin:0">${LabelTranscodes}</div> <div class="listItemBodyText" id="transcodePath" dir="ltr" style="text-align:left"></div> </div> </div> <div class="listItem listItem-border"> <div class="listItemBody two-line"> <div class="listItemBodyText secondary" style="margin:0">${LabelWeb}</div> <div class="listItemBodyText" id="webPath" dir="ltr" style="text-align:left"></div> </div> </div> </div> </div> </div> </div> <div class="dashboardFooter"> <div style="height:1px" class="ui-bar-inherit"></div> <div style="margin-top:1em"> <a is="emby-linkbutton" rel="noopener noreferrer" class="button-link" href="https://jellyfin.org" target="_blank">Jellyfin</a> </div> </div> </div> </div> '}}]);