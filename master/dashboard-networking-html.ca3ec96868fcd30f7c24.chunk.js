"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[19926],{92451:function(e,i,t){t.r(i),i.default='<div id="networkingPage" data-role="page" class="page type-interior advancedConfigurationPage" data-title="${TabNetworking}"> <div> <div class="content-primary"> <form class="dashboardHostingForm"> <div class="verticalSection verticalSection-extrabottompadding"> <div class="sectionTitleContainer flex align-items-center"> <h2 class="sectionTitle">${TabNetworking}</h2> </div> <fieldset class="verticalSection verticalSection-extrabottompadding"> <legend><h3>${HeaderServerAddressSettings}</h3></legend> <div class="inputContainer"> <input is="emby-input" type="number" id="txtPortNumber" label="${LabelLocalHttpServerPortNumber}" pattern="[0-9]*" required="required" min="1" max="65535"/> <div class="fieldDescription">${LabelLocalHttpServerPortNumberHelp}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkEnableHttps"/> <span>${LabelEnableHttps}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableHttpsHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="number" id="txtHttpsPort" pattern="[0-9]*" required="required" min="1" max="65535" label="${LabelHttpsPort}"/> <div class="fieldDescription">${LabelHttpsPortHelp}</div> </div> <div class="inputContainer fldBaseUrl"> <input is="emby-input" id="txtBaseUrl" type="text" label="${LabelBaseUrl}"/> <div class="fieldDescription">${LabelBaseUrlHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="text" id="txtLocalAddress" label="${LabelBindToLocalNetworkAddress}"/> <div class="fieldDescription">${LabelBindToLocalNetworkAddressHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="text" id="txtLanNetworks" label="${LabelLanNetworks}"/> <div class="fieldDescription">${LanNetworksHelp}</div> </div> <div class="inputContainer"> <input is="emby-input" type="text" id="txtKnownProxies" label="${LabelKnownProxies}"/> <div class="fieldDescription">${KnownProxiesHelp}</div> </div> </fieldset> <fieldset class="verticalSection verticalSection-extrabottompadding"> <legend><h3>${HeaderHttpsSettings}</h3></legend> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkRequireHttps"/> <span>${LabelRequireHttps}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelRequireHttpsHelp}</div> </div> <div class="inputContainer fldCertificatePath"> <div style="display:flex;align-items:center"> <div style="flex-grow:1"> <input is="emby-input" type="text" id="txtCertificatePath" label="${LabelCustomCertificatePath}" autocomplete="off"/> </div> <button type="button" is="paper-icon-button-light" id="btnSelectCertPath" title="${ButtonSelectDirectory}" class="emby-input-iconbutton"><span class="material-icons search" aria-hidden="true"></span></button> </div> <div class="fieldDescription">${LabelCustomCertificatePathHelp}</div> </div> <div class="inputContainer fldCertPassword"> <input is="emby-input" id="txtCertPassword" type="password" label="${LabelCertificatePassword}" autocomplete="new-password"/> <div class="fieldDescription">${LabelCertificatePasswordHelp}</div> </div> </fieldset> <fieldset class="verticalSection verticalSection-extrabottompadding"> <legend><h3>${HeaderRemoteAccessSettings}</h3></legend> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkRemoteAccess"/> <span>${AllowRemoteAccess}</span> </label> <div class="fieldDescription checkboxFieldDescription">${AllowRemoteAccessHelp}</div> </div> <div class="inputContainer fldExternalAddressFilter hide"> <input is="emby-input" type="text" id="txtExternalAddressFilter" label="${LabelAllowedRemoteAddresses}"/> <div class="fieldDescription">${AllowedRemoteAddressesHelp}</div> </div> <div class="selectContainer fldExternalAddressFilterMode hide"> <select is="emby-select" id="selectExternalAddressFilterMode" label="${LabelAllowedRemoteAddressesMode}"> <option value="whitelist">${Whitelist}</option> <option value="blacklist">${Blacklist}</option> </select> </div> <div class="checkboxContainer checkboxContainer-withDescription fldEnableUpnp hide"> <label> <input type="checkbox" is="emby-checkbox" id="chkEnableUpnp"/> <span>${LabelEnableAutomaticPortMap}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableAutomaticPortMapHelp}</div> </div> <div class="inputContainer fldPublicHttpPort hide"> <input is="emby-input" type="number" label="${LabelPublicHttpPort}" id="txtPublicHttpPort" pattern="[0-9]*" required="required" min="1" max="65535"/> <div class="fieldDescription">${LabelPublicHttpPortHelp}</div> </div> <div class="inputContainer fldPublicHttpsPort hide"> <input is="emby-input" type="number" id="txtPublicHttpsPort" pattern="[0-9]*" required="required" min="1" max="65535" label="${LabelPublicHttpsPort}"/> <div class="fieldDescription">${LabelPublicHttpsPortHelp}</div> </div> </fieldset> <fieldset class="verticalSection verticalSection-extrabottompadding"> <legend><h3>${HeaderNetworking}</h3></legend> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkEnableIP4"/> <span>${LabelEnableIP4}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableIP4Help}</div> </div> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkEnableIP6"/> <span>${LabelEnableIP6}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelEnableIP6Help}</div> </div> </fieldset> <fieldset class="verticalSection verticalSection-extrabottompadding hide"> <legend><h3>${HeaderAutoDiscovery}</h3></legend> <div class="checkboxContainer checkboxContainer-withDescription"> <label> <input type="checkbox" is="emby-checkbox" id="chkAutodiscovery"/> <span>${LabelAutomaticDiscovery}</span> </label> <div class="fieldDescription checkboxFieldDescription">${LabelAutomaticDiscoveryHelp}</div> </div> </fieldset> <fieldset class="verticalSection verticalSection-extrabottompadding"> <legend><h3>${HeaderPortRanges}</h3></legend> <div class="inputContainer"> <input is="emby-input" type="text" id="txtPublishedServer" label="${LabelPublishedServerUri}"/> <div class="fieldDescription">${LabelPublishedServerUriHelp}</div> </div> </fieldset> </div> <div> <button is="emby-button" type="submit" class="raised button-submit block"> <span>${Save}</span> </button> </div> </form> </div> </div> </div> '}}]);