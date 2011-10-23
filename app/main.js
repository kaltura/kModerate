Ext.setup({
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false
});

/* register the model for content items */
var entryModel = Ext.regModel('Entry', {
    fields: ['entryId', 'firstName', 'moderationStatus', 'description', 'tags', 'strModerationStatus', 'playerHtml', 'userId']
});

var kModerate = new Ext.Application({
	
	name: 'Kaltura Moderate',
    tabletStartupScreen: 'tablet_startup.png',
    phoneStartupScreen: 'phone_startup.png',
    icon: 'icon.png',
    glossOnIcon: false,
    useLoadMask: true,
    
    vars: {
		debug: false,
		ks: null,
		host: 'https://www.kaltura.com',
		viewingEntryId: null,
		moderationCurrentAction: null,
		rememberMeChecked: false
	},
    
	myLog : function(msg){
		if(kModerate.vars.debug)
		{
			console.log(msg);
		}
	},
	
    launch : function() {

		documentCookies = document.cookie.split(";");
		for (i=0;i<documentCookies.length;i++)
		{
		  x=documentCookies[i].substr(0,documentCookies[i].indexOf("="));
		  y=documentCookies[i].substr(documentCookies[i].indexOf("=")+1);
		  x=x.replace(/^\s+|\s+$/g,"");
		  if(x == 'kmoderateLogin')
		  {
			kModerate.vars.ks = y;  
		  }
		  if(x == 'kmoderateHost')
		  {
			kModerate.vars.host = y;  
		  }
		}
	    /* create toolbar component */
		kModerate.myTopToolbar = new Ext.Toolbar({
		    dock : 'top',
		    title: 'kModerate',
		    defaults: {
		    	iconMask: true,
		    	ui: 'plain',
			},
		    // buttons on the top toolbar:
		    items: [ kModerateButtons.backButton, { xtype: 'spacer' }, kModerateButtons.aboutButton ] 
		});

	    /* create toolbar component */
		kModerate.myToolbar = new Ext.Toolbar({
		    dock : 'bottom',
		    //title: 'kModerate',
		    defaults: {
		    	iconMask: true,
		    	ui: 'light',
			},
			ui: 'light',
		    // buttons on the bottom toolbar:
		    items: [ kModerateButtons.refreshButton, kModerateButtons.approveButton, kModerateButtons.rejectButton, { xtype: 'spacer' }, kModerateButtons.logoutButton ] 
		});
		if(!kModerate.vars.ks)
		{
			activeItem = getLoginPanel();
		}
		else
		{
			// @TODO - set active panel for 
			activeItem = getEntryList();
		}
			
		kModerate.myPanel = new Ext.Panel({
		    dockedItems: [kModerate.myTopToolbar, kModerate.myToolbar], // top toolbar dock
		    fullscreen : true,
		    layout: 'card',
		    cardSwitchAnimation: 'slide',
		    items: [ activeItem ] // elements in the main viewport
		});
		
	}
});

var kModerateButtons = {
		
	hideAllButtons : function(){
		kModerateButtons.rejectButton.hide();
		kModerateButtons.approveButton.hide();
		kModerateButtons.backButton.hide();
		kModerateButtons.refreshButton.hide();
	},
	aboutButton : new Ext.Button({
		text: '?',
	   	handler: function(){
			kModerate.myPanel.setActiveItem(getAboutPanel());
			kModerateButtons.backButton.show();
			kModerateButtons.aboutButton.hide();
			kModerate.myPanel.cardSwitchAnimation = {type: 'slide', direction: 'right'};
		} 
	}),
	
	logoutButton : new Ext.Button({
		text: 'Logout',
		ui: 'round',
		handler: function(){
			removeKsCookie();
			kModerate.myPanel.setActiveItem(getLoginPanel());
		}
	}),
	
	backButton : new Ext.Button({
		iconCls: 'reply',
		hidden: true,
		handler: function(){
			kModerateButtons.hideAllButtons();
			kModerateButtons.aboutButton.show();
			kModerate.myPanel.setActiveItem(getEntryList());
			kModerate.myPanel.cardSwitchAnimation = {type: 'slide', direction: 'left'};
		}
	}),
	
	refreshButton : new Ext.Button({
		iconCls: 'refresh',
		hidden: true,
		handler: function(){
			getEntriesData();
			kModeratePanels.updatedEntriesData = 'neverRequested';
			kModerate.myPanel.setActiveItem(kModeratePanels.entryListUpdatingPanel);
			changeEntryListPanel();
		}
	}),
	
	approveButton : new Ext.Button({
		text: 'Approve',
		hidden: true,
		handler: approveEntry
	}),
	rejectButton : new Ext.Button({
		text: 'Reject',
		hidden: true,
		handler: rejectEntry
	})
};

var entryListItemTpl = ' \
	<div class="entryInList">\
		<div class="left">\
			<img src="http://cdnbakmi.kaltura.com/p/9008/sp/900800/thumbnail/entry_id/{entryId}/width/40/height/30" width="40" height="30" />\
		</div>\
		<div class="right">\
			<strong>{firstName}</strong>\
			<span>{strModerationStatus}</span>\
		</div>\
		<div class="clear"></div>\
	</div>';

var aboutPageContent = '\
	<div id="aboutPage">\
		<strong>About kModerate</strong>\
		<p>kModerate lets you perform moderation actions, on pending moderation/flagged for review entries in your Kaltura account, directly from your mobile device.</p>\
		<p>You login to kModerate using your KMC credentials, and kModerate will list all the entries that needs to be moderated.</p>\
		<p>Once you select an entry, you are presented with the entry details and have the ability to play the video in order to decide whether to reject or approve the entry.</p>\
		<hr />\
		<strong>Technology</strong>\
		<p>kModerate is implemented using <a href="http://sencha.com">Sencha Touch</a>, for iOS look & feel, and Kaltura&apos;s <a href="http://www.kaltura.com/api_v3/testme/client-libs.php">JS Client Library</a></p>\
		<p>You can add the app to your home screen by tapping the &apos;actions&apos; icon.</p>\
		<hr />\
		<strong>Security</strong>\
		<p>kModerate performs, by default, all API calls to Kaltura over HTTPS.</p>\
		<p>kModerate uses admin KS so it is important to set the Kaltura host URL to HTTPS so your KS and KMC credentials are not compromised.</p>\
		<hr />\
		<strong>Confidentiality</strong>\
		<p>kModerate does not store any of the credentials that are being passed through the application.</p>\
		<p>In fact, all communication is done from your device directly to Kaltura, and the server on which kModerate is hosted does nothing but serve the application files.</p>\
	</div>\
'; 
var kModerateElements = {
		rememberMeCheckBox : new Ext.form.Checkbox({
			name: 'rememberme',
			id: 'remembermebox',
			label: 'Remember',
			value: true,
			defaults:
			{
				labelWidth: '50%',
				labelAlign: 'left'
			}
		})
};
kModerateElements.rememberMeCheckBox.on('check', function(){
	kModerate.myLog('rememberme checked');
	kModerate.vars.rememberMeChecked = true;
});
kModerateElements.rememberMeCheckBox.on('uncheck', function(){
	kModerate.myLog('rememberme unchecked');
	kModerate.vars.rememberMeChecked = false;
});
var kModeratePanels = {
	loginPanel : new Ext.form.FormPanel({
    	title: 'Login',
		fullscreen: true,
		id: "loginForm",
		submitOnAction: true,
		submit: function(){
			loginClickHandler();
		},
		scroll: 'vertical',
		items : [{
				hidden: 'true',
				id: 'login-error-wrapper',
				html: '<span id="login-error">Login Failed</span>'
			},{
				xtype: 'fieldset',
				title: 'Login',
				instructions: 'Login using your KMC credentials',
				defaults: {
					labelWidth: '35%',
					labelAlign: 'left',
					maxHeight: '20px'
				},
				items: [{
					xtype: 'emailfield',
					name: 'email',
					label: 'Email',
					useClearIcon: true
				},{
					xtype: 'passwordfield',
					name: 'password',
					label: 'Password',
					useClearIcon: true
				},kModerateElements.rememberMeCheckBox
				]
		    },{
				xtype: 'fieldset',
				instructions: 'Change the Kaltura Host URL for working with self-hosted edition',
				defaults: {
					labelWidth: '100%',
					labelAlign: 'top',
					maxHeight: '20px'
				},
				items: [{
					xtype: 'urlfield',
					name: 'kalturahost',
					label: 'Kaltura Host',
					value: 'https://www.kaltura.com',
					maxHeight: '20px'
				}
				]
			},{
				layout: 'vbox',
				defaults: {xtype: 'button', flex: 1},
				items: [{
					text: "Login",
					scope: this,
					ui: 'action',
					id: 'loginFormSubmit',
					hasDisabled: false,
					handler: loginClickHandler
				}]
		    }
	    ]
	}),
	
	entryEmptyListPanel : new Ext.Panel({
    	title: 'No Results',
		fullscreen: true,
		html: '<div id="emptyList">There are no entries pending moderation in your account...</div>'
	}),
	
	entryListUpdatingPanel : new Ext.Panel({
    	title: 'Fetching Entries',
		fullscreen: true,
		html: '<div id="updatingList">Updating list...</div>'
	}),
	
	entryListPanel : new Ext.List({
		itemTpl: entryListItemTpl,
		singleSelect: true,
        grouped: false,
        indexBar: false,
        allowDeselect: true,
        store: new Ext.data.Store({
            model: 'Entry',
            sorters: 'moderationStatus',
	
            getGroupString : function(record) {
                return record.get('moderationStatus')[0];
            }
        })
    }),
    
    updatedEntriesData : 'neverRequested',
    
	aboutPanel : new Ext.Panel({
    	title: 'About kModerate',
		fullscreen: true,
		scroll: 'vertical',
		html: aboutPageContent
	}),
	
	entryDisplayPanel : new Ext.Panel({
		title: 'Moderate Entry',
		fullscreen: true,
		scroll: 'vertical'
	})
};
kModeratePanels.entryListPanel.on('selectionchange', loadEntryPage);

function approveEntry()
{
	if(!kModerate.vars.viewingEntryId) return false;
	kModerate.vars.moderationCurrentAction = 'approved';
	var kClient = getKalturaClient();
	kClient.media.approve(moderationChangeCallback, kModerate.vars.viewingEntryId);
}

function rejectEntry()
{
	if(!kModerate.vars.viewingEntryId) return false;
	kModerate.vars.moderationCurrentAction = 'rejected';
	var kClient = getKalturaClient();
	kClient.media.reject(moderationChangeCallback, kModerate.vars.viewingEntryId);
}

function moderationChangeCallback(success, data)
{
	if(data && data.code && data.code != 'undefined') // if no output to API call - no data returned??
	{
		kModerate.myLog('failed to change entry moderation status');
		return false;
	}

	alert('entry ' +kModerate.vars.viewingEntryId+ ' ' +kModerate.vars.moderationCurrentAction);
	
	kModerate.vars.moderationCurrentAction = null;

	// resetting viewing entry ID
	kModerate.vars.viewingEntryId = null;
	// changing view to entry list panel
	getEntriesData();
	kModeratePanels.updatedEntriesData = 'neverRequested';
	kModerate.myPanel.setActiveItem(kModeratePanels.entryListUpdatingPanel);
	changeEntryListPanel();
	
	kModerateButtons.approveButton.hide();
	kModerateButtons.rejectButton.hide();
	kModerateButtons.backButton.hide();
	kModerateButtons.aboutButton.show();
	kModerate.myPanel.cardSwitchAnimation = {type: 'slide', direction: 'left'};
}

function getEntryPageTpl()
{

	someHtml = '\
<div class="entryModerationDetails">\
	<p><strong>Name:</strong> {firstName}</p>\
	<p><strong>Entry ID:</strong> {entryId}</p>\
	<p><strong>Moderation Status:</strong> {strModerationStatus}</p>\
	<p><strong>Description:</strong> {description}</p>\
	<p><strong>User ID:</strong> {userId}</p>\
	<p><strong>Tags:</strong> {tags}</p>\
	<p>{playerHtml}</p>\
</div>';
	template = new Ext.Template(someHtml);
	
	return template;
}

function getPlayerEmbed(partnerId, entryId)
{
	
	width = Ext.Element.getViewportWidth()*0.75;
	height = (width*0.75);
	
	/*width = 200;
	height = 150;*/
	html  = '<div class="kalturaPlayer" id="kaltura_container_'+entryId+'">';
	html += '<iframe src="http://cdnakmi.kaltura.org/apis/html5lib/mwEmbed/mwEmbedFrame.php/wid/_';
	html += partnerId+'/uiconf_id/48501/entry_id/'+entryId+'/?flashvars%5Bks%5D='+kModerate.vars.ks+'" width="'+width+'" height="'+height+'" frameborder="0"></iframe>';
	html += '</div>';
	return html;
}
function loadEntryPage(model, records)
{
	if(records.length == 0)return false;
	record = records[0];
	kModerate.vars.viewingEntryId = record.data.entryId;
	template = getEntryPageTpl();
	html = template.apply(record.data);
	kModeratePanels.entryDisplayPanel.update(html);
    kModerate.myPanel.setActiveItem(kModeratePanels.entryDisplayPanel);
    kModerateButtons.backButton.show();
    kModerateButtons.refreshButton.hide();
    kModerateButtons.approveButton.show();
    kModerateButtons.rejectButton.show();
    kModerateButtons.aboutButton.hide();
    kModerate.myPanel.cardSwitchAnimation = {type: 'slide', direction: 'right'};
}

function loginClickHandler()
{
	var button = Ext.getCmp('loginFormSubmit');
	button.disable();
	var form = Ext.getCmp('loginForm');
	var email = form.getValues().email;
	var password = form.getValues().password;
	var host = form.getValues().kalturahost;
	if(host != kModerate.vars.host)
	{
		kModerate.vars.host = host;
	}
	login(email, password);
}

function getAboutPanel()
{
	kModerateButtons.refreshButton.hide();
	return kModeratePanels.aboutPanel;
}

function getLoginPanel()
{
	kModerateButtons.hideAllButtons();
	kModerateButtons.logoutButton.hide();
	return kModeratePanels.loginPanel;
}

function getEntryList()
{
	if(!kModerate.vars.ks) return getLoginPanel();
	kModerateButtons.refreshButton.show();
	kModerateButtons.logoutButton.show();
	kModerateButtons.aboutButton.show();
	getEntriesData();
	if(kModeratePanels.updatedEntriesData == 'neverRequested') 
	{
		var t = setTimeout('changeEntryListPanel()', 500);
		return kModeratePanels.entryListUpdatingPanel;
	}
	
	if(!kModeratePanels.updatedEntriesData) return kModeratePanels.entryEmptyListPanel;

	kModeratePanels.entryListPanel.store.loadData(kModeratePanels.updatedEntriesData, false);
	kModeratePanels.entryListPanel.refresh();
	return kModeratePanels.entryListPanel;
}

function changeEntryListPanel()
{
	kModerate.myLog('checking status and deciding');
	if(kModeratePanels.updatedEntriesData == 'neverRequested') var t = setTimeout('changeEntryListPanel()', 500);
	else 
	{
		kModeratePanels.entryListPanel.store.loadData(kModeratePanels.updatedEntriesData, false);
		kModeratePanels.entryListPanel.refresh();
		kModerateButtons.refreshButton.show();
		kModerate.myPanel.setActiveItem(kModeratePanels.entryListPanel);
	}
}

function getKalturaClient()
{
	kClient = null;
	kConfig = null;
	if(kClient) kClient.callsQueue = new Array();
	var kConfig = new KalturaConfiguration(null);
	kConfig.partnerId = null; // force the client to not send partner ID in the request
	kConfig.serviceUrl = kModerate.vars.host;
	var kClient = new KalturaClient(kConfig);	
	kClient.callsQueue = new Array();
	if(kModerate.vars.ks)
	{
		kClient.setKs(kModerate.vars.ks);
	}
	return kClient;
}

function login(email, password)
{
	var kClient = getKalturaClient();
	kClient.user.loginByLoginId(loginCallback, email, password, null);
}

function setKsCookie()
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() + 30);
	var c_value=kModerate.vars.ks + "; expires="+exdate.toUTCString();
	document.cookie='kmoderateLogin' + "=" + c_value;
	
	var c_host_value = kModerate.vars.host + "; expires="+exdate.toUTCString();
	document.cookie='kmoderateHost' + "=" + c_host_value;
}
function removeKsCookie()
{
	var exdate=new Date();
	exdate.setDate(exdate.getDate() - 1);
	var c_value= "; expires="+exdate.toUTCString();
	document.cookie='kmoderateLogin' + "=" + c_value;
	var c_host_value = "; expires="+exdate.toUTCString();
	document.cookie='kmoderateHost' + "=" + c_host_value;
}

function loginCallback(success, data)
{
	if(data.code && data.code != 'undefined')
	{
		var wrapper = Ext.getCmp('login-error-wrapper');
		wrapper.show();
		var button = Ext.getCmp('loginFormSubmit');
		button.enable();		
		return false;
	}
	kModerate.vars.ks = data;
	if(kModerate.vars.rememberMeChecked)
	{
		setKsCookie();
	}
	kModerate.myPanel.setActiveItem(getEntryList());
}

function moderationStatusToText(status)
{
	mods = {
		1: 'Pending Moderation',
		2: 'Approved',
		3: 'Rejected',
		5: 'Flagged for Review'
	};
	return mods[status];
}

function getEntriesData()
{
	var kConfig;
	var kClient;
	var entriesData = new Array();
	function startSession(){
		kModerate.myLog('setting the client and ks');
		kClient = getKalturaClient();
		listEntries(1, 'moderationStatusIn', "1,5"); // list entries pending moderation (1) and flagged for moderation (5)
	}

	function listEntries(page, filterKey, filterValue, sortOrder, success, error) {
		kModerate.myLog('going to call list entries');
		var entryFilter = new KalturaBaseEntryFilter();
		entryFilter.typeEqual = 1;
		entryFilter[filterKey] = filterValue;
		entryFilter.statusEqual = KalturaEntryStatus.READY;
		entryFilter.orderBy = '+createdAt';
	
		var kalturaPager = new KalturaFilterPager();
		kalturaPager.pageSize = 10;
		kalturaPager.pageIndex = page;
		kClient.baseEntry.listAction(getEntrieListHandler, entryFilter, kalturaPager);
	}
	function getEntrieListHandler (success, data) {
		entriesData.length = 0;		
		count = 0;
		if(data.totalCount > 0)
		{
			for(i in data.objects)
			{
				if(!data.objects[i].id)
				{
					continue;
				}
				entry = data.objects[i];
				entriesData[count] = {
					entryId: entry.id, 
					firstName: entry.name, 
					moderationStatus: entry.moderationStatus,
					description: entry.description,
					tags: entry.tags,
					strModerationStatus: moderationStatusToText(entry.moderationStatus),
					playerHtml: getPlayerEmbed(entry.partnerId, entry.id),
					userId: entry.userId
				};
				count++;
			}
		}
		else
		{
			kModerate.myLog('no entries for moderation');
			kModeratePanels.updatedEntriesData = false;
		}
		if(entriesData.length == 0)
		{
			kModerate.myLog('no data');
			kModeratePanels.updatedEntriesData = false;
		}
		
		kModeratePanels.updatedEntriesData = entriesData;
	}
	
	startSession();
	
	return true;
}
