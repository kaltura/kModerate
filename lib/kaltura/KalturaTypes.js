
function KalturaAccessControlOrderBy(){
}
KalturaAccessControlOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAccessControlOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaAdminUserOrderBy(){
}
KalturaAdminUserOrderBy.ID_ASC = "+id";
KalturaAdminUserOrderBy.ID_DESC = "-id";
KalturaAdminUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAdminUserOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaAnnotationOrderBy(){
}
KalturaAnnotationOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAnnotationOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAnnotationOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAnnotationOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaApiActionPermissionItemOrderBy(){
}
KalturaApiActionPermissionItemOrderBy.ID_ASC = "+id";
KalturaApiActionPermissionItemOrderBy.ID_DESC = "-id";
KalturaApiActionPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaApiActionPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaApiActionPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaApiActionPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaApiParameterPermissionItemAction(){
}
KalturaApiParameterPermissionItemAction.READ = "read";
KalturaApiParameterPermissionItemAction.UPDATE = "update";
KalturaApiParameterPermissionItemAction.INSERT = "insert";

function KalturaApiParameterPermissionItemOrderBy(){
}
KalturaApiParameterPermissionItemOrderBy.ID_ASC = "+id";
KalturaApiParameterPermissionItemOrderBy.ID_DESC = "-id";
KalturaApiParameterPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaApiParameterPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaApiParameterPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaAssetOrderBy(){
}
KalturaAssetOrderBy.SIZE_ASC = "+size";
KalturaAssetOrderBy.SIZE_DESC = "-size";
KalturaAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaAssetParamsOrderBy(){
}

function KalturaAssetParamsOrigin(){
}
KalturaAssetParamsOrigin.CONVERT = 0;
KalturaAssetParamsOrigin.INGEST = 1;
KalturaAssetParamsOrigin.CONVERT_WHEN_MISSING = 2;

function KalturaAssetParamsOutputOrderBy(){
}

function KalturaAudioCodec(){
}
KalturaAudioCodec.NONE = "";
KalturaAudioCodec.MP3 = "mp3";
KalturaAudioCodec.AAC = "aac";
KalturaAudioCodec.VORBIS = "vorbis";
KalturaAudioCodec.WMA = "wma";
KalturaAudioCodec.COPY = "copy";

function KalturaAuditTrailAction(){
}
KalturaAuditTrailAction.CREATED = "CREATED";
KalturaAuditTrailAction.COPIED = "COPIED";
KalturaAuditTrailAction.CHANGED = "CHANGED";
KalturaAuditTrailAction.DELETED = "DELETED";
KalturaAuditTrailAction.VIEWED = "VIEWED";
KalturaAuditTrailAction.CONTENT_VIEWED = "CONTENT_VIEWED";
KalturaAuditTrailAction.FILE_SYNC_CREATED = "FILE_SYNC_CREATED";
KalturaAuditTrailAction.RELATION_ADDED = "RELATION_ADDED";
KalturaAuditTrailAction.RELATION_REMOVED = "RELATION_REMOVED";

function KalturaAuditTrailContext(){
}
KalturaAuditTrailContext.CLIENT = -1;
KalturaAuditTrailContext.SCRIPT = 0;
KalturaAuditTrailContext.PS2 = 1;
KalturaAuditTrailContext.API_V3 = 2;

function KalturaAuditTrailFileSyncType(){
}
KalturaAuditTrailFileSyncType.FILE = 1;
KalturaAuditTrailFileSyncType.LINK = 2;
KalturaAuditTrailFileSyncType.URL = 3;

function KalturaAuditTrailObjectType(){
}
KalturaAuditTrailObjectType.ACCESS_CONTROL = "accessControl";
KalturaAuditTrailObjectType.ADMIN_KUSER = "adminKuser";
KalturaAuditTrailObjectType.BATCH_JOB = "BatchJob";
KalturaAuditTrailObjectType.CATEGORY = "category";
KalturaAuditTrailObjectType.CONVERSION_PROFILE_2 = "conversionProfile2";
KalturaAuditTrailObjectType.EMAIL_INGESTION_PROFILE = "EmailIngestionProfile";
KalturaAuditTrailObjectType.ENTRY = "entry";
KalturaAuditTrailObjectType.FILE_SYNC = "FileSync";
KalturaAuditTrailObjectType.FLAVOR_ASSET = "flavorAsset";
KalturaAuditTrailObjectType.FLAVOR_PARAMS = "flavorParams";
KalturaAuditTrailObjectType.FLAVOR_PARAMS_CONVERSION_PROFILE = "flavorParamsConversionProfile";
KalturaAuditTrailObjectType.FLAVOR_PARAMS_OUTPUT = "flavorParamsOutput";
KalturaAuditTrailObjectType.KSHOW = "kshow";
KalturaAuditTrailObjectType.KSHOW_KUSER = "KshowKuser";
KalturaAuditTrailObjectType.KUSER = "kuser";
KalturaAuditTrailObjectType.MEDIA_INFO = "mediaInfo";
KalturaAuditTrailObjectType.MODERATION = "moderation";
KalturaAuditTrailObjectType.PARTNER = "Partner";
KalturaAuditTrailObjectType.ROUGHCUT = "roughcutEntry";
KalturaAuditTrailObjectType.SYNDICATION = "syndicationFeed";
KalturaAuditTrailObjectType.UI_CONF = "uiConf";
KalturaAuditTrailObjectType.UPLOAD_TOKEN = "UploadToken";
KalturaAuditTrailObjectType.WIDGET = "widget";
KalturaAuditTrailObjectType.METADATA = "Metadata";
KalturaAuditTrailObjectType.METADATA_PROFILE = "MetadataProfile";
KalturaAuditTrailObjectType.USER_LOGIN_DATA = "UserLoginData";
KalturaAuditTrailObjectType.USER_ROLE = "UserRole";
KalturaAuditTrailObjectType.PERMISSION = "Permission";

function KalturaAuditTrailOrderBy(){
}
KalturaAuditTrailOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaAuditTrailOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaAuditTrailOrderBy.PARSED_AT_ASC = "+parsedAt";
KalturaAuditTrailOrderBy.PARSED_AT_DESC = "-parsedAt";

function KalturaAuditTrailStatus(){
}
KalturaAuditTrailStatus.PENDING = 1;
KalturaAuditTrailStatus.READY = 2;
KalturaAuditTrailStatus.FAILED = 3;

function KalturaBaseEntryOrderBy(){
}
KalturaBaseEntryOrderBy.NAME_ASC = "+name";
KalturaBaseEntryOrderBy.NAME_DESC = "-name";
KalturaBaseEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaBaseEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaBaseEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaBaseEntryOrderBy.RANK_ASC = "+rank";
KalturaBaseEntryOrderBy.RANK_DESC = "-rank";
KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaBaseEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaBaseJobOrderBy(){
}
KalturaBaseJobOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseJobOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBaseJobOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBaseJobOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaBaseJobOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaBaseJobOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaBaseJobOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaBaseJobOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaBaseJobOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaBaseJobOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaBaseSyndicationFeedOrderBy(){
}
KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaBaseSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaBaseSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaBaseSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaBaseSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaBaseSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaBaseSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBaseSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaBatchJobErrorTypes(){
}
KalturaBatchJobErrorTypes.APP = 0;
KalturaBatchJobErrorTypes.RUNTIME = 1;
KalturaBatchJobErrorTypes.HTTP = 2;
KalturaBatchJobErrorTypes.CURL = 3;
KalturaBatchJobErrorTypes.KALTURA_API = 4;
KalturaBatchJobErrorTypes.KALTURA_CLIENT = 5;

function KalturaBatchJobOrderBy(){
}
KalturaBatchJobOrderBy.STATUS_ASC = "+status";
KalturaBatchJobOrderBy.STATUS_DESC = "-status";
KalturaBatchJobOrderBy.CHECK_AGAIN_TIMEOUT_ASC = "+checkAgainTimeout";
KalturaBatchJobOrderBy.CHECK_AGAIN_TIMEOUT_DESC = "-checkAgainTimeout";
KalturaBatchJobOrderBy.PROGRESS_ASC = "+progress";
KalturaBatchJobOrderBy.PROGRESS_DESC = "-progress";
KalturaBatchJobOrderBy.UPDATES_COUNT_ASC = "+updatesCount";
KalturaBatchJobOrderBy.UPDATES_COUNT_DESC = "-updatesCount";
KalturaBatchJobOrderBy.PRIORITY_ASC = "+priority";
KalturaBatchJobOrderBy.PRIORITY_DESC = "-priority";
KalturaBatchJobOrderBy.QUEUE_TIME_ASC = "+queueTime";
KalturaBatchJobOrderBy.QUEUE_TIME_DESC = "-queueTime";
KalturaBatchJobOrderBy.FINISH_TIME_ASC = "+finishTime";
KalturaBatchJobOrderBy.FINISH_TIME_DESC = "-finishTime";
KalturaBatchJobOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaBatchJobOrderBy.FILE_SIZE_DESC = "-fileSize";
KalturaBatchJobOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaBatchJobOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaBatchJobOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaBatchJobOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaBatchJobOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaBatchJobOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaBatchJobOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaBatchJobOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaBatchJobOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaBatchJobStatus(){
}
KalturaBatchJobStatus.PENDING = 0;
KalturaBatchJobStatus.QUEUED = 1;
KalturaBatchJobStatus.PROCESSING = 2;
KalturaBatchJobStatus.PROCESSED = 3;
KalturaBatchJobStatus.MOVEFILE = 4;
KalturaBatchJobStatus.FINISHED = 5;
KalturaBatchJobStatus.FAILED = 6;
KalturaBatchJobStatus.ABORTED = 7;
KalturaBatchJobStatus.ALMOST_DONE = 8;
KalturaBatchJobStatus.RETRY = 9;
KalturaBatchJobStatus.FATAL = 10;
KalturaBatchJobStatus.DONT_PROCESS = 11;

function KalturaBatchJobType(){
}
KalturaBatchJobType.CONVERT = "0";
KalturaBatchJobType.IMPORT = "1";
KalturaBatchJobType.DELETE = "2";
KalturaBatchJobType.FLATTEN = "3";
KalturaBatchJobType.BULKUPLOAD = "4";
KalturaBatchJobType.DVDCREATOR = "5";
KalturaBatchJobType.DOWNLOAD = "6";
KalturaBatchJobType.OOCONVERT = "7";
KalturaBatchJobType.CONVERT_PROFILE = "10";
KalturaBatchJobType.POSTCONVERT = "11";
KalturaBatchJobType.PULL = "12";
KalturaBatchJobType.REMOTE_CONVERT = "13";
KalturaBatchJobType.EXTRACT_MEDIA = "14";
KalturaBatchJobType.MAIL = "15";
KalturaBatchJobType.NOTIFICATION = "16";
KalturaBatchJobType.CLEANUP = "17";
KalturaBatchJobType.SCHEDULER_HELPER = "18";
KalturaBatchJobType.BULKDOWNLOAD = "19";
KalturaBatchJobType.DB_CLEANUP = "20";
KalturaBatchJobType.PROVISION_PROVIDE = "21";
KalturaBatchJobType.CONVERT_COLLECTION = "22";
KalturaBatchJobType.STORAGE_EXPORT = "23";
KalturaBatchJobType.PROVISION_DELETE = "24";
KalturaBatchJobType.STORAGE_DELETE = "25";
KalturaBatchJobType.EMAIL_INGESTION = "26";
KalturaBatchJobType.METADATA_IMPORT = "27";
KalturaBatchJobType.METADATA_TRANSFORM = "28";
KalturaBatchJobType.FILESYNC_IMPORT = "29";
KalturaBatchJobType.CAPTURE_THUMB = "30";
KalturaBatchJobType.VIRUS_SCAN = "virusScan.VirusScan";
KalturaBatchJobType.DISTRIBUTION_SUBMIT = "contentDistribution.DistributionSubmit";
KalturaBatchJobType.DISTRIBUTION_UPDATE = "contentDistribution.DistributionUpdate";
KalturaBatchJobType.DISTRIBUTION_DELETE = "contentDistribution.DistributionDelete";
KalturaBatchJobType.DISTRIBUTION_FETCH_REPORT = "contentDistribution.DistributionFetchReport";
KalturaBatchJobType.DISTRIBUTION_ENABLE = "contentDistribution.DistributionEnable";
KalturaBatchJobType.DISTRIBUTION_DISABLE = "contentDistribution.DistributionDisable";
KalturaBatchJobType.DISTRIBUTION_SYNC = "contentDistribution.DistributionSync";
KalturaBatchJobType.DROP_FOLDER_WATCHER = "dropFolder.DropFolderWatcher";
KalturaBatchJobType.DROP_FOLDER_HANDLER = "dropFolder.DropFolderHandler";

