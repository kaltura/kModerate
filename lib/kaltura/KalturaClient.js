/**
 * The Kaltura Client - this is the facade through which all service actions should be called.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
function KalturaClient(config){
	this.init(config);
}
KalturaClient.inheritsFrom (KalturaClientBase);
KalturaClient.prototype.apiVersion = "3.1.3";
/**
 * Add & Manage Access Controls
 * @param KalturaAccessControlService
 */
KalturaClient.prototype.accessControl = null;
/**
 * Manage details for the administrative user
 * @param KalturaAdminUserService
 */
KalturaClient.prototype.adminUser = null;
/**
 * Base Entry Service
 * @param KalturaBaseEntryService
 */
KalturaClient.prototype.baseEntry = null;
/**
 * Bulk upload service is used to upload & manage bulk uploads using CSV files
 * @param KalturaBulkUploadService
 */
KalturaClient.prototype.bulkUpload = null;
/**
 * Add & Manage Categories
 * @param KalturaCategoryService
 */
KalturaClient.prototype.category = null;
/**
 * Manage the connection between Conversion Profiles and Asset Params
 * @param KalturaConversionProfileAssetParamsService
 */
KalturaClient.prototype.conversionProfileAssetParams = null;
/**
 * Add & Manage Conversion Profiles
 * @param KalturaConversionProfileService
 */
KalturaClient.prototype.conversionProfile = null;
/**
 * Data service lets you manage data content (textual content)
 * @param KalturaDataService
 */
KalturaClient.prototype.data = null;
/**
 * Document service
 *	DEPRECATED
 * @param KalturaDocumentService
 */
KalturaClient.prototype.document = null;
/**
 * EmailIngestionProfile service lets you manage email ingestion profile records
 * @param KalturaEmailIngestionProfileService
 */
KalturaClient.prototype.EmailIngestionProfile = null;
/**
 * Retrieve information and invoke actions on Flavor Asset
 * @param KalturaFlavorAssetService
 */
KalturaClient.prototype.flavorAsset = null;
/**
 * Add & Manage Flavor Params
 * @param KalturaFlavorParamsService
 */
KalturaClient.prototype.flavorParams = null;
/**
 * Live Stream service lets you manage live stream channels
 * @param KalturaLiveStreamService
 */
KalturaClient.prototype.liveStream = null;
/**
 * Media service lets you upload and manage media files (images / videos & audio)
 * @param KalturaMediaService
 */
KalturaClient.prototype.media = null;
/**
 * A Mix is an XML unique format invented by Kaltura, it allows the user to create a mix of videos and images, in and out points, transitions, text overlays, soundtrack, effects and much more...
 *	Mixing service lets you create a new mix, manage its metadata and make basic manipulations.   
 * @param KalturaMixingService
 */
KalturaClient.prototype.mixing = null;
/**
 * Notification Service
 * @param KalturaNotificationService
 */
KalturaClient.prototype.notification = null;
/**
 * partner service allows you to change/manage your partner personal details and settings as well
 * @param KalturaPartnerService
 */
KalturaClient.prototype.partner = null;
/**
 * PermissionItem service lets you create and manage permission items
 * @param KalturaPermissionItemService
 */
KalturaClient.prototype.permissionItem = null;
/**
 * Permission service lets you create and manage user permissions
 * @param KalturaPermissionService
 */
KalturaClient.prototype.permission = null;
/**
 * Playlist service lets you create,manage and play your playlists
 *	Playlists could be static (containing a fixed list of entries) or dynamic (baseed on a filter)
 * @param KalturaPlaylistService
 */
KalturaClient.prototype.playlist = null;
/**
 * api for getting reports data by the report type and some inputFilter
 * @param KalturaReportService
 */
KalturaClient.prototype.report = null;
/**
 * Search service allows you to search for media in various media providers
 *	This service is being used mostly by the CW component
 * @param KalturaSearchService
 */
