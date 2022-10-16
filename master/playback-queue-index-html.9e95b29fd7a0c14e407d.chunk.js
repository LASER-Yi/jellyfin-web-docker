"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9040],{39143:function(t,a,n){n.r(a),a.default='<div id="nowPlayingPage" data-role="page" class="page libraryPage nowPlayingPage noSecondaryNavPage selfBackdropPage" data-title="-"> <div class="remoteControlContent padded-left padded-right"> <div class="nowPlayingInfoContainer"> <div class="nowPlayingPageImageContainer"></div> <div class="nowPlayingInfoControls"> <div class="infoContainer flex"> <div class="nowPlayingInfoContainerMedia"> <h2 class="nowPlayingPageTitle"></h2> <div style="font-weight:700" class="nowPlayingSongName nowPlayingEpisode"></div> <div class="nowPlayingAlbum nowPlayingSeason"></div> <div class="nowPlayingArtist nowPlayingSerie"></div> </div> <div class="nowPlayingPageUserDataButtonsTitle"></div> </div> <div class="sliderContainer flex" dir="ltr"> <div class="positionTime"></div> <div class="nowPlayingPositionSliderContainer"> <input type="range" is="emby-slider" pin step="1" min="0" max="100" value="0" class="nowPlayingPositionSlider" data-slider-keep-progress="true"/> </div> <div class="runtime"></div> </div> <div class="nowPlayingButtonsContainer focuscontainer-x justify-content-space-between"> <div class="nowPlayingInfoButtons" dir="ltr"> <button is="paper-icon-button-light" class="btnCommand btnRepeat repeatToggleButton autoSize" title="${Repeat}" data-command="SetRepeatMode"> <span class="material-icons repeat" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnRewind btnNowPlayingRewind btnPlayStateCommand autoSize" title="${Rewind}"> <span class="material-icons replay_10" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnPreviousTrack btnPlayStateCommand autoSize" title="${ButtonPreviousTrack}"> <span class="material-icons skip_previous" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnPlayPause btnPlayStateCommand autoSize" title="${ButtonPause}"> <span class="material-icons pause_circle_filled" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnPlayStateCommand btnStop autoSize" title="${ButtonStop}"> <span class="material-icons stop" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnPlayStateCommand btnNextTrack autoSize" title="${ButtonNextTrack}"> <span class="material-icons skip_next" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnPlayStateCommand btnFastForward btnNowPlayingFastForward autoSize" title="${FastForward}"> <span class="material-icons forward_30" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnShuffleQueue autoSize" title="${Shuffle}"> <span class="material-icons shuffle" aria-hidden="true"></span> </button> </div> <div class="nowPlayingSecondaryButtons"> <button is="paper-icon-button-light" class="btnAudioTracks videoButton btnPlayStateCommand autoSize" title="${ButtonAudioTracks}" data-command="GoToSearch"> <span class="material-icons audiotrack" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnSubtitles videoButton btnPlayStateCommand autoSize" title="${Subtitles}" data-command="GoToSearch"> <span class="material-icons closed_caption" aria-hidden="true"></span> </button> <div class="nowPlayingPageUserDataButtons"></div> <button is="paper-icon-button-light" class="btnToggleFullscreen videoButton btnPlayStateCommand autoSize" title="${ButtonFullscreen}" data-command="ToggleFullscreen"> <span class="material-icons fullscreen" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnShuffleQueue autoSize" title="${Shuffle}"> <span class="material-icons shuffle" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnCommand btnRepeat repeatToggleButton autoSize" title="${Repeat}" data-command="SetRepeatMode"> <span class="material-icons repeat" aria-hidden="true"></span> </button> </div> </div> </div> </div> <div class="remoteControlSection"> <div class="navigationSection"> <div is="emby-collapse" title="${HeaderNavigation}"> <div class="collapseContent"> <div> <button is="paper-icon-button-light" class="btnArrowUp btnCommand autoSize button-submit" title="${Up}" data-command="MoveUp"> <span class="material-icons keyboard_arrow_up" aria-hidden="true"></span> </button> </div> <br/> <div> <button is="paper-icon-button-light" class="btnArrowLeft btnCommand autoSize button-submit" title="${ButtonArrowLeft}" data-command="MoveLeft"> <span class="material-icons keyboard_arrow_left" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnOk btnCommand autoSize button-submit" title="${ButtonOk}" data-command="Select"> <span class="material-icons keyboard_return" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnArrowRight btnCommand autoSize button-submit" title="${ButtonArrowRight}" data-command="MoveRight"> <span class="material-icons keyboard_arrow_right" aria-hidden="true"></span> </button> </div> <br/> <div> <button is="paper-icon-button-light" class="btnBack btnCommand autoSize" title="${ButtonBack}" data-command="Back"> <span class="material-icons arrow_back" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnArrowDown btnCommand autoSize button-submit" title="${Down}" data-command="MoveDown"> <span class="material-icons keyboard_arrow_down" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnContextMenu btnCommand autoSize" title="${ButtonInfo}" data-command="ToggleContextMenu"> <span class="material-icons menu" aria-hidden="true"></span> </button> </div> <br/> <div> <button is="paper-icon-button-light" class="btnGoHome btnCommand autoSize" title="${Home}" data-command="GoHome"> <span class="material-icons home" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnShowSearch btnCommand autoSize" title="${Search}" data-command="GoToSearch"> <span class="material-icons search" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="bthShowSettings btnCommand autoSize" title="${Settings}" data-command="GoToSettings"> <span class="material-icons settings" aria-hidden="true"></span> </button> </div> </div> </div> </div> <div class="sendMessageSection"> <div is="emby-collapse" title="${HeaderSendMessage}"> <div class="collapseContent" style="text-align:left"> <form class="sendMessageForm"> <div class="inputContainer"> <input is="emby-input" class="sendMessageElement" type="text" id="txtMessageTitle" label="${LabelMessageTitle}" required/> </div> <br/> <div class="inputContainer"> <input is="emby-input" class="sendMessageElement" type="text" id="txtMessageText" label="${LabelMessageText}" required/> </div> <p> <button is="emby-button" class="sendMessageElement button-submit block raised" type="submit" raised>${ButtonSend}</button> </p> </form> </div> </div> </div> <div class="sendTextSection"> <div is="emby-collapse" title="${HeaderTypeText}"> <div class="collapseContent" style="text-align:left"> <form class="typeTextForm"> <div class="inputContainer"> <input is="emby-input" class="typeTextElement" type="text" id="txtTypeText" label="${LabelTypeText}" required/> </div> <p> <button is="emby-button" class="typeTextElement button-submit block raised" type="submit" raised>${ButtonSend}</button> </p> </form> </div> </div> </div> </div> <div class="playlistSection"> <div class="playlistSectionButton flex align-items-center justify-content-center focuscontainer-x"> <button id="togglePlaylist" is="paper-icon-button-light" class="btnTogglePlaylist hide" title="${ButtonTogglePlaylist}"> <span class="material-icons queue_music" aria-hidden="true"></span> </button> <button is="paper-icon-button-light" class="btnSavePlaylist hide" title="${Save}"> <span class="material-icons save" aria-hidden="true"></span> </button> <button id="toggleContextMenu" is="paper-icon-button-light" class="btnToggleContextMenu" title="${ButtonMore}"> <span class="material-icons more_vert" aria-hidden="true"></span> </button> </div> <div id="playlist" class="playlist itemsContainer vertical-list nowPlayingPlaylist hide" is="emby-itemscontainer" data-dragreorder="true"></div> </div> </div> </div> '}}]);