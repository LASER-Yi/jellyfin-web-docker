"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9865],{20496:function(e,t,i){i.r(t),t.default='<div id="itemDetailPage" data-role="page" class="page libraryPage itemDetailPage noSecondaryNavPage selfBackdropPage" data-backbutton="true"> <div id="itemBackdrop" class="itemBackdrop"></div> <div class="detailLogo"></div> <div class="detailPageWrapperContainer padded-bottom-page"> <div class="detailPagePrimaryContainer padded-left padded-right"> <div class="infoWrapper"> <div class="detailImageContainer padded-left"></div> <div class="nameContainer"></div> <div class="itemMiscInfo itemMiscInfo-primary" style="margin-bottom:.6em"></div> <div class="itemMiscInfo itemMiscInfo-secondary" style="margin-bottom:.6em"></div> </div> <div class="mainDetailButtons focuscontainer-x"> <button is="emby-button" type="button" class="button-flat btnPlay hide detailButton raised" title="${ButtonResume}" data-action="resume"> <div class="detailButton-content"> <span class="material-icons detailButton-icon play_arrow"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnReplay hide detailButton" title="${Play}" data-action="play"> <div class="detailButton-content"> <span class="material-icons detailButton-icon replay"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnDownload hide detailButton" title="${Download}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon get_app"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnPlayTrailer hide detailButton" title="${ButtonTrailer}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon theaters"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnInstantMix hide detailButton" title="${HeaderInstantMix}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon explore"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnShuffle hide detailButton" title="${Shuffle}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon shuffle"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnCancelSeriesTimer hide detailButton" title="${CancelSeries}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon delete"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnCancelTimer hide detailButton" title="${StopRecording}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon stop"></span> </div> </button> <button is="emby-playstatebutton" type="button" class="button-flat btnPlaystate hide detailButton" title=""> <div class="detailButton-content"> <span class="material-icons detailButton-icon check"></span> </div> </button> <button is="emby-ratingbutton" type="button" class="button-flat btnUserRating hide detailButton" title="${Rate}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon favorite"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnSplitVersions hide detailButton" title="${ButtonSplit}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon call_split"></span> </div> </button> <button is="emby-button" type="button" class="button-flat btnMoreCommands hide detailButton" title="${ButtonMore}"> <div class="detailButton-content"> <span class="material-icons detailButton-icon more_vert"></span> </div> </button> </div> </div> <div class="detailPageSecondaryContainer"> <div class="detailPageContent"> <div class="detailPagePrimaryContent padded-right"> <div class="detailSection"> <div class="itemMiscInfo nativeName hide"></div> <form class="trackSelections hide focuscontainer-x"> <div class="selectContainer selectSourceContainer hide trackSelectionFieldContainer flex-shrink-zero"> <select is="emby-select" class="selectSource detailTrackSelect" label=""></select> </div> <div class="selectContainer selectVideoContainer hide trackSelectionFieldContainer flex-shrink-zero"> <select is="emby-select" class="selectVideo detailTrackSelect" label=""></select> </div> <div class="selectContainer selectAudioContainer hide trackSelectionFieldContainer flex-shrink-zero"> <select is="emby-select" class="selectAudio detailTrackSelect" label=""></select> </div> <div class="selectContainer selectSubtitlesContainer hide trackSelectionFieldContainer flex-shrink-zero"> <select is="emby-select" class="selectSubtitles detailTrackSelect" label=""></select> </div> </form> <div class="recordingFields hide" style="margin:.5em 0 1.5em"></div> <div class="detailSectionContent"> <div class="itemLastPlayed hide"></div> <p class="itemGenres"></p> <h3 class="tagline"></h3> <p class="overview"></p> <div class="overview-controls"> <a class="overview-expand hide" is="emby-linkbutton" href="#">${ShowMore}</a> </div> <p id="itemBirthday"></p> <p id="itemBirthLocation"></p> <p id="itemDeathDate"></p> <p id="seriesAirTime"></p> <div class="itemTags focuscontainer-x hide" style="margin:.7em 0;font-size:92%"></div> <div class="itemExternalLinks focuscontainer-x hide" style="margin:.7em 0;font-size:92%"></div> <div class="seriesRecordingEditor"></div> </div> <div class="itemDetailsGroup"> <div class="detailsGroupItem genresGroup hide"> <div class="genresLabel label"></div> <div class="genres content focuscontainer-x"></div> </div> <div class="detailsGroupItem directorsGroup hide"> <div class="directorsLabel label"></div> <div class="directors content focuscontainer-x"></div> </div> <div class="detailsGroupItem writersGroup hide"> <div class="writersLabel label"></div> <div class="writers content focuscontainer-x"></div> </div> </div> </div> </div> <div class="seriesTimerScheduleSection verticalSection detailVerticalSection hide" style="margin-top:-3em"> <h2 class="sectionTitle">${Schedule}</h2> <div class="seriesTimerSchedule padded-right"></div> </div> <div class="collectionItems hide"></div> <div class="nextUpSection verticalSection detailVerticalSection hide"> <h2 class="sectionTitle sectionTitle-cards">${NextUp}</h2> <div is="emby-itemscontainer" class="nextUpItems vertical-wrap padded-right"></div> </div> <div class="programGuideSection hide verticalSection detailVerticalSection"> <div class="programGuide"></div> </div> <div id="childrenCollapsible" class="hide verticalSection detailVerticalSection"> <h2 class="childrenSectionHeader sectionTitle sectionTitle-cards hide"> <span id="childrenTitle"></span> </h2> <div id="childrenContent"> <div is="emby-itemscontainer" class="childrenItemsContainer itemsContainer padded-right" style="text-align:left"></div> </div> </div> <div id="additionalPartsCollapsible" class="verticalSection detailVerticalSection hide"> <h2 class="sectionTitle sectionTitle-cards padded-right">${HeaderAdditionalParts}</h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div id="additionalPartsContent" is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer"></div> </div> </div> <div class="verticalSection detailVerticalSection moreFromSeasonSection hide"> <h2 class="sectionTitle sectionTitle-cards padded-right"></h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer"></div> </div> </div> <div class="verticalSection detailVerticalSection moreFromArtistSection hide"> <h2 class="sectionTitle sectionTitle-cards padded-right"></h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer"></div> </div> </div> <div id="castCollapsible" class="verticalSection detailVerticalSection hide"> <h2 id="peopleHeader" class="sectionTitle sectionTitle-cards padded-right">${HeaderCastAndCrew}</h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div id="castContent" is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer"></div> </div> </div> <div id="seriesScheduleSection" class="verticalSection detailVerticalSection hide"> <h2 class="sectionTitle padded-right">${HeaderUpcomingOnTV}</h2> <div id="seriesScheduleList" is="emby-itemscontainer" class="itemsContainer vertical-list padded-right"></div> </div> <div id="specialsCollapsible" class="verticalSection detailVerticalSection hide"> <h2 class="sectionTitle sectionTitle-cards padded-right">${SpecialFeatures}</h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div id="specialsContent" is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer"></div> </div> </div> <div id="musicVideosCollapsible" class="verticalSection detailVerticalSection hide"> <h2 class="sectionTitle sectionTitle-cards padded-right">${MusicVideos}</h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div id="musicVideosContent" is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer"></div> </div> </div> <div id="scenesCollapsible" class="verticalSection detailVerticalSection verticalSection-extrabottompadding hide"> <h2 class="sectionTitle sectionTitle-cards padded-right">${HeaderScenes}</h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div id="scenesContent" is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer"></div> </div> </div> <div id="similarCollapsible" class="verticalSection detailVerticalSection verticalSection-extrabottompadding hide"> <h2 class="sectionTitle sectionTitle-cards padded-right">${HeaderMoreLikeThis}</h2> <div is="emby-scroller" class="padded-top-focusscale padded-bottom-focusscale" data-centerfocus="true"> <div is="emby-itemscontainer" class="scrollSlider focuscontainer-x itemsContainer similarContent"></div> </div> </div> </div> </div> </div> </div> '}}]);