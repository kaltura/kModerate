/**
 */
function KalturaBaseRestriction(){
}
KalturaBaseRestriction.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Access Control Profile
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Access Control Profile
 *	.
 * @param	systemName	string		System name of the Access Control Profile
 *	.
 * @param	description	string		The description of the Access Control Profile
 *	.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) 
 *	 (readOnly).
 * @param	isDefault	int		True if this Conversion Profile is the default
 *	.
 * @param	restrictions	array		Array of Access Control Restrictions
 *	.
 */
function KalturaAccessControl(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.isDefault = null;
	this.restrictions = null;
}
KalturaAccessControl.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaSearchItem(){
}
KalturaSearchItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	orderBy	string		.
 * @param	advancedSearch	KalturaSearchItem		.
 */
function KalturaFilter(){
	this.orderBy = null;
	this.advancedSearch = null;
}
KalturaFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 */
function KalturaAccessControlBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
}
KalturaAccessControlBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAccessControlFilter(){
}
KalturaAccessControlFilter.inheritsFrom (KalturaAccessControlBaseFilter);


/**
 * @param	pageSize	int		The number of objects to retrieve. (Default is 30, maximum page size is 500).
 *	.
 * @param	pageIndex	int		The page number for which {pageSize} of objects should be retrieved (Default is 1).
 *	.
 */
function KalturaFilterPager(){
	this.pageSize = null;
	this.pageIndex = null;
}
KalturaFilterPager.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaAccessControlListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaAccessControlListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	screenName	string		.
 * @param	fullName	string		DEPRECATED.
 * @param	email	string		.
 * @param	dateOfBirth	int		.
 * @param	country	string		.
 * @param	state	string		.
 * @param	city	string		.
 * @param	zip	string		.
 * @param	thumbnailUrl	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	adminTags	string		Admin tags can be updated only by using an admin session.
 * @param	gender	int		.
 * @param	status	int		.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 * @param	partnerData	string		Can be used to store various partner related data as a string .
 * @param	indexedPartnerDataInt	int		.
 * @param	indexedPartnerDataString	string		.
 * @param	storageSize	int		 (readOnly).
 * @param	password	string		 (insertOnly).
 * @param	firstName	string		.
 * @param	lastName	string		.
 * @param	isAdmin	bool		.
 * @param	lastLoginTime	int		 (readOnly).
 * @param	statusUpdatedAt	int		 (readOnly).
 * @param	deletedAt	int		 (readOnly).
 * @param	loginEnabled	bool		 (readOnly).
 * @param	roleIds	string		.
 * @param	roleNames	string		 (readOnly).
 * @param	isAccountOwner	bool		 (readOnly).
 */
function KalturaUser(){
	this.id = null;
	this.partnerId = null;
	this.screenName = null;
	this.fullName = null;
	this.email = null;
	this.dateOfBirth = null;
	this.country = null;
	this.state = null;
	this.city = null;
	this.zip = null;
	this.thumbnailUrl = null;
	this.description = null;
	this.tags = null;
	this.adminTags = null;
	this.gender = null;
	this.status = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.indexedPartnerDataInt = null;
	this.indexedPartnerDataString = null;
	this.storageSize = null;
	this.password = null;
	this.firstName = null;
	this.lastName = null;
	this.isAdmin = null;
	this.lastLoginTime = null;
	this.statusUpdatedAt = null;
	this.deletedAt = null;
	this.loginEnabled = null;
	this.roleIds = null;
	this.roleNames = null;
	this.isAccountOwner = null;
}
KalturaUser.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaAdminUser(){
}
KalturaAdminUser.inheritsFrom (KalturaUser);


/**
 */
function KalturaDynamicEnum(){
}
KalturaDynamicEnum.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		Auto generated 10 characters alphanumeric string
 *	 (readOnly).
 * @param	name	string		Entry name (Min 1 chars)
 *	.
 * @param	description	string		Entry description
 *	.
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The ID of the user who is the owner of this entry 
 *	.
 * @param	tags	string		Entry tags
 *	.
 * @param	adminTags	string		Entry admin tags can be updated only by administrators
 *	.
 * @param	categories	string		.
 * @param	categoriesIds	string		.
 * @param	status	string		 (readOnly).
 * @param	moderationStatus	int		Entry moderation status
 *	 (readOnly).
 * @param	moderationCount	int		Number of moderation requests waiting for this entry
 *	 (readOnly).
 * @param	type	string		The type of the entry, this is auto filled by the derived entry object
 *	.
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Entry update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	rank	float		Calculated rank
 *	 (readOnly).
 * @param	totalRank	int		The total (sum) of all votes
 *	 (readOnly).
 * @param	votes	int		Number of votes
 *	 (readOnly).
 * @param	groupId	int		.
 * @param	partnerData	string		Can be used to store various partner related data as a string 
 *	.
 * @param	downloadUrl	string		Download URL for the entry
 *	 (readOnly).
 * @param	searchText	string		Indexed search text for full text search (readOnly).
 * @param	licenseType	int		License type used for this entry
 *	.
 * @param	version	int		Version of the entry data (readOnly).
 * @param	thumbnailUrl	string		Thumbnail URL
 *	 (insertOnly).
 * @param	accessControlId	int		The Access Control ID assigned to this entry (null when not set, send -1 to remove)  
 *	.
 * @param	startDate	int		Entry scheduling start date (null when not set, send -1 to remove)
 *	.
 * @param	endDate	int		Entry scheduling end date (null when not set, send -1 to remove)
 *	.
 * @param	referenceId	string		Entry external reference id
 *	.
 * @param	replacingEntryId	string		ID of temporary entry that will replace this entry when it's approved and ready for replacement
 *	 (readOnly).
 * @param	replacedEntryId	string		ID of the entry that will be replaced when the replacement approved and this entry is ready
 *	 (readOnly).
 * @param	replacementStatus	string		Status of the replacement readiness and approval
 *	 (readOnly).
 * @param	partnerSortValue	int		Can be used to store various partner related data as a numeric value
 *	.
 * @param	conversionProfileId	int		Override the default ingestion profile  
 *	.
 */
function KalturaBaseEntry(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.userId = null;
	this.tags = null;
	this.adminTags = null;
	this.categories = null;
	this.categoriesIds = null;
	this.status = null;
	this.moderationStatus = null;
	this.moderationCount = null;
	this.type = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.rank = null;
	this.totalRank = null;
	this.votes = null;
	this.groupId = null;
	this.partnerData = null;
	this.downloadUrl = null;
	this.searchText = null;
	this.licenseType = null;
	this.version = null;
	this.thumbnailUrl = null;
	this.accessControlId = null;
	this.startDate = null;
	this.endDate = null;
	this.referenceId = null;
	this.replacingEntryId = null;
	this.replacedEntryId = null;
	this.replacementStatus = null;
	this.partnerSortValue = null;
	this.conversionProfileId = null;
}
KalturaBaseEntry.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaResource(){
}
KalturaResource.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		This filter should be in use for retrieving only a specific entry (identified by its entryId).
 *	@var string.
 * @param	idIn	string		This filter should be in use for retrieving few specific entries (string should include comma separated list of entryId strings).
 *	@var string.
 * @param	idNotIn	string		.
 * @param	nameLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry names (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	nameMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	nameMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry names, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	nameEqual	string		This filter should be in use for retrieving entries with a specific name.
 *	@var string.
 * @param	partnerIdEqual	int		This filter should be in use for retrieving only entries which were uploaded by/assigned to users of a specific Kaltura Partner (identified by Partner ID).
 *	@var int.
 * @param	partnerIdIn	string		This filter should be in use for retrieving only entries within Kaltura network which were uploaded by/assigned to users of few Kaltura Partners  (string should include comma separated list of PartnerIDs)
 *	@var string.
 * @param	userIdEqual	string		This filter parameter should be in use for retrieving only entries, uploaded by/assigned to a specific user (identified by user Id).
 *	@var string.
 * @param	tagsLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	tagsMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	tagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	adminTagsLike	string		This filter should be in use for retrieving specific entries. It should include only one string to search for in entry tags set by an ADMIN user (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	adminTagsMultiLikeOr	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an OR logic to retrieve entries that contain at least one input string (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	adminTagsMultiLikeAnd	string		This filter should be in use for retrieving specific entries. It could include few (comma separated) strings for searching in entry tags, set by an ADMIN user, while applying an AND logic to retrieve entries that contain all input strings (no wildcards, spaces are treated as part of the string).
 *	@var string.
 * @param	categoriesMatchAnd	string		.
 * @param	categoriesMatchOr	string		.
 * @param	categoriesIdsMatchAnd	string		.
 * @param	categoriesIdsMatchOr	string		.
 * @param	statusEqual	string		This filter should be in use for retrieving only entries, at a specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 *	@var KalturaEntryStatus.
 * @param	statusNotEqual	string		This filter should be in use for retrieving only entries, not at a specific {@link ?object=KalturaEntryStatus KalturaEntryStatus}.
 *	@var KalturaEntryStatus.
 * @param	statusIn	string		This filter should be in use for retrieving only entries, at few specific {@link ?object=KalturaEntryStatus KalturaEntryStatus} (comma separated).
 *	@dynamicType KalturaEntryStatus.
 * @param	statusNotIn	string		This filter should be in use for retrieving only entries, not at few specific {@link ?object=KalturaEntryStatus KalturaEntryStatus} (comma separated).
 *	@dynamicType KalturaEntryStatus.
 * @param	moderationStatusEqual	int		.
 * @param	moderationStatusNotEqual	int		.
 * @param	moderationStatusIn	string		.
 * @param	moderationStatusNotIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		This filter should be in use for retrieving entries of few {@link ?object=KalturaEntryType KalturaEntryType} (string should include a comma separated list of {@link ?object=KalturaEntryType KalturaEntryType} enumerated parameters).
 *	@dynamicType KalturaEntryType.
 * @param	createdAtGreaterThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system after a specific time/date (standard timestamp format).
 *	@var int.
 * @param	createdAtLessThanOrEqual	int		This filter parameter should be in use for retrieving only entries which were created at Kaltura system before a specific time/date (standard timestamp format).
 *	@var int.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	groupIdEqual	int		.
 * @param	searchTextMatchAnd	string		This filter should be in use for retrieving specific entries while search match the input string within all of the following metadata attributes: name, description, tags, adminTags.
 *	@var string.
 * @param	searchTextMatchOr	string		This filter should be in use for retrieving specific entries while search match the input string within at least one of the following metadata attributes: name, description, tags, adminTags.
 *	@var string.
 * @param	accessControlIdEqual	int		.
 * @param	accessControlIdIn	string		.
 * @param	startDateGreaterThanOrEqual	int		.
 * @param	startDateLessThanOrEqual	int		.
 * @param	startDateGreaterThanOrEqualOrNull	int		.
 * @param	startDateLessThanOrEqualOrNull	int		.
 * @param	endDateGreaterThanOrEqual	int		.
 * @param	endDateLessThanOrEqual	int		.
 * @param	endDateGreaterThanOrEqualOrNull	int		.
 * @param	endDateLessThanOrEqualOrNull	int		.
 * @param	referenceIdEqual	string		.
 * @param	referenceIdIn	string		.
 * @param	replacingEntryIdEqual	string		.
 * @param	replacingEntryIdIn	string		.
 * @param	replacedEntryIdEqual	string		.
 * @param	replacedEntryIdIn	string		.
 * @param	replacementStatusEqual	string		.
 * @param	replacementStatusIn	string		.
 * @param	partnerSortValueGreaterThanOrEqual	int		.
 * @param	partnerSortValueLessThanOrEqual	int		.
 * @param	tagsNameMultiLikeOr	string		.
 * @param	tagsAdminTagsMultiLikeOr	string		.
 * @param	tagsAdminTagsNameMultiLikeOr	string		.
 * @param	tagsNameMultiLikeAnd	string		.
 * @param	tagsAdminTagsMultiLikeAnd	string		.
 * @param	tagsAdminTagsNameMultiLikeAnd	string		.
 */
function KalturaBaseEntryBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.idNotIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.adminTagsLike = null;
	this.adminTagsMultiLikeOr = null;
	this.adminTagsMultiLikeAnd = null;
	this.categoriesMatchAnd = null;
	this.categoriesMatchOr = null;
	this.categoriesIdsMatchAnd = null;
	this.categoriesIdsMatchOr = null;
	this.statusEqual = null;
	this.statusNotEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.moderationStatusEqual = null;
	this.moderationStatusNotEqual = null;
	this.moderationStatusIn = null;
	this.moderationStatusNotIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.groupIdEqual = null;
	this.searchTextMatchAnd = null;
	this.searchTextMatchOr = null;
	this.accessControlIdEqual = null;
	this.accessControlIdIn = null;
	this.startDateGreaterThanOrEqual = null;
	this.startDateLessThanOrEqual = null;
	this.startDateGreaterThanOrEqualOrNull = null;
	this.startDateLessThanOrEqualOrNull = null;
	this.endDateGreaterThanOrEqual = null;
	this.endDateLessThanOrEqual = null;
	this.endDateGreaterThanOrEqualOrNull = null;
	this.endDateLessThanOrEqualOrNull = null;
	this.referenceIdEqual = null;
	this.referenceIdIn = null;
	this.replacingEntryIdEqual = null;
	this.replacingEntryIdIn = null;
	this.replacedEntryIdEqual = null;
	this.replacedEntryIdIn = null;
	this.replacementStatusEqual = null;
	this.replacementStatusIn = null;
	this.partnerSortValueGreaterThanOrEqual = null;
	this.partnerSortValueLessThanOrEqual = null;
	this.tagsNameMultiLikeOr = null;
	this.tagsAdminTagsMultiLikeOr = null;
	this.tagsAdminTagsNameMultiLikeOr = null;
	this.tagsNameMultiLikeAnd = null;
	this.tagsAdminTagsMultiLikeAnd = null;
	this.tagsAdminTagsNameMultiLikeAnd = null;
}
KalturaBaseEntryBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	freeText	string		.
 */
function KalturaBaseEntryFilter(){
	this.freeText = null;
}
KalturaBaseEntryFilter.inheritsFrom (KalturaBaseEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBaseEntryListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBaseEntryListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Moderation flag id (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		The user id that added the moderation flag (readOnly).
 * @param	moderationObjectType	int		The type of the moderation flag (entry or user) (readOnly).
 * @param	flaggedEntryId	string		If moderation flag is set for entry, this is the flagged entry id.
 * @param	flaggedUserId	string		If moderation flag is set for user, this is the flagged user id.
 * @param	status	int		The moderation flag status (readOnly).
 * @param	comments	string		The comment that was added to the flag.
 * @param	flagType	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaModerationFlag(){
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.moderationObjectType = null;
	this.flaggedEntryId = null;
	this.flaggedUserId = null;
	this.status = null;
	this.comments = null;
	this.flagType = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaModerationFlag.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaModerationFlagListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaModerationFlagListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	referrer	string		.
 */
function KalturaEntryContextDataParams(){
	this.referrer = null;
}
KalturaEntryContextDataParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	isSiteRestricted	bool		.
 * @param	isCountryRestricted	bool		.
 * @param	isSessionRestricted	bool		.
 * @param	isIpAddressRestricted	bool		.
 * @param	previewLength	int		.
 * @param	isScheduledNow	bool		.
 * @param	isAdmin	bool		.
 */
function KalturaEntryContextDataResult(){
	this.isSiteRestricted = null;
	this.isCountryRestricted = null;
	this.isSessionRestricted = null;
	this.isIpAddressRestricted = null;
	this.previewLength = null;
	this.isScheduledNow = null;
	this.isAdmin = null;
}
KalturaEntryContextDataResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	field	string		.
 * @param	value	string		.
 */
function KalturaBulkUploadPluginData(){
	this.field = null;
	this.value = null;
}
KalturaBulkUploadPluginData.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the result
 *	 (readOnly).
 * @param	bulkUploadJobId	int		The id of the parent job
 *	.
 * @param	lineIndex	int		The index of the line in the CSV
 *	.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	entryStatus	int		.
 * @param	rowData	string		The data as recieved in the csv
 *	.
 * @param	title	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	url	string		.
 * @param	contentType	string		.
 * @param	conversionProfileId	int		.
 * @param	accessControlProfileId	int		.
 * @param	category	string		.
 * @param	scheduleStartDate	int		.
 * @param	scheduleEndDate	int		.
 * @param	thumbnailUrl	string		.
 * @param	thumbnailSaved	bool		.
 * @param	partnerData	string		.
 * @param	errorDescription	string		.
 * @param	pluginsData	array		.
 */
function KalturaBulkUploadResult(){
	this.id = null;
	this.bulkUploadJobId = null;
	this.lineIndex = null;
	this.partnerId = null;
	this.entryId = null;
	this.entryStatus = null;
	this.rowData = null;
	this.title = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.contentType = null;
	this.conversionProfileId = null;
	this.accessControlProfileId = null;
	this.category = null;
	this.scheduleStartDate = null;
	this.scheduleEndDate = null;
	this.thumbnailUrl = null;
	this.thumbnailSaved = null;
	this.partnerData = null;
	this.errorDescription = null;
	this.pluginsData = null;
}
KalturaBulkUploadResult.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		.
 * @param	uploadedBy	string		.
 * @param	uploadedByUserId	string		.
 * @param	uploadedOn	int		.
 * @param	numOfEntries	int		.
 * @param	status	int		.
 * @param	logFileUrl	string		.
 * @param	csvFileUrl	string		DEPRECATED.
 * @param	bulkFileUrl	string		.
 * @param	results	array		.
 */
function KalturaBulkUpload(){
	this.id = null;
	this.uploadedBy = null;
	this.uploadedByUserId = null;
	this.uploadedOn = null;
	this.numOfEntries = null;
	this.status = null;
	this.logFileUrl = null;
	this.csvFileUrl = null;
	this.bulkFileUrl = null;
	this.results = null;
}
KalturaBulkUpload.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBulkUploadListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBulkUploadListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Category
 *	 (readOnly).
 * @param	parentId	int		.
 * @param	depth	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Category. 
 *	The following characters are not allowed: '<', '>', ','
 *	.
 * @param	fullName	string		The full name of the Category
 *	 (readOnly).
 * @param	entriesCount	int		Number of entries in this Category (including child categories)
 *	 (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 */
function KalturaCategory(){
	this.id = null;
	this.parentId = null;
	this.depth = null;
	this.partnerId = null;
	this.name = null;
	this.fullName = null;
	this.entriesCount = null;
	this.createdAt = null;
}
KalturaCategory.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	parentIdEqual	int		.
 * @param	parentIdIn	string		.
 * @param	depthEqual	int		.
 * @param	fullNameEqual	string		.
 * @param	fullNameStartsWith	string		.
 */
function KalturaCategoryBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.depthEqual = null;
	this.fullNameEqual = null;
	this.fullNameStartsWith = null;
}
KalturaCategoryBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaCategoryFilter(){
}
KalturaCategoryFilter.inheritsFrom (KalturaCategoryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaCategoryListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaCategoryListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	conversionProfileIdEqual	int		.
 * @param	conversionProfileIdIn	string		.
 * @param	assetParamsIdEqual	int		.
 * @param	assetParamsIdIn	string		.
 * @param	readyBehaviorEqual	int		.
 * @param	readyBehaviorIn	string		.
 * @param	originEqual	int		.
 * @param	originIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 */
function KalturaConversionProfileAssetParamsBaseFilter(){
	this.conversionProfileIdEqual = null;
	this.conversionProfileIdIn = null;
	this.assetParamsIdEqual = null;
	this.assetParamsIdIn = null;
	this.readyBehaviorEqual = null;
	this.readyBehaviorIn = null;
	this.originEqual = null;
	this.originIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
}
KalturaConversionProfileAssetParamsBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	statusEqual	string		.
 * @param	statusIn	string		.
 * @param	nameEqual	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	defaultEntryIdEqual	string		.
 * @param	defaultEntryIdIn	string		.
 */
function KalturaConversionProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.nameEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.defaultEntryIdEqual = null;
	this.defaultEntryIdIn = null;
}
KalturaConversionProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaConversionProfileFilter(){
}
KalturaConversionProfileFilter.inheritsFrom (KalturaConversionProfileBaseFilter);


/**
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	isSystemDefaultEqual	int		.
 * @param	tagsEqual	string		.
 * @param	formatEqual	string		.
 */
function KalturaAssetParamsBaseFilter(){
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.isSystemDefaultEqual = null;
	this.tagsEqual = null;
	this.formatEqual = null;
}
KalturaAssetParamsBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAssetParamsFilter(){
}
KalturaAssetParamsFilter.inheritsFrom (KalturaAssetParamsBaseFilter);


/**
 * @param	conversionProfileIdFilter	KalturaConversionProfileFilter		.
 * @param	assetParamsIdFilter	KalturaAssetParamsFilter		.
 */
function KalturaConversionProfileAssetParamsFilter(){
	this.conversionProfileIdFilter = null;
	this.assetParamsIdFilter = null;
}
KalturaConversionProfileAssetParamsFilter.inheritsFrom (KalturaConversionProfileAssetParamsBaseFilter);


/**
 * @param	conversionProfileId	int		The id of the conversion profile
 *	 (readOnly).
 * @param	assetParamsId	int		The id of the asset params
 *	 (readOnly).
 * @param	readyBehavior	int		The ingestion origin of the asset params
 *	.
 * @param	origin	int		The ingestion origin of the asset params
 *	.
 * @param	systemName	string		Asset params system name
 *	.
 */
function KalturaConversionProfileAssetParams(){
	this.conversionProfileId = null;
	this.assetParamsId = null;
	this.readyBehavior = null;
	this.origin = null;
	this.systemName = null;
}
KalturaConversionProfileAssetParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaConversionProfileAssetParamsListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaConversionProfileAssetParamsListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	left	int		Crop left point
 *	.
 * @param	top	int		Crop top point
 *	.
 * @param	width	int		Crop width
 *	.
 * @param	height	int		Crop height
 *	.
 */
function KalturaCropDimensions(){
	this.left = null;
	this.top = null;
	this.width = null;
	this.height = null;
}
KalturaCropDimensions.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Conversion Profile
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	status	string		.
 * @param	name	string		The name of the Conversion Profile
 *	.
 * @param	systemName	string		System name of the Conversion Profile
 *	.
 * @param	tags	string		Comma separated tags
 *	.
 * @param	description	string		The description of the Conversion Profile
 *	.
 * @param	defaultEntryId	string		ID of the default entry to be used for template data
 *	.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) 
 *	 (readOnly).
 * @param	flavorParamsIds	string		List of included flavor ids (comma separated)
 *	.
 * @param	isDefault	int		Indicates that this conversion profile is system default
 *	.
 * @param	isPartnerDefault	bool		Indicates that this conversion profile is partner default
 *	 (readOnly).
 * @param	cropDimensions	KalturaCropDimensions		Cropping dimensions
 *	DEPRECATED.
 * @param	clipStart	int		Clipping start position (in miliseconds)
 *	DEPRECATED.
 * @param	clipDuration	int		Clipping duration (in miliseconds)
 *	DEPRECATED.
 * @param	xslTransformation	string		XSL to transform ingestion MRSS XML
 *	.
 * @param	storageProfileId	int		ID of default storage profile to be used for linked net-storage file syncs
 *	.
 */
function KalturaConversionProfile(){
	this.id = null;
	this.partnerId = null;
	this.status = null;
	this.name = null;
	this.systemName = null;
	this.tags = null;
	this.description = null;
	this.defaultEntryId = null;
	this.createdAt = null;
	this.flavorParamsIds = null;
	this.isDefault = null;
	this.isPartnerDefault = null;
	this.cropDimensions = null;
	this.clipStart = null;
	this.clipDuration = null;
	this.xslTransformation = null;
	this.storageProfileId = null;
}
KalturaConversionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaConversionProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaConversionProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	dataContent	string		The data of the entry.
 * @param	retrieveDataContentByGet	bool		indicator whether to return the object for get action with the dataContent field. (insertOnly).
 */
function KalturaDataEntry(){
	this.dataContent = null;
	this.retrieveDataContentByGet = null;
}
KalturaDataEntry.inheritsFrom (KalturaBaseEntry);


/**
 */
function KalturaDataEntryBaseFilter(){
}
KalturaDataEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaDataEntryFilter(){
}
KalturaDataEntryFilter.inheritsFrom (KalturaDataEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDataListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDataListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	documentType	int		The type of the document (insertOnly).
 */
function KalturaDocumentEntry(){
	this.documentType = null;
}
KalturaDocumentEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	flavorParamsId	int		The id of the flavor params, set to null for source flavor
 *	.
 * @param	name	string		Attribute name  
 *	.
 * @param	value	string		Attribute value  
 *	.
 */
function KalturaConversionAttribute(){
	this.flavorParamsId = null;
	this.name = null;
	this.value = null;
}
KalturaConversionAttribute.inheritsFrom (KalturaObjectBase);


/**
 * @param	documentTypeEqual	int		.
 * @param	documentTypeIn	string		.
 */
function KalturaDocumentEntryBaseFilter(){
	this.documentTypeEqual = null;
	this.documentTypeIn = null;
}
KalturaDocumentEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaDocumentEntryFilter(){
}
KalturaDocumentEntryFilter.inheritsFrom (KalturaDocumentEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDocumentListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDocumentListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	emailAddress	string		.
 * @param	mailboxId	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	conversionProfile2Id	int		.
 * @param	moderationStatus	int		.
 * @param	status	int		 (readOnly).
 * @param	createdAt	string		 (readOnly).
 * @param	defaultCategory	string		.
 * @param	defaultUserId	string		.
 * @param	defaultTags	string		.
 * @param	defaultAdminTags	string		.
 * @param	maxAttachmentSizeKbytes	int		.
 * @param	maxAttachmentsPerMail	int		.
 */
function KalturaEmailIngestionProfile(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.emailAddress = null;
	this.mailboxId = null;
	this.partnerId = null;
	this.conversionProfile2Id = null;
	this.moderationStatus = null;
	this.status = null;
	this.createdAt = null;
	this.defaultCategory = null;
	this.defaultUserId = null;
	this.defaultTags = null;
	this.defaultAdminTags = null;
	this.maxAttachmentSizeKbytes = null;
	this.maxAttachmentsPerMail = null;
}
KalturaEmailIngestionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	plays	int		Number of plays
 *	 (readOnly).
 * @param	views	int		Number of views
 *	 (readOnly).
 * @param	width	int		The width in pixels
 *	 (readOnly).
 * @param	height	int		The height in pixels
 *	 (readOnly).
 * @param	duration	int		The duration in seconds
 *	 (readOnly).
 * @param	msDuration	int		The duration in miliseconds
 *	 (readOnly).
 * @param	durationType	string		The duration type (short for 0-4 mins, medium for 4-20 mins, long for 20+ mins)
 *	 (readOnly).
 */
function KalturaPlayableEntry(){
	this.plays = null;
	this.views = null;
	this.width = null;
	this.height = null;
	this.duration = null;
	this.msDuration = null;
	this.durationType = null;
}
KalturaPlayableEntry.inheritsFrom (KalturaBaseEntry);


/**
 * @param	mediaType	int		The media type of the entry
 *	 (insertOnly).
 * @param	conversionQuality	string		Override the default conversion quality
 *	DEPRECATED - use conversionProfileId instead (insertOnly).
 * @param	sourceType	int		The source type of the entry  (insertOnly).
 * @param	searchProviderType	int		The search provider type used to import this entry (insertOnly).
 * @param	searchProviderId	string		The ID of the media in the importing site (insertOnly).
 * @param	creditUserName	string		The user name used for credits.
 * @param	creditUrl	string		The URL for credits.
 * @param	mediaDate	int		The media date extracted from EXIF data (For images) as Unix timestamp (In seconds) (readOnly).
 * @param	dataUrl	string		The URL used for playback. This is not the download URL. (readOnly).
 * @param	flavorParamsIds	string		Comma separated flavor params ids that exists for this media entry
 *	 (readOnly).
 */
function KalturaMediaEntry(){
	this.mediaType = null;
	this.conversionQuality = null;
	this.sourceType = null;
	this.searchProviderType = null;
	this.searchProviderId = null;
	this.creditUserName = null;
	this.creditUrl = null;
	this.mediaDate = null;
	this.dataUrl = null;
	this.flavorParamsIds = null;
}
KalturaMediaEntry.inheritsFrom (KalturaPlayableEntry);


/**
 * @param	id	string		The ID of the Flavor Asset
 *	 (readOnly).
 * @param	entryId	string		The entry ID of the Flavor Asset
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	status	int		The status of the Flavor Asset
 *	 (readOnly).
 * @param	version	int		The version of the Flavor Asset
 *	 (readOnly).
 * @param	size	int		The size (in KBytes) of the Flavor Asset
 *	 (readOnly).
 * @param	tags	string		Tags used to identify the Flavor Asset in various scenarios
 *	.
 * @param	fileExt	string		The file extension
 *	 (insertOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	deletedAt	int		 (readOnly).
 * @param	description	string		 (readOnly).
 */
function KalturaAsset(){
	this.id = null;
	this.entryId = null;
	this.partnerId = null;
	this.status = null;
	this.version = null;
	this.size = null;
	this.tags = null;
	this.fileExt = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.deletedAt = null;
	this.description = null;
}
KalturaAsset.inheritsFrom (KalturaObjectBase);


/**
 * @param	flavorParamsId	int		The Flavor Params used to create this Flavor Asset
 *	 (insertOnly).
 * @param	width	int		The width of the Flavor Asset 
 *	 (readOnly).
 * @param	height	int		The height of the Flavor Asset
 *	 (readOnly).
 * @param	bitrate	int		The overall bitrate (in KBits) of the Flavor Asset 
 *	 (readOnly).
 * @param	frameRate	int		The frame rate (in FPS) of the Flavor Asset
 *	 (readOnly).
 * @param	isOriginal	bool		True if this Flavor Asset is the original source
 *	 (readOnly).
 * @param	isWeb	bool		True if this Flavor Asset is playable in KDP
 *	 (readOnly).
 * @param	containerFormat	string		The container format
 *	 (readOnly).
 * @param	videoCodecId	string		The video codec
 *	 (readOnly).
 */
function KalturaFlavorAsset(){
	this.flavorParamsId = null;
	this.width = null;
	this.height = null;
	this.bitrate = null;
	this.frameRate = null;
	this.isOriginal = null;
	this.isWeb = null;
	this.containerFormat = null;
	this.videoCodecId = null;
}
KalturaFlavorAsset.inheritsFrom (KalturaAsset);


/**
 */
function KalturaContentResource(){
}
KalturaContentResource.inheritsFrom (KalturaResource);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 * @param	sizeGreaterThanOrEqual	int		.
 * @param	sizeLessThanOrEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	deletedAtGreaterThanOrEqual	int		.
 * @param	deletedAtLessThanOrEqual	int		.
 */
function KalturaAssetBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.sizeGreaterThanOrEqual = null;
	this.sizeLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.deletedAtGreaterThanOrEqual = null;
	this.deletedAtLessThanOrEqual = null;
}
KalturaAssetBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAssetFilter(){
}
KalturaAssetFilter.inheritsFrom (KalturaAssetBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaFlavorAssetListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaFlavorAssetListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	value	string		.
 */
function KalturaString(){
	this.value = null;
}
KalturaString.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		The id of the Flavor Params
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		The name of the Flavor Params
 *	.
 * @param	systemName	string		System name of the Flavor Params
 *	.
 * @param	description	string		The description of the Flavor Params
 *	.
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	isSystemDefault	int		True if those Flavor Params are part of system defaults
 *	 (readOnly).
 * @param	tags	string		The Flavor Params tags are used to identify the flavor for different usage (e.g. web, hd, mobile)
 *	.
 * @param	format	string		The container format of the Flavor Params
 *	.
 * @param	requiredPermissions	array		Array of partner permisison names that required for using this asset params
 *	.
 */
function KalturaAssetParams(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.isSystemDefault = null;
	this.tags = null;
	this.format = null;
	this.requiredPermissions = null;
}
KalturaAssetParams.inheritsFrom (KalturaObjectBase);


/**
 * @param	videoCodec	string		The video codec of the Flavor Params
 *	.
 * @param	videoBitrate	int		The video bitrate (in KBits) of the Flavor Params
 *	.
 * @param	audioCodec	string		The audio codec of the Flavor Params
 *	.
 * @param	audioBitrate	int		The audio bitrate (in KBits) of the Flavor Params
 *	.
 * @param	audioChannels	int		The number of audio channels for "downmixing"
 *	.
 * @param	audioSampleRate	int		The audio sample rate of the Flavor Params
 *	.
 * @param	width	int		The desired width of the Flavor Params
 *	.
 * @param	height	int		The desired height of the Flavor Params
 *	.
 * @param	frameRate	int		The frame rate of the Flavor Params
 *	.
 * @param	gopSize	int		The gop size of the Flavor Params
 *	.
 * @param	conversionEngines	string		The list of conversion engines (comma separated)
 *	.
 * @param	conversionEnginesExtraParams	string		The list of conversion engines extra params (separated with "|")
 *	.
 * @param	twoPass	bool		.
 * @param	deinterlice	int		.
 * @param	rotate	int		.
 * @param	operators	string		.
 * @param	engineVersion	int		.
 */
function KalturaFlavorParams(){
	this.videoCodec = null;
	this.videoBitrate = null;
	this.audioCodec = null;
	this.audioBitrate = null;
	this.audioChannels = null;
	this.audioSampleRate = null;
	this.width = null;
	this.height = null;
	this.frameRate = null;
	this.gopSize = null;
	this.conversionEngines = null;
	this.conversionEnginesExtraParams = null;
	this.twoPass = null;
	this.deinterlice = null;
	this.rotate = null;
	this.operators = null;
	this.engineVersion = null;
}
KalturaFlavorParams.inheritsFrom (KalturaAssetParams);


/**
 * @param	flavorAsset	KalturaFlavorAsset		The Flavor Asset (Can be null when there are params without asset)
 *	.
 * @param	flavorParams	KalturaFlavorParams		The Flavor Params
 *	.
 * @param	entryId	string		The entry id
 *	.
 */
function KalturaFlavorAssetWithParams(){
	this.flavorAsset = null;
	this.flavorParams = null;
	this.entryId = null;
}
KalturaFlavorAssetWithParams.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaFlavorParamsBaseFilter(){
}
KalturaFlavorParamsBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaFlavorParamsFilter(){
}
KalturaFlavorParamsFilter.inheritsFrom (KalturaFlavorParamsBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaFlavorParamsListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaFlavorParamsListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	bitrate	int		.
 * @param	width	int		.
 * @param	height	int		.
 */
function KalturaLiveStreamBitrate(){
	this.bitrate = null;
	this.width = null;
	this.height = null;
}
KalturaLiveStreamBitrate.inheritsFrom (KalturaObjectBase);


/**
 * @param	offlineMessage	string		The message to be presented when the stream is offline
 *	.
 * @param	streamRemoteId	string		The stream id as provided by the provider
 *	 (readOnly).
 * @param	streamRemoteBackupId	string		The backup stream id as provided by the provider
 *	 (readOnly).
 * @param	bitrates	array		Array of supported bitrates
 *	.
 * @param	primaryBroadcastingUrl	string		.
 * @param	secondaryBroadcastingUrl	string		.
 * @param	streamName	string		.
 */
function KalturaLiveStreamEntry(){
	this.offlineMessage = null;
	this.streamRemoteId = null;
	this.streamRemoteBackupId = null;
	this.bitrates = null;
	this.primaryBroadcastingUrl = null;
	this.secondaryBroadcastingUrl = null;
	this.streamName = null;
}
KalturaLiveStreamEntry.inheritsFrom (KalturaMediaEntry);


/**
 * @param	encodingIP1	string		The broadcast primary ip
 *	.
 * @param	encodingIP2	string		The broadcast secondary ip
 *	.
 * @param	streamPassword	string		The broadcast password
 *	.
 * @param	streamUsername	string		The broadcast username
 *	 (readOnly).
 */
function KalturaLiveStreamAdminEntry(){
	this.encodingIP1 = null;
	this.encodingIP2 = null;
	this.streamPassword = null;
	this.streamUsername = null;
}
KalturaLiveStreamAdminEntry.inheritsFrom (KalturaLiveStreamEntry);


/**
 * @param	durationLessThan	int		.
 * @param	durationGreaterThan	int		.
 * @param	durationLessThanOrEqual	int		.
 * @param	durationGreaterThanOrEqual	int		.
 * @param	msDurationLessThan	int		.
 * @param	msDurationGreaterThan	int		.
 * @param	msDurationLessThanOrEqual	int		.
 * @param	msDurationGreaterThanOrEqual	int		.
 * @param	durationTypeMatchOr	string		.
 */
function KalturaPlayableEntryBaseFilter(){
	this.durationLessThan = null;
	this.durationGreaterThan = null;
	this.durationLessThanOrEqual = null;
	this.durationGreaterThanOrEqual = null;
	this.msDurationLessThan = null;
	this.msDurationGreaterThan = null;
	this.msDurationLessThanOrEqual = null;
	this.msDurationGreaterThanOrEqual = null;
	this.durationTypeMatchOr = null;
}
KalturaPlayableEntryBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaPlayableEntryFilter(){
}
KalturaPlayableEntryFilter.inheritsFrom (KalturaPlayableEntryBaseFilter);


/**
 * @param	mediaTypeEqual	int		.
 * @param	mediaTypeIn	string		.
 * @param	mediaDateGreaterThanOrEqual	int		.
 * @param	mediaDateLessThanOrEqual	int		.
 * @param	flavorParamsIdsMatchOr	string		.
 * @param	flavorParamsIdsMatchAnd	string		.
 */
function KalturaMediaEntryBaseFilter(){
	this.mediaTypeEqual = null;
	this.mediaTypeIn = null;
	this.mediaDateGreaterThanOrEqual = null;
	this.mediaDateLessThanOrEqual = null;
	this.flavorParamsIdsMatchOr = null;
	this.flavorParamsIdsMatchAnd = null;
}
KalturaMediaEntryBaseFilter.inheritsFrom (KalturaPlayableEntryFilter);


/**
 */
function KalturaMediaEntryFilter(){
}
KalturaMediaEntryFilter.inheritsFrom (KalturaMediaEntryBaseFilter);


/**
 */
function KalturaLiveStreamEntryBaseFilter(){
}
KalturaLiveStreamEntryBaseFilter.inheritsFrom (KalturaMediaEntryFilter);


/**
 */
function KalturaLiveStreamEntryFilter(){
}
KalturaLiveStreamEntryFilter.inheritsFrom (KalturaLiveStreamEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaLiveStreamListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaLiveStreamListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	keyWords	string		.
 * @param	searchSource	int		.
 * @param	mediaType	int		.
 * @param	extraData	string		Use this field to pass dynamic data for searching
 *	For example - if you set this field to "mymovies_$partner_id"
 *	The $partner_id will be automatically replcaed with your real partner Id
 *	.
 * @param	authData	string		.
 */
function KalturaSearch(){
	this.keyWords = null;
	this.searchSource = null;
	this.mediaType = null;
	this.extraData = null;
	this.authData = null;
}
KalturaSearch.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	title	string		.
 * @param	thumbUrl	string		.
 * @param	description	string		.
 * @param	tags	string		.
 * @param	url	string		.
 * @param	sourceLink	string		.
 * @param	credit	string		.
 * @param	licenseType	int		.
 * @param	flashPlaybackType	string		.
 */
function KalturaSearchResult(){
	this.id = null;
	this.title = null;
	this.thumbUrl = null;
	this.description = null;
	this.tags = null;
	this.url = null;
	this.sourceLink = null;
	this.credit = null;
	this.licenseType = null;
	this.flashPlaybackType = null;
}
KalturaSearchResult.inheritsFrom (KalturaSearch);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMediaListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMediaListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	hasRealThumbnail	bool		Indicates whether the user has submited a real thumbnail to the mix (Not the one that was generated automaticaly)
 *	 (readOnly).
 * @param	editorType	int		The editor type used to edit the metadata
 *	.
 * @param	dataContent	string		The xml data of the mix.
 */
function KalturaMixEntry(){
	this.hasRealThumbnail = null;
	this.editorType = null;
	this.dataContent = null;
}
KalturaMixEntry.inheritsFrom (KalturaPlayableEntry);


/**
 */
function KalturaMixEntryBaseFilter(){
}
KalturaMixEntryBaseFilter.inheritsFrom (KalturaPlayableEntryFilter);


/**
 */
function KalturaMixEntryFilter(){
}
KalturaMixEntryFilter.inheritsFrom (KalturaMixEntryBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMixListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMixListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	url	string		The URL where the notification should be sent to .
 * @param	data	string		The serialized notification data to send.
 */
function KalturaClientNotification(){
	this.url = null;
	this.data = null;
}
KalturaClientNotification.inheritsFrom (KalturaObjectBase);


/**
 * @param	key	string		.
 * @param	value	string		.
 */
function KalturaKeyValue(){
	this.key = null;
	this.value = null;
}
KalturaKeyValue.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	website	string		.
 * @param	notificationUrl	string		.
 * @param	appearInSearch	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	adminName	string		deprecated - lastName and firstName replaces this field.
 * @param	adminEmail	string		.
 * @param	description	string		.
 * @param	commercialUse	int		.
 * @param	landingPage	string		.
 * @param	userLandingPage	string		.
 * @param	contentCategories	string		.
 * @param	type	int		.
 * @param	phone	string		.
 * @param	describeYourself	string		.
 * @param	adultContent	bool		.
 * @param	defConversionProfileType	string		.
 * @param	notify	int		.
 * @param	status	int		 (readOnly).
 * @param	allowQuickEdit	int		.
 * @param	mergeEntryLists	int		.
 * @param	notificationsConfig	string		.
 * @param	maxUploadSize	int		.
 * @param	partnerPackage	int		 (readOnly).
 * @param	secret	string		 (readOnly).
 * @param	adminSecret	string		 (readOnly).
 * @param	cmsPassword	string		 (readOnly).
 * @param	allowMultiNotification	int		.
 * @param	adminLoginUsersQuota	int		 (readOnly).
 * @param	adminUserId	string		.
 * @param	firstName	string		firstName and lastName replace the old (deprecated) adminName.
 * @param	lastName	string		lastName and firstName replace the old (deprecated) adminName.
 * @param	country	string		country code (2char) - this field is optional
 *	.
 * @param	state	string		state code (2char) - this field is optional.
 * @param	additionalParams	array		 (insertOnly).
 */
function KalturaPartner(){
	this.id = null;
	this.name = null;
	this.website = null;
	this.notificationUrl = null;
	this.appearInSearch = null;
	this.createdAt = null;
	this.adminName = null;
	this.adminEmail = null;
	this.description = null;
	this.commercialUse = null;
	this.landingPage = null;
	this.userLandingPage = null;
	this.contentCategories = null;
	this.type = null;
	this.phone = null;
	this.describeYourself = null;
	this.adultContent = null;
	this.defConversionProfileType = null;
	this.notify = null;
	this.status = null;
	this.allowQuickEdit = null;
	this.mergeEntryLists = null;
	this.notificationsConfig = null;
	this.maxUploadSize = null;
	this.partnerPackage = null;
	this.secret = null;
	this.adminSecret = null;
	this.cmsPassword = null;
	this.allowMultiNotification = null;
	this.adminLoginUsersQuota = null;
	this.adminUserId = null;
	this.firstName = null;
	this.lastName = null;
	this.country = null;
	this.state = null;
	this.additionalParams = null;
}
KalturaPartner.inheritsFrom (KalturaObjectBase);


/**
 * @param	hostingGB	float		Partner total hosting in GB on the disk
 *	 (readOnly).
 * @param	Percent	float		percent of usage out of partner's package. if usageGB is 5 and package is 10GB, this value will be 50
 *	 (readOnly).
 * @param	packageBW	int		package total BW - actually this is usage, which represents BW+storage
 *	 (readOnly).
 * @param	usageGB	int		total usage in GB - including bandwidth and storage
 *	 (readOnly).
 * @param	reachedLimitDate	int		date when partner reached the limit of his package (timestamp)
 *	 (readOnly).
 * @param	usageGraph	string		a semi-colon separated list of comma-separated key-values to represent a usage graph.
 *	keys could be 1-12 for a year view (1,1.2;2,1.1;3,0.9;...;12,1.4;)
 *	keys could be 1-[28,29,30,31] depending on the requested month, for a daily view in a given month (1,0.4;2,0.2;...;31,0.1;)
 *	 (readOnly).
 */
function KalturaPartnerUsage(){
	this.hostingGB = null;
	this.Percent = null;
	this.packageBW = null;
	this.usageGB = null;
	this.reachedLimitDate = null;
	this.usageGraph = null;
}
KalturaPartnerUsage.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	type	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	tags	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaPermissionItem(){
	this.id = null;
	this.type = null;
	this.partnerId = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaPermissionItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaPermissionItemBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaPermissionItemBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaPermissionItemFilter(){
}
KalturaPermissionItemFilter.inheritsFrom (KalturaPermissionItemBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPermissionItemListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPermissionItemListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	type	int		 (readOnly).
 * @param	name	string		.
 * @param	friendlyName	string		.
 * @param	description	string		.
 * @param	status	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	dependsOnPermissionNames	string		.
 * @param	tags	string		.
 * @param	permissionItemsIds	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerGroup	string		.
 */
function KalturaPermission(){
	this.id = null;
	this.type = null;
	this.name = null;
	this.friendlyName = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.dependsOnPermissionNames = null;
	this.tags = null;
	this.permissionItemsIds = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerGroup = null;
}
KalturaPermission.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	typeEqual	int		.
 * @param	typeIn	string		.
 * @param	nameEqual	string		.
 * @param	nameIn	string		.
 * @param	friendlyNameLike	string		.
 * @param	descriptionLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	dependsOnPermissionNamesMultiLikeOr	string		.
 * @param	dependsOnPermissionNamesMultiLikeAnd	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaPermissionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.friendlyNameLike = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.dependsOnPermissionNamesMultiLikeOr = null;
	this.dependsOnPermissionNamesMultiLikeAnd = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaPermissionBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaPermissionFilter(){
}
KalturaPermissionFilter.inheritsFrom (KalturaPermissionBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPermissionListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPermissionListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	limit	int		.
 */
function KalturaMediaEntryFilterForPlaylist(){
	this.limit = null;
}
KalturaMediaEntryFilterForPlaylist.inheritsFrom (KalturaMediaEntryFilter);


/**
 * @param	playlistContent	string		Content of the playlist - 
 *	XML if the playlistType is dynamic 
 *	text if the playlistType is static 
 *	url if the playlistType is mRss .
 * @param	filters	array		.
 * @param	totalResults	int		.
 * @param	playlistType	int		Type of playlist  .
 * @param	plays	int		Number of plays (readOnly).
 * @param	views	int		Number of views (readOnly).
 * @param	duration	int		The duration in seconds (readOnly).
 */
function KalturaPlaylist(){
	this.playlistContent = null;
	this.filters = null;
	this.totalResults = null;
	this.playlistType = null;
	this.plays = null;
	this.views = null;
	this.duration = null;
}
KalturaPlaylist.inheritsFrom (KalturaBaseEntry);


/**
 */
function KalturaPlaylistBaseFilter(){
}
KalturaPlaylistBaseFilter.inheritsFrom (KalturaBaseEntryFilter);


/**
 */
function KalturaPlaylistFilter(){
}
KalturaPlaylistFilter.inheritsFrom (KalturaPlaylistBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaPlaylistListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaPlaylistListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	fromDate	int		.
 * @param	toDate	int		.
 * @param	keywords	string		.
 * @param	searchInTags	bool		.
 * @param	searchInAdminTags	bool		.
 * @param	categories	string		.
 * @param	timeZoneOffset	int		time zone offset in minutes.
 */
function KalturaReportInputFilter(){
	this.fromDate = null;
	this.toDate = null;
	this.keywords = null;
	this.searchInTags = null;
	this.searchInAdminTags = null;
	this.categories = null;
	this.timeZoneOffset = null;
}
KalturaReportInputFilter.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		.
 * @param	data	string		.
 */
function KalturaReportGraph(){
	this.id = null;
	this.data = null;
}
KalturaReportGraph.inheritsFrom (KalturaObjectBase);


/**
 * @param	header	string		.
 * @param	data	string		.
 */
function KalturaReportTotal(){
	this.header = null;
	this.data = null;
}
KalturaReportTotal.inheritsFrom (KalturaObjectBase);


/**
 * @param	header	string		 (readOnly).
 * @param	data	string		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaReportTable(){
	this.header = null;
	this.data = null;
	this.totalCount = null;
}
KalturaReportTable.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	needMediaInfo	bool		 (readOnly).
 */
function KalturaSearchResultResponse(){
	this.objects = null;
	this.needMediaInfo = null;
}
KalturaSearchResultResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	authData	string		The authentication data that further should be used for search
 *	.
 * @param	loginUrl	string		Login URL when user need to sign-in and authorize the search.
 * @param	message	string		Information when there was an error.
 */
function KalturaSearchAuthData(){
	this.authData = null;
	this.loginUrl = null;
	this.message = null;
}
KalturaSearchAuthData.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerId	int		 (readOnly).
 * @param	ks	string		 (readOnly).
 * @param	userId	string		 (readOnly).
 */
function KalturaStartWidgetSessionResponse(){
	this.partnerId = null;
	this.ks = null;
	this.userId = null;
}
KalturaStartWidgetSessionResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	clientVer	string		.
 * @param	eventType	int		.
 * @param	eventTimestamp	float		the client's timestamp of this event
 *	.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	uniqueViewer	string		the UV cookie - creates in the operational system and should be passed on ofr every event .
 * @param	widgetId	string		.
 * @param	uiconfId	int		.
 * @param	userId	string		the partner's user id .
 * @param	currentPoint	int		the timestamp along the video when the event happend .
 * @param	duration	int		the duration of the video in milliseconds - will make it much faster than quering the db for each entry .
 * @param	userIp	string		will be retrieved from the request of the user  (readOnly).
 * @param	processDuration	int		the time in milliseconds the event took.
 * @param	controlId	string		the id of the GUI control - will be used in the future to better understand what the user clicked.
 * @param	seek	bool		true if the user ever used seek in this session .
 * @param	newPoint	int		timestamp of the new point on the timeline of the video after the user seeks .
 * @param	referrer	string		the referrer of the client.
 * @param	isFirstInSession	bool		will indicate if the event is thrown for the first video in the session.
 */
function KalturaStatsEvent(){
	this.clientVer = null;
	this.eventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uniqueViewer = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.currentPoint = null;
	this.duration = null;
	this.userIp = null;
	this.processDuration = null;
	this.controlId = null;
	this.seek = null;
	this.newPoint = null;
	this.referrer = null;
	this.isFirstInSession = null;
}
KalturaStatsEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	clientVer	string		.
 * @param	kmcEventActionPath	string		.
 * @param	kmcEventType	int		.
 * @param	eventTimestamp	float		the client's timestamp of this event
 *	.
 * @param	sessionId	string		a unique string generated by the client that will represent the client-side session: the primary component will pass it on to other components that sprout from it.
 * @param	partnerId	int		.
 * @param	entryId	string		.
 * @param	widgetId	string		.
 * @param	uiconfId	int		.
 * @param	userId	string		the partner's user id .
 * @param	userIp	string		will be retrieved from the request of the user  (readOnly).
 */
function KalturaStatsKmcEvent(){
	this.clientVer = null;
	this.kmcEventActionPath = null;
	this.kmcEventType = null;
	this.eventTimestamp = null;
	this.sessionId = null;
	this.partnerId = null;
	this.entryId = null;
	this.widgetId = null;
	this.uiconfId = null;
	this.userId = null;
	this.userIp = null;
}
KalturaStatsKmcEvent.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	partnerId	int		.
 * @param	browser	string		.
 * @param	serverIp	string		.
 * @param	serverOs	string		.
 * @param	phpVersion	string		.
 * @param	ceAdminEmail	string		.
 * @param	type	string		.
 * @param	description	string		.
 * @param	data	string		.
 */
function KalturaCEError(){
	this.id = null;
	this.partnerId = null;
	this.browser = null;
	this.serverIp = null;
	this.serverOs = null;
	this.phpVersion = null;
	this.ceAdminEmail = null;
	this.type = null;
	this.description = null;
	this.data = null;
}
KalturaCEError.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	protocolEqual	int		.
 * @param	protocolIn	string		.
 */
function KalturaStorageProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.protocolEqual = null;
	this.protocolIn = null;
}
KalturaStorageProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaStorageProfileFilter(){
}
KalturaStorageProfileFilter.inheritsFrom (KalturaStorageProfileBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	desciption	string		.
 * @param	status	int		.
 * @param	protocol	int		.
 * @param	storageUrl	string		.
 * @param	storageBaseDir	string		.
 * @param	storageUsername	string		.
 * @param	storagePassword	string		.
 * @param	storageFtpPassiveMode	bool		.
 * @param	deliveryHttpBaseUrl	string		.
 * @param	deliveryRmpBaseUrl	string		.
 * @param	deliveryIisBaseUrl	string		.
 * @param	minFileSize	int		.
 * @param	maxFileSize	int		.
 * @param	flavorParamsIds	string		.
 * @param	maxConcurrentConnections	int		.
 * @param	pathManagerClass	string		.
 * @param	urlManagerClass	string		.
 * @param	trigger	int		No need to create enum for temp field
 *	.
 */
function KalturaStorageProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.systemName = null;
	this.desciption = null;
	this.status = null;
	this.protocol = null;
	this.storageUrl = null;
	this.storageBaseDir = null;
	this.storageUsername = null;
	this.storagePassword = null;
	this.storageFtpPassiveMode = null;
	this.deliveryHttpBaseUrl = null;
	this.deliveryRmpBaseUrl = null;
	this.deliveryIisBaseUrl = null;
	this.minFileSize = null;
	this.maxFileSize = null;
	this.flavorParamsIds = null;
	this.maxConcurrentConnections = null;
	this.pathManagerClass = null;
	this.urlManagerClass = null;
	this.trigger = null;
}
KalturaStorageProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaStorageProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaStorageProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	feedUrl	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	playlistId	string		link a playlist that will set what content the feed will include
 *	if empty, all content will be included in feed
 *	.
 * @param	name	string		feed name
 *	.
 * @param	status	int		feed status
 *	 (readOnly).
 * @param	type	int		feed type
 *	 (insertOnly).
 * @param	landingPage	string		Base URL for each video, on the partners site
 *	This is required by all syndication types..
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	allowEmbed	bool		allow_embed tells google OR yahoo weather to allow embedding the video on google OR yahoo video results
 *	or just to provide a link to the landing page.
 *	it is applied on the video-player_loc property in the XML (google)
 *	and addes media-player tag (yahoo).
 * @param	playerUiconfId	int		Select a uiconf ID as player skin to include in the kwidget url.
 * @param	flavorParamId	int		.
 * @param	transcodeExistingContent	bool		.
 * @param	addToDefaultConversionProfile	bool		.
 * @param	categories	string		.
 */
function KalturaBaseSyndicationFeed(){
	this.id = null;
	this.feedUrl = null;
	this.partnerId = null;
	this.playlistId = null;
	this.name = null;
	this.status = null;
	this.type = null;
	this.landingPage = null;
	this.createdAt = null;
	this.allowEmbed = null;
	this.playerUiconfId = null;
	this.flavorParamId = null;
	this.transcodeExistingContent = null;
	this.addToDefaultConversionProfile = null;
	this.categories = null;
}
KalturaBaseSyndicationFeed.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaBaseSyndicationFeedBaseFilter(){
}
KalturaBaseSyndicationFeedBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaBaseSyndicationFeedFilter(){
}
KalturaBaseSyndicationFeedFilter.inheritsFrom (KalturaBaseSyndicationFeedBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaBaseSyndicationFeedListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaBaseSyndicationFeedListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	totalEntryCount	int		the total count of entries that should appear in the feed without flavor filtering.
 * @param	actualEntryCount	int		count of entries that will appear in the feed (including all relevant filters).
 * @param	requireTranscodingCount	int		count of entries that requires transcoding in order to be included in feed.
 */
function KalturaSyndicationFeedEntryCount(){
	this.totalEntryCount = null;
	this.actualEntryCount = null;
	this.requireTranscodingCount = null;
}
KalturaSyndicationFeedEntryCount.inheritsFrom (KalturaObjectBase);


/**
 * @param	thumbParamsId	int		The Flavor Params used to create this Flavor Asset
 *	 (insertOnly).
 * @param	width	int		The width of the Flavor Asset 
 *	 (readOnly).
 * @param	height	int		The height of the Flavor Asset
 *	 (readOnly).
 */
function KalturaThumbAsset(){
	this.thumbParamsId = null;
	this.width = null;
	this.height = null;
}
KalturaThumbAsset.inheritsFrom (KalturaAsset);


/**
 * @param	cropType	int		.
 * @param	quality	int		.
 * @param	cropX	int		.
 * @param	cropY	int		.
 * @param	cropWidth	int		.
 * @param	cropHeight	int		.
 * @param	videoOffset	float		.
 * @param	width	int		.
 * @param	height	int		.
 * @param	scaleWidth	float		.
 * @param	scaleHeight	float		.
 * @param	backgroundColor	string		Hexadecimal value.
 * @param	sourceParamsId	int		Id of the flavor params or the thumbnail params to be used as source for the thumbnail creation.
 */
function KalturaThumbParams(){
	this.cropType = null;
	this.quality = null;
	this.cropX = null;
	this.cropY = null;
	this.cropWidth = null;
	this.cropHeight = null;
	this.videoOffset = null;
	this.width = null;
	this.height = null;
	this.scaleWidth = null;
	this.scaleHeight = null;
	this.backgroundColor = null;
	this.sourceParamsId = null;
}
KalturaThumbParams.inheritsFrom (KalturaAssetParams);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaThumbAssetListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaThumbAssetListResponse.inheritsFrom (KalturaObjectBase);


/**
 */
function KalturaThumbParamsBaseFilter(){
}
KalturaThumbParamsBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaThumbParamsFilter(){
}
KalturaThumbParamsFilter.inheritsFrom (KalturaThumbParamsBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaThumbParamsListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaThumbParamsListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		Name of the uiConf, this is not a primary key.
 * @param	description	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	objType	int		.
 * @param	objTypeAsString	string		 (readOnly).
 * @param	width	int		.
 * @param	height	int		.
 * @param	htmlParams	string		.
 * @param	swfUrl	string		.
 * @param	confFilePath	string		 (readOnly).
 * @param	confFile	string		.
 * @param	confFileFeatures	string		.
 * @param	confVars	string		.
 * @param	useCdn	bool		.
 * @param	tags	string		.
 * @param	swfUrlVersion	string		.
 * @param	createdAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Entry creation date as Unix timestamp (In seconds) (readOnly).
 * @param	creationMode	int		.
 */
function KalturaUiConf(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.partnerId = null;
	this.objType = null;
	this.objTypeAsString = null;
	this.width = null;
	this.height = null;
	this.htmlParams = null;
	this.swfUrl = null;
	this.confFilePath = null;
	this.confFile = null;
	this.confFileFeatures = null;
	this.confVars = null;
	this.useCdn = null;
	this.tags = null;
	this.swfUrlVersion = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.creationMode = null;
}
KalturaUiConf.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameLike	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	objTypeEqual	int		.
 * @param	objTypeIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	creationModeEqual	int		.
 * @param	creationModeIn	string		.
 */
function KalturaUiConfBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.objTypeEqual = null;
	this.objTypeIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.creationModeEqual = null;
	this.creationModeIn = null;
}
KalturaUiConfBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaUiConfFilter(){
}
KalturaUiConfFilter.inheritsFrom (KalturaUiConfBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUiConfListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUiConfListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	type	int		UiConf Type
 *	.
 * @param	versions	array		Available versions
 *	.
 * @param	directory	string		The direcotry this type is saved at
 *	.
 * @param	filename	string		Filename for this UiConf type
 *	.
 */
function KalturaUiConfTypeInfo(){
	this.type = null;
	this.versions = null;
	this.directory = null;
	this.filename = null;
}
KalturaUiConfTypeInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	uploadTokenId	string		.
 * @param	fileSize	int		.
 * @param	errorCode	int		.
 * @param	errorDescription	string		.
 */
function KalturaUploadResponse(){
	this.uploadTokenId = null;
	this.fileSize = null;
	this.errorCode = null;
	this.errorDescription = null;
}
KalturaUploadResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		Upload token unique ID (readOnly).
 * @param	partnerId	int		Partner ID of the upload token (readOnly).
 * @param	userId	string		User id for the upload token (readOnly).
 * @param	status	int		Status of the upload token (readOnly).
 * @param	fileName	string		Name of the file for the upload token, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param	fileSize	float		File size in bytes, can be empty when the upload token is created and will be updated internally after the file is uploaded (insertOnly).
 * @param	uploadedFileSize	float		Uploaded file size in bytes, can be used to identify how many bytes were uploaded before resuming (readOnly).
 * @param	createdAt	int		Creation date as Unix timestamp (In seconds) (readOnly).
 * @param	updatedAt	int		Last update date as Unix timestamp (In seconds) (readOnly).
 */
function KalturaUploadToken(){
	this.id = null;
	this.partnerId = null;
	this.userId = null;
	this.status = null;
	this.fileName = null;
	this.fileSize = null;
	this.uploadedFileSize = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaUploadToken.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	userIdEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaUploadTokenBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.userIdEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaUploadTokenBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaUploadTokenFilter(){
}
KalturaUploadTokenFilter.inheritsFrom (KalturaUploadTokenBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUploadTokenListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUploadTokenListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	status	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	permissionNames	string		.
 * @param	tags	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaUserRole(){
	this.id = null;
	this.name = null;
	this.description = null;
	this.status = null;
	this.partnerId = null;
	this.permissionNames = null;
	this.tags = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaUserRole.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameEqual	string		.
 * @param	nameIn	string		.
 * @param	descriptionLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaUserRoleBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameEqual = null;
	this.nameIn = null;
	this.descriptionLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaUserRoleBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaUserRoleFilter(){
}
KalturaUserRoleFilter.inheritsFrom (KalturaUserRoleBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUserRoleListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUserRoleListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerIdEqual	int		.
 * @param	screenNameLike	string		.
 * @param	screenNameStartsWith	string		.
 * @param	emailLike	string		.
 * @param	emailStartsWith	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	isAdminEqual	bool		.
 */
function KalturaUserBaseFilter(){
	this.partnerIdEqual = null;
	this.screenNameLike = null;
	this.screenNameStartsWith = null;
	this.emailLike = null;
	this.emailStartsWith = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.isAdminEqual = null;
}
KalturaUserBaseFilter.inheritsFrom (KalturaFilter);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	loginEnabledEqual	bool		.
 */
function KalturaUserFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.loginEnabledEqual = null;
}
KalturaUserFilter.inheritsFrom (KalturaUserBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaUserListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaUserListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	string		 (readOnly).
 * @param	sourceWidgetId	string		.
 * @param	rootWidgetId	string		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	entryId	string		.
 * @param	uiConfId	int		.
 * @param	securityType	int		.
 * @param	securityPolicy	int		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerData	string		Can be used to store various partner related data as a string .
 * @param	widgetHTML	string		 (readOnly).
 */
function KalturaWidget(){
	this.id = null;
	this.sourceWidgetId = null;
	this.rootWidgetId = null;
	this.partnerId = null;
	this.entryId = null;
	this.uiConfId = null;
	this.securityType = null;
	this.securityPolicy = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerData = null;
	this.widgetHTML = null;
}
KalturaWidget.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		.
 * @param	idIn	string		.
 * @param	sourceWidgetIdEqual	string		.
 * @param	rootWidgetIdEqual	string		.
 * @param	partnerIdEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	uiConfIdEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerDataLike	string		.
 */
function KalturaWidgetBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.sourceWidgetIdEqual = null;
	this.rootWidgetIdEqual = null;
	this.partnerIdEqual = null;
	this.entryIdEqual = null;
	this.uiConfIdEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerDataLike = null;
}
KalturaWidgetBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaWidgetFilter(){
}
KalturaWidgetFilter.inheritsFrom (KalturaWidgetBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaWidgetListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaWidgetListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	partnerIdEqual	int		.
 * @param	metadataProfileIdEqual	int		.
 * @param	metadataProfileVersionEqual	int		.
 * @param	metadataProfileVersionGreaterThanOrEqual	int		.
 * @param	metadataProfileVersionLessThanOrEqual	int		.
 * @param	metadataObjectTypeEqual	int		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	versionEqual	int		.
 * @param	versionGreaterThanOrEqual	int		.
 * @param	versionLessThanOrEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaMetadataBaseFilter(){
	this.partnerIdEqual = null;
	this.metadataProfileIdEqual = null;
	this.metadataProfileVersionEqual = null;
	this.metadataProfileVersionGreaterThanOrEqual = null;
	this.metadataProfileVersionLessThanOrEqual = null;
	this.metadataObjectTypeEqual = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.versionEqual = null;
	this.versionGreaterThanOrEqual = null;
	this.versionLessThanOrEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaMetadataBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaMetadataFilter(){
}
KalturaMetadataFilter.inheritsFrom (KalturaMetadataBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	metadataProfileId	int		 (readOnly).
 * @param	metadataProfileVersion	int		 (readOnly).
 * @param	metadataObjectType	int		 (readOnly).
 * @param	objectId	string		 (readOnly).
 * @param	version	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	xml	string		 (readOnly).
 */
function KalturaMetadata(){
	this.id = null;
	this.partnerId = null;
	this.metadataProfileId = null;
	this.metadataProfileVersion = null;
	this.metadataObjectType = null;
	this.objectId = null;
	this.version = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xml = null;
}
KalturaMetadata.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMetadataListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMetadataListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	metadataObjectTypeEqual	int		.
 * @param	versionEqual	int		.
 * @param	nameEqual	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaMetadataProfileBaseFilter(){
	this.idEqual = null;
	this.partnerIdEqual = null;
	this.metadataObjectTypeEqual = null;
	this.versionEqual = null;
	this.nameEqual = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaMetadataProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaMetadataProfileFilter(){
}
KalturaMetadataProfileFilter.inheritsFrom (KalturaMetadataProfileBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	metadataObjectType	int		.
 * @param	version	int		 (readOnly).
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	description	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	status	int		 (readOnly).
 * @param	xsd	string		 (readOnly).
 * @param	views	string		 (readOnly).
 * @param	createMode	int		.
 */
function KalturaMetadataProfile(){
	this.id = null;
	this.partnerId = null;
	this.metadataObjectType = null;
	this.version = null;
	this.name = null;
	this.systemName = null;
	this.description = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.status = null;
	this.xsd = null;
	this.views = null;
	this.createMode = null;
}
KalturaMetadataProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMetadataProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMetadataProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	xPath	string		 (readOnly).
 * @param	key	string		 (readOnly).
 * @param	label	string		 (readOnly).
 */
function KalturaMetadataProfileField(){
	this.id = null;
	this.xPath = null;
	this.key = null;
	this.label = null;
}
KalturaMetadataProfileField.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaMetadataProfileFieldListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaMetadataProfileFieldListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	parsedAtGreaterThanOrEqual	int		.
 * @param	parsedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	auditObjectTypeEqual	string		.
 * @param	auditObjectTypeIn	string		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	relatedObjectIdEqual	string		.
 * @param	relatedObjectIdIn	string		.
 * @param	relatedObjectTypeEqual	string		.
 * @param	relatedObjectTypeIn	string		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	masterPartnerIdEqual	int		.
 * @param	masterPartnerIdIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	requestIdEqual	string		.
 * @param	requestIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	actionEqual	string		.
 * @param	actionIn	string		.
 * @param	ksEqual	string		.
 * @param	contextEqual	int		.
 * @param	contextIn	string		.
 * @param	entryPointEqual	string		.
 * @param	entryPointIn	string		.
 * @param	serverNameEqual	string		.
 * @param	serverNameIn	string		.
 * @param	ipAddressEqual	string		.
 * @param	ipAddressIn	string		.
 * @param	clientTagEqual	string		.
 */
function KalturaAuditTrailBaseFilter(){
	this.idEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.parsedAtGreaterThanOrEqual = null;
	this.parsedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.auditObjectTypeEqual = null;
	this.auditObjectTypeIn = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.relatedObjectIdEqual = null;
	this.relatedObjectIdIn = null;
	this.relatedObjectTypeEqual = null;
	this.relatedObjectTypeIn = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.masterPartnerIdEqual = null;
	this.masterPartnerIdIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.requestIdEqual = null;
	this.requestIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
	this.ksEqual = null;
	this.contextEqual = null;
	this.contextIn = null;
	this.entryPointEqual = null;
	this.entryPointIn = null;
	this.serverNameEqual = null;
	this.serverNameIn = null;
	this.ipAddressEqual = null;
	this.ipAddressIn = null;
	this.clientTagEqual = null;
}
KalturaAuditTrailBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAuditTrailFilter(){
}
KalturaAuditTrailFilter.inheritsFrom (KalturaAuditTrailBaseFilter);


/**
 */
function KalturaAuditTrailInfo(){
}
KalturaAuditTrailInfo.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	parsedAt	int		Indicates when the data was parsed (readOnly).
 * @param	status	int		 (readOnly).
 * @param	auditObjectType	string		.
 * @param	objectId	string		.
 * @param	relatedObjectId	string		.
 * @param	relatedObjectType	string		.
 * @param	entryId	string		.
 * @param	masterPartnerId	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	requestId	string		 (readOnly).
 * @param	userId	string		.
 * @param	action	string		.
 * @param	data	KalturaAuditTrailInfo		.
 * @param	ks	string		 (readOnly).
 * @param	context	int		 (readOnly).
 * @param	entryPoint	string		The API service and action that called and caused this audit (readOnly).
 * @param	serverName	string		 (readOnly).
 * @param	ipAddress	string		 (readOnly).
 * @param	userAgent	string		 (readOnly).
 * @param	clientTag	string		.
 * @param	description	string		.
 * @param	errorDescription	string		 (readOnly).
 */
function KalturaAuditTrail(){
	this.id = null;
	this.createdAt = null;
	this.parsedAt = null;
	this.status = null;
	this.auditObjectType = null;
	this.objectId = null;
	this.relatedObjectId = null;
	this.relatedObjectType = null;
	this.entryId = null;
	this.masterPartnerId = null;
	this.partnerId = null;
	this.requestId = null;
	this.userId = null;
	this.action = null;
	this.data = null;
	this.ks = null;
	this.context = null;
	this.entryPoint = null;
	this.serverName = null;
	this.ipAddress = null;
	this.userAgent = null;
	this.clientTag = null;
	this.description = null;
	this.errorDescription = null;
}
KalturaAuditTrail.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaAuditTrailListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaAuditTrailListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	nameEqual	string		.
 * @param	nameLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	engineTypeEqual	string		.
 * @param	engineTypeIn	string		.
 */
function KalturaVirusScanProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameEqual = null;
	this.nameLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.engineTypeEqual = null;
	this.engineTypeIn = null;
}
KalturaVirusScanProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaVirusScanProfileFilter(){
}
KalturaVirusScanProfileFilter.inheritsFrom (KalturaVirusScanProfileBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	name	string		.
 * @param	status	int		.
 * @param	engineType	string		.
 * @param	entryFilter	KalturaBaseEntryFilter		.
 * @param	actionIfInfected	int		.
 */
function KalturaVirusScanProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.name = null;
	this.status = null;
	this.engineType = null;
	this.entryFilter = null;
	this.actionIfInfected = null;
}
KalturaVirusScanProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaVirusScanProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaVirusScanProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	width	int		.
 * @param	height	int		.
 */
function KalturaDistributionThumbDimensions(){
	this.width = null;
	this.height = null;
}
KalturaDistributionThumbDimensions.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated unique id
 *	 (readOnly).
 * @param	createdAt	int		Profile creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Profile last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	providerType	string		 (insertOnly).
 * @param	name	string		.
 * @param	status	int		.
 * @param	submitEnabled	int		.
 * @param	updateEnabled	int		.
 * @param	deleteEnabled	int		.
 * @param	reportEnabled	int		.
 * @param	autoCreateFlavors	string		Comma separated flavor params ids that should be auto converted.
 * @param	autoCreateThumb	string		Comma separated thumbnail params ids that should be auto generated.
 * @param	optionalFlavorParamsIds	string		Comma separated flavor params ids that should be submitted if ready.
 * @param	requiredFlavorParamsIds	string		Comma separated flavor params ids that required to be readt before submission.
 * @param	optionalThumbDimensions	array		Thumbnail dimensions that should be submitted if ready.
 * @param	requiredThumbDimensions	array		Thumbnail dimensions that required to be readt before submission.
 * @param	sunriseDefaultOffset	int		If entry distribution sunrise not specified that will be the default since entry creation time, in seconds.
 * @param	sunsetDefaultOffset	int		If entry distribution sunset not specified that will be the default since entry creation time, in seconds.
 */
function KalturaDistributionProfile(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.providerType = null;
	this.name = null;
	this.status = null;
	this.submitEnabled = null;
	this.updateEnabled = null;
	this.deleteEnabled = null;
	this.reportEnabled = null;
	this.autoCreateFlavors = null;
	this.autoCreateThumb = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.sunriseDefaultOffset = null;
	this.sunsetDefaultOffset = null;
}
KalturaDistributionProfile.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaDistributionProfileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaDistributionProfileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaDistributionProfileFilter(){
}
KalturaDistributionProfileFilter.inheritsFrom (KalturaDistributionProfileBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDistributionProfileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDistributionProfileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	nameLike	string		.
 * @param	nameMultiLikeOr	string		.
 * @param	nameMultiLikeAnd	string		.
 * @param	nameEqual	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	partnerPackageEqual	int		.
 * @param	partnerPackageGreaterThanOrEqual	int		.
 * @param	partnerPackageLessThanOrEqual	int		.
 * @param	partnerNameDescriptionWebsiteAdminNameAdminEmailLike	string		.
 */
function KalturaPartnerBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.nameLike = null;
	this.nameMultiLikeOr = null;
	this.nameMultiLikeAnd = null;
	this.nameEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.partnerPackageEqual = null;
	this.partnerPackageGreaterThanOrEqual = null;
	this.partnerPackageLessThanOrEqual = null;
	this.partnerNameDescriptionWebsiteAdminNameAdminEmailLike = null;
}
KalturaPartnerBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaPartnerFilter(){
}
KalturaPartnerFilter.inheritsFrom (KalturaPartnerBaseFilter);


/**
 * @param	action	int		.
 * @param	errorType	int		.
 * @param	description	string		.
 */
function KalturaDistributionValidationError(){
	this.action = null;
	this.errorType = null;
	this.description = null;
}
KalturaDistributionValidationError.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated unique id
 *	 (readOnly).
 * @param	createdAt	int		Entry distribution creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Entry distribution last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	submittedAt	int		Entry distribution submission date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	entryId	string		 (insertOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	distributionProfileId	int		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	sunStatus	int		 (readOnly).
 * @param	dirtyStatus	int		 (readOnly).
 * @param	thumbAssetIds	string		Comma separated thumbnail asset ids.
 * @param	flavorAssetIds	string		Comma separated flavor asset ids.
 * @param	sunrise	int		Entry distribution publish time as Unix timestamp (In seconds)
 *	.
 * @param	sunset	int		Entry distribution un-publish time as Unix timestamp (In seconds)
 *	.
 * @param	remoteId	string		The id as returned from the distributed destination (readOnly).
 * @param	plays	int		The plays as retrieved from the remote destination reports (readOnly).
 * @param	views	int		The views as retrieved from the remote destination reports (readOnly).
 * @param	validationErrors	array		 (readOnly).
 * @param	errorType	int		 (readOnly).
 * @param	errorNumber	int		 (readOnly).
 * @param	errorDescription	string		 (readOnly).
 * @param	hasSubmitResultsLog	int		 (readOnly).
 * @param	hasSubmitSentDataLog	int		 (readOnly).
 * @param	hasUpdateResultsLog	int		 (readOnly).
 * @param	hasUpdateSentDataLog	int		 (readOnly).
 * @param	hasDeleteResultsLog	int		 (readOnly).
 * @param	hasDeleteSentDataLog	int		 (readOnly).
 */
function KalturaEntryDistribution(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.submittedAt = null;
	this.entryId = null;
	this.partnerId = null;
	this.distributionProfileId = null;
	this.status = null;
	this.sunStatus = null;
	this.dirtyStatus = null;
	this.thumbAssetIds = null;
	this.flavorAssetIds = null;
	this.sunrise = null;
	this.sunset = null;
	this.remoteId = null;
	this.plays = null;
	this.views = null;
	this.validationErrors = null;
	this.errorType = null;
	this.errorNumber = null;
	this.errorDescription = null;
	this.hasSubmitResultsLog = null;
	this.hasSubmitSentDataLog = null;
	this.hasUpdateResultsLog = null;
	this.hasUpdateSentDataLog = null;
	this.hasDeleteResultsLog = null;
	this.hasDeleteSentDataLog = null;
}
KalturaEntryDistribution.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	submittedAtGreaterThanOrEqual	int		.
 * @param	submittedAtLessThanOrEqual	int		.
 * @param	entryIdEqual	string		.
 * @param	entryIdIn	string		.
 * @param	distributionProfileIdEqual	int		.
 * @param	distributionProfileIdIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	dirtyStatusEqual	int		.
 * @param	dirtyStatusIn	string		.
 * @param	sunriseGreaterThanOrEqual	int		.
 * @param	sunriseLessThanOrEqual	int		.
 * @param	sunsetGreaterThanOrEqual	int		.
 * @param	sunsetLessThanOrEqual	int		.
 */
function KalturaEntryDistributionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.submittedAtGreaterThanOrEqual = null;
	this.submittedAtLessThanOrEqual = null;
	this.entryIdEqual = null;
	this.entryIdIn = null;
	this.distributionProfileIdEqual = null;
	this.distributionProfileIdIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.dirtyStatusEqual = null;
	this.dirtyStatusIn = null;
	this.sunriseGreaterThanOrEqual = null;
	this.sunriseLessThanOrEqual = null;
	this.sunsetGreaterThanOrEqual = null;
	this.sunsetLessThanOrEqual = null;
}
KalturaEntryDistributionBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaEntryDistributionFilter(){
}
KalturaEntryDistributionFilter.inheritsFrom (KalturaEntryDistributionBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaEntryDistributionListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaEntryDistributionListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 */
function KalturaDistributionProviderBaseFilter(){
	this.typeEqual = null;
	this.typeIn = null;
}
KalturaDistributionProviderBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaDistributionProviderFilter(){
}
KalturaDistributionProviderFilter.inheritsFrom (KalturaDistributionProviderBaseFilter);


/**
 * @param	type	string		 (readOnly).
 * @param	name	string		.
 * @param	scheduleUpdateEnabled	bool		.
 * @param	availabilityUpdateEnabled	bool		.
 * @param	deleteInsteadUpdate	bool		.
 * @param	intervalBeforeSunrise	int		.
 * @param	intervalBeforeSunset	int		.
 * @param	updateRequiredEntryFields	string		.
 * @param	updateRequiredMetadataXPaths	string		.
 */
function KalturaDistributionProvider(){
	this.type = null;
	this.name = null;
	this.scheduleUpdateEnabled = null;
	this.availabilityUpdateEnabled = null;
	this.deleteInsteadUpdate = null;
	this.intervalBeforeSunrise = null;
	this.intervalBeforeSunset = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
KalturaDistributionProvider.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDistributionProviderListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDistributionProviderListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated
 *	 (readOnly).
 * @param	createdAt	int		Generic distribution provider creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Generic distribution provider last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	isDefault	bool		.
 * @param	status	int		 (readOnly).
 * @param	optionalFlavorParamsIds	string		.
 * @param	requiredFlavorParamsIds	string		.
 * @param	optionalThumbDimensions	array		.
 * @param	requiredThumbDimensions	array		.
 * @param	editableFields	string		.
 * @param	mandatoryFields	string		.
 */
function KalturaGenericDistributionProvider(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.partnerId = null;
	this.isDefault = null;
	this.status = null;
	this.optionalFlavorParamsIds = null;
	this.requiredFlavorParamsIds = null;
	this.optionalThumbDimensions = null;
	this.requiredThumbDimensions = null;
	this.editableFields = null;
	this.mandatoryFields = null;
}
KalturaGenericDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	isDefaultEqual	bool		.
 * @param	isDefaultIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaGenericDistributionProviderBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.isDefaultEqual = null;
	this.isDefaultIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaGenericDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaGenericDistributionProviderFilter(){
}
KalturaGenericDistributionProviderFilter.inheritsFrom (KalturaGenericDistributionProviderBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaGenericDistributionProviderListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaGenericDistributionProviderListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		Auto generated
 *	 (readOnly).
 * @param	createdAt	int		Generic distribution provider action creation date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	updatedAt	int		Generic distribution provider action last update date as Unix timestamp (In seconds)
 *	 (readOnly).
 * @param	genericDistributionProviderId	int		 (insertOnly).
 * @param	action	int		 (insertOnly).
 * @param	status	int		 (readOnly).
 * @param	resultsParser	int		.
 * @param	protocol	int		.
 * @param	serverAddress	string		.
 * @param	remotePath	string		.
 * @param	remoteUsername	string		.
 * @param	remotePassword	string		.
 * @param	editableFields	string		.
 * @param	mandatoryFields	string		.
 * @param	mrssTransformer	string		 (readOnly).
 * @param	mrssValidator	string		 (readOnly).
 * @param	resultsTransformer	string		 (readOnly).
 */
function KalturaGenericDistributionProviderAction(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.genericDistributionProviderId = null;
	this.action = null;
	this.status = null;
	this.resultsParser = null;
	this.protocol = null;
	this.serverAddress = null;
	this.remotePath = null;
	this.remoteUsername = null;
	this.remotePassword = null;
	this.editableFields = null;
	this.mandatoryFields = null;
	this.mrssTransformer = null;
	this.mrssValidator = null;
	this.resultsTransformer = null;
}
KalturaGenericDistributionProviderAction.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	genericDistributionProviderIdEqual	int		.
 * @param	genericDistributionProviderIdIn	string		.
 * @param	actionEqual	int		.
 * @param	actionIn	string		.
 */
function KalturaGenericDistributionProviderActionBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.genericDistributionProviderIdEqual = null;
	this.genericDistributionProviderIdIn = null;
	this.actionEqual = null;
	this.actionIn = null;
}
KalturaGenericDistributionProviderActionBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaGenericDistributionProviderActionFilter(){
}
KalturaGenericDistributionProviderActionFilter.inheritsFrom (KalturaGenericDistributionProviderActionBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaGenericDistributionProviderActionListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaGenericDistributionProviderActionListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	string		.
 * @param	entryIdEqual	string		.
 * @param	parentIdEqual	string		.
 * @param	parentIdIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 */
function KalturaAnnotationBaseFilter(){
	this.idEqual = null;
	this.entryIdEqual = null;
	this.parentIdEqual = null;
	this.parentIdIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.userIdEqual = null;
	this.userIdIn = null;
}
KalturaAnnotationBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaAnnotationFilter(){
}
KalturaAnnotationFilter.inheritsFrom (KalturaAnnotationBaseFilter);


/**
 * @param	id	string		 (readOnly).
 * @param	entryId	string		.
 * @param	partnerId	int		 (readOnly).
 * @param	parentId	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	text	string		.
 * @param	tags	string		.
 * @param	startTime	int		.
 * @param	endTime	int		.
 * @param	userId	string		 (readOnly).
 * @param	partnerData	string		.
 */
function KalturaAnnotation(){
	this.id = null;
	this.entryId = null;
	this.partnerId = null;
	this.parentId = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.text = null;
	this.tags = null;
	this.startTime = null;
	this.endTime = null;
	this.userId = null;
	this.partnerData = null;
}
KalturaAnnotation.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaAnnotationListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaAnnotationListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	expiresAtGreaterThanOrEqual	int		.
 * @param	expiresAtLessThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	userIdEqual	string		.
 * @param	userIdIn	string		.
 * @param	systemNameEqual	string		.
 * @param	systemNameIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaShortLinkBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.expiresAtGreaterThanOrEqual = null;
	this.expiresAtLessThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.userIdEqual = null;
	this.userIdIn = null;
	this.systemNameEqual = null;
	this.systemNameIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaShortLinkBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaShortLinkFilter(){
}
KalturaShortLinkFilter.inheritsFrom (KalturaShortLinkBaseFilter);


/**
 * @param	id	int		 (readOnly).
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 * @param	expiresAt	int		.
 * @param	partnerId	int		 (readOnly).
 * @param	userId	string		.
 * @param	name	string		.
 * @param	systemName	string		.
 * @param	fullUrl	string		.
 * @param	status	int		.
 */
function KalturaShortLink(){
	this.id = null;
	this.createdAt = null;
	this.updatedAt = null;
	this.expiresAt = null;
	this.partnerId = null;
	this.userId = null;
	this.name = null;
	this.systemName = null;
	this.fullUrl = null;
	this.status = null;
}
KalturaShortLink.inheritsFrom (KalturaObjectBase);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaShortLinkListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaShortLinkListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	handlerType	string		 (readOnly).
 */
function KalturaDropFolderFileHandlerConfig(){
	this.handlerType = null;
}
KalturaDropFolderFileHandlerConfig.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (insertOnly).
 * @param	name	string		.
 * @param	description	string		.
 * @param	type	string		.
 * @param	status	int		.
 * @param	conversionProfileId	int		.
 * @param	dc	int		.
 * @param	path	string		.
 * @param	fileSizeCheckInterval	int		The ammount of time, in seconds, that should pass so that a file with no change in size we'll be treated as "finished uploading to folder".
 * @param	fileDeletePolicy	int		.
 * @param	autoFileDeleteDays	int		.
 * @param	fileHandlerType	string		.
 * @param	fileNamePatterns	string		.
 * @param	fileHandlerConfig	KalturaDropFolderFileHandlerConfig		.
 * @param	tags	string		.
 * @param	ignoreFileNamePatterns	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaDropFolder(){
	this.id = null;
	this.partnerId = null;
	this.name = null;
	this.description = null;
	this.type = null;
	this.status = null;
	this.conversionProfileId = null;
	this.dc = null;
	this.path = null;
	this.fileSizeCheckInterval = null;
	this.fileDeletePolicy = null;
	this.autoFileDeleteDays = null;
	this.fileHandlerType = null;
	this.fileNamePatterns = null;
	this.fileHandlerConfig = null;
	this.tags = null;
	this.ignoreFileNamePatterns = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaDropFolder.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	nameLike	string		.
 * @param	typeEqual	string		.
 * @param	typeIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	conversionProfileIdEqual	int		.
 * @param	conversionProfileIdIn	string		.
 * @param	dcEqual	int		.
 * @param	dcIn	string		.
 * @param	pathLike	string		.
 * @param	fileHandlerTypeEqual	string		.
 * @param	fileHandlerTypeIn	string		.
 * @param	fileNamePatternsLike	string		.
 * @param	fileNamePatternsMultiLikeOr	string		.
 * @param	fileNamePatternsMultiLikeAnd	string		.
 * @param	tagsLike	string		.
 * @param	tagsMultiLikeOr	string		.
 * @param	tagsMultiLikeAnd	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaDropFolderBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.nameLike = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.conversionProfileIdEqual = null;
	this.conversionProfileIdIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.pathLike = null;
	this.fileHandlerTypeEqual = null;
	this.fileHandlerTypeIn = null;
	this.fileNamePatternsLike = null;
	this.fileNamePatternsMultiLikeOr = null;
	this.fileNamePatternsMultiLikeAnd = null;
	this.tagsLike = null;
	this.tagsMultiLikeOr = null;
	this.tagsMultiLikeAnd = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaDropFolderBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaDropFolderFilter(){
}
KalturaDropFolderFilter.inheritsFrom (KalturaDropFolderBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDropFolderListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDropFolderListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	id	int		 (readOnly).
 * @param	partnerId	int		 (readOnly).
 * @param	dropFolderId	int		 (insertOnly).
 * @param	fileName	string		 (insertOnly).
 * @param	fileSize	int		.
 * @param	fileSizeLastSetAt	int		 (readOnly).
 * @param	status	int		.
 * @param	parsedSlug	string		.
 * @param	parsedFlavor	string		.
 * @param	errorCode	string		.
 * @param	errorDescription	string		.
 * @param	createdAt	int		 (readOnly).
 * @param	updatedAt	int		 (readOnly).
 */
function KalturaDropFolderFile(){
	this.id = null;
	this.partnerId = null;
	this.dropFolderId = null;
	this.fileName = null;
	this.fileSize = null;
	this.fileSizeLastSetAt = null;
	this.status = null;
	this.parsedSlug = null;
	this.parsedFlavor = null;
	this.errorCode = null;
	this.errorDescription = null;
	this.createdAt = null;
	this.updatedAt = null;
}
KalturaDropFolderFile.inheritsFrom (KalturaObjectBase);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	dropFolderIdEqual	int		.
 * @param	dropFolderIdIn	string		.
 * @param	fileNameEqual	string		.
 * @param	fileNameIn	string		.
 * @param	fileNameLike	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	parsedSlugEqual	string		.
 * @param	parsedSlugIn	string		.
 * @param	parsedSlugLike	string		.
 * @param	parsedFlavorEqual	string		.
 * @param	parsedFlavorIn	string		.
 * @param	parsedFlavorLike	string		.
 * @param	errorCodeEqual	string		.
 * @param	errorCodeIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 */
function KalturaDropFolderFileBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.dropFolderIdEqual = null;
	this.dropFolderIdIn = null;
	this.fileNameEqual = null;
	this.fileNameIn = null;
	this.fileNameLike = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.parsedSlugEqual = null;
	this.parsedSlugIn = null;
	this.parsedSlugLike = null;
	this.parsedFlavorEqual = null;
	this.parsedFlavorIn = null;
	this.parsedFlavorLike = null;
	this.errorCodeEqual = null;
	this.errorCodeIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
}
KalturaDropFolderFileBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaDropFolderFileFilter(){
}
KalturaDropFolderFileFilter.inheritsFrom (KalturaDropFolderFileBaseFilter);


/**
 * @param	objects	array		 (readOnly).
 * @param	totalCount	int		 (readOnly).
 */
function KalturaDropFolderFileListResponse(){
	this.objects = null;
	this.totalCount = null;
}
KalturaDropFolderFileListResponse.inheritsFrom (KalturaObjectBase);


/**
 * @param	countryRestrictionType	int		Country restriction type (Allow or deny)
 *	.
 * @param	countryList	string		Comma separated list of country codes to allow to deny 
 *	.
 */
function KalturaCountryRestriction(){
	this.countryRestrictionType = null;
	this.countryList = null;
}
KalturaCountryRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	directoryRestrictionType	int		Kaltura directory restriction type
 *	.
 */
function KalturaDirectoryRestriction(){
	this.directoryRestrictionType = null;
}
KalturaDirectoryRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	ipAddressRestrictionType	int		Ip address restriction type (Allow or deny)
 *	.
 * @param	ipAddressList	string		Comma separated list of ip address to allow to deny 
 *	.
 */
function KalturaIpAddressRestriction(){
	this.ipAddressRestrictionType = null;
	this.ipAddressList = null;
}
KalturaIpAddressRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 */
function KalturaSessionRestriction(){
}
KalturaSessionRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	previewLength	int		The preview restriction length 
 *	.
 */
function KalturaPreviewRestriction(){
	this.previewLength = null;
}
KalturaPreviewRestriction.inheritsFrom (KalturaSessionRestriction);


/**
 * @param	siteRestrictionType	int		The site restriction type (allow or deny)
 *	.
 * @param	siteList	string		Comma separated list of sites (domains) to allow or deny
 *	.
 */
function KalturaSiteRestriction(){
	this.siteRestrictionType = null;
	this.siteList = null;
}
KalturaSiteRestriction.inheritsFrom (KalturaBaseRestriction);


/**
 * @param	field	string		.
 * @param	value	string		.
 */
function KalturaSearchCondition(){
	this.field = null;
	this.value = null;
}
KalturaSearchCondition.inheritsFrom (KalturaSearchItem);


/**
 * @param	comparison	int		.
 */
function KalturaSearchComparableCondition(){
	this.comparison = null;
}
KalturaSearchComparableCondition.inheritsFrom (KalturaSearchCondition);


/**
 * @param	type	int		.
 * @param	items	array		.
 */
function KalturaSearchOperator(){
	this.type = null;
	this.items = null;
}
KalturaSearchOperator.inheritsFrom (KalturaSearchItem);


/**
 * @param	noDistributionProfiles	bool		.
 * @param	distributionProfileId	int		.
 * @param	distributionSunStatus	int		.
 * @param	entryDistributionFlag	int		.
 * @param	entryDistributionStatus	int		.
 * @param	hasEntryDistributionValidationErrors	bool		.
 * @param	entryDistributionValidationErrors	string		Comma seperated validation error types.
 */
function KalturaContentDistributionSearchItem(){
	this.noDistributionProfiles = null;
	this.distributionProfileId = null;
	this.distributionSunStatus = null;
	this.entryDistributionFlag = null;
	this.entryDistributionStatus = null;
	this.hasEntryDistributionValidationErrors = null;
	this.entryDistributionValidationErrors = null;
}
KalturaContentDistributionSearchItem.inheritsFrom (KalturaSearchItem);


/**
 * @param	metadataProfileId	int		.
 */
function KalturaMetadataSearchItem(){
	this.metadataProfileId = null;
}
KalturaMetadataSearchItem.inheritsFrom (KalturaSearchOperator);


/**
 * @param	idEqual	int		.
 * @param	idGreaterThanOrEqual	int		.
 * @param	partnerIdEqual	int		.
 * @param	partnerIdIn	string		.
 * @param	partnerIdNotIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	processorExpirationGreaterThanOrEqual	int		.
 * @param	processorExpirationLessThanOrEqual	int		.
 * @param	executionAttemptsGreaterThanOrEqual	int		.
 * @param	executionAttemptsLessThanOrEqual	int		.
 * @param	lockVersionGreaterThanOrEqual	int		.
 * @param	lockVersionLessThanOrEqual	int		.
 */
function KalturaBaseJobBaseFilter(){
	this.idEqual = null;
	this.idGreaterThanOrEqual = null;
	this.partnerIdEqual = null;
	this.partnerIdIn = null;
	this.partnerIdNotIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.processorExpirationGreaterThanOrEqual = null;
	this.processorExpirationLessThanOrEqual = null;
	this.executionAttemptsGreaterThanOrEqual = null;
	this.executionAttemptsLessThanOrEqual = null;
	this.lockVersionGreaterThanOrEqual = null;
	this.lockVersionLessThanOrEqual = null;
}
KalturaBaseJobBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaBaseJobFilter(){
}
KalturaBaseJobFilter.inheritsFrom (KalturaBaseJobBaseFilter);


/**
 * @param	entryIdEqual	string		.
 * @param	jobTypeEqual	string		.
 * @param	jobTypeIn	string		.
 * @param	jobTypeNotIn	string		.
 * @param	jobSubTypeEqual	int		.
 * @param	jobSubTypeIn	string		.
 * @param	jobSubTypeNotIn	string		.
 * @param	onStressDivertToEqual	int		.
 * @param	onStressDivertToIn	string		.
 * @param	onStressDivertToNotIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	statusNotIn	string		.
 * @param	abortEqual	int		.
 * @param	checkAgainTimeoutGreaterThanOrEqual	int		.
 * @param	checkAgainTimeoutLessThanOrEqual	int		.
 * @param	progressGreaterThanOrEqual	int		.
 * @param	progressLessThanOrEqual	int		.
 * @param	updatesCountGreaterThanOrEqual	int		.
 * @param	updatesCountLessThanOrEqual	int		.
 * @param	priorityGreaterThanOrEqual	int		.
 * @param	priorityLessThanOrEqual	int		.
 * @param	priorityEqual	int		.
 * @param	priorityIn	string		.
 * @param	priorityNotIn	string		.
 * @param	twinJobIdEqual	int		.
 * @param	twinJobIdIn	string		.
 * @param	twinJobIdNotIn	string		.
 * @param	bulkJobIdEqual	int		.
 * @param	bulkJobIdIn	string		.
 * @param	bulkJobIdNotIn	string		.
 * @param	parentJobIdEqual	int		.
 * @param	parentJobIdIn	string		.
 * @param	parentJobIdNotIn	string		.
 * @param	rootJobIdEqual	int		.
 * @param	rootJobIdIn	string		.
 * @param	rootJobIdNotIn	string		.
 * @param	queueTimeGreaterThanOrEqual	int		.
 * @param	queueTimeLessThanOrEqual	int		.
 * @param	finishTimeGreaterThanOrEqual	int		.
 * @param	finishTimeLessThanOrEqual	int		.
 * @param	errTypeEqual	int		.
 * @param	errTypeIn	string		.
 * @param	errTypeNotIn	string		.
 * @param	errNumberEqual	int		.
 * @param	errNumberIn	string		.
 * @param	errNumberNotIn	string		.
 * @param	fileSizeLessThan	int		.
 * @param	fileSizeGreaterThan	int		.
 * @param	lastWorkerRemoteEqual	bool		.
 * @param	schedulerIdEqual	int		.
 * @param	schedulerIdIn	string		.
 * @param	schedulerIdNotIn	string		.
 * @param	workerIdEqual	int		.
 * @param	workerIdIn	string		.
 * @param	workerIdNotIn	string		.
 * @param	batchIndexEqual	int		.
 * @param	batchIndexIn	string		.
 * @param	batchIndexNotIn	string		.
 * @param	lastSchedulerIdEqual	int		.
 * @param	lastSchedulerIdIn	string		.
 * @param	lastSchedulerIdNotIn	string		.
 * @param	lastWorkerIdEqual	int		.
 * @param	lastWorkerIdIn	string		.
 * @param	lastWorkerIdNotIn	string		.
 * @param	dcEqual	int		.
 * @param	dcIn	string		.
 * @param	dcNotIn	string		.
 */
function KalturaBatchJobBaseFilter(){
	this.entryIdEqual = null;
	this.jobTypeEqual = null;
	this.jobTypeIn = null;
	this.jobTypeNotIn = null;
	this.jobSubTypeEqual = null;
	this.jobSubTypeIn = null;
	this.jobSubTypeNotIn = null;
	this.onStressDivertToEqual = null;
	this.onStressDivertToIn = null;
	this.onStressDivertToNotIn = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.statusNotIn = null;
	this.abortEqual = null;
	this.checkAgainTimeoutGreaterThanOrEqual = null;
	this.checkAgainTimeoutLessThanOrEqual = null;
	this.progressGreaterThanOrEqual = null;
	this.progressLessThanOrEqual = null;
	this.updatesCountGreaterThanOrEqual = null;
	this.updatesCountLessThanOrEqual = null;
	this.priorityGreaterThanOrEqual = null;
	this.priorityLessThanOrEqual = null;
	this.priorityEqual = null;
	this.priorityIn = null;
	this.priorityNotIn = null;
	this.twinJobIdEqual = null;
	this.twinJobIdIn = null;
	this.twinJobIdNotIn = null;
	this.bulkJobIdEqual = null;
	this.bulkJobIdIn = null;
	this.bulkJobIdNotIn = null;
	this.parentJobIdEqual = null;
	this.parentJobIdIn = null;
	this.parentJobIdNotIn = null;
	this.rootJobIdEqual = null;
	this.rootJobIdIn = null;
	this.rootJobIdNotIn = null;
	this.queueTimeGreaterThanOrEqual = null;
	this.queueTimeLessThanOrEqual = null;
	this.finishTimeGreaterThanOrEqual = null;
	this.finishTimeLessThanOrEqual = null;
	this.errTypeEqual = null;
	this.errTypeIn = null;
	this.errTypeNotIn = null;
	this.errNumberEqual = null;
	this.errNumberIn = null;
	this.errNumberNotIn = null;
	this.fileSizeLessThan = null;
	this.fileSizeGreaterThan = null;
	this.lastWorkerRemoteEqual = null;
	this.schedulerIdEqual = null;
	this.schedulerIdIn = null;
	this.schedulerIdNotIn = null;
	this.workerIdEqual = null;
	this.workerIdIn = null;
	this.workerIdNotIn = null;
	this.batchIndexEqual = null;
	this.batchIndexIn = null;
	this.batchIndexNotIn = null;
	this.lastSchedulerIdEqual = null;
	this.lastSchedulerIdIn = null;
	this.lastSchedulerIdNotIn = null;
	this.lastWorkerIdEqual = null;
	this.lastWorkerIdIn = null;
	this.lastWorkerIdNotIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.dcNotIn = null;
}
KalturaBatchJobBaseFilter.inheritsFrom (KalturaBaseJobFilter);


/**
 * @param	idEqual	int		.
 * @param	idIn	string		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	createdByIdEqual	int		.
 * @param	typeEqual	int		.
 * @param	typeIn	string		.
 * @param	targetTypeEqual	int		.
 * @param	targetTypeIn	string		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 */
function KalturaControlPanelCommandBaseFilter(){
	this.idEqual = null;
	this.idIn = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.createdByIdEqual = null;
	this.typeEqual = null;
	this.typeIn = null;
	this.targetTypeEqual = null;
	this.targetTypeIn = null;
	this.statusEqual = null;
	this.statusIn = null;
}
KalturaControlPanelCommandBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaMailJobBaseFilter(){
}
KalturaMailJobBaseFilter.inheritsFrom (KalturaBaseJobFilter);


/**
 */
function KalturaNotificationBaseFilter(){
}
KalturaNotificationBaseFilter.inheritsFrom (KalturaBaseJobFilter);


/**
 */
function KalturaBatchJobFilter(){
}
KalturaBatchJobFilter.inheritsFrom (KalturaBatchJobBaseFilter);


/**
 */
function KalturaControlPanelCommandFilter(){
}
KalturaControlPanelCommandFilter.inheritsFrom (KalturaControlPanelCommandBaseFilter);


/**
 */
function KalturaMailJobFilter(){
}
KalturaMailJobFilter.inheritsFrom (KalturaMailJobBaseFilter);


/**
 */
function KalturaNotificationFilter(){
}
KalturaNotificationFilter.inheritsFrom (KalturaNotificationBaseFilter);


/**
 * @param	jobTypeAndSubTypeIn	string		.
 */
function KalturaBatchJobFilterExt(){
	this.jobTypeAndSubTypeIn = null;
}
KalturaBatchJobFilterExt.inheritsFrom (KalturaBatchJobFilter);


/**
 * @param	assetParamsIdEqual	int		.
 * @param	assetParamsVersionEqual	string		.
 * @param	assetIdEqual	string		.
 * @param	assetVersionEqual	string		.
 */
function KalturaAssetParamsOutputBaseFilter(){
	this.assetParamsIdEqual = null;
	this.assetParamsVersionEqual = null;
	this.assetIdEqual = null;
	this.assetVersionEqual = null;
}
KalturaAssetParamsOutputBaseFilter.inheritsFrom (KalturaAssetParamsFilter);


/**
 */
function KalturaFlavorAssetBaseFilter(){
}
KalturaFlavorAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 * @param	flavorParamsIdEqual	int		.
 * @param	flavorParamsVersionEqual	string		.
 * @param	flavorAssetIdEqual	string		.
 * @param	flavorAssetVersionEqual	string		.
 */
function KalturaFlavorParamsOutputBaseFilter(){
	this.flavorParamsIdEqual = null;
	this.flavorParamsVersionEqual = null;
	this.flavorAssetIdEqual = null;
	this.flavorAssetVersionEqual = null;
}
KalturaFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaMediaFlavorParamsBaseFilter(){
}
KalturaMediaFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaFlavorParamsOutputFilter(){
}
KalturaFlavorParamsOutputFilter.inheritsFrom (KalturaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaMediaFlavorParamsOutputBaseFilter(){
}
KalturaMediaFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 * @param	flavorAssetIdEqual	string		.
 */
function KalturaMediaInfoBaseFilter(){
	this.flavorAssetIdEqual = null;
}
KalturaMediaInfoBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaThumbAssetBaseFilter(){
}
KalturaThumbAssetBaseFilter.inheritsFrom (KalturaAssetFilter);


/**
 * @param	thumbParamsIdEqual	int		.
 * @param	thumbParamsVersionEqual	string		.
 * @param	thumbAssetIdEqual	string		.
 * @param	thumbAssetVersionEqual	string		.
 */
function KalturaThumbParamsOutputBaseFilter(){
	this.thumbParamsIdEqual = null;
	this.thumbParamsVersionEqual = null;
	this.thumbAssetIdEqual = null;
	this.thumbAssetVersionEqual = null;
}
KalturaThumbParamsOutputBaseFilter.inheritsFrom (KalturaThumbParamsFilter);


/**
 */
function KalturaAssetParamsOutputFilter(){
}
KalturaAssetParamsOutputFilter.inheritsFrom (KalturaAssetParamsOutputBaseFilter);


/**
 */
function KalturaFlavorAssetFilter(){
}
KalturaFlavorAssetFilter.inheritsFrom (KalturaFlavorAssetBaseFilter);


/**
 */
function KalturaMediaFlavorParamsFilter(){
}
KalturaMediaFlavorParamsFilter.inheritsFrom (KalturaMediaFlavorParamsBaseFilter);


/**
 */
function KalturaMediaFlavorParamsOutputFilter(){
}
KalturaMediaFlavorParamsOutputFilter.inheritsFrom (KalturaMediaFlavorParamsOutputBaseFilter);


/**
 */
function KalturaMediaInfoFilter(){
}
KalturaMediaInfoFilter.inheritsFrom (KalturaMediaInfoBaseFilter);


/**
 */
function KalturaThumbAssetFilter(){
}
KalturaThumbAssetFilter.inheritsFrom (KalturaThumbAssetBaseFilter);


/**
 */
function KalturaThumbParamsOutputFilter(){
}
KalturaThumbParamsOutputFilter.inheritsFrom (KalturaThumbParamsOutputBaseFilter);


/**
 */
function KalturaLiveStreamAdminEntryBaseFilter(){
}
KalturaLiveStreamAdminEntryBaseFilter.inheritsFrom (KalturaLiveStreamEntryFilter);


/**
 */
function KalturaLiveStreamAdminEntryFilter(){
}
KalturaLiveStreamAdminEntryFilter.inheritsFrom (KalturaLiveStreamAdminEntryBaseFilter);


/**
 */
function KalturaAdminUserBaseFilter(){
}
KalturaAdminUserBaseFilter.inheritsFrom (KalturaUserFilter);


/**
 */
function KalturaAdminUserFilter(){
}
KalturaAdminUserFilter.inheritsFrom (KalturaAdminUserBaseFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedBaseFilter(){
}
KalturaGoogleVideoSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaGoogleVideoSyndicationFeedFilter(){
}
KalturaGoogleVideoSyndicationFeedFilter.inheritsFrom (KalturaGoogleVideoSyndicationFeedBaseFilter);


/**
 */
function KalturaITunesSyndicationFeedBaseFilter(){
}
KalturaITunesSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaITunesSyndicationFeedFilter(){
}
KalturaITunesSyndicationFeedFilter.inheritsFrom (KalturaITunesSyndicationFeedBaseFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedBaseFilter(){
}
KalturaTubeMogulSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaTubeMogulSyndicationFeedFilter(){
}
KalturaTubeMogulSyndicationFeedFilter.inheritsFrom (KalturaTubeMogulSyndicationFeedBaseFilter);


/**
 */
function KalturaYahooSyndicationFeedBaseFilter(){
}
KalturaYahooSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaYahooSyndicationFeedFilter(){
}
KalturaYahooSyndicationFeedFilter.inheritsFrom (KalturaYahooSyndicationFeedBaseFilter);


/**
 */
function KalturaApiActionPermissionItemBaseFilter(){
}
KalturaApiActionPermissionItemBaseFilter.inheritsFrom (KalturaPermissionItemFilter);


/**
 */
function KalturaApiParameterPermissionItemBaseFilter(){
}
KalturaApiParameterPermissionItemBaseFilter.inheritsFrom (KalturaPermissionItemFilter);


/**
 */
function KalturaApiActionPermissionItemFilter(){
}
KalturaApiActionPermissionItemFilter.inheritsFrom (KalturaApiActionPermissionItemBaseFilter);


/**
 */
function KalturaApiParameterPermissionItemFilter(){
}
KalturaApiParameterPermissionItemFilter.inheritsFrom (KalturaApiParameterPermissionItemBaseFilter);


/**
 */
function KalturaGenericSyndicationFeedBaseFilter(){
}
KalturaGenericSyndicationFeedBaseFilter.inheritsFrom (KalturaBaseSyndicationFeedFilter);


/**
 */
function KalturaGenericSyndicationFeedFilter(){
}
KalturaGenericSyndicationFeedFilter.inheritsFrom (KalturaGenericSyndicationFeedBaseFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedBaseFilter(){
}
KalturaGenericXsltSyndicationFeedBaseFilter.inheritsFrom (KalturaGenericSyndicationFeedFilter);


/**
 */
function KalturaGenericXsltSyndicationFeedFilter(){
}
KalturaGenericXsltSyndicationFeedFilter.inheritsFrom (KalturaGenericXsltSyndicationFeedBaseFilter);


/**
 */
function KalturaUiConfAdminBaseFilter(){
}
KalturaUiConfAdminBaseFilter.inheritsFrom (KalturaUiConfFilter);


/**
 */
function KalturaUiConfAdminFilter(){
}
KalturaUiConfAdminFilter.inheritsFrom (KalturaUiConfAdminBaseFilter);


/**
 */
function KalturaConfigurableDistributionProfileBaseFilter(){
}
KalturaConfigurableDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaGenericDistributionProfileBaseFilter(){
}
KalturaGenericDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaSyndicationDistributionProfileBaseFilter(){
}
KalturaSyndicationDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaSyndicationDistributionProviderBaseFilter(){
}
KalturaSyndicationDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaConfigurableDistributionProfileFilter(){
}
KalturaConfigurableDistributionProfileFilter.inheritsFrom (KalturaConfigurableDistributionProfileBaseFilter);


/**
 */
function KalturaGenericDistributionProfileFilter(){
}
KalturaGenericDistributionProfileFilter.inheritsFrom (KalturaGenericDistributionProfileBaseFilter);


/**
 */
function KalturaSyndicationDistributionProfileFilter(){
}
KalturaSyndicationDistributionProfileFilter.inheritsFrom (KalturaSyndicationDistributionProfileBaseFilter);


/**
 */
function KalturaSyndicationDistributionProviderFilter(){
}
KalturaSyndicationDistributionProviderFilter.inheritsFrom (KalturaSyndicationDistributionProviderBaseFilter);


/**
 */
function KalturaComcastMrssDistributionProfileBaseFilter(){
}
KalturaComcastMrssDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaComcastMrssDistributionProviderBaseFilter(){
}
KalturaComcastMrssDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaComcastMrssDistributionProfileFilter(){
}
KalturaComcastMrssDistributionProfileFilter.inheritsFrom (KalturaComcastMrssDistributionProfileBaseFilter);


/**
 */
function KalturaComcastMrssDistributionProviderFilter(){
}
KalturaComcastMrssDistributionProviderFilter.inheritsFrom (KalturaComcastMrssDistributionProviderBaseFilter);


/**
 */
function KalturaDailymotionDistributionProfileBaseFilter(){
}
KalturaDailymotionDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaDailymotionDistributionProviderBaseFilter(){
}
KalturaDailymotionDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaDailymotionDistributionProfileFilter(){
}
KalturaDailymotionDistributionProfileFilter.inheritsFrom (KalturaDailymotionDistributionProfileBaseFilter);


/**
 */
function KalturaDailymotionDistributionProviderFilter(){
}
KalturaDailymotionDistributionProviderFilter.inheritsFrom (KalturaDailymotionDistributionProviderBaseFilter);


/**
 */
function KalturaExampleDistributionProfileBaseFilter(){
}
KalturaExampleDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaExampleDistributionProviderBaseFilter(){
}
KalturaExampleDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaExampleDistributionProfileFilter(){
}
KalturaExampleDistributionProfileFilter.inheritsFrom (KalturaExampleDistributionProfileBaseFilter);


/**
 */
function KalturaExampleDistributionProviderFilter(){
}
KalturaExampleDistributionProviderFilter.inheritsFrom (KalturaExampleDistributionProviderBaseFilter);


/**
 */
function KalturaFreewheelDistributionProfileBaseFilter(){
}
KalturaFreewheelDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaFreewheelDistributionProviderBaseFilter(){
}
KalturaFreewheelDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaFreewheelDistributionProfileFilter(){
}
KalturaFreewheelDistributionProfileFilter.inheritsFrom (KalturaFreewheelDistributionProfileBaseFilter);


/**
 */
function KalturaFreewheelDistributionProviderFilter(){
}
KalturaFreewheelDistributionProviderFilter.inheritsFrom (KalturaFreewheelDistributionProviderBaseFilter);


/**
 */
function KalturaPodcastDistributionProfileBaseFilter(){
}
KalturaPodcastDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaPodcastDistributionProviderBaseFilter(){
}
KalturaPodcastDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaPodcastDistributionProfileFilter(){
}
KalturaPodcastDistributionProfileFilter.inheritsFrom (KalturaPodcastDistributionProfileBaseFilter);


/**
 */
function KalturaPodcastDistributionProviderFilter(){
}
KalturaPodcastDistributionProviderFilter.inheritsFrom (KalturaPodcastDistributionProviderBaseFilter);


/**
 */
function KalturaTVComDistributionProfileBaseFilter(){
}
KalturaTVComDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaTVComDistributionProviderBaseFilter(){
}
KalturaTVComDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaTVComDistributionProfileFilter(){
}
KalturaTVComDistributionProfileFilter.inheritsFrom (KalturaTVComDistributionProfileBaseFilter);


/**
 */
function KalturaTVComDistributionProviderFilter(){
}
KalturaTVComDistributionProviderFilter.inheritsFrom (KalturaTVComDistributionProviderBaseFilter);


/**
 */
function KalturaYouTubeDistributionProfileBaseFilter(){
}
KalturaYouTubeDistributionProfileBaseFilter.inheritsFrom (KalturaConfigurableDistributionProfileFilter);


/**
 */
function KalturaYouTubeDistributionProviderBaseFilter(){
}
KalturaYouTubeDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaYouTubeDistributionProfileFilter(){
}
KalturaYouTubeDistributionProfileFilter.inheritsFrom (KalturaYouTubeDistributionProfileBaseFilter);


/**
 */
function KalturaYouTubeDistributionProviderFilter(){
}
KalturaYouTubeDistributionProviderFilter.inheritsFrom (KalturaYouTubeDistributionProviderBaseFilter);


/**
 */
function KalturaYoutubeApiDistributionProfileBaseFilter(){
}
KalturaYoutubeApiDistributionProfileBaseFilter.inheritsFrom (KalturaDistributionProfileFilter);


/**
 */
function KalturaYoutubeApiDistributionProviderBaseFilter(){
}
KalturaYoutubeApiDistributionProviderBaseFilter.inheritsFrom (KalturaDistributionProviderFilter);


/**
 */
function KalturaYoutubeApiDistributionProfileFilter(){
}
KalturaYoutubeApiDistributionProfileFilter.inheritsFrom (KalturaYoutubeApiDistributionProfileBaseFilter);


/**
 */
function KalturaYoutubeApiDistributionProviderFilter(){
}
KalturaYoutubeApiDistributionProviderFilter.inheritsFrom (KalturaYoutubeApiDistributionProviderBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsBaseFilter(){
}
KalturaDocumentFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputBaseFilter(){
}
KalturaDocumentFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaPdfFlavorParamsBaseFilter(){
}
KalturaPdfFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaPdfFlavorParamsOutputBaseFilter(){
}
KalturaPdfFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaSwfFlavorParamsBaseFilter(){
}
KalturaSwfFlavorParamsBaseFilter.inheritsFrom (KalturaFlavorParamsFilter);


/**
 */
function KalturaSwfFlavorParamsOutputBaseFilter(){
}
KalturaSwfFlavorParamsOutputBaseFilter.inheritsFrom (KalturaFlavorParamsOutputFilter);


/**
 */
function KalturaDocumentFlavorParamsFilter(){
}
KalturaDocumentFlavorParamsFilter.inheritsFrom (KalturaDocumentFlavorParamsBaseFilter);


/**
 */
function KalturaDocumentFlavorParamsOutputFilter(){
}
KalturaDocumentFlavorParamsOutputFilter.inheritsFrom (KalturaDocumentFlavorParamsOutputBaseFilter);


/**
 */
function KalturaPdfFlavorParamsFilter(){
}
KalturaPdfFlavorParamsFilter.inheritsFrom (KalturaPdfFlavorParamsBaseFilter);


/**
 */
function KalturaPdfFlavorParamsOutputFilter(){
}
KalturaPdfFlavorParamsOutputFilter.inheritsFrom (KalturaPdfFlavorParamsOutputBaseFilter);


/**
 */
function KalturaSwfFlavorParamsFilter(){
}
KalturaSwfFlavorParamsFilter.inheritsFrom (KalturaSwfFlavorParamsBaseFilter);


/**
 */
function KalturaSwfFlavorParamsOutputFilter(){
}
KalturaSwfFlavorParamsOutputFilter.inheritsFrom (KalturaSwfFlavorParamsOutputBaseFilter);


/**
 * @param	partnerIdEqual	int		.
 * @param	fileObjectTypeEqual	string		.
 * @param	fileObjectTypeIn	string		.
 * @param	objectIdEqual	string		.
 * @param	objectIdIn	string		.
 * @param	versionEqual	string		.
 * @param	versionIn	string		.
 * @param	objectSubTypeEqual	int		.
 * @param	objectSubTypeIn	string		.
 * @param	dcEqual	string		.
 * @param	dcIn	string		.
 * @param	originalEqual	int		.
 * @param	createdAtGreaterThanOrEqual	int		.
 * @param	createdAtLessThanOrEqual	int		.
 * @param	updatedAtGreaterThanOrEqual	int		.
 * @param	updatedAtLessThanOrEqual	int		.
 * @param	readyAtGreaterThanOrEqual	int		.
 * @param	readyAtLessThanOrEqual	int		.
 * @param	syncTimeGreaterThanOrEqual	int		.
 * @param	syncTimeLessThanOrEqual	int		.
 * @param	statusEqual	int		.
 * @param	statusIn	string		.
 * @param	fileTypeEqual	int		.
 * @param	fileTypeIn	string		.
 * @param	linkedIdEqual	int		.
 * @param	linkCountGreaterThanOrEqual	int		.
 * @param	linkCountLessThanOrEqual	int		.
 * @param	fileSizeGreaterThanOrEqual	int		.
 * @param	fileSizeLessThanOrEqual	int		.
 */
function KalturaFileSyncBaseFilter(){
	this.partnerIdEqual = null;
	this.fileObjectTypeEqual = null;
	this.fileObjectTypeIn = null;
	this.objectIdEqual = null;
	this.objectIdIn = null;
	this.versionEqual = null;
	this.versionIn = null;
	this.objectSubTypeEqual = null;
	this.objectSubTypeIn = null;
	this.dcEqual = null;
	this.dcIn = null;
	this.originalEqual = null;
	this.createdAtGreaterThanOrEqual = null;
	this.createdAtLessThanOrEqual = null;
	this.updatedAtGreaterThanOrEqual = null;
	this.updatedAtLessThanOrEqual = null;
	this.readyAtGreaterThanOrEqual = null;
	this.readyAtLessThanOrEqual = null;
	this.syncTimeGreaterThanOrEqual = null;
	this.syncTimeLessThanOrEqual = null;
	this.statusEqual = null;
	this.statusIn = null;
	this.fileTypeEqual = null;
	this.fileTypeIn = null;
	this.linkedIdEqual = null;
	this.linkCountGreaterThanOrEqual = null;
	this.linkCountLessThanOrEqual = null;
	this.fileSizeGreaterThanOrEqual = null;
	this.fileSizeLessThanOrEqual = null;
}
KalturaFileSyncBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaFileSyncFilter(){
}
KalturaFileSyncFilter.inheritsFrom (KalturaFileSyncBaseFilter);


/**
 * @param	partnerIdEqual	int		.
 * @param	aggregatedTimeLessThanOrEqual	int		.
 * @param	aggregatedTimeGreaterThanOrEqual	int		.
 * @param	sumTimeViewedLessThanOrEqual	float		.
 * @param	sumTimeViewedGreaterThanOrEqual	float		.
 * @param	averageTimeViewedLessThanOrEqual	float		.
 * @param	averageTimeViewedGreaterThanOrEqual	float		.
 * @param	countPlaysLessThanOrEqual	int		.
 * @param	countPlaysGreaterThanOrEqual	int		.
 * @param	countLoadsLessThanOrEqual	int		.
 * @param	countLoadsGreaterThanOrEqual	int		.
 * @param	countPlays25LessThanOrEqual	int		.
 * @param	countPlays25GreaterThanOrEqual	int		.
 * @param	countPlays50LessThanOrEqual	int		.
 * @param	countPlays50GreaterThanOrEqual	int		.
 * @param	countPlays75LessThanOrEqual	int		.
 * @param	countPlays75GreaterThanOrEqual	int		.
 * @param	countPlays100LessThanOrEqual	int		.
 * @param	countPlays100GreaterThanOrEqual	int		.
 * @param	countEditLessThanOrEqual	int		.
 * @param	countEditGreaterThanOrEqual	int		.
 * @param	countSharesLessThanOrEqual	int		.
 * @param	countSharesGreaterThanOrEqual	int		.
 * @param	countDownloadLessThanOrEqual	int		.
 * @param	countDownloadGreaterThanOrEqual	int		.
 * @param	countReportAbuseLessThanOrEqual	int		.
 * @param	countReportAbuseGreaterThanOrEqual	int		.
 * @param	countMediaEntriesLessThanOrEqual	int		.
 * @param	countMediaEntriesGreaterThanOrEqual	int		.
 * @param	countVideoEntriesLessThanOrEqual	int		.
 * @param	countVideoEntriesGreaterThanOrEqual	int		.
 * @param	countImageEntriesLessThanOrEqual	int		.
 * @param	countImageEntriesGreaterThanOrEqual	int		.
 * @param	countAudioEntriesLessThanOrEqual	int		.
 * @param	countAudioEntriesGreaterThanOrEqual	int		.
 * @param	countMixEntriesLessThanOrEqual	int		.
 * @param	countMixEntriesGreaterThanOrEqual	int		.
 * @param	countPlaylistsLessThanOrEqual	int		.
 * @param	countPlaylistsGreaterThanOrEqual	int		.
 * @param	countBandwidthLessThanOrEqual	string		.
 * @param	countBandwidthGreaterThanOrEqual	string		.
 * @param	countStorageLessThanOrEqual	string		.
 * @param	countStorageGreaterThanOrEqual	string		.
 * @param	countUsersLessThanOrEqual	int		.
 * @param	countUsersGreaterThanOrEqual	int		.
 * @param	countWidgetsLessThanOrEqual	int		.
 * @param	countWidgetsGreaterThanOrEqual	int		.
 * @param	aggregatedStorageLessThanOrEqual	string		.
 * @param	aggregatedStorageGreaterThanOrEqual	string		.
 * @param	aggregatedBandwidthLessThanOrEqual	string		.
 * @param	aggregatedBandwidthGreaterThanOrEqual	string		.
 * @param	countBufferStartLessThanOrEqual	int		.
 * @param	countBufferStartGreaterThanOrEqual	int		.
 * @param	countBufferEndLessThanOrEqual	int		.
 * @param	countBufferEndGreaterThanOrEqual	int		.
 * @param	countOpenFullScreenLessThanOrEqual	int		.
 * @param	countOpenFullScreenGreaterThanOrEqual	int		.
 * @param	countCloseFullScreenLessThanOrEqual	int		.
 * @param	countCloseFullScreenGreaterThanOrEqual	int		.
 * @param	countReplayLessThanOrEqual	int		.
 * @param	countReplayGreaterThanOrEqual	int		.
 * @param	countSeekLessThanOrEqual	int		.
 * @param	countSeekGreaterThanOrEqual	int		.
 * @param	countOpenUploadLessThanOrEqual	int		.
 * @param	countOpenUploadGreaterThanOrEqual	int		.
 * @param	countSavePublishLessThanOrEqual	int		.
 * @param	countSavePublishGreaterThanOrEqual	int		.
 * @param	countCloseEditorLessThanOrEqual	int		.
 * @param	countCloseEditorGreaterThanOrEqual	int		.
 * @param	countPreBumperPlayedLessThanOrEqual	int		.
 * @param	countPreBumperPlayedGreaterThanOrEqual	int		.
 * @param	countPostBumperPlayedLessThanOrEqual	int		.
 * @param	countPostBumperPlayedGreaterThanOrEqual	int		.
 * @param	countBumperClickedLessThanOrEqual	int		.
 * @param	countBumperClickedGreaterThanOrEqual	int		.
 * @param	countPrerollStartedLessThanOrEqual	int		.
 * @param	countPrerollStartedGreaterThanOrEqual	int		.
 * @param	countMidrollStartedLessThanOrEqual	int		.
 * @param	countMidrollStartedGreaterThanOrEqual	int		.
 * @param	countPostrollStartedLessThanOrEqual	int		.
 * @param	countPostrollStartedGreaterThanOrEqual	int		.
 * @param	countOverlayStartedLessThanOrEqual	int		.
 * @param	countOverlayStartedGreaterThanOrEqual	int		.
 * @param	countPrerollClickedLessThanOrEqual	int		.
 * @param	countPrerollClickedGreaterThanOrEqual	int		.
 * @param	countMidrollClickedLessThanOrEqual	int		.
 * @param	countMidrollClickedGreaterThanOrEqual	int		.
 * @param	countPostrollClickedLessThanOrEqual	int		.
 * @param	countPostrollClickedGreaterThanOrEqual	int		.
 * @param	countOverlayClickedLessThanOrEqual	int		.
 * @param	countOverlayClickedGreaterThanOrEqual	int		.
 * @param	countPreroll25LessThanOrEqual	int		.
 * @param	countPreroll25GreaterThanOrEqual	int		.
 * @param	countPreroll50LessThanOrEqual	int		.
 * @param	countPreroll50GreaterThanOrEqual	int		.
 * @param	countPreroll75LessThanOrEqual	int		.
 * @param	countPreroll75GreaterThanOrEqual	int		.
 * @param	countMidroll25LessThanOrEqual	int		.
 * @param	countMidroll25GreaterThanOrEqual	int		.
 * @param	countMidroll50LessThanOrEqual	int		.
 * @param	countMidroll50GreaterThanOrEqual	int		.
 * @param	countMidroll75LessThanOrEqual	int		.
 * @param	countMidroll75GreaterThanOrEqual	int		.
 * @param	countPostroll25LessThanOrEqual	int		.
 * @param	countPostroll25GreaterThanOrEqual	int		.
 * @param	countPostroll50LessThanOrEqual	int		.
 * @param	countPostroll50GreaterThanOrEqual	int		.
 * @param	countPostroll75LessThanOrEqual	int		.
 * @param	countPostroll75GreaterThanOrEqual	int		.
 * @param	countLiveStreamingBandwidthLessThanOrEqual	string		.
 * @param	countLiveStreamingBandwidthGreaterThanOrEqual	string		.
 * @param	aggregatedLiveStreamingBandwidthLessThanOrEqual	string		.
 * @param	aggregatedLiveStreamingBandwidthGreaterThanOrEqual	string		.
 */
function KalturaDwhHourlyPartnerBaseFilter(){
	this.partnerIdEqual = null;
	this.aggregatedTimeLessThanOrEqual = null;
	this.aggregatedTimeGreaterThanOrEqual = null;
	this.sumTimeViewedLessThanOrEqual = null;
	this.sumTimeViewedGreaterThanOrEqual = null;
	this.averageTimeViewedLessThanOrEqual = null;
	this.averageTimeViewedGreaterThanOrEqual = null;
	this.countPlaysLessThanOrEqual = null;
	this.countPlaysGreaterThanOrEqual = null;
	this.countLoadsLessThanOrEqual = null;
	this.countLoadsGreaterThanOrEqual = null;
	this.countPlays25LessThanOrEqual = null;
	this.countPlays25GreaterThanOrEqual = null;
	this.countPlays50LessThanOrEqual = null;
	this.countPlays50GreaterThanOrEqual = null;
	this.countPlays75LessThanOrEqual = null;
	this.countPlays75GreaterThanOrEqual = null;
	this.countPlays100LessThanOrEqual = null;
	this.countPlays100GreaterThanOrEqual = null;
	this.countEditLessThanOrEqual = null;
	this.countEditGreaterThanOrEqual = null;
	this.countSharesLessThanOrEqual = null;
	this.countSharesGreaterThanOrEqual = null;
	this.countDownloadLessThanOrEqual = null;
	this.countDownloadGreaterThanOrEqual = null;
	this.countReportAbuseLessThanOrEqual = null;
	this.countReportAbuseGreaterThanOrEqual = null;
	this.countMediaEntriesLessThanOrEqual = null;
	this.countMediaEntriesGreaterThanOrEqual = null;
	this.countVideoEntriesLessThanOrEqual = null;
	this.countVideoEntriesGreaterThanOrEqual = null;
	this.countImageEntriesLessThanOrEqual = null;
	this.countImageEntriesGreaterThanOrEqual = null;
	this.countAudioEntriesLessThanOrEqual = null;
	this.countAudioEntriesGreaterThanOrEqual = null;
	this.countMixEntriesLessThanOrEqual = null;
	this.countMixEntriesGreaterThanOrEqual = null;
	this.countPlaylistsLessThanOrEqual = null;
	this.countPlaylistsGreaterThanOrEqual = null;
	this.countBandwidthLessThanOrEqual = null;
	this.countBandwidthGreaterThanOrEqual = null;
	this.countStorageLessThanOrEqual = null;
	this.countStorageGreaterThanOrEqual = null;
	this.countUsersLessThanOrEqual = null;
	this.countUsersGreaterThanOrEqual = null;
	this.countWidgetsLessThanOrEqual = null;
	this.countWidgetsGreaterThanOrEqual = null;
	this.aggregatedStorageLessThanOrEqual = null;
	this.aggregatedStorageGreaterThanOrEqual = null;
	this.aggregatedBandwidthLessThanOrEqual = null;
	this.aggregatedBandwidthGreaterThanOrEqual = null;
	this.countBufferStartLessThanOrEqual = null;
	this.countBufferStartGreaterThanOrEqual = null;
	this.countBufferEndLessThanOrEqual = null;
	this.countBufferEndGreaterThanOrEqual = null;
	this.countOpenFullScreenLessThanOrEqual = null;
	this.countOpenFullScreenGreaterThanOrEqual = null;
	this.countCloseFullScreenLessThanOrEqual = null;
	this.countCloseFullScreenGreaterThanOrEqual = null;
	this.countReplayLessThanOrEqual = null;
	this.countReplayGreaterThanOrEqual = null;
	this.countSeekLessThanOrEqual = null;
	this.countSeekGreaterThanOrEqual = null;
	this.countOpenUploadLessThanOrEqual = null;
	this.countOpenUploadGreaterThanOrEqual = null;
	this.countSavePublishLessThanOrEqual = null;
	this.countSavePublishGreaterThanOrEqual = null;
	this.countCloseEditorLessThanOrEqual = null;
	this.countCloseEditorGreaterThanOrEqual = null;
	this.countPreBumperPlayedLessThanOrEqual = null;
	this.countPreBumperPlayedGreaterThanOrEqual = null;
	this.countPostBumperPlayedLessThanOrEqual = null;
	this.countPostBumperPlayedGreaterThanOrEqual = null;
	this.countBumperClickedLessThanOrEqual = null;
	this.countBumperClickedGreaterThanOrEqual = null;
	this.countPrerollStartedLessThanOrEqual = null;
	this.countPrerollStartedGreaterThanOrEqual = null;
	this.countMidrollStartedLessThanOrEqual = null;
	this.countMidrollStartedGreaterThanOrEqual = null;
	this.countPostrollStartedLessThanOrEqual = null;
	this.countPostrollStartedGreaterThanOrEqual = null;
	this.countOverlayStartedLessThanOrEqual = null;
	this.countOverlayStartedGreaterThanOrEqual = null;
	this.countPrerollClickedLessThanOrEqual = null;
	this.countPrerollClickedGreaterThanOrEqual = null;
	this.countMidrollClickedLessThanOrEqual = null;
	this.countMidrollClickedGreaterThanOrEqual = null;
	this.countPostrollClickedLessThanOrEqual = null;
	this.countPostrollClickedGreaterThanOrEqual = null;
	this.countOverlayClickedLessThanOrEqual = null;
	this.countOverlayClickedGreaterThanOrEqual = null;
	this.countPreroll25LessThanOrEqual = null;
	this.countPreroll25GreaterThanOrEqual = null;
	this.countPreroll50LessThanOrEqual = null;
	this.countPreroll50GreaterThanOrEqual = null;
	this.countPreroll75LessThanOrEqual = null;
	this.countPreroll75GreaterThanOrEqual = null;
	this.countMidroll25LessThanOrEqual = null;
	this.countMidroll25GreaterThanOrEqual = null;
	this.countMidroll50LessThanOrEqual = null;
	this.countMidroll50GreaterThanOrEqual = null;
	this.countMidroll75LessThanOrEqual = null;
	this.countMidroll75GreaterThanOrEqual = null;
	this.countPostroll25LessThanOrEqual = null;
	this.countPostroll25GreaterThanOrEqual = null;
	this.countPostroll50LessThanOrEqual = null;
	this.countPostroll50GreaterThanOrEqual = null;
	this.countPostroll75LessThanOrEqual = null;
	this.countPostroll75GreaterThanOrEqual = null;
	this.countLiveStreamingBandwidthLessThanOrEqual = null;
	this.countLiveStreamingBandwidthGreaterThanOrEqual = null;
	this.aggregatedLiveStreamingBandwidthLessThanOrEqual = null;
	this.aggregatedLiveStreamingBandwidthGreaterThanOrEqual = null;
}
KalturaDwhHourlyPartnerBaseFilter.inheritsFrom (KalturaFilter);


/**
 */
function KalturaDwhHourlyPartnerFilter(){
}
KalturaDwhHourlyPartnerFilter.inheritsFrom (KalturaDwhHourlyPartnerBaseFilter);


/**
 * @param	fromDate	int		Date range from
 *	.
 * @param	toDate	int		Date range to
 *	.
 */
function KalturaSystemPartnerUsageFilter(){
	this.fromDate = null;
	this.toDate = null;
}
KalturaSystemPartnerUsageFilter.inheritsFrom (KalturaFilter);


/**
 * @param	resource	KalturaContentResource		The content resource to associate with asset params.
 * @param	assetParamsId	int		The asset params to associate with the reaource.
 */
function KalturaAssetParamsResourceContainer(){
	this.resource = null;
	this.assetParamsId = null;
}
KalturaAssetParamsResourceContainer.inheritsFrom (KalturaResource);


/**
 * @param	assetId	string		ID of the source asset .
 */
function KalturaAssetResource(){
	this.assetId = null;
}
KalturaAssetResource.inheritsFrom (KalturaContentResource);


/**
 * @param	resources	array		Array of resources associated with asset params ids.
 */
function KalturaAssetsParamsResourceContainers(){
	this.resources = null;
}
KalturaAssetsParamsResourceContainers.inheritsFrom (KalturaResource);


/**
 */
function KalturaDataCenterContentResource(){
}
KalturaDataCenterContentResource.inheritsFrom (KalturaContentResource);


/**
 * @param	entryId	string		ID of the source entry .
 * @param	flavorParamsId	int		ID of the source flavor params, set to null to use the source flavor.
 */
function KalturaEntryResource(){
	this.entryId = null;
	this.flavorParamsId = null;
}
KalturaEntryResource.inheritsFrom (KalturaContentResource);


/**
 * @param	fileSyncObjectType	int		The object type of the file sync object .
 * @param	objectSubType	int		The object sub-type of the file sync object .
 * @param	objectId	string		The object id of the file sync object .
 * @param	version	string		The version of the file sync object .
 */
function KalturaFileSyncResource(){
	this.fileSyncObjectType = null;
	this.objectSubType = null;
	this.objectId = null;
	this.version = null;
}
KalturaFileSyncResource.inheritsFrom (KalturaContentResource);


/**
 * @param	url	string		Remote URL, FTP, HTTP or HTTPS .
 */
function KalturaUrlResource(){
	this.url = null;
}
KalturaUrlResource.inheritsFrom (KalturaContentResource);


/**
 * @param	storageProfileId	int		ID of storage profile to be associated with the created file sync, used for file serving URL composing. .
 */
function KalturaRemoteStorageResource(){
	this.storageProfileId = null;
}
KalturaRemoteStorageResource.inheritsFrom (KalturaUrlResource);


/**
 * @param	localFilePath	string		Full path to the local file .
 */
function KalturaServerFileResource(){
	this.localFilePath = null;
}
KalturaServerFileResource.inheritsFrom (KalturaDataCenterContentResource);


/**
 * @param	token	string		Token that returned from upload.upload action or uploadToken.add action. .
 */
function KalturaUploadedFileTokenResource(){
	this.token = null;
}
KalturaUploadedFileTokenResource.inheritsFrom (KalturaDataCenterContentResource);


/**
 * @param	token	string		Token that returned from media server such as FMS or red5. .
 */
function KalturaWebcamTokenResource(){
	this.token = null;
}
KalturaWebcamTokenResource.inheritsFrom (KalturaDataCenterContentResource);


/**
 * @param	dropFolderFileId	int		Id of the drop folder file object.
 */
function KalturaDropFolderFileResource(){
	this.dropFolderFileId = null;
}
KalturaDropFolderFileResource.inheritsFrom (KalturaDataCenterContentResource);


/**
 * @param	assetParamsId	int		.
 * @param	assetParamsVersion	string		.
 * @param	assetId	string		.
 * @param	assetVersion	string		.
 * @param	readyBehavior	int		.
 */
function KalturaAssetParamsOutput(){
	this.assetParamsId = null;
	this.assetParamsVersion = null;
	this.assetId = null;
	this.assetVersion = null;
	this.readyBehavior = null;
}
KalturaAssetParamsOutput.inheritsFrom (KalturaAssetParams);


/**
 * @param	flavorParamsId	int		.
 * @param	commandLinesStr	string		.
 * @param	flavorParamsVersion	string		.
 * @param	flavorAssetId	string		.
 * @param	flavorAssetVersion	string		.
 * @param	readyBehavior	int		.
 */
function KalturaFlavorParamsOutput(){
	this.flavorParamsId = null;
	this.commandLinesStr = null;
	this.flavorParamsVersion = null;
	this.flavorAssetId = null;
	this.flavorAssetVersion = null;
	this.readyBehavior = null;
}
KalturaFlavorParamsOutput.inheritsFrom (KalturaFlavorParams);


/**
 */
function KalturaMediaFlavorParamsOutput(){
}
KalturaMediaFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaMediaFlavorParams(){
}
KalturaMediaFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	thumbParamsId	int		.
 * @param	thumbParamsVersion	string		.
 * @param	thumbAssetId	string		.
 * @param	thumbAssetVersion	string		.
 */
function KalturaThumbParamsOutput(){
	this.thumbParamsId = null;
	this.thumbParamsVersion = null;
	this.thumbAssetId = null;
	this.thumbAssetVersion = null;
}
KalturaThumbParamsOutput.inheritsFrom (KalturaThumbParams);


/**
 */
function KalturaDocumentFlavorParamsOutput(){
}
KalturaDocumentFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaDocumentFlavorParams(){
}
KalturaDocumentFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	readonly	bool		.
 */
function KalturaPdfFlavorParamsOutput(){
	this.readonly = null;
}
KalturaPdfFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 * @param	readonly	bool		.
 */
function KalturaPdfFlavorParams(){
	this.readonly = null;
}
KalturaPdfFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 */
function KalturaSwfFlavorParamsOutput(){
}
KalturaSwfFlavorParamsOutput.inheritsFrom (KalturaFlavorParamsOutput);


/**
 */
function KalturaSwfFlavorParams(){
}
KalturaSwfFlavorParams.inheritsFrom (KalturaFlavorParams);


/**
 * @param	service	string		.
 * @param	action	string		.
 */
function KalturaApiActionPermissionItem(){
	this.service = null;
	this.action = null;
}
KalturaApiActionPermissionItem.inheritsFrom (KalturaPermissionItem);


/**
 * @param	object	string		.
 * @param	parameter	string		.
 * @param	action	string		.
 */
function KalturaApiParameterPermissionItem(){
	this.object = null;
	this.parameter = null;
	this.action = null;
}
KalturaApiParameterPermissionItem.inheritsFrom (KalturaPermissionItem);


/**
 * @param	feedDescription	string		feed description
 *	.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website)
 *	.
 */
function KalturaGenericSyndicationFeed(){
	this.feedDescription = null;
	this.feedLandingPage = null;
}
KalturaGenericSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	xslt	string		.
 */
function KalturaGenericXsltSyndicationFeed(){
	this.xslt = null;
}
KalturaGenericXsltSyndicationFeed.inheritsFrom (KalturaGenericSyndicationFeed);


/**
 * @param	adultContent	string		.
 */
function KalturaGoogleVideoSyndicationFeed(){
	this.adultContent = null;
}
KalturaGoogleVideoSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	feedDescription	string		feed description
 *	.
 * @param	language	string		feed language
 *	.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website)
 *	.
 * @param	ownerName	string		author/publisher name
 *	.
 * @param	ownerEmail	string		publisher email
 *	.
 * @param	feedImageUrl	string		podcast thumbnail
 *	.
 * @param	category	string		 (readOnly).
 * @param	adultContent	string		.
 * @param	feedAuthor	string		.
 */
function KalturaITunesSyndicationFeed(){
	this.feedDescription = null;
	this.language = null;
	this.feedLandingPage = null;
	this.ownerName = null;
	this.ownerEmail = null;
	this.feedImageUrl = null;
	this.category = null;
	this.adultContent = null;
	this.feedAuthor = null;
}
KalturaITunesSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	category	string		 (readOnly).
 */
function KalturaTubeMogulSyndicationFeed(){
	this.category = null;
}
KalturaTubeMogulSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	category	string		 (readOnly).
 * @param	adultContent	string		.
 * @param	feedDescription	string		feed description
 *	.
 * @param	feedLandingPage	string		feed landing page (i.e publisher website)
 *	.
 */
function KalturaYahooSyndicationFeed(){
	this.category = null;
	this.adultContent = null;
	this.feedDescription = null;
	this.feedLandingPage = null;
}
KalturaYahooSyndicationFeed.inheritsFrom (KalturaBaseSyndicationFeed);


/**
 * @param	isPublic	bool		.
 */
function KalturaUiConfAdmin(){
	this.isPublic = null;
}
KalturaUiConfAdmin.inheritsFrom (KalturaUiConf);


/**
 * @param	descriptor	string		.
 * @param	oldValue	string		.
 * @param	newValue	string		.
 */
function KalturaAuditTrailChangeItem(){
	this.descriptor = null;
	this.oldValue = null;
	this.newValue = null;
}
KalturaAuditTrailChangeItem.inheritsFrom (KalturaObjectBase);


/**
 * @param	changedItems	array		.
 */
function KalturaAuditTrailChangeInfo(){
	this.changedItems = null;
}
KalturaAuditTrailChangeInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	version	string		.
 * @param	objectSubType	int		.
 * @param	dc	int		.
 * @param	original	bool		.
 * @param	fileType	int		.
 */
function KalturaAuditTrailFileSyncCreateInfo(){
	this.version = null;
	this.objectSubType = null;
	this.dc = null;
	this.original = null;
	this.fileType = null;
}
KalturaAuditTrailFileSyncCreateInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	info	string		.
 */
function KalturaAuditTrailTextInfo(){
	this.info = null;
}
KalturaAuditTrailTextInfo.inheritsFrom (KalturaAuditTrailInfo);


/**
 * @param	fieldName	string		A value taken from a connector field enum which associates the current configuration to that connector field
 *	Field enum class should be returned by the provider's getFieldEnumClass function..
 * @param	userFriendlyFieldName	string		A string that will be shown to the user as the field name in error messages related to the current field.
 * @param	entryMrssXslt	string		An XSLT string that extracts the right value from the Kaltura entry MRSS XML.
 *	The value of the current connector field will be the one that is returned from transforming the Kaltura entry MRSS XML using this XSLT string..
 * @param	isRequired	int		Is the field required to have a value for submission ?.
 * @param	updateOnChange	bool		Trigger distribution update when this field changes or not ?.
 * @param	updateParams	array		Entry column or metadata xpath that should trigger an update
 *	TODO: find a better solution for this.
 * @param	isDefault	bool		Is this field config is the default for the distribution provider? (readOnly).
 */
function KalturaDistributionFieldConfig(){
	this.fieldName = null;
	this.userFriendlyFieldName = null;
	this.entryMrssXslt = null;
	this.isRequired = null;
	this.updateOnChange = null;
	this.updateParams = null;
	this.isDefault = null;
}
KalturaDistributionFieldConfig.inheritsFrom (KalturaObjectBase);


/**
 * @param	fieldConfigArray	array		.
 */
function KalturaConfigurableDistributionProfile(){
	this.fieldConfigArray = null;
}
KalturaConfigurableDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	protocol	int		.
 * @param	serverUrl	string		.
 * @param	serverPath	string		.
 * @param	username	string		.
 * @param	password	string		.
 * @param	ftpPassiveMode	bool		.
 * @param	httpFieldName	string		.
 * @param	httpFileName	string		.
 */
function KalturaGenericDistributionProfileAction(){
	this.protocol = null;
	this.serverUrl = null;
	this.serverPath = null;
	this.username = null;
	this.password = null;
	this.ftpPassiveMode = null;
	this.httpFieldName = null;
	this.httpFileName = null;
}
KalturaGenericDistributionProfileAction.inheritsFrom (KalturaObjectBase);


/**
 * @param	genericProviderId	int		 (insertOnly).
 * @param	submitAction	KalturaGenericDistributionProfileAction		.
 * @param	updateAction	KalturaGenericDistributionProfileAction		.
 * @param	deleteAction	KalturaGenericDistributionProfileAction		.
 * @param	fetchReportAction	KalturaGenericDistributionProfileAction		.
 * @param	updateRequiredEntryFields	string		.
 * @param	updateRequiredMetadataXPaths	string		.
 */
function KalturaGenericDistributionProfile(){
	this.genericProviderId = null;
	this.submitAction = null;
	this.updateAction = null;
	this.deleteAction = null;
	this.fetchReportAction = null;
	this.updateRequiredEntryFields = null;
	this.updateRequiredMetadataXPaths = null;
}
KalturaGenericDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	xsl	string		.
 * @param	feedId	string		 (readOnly).
 */
function KalturaSyndicationDistributionProfile(){
	this.xsl = null;
	this.feedId = null;
}
KalturaSyndicationDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	metadataProfileId	int		.
 * @param	feedUrl	string		 (readOnly).
 * @param	feedTitle	string		.
 * @param	feedLink	string		.
 * @param	feedDescription	string		.
 * @param	feedLastBuildDate	string		.
 * @param	itemLink	string		.
 * @param	cPlatformTvSeries	array		.
 * @param	cPlatformTvSeriesField	string		.
 */
function KalturaComcastMrssDistributionProfile(){
	this.metadataProfileId = null;
	this.feedUrl = null;
	this.feedTitle = null;
	this.feedLink = null;
	this.feedDescription = null;
	this.feedLastBuildDate = null;
	this.itemLink = null;
	this.cPlatformTvSeries = null;
	this.cPlatformTvSeriesField = null;
}
KalturaComcastMrssDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	user	string		.
 * @param	password	string		.
 * @param	metadataProfileId	int		.
 */
function KalturaDailymotionDistributionProfile(){
	this.user = null;
	this.password = null;
	this.metadataProfileId = null;
}
KalturaDailymotionDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	username	string		.
 * @param	password	string		.
 * @param	accountId	string		.
 */
function KalturaExampleDistributionProfile(){
	this.username = null;
	this.password = null;
	this.accountId = null;
}
KalturaExampleDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	apikey	string		.
 * @param	email	string		.
 * @param	accountId	string		.
 * @param	metadataProfileId	int		.
 */
function KalturaFreewheelDistributionProfile(){
	this.apikey = null;
	this.email = null;
	this.accountId = null;
	this.metadataProfileId = null;
}
KalturaFreewheelDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	xsl	string		.
 * @param	feedId	string		 (readOnly).
 * @param	metadataProfileId	int		.
 */
function KalturaPodcastDistributionProfile(){
	this.xsl = null;
	this.feedId = null;
	this.metadataProfileId = null;
}
KalturaPodcastDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	metadataProfileId	int		.
 * @param	feedUrl	string		 (readOnly).
 * @param	feedTitle	string		.
 * @param	feedLink	string		.
 * @param	feedDescription	string		.
 * @param	feedLanguage	string		.
 * @param	feedCopyright	string		.
 * @param	feedImageTitle	string		.
 * @param	feedImageUrl	string		.
 * @param	feedImageLink	string		.
 * @param	feedImageWidth	int		.
 * @param	feedImageHeight	int		.
 */
function KalturaTVComDistributionProfile(){
	this.metadataProfileId = null;
	this.feedUrl = null;
	this.feedTitle = null;
	this.feedLink = null;
	this.feedDescription = null;
	this.feedLanguage = null;
	this.feedCopyright = null;
	this.feedImageTitle = null;
	this.feedImageUrl = null;
	this.feedImageLink = null;
	this.feedImageWidth = null;
	this.feedImageHeight = null;
}
KalturaTVComDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	username	string		.
 * @param	notificationEmail	string		.
 * @param	sftpHost	string		.
 * @param	sftpLogin	string		.
 * @param	sftpPublicKey	string		.
 * @param	sftpPrivateKey	string		.
 * @param	sftpBaseDir	string		.
 * @param	ownerName	string		.
 * @param	defaultCategory	string		.
 * @param	allowComments	string		.
 * @param	allowEmbedding	string		.
 * @param	allowRatings	string		.
 * @param	allowResponses	string		.
 * @param	commercialPolicy	string		.
 * @param	ugcPolicy	string		.
 * @param	target	string		.
 */
function KalturaYouTubeDistributionProfile(){
	this.username = null;
	this.notificationEmail = null;
	this.sftpHost = null;
	this.sftpLogin = null;
	this.sftpPublicKey = null;
	this.sftpPrivateKey = null;
	this.sftpBaseDir = null;
	this.ownerName = null;
	this.defaultCategory = null;
	this.allowComments = null;
	this.allowEmbedding = null;
	this.allowRatings = null;
	this.allowResponses = null;
	this.commercialPolicy = null;
	this.ugcPolicy = null;
	this.target = null;
}
KalturaYouTubeDistributionProfile.inheritsFrom (KalturaConfigurableDistributionProfile);


/**
 * @param	username	string		.
 * @param	password	string		.
 * @param	defaultCategory	string		.
 * @param	allowComments	string		.
 * @param	allowEmbedding	string		.
 * @param	allowRatings	string		.
 * @param	allowResponses	string		.
 * @param	metadataProfileId	int		.
 */
function KalturaYoutubeApiDistributionProfile(){
	this.username = null;
	this.password = null;
	this.defaultCategory = null;
	this.allowComments = null;
	this.allowEmbedding = null;
	this.allowRatings = null;
	this.allowResponses = null;
	this.metadataProfileId = null;
}
KalturaYoutubeApiDistributionProfile.inheritsFrom (KalturaDistributionProfile);


/**
 * @param	fieldName	string		.
 * @param	validationErrorType	int		.
 * @param	validationErrorParam	string		Parameter of the validation error
 *	For example, minimum value for KalturaDistributionValidationErrorType::STRING_TOO_SHORT validation error.
 */
function KalturaDistributionValidationErrorInvalidData(){
	this.fieldName = null;
	this.validationErrorType = null;
	this.validationErrorParam = null;
}
KalturaDistributionValidationErrorInvalidData.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	metadataProfileId	int		.
 */
function KalturaDistributionValidationErrorInvalidMetadata(){
	this.metadataProfileId = null;
}
KalturaDistributionValidationErrorInvalidMetadata.inheritsFrom (KalturaDistributionValidationErrorInvalidData);


/**
 * @param	flavorParamsId	string		.
 */
function KalturaDistributionValidationErrorMissingFlavor(){
	this.flavorParamsId = null;
}
KalturaDistributionValidationErrorMissingFlavor.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	fieldName	string		.
 */
function KalturaDistributionValidationErrorMissingMetadata(){
	this.fieldName = null;
}
KalturaDistributionValidationErrorMissingMetadata.inheritsFrom (KalturaDistributionValidationError);


/**
 * @param	dimensions	KalturaDistributionThumbDimensions		.
 */
function KalturaDistributionValidationErrorMissingThumbnail(){
	this.dimensions = null;
}
KalturaDistributionValidationErrorMissingThumbnail.inheritsFrom (KalturaDistributionValidationError);


/**
 */
function KalturaSyndicationDistributionProvider(){
}
KalturaSyndicationDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaComcastMrssDistributionProvider(){
}
KalturaComcastMrssDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaDailymotionDistributionProvider(){
}
KalturaDailymotionDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaExampleDistributionProvider(){
}
KalturaExampleDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaFreewheelDistributionProvider(){
}
KalturaFreewheelDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaPodcastDistributionProvider(){
}
KalturaPodcastDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaTVComDistributionProvider(){
}
KalturaTVComDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaYouTubeDistributionProvider(){
}
KalturaYouTubeDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaYoutubeApiDistributionProvider(){
}
KalturaYoutubeApiDistributionProvider.inheritsFrom (KalturaDistributionProvider);


/**
 */
function KalturaDropFolderXmlBulkUploadFileHandlerConfig(){
}
KalturaDropFolderXmlBulkUploadFileHandlerConfig.inheritsFrom (KalturaDropFolderFileHandlerConfig);


/**
 * @param	contentMatchPolicy	int		.
 * @param	slugRegex	string		Regular expression that defines valid file names to be handled.
 *	The following might be extracted from the file name and used if defined:
 *	- (?P<referenceId>\w+) - will be used as the drop folder file's parsed slug.
 *	- (?P<flavorName>\w+)  - will be used as the drop folder file's parsed flavor.
 *	.
 */
function KalturaDropFolderContentFileHandlerConfig(){
	this.contentMatchPolicy = null;
	this.slugRegex = null;
}
KalturaDropFolderContentFileHandlerConfig.inheritsFrom (KalturaDropFolderFileHandlerConfig);