KalturaClient.prototype.search = null;
/**
 * Session service
 * @param KalturaSessionService
 */
KalturaClient.prototype.session = null;
/**
 * Stats Service
 * @param KalturaStatsService
 */
KalturaClient.prototype.stats = null;
/**
 * Storage Profiles service
 * @param KalturaStorageProfileService
 */
KalturaClient.prototype.storageProfile = null;
/**
 * Add & Manage Syndication Feeds
 * @param KalturaSyndicationFeedService
 */
KalturaClient.prototype.syndicationFeed = null;
/**
 * System service is used for internal system helpers & to retrieve system level information
 * @param KalturaSystemService
 */
KalturaClient.prototype.system = null;
/**
 * Retrieve information and invoke actions on Thumb Asset
 * @param KalturaThumbAssetService
 */
KalturaClient.prototype.thumbAsset = null;
/**
 * Add & Manage Thumb Params
 * @param KalturaThumbParamsService
 */
KalturaClient.prototype.thumbParams = null;
/**
 * UiConf service lets you create and manage your UIConfs for the various flash components
 *	This service is used by the KMC-ApplicationStudio
 * @param KalturaUiConfService
 */
KalturaClient.prototype.uiConf = null;
/**
 * 
 * @param KalturaUploadService
 */
KalturaClient.prototype.upload = null;
/**
 * 
 * @param KalturaUploadTokenService
 */
KalturaClient.prototype.uploadToken = null;
/**
 * UserRole service lets you create and manage user roles
 * @param KalturaUserRoleService
 */
KalturaClient.prototype.userRole = null;
/**
 * Manage partner users on Kaltura's side
 *	The userId in kaltura is the unique Id in the partner's system, and the [partnerId,Id] couple are unique key in kaltura's DB
 * @param KalturaUserService
 */
KalturaClient.prototype.user = null;
/**
 * widget service for full widget management
 * @param KalturaWidgetService
 */
KalturaClient.prototype.widget = null;
/**
 * Internal Service is used for actions that are used internally in Kaltura applications and might be changed in the future without any notice.
 * @param KalturaXInternalService
 */
KalturaClient.prototype.xInternal = null;
/**
 * Metadata service
 * @param KalturaMetadataService
 */
KalturaClient.prototype.metadata = null;
/**
 * Metadata Profile service
 * @param KalturaMetadataProfileService
 */
KalturaClient.prototype.metadataProfile = null;
/**
 * Document service lets you upload and manage document files
 * @param KalturaDocumentsService
 */
KalturaClient.prototype.documents = null;
/**
 * Audit Trail service
 * @param KalturaAuditTrailService
 */
KalturaClient.prototype.auditTrail = null;
/**
 * Virus scan profile service
 * @param KalturaVirusScanProfileService
 */
KalturaClient.prototype.virusScanProfile = null;
/**
 * Distribution Profile service
 * @param KalturaDistributionProfileService
 */
KalturaClient.prototype.distributionProfile = null;
/**
 * Entry Distribution service
 * @param KalturaEntryDistributionService
 */
KalturaClient.prototype.entryDistribution = null;
/**
 * Distribution Provider service
 * @param KalturaDistributionProviderService
 */
KalturaClient.prototype.distributionProvider = null;
/**
 * Generic Distribution Provider service
 * @param KalturaGenericDistributionProviderService
 */
KalturaClient.prototype.genericDistributionProvider = null;
/**
 * Generic Distribution Provider Actions service
 * @param KalturaGenericDistributionProviderActionService
 */
KalturaClient.prototype.genericDistributionProviderAction = null;
/**
 * Annotation service - Video Annotation
 * @param KalturaAnnotationService
 */
KalturaClient.prototype.annotation = null;
/**
 * Short link service
 * @param KalturaShortLinkService
 */
KalturaClient.prototype.shortLink = null;
/**
 * DropFolder service lets you create and manage drop folders
 * @param KalturaDropFolderService
 */