function KalturaBulkUploadType(){
}
KalturaBulkUploadType.CSV = "bulkUploadCsv.CSV";
KalturaBulkUploadType.XML = "bulkUploadXml.XML";
KalturaBulkUploadType.DROP_FOLDER_XML = "dropFolderXmlBulkUpload.DROP_FOLDER_XML";

function KalturaCategoryOrderBy(){
}
KalturaCategoryOrderBy.DEPTH_ASC = "+depth";
KalturaCategoryOrderBy.DEPTH_DESC = "-depth";
KalturaCategoryOrderBy.FULL_NAME_ASC = "+fullName";
KalturaCategoryOrderBy.FULL_NAME_DESC = "-fullName";
KalturaCategoryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaCategoryOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaComcastMrssDistributionProfileOrderBy(){
}
KalturaComcastMrssDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaComcastMrssDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaComcastMrssDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaComcastMrssDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaComcastMrssDistributionProviderOrderBy(){
}

function KalturaCommercialUseType(){
}
KalturaCommercialUseType.COMMERCIAL_USE = 1;
KalturaCommercialUseType.NON_COMMERCIAL_USE = 0;

function KalturaConfigurableDistributionProfileOrderBy(){
}
KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaConfigurableDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaConfigurableDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaContainerFormat(){
}
KalturaContainerFormat.FLV = "flv";
KalturaContainerFormat.MP4 = "mp4";
KalturaContainerFormat.AVI = "avi";
KalturaContainerFormat.MOV = "mov";
KalturaContainerFormat.MP3 = "mp3";
KalturaContainerFormat._3GP = "3gp";
KalturaContainerFormat.OGG = "ogg";
KalturaContainerFormat.WMV = "wmv";
KalturaContainerFormat.WMA = "wma";
KalturaContainerFormat.ISMV = "ismv";
KalturaContainerFormat.MKV = "mkv";
KalturaContainerFormat.WEBM = "webm";
KalturaContainerFormat.MPEG = "mpeg";
KalturaContainerFormat.MPEGTS = "mpegts";
KalturaContainerFormat.APPLEHTTP = "applehttp";
KalturaContainerFormat.SWF = "swf";
KalturaContainerFormat.PDF = "pdf";
KalturaContainerFormat.JPG = "jpg";

function KalturaControlPanelCommandOrderBy(){
}
KalturaControlPanelCommandOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaControlPanelCommandOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaControlPanelCommandOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaControlPanelCommandOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaControlPanelCommandStatus(){
}
KalturaControlPanelCommandStatus.PENDING = 1;
KalturaControlPanelCommandStatus.HANDLED = 2;
KalturaControlPanelCommandStatus.DONE = 3;
KalturaControlPanelCommandStatus.FAILED = 4;

function KalturaControlPanelCommandTargetType(){
}
KalturaControlPanelCommandTargetType.DATA_CENTER = 1;
KalturaControlPanelCommandTargetType.SCHEDULER = 2;
KalturaControlPanelCommandTargetType.JOB_TYPE = 3;
KalturaControlPanelCommandTargetType.JOB = 4;
KalturaControlPanelCommandTargetType.BATCH = 5;

function KalturaControlPanelCommandType(){
}
KalturaControlPanelCommandType.STOP = 1;
KalturaControlPanelCommandType.START = 2;
KalturaControlPanelCommandType.CONFIG = 3;
KalturaControlPanelCommandType.KILL = 4;

function KalturaConversionProfileAssetParamsOrderBy(){
}

function KalturaConversionProfileOrderBy(){
}
KalturaConversionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaConversionProfileOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaConversionProfileStatus(){
}
KalturaConversionProfileStatus.DISABLED = "1";
KalturaConversionProfileStatus.ENABLED = "2";
KalturaConversionProfileStatus.DELETED = "3";

function KalturaCountryRestrictionType(){
}
KalturaCountryRestrictionType.RESTRICT_COUNTRY_LIST = 0;
KalturaCountryRestrictionType.ALLOW_COUNTRY_LIST = 1;

function KalturaDailymotionDistributionProfileOrderBy(){
}
KalturaDailymotionDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDailymotionDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDailymotionDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDailymotionDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDailymotionDistributionProviderOrderBy(){
}

function KalturaDataEntryOrderBy(){
}
KalturaDataEntryOrderBy.NAME_ASC = "+name";
KalturaDataEntryOrderBy.NAME_DESC = "-name";
KalturaDataEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaDataEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaDataEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDataEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDataEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDataEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaDataEntryOrderBy.RANK_ASC = "+rank";
KalturaDataEntryOrderBy.RANK_DESC = "-rank";
KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaDataEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaDirectoryRestrictionType(){
}
KalturaDirectoryRestrictionType.DONT_DISPLAY = 0;
KalturaDirectoryRestrictionType.DISPLAY_WITH_LINK = 1;

function KalturaDistributionAction(){
}
KalturaDistributionAction.SUBMIT = 1;
KalturaDistributionAction.UPDATE = 2;
KalturaDistributionAction.DELETE = 3;
KalturaDistributionAction.FETCH_REPORT = 4;

function KalturaDistributionErrorType(){
}
KalturaDistributionErrorType.MISSING_FLAVOR = 1;
KalturaDistributionErrorType.MISSING_THUMBNAIL = 2;
KalturaDistributionErrorType.MISSING_METADATA = 3;
KalturaDistributionErrorType.INVALID_DATA = 4;

function KalturaDistributionFieldRequiredStatus(){
}
KalturaDistributionFieldRequiredStatus.NOT_REQUIRED = 0;
KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PROVIDER = 1;
KalturaDistributionFieldRequiredStatus.REQUIRED_BY_PARTNER = 2;

function KalturaDistributionProfileActionStatus(){
}
KalturaDistributionProfileActionStatus.DISABLED = 1;
KalturaDistributionProfileActionStatus.AUTOMATIC = 2;
KalturaDistributionProfileActionStatus.MANUAL = 3;

function KalturaDistributionProfileOrderBy(){
}
KalturaDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDistributionProfileStatus(){
}
KalturaDistributionProfileStatus.DISABLED = 1;
KalturaDistributionProfileStatus.ENABLED = 2;
KalturaDistributionProfileStatus.DELETED = 3;

function KalturaDistributionProtocol(){
}
KalturaDistributionProtocol.FTP = 1;
KalturaDistributionProtocol.SCP = 2;
KalturaDistributionProtocol.SFTP = 3;
KalturaDistributionProtocol.HTTP = 4;
KalturaDistributionProtocol.HTTPS = 5;

function KalturaDistributionProviderOrderBy(){
}

function KalturaDistributionProviderType(){
}
KalturaDistributionProviderType.GENERIC = "1";
KalturaDistributionProviderType.SYNDICATION = "2";
KalturaDistributionProviderType.YOUTUBE = "youTubeDistribution.YOUTUBE";
KalturaDistributionProviderType.YOUTUBE_API = "youtubeApiDistribution.YOUTUBE_API";
KalturaDistributionProviderType.DAILYMOTION = "dailymotionDistribution.DAILYMOTION";
KalturaDistributionProviderType.PODCAST = "podcastDistribution.PODCAST";
KalturaDistributionProviderType.TVCOM = "tvComDistribution.TVCOM";

function KalturaDistributionValidationErrorType(){
}
KalturaDistributionValidationErrorType.CUSTOM_ERROR = 0;
KalturaDistributionValidationErrorType.STRING_EMPTY = 1;
KalturaDistributionValidationErrorType.STRING_TOO_LONG = 2;
KalturaDistributionValidationErrorType.STRING_TOO_SHORT = 3;
KalturaDistributionValidationErrorType.INVALID_FORMAT = 4;

function KalturaDocumentEntryOrderBy(){
}
KalturaDocumentEntryOrderBy.NAME_ASC = "+name";
KalturaDocumentEntryOrderBy.NAME_DESC = "-name";
KalturaDocumentEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaDocumentEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaDocumentEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDocumentEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDocumentEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDocumentEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaDocumentEntryOrderBy.RANK_ASC = "+rank";
KalturaDocumentEntryOrderBy.RANK_DESC = "-rank";
KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaDocumentEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaDocumentFlavorParamsOrderBy(){
}

function KalturaDocumentFlavorParamsOutputOrderBy(){
}

function KalturaDocumentType(){
}
KalturaDocumentType.DOCUMENT = 11;
KalturaDocumentType.SWF = 12;
KalturaDocumentType.PDF = 13;

function KalturaDropFolderContentFileHandlerMatchPolicy(){
}
KalturaDropFolderContentFileHandlerMatchPolicy.ADD_AS_NEW = 1;
KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_ADD_AS_NEW = 2;
KalturaDropFolderContentFileHandlerMatchPolicy.MATCH_EXISTING_OR_KEEP_IN_FOLDER = 3;

function KalturaDropFolderFileDeletePolicy(){
}
KalturaDropFolderFileDeletePolicy.MANUAL_DELETE = 1;
KalturaDropFolderFileDeletePolicy.AUTO_DELETE = 2;

function KalturaDropFolderFileErrorCode(){
}
KalturaDropFolderFileErrorCode.ERROR_UPDATE_ENTRY = "1";
KalturaDropFolderFileErrorCode.ERROR_ADD_ENTRY = "2";
KalturaDropFolderFileErrorCode.FLAVOR_NOT_FOUND = "3";
KalturaDropFolderFileErrorCode.FLAVOR_MISSING_IN_FILE_NAME = "4";
KalturaDropFolderFileErrorCode.SLUG_REGEX_NO_MATCH = "5";
KalturaDropFolderFileErrorCode.ERROR_READING_FILE = "6";
KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_SIZE = "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_SIZE";
KalturaDropFolderFileErrorCode.LOCAL_FILE_WRONG_CHECKSUM = "dropFolderXmlBulkUpload.LOCAL_FILE_WRONG_CHECKSUM";
KalturaDropFolderFileErrorCode.ERROR_WRITING_TEMP_FILE = "dropFolderXmlBulkUpload.ERROR_WRITING_TEMP_FILE";
KalturaDropFolderFileErrorCode.ERROR_ADDING_BULK_UPLOAD = "dropFolderXmlBulkUpload.ERROR_ADDING_BULK_UPLOAD";

function KalturaDropFolderFileHandlerType(){
}
KalturaDropFolderFileHandlerType.CONTENT = "1";
KalturaDropFolderFileHandlerType.XML = "dropFolderXmlBulkUpload.XML";

function KalturaDropFolderFileOrderBy(){
}
KalturaDropFolderFileOrderBy.ID_ASC = "+id";
KalturaDropFolderFileOrderBy.ID_DESC = "-id";
KalturaDropFolderFileOrderBy.FILE_NAME_ASC = "+fileName";
KalturaDropFolderFileOrderBy.FILE_NAME_DESC = "-fileName";
KalturaDropFolderFileOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaDropFolderFileOrderBy.FILE_SIZE_DESC = "-fileSize";
KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_ASC = "+fileSizeLastSetAt";
KalturaDropFolderFileOrderBy.FILE_SIZE_LAST_SET_AT_DESC = "-fileSizeLastSetAt";
KalturaDropFolderFileOrderBy.PARSED_SLUG_ASC = "+parsedSlug";
KalturaDropFolderFileOrderBy.PARSED_SLUG_DESC = "-parsedSlug";
KalturaDropFolderFileOrderBy.PARSED_FLAVOR_ASC = "+parsedFlavor";
KalturaDropFolderFileOrderBy.PARSED_FLAVOR_DESC = "-parsedFlavor";
KalturaDropFolderFileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDropFolderFileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDropFolderFileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDropFolderFileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDropFolderFileStatus(){
}
KalturaDropFolderFileStatus.UPLOADING = 1;
KalturaDropFolderFileStatus.PENDING = 2;
KalturaDropFolderFileStatus.WAITING = 3;
KalturaDropFolderFileStatus.HANDLED = 4;
KalturaDropFolderFileStatus.IGNORE = 5;
KalturaDropFolderFileStatus.DELETED = 6;
KalturaDropFolderFileStatus.PURGED = 7;
KalturaDropFolderFileStatus.NO_MATCH = 8;
KalturaDropFolderFileStatus.ERROR_HANDLING = 9;
KalturaDropFolderFileStatus.ERROR_DELETING = 10;

function KalturaDropFolderOrderBy(){
}
KalturaDropFolderOrderBy.ID_ASC = "+id";
KalturaDropFolderOrderBy.ID_DESC = "-id";
KalturaDropFolderOrderBy.NAME_ASC = "+name";
KalturaDropFolderOrderBy.NAME_DESC = "-name";
KalturaDropFolderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaDropFolderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaDropFolderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaDropFolderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaDropFolderStatus(){
}
KalturaDropFolderStatus.DISABLED = 0;
KalturaDropFolderStatus.ENABLED = 1;
KalturaDropFolderStatus.DELETED = 2;

function KalturaDropFolderType(){
}
KalturaDropFolderType.LOCAL = "1";

function KalturaDurationType(){
}
KalturaDurationType.NOT_AVAILABLE = "notavailable";
KalturaDurationType.SHORT = "short";
KalturaDurationType.MEDIUM = "medium";
KalturaDurationType.LONG = "long";

function KalturaDwhHourlyPartnerOrderBy(){
}
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_TIME_ASC = "+aggregatedTime";
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_TIME_DESC = "-aggregatedTime";
KalturaDwhHourlyPartnerOrderBy.SUM_TIME_VIEWED_ASC = "+sumTimeViewed";
KalturaDwhHourlyPartnerOrderBy.SUM_TIME_VIEWED_DESC = "-sumTimeViewed";
KalturaDwhHourlyPartnerOrderBy.AVERAGE_TIME_VIEWED_ASC = "+averageTimeViewed";
KalturaDwhHourlyPartnerOrderBy.AVERAGE_TIME_VIEWED_DESC = "-averageTimeViewed";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS_ASC = "+countPlays";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS_DESC = "-countPlays";
KalturaDwhHourlyPartnerOrderBy.COUNT_LOADS_ASC = "+countLoads";
KalturaDwhHourlyPartnerOrderBy.COUNT_LOADS_DESC = "-countLoads";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS25_ASC = "+countPlays25";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS25_DESC = "-countPlays25";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS50_ASC = "+countPlays50";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS50_DESC = "-countPlays50";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS75_ASC = "+countPlays75";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS75_DESC = "-countPlays75";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS100_ASC = "+countPlays100";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYS100_DESC = "-countPlays100";
KalturaDwhHourlyPartnerOrderBy.COUNT_EDIT_ASC = "+countEdit";
KalturaDwhHourlyPartnerOrderBy.COUNT_EDIT_DESC = "-countEdit";
KalturaDwhHourlyPartnerOrderBy.COUNT_SHARES_ASC = "+countShares";
KalturaDwhHourlyPartnerOrderBy.COUNT_SHARES_DESC = "-countShares";
KalturaDwhHourlyPartnerOrderBy.COUNT_DOWNLOAD_ASC = "+countDownload";
KalturaDwhHourlyPartnerOrderBy.COUNT_DOWNLOAD_DESC = "-countDownload";
KalturaDwhHourlyPartnerOrderBy.COUNT_REPORT_ABUSE_ASC = "+countReportAbuse";
KalturaDwhHourlyPartnerOrderBy.COUNT_REPORT_ABUSE_DESC = "-countReportAbuse";
KalturaDwhHourlyPartnerOrderBy.COUNT_MEDIA_ENTRIES_ASC = "+countMediaEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_MEDIA_ENTRIES_DESC = "-countMediaEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_VIDEO_ENTRIES_ASC = "+countVideoEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_VIDEO_ENTRIES_DESC = "-countVideoEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_IMAGE_ENTRIES_ASC = "+countImageEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_IMAGE_ENTRIES_DESC = "-countImageEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_AUDIO_ENTRIES_ASC = "+countAudioEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_AUDIO_ENTRIES_DESC = "-countAudioEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIX_ENTRIES_ASC = "+countMixEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIX_ENTRIES_DESC = "-countMixEntries";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYLISTS_ASC = "+countPlaylists";
KalturaDwhHourlyPartnerOrderBy.COUNT_PLAYLISTS_DESC = "-countPlaylists";
KalturaDwhHourlyPartnerOrderBy.COUNT_BANDWIDTH_ASC = "+countBandwidth";
KalturaDwhHourlyPartnerOrderBy.COUNT_BANDWIDTH_DESC = "-countBandwidth";
KalturaDwhHourlyPartnerOrderBy.COUNT_STORAGE_ASC = "+countStorage";
KalturaDwhHourlyPartnerOrderBy.COUNT_STORAGE_DESC = "-countStorage";
KalturaDwhHourlyPartnerOrderBy.COUNT_USERS_ASC = "+countUsers";
KalturaDwhHourlyPartnerOrderBy.COUNT_USERS_DESC = "-countUsers";
KalturaDwhHourlyPartnerOrderBy.COUNT_WIDGETS_ASC = "+countWidgets";
KalturaDwhHourlyPartnerOrderBy.COUNT_WIDGETS_DESC = "-countWidgets";
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_STORAGE_ASC = "+aggregatedStorage";
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_STORAGE_DESC = "-aggregatedStorage";
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_BANDWIDTH_ASC = "+aggregatedBandwidth";
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_BANDWIDTH_DESC = "-aggregatedBandwidth";
KalturaDwhHourlyPartnerOrderBy.COUNT_BUFFER_START_ASC = "+countBufferStart";
KalturaDwhHourlyPartnerOrderBy.COUNT_BUFFER_START_DESC = "-countBufferStart";
KalturaDwhHourlyPartnerOrderBy.COUNT_BUFFER_END_ASC = "+countBufferEnd";
KalturaDwhHourlyPartnerOrderBy.COUNT_BUFFER_END_DESC = "-countBufferEnd";
KalturaDwhHourlyPartnerOrderBy.COUNT_OPEN_FULL_SCREEN_ASC = "+countOpenFullScreen";
KalturaDwhHourlyPartnerOrderBy.COUNT_OPEN_FULL_SCREEN_DESC = "-countOpenFullScreen";
KalturaDwhHourlyPartnerOrderBy.COUNT_CLOSE_FULL_SCREEN_ASC = "+countCloseFullScreen";
KalturaDwhHourlyPartnerOrderBy.COUNT_CLOSE_FULL_SCREEN_DESC = "-countCloseFullScreen";
KalturaDwhHourlyPartnerOrderBy.COUNT_REPLAY_ASC = "+countReplay";
KalturaDwhHourlyPartnerOrderBy.COUNT_REPLAY_DESC = "-countReplay";
KalturaDwhHourlyPartnerOrderBy.COUNT_SEEK_ASC = "+countSeek";
KalturaDwhHourlyPartnerOrderBy.COUNT_SEEK_DESC = "-countSeek";
KalturaDwhHourlyPartnerOrderBy.COUNT_OPEN_UPLOAD_ASC = "+countOpenUpload";
KalturaDwhHourlyPartnerOrderBy.COUNT_OPEN_UPLOAD_DESC = "-countOpenUpload";
KalturaDwhHourlyPartnerOrderBy.COUNT_SAVE_PUBLISH_ASC = "+countSavePublish";
KalturaDwhHourlyPartnerOrderBy.COUNT_SAVE_PUBLISH_DESC = "-countSavePublish";
KalturaDwhHourlyPartnerOrderBy.COUNT_CLOSE_EDITOR_ASC = "+countCloseEditor";
KalturaDwhHourlyPartnerOrderBy.COUNT_CLOSE_EDITOR_DESC = "-countCloseEditor";
KalturaDwhHourlyPartnerOrderBy.COUNT_PRE_BUMPER_PLAYED_ASC = "+countPreBumperPlayed";
KalturaDwhHourlyPartnerOrderBy.COUNT_PRE_BUMPER_PLAYED_DESC = "-countPreBumperPlayed";
KalturaDwhHourlyPartnerOrderBy.COUNT_POST_BUMPER_PLAYED_ASC = "+countPostBumperPlayed";
KalturaDwhHourlyPartnerOrderBy.COUNT_POST_BUMPER_PLAYED_DESC = "-countPostBumperPlayed";
KalturaDwhHourlyPartnerOrderBy.COUNT_BUMPER_CLICKED_ASC = "+countBumperClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_BUMPER_CLICKED_DESC = "-countBumperClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL_STARTED_ASC = "+countPrerollStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL_STARTED_DESC = "-countPrerollStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL_STARTED_ASC = "+countMidrollStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL_STARTED_DESC = "-countMidrollStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL_STARTED_ASC = "+countPostrollStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL_STARTED_DESC = "-countPostrollStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_OVERLAY_STARTED_ASC = "+countOverlayStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_OVERLAY_STARTED_DESC = "-countOverlayStarted";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL_CLICKED_ASC = "+countPrerollClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL_CLICKED_DESC = "-countPrerollClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL_CLICKED_ASC = "+countMidrollClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL_CLICKED_DESC = "-countMidrollClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL_CLICKED_ASC = "+countPostrollClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL_CLICKED_DESC = "-countPostrollClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_OVERLAY_CLICKED_ASC = "+countOverlayClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_OVERLAY_CLICKED_DESC = "-countOverlayClicked";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL25_ASC = "+countPreroll25";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL25_DESC = "-countPreroll25";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL50_ASC = "+countPreroll50";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL50_DESC = "-countPreroll50";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL75_ASC = "+countPreroll75";
KalturaDwhHourlyPartnerOrderBy.COUNT_PREROLL75_DESC = "-countPreroll75";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL25_ASC = "+countMidroll25";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL25_DESC = "-countMidroll25";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL50_ASC = "+countMidroll50";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL50_DESC = "-countMidroll50";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL75_ASC = "+countMidroll75";
KalturaDwhHourlyPartnerOrderBy.COUNT_MIDROLL75_DESC = "-countMidroll75";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL25_ASC = "+countPostroll25";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL25_DESC = "-countPostroll25";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL50_ASC = "+countPostroll50";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL50_DESC = "-countPostroll50";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL75_ASC = "+countPostroll75";
KalturaDwhHourlyPartnerOrderBy.COUNT_POSTROLL75_DESC = "-countPostroll75";
KalturaDwhHourlyPartnerOrderBy.COUNT_LIVE_STREAMING_BANDWIDTH_ASC = "+countLiveStreamingBandwidth";
KalturaDwhHourlyPartnerOrderBy.COUNT_LIVE_STREAMING_BANDWIDTH_DESC = "-countLiveStreamingBandwidth";
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_LIVE_STREAMING_BANDWIDTH_ASC = "+aggregatedLiveStreamingBandwidth";
KalturaDwhHourlyPartnerOrderBy.AGGREGATED_LIVE_STREAMING_BANDWIDTH_DESC = "-aggregatedLiveStreamingBandwidth";

function KalturaEditorType(){
}
KalturaEditorType.SIMPLE = 1;
KalturaEditorType.ADVANCED = 2;

function KalturaEmailIngestionProfileStatus(){
}
KalturaEmailIngestionProfileStatus.INACTIVE = 0;
KalturaEmailIngestionProfileStatus.ACTIVE = 1;

function KalturaEntryDistributionFlag(){
}
KalturaEntryDistributionFlag.NONE = 0;
KalturaEntryDistributionFlag.SUBMIT_REQUIRED = 1;
KalturaEntryDistributionFlag.DELETE_REQUIRED = 2;
KalturaEntryDistributionFlag.UPDATE_REQUIRED = 3;
KalturaEntryDistributionFlag.ENABLE_REQUIRED = 4;
KalturaEntryDistributionFlag.DISABLE_REQUIRED = 5;

function KalturaEntryDistributionOrderBy(){
}
KalturaEntryDistributionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaEntryDistributionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaEntryDistributionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaEntryDistributionOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaEntryDistributionOrderBy.SUBMITTED_AT_ASC = "+submittedAt";
KalturaEntryDistributionOrderBy.SUBMITTED_AT_DESC = "-submittedAt";
KalturaEntryDistributionOrderBy.SUNRISE_ASC = "+sunrise";
KalturaEntryDistributionOrderBy.SUNRISE_DESC = "-sunrise";
KalturaEntryDistributionOrderBy.SUNSET_ASC = "+sunset";
KalturaEntryDistributionOrderBy.SUNSET_DESC = "-sunset";

function KalturaEntryDistributionStatus(){
}
KalturaEntryDistributionStatus.PENDING = 0;
KalturaEntryDistributionStatus.QUEUED = 1;
KalturaEntryDistributionStatus.READY = 2;
KalturaEntryDistributionStatus.DELETED = 3;
KalturaEntryDistributionStatus.SUBMITTING = 4;
KalturaEntryDistributionStatus.UPDATING = 5;
KalturaEntryDistributionStatus.DELETING = 6;
KalturaEntryDistributionStatus.ERROR_SUBMITTING = 7;
KalturaEntryDistributionStatus.ERROR_UPDATING = 8;
KalturaEntryDistributionStatus.ERROR_DELETING = 9;
KalturaEntryDistributionStatus.REMOVED = 10;

function KalturaEntryDistributionSunStatus(){
}
KalturaEntryDistributionSunStatus.BEFORE_SUNRISE = 1;
KalturaEntryDistributionSunStatus.AFTER_SUNRISE = 2;
KalturaEntryDistributionSunStatus.AFTER_SUNSET = 3;

function KalturaEntryModerationStatus(){
}
KalturaEntryModerationStatus.PENDING_MODERATION = 1;
KalturaEntryModerationStatus.APPROVED = 2;
KalturaEntryModerationStatus.REJECTED = 3;
KalturaEntryModerationStatus.FLAGGED_FOR_REVIEW = 5;
KalturaEntryModerationStatus.AUTO_APPROVED = 6;

function KalturaEntryReplacementStatus(){
}
KalturaEntryReplacementStatus.NONE = "0";
KalturaEntryReplacementStatus.APPROVED_BUT_NOT_READY = "1";
KalturaEntryReplacementStatus.READY_BUT_NOT_APPROVED = "2";
KalturaEntryReplacementStatus.NOT_READY_AND_NOT_APPROVED = "3";

function KalturaEntryStatus(){
}
KalturaEntryStatus.ERROR_IMPORTING = "-2";
KalturaEntryStatus.ERROR_CONVERTING = "-1";
KalturaEntryStatus.IMPORT = "0";
KalturaEntryStatus.PRECONVERT = "1";
KalturaEntryStatus.READY = "2";
KalturaEntryStatus.DELETED = "3";
KalturaEntryStatus.PENDING = "4";
KalturaEntryStatus.MODERATE = "5";
KalturaEntryStatus.BLOCKED = "6";
KalturaEntryStatus.NO_CONTENT = "7";
KalturaEntryStatus.INFECTED = "virusScan.Infected";

function KalturaEntryType(){
}
KalturaEntryType.AUTOMATIC = "-1";
KalturaEntryType.MEDIA_CLIP = "1";
KalturaEntryType.MIX = "2";
KalturaEntryType.PLAYLIST = "5";
KalturaEntryType.DATA = "6";
KalturaEntryType.LIVE_STREAM = "7";
KalturaEntryType.DOCUMENT = "10";

function KalturaExampleDistributionProfileOrderBy(){
}
KalturaExampleDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaExampleDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaExampleDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaExampleDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaExampleDistributionProviderOrderBy(){
}

function KalturaFileSyncObjectType(){
}
KalturaFileSyncObjectType.ENTRY = "1";
KalturaFileSyncObjectType.UICONF = "2";
KalturaFileSyncObjectType.BATCHJOB = "3";
KalturaFileSyncObjectType.FLAVOR_ASSET = "4";
KalturaFileSyncObjectType.METADATA = "5";
KalturaFileSyncObjectType.METADATA_PROFILE = "6";
KalturaFileSyncObjectType.SYNDICATION_FEED = "7";
KalturaFileSyncObjectType.CONVERSION_PROFILE = "8";
KalturaFileSyncObjectType.GENERIC_DISTRIBUTION_ACTION = "contentDistribution.GenericDistributionAction";
KalturaFileSyncObjectType.ENTRY_DISTRIBUTION = "contentDistribution.EntryDistribution";
KalturaFileSyncObjectType.DISTRIBUTION_PROFILE = "contentDistribution.DistributionProfile";

function KalturaFileSyncOrderBy(){
}
KalturaFileSyncOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFileSyncOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFileSyncOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFileSyncOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaFileSyncOrderBy.READY_AT_ASC = "+readyAt";
KalturaFileSyncOrderBy.READY_AT_DESC = "-readyAt";
KalturaFileSyncOrderBy.SYNC_TIME_ASC = "+syncTime";
KalturaFileSyncOrderBy.SYNC_TIME_DESC = "-syncTime";
KalturaFileSyncOrderBy.FILE_SIZE_ASC = "+fileSize";
KalturaFileSyncOrderBy.FILE_SIZE_DESC = "-fileSize";

function KalturaFileSyncStatus(){
}
KalturaFileSyncStatus.ERROR = -1;
KalturaFileSyncStatus.PENDING = 1;
KalturaFileSyncStatus.READY = 2;
KalturaFileSyncStatus.DELETED = 3;
KalturaFileSyncStatus.PURGED = 4;

function KalturaFileSyncType(){
}
KalturaFileSyncType.FILE = 1;
KalturaFileSyncType.LINK = 2;
KalturaFileSyncType.URL = 3;

function KalturaFlavorAssetOrderBy(){
}
KalturaFlavorAssetOrderBy.SIZE_ASC = "+size";
KalturaFlavorAssetOrderBy.SIZE_DESC = "-size";
KalturaFlavorAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFlavorAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFlavorAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFlavorAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaFlavorAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaFlavorAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaFlavorAssetStatus(){
}
KalturaFlavorAssetStatus.ERROR = -1;
KalturaFlavorAssetStatus.QUEUED = 0;
KalturaFlavorAssetStatus.CONVERTING = 1;
KalturaFlavorAssetStatus.READY = 2;
KalturaFlavorAssetStatus.DELETED = 3;
KalturaFlavorAssetStatus.NOT_APPLICABLE = 4;
KalturaFlavorAssetStatus.TEMP = 5;
KalturaFlavorAssetStatus.WAIT_FOR_CONVERT = 6;
KalturaFlavorAssetStatus.IMPORTING = 7;
KalturaFlavorAssetStatus.VALIDATING = 8;

function KalturaFlavorParamsOrderBy(){
}

function KalturaFlavorParamsOutputOrderBy(){
}

function KalturaFlavorReadyBehaviorType(){
}
KalturaFlavorReadyBehaviorType.INHERIT_FLAVOR_PARAMS = 0;
KalturaFlavorReadyBehaviorType.REQUIRED = 1;
KalturaFlavorReadyBehaviorType.OPTIONAL = 2;

function KalturaFreewheelDistributionProfileOrderBy(){
}
KalturaFreewheelDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaFreewheelDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaFreewheelDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaFreewheelDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaFreewheelDistributionProviderOrderBy(){
}

function KalturaGender(){
}
KalturaGender.UNKNOWN = 0;
KalturaGender.MALE = 1;
KalturaGender.FEMALE = 2;

function KalturaGenericDistributionProfileOrderBy(){
}
KalturaGenericDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProviderActionOrderBy(){
}
KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProviderActionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProviderActionOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProviderOrderBy(){
}
KalturaGenericDistributionProviderOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericDistributionProviderOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaGenericDistributionProviderOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaGenericDistributionProviderOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaGenericDistributionProviderParser(){
}
KalturaGenericDistributionProviderParser.XSL = 1;
KalturaGenericDistributionProviderParser.XPATH = 2;
KalturaGenericDistributionProviderParser.REGEX = 3;

function KalturaGenericDistributionProviderStatus(){
}
KalturaGenericDistributionProviderStatus.ACTIVE = 2;
KalturaGenericDistributionProviderStatus.DELETED = 3;

function KalturaGenericSyndicationFeedOrderBy(){
}
KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGenericSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGenericSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGenericSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGenericSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGenericSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGenericSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaGenericXsltSyndicationFeedOrderBy(){
}
KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGenericXsltSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGenericXsltSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGenericXsltSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGenericXsltSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGenericXsltSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGenericXsltSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaGoogleSyndicationFeedAdultValues(){
}
KalturaGoogleSyndicationFeedAdultValues.YES = "Yes";
KalturaGoogleSyndicationFeedAdultValues.NO = "No";

function KalturaGoogleVideoSyndicationFeedOrderBy(){
}
KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaGoogleVideoSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaGoogleVideoSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaGoogleVideoSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaGoogleVideoSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaGoogleVideoSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaITunesSyndicationFeedAdultValues(){
}
KalturaITunesSyndicationFeedAdultValues.YES = "yes";
KalturaITunesSyndicationFeedAdultValues.NO = "no";
KalturaITunesSyndicationFeedAdultValues.CLEAN = "clean";

function KalturaITunesSyndicationFeedCategories(){
}
KalturaITunesSyndicationFeedCategories.ARTS = "Arts";
KalturaITunesSyndicationFeedCategories.ARTS_DESIGN = "Arts/Design";
KalturaITunesSyndicationFeedCategories.ARTS_FASHION_BEAUTY = "Arts/Fashion &amp; Beauty";
KalturaITunesSyndicationFeedCategories.ARTS_FOOD = "Arts/Food";
KalturaITunesSyndicationFeedCategories.ARTS_LITERATURE = "Arts/Literature";
KalturaITunesSyndicationFeedCategories.ARTS_PERFORMING_ARTS = "Arts/Performing Arts";
KalturaITunesSyndicationFeedCategories.ARTS_VISUAL_ARTS = "Arts/Visual Arts";
KalturaITunesSyndicationFeedCategories.BUSINESS = "Business";
KalturaITunesSyndicationFeedCategories.BUSINESS_BUSINESS_NEWS = "Business/Business News";
KalturaITunesSyndicationFeedCategories.BUSINESS_CAREERS = "Business/Careers";
KalturaITunesSyndicationFeedCategories.BUSINESS_INVESTING = "Business/Investing";
KalturaITunesSyndicationFeedCategories.BUSINESS_MANAGEMENT_MARKETING = "Business/Management &amp; Marketing";
KalturaITunesSyndicationFeedCategories.BUSINESS_SHOPPING = "Business/Shopping";
KalturaITunesSyndicationFeedCategories.COMEDY = "Comedy";
KalturaITunesSyndicationFeedCategories.EDUCATION = "Education";
KalturaITunesSyndicationFeedCategories.EDUCATION_TECHNOLOGY = "Education/Education Technology";
KalturaITunesSyndicationFeedCategories.EDUCATION_HIGHER_EDUCATION = "Education/Higher Education";
KalturaITunesSyndicationFeedCategories.EDUCATION_K_12 = "Education/K-12";
KalturaITunesSyndicationFeedCategories.EDUCATION_LANGUAGE_COURSES = "Education/Language Courses";
KalturaITunesSyndicationFeedCategories.EDUCATION_TRAINING = "Education/Training";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES = "Games &amp; Hobbies";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AUTOMOTIVE = "Games &amp; Hobbies/Automotive";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_AVIATION = "Games &amp; Hobbies/Aviation";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_HOBBIES = "Games &amp; Hobbies/Hobbies";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_OTHER_GAMES = "Games &amp; Hobbies/Other Games";
KalturaITunesSyndicationFeedCategories.GAMES_HOBBIES_VIDEO_GAMES = "Games &amp; Hobbies/Video Games";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS = "Government &amp; Organizations";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_LOCAL = "Government &amp; Organizations/Local";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NATIONAL = "Government &amp; Organizations/National";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_NON_PROFIT = "Government &amp; Organizations/Non-Profit";
KalturaITunesSyndicationFeedCategories.GOVERNMENT_ORGANIZATIONS_REGIONAL = "Government &amp; Organizations/Regional";
KalturaITunesSyndicationFeedCategories.HEALTH = "Health";
KalturaITunesSyndicationFeedCategories.HEALTH_ALTERNATIVE_HEALTH = "Health/Alternative Health";
KalturaITunesSyndicationFeedCategories.HEALTH_FITNESS_NUTRITION = "Health/Fitness &amp; Nutrition";
KalturaITunesSyndicationFeedCategories.HEALTH_SELF_HELP = "Health/Self-Help";
KalturaITunesSyndicationFeedCategories.HEALTH_SEXUALITY = "Health/Sexuality";
KalturaITunesSyndicationFeedCategories.KIDS_FAMILY = "Kids &amp; Family";
KalturaITunesSyndicationFeedCategories.MUSIC = "Music";
KalturaITunesSyndicationFeedCategories.NEWS_POLITICS = "News &amp; Politics";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY = "Religion &amp; Spirituality";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_BUDDHISM = "Religion &amp; Spirituality/Buddhism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_CHRISTIANITY = "Religion &amp; Spirituality/Christianity";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_HINDUISM = "Religion &amp; Spirituality/Hinduism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_ISLAM = "Religion &amp; Spirituality/Islam";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_JUDAISM = "Religion &amp; Spirituality/Judaism";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_OTHER = "Religion &amp; Spirituality/Other";
KalturaITunesSyndicationFeedCategories.RELIGION_SPIRITUALITY_SPIRITUALITY = "Religion &amp; Spirituality/Spirituality";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE = "Science &amp; Medicine";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_MEDICINE = "Science &amp; Medicine/Medicine";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_NATURAL_SCIENCES = "Science &amp; Medicine/Natural Sciences";
KalturaITunesSyndicationFeedCategories.SCIENCE_MEDICINE_SOCIAL_SCIENCES = "Science &amp; Medicine/Social Sciences";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE = "Society &amp; Culture";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_HISTORY = "Society &amp; Culture/History";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PERSONAL_JOURNALS = "Society &amp; Culture/Personal Journals";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PHILOSOPHY = "Society &amp; Culture/Philosophy";
KalturaITunesSyndicationFeedCategories.SOCIETY_CULTURE_PLACES_TRAVEL = "Society &amp; Culture/Places &amp; Travel";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION = "Sports &amp; Recreation";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_AMATEUR = "Sports &amp; Recreation/Amateur";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_COLLEGE_HIGH_SCHOOL = "Sports &amp; Recreation/College &amp; High School";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_OUTDOOR = "Sports &amp; Recreation/Outdoor";
KalturaITunesSyndicationFeedCategories.SPORTS_RECREATION_PROFESSIONAL = "Sports &amp; Recreation/Professional";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY = "Technology";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_GADGETS = "Technology/Gadgets";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_TECH_NEWS = "Technology/Tech News";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_PODCASTING = "Technology/Podcasting";
KalturaITunesSyndicationFeedCategories.TECHNOLOGY_SOFTWARE_HOW_TO = "Technology/Software How-To";
KalturaITunesSyndicationFeedCategories.TV_FILM = "TV &amp; Film";

function KalturaITunesSyndicationFeedOrderBy(){
}
KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaITunesSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaITunesSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaITunesSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaITunesSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaITunesSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaITunesSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaITunesSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaIpAddressRestrictionType(){
}
KalturaIpAddressRestrictionType.RESTRICT_LIST = 0;
KalturaIpAddressRestrictionType.ALLOW_LIST = 1;

function KalturaLicenseType(){
}
KalturaLicenseType.UNKNOWN = -1;
KalturaLicenseType.NONE = 0;
KalturaLicenseType.COPYRIGHTED = 1;
KalturaLicenseType.PUBLIC_DOMAIN = 2;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION = 3;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_SHARE_ALIKE = 4;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NO_DERIVATIVES = 5;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL = 6;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_SHARE_ALIKE = 7;
KalturaLicenseType.CREATIVECOMMONS_ATTRIBUTION_NON_COMMERCIAL_NO_DERIVATIVES = 8;
KalturaLicenseType.GFDL = 9;
KalturaLicenseType.GPL = 10;
KalturaLicenseType.AFFERO_GPL = 11;
KalturaLicenseType.LGPL = 12;
KalturaLicenseType.BSD = 13;
KalturaLicenseType.APACHE = 14;
KalturaLicenseType.MOZILLA = 15;

function KalturaLiveStreamAdminEntryOrderBy(){
}
KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveStreamAdminEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveStreamAdminEntryOrderBy.PLAYS_ASC = "+plays";
KalturaLiveStreamAdminEntryOrderBy.PLAYS_DESC = "-plays";
KalturaLiveStreamAdminEntryOrderBy.VIEWS_ASC = "+views";
KalturaLiveStreamAdminEntryOrderBy.VIEWS_DESC = "-views";
KalturaLiveStreamAdminEntryOrderBy.DURATION_ASC = "+duration";
KalturaLiveStreamAdminEntryOrderBy.DURATION_DESC = "-duration";
KalturaLiveStreamAdminEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaLiveStreamAdminEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaLiveStreamAdminEntryOrderBy.NAME_ASC = "+name";
KalturaLiveStreamAdminEntryOrderBy.NAME_DESC = "-name";
KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveStreamAdminEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveStreamAdminEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveStreamAdminEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveStreamAdminEntryOrderBy.RANK_ASC = "+rank";
KalturaLiveStreamAdminEntryOrderBy.RANK_DESC = "-rank";
KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveStreamAdminEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaLiveStreamEntryOrderBy(){
}
KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaLiveStreamEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaLiveStreamEntryOrderBy.PLAYS_ASC = "+plays";
KalturaLiveStreamEntryOrderBy.PLAYS_DESC = "-plays";
KalturaLiveStreamEntryOrderBy.VIEWS_ASC = "+views";
KalturaLiveStreamEntryOrderBy.VIEWS_DESC = "-views";
KalturaLiveStreamEntryOrderBy.DURATION_ASC = "+duration";
KalturaLiveStreamEntryOrderBy.DURATION_DESC = "-duration";
KalturaLiveStreamEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaLiveStreamEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaLiveStreamEntryOrderBy.NAME_ASC = "+name";
KalturaLiveStreamEntryOrderBy.NAME_DESC = "-name";
KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaLiveStreamEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaLiveStreamEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaLiveStreamEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaLiveStreamEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaLiveStreamEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaLiveStreamEntryOrderBy.RANK_ASC = "+rank";
KalturaLiveStreamEntryOrderBy.RANK_DESC = "-rank";
KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaLiveStreamEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaMailJobOrderBy(){
}
KalturaMailJobOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMailJobOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMailJobOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMailJobOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMailJobOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaMailJobOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaMailJobOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaMailJobOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaMailJobOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaMailJobOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaMediaEntryOrderBy(){
}
KalturaMediaEntryOrderBy.MEDIA_TYPE_ASC = "+mediaType";
KalturaMediaEntryOrderBy.MEDIA_TYPE_DESC = "-mediaType";
KalturaMediaEntryOrderBy.PLAYS_ASC = "+plays";
KalturaMediaEntryOrderBy.PLAYS_DESC = "-plays";
KalturaMediaEntryOrderBy.VIEWS_ASC = "+views";
KalturaMediaEntryOrderBy.VIEWS_DESC = "-views";
KalturaMediaEntryOrderBy.DURATION_ASC = "+duration";
KalturaMediaEntryOrderBy.DURATION_DESC = "-duration";
KalturaMediaEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaMediaEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaMediaEntryOrderBy.NAME_ASC = "+name";
KalturaMediaEntryOrderBy.NAME_DESC = "-name";
KalturaMediaEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaMediaEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaMediaEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMediaEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMediaEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMediaEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMediaEntryOrderBy.RANK_ASC = "+rank";
KalturaMediaEntryOrderBy.RANK_DESC = "-rank";
KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaMediaEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaMediaFlavorParamsOrderBy(){
}

function KalturaMediaFlavorParamsOutputOrderBy(){
}

function KalturaMediaInfoOrderBy(){
}

function KalturaMediaType(){
}
KalturaMediaType.VIDEO = 1;
KalturaMediaType.IMAGE = 2;
KalturaMediaType.AUDIO = 5;
KalturaMediaType.LIVE_STREAM_FLASH = 201;
KalturaMediaType.LIVE_STREAM_WINDOWS_MEDIA = 202;
KalturaMediaType.LIVE_STREAM_REAL_MEDIA = 203;
KalturaMediaType.LIVE_STREAM_QUICKTIME = 204;

function KalturaMetadataObjectType(){
}
KalturaMetadataObjectType.ENTRY = 1;

function KalturaMetadataOrderBy(){
}
KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_ASC = "+metadataProfileVersion";
KalturaMetadataOrderBy.METADATA_PROFILE_VERSION_DESC = "-metadataProfileVersion";
KalturaMetadataOrderBy.VERSION_ASC = "+version";
KalturaMetadataOrderBy.VERSION_DESC = "-version";
KalturaMetadataOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMetadataOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMetadataOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMetadataOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMetadataProfileCreateMode(){
}
KalturaMetadataProfileCreateMode.API = 1;
KalturaMetadataProfileCreateMode.KMC = 2;

function KalturaMetadataProfileOrderBy(){
}
KalturaMetadataProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMetadataProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMetadataProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMetadataProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaMetadataProfileStatus(){
}
KalturaMetadataProfileStatus.ACTIVE = 1;
KalturaMetadataProfileStatus.DEPRECATED = 2;
KalturaMetadataProfileStatus.TRANSFORMING = 3;

function KalturaMetadataStatus(){
}
KalturaMetadataStatus.VALID = 1;
KalturaMetadataStatus.INVALID = 2;
KalturaMetadataStatus.DELETED = 3;

function KalturaMixEntryOrderBy(){
}
KalturaMixEntryOrderBy.PLAYS_ASC = "+plays";
KalturaMixEntryOrderBy.PLAYS_DESC = "-plays";
KalturaMixEntryOrderBy.VIEWS_ASC = "+views";
KalturaMixEntryOrderBy.VIEWS_DESC = "-views";
KalturaMixEntryOrderBy.DURATION_ASC = "+duration";
KalturaMixEntryOrderBy.DURATION_DESC = "-duration";
KalturaMixEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaMixEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaMixEntryOrderBy.NAME_ASC = "+name";
KalturaMixEntryOrderBy.NAME_DESC = "-name";
KalturaMixEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaMixEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaMixEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaMixEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaMixEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaMixEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaMixEntryOrderBy.RANK_ASC = "+rank";
KalturaMixEntryOrderBy.RANK_DESC = "-rank";
KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaMixEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaModerationFlagStatus(){
}
KalturaModerationFlagStatus.PENDING = 1;
KalturaModerationFlagStatus.MODERATED = 2;

function KalturaModerationFlagType(){
}
KalturaModerationFlagType.SEXUAL_CONTENT = 1;
KalturaModerationFlagType.VIOLENT_REPULSIVE = 2;
KalturaModerationFlagType.HARMFUL_DANGEROUS = 3;
KalturaModerationFlagType.SPAM_COMMERCIALS = 4;

function KalturaModerationObjectType(){
}
KalturaModerationObjectType.ENTRY = 2;
KalturaModerationObjectType.USER = 3;

function KalturaNotificationOrderBy(){
}
KalturaNotificationOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaNotificationOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaNotificationOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaNotificationOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaNotificationOrderBy.PROCESSOR_EXPIRATION_ASC = "+processorExpiration";
KalturaNotificationOrderBy.PROCESSOR_EXPIRATION_DESC = "-processorExpiration";
KalturaNotificationOrderBy.EXECUTION_ATTEMPTS_ASC = "+executionAttempts";
KalturaNotificationOrderBy.EXECUTION_ATTEMPTS_DESC = "-executionAttempts";
KalturaNotificationOrderBy.LOCK_VERSION_ASC = "+lockVersion";
KalturaNotificationOrderBy.LOCK_VERSION_DESC = "-lockVersion";

function KalturaNotificationType(){
}
KalturaNotificationType.ENTRY_ADD = 1;
KalturaNotificationType.ENTR_UPDATE_PERMISSIONS = 2;
KalturaNotificationType.ENTRY_DELETE = 3;
KalturaNotificationType.ENTRY_BLOCK = 4;
KalturaNotificationType.ENTRY_UPDATE = 5;
KalturaNotificationType.ENTRY_UPDATE_THUMBNAIL = 6;
KalturaNotificationType.ENTRY_UPDATE_MODERATION = 7;
KalturaNotificationType.USER_ADD = 21;
KalturaNotificationType.USER_BANNED = 26;

function KalturaNullableBoolean(){
}
KalturaNullableBoolean.NULL_VALUE = -1;
KalturaNullableBoolean.FALSE_VALUE = 0;
KalturaNullableBoolean.TRUE_VALUE = 1;

function KalturaPartnerOrderBy(){
}
KalturaPartnerOrderBy.ID_ASC = "+id";
KalturaPartnerOrderBy.ID_DESC = "-id";
KalturaPartnerOrderBy.NAME_ASC = "+name";
KalturaPartnerOrderBy.NAME_DESC = "-name";
KalturaPartnerOrderBy.WEBSITE_ASC = "+website";
KalturaPartnerOrderBy.WEBSITE_DESC = "-website";
KalturaPartnerOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPartnerOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPartnerOrderBy.ADMIN_NAME_ASC = "+adminName";
KalturaPartnerOrderBy.ADMIN_NAME_DESC = "-adminName";
KalturaPartnerOrderBy.ADMIN_EMAIL_ASC = "+adminEmail";
KalturaPartnerOrderBy.ADMIN_EMAIL_DESC = "-adminEmail";
KalturaPartnerOrderBy.STATUS_ASC = "+status";
KalturaPartnerOrderBy.STATUS_DESC = "-status";

function KalturaPartnerStatus(){
}
KalturaPartnerStatus.ACTIVE = 1;
KalturaPartnerStatus.BLOCKED = 2;
KalturaPartnerStatus.FULL_BLOCK = 3;

function KalturaPartnerType(){
}
KalturaPartnerType.KMC = 1;
KalturaPartnerType.WIKI = 100;
KalturaPartnerType.WORDPRESS = 101;
KalturaPartnerType.DRUPAL = 102;
KalturaPartnerType.DEKIWIKI = 103;
KalturaPartnerType.MOODLE = 104;
KalturaPartnerType.COMMUNITY_EDITION = 105;
KalturaPartnerType.JOOMLA = 106;
KalturaPartnerType.BLACKBOARD = 107;
KalturaPartnerType.SAKAI = 108;

function KalturaPdfFlavorParamsOrderBy(){
}

function KalturaPdfFlavorParamsOutputOrderBy(){
}

function KalturaPermissionItemOrderBy(){
}
KalturaPermissionItemOrderBy.ID_ASC = "+id";
KalturaPermissionItemOrderBy.ID_DESC = "-id";
KalturaPermissionItemOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPermissionItemOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPermissionItemOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPermissionItemOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPermissionItemType(){
}
KalturaPermissionItemType.API_ACTION_ITEM = "kApiActionPermissionItem";
KalturaPermissionItemType.API_PARAMETER_ITEM = "kApiParameterPermissionItem";

function KalturaPermissionOrderBy(){
}
KalturaPermissionOrderBy.ID_ASC = "+id";
KalturaPermissionOrderBy.ID_DESC = "-id";
KalturaPermissionOrderBy.NAME_ASC = "+name";
KalturaPermissionOrderBy.NAME_DESC = "-name";
KalturaPermissionOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPermissionOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPermissionOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPermissionOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPermissionStatus(){
}
KalturaPermissionStatus.ACTIVE = 1;
KalturaPermissionStatus.BLOCKED = 2;
KalturaPermissionStatus.DELETED = 3;

function KalturaPermissionType(){
}
KalturaPermissionType.NORMAL = 1;
KalturaPermissionType.SPECIAL_FEATURE = 2;
KalturaPermissionType.PLUGIN = 3;
KalturaPermissionType.PARTNER_GROUP = 4;

function KalturaPlayableEntryOrderBy(){
}
KalturaPlayableEntryOrderBy.PLAYS_ASC = "+plays";
KalturaPlayableEntryOrderBy.PLAYS_DESC = "-plays";
KalturaPlayableEntryOrderBy.VIEWS_ASC = "+views";
KalturaPlayableEntryOrderBy.VIEWS_DESC = "-views";
KalturaPlayableEntryOrderBy.DURATION_ASC = "+duration";
KalturaPlayableEntryOrderBy.DURATION_DESC = "-duration";
KalturaPlayableEntryOrderBy.MS_DURATION_ASC = "+msDuration";
KalturaPlayableEntryOrderBy.MS_DURATION_DESC = "-msDuration";
KalturaPlayableEntryOrderBy.NAME_ASC = "+name";
KalturaPlayableEntryOrderBy.NAME_DESC = "-name";
KalturaPlayableEntryOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaPlayableEntryOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaPlayableEntryOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPlayableEntryOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPlayableEntryOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPlayableEntryOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaPlayableEntryOrderBy.RANK_ASC = "+rank";
KalturaPlayableEntryOrderBy.RANK_DESC = "-rank";
KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaPlayableEntryOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaPlaylistOrderBy(){
}
KalturaPlaylistOrderBy.NAME_ASC = "+name";
KalturaPlaylistOrderBy.NAME_DESC = "-name";
KalturaPlaylistOrderBy.MODERATION_COUNT_ASC = "+moderationCount";
KalturaPlaylistOrderBy.MODERATION_COUNT_DESC = "-moderationCount";
KalturaPlaylistOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPlaylistOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPlaylistOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPlaylistOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaPlaylistOrderBy.RANK_ASC = "+rank";
KalturaPlaylistOrderBy.RANK_DESC = "-rank";
KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_ASC = "+partnerSortValue";
KalturaPlaylistOrderBy.PARTNER_SORT_VALUE_DESC = "-partnerSortValue";

function KalturaPlaylistType(){
}
KalturaPlaylistType.DYNAMIC = 10;
KalturaPlaylistType.STATIC_LIST = 3;
KalturaPlaylistType.EXTERNAL = 101;

function KalturaPodcastDistributionProfileOrderBy(){
}
KalturaPodcastDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaPodcastDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaPodcastDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaPodcastDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaPodcastDistributionProviderOrderBy(){
}

function KalturaReportType(){
}
KalturaReportType.TOP_CONTENT = 1;
KalturaReportType.CONTENT_DROPOFF = 2;
KalturaReportType.CONTENT_INTERACTIONS = 3;
KalturaReportType.MAP_OVERLAY = 4;
KalturaReportType.TOP_CONTRIBUTORS = 5;
KalturaReportType.TOP_SYNDICATION = 6;
KalturaReportType.CONTENT_CONTRIBUTIONS = 7;

function KalturaSearchConditionComparison(){
}
KalturaSearchConditionComparison.EQUEL = 1;
KalturaSearchConditionComparison.GREATER_THAN = 2;
KalturaSearchConditionComparison.GREATER_THAN_OR_EQUEL = 3;
KalturaSearchConditionComparison.LESS_THAN = 4;
KalturaSearchConditionComparison.LESS_THAN_OR_EQUEL = 5;

function KalturaSearchOperatorType(){
}
KalturaSearchOperatorType.SEARCH_AND = 1;
KalturaSearchOperatorType.SEARCH_OR = 2;

function KalturaSearchProviderType(){
}
KalturaSearchProviderType.FLICKR = 3;
KalturaSearchProviderType.YOUTUBE = 4;
KalturaSearchProviderType.MYSPACE = 7;
KalturaSearchProviderType.PHOTOBUCKET = 8;
KalturaSearchProviderType.JAMENDO = 9;
KalturaSearchProviderType.CCMIXTER = 10;
KalturaSearchProviderType.NYPL = 11;
KalturaSearchProviderType.CURRENT = 12;
KalturaSearchProviderType.MEDIA_COMMONS = 13;
KalturaSearchProviderType.KALTURA = 20;
KalturaSearchProviderType.KALTURA_USER_CLIPS = 21;
KalturaSearchProviderType.ARCHIVE_ORG = 22;
KalturaSearchProviderType.KALTURA_PARTNER = 23;
KalturaSearchProviderType.METACAFE = 24;
KalturaSearchProviderType.SEARCH_PROXY = 28;
KalturaSearchProviderType.PARTNER_SPECIFIC = 100;

function KalturaSessionType(){
}
KalturaSessionType.USER = 0;
KalturaSessionType.ADMIN = 2;

function KalturaShortLinkOrderBy(){
}
KalturaShortLinkOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaShortLinkOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaShortLinkOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaShortLinkOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaShortLinkOrderBy.EXPIRES_AT_ASC = "+expiresAt";
KalturaShortLinkOrderBy.EXPIRES_AT_DESC = "-expiresAt";

function KalturaShortLinkStatus(){
}
KalturaShortLinkStatus.DISABLED = 1;
KalturaShortLinkStatus.ENABLED = 2;
KalturaShortLinkStatus.DELETED = 3;

function KalturaSiteRestrictionType(){
}
KalturaSiteRestrictionType.RESTRICT_SITE_LIST = 0;
KalturaSiteRestrictionType.ALLOW_SITE_LIST = 1;

function KalturaSourceType(){
}
KalturaSourceType.FILE = 1;
KalturaSourceType.WEBCAM = 2;
KalturaSourceType.URL = 5;
KalturaSourceType.SEARCH_PROVIDER = 6;
KalturaSourceType.AKAMAI_LIVE = 29;

function KalturaStatsEventType(){
}
KalturaStatsEventType.WIDGET_LOADED = 1;
KalturaStatsEventType.MEDIA_LOADED = 2;
KalturaStatsEventType.PLAY = 3;
KalturaStatsEventType.PLAY_REACHED_25 = 4;
KalturaStatsEventType.PLAY_REACHED_50 = 5;
KalturaStatsEventType.PLAY_REACHED_75 = 6;
KalturaStatsEventType.PLAY_REACHED_100 = 7;
KalturaStatsEventType.OPEN_EDIT = 8;
KalturaStatsEventType.OPEN_VIRAL = 9;
KalturaStatsEventType.OPEN_DOWNLOAD = 10;
KalturaStatsEventType.OPEN_REPORT = 11;
KalturaStatsEventType.BUFFER_START = 12;
KalturaStatsEventType.BUFFER_END = 13;
KalturaStatsEventType.OPEN_FULL_SCREEN = 14;
KalturaStatsEventType.CLOSE_FULL_SCREEN = 15;
KalturaStatsEventType.REPLAY = 16;
KalturaStatsEventType.SEEK = 17;
KalturaStatsEventType.OPEN_UPLOAD = 18;
KalturaStatsEventType.SAVE_PUBLISH = 19;
KalturaStatsEventType.CLOSE_EDITOR = 20;
KalturaStatsEventType.PRE_BUMPER_PLAYED = 21;
KalturaStatsEventType.POST_BUMPER_PLAYED = 22;
KalturaStatsEventType.BUMPER_CLICKED = 23;
KalturaStatsEventType.PREROLL_STARTED = 24;
KalturaStatsEventType.MIDROLL_STARTED = 25;
KalturaStatsEventType.POSTROLL_STARTED = 26;
KalturaStatsEventType.OVERLAY_STARTED = 27;
KalturaStatsEventType.PREROLL_CLICKED = 28;
KalturaStatsEventType.MIDROLL_CLICKED = 29;
KalturaStatsEventType.POSTROLL_CLICKED = 30;
KalturaStatsEventType.OVERLAY_CLICKED = 31;
KalturaStatsEventType.PREROLL_25 = 32;
KalturaStatsEventType.PREROLL_50 = 33;
KalturaStatsEventType.PREROLL_75 = 34;
KalturaStatsEventType.MIDROLL_25 = 35;
KalturaStatsEventType.MIDROLL_50 = 36;
KalturaStatsEventType.MIDROLL_75 = 37;
KalturaStatsEventType.POSTROLL_25 = 38;
KalturaStatsEventType.POSTROLL_50 = 39;
KalturaStatsEventType.POSTROLL_75 = 40;

function KalturaStatsKmcEventType(){
}
KalturaStatsKmcEventType.CONTENT_PAGE_VIEW = 1001;
KalturaStatsKmcEventType.CONTENT_ADD_PLAYLIST = 1010;
KalturaStatsKmcEventType.CONTENT_EDIT_PLAYLIST = 1011;
KalturaStatsKmcEventType.CONTENT_DELETE_PLAYLIST = 1012;
KalturaStatsKmcEventType.CONTENT_DELETE_ITEM = 1058;
KalturaStatsKmcEventType.CONTENT_DELETE_MIX = 1059;
KalturaStatsKmcEventType.CONTENT_EDIT_ENTRY = 1013;
KalturaStatsKmcEventType.CONTENT_CHANGE_THUMBNAIL = 1014;
KalturaStatsKmcEventType.CONTENT_ADD_TAGS = 1015;
KalturaStatsKmcEventType.CONTENT_REMOVE_TAGS = 1016;
KalturaStatsKmcEventType.CONTENT_ADD_ADMIN_TAGS = 1017;
KalturaStatsKmcEventType.CONTENT_REMOVE_ADMIN_TAGS = 1018;
KalturaStatsKmcEventType.CONTENT_DOWNLOAD = 1019;
KalturaStatsKmcEventType.CONTENT_APPROVE_MODERATION = 1020;
KalturaStatsKmcEventType.CONTENT_REJECT_MODERATION = 1021;
KalturaStatsKmcEventType.CONTENT_BULK_UPLOAD = 1022;
KalturaStatsKmcEventType.CONTENT_ADMIN_KCW_UPLOAD = 1023;
KalturaStatsKmcEventType.CONTENT_CONTENT_GO_TO_PAGE = 1057;
KalturaStatsKmcEventType.CONTENT_ENTRY_DRILLDOWN = 1088;
KalturaStatsKmcEventType.CONTENT_OPEN_PREVIEW_AND_EMBED = 1089;
KalturaStatsKmcEventType.ACCOUNT_CHANGE_PARTNER_INFO = 1030;
KalturaStatsKmcEventType.ACCOUNT_CHANGE_LOGIN_INFO = 1031;
KalturaStatsKmcEventType.ACCOUNT_CONTACT_US_USAGE = 1032;
KalturaStatsKmcEventType.ACCOUNT_UPDATE_SERVER_SETTINGS = 1033;
KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_OVERVIEW = 1034;
KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL = 1035;
KalturaStatsKmcEventType.ACCOUNT_TRANSCODING_SETTINGS = 1036;
KalturaStatsKmcEventType.ACCOUNT_ACCOUNT_UPGRADE = 1037;
KalturaStatsKmcEventType.ACCOUNT_SAVE_SERVER_SETTINGS = 1038;
KalturaStatsKmcEventType.ACCOUNT_ACCESS_CONTROL_DELETE = 1039;
KalturaStatsKmcEventType.ACCOUNT_SAVE_TRANSCODING_SETTINGS = 1040;
KalturaStatsKmcEventType.LOGIN = 1041;
KalturaStatsKmcEventType.DASHBOARD_IMPORT_CONTENT = 1042;
KalturaStatsKmcEventType.DASHBOARD_UPDATE_CONTENT = 1043;
KalturaStatsKmcEventType.DASHBOARD_ACCOUNT_CONTACT_US = 1044;
KalturaStatsKmcEventType.DASHBOARD_VIEW_REPORTS = 1045;
KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYER = 1046;
KalturaStatsKmcEventType.DASHBOARD_EMBED_PLAYLIST = 1047;
KalturaStatsKmcEventType.DASHBOARD_CUSTOMIZE_PLAYERS = 1048;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_SINGLE_VIDEO = 1050;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_PLAYLIST = 1051;
KalturaStatsKmcEventType.APP_STUDIO_NEW_PLAYER_MULTI_TAB_PLAYLIST = 1052;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_SINGLE_VIDEO = 1053;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_PLAYLIST = 1054;
KalturaStatsKmcEventType.APP_STUDIO_EDIT_PLAYER_MULTI_TAB_PLAYLIST = 1055;
KalturaStatsKmcEventType.APP_STUDIO_DUPLICATE_PLAYER = 1056;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_TAB = 1070;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_REPORTS_TAB = 1071;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_USERS_AND_COMMUNITY_REPORTS_TAB = 1072;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTRIBUTORS = 1073;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS = 1074;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS = 1075;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_CONTENT = 1076;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DROPOFF = 1077;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_INTERACTIONS = 1078;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS = 1079;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN = 1080;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_DRILL_DOWN_INTERACTION = 1081;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_CONTENT_CONTRIBUTIONS_DRILLDOWN = 1082;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_VIDEO_DRILL_DOWN_DROPOFF = 1083;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_MAP_OVERLAYS_DRILLDOWN = 1084;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_TOP_SYNDICATIONS_DRILL_DOWN = 1085;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_MONTHLY = 1086;
KalturaStatsKmcEventType.REPORTS_AND_ANALYTICS_BANDWIDTH_USAGE_VIEW_YEARLY = 1087;

function KalturaStorageProfileOrderBy(){
}
KalturaStorageProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaStorageProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaStorageProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaStorageProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaStorageProfileProtocol(){
}
KalturaStorageProfileProtocol.KALTURA_DC = 0;
KalturaStorageProfileProtocol.FTP = 1;
KalturaStorageProfileProtocol.SCP = 2;
KalturaStorageProfileProtocol.SFTP = 3;

function KalturaStorageProfileStatus(){
}
KalturaStorageProfileStatus.DISABLED = 1;
KalturaStorageProfileStatus.AUTOMATIC = 2;
KalturaStorageProfileStatus.MANUAL = 3;

function KalturaSwfFlavorParamsOrderBy(){
}

function KalturaSwfFlavorParamsOutputOrderBy(){
}

function KalturaSyndicationDistributionProfileOrderBy(){
}
KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaSyndicationDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaSyndicationDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaSyndicationDistributionProviderOrderBy(){
}

function KalturaSyndicationFeedStatus(){
}
KalturaSyndicationFeedStatus.DELETED = -1;
KalturaSyndicationFeedStatus.ACTIVE = 1;

function KalturaSyndicationFeedType(){
}
KalturaSyndicationFeedType.GOOGLE_VIDEO = 1;
KalturaSyndicationFeedType.YAHOO = 2;
KalturaSyndicationFeedType.ITUNES = 3;
KalturaSyndicationFeedType.TUBE_MOGUL = 4;
KalturaSyndicationFeedType.KALTURA = 5;
KalturaSyndicationFeedType.KALTURA_XSLT = 6;

function KalturaTVComDistributionProfileOrderBy(){
}
KalturaTVComDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTVComDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaTVComDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaTVComDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaTVComDistributionProviderOrderBy(){
}

function KalturaThumbAssetOrderBy(){
}
KalturaThumbAssetOrderBy.SIZE_ASC = "+size";
KalturaThumbAssetOrderBy.SIZE_DESC = "-size";
KalturaThumbAssetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaThumbAssetOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaThumbAssetOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaThumbAssetOrderBy.UPDATED_AT_DESC = "-updatedAt";
KalturaThumbAssetOrderBy.DELETED_AT_ASC = "+deletedAt";
KalturaThumbAssetOrderBy.DELETED_AT_DESC = "-deletedAt";

function KalturaThumbCropType(){
}
KalturaThumbCropType.RESIZE = 1;
KalturaThumbCropType.RESIZE_WITH_PADDING = 2;
KalturaThumbCropType.CROP = 3;
KalturaThumbCropType.CROP_FROM_TOP = 4;

function KalturaThumbParamsOrderBy(){
}

function KalturaThumbParamsOutputOrderBy(){
}

function KalturaTubeMogulSyndicationFeedCategories(){
}
KalturaTubeMogulSyndicationFeedCategories.ARTS_AND_ANIMATION = "Arts &amp; Animation";
KalturaTubeMogulSyndicationFeedCategories.COMEDY = "Comedy";
KalturaTubeMogulSyndicationFeedCategories.ENTERTAINMENT = "Entertainment";
KalturaTubeMogulSyndicationFeedCategories.MUSIC = "Music";
KalturaTubeMogulSyndicationFeedCategories.NEWS_AND_BLOGS = "News &amp; Blogs";
KalturaTubeMogulSyndicationFeedCategories.SCIENCE_AND_TECHNOLOGY = "Science &amp; Technology";
KalturaTubeMogulSyndicationFeedCategories.SPORTS = "Sports";
KalturaTubeMogulSyndicationFeedCategories.TRAVEL_AND_PLACES = "Travel &amp; Places";
KalturaTubeMogulSyndicationFeedCategories.VIDEO_GAMES = "Video Games";
KalturaTubeMogulSyndicationFeedCategories.ANIMALS_AND_PETS = "Animals &amp; Pets";
KalturaTubeMogulSyndicationFeedCategories.AUTOS = "Autos";
KalturaTubeMogulSyndicationFeedCategories.VLOGS_PEOPLE = "Vlogs &amp; People";
KalturaTubeMogulSyndicationFeedCategories.HOW_TO_INSTRUCTIONAL_DIY = "How To/Instructional/DIY";
KalturaTubeMogulSyndicationFeedCategories.COMMERCIALS_PROMOTIONAL = "Commercials/Promotional";
KalturaTubeMogulSyndicationFeedCategories.FAMILY_AND_KIDS = "Family &amp; Kids";

function KalturaTubeMogulSyndicationFeedOrderBy(){
}
KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaTubeMogulSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaTubeMogulSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaTubeMogulSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaTubeMogulSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaTubeMogulSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaTubeMogulSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaUiConfAdminOrderBy(){
}
KalturaUiConfAdminOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUiConfAdminOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUiConfAdminOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUiConfAdminOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUiConfCreationMode(){
}
KalturaUiConfCreationMode.WIZARD = 2;
KalturaUiConfCreationMode.ADVANCED = 3;

function KalturaUiConfObjType(){
}
KalturaUiConfObjType.PLAYER = 1;
KalturaUiConfObjType.CONTRIBUTION_WIZARD = 2;
KalturaUiConfObjType.SIMPLE_EDITOR = 3;
KalturaUiConfObjType.ADVANCED_EDITOR = 4;
KalturaUiConfObjType.PLAYLIST = 5;
KalturaUiConfObjType.APP_STUDIO = 6;
KalturaUiConfObjType.KRECORD = 7;
KalturaUiConfObjType.PLAYER_V3 = 8;
KalturaUiConfObjType.KMC_ACCOUNT = 9;
KalturaUiConfObjType.KMC_ANALYTICS = 10;
KalturaUiConfObjType.KMC_CONTENT = 11;
KalturaUiConfObjType.KMC_DASHBOARD = 12;
KalturaUiConfObjType.KMC_LOGIN = 13;
KalturaUiConfObjType.PLAYER_SL = 14;
KalturaUiConfObjType.CLIENTSIDE_ENCODER = 15;
KalturaUiConfObjType.KMC_GENERAL = 16;
KalturaUiConfObjType.KMC_ROLES_AND_PERMISSIONS = 17;

function KalturaUiConfOrderBy(){
}
KalturaUiConfOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUiConfOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUiConfOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUiConfOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUploadErrorCode(){
}
KalturaUploadErrorCode.NO_ERROR = 0;
KalturaUploadErrorCode.GENERAL_ERROR = 1;
KalturaUploadErrorCode.PARTIAL_UPLOAD = 2;

function KalturaUploadTokenOrderBy(){
}
KalturaUploadTokenOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUploadTokenOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaUploadTokenStatus(){
}
KalturaUploadTokenStatus.PENDING = 0;
KalturaUploadTokenStatus.PARTIAL_UPLOAD = 1;
KalturaUploadTokenStatus.FULL_UPLOAD = 2;
KalturaUploadTokenStatus.CLOSED = 3;
KalturaUploadTokenStatus.TIMED_OUT = 4;
KalturaUploadTokenStatus.DELETED = 5;

function KalturaUserOrderBy(){
}
KalturaUserOrderBy.ID_ASC = "+id";
KalturaUserOrderBy.ID_DESC = "-id";
KalturaUserOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUserOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaUserRoleOrderBy(){
}
KalturaUserRoleOrderBy.ID_ASC = "+id";
KalturaUserRoleOrderBy.ID_DESC = "-id";
KalturaUserRoleOrderBy.NAME_ASC = "+name";
KalturaUserRoleOrderBy.NAME_DESC = "-name";
KalturaUserRoleOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaUserRoleOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaUserRoleOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaUserRoleOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaUserRoleStatus(){
}
KalturaUserRoleStatus.ACTIVE = 1;
KalturaUserRoleStatus.BLOCKED = 2;
KalturaUserRoleStatus.DELETED = 3;

function KalturaUserStatus(){
}
KalturaUserStatus.BLOCKED = 0;
KalturaUserStatus.ACTIVE = 1;
KalturaUserStatus.DELETED = 2;

function KalturaVideoCodec(){
}
KalturaVideoCodec.NONE = "";
KalturaVideoCodec.VP6 = "vp6";
KalturaVideoCodec.H263 = "h263";
KalturaVideoCodec.H264 = "h264";
KalturaVideoCodec.H264B = "h264b";
KalturaVideoCodec.H264M = "h264m";
KalturaVideoCodec.H264H = "h264h";
KalturaVideoCodec.FLV = "flv";
KalturaVideoCodec.MPEG4 = "mpeg4";
KalturaVideoCodec.THEORA = "theora";
KalturaVideoCodec.WMV2 = "wmv2";
KalturaVideoCodec.WMV3 = "wmv3";
KalturaVideoCodec.WVC1A = "wvc1a";
KalturaVideoCodec.VP8 = "vp8";
KalturaVideoCodec.MPEG2 = "mpeg2";
KalturaVideoCodec.COPY = "copy";

function KalturaVirusFoundAction(){
}
KalturaVirusFoundAction.NONE = 0;
KalturaVirusFoundAction.DELETE = 1;
KalturaVirusFoundAction.CLEAN_NONE = 2;
KalturaVirusFoundAction.CLEAN_DELETE = 3;

function KalturaVirusScanEngineType(){
}
KalturaVirusScanEngineType.SYMANTEC_SCAN_ENGINE = "symantecScanEngine.SymantecScanEngine";

function KalturaVirusScanProfileOrderBy(){
}
KalturaVirusScanProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaVirusScanProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaVirusScanProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaVirusScanProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaVirusScanProfileStatus(){
}
KalturaVirusScanProfileStatus.DISABLED = 1;
KalturaVirusScanProfileStatus.ENABLED = 2;
KalturaVirusScanProfileStatus.DELETED = 3;

function KalturaWidgetOrderBy(){
}
KalturaWidgetOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaWidgetOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaWidgetSecurityType(){
}
KalturaWidgetSecurityType.NONE = 1;
KalturaWidgetSecurityType.TIMEHASH = 2;

function KalturaYahooSyndicationFeedAdultValues(){
}
KalturaYahooSyndicationFeedAdultValues.ADULT = "adult";
KalturaYahooSyndicationFeedAdultValues.NON_ADULT = "nonadult";

function KalturaYahooSyndicationFeedCategories(){
}
KalturaYahooSyndicationFeedCategories.ACTION = "Action";
KalturaYahooSyndicationFeedCategories.ART_AND_ANIMATION = "Art &amp; Animation";
KalturaYahooSyndicationFeedCategories.ENTERTAINMENT_AND_TV = "Entertainment &amp; TV";
KalturaYahooSyndicationFeedCategories.FOOD = "Food";
KalturaYahooSyndicationFeedCategories.GAMES = "Games";
KalturaYahooSyndicationFeedCategories.HOW_TO = "How-To";
KalturaYahooSyndicationFeedCategories.MUSIC = "Music";
KalturaYahooSyndicationFeedCategories.PEOPLE_AND_VLOGS = "People &amp; Vlogs";
KalturaYahooSyndicationFeedCategories.SCIENCE_AND_ENVIRONMENT = "Science &amp; Environment";
KalturaYahooSyndicationFeedCategories.TRANSPORTATION = "Transportation";
KalturaYahooSyndicationFeedCategories.ANIMALS = "Animals";
KalturaYahooSyndicationFeedCategories.COMMERCIALS = "Commercials";
KalturaYahooSyndicationFeedCategories.FAMILY = "Family";
KalturaYahooSyndicationFeedCategories.FUNNY_VIDEOS = "Funny Videos";
KalturaYahooSyndicationFeedCategories.HEALTH_AND_BEAUTY = "Health &amp; Beauty";
KalturaYahooSyndicationFeedCategories.MOVIES_AND_SHORTS = "Movies &amp; Shorts";
KalturaYahooSyndicationFeedCategories.NEWS_AND_POLITICS = "News &amp; Politics";
KalturaYahooSyndicationFeedCategories.PRODUCTS_AND_TECH = "Products &amp; Tech.";
KalturaYahooSyndicationFeedCategories.SPORTS = "Sports";
KalturaYahooSyndicationFeedCategories.TRAVEL = "Travel";

function KalturaYahooSyndicationFeedOrderBy(){
}
KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_ASC = "+playlistId";
KalturaYahooSyndicationFeedOrderBy.PLAYLIST_ID_DESC = "-playlistId";
KalturaYahooSyndicationFeedOrderBy.NAME_ASC = "+name";
KalturaYahooSyndicationFeedOrderBy.NAME_DESC = "-name";
KalturaYahooSyndicationFeedOrderBy.TYPE_ASC = "+type";
KalturaYahooSyndicationFeedOrderBy.TYPE_DESC = "-type";
KalturaYahooSyndicationFeedOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYahooSyndicationFeedOrderBy.CREATED_AT_DESC = "-createdAt";

function KalturaYouTubeDistributionProfileOrderBy(){
}
KalturaYouTubeDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYouTubeDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaYouTubeDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaYouTubeDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaYouTubeDistributionProviderOrderBy(){
}

function KalturaYoutubeApiDistributionProfileOrderBy(){
}
KalturaYoutubeApiDistributionProfileOrderBy.CREATED_AT_ASC = "+createdAt";
KalturaYoutubeApiDistributionProfileOrderBy.CREATED_AT_DESC = "-createdAt";
KalturaYoutubeApiDistributionProfileOrderBy.UPDATED_AT_ASC = "+updatedAt";
KalturaYoutubeApiDistributionProfileOrderBy.UPDATED_AT_DESC = "-updatedAt";

function KalturaYoutubeApiDistributionProviderOrderBy(){
}