KalturaClient.prototype.dropFolder = null;
/**
 * DropFolderFile service lets you create and manage drop folder files
 * @param KalturaDropFolderFileService
 */
KalturaClient.prototype.dropFolderFile = null;
/**
 * TVCom service
 * @param KalturaTvComService
 */
KalturaClient.prototype.tvCom = null;
/**
 * Kaltura Sharepoint Extension Service
 *	@service sharepointExtension
 * @param KalturaSharepointExtensionService
 */
KalturaClient.prototype.sharepointExtension = null;
/**
 * The client constructor.
 * @param config the Kaltura configuration object holding partner credentials (type: KalturaConfiguration).
 */
KalturaClient.prototype.init = function(config){
	//call the super constructor:
	KalturaClientBase.prototype.init.apply(this, arguments);
	//initialize client services:
	this.accessControl = new KalturaAccessControlService(this);
	this.adminUser = new KalturaAdminUserService(this);
	this.baseEntry = new KalturaBaseEntryService(this);
	this.bulkUpload = new KalturaBulkUploadService(this);
	this.category = new KalturaCategoryService(this);
	this.conversionProfileAssetParams = new KalturaConversionProfileAssetParamsService(this);
	this.conversionProfile = new KalturaConversionProfileService(this);
	this.data = new KalturaDataService(this);
	this.document = new KalturaDocumentService(this);
	this.EmailIngestionProfile = new KalturaEmailIngestionProfileService(this);
	this.flavorAsset = new KalturaFlavorAssetService(this);
	this.flavorParams = new KalturaFlavorParamsService(this);
	this.liveStream = new KalturaLiveStreamService(this);
	this.media = new KalturaMediaService(this);
	this.mixing = new KalturaMixingService(this);
	this.notification = new KalturaNotificationService(this);
	this.partner = new KalturaPartnerService(this);
	this.permissionItem = new KalturaPermissionItemService(this);
	this.permission = new KalturaPermissionService(this);
	this.playlist = new KalturaPlaylistService(this);
	this.report = new KalturaReportService(this);
	this.search = new KalturaSearchService(this);
	this.session = new KalturaSessionService(this);
	this.stats = new KalturaStatsService(this);
	this.storageProfile = new KalturaStorageProfileService(this);
	this.syndicationFeed = new KalturaSyndicationFeedService(this);
	this.system = new KalturaSystemService(this);
	this.thumbAsset = new KalturaThumbAssetService(this);
	this.thumbParams = new KalturaThumbParamsService(this);
	this.uiConf = new KalturaUiConfService(this);
	this.upload = new KalturaUploadService(this);
	this.uploadToken = new KalturaUploadTokenService(this);
	this.userRole = new KalturaUserRoleService(this);
	this.user = new KalturaUserService(this);
	this.widget = new KalturaWidgetService(this);
	this.xInternal = new KalturaXInternalService(this);
	this.metadata = new KalturaMetadataService(this);
	this.metadataProfile = new KalturaMetadataProfileService(this);
	this.documents = new KalturaDocumentsService(this);
	this.auditTrail = new KalturaAuditTrailService(this);
	this.virusScanProfile = new KalturaVirusScanProfileService(this);
	this.distributionProfile = new KalturaDistributionProfileService(this);
	this.entryDistribution = new KalturaEntryDistributionService(this);
	this.distributionProvider = new KalturaDistributionProviderService(this);
	this.genericDistributionProvider = new KalturaGenericDistributionProviderService(this);
	this.genericDistributionProviderAction = new KalturaGenericDistributionProviderActionService(this);
	this.annotation = new KalturaAnnotationService(this);
	this.shortLink = new KalturaShortLinkService(this);
	this.dropFolder = new KalturaDropFolderService(this);
	this.dropFolderFile = new KalturaDropFolderFileService(this);
	this.tvCom = new KalturaTvComService(this);
	this.sharepointExtension = new KalturaSharepointExtensionService(this);
}
