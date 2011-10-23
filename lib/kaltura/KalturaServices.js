/**
 *Class definition for the Kaltura service: accessControl.
 * The available service actions:
 * @action	add	Add new Access Control Profile
 *	.
 * @action	get	Get Access Control Profile by id
 *	.
 * @action	update	Update Access Control Profile by id
 *	.
 * @action	delete	Delete Access Control Profile by id
 *	.
 * @action	list	List Access Control Profiles by filter and pager
 *	.
*/
function KalturaAccessControlService(client){
	this.init(client);
}
KalturaAccessControlService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Access Control Profile
 *	.
 * @param	accessControl	KalturaAccessControl		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.add = function(callback, accessControl){
	var kparams = new Object();
	this.client.addParam(kparams, "accessControl", toParams(accessControl));
	this.client.queueServiceActionCall("accessControl", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Access Control Profile by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accessControl", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Access Control Profile by id
 *	.
 * @param	id	int		 (optional).
 * @param	accessControl	KalturaAccessControl		 (optional).
 * @return	KalturaAccessControl.
 */
KalturaAccessControlService.prototype.update = function(callback, id, accessControl){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "accessControl", toParams(accessControl));
	this.client.queueServiceActionCall("accessControl", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Access Control Profile by id
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaAccessControlService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("accessControl", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Access Control Profiles by filter and pager
 *	.
 * @param	filter	KalturaAccessControlFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAccessControlListResponse.
 */
KalturaAccessControlService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("accessControl", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: adminUser.
 * The available service actions:
 * @action	updatePassword	Update admin user password and email
 *	DEPRECATED.
 * @action	resetPassword	Reset admin user password and send it to the users email address
 *	.
 * @action	login	Get an admin session using admin email and password (Used for login to the KMC application)
 *	.
 * @action	setInitialPassword	Set initial users password
 *	.
*/
function KalturaAdminUserService(client){
	this.init(client);
}
KalturaAdminUserService.inheritsFrom (KalturaServiceBase);
/**
 * Update admin user password and email
 *	DEPRECATED.
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @param	newEmail	string		Optional, provide only when you want to update the email (optional).
 * @param	newPassword	string		 (optional).
 * @return	KalturaAdminUser.
 */
KalturaAdminUserService.prototype.updatePassword = function(callback, email, password, newEmail, newPassword){
	if(!newEmail)
		newEmail = "";
	if(!newPassword)
		newPassword = "";
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "newEmail", newEmail);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("adminUser", "updatePassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reset admin user password and send it to the users email address
 *	.
 * @param	email	string		 (optional).
 * @return	.
 */
KalturaAdminUserService.prototype.resetPassword = function(callback, email){
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.queueServiceActionCall("adminUser", "resetPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get an admin session using admin email and password (Used for login to the KMC application)
 *	.
 * @param	email	string		 (optional).
 * @param	password	string		 (optional).
 * @param	partnerId	int		 (optional, default: null).
 * @return	string.
 */
KalturaAdminUserService.prototype.login = function(callback, email, password, partnerId){
	if(!partnerId)
		partnerId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.queueServiceActionCall("adminUser", "login", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set initial users password
 *	.
 * @param	hashKey	string		 (optional).
 * @param	newPassword	string		new password to set (optional).
 * @return	.
 */
KalturaAdminUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "hashKey", hashKey);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("adminUser", "setInitialPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: baseEntry.
 * The available service actions:
 * @action	add	Generic add entry, should be used when the uploaded entry type is not known.
 * @action	addContent	Generic add entry, should be used when the uploaded entry type is not known.
 * @action	addFromUploadedFile	Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @action	get	Get base entry by ID.
 *	.
 * @action	update	Update base entry. Only the properties that were set will be updated.
 *	.
 * @action	updateContent	Update base entry. Only the properties that were set will be updated.
 *	.
 * @action	getByIds	Get base entry by comma separated entry ids.
 *	.
 * @action	delete	Delete an entry..
 * @action	list	List base entries by filter with paging support.
 *	.
 * @action	count	Count base entries by filter.
 *	.
 * @action	upload	Upload a file to Kaltura, that can be used to create an entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action	updateThumbnailJpeg	Update entry thumbnail using a raw jpeg file
 *	.
 * @action	updateThumbnailFromUrl	Update entry thumbnail using url
 *	.
 * @action	updateThumbnailFromSourceEntry	Update entry thumbnail from a different entry by a specified time offset (In seconds)
 *	.
 * @action	flag	Flag inappropriate entry for moderation
 *	.
 * @action	reject	Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @action	approve	Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @action	listFlags	List all pending flags for the entry
 *	.
 * @action	anonymousRank	Anonymously rank an entry, no validation is done on duplicate rankings
 *	.
 * @action	getContextData	.
*/
function KalturaBaseEntryService(client){
	this.init(client);
}
KalturaBaseEntryService.inheritsFrom (KalturaServiceBase);
/**
 * Generic add entry, should be used when the uploaded entry type is not known.
 * @param	entry	KalturaBaseEntry		 (optional).
 * @param	type	string		 (optional, enum: KalturaEntryType, default: null).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.add = function(callback, entry, type){
	if(!type)
		type = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("baseEntry", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Generic add entry, should be used when the uploaded entry type is not known.
 * @param	entryId	string		 (optional).
 * @param	resource	KalturaResource		 (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addContent = function(callback, entryId, resource){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.queueServiceActionCall("baseEntry", "addContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Generic add entry using an uploaded file, should be used when the uploaded entry type is not known.
 * @param	entry	KalturaBaseEntry		 (optional).
 * @param	uploadTokenId	string		 (optional).
 * @param	type	string		 (optional, enum: KalturaEntryType, default: null).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.addFromUploadedFile = function(callback, entry, uploadTokenId, type){
	if(!type)
		type = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("baseEntry", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get base entry by ID.
 *	.
 * @param	entryId	string		Entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("baseEntry", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update base entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Entry id to update (optional).
 * @param	baseEntry	KalturaBaseEntry		Base entry metadata to update (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.update = function(callback, entryId, baseEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "baseEntry", toParams(baseEntry));
	this.client.queueServiceActionCall("baseEntry", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update base entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Entry id to update (optional).
 * @param	resource	KalturaResource		Resource to be used to replace entry content (optional).
 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
	if(!conversionProfileId)
		conversionProfileId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("baseEntry", "updateContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get base entry by comma separated entry ids.
 *	.
 * @param	entryIds	string		Comma separated string of entry ids (optional).
 * @return	array.
 */
KalturaBaseEntryService.prototype.getByIds = function(callback, entryIds){
	var kparams = new Object();
	this.client.addParam(kparams, "entryIds", entryIds);
	this.client.queueServiceActionCall("baseEntry", "getByIds", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an entry..
 * @param	entryId	string		Entry id to delete (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseEntry", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List base entries by filter with paging support.
 *	.
 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaBaseEntryListResponse.
 */
KalturaBaseEntryService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("baseEntry", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Count base entries by filter.
 *	.
 * @param	filter	KalturaBaseEntryFilter		Entry filter (optional, default: null).
 * @return	int.
 */
KalturaBaseEntryService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("baseEntry", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a file to Kaltura, that can be used to create an entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaBaseEntryService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("baseEntry", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using a raw jpeg file
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("baseEntry", "updateThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("baseEntry", "updateThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail from a different entry by a specified time offset (In seconds)
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	sourceEntryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @return	KalturaBaseEntry.
 */
KalturaBaseEntryService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.queueServiceActionCall("baseEntry", "updateThumbnailFromSourceEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Flag inappropriate entry for moderation
 *	.
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.flag = function(callback, moderationFlag){
	var kparams = new Object();
	this.client.addParam(kparams, "moderationFlag", toParams(moderationFlag));
	this.client.queueServiceActionCall("baseEntry", "flag", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reject the entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.reject = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseEntry", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approve the entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.approve = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("baseEntry", "approve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all pending flags for the entry
 *	.
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaModerationFlagListResponse.
 */
KalturaBaseEntryService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("baseEntry", "listFlags", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank an entry, no validation is done on duplicate rankings
 *	.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaBaseEntryService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("baseEntry", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	contextDataParams	KalturaEntryContextDataParams		 (optional).
 * @return	KalturaEntryContextDataResult.
 */
KalturaBaseEntryService.prototype.getContextData = function(callback, entryId, contextDataParams){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "contextDataParams", toParams(contextDataParams));
	this.client.queueServiceActionCall("baseEntry", "getContextData", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: bulkUpload.
 * The available service actions:
 * @action	add	Add new bulk upload batch job
 *	Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *	If no conversion profile was specified, partner's default will be used
 *	.
 * @action	get	Get bulk upload batch job by id.
 * @action	list	List bulk upload batch jobs.
*/
function KalturaBulkUploadService(client){
	this.init(client);
}
KalturaBulkUploadService.inheritsFrom (KalturaServiceBase);
/**
 * Add new bulk upload batch job
 *	Conversion profile id can be specified in the API or in the CSV file, the one in the CSV file will be stronger.
 *	If no conversion profile was specified, partner's default will be used
 *	.
 * @param	conversionProfileId	int		Convertion profile id to use for converting the current bulk (-1 to use partner's default) (optional).
 * @param	csvFileData	file		bullk upload file (optional).
 * @param	bulkUploadType	string		 (optional, enum: KalturaBulkUploadType, default: null).
 * @return	KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.add = function(callback, conversionProfileId, csvFileData, bulkUploadType){
	if(!bulkUploadType)
		bulkUploadType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	kfiles = new Object();
	this.client.addParam(kfiles, "csvFileData", csvFileData);
	this.client.addParam(kparams, "bulkUploadType", bulkUploadType);
	this.client.queueServiceActionCall("bulkUpload", "add", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get bulk upload batch job by id.
 * @param	id	int		 (optional).
 * @return	KalturaBulkUpload.
 */
KalturaBulkUploadService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("bulkUpload", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List bulk upload batch jobs.
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBulkUploadListResponse.
 */
KalturaBulkUploadService.prototype.listAction = function(callback, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("bulkUpload", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: category.
 * The available service actions:
 * @action	add	Add new Category
 *	.
 * @action	get	Get Category by id
 *	.
 * @action	update	Update Category
 *	.
 * @action	delete	Delete a Category
 *	.
 * @action	list	List all categories
 *	.
*/
function KalturaCategoryService(client){
	this.init(client);
}
KalturaCategoryService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Category
 *	.
 * @param	category	KalturaCategory		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.add = function(callback, category){
	var kparams = new Object();
	this.client.addParam(kparams, "category", toParams(category));
	this.client.queueServiceActionCall("category", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Category by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("category", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Category
 *	.
 * @param	id	int		 (optional).
 * @param	category	KalturaCategory		 (optional).
 * @return	KalturaCategory.
 */
KalturaCategoryService.prototype.update = function(callback, id, category){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "category", toParams(category));
	this.client.queueServiceActionCall("category", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a Category
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaCategoryService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("category", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all categories
 *	.
 * @param	filter	KalturaCategoryFilter		 (optional, default: null).
 * @return	KalturaCategoryListResponse.
 */
KalturaCategoryService.prototype.listAction = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("category", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: conversionProfileAssetParams.
 * The available service actions:
 * @action	list	Lists asset parmas of conversion profile by ID
 *	.
 * @action	update	Update asset parmas of conversion profile by ID
 *	.
*/
function KalturaConversionProfileAssetParamsService(client){
	this.init(client);
}
KalturaConversionProfileAssetParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Lists asset parmas of conversion profile by ID
 *	.
 * @param	filter	KalturaConversionProfileAssetParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaConversionProfileAssetParamsListResponse.
 */
KalturaConversionProfileAssetParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("conversionProfileAssetParams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update asset parmas of conversion profile by ID
 *	.
 * @param	conversionProfileId	int		 (optional).
 * @param	assetParamsId	int		 (optional).
 * @param	conversionProfileAssetParams	KalturaConversionProfileAssetParams		 (optional).
 * @return	KalturaConversionProfileAssetParams.
 */
KalturaConversionProfileAssetParamsService.prototype.update = function(callback, conversionProfileId, assetParamsId, conversionProfileAssetParams){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.addParam(kparams, "assetParamsId", assetParamsId);
	this.client.addParam(kparams, "conversionProfileAssetParams", toParams(conversionProfileAssetParams));
	this.client.queueServiceActionCall("conversionProfileAssetParams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: conversionProfile.
 * The available service actions:
 * @action	setAsDefault	Set Conversion Profile to be the partner default
 *	.
 * @action	getDefault	Get the partner's default conversion profile
 *	.
 * @action	add	Add new Conversion Profile
 *	.
 * @action	get	Get Conversion Profile by ID
 *	.
 * @action	update	Update Conversion Profile by ID
 *	.
 * @action	delete	Delete Conversion Profile by ID
 *	.
 * @action	list	List Conversion Profiles by filter with paging support
 *	.
*/
function KalturaConversionProfileService(client){
	this.init(client);
}
KalturaConversionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Set Conversion Profile to be the partner default
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.setAsDefault = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionProfile", "setAsDefault", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get the partner's default conversion profile
 *	.
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.getDefault = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("conversionProfile", "getDefault", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new Conversion Profile
 *	.
 * @param	conversionProfile	KalturaConversionProfile		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.add = function(callback, conversionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfile", toParams(conversionProfile));
	this.client.queueServiceActionCall("conversionProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Conversion Profile by ID
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Conversion Profile by ID
 *	.
 * @param	id	int		 (optional).
 * @param	conversionProfile	KalturaConversionProfile		 (optional).
 * @return	KalturaConversionProfile.
 */
KalturaConversionProfileService.prototype.update = function(callback, id, conversionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "conversionProfile", toParams(conversionProfile));
	this.client.queueServiceActionCall("conversionProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Conversion Profile by ID
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaConversionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("conversionProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Conversion Profiles by filter with paging support
 *	.
 * @param	filter	KalturaConversionProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaConversionProfileListResponse.
 */
KalturaConversionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("conversionProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: data.
 * The available service actions:
 * @action	add	Adds a new data entry
 *	.
 * @action	get	Get data entry by ID.
 *	.
 * @action	update	Update data entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a data entry.
 *	.
 * @action	list	List data entries by filter with paging support.
 *	.
*/
function KalturaDataService(client){
	this.init(client);
}
KalturaDataService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new data entry
 *	.
 * @param	dataEntry	KalturaDataEntry		Data entry (optional).
 * @return	KalturaDataEntry.
 */
KalturaDataService.prototype.add = function(callback, dataEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "dataEntry", toParams(dataEntry));
	this.client.queueServiceActionCall("data", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get data entry by ID.
 *	.
 * @param	entryId	string		Data entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaDataEntry.
 */
KalturaDataService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("data", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update data entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Data entry id to update (optional).
 * @param	documentEntry	KalturaDataEntry		Data entry metadata to update (optional).
 * @return	KalturaDataEntry.
 */
KalturaDataService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("data", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a data entry.
 *	.
 * @param	entryId	string		Data entry id to delete (optional).
 * @return	.
 */
KalturaDataService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("data", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List data entries by filter with paging support.
 *	.
 * @param	filter	KalturaDataEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaDataListResponse.
 */
KalturaDataService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("data", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: document.
 * The available service actions:
 * @action	addFromUploadedFile	Add new document entry after the specific document file was uploaded and the upload token id exists
 *	.
 * @action	addFromEntry	Copy entry into new entry
 *	.
 * @action	addFromFlavorAsset	Copy flavor asset into new entry
 *	.
 * @action	convert	Convert entry
 *	.
 * @action	get	Get document entry by ID.
 *	.
 * @action	update	Update document entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a document entry.
 *	.
 * @action	list	List document entries by filter with paging support.
 *	.
 * @action	upload	Upload a document file to Kaltura, then the file can be used to create a document entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action	convertPptToSwf	This will queue a batch job for converting the document file to swf
 *	Returns the URL where the new swf will be available 
 *	.
*/
function KalturaDocumentService(client){
	this.init(client);
}
KalturaDocumentService.inheritsFrom (KalturaServiceBase);
/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists
 *	.
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("document", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy entry into new entry
 *	.
 * @param	sourceEntryId	string		Document entry id to copy from (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry)
		documentEntry = null;
	if(!sourceFlavorParamsId)
		sourceFlavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
	this.client.queueServiceActionCall("document", "addFromEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *	.
 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry)
		documentEntry = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("document", "addFromFlavorAsset", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Convert entry
 *	.
 * @param	entryId	string		Document entry id (optional).
 * @param	conversionProfileId	int		 (optional, default: null).
 * @param	dynamicConversionAttributes	array		 (optional, default: null).
 * @return	int.
 */
KalturaDocumentService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId)
		conversionProfileId = null;
	if(!dynamicConversionAttributes)
		dynamicConversionAttributes = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if(dynamicConversionAttributes != null)
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, "dynamicConversionAttributes:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("document", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get document entry by ID.
 *	.
 * @param	entryId	string		Document entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("document", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update document entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Document entry id to update (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("document", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a document entry.
 *	.
 * @param	entryId	string		Document entry id to delete (optional).
 * @return	.
 */
KalturaDocumentService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("document", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List document entries by filter with paging support.
 *	.
 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaDocumentListResponse.
 */
KalturaDocumentService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("document", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaDocumentService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("document", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * This will queue a batch job for converting the document file to swf
 *	Returns the URL where the new swf will be available 
 *	.
 * @param	entryId	string		 (optional).
 * @return	string.
 */
KalturaDocumentService.prototype.convertPptToSwf = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("document", "convertPptToSwf", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: EmailIngestionProfile.
 * The available service actions:
 * @action	add	EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @action	getByEmailAddress	Retrieve a EmailIngestionProfile by email address.
 * @action	get	Retrieve a EmailIngestionProfile by id.
 * @action	update	Update an existing EmailIngestionProfile.
 * @action	delete	Delete an existing EmailIngestionProfile.
 * @action	addMediaEntry	add KalturaMediaEntry from email ingestion.
*/
function KalturaEmailIngestionProfileService(client){
	this.init(client);
}
KalturaEmailIngestionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * EmailIngestionProfile Add action allows you to add a EmailIngestionProfile to Kaltura DB.
 * @param	EmailIP	KalturaEmailIngestionProfile		Mandatory input parameter of type KalturaEmailIngestionProfile (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.add = function(callback, EmailIP){
	var kparams = new Object();
	this.client.addParam(kparams, "EmailIP", toParams(EmailIP));
	this.client.queueServiceActionCall("EmailIngestionProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by email address.
 * @param	emailAddress	string		 (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.getByEmailAddress = function(callback, emailAddress){
	var kparams = new Object();
	this.client.addParam(kparams, "emailAddress", emailAddress);
	this.client.queueServiceActionCall("EmailIngestionProfile", "getByEmailAddress", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a EmailIngestionProfile by id.
 * @param	id	int		 (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("EmailIngestionProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing EmailIngestionProfile.
 * @param	id	int		 (optional).
 * @param	EmailIP	KalturaEmailIngestionProfile		 (optional).
 * @return	KalturaEmailIngestionProfile.
 */
KalturaEmailIngestionProfileService.prototype.update = function(callback, id, EmailIP){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "EmailIP", toParams(EmailIP));
	this.client.queueServiceActionCall("EmailIngestionProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing EmailIngestionProfile.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaEmailIngestionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("EmailIngestionProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * add KalturaMediaEntry from email ingestion.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @param	emailProfId	int		 (optional).
 * @param	fromAddress	string		 (optional).
 * @param	emailMsgId	string		 (optional).
 * @return	KalturaMediaEntry.
 */
KalturaEmailIngestionProfileService.prototype.addMediaEntry = function(callback, mediaEntry, uploadTokenId, emailProfId, fromAddress, emailMsgId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.addParam(kparams, "emailProfId", emailProfId);
	this.client.addParam(kparams, "fromAddress", fromAddress);
	this.client.addParam(kparams, "emailMsgId", emailMsgId);
	this.client.queueServiceActionCall("EmailIngestionProfile", "addMediaEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorAsset.
 * The available service actions:
 * @action	add	Add flavor asset.
 * @action	update	Update flavor asset.
 * @action	setContent	Update content of flavor asset.
 * @action	get	Get Flavor Asset by ID
 *	.
 * @action	getByEntryId	Get Flavor Assets for Entry
 *	.
 * @action	list	List Flavor Assets by filter and pager
 *	.
 * @action	getWebPlayableByEntryId	Get web playable Flavor Assets for Entry
 *	.
 * @action	convert	Add and convert new Flavor Asset for Entry with specific Flavor Params
 *	.
 * @action	reconvert	Reconvert Flavor Asset by ID
 *	.
 * @action	delete	Delete Flavor Asset by ID
 *	.
 * @action	getDownloadUrl	Get download URL for the Flavor Asset
 *	.
 * @action	getFlavorAssetsWithParams	Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *	.
*/
function KalturaFlavorAssetService(client){
	this.init(client);
}
KalturaFlavorAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Add flavor asset.
 * @param	entryId	string		 (optional).
 * @param	flavorAsset	KalturaFlavorAsset		 (optional).
 * @return	KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.add = function(callback, entryId, flavorAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "flavorAsset", toParams(flavorAsset));
	this.client.queueServiceActionCall("flavorAsset", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update flavor asset.
 * @param	id	string		 (optional).
 * @param	flavorAsset	KalturaFlavorAsset		 (optional).
 * @return	KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.update = function(callback, id, flavorAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "flavorAsset", toParams(flavorAsset));
	this.client.queueServiceActionCall("flavorAsset", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update content of flavor asset.
 * @param	id	string		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional).
 * @return	KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("flavorAsset", "setContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Asset by ID
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaFlavorAsset.
 */
KalturaFlavorAssetService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorAsset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Assets for Entry
 *	.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorAsset", "getByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Flavor Assets by filter and pager
 *	.
 * @param	filter	KalturaAssetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFlavorAssetListResponse.
 */
KalturaFlavorAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("flavorAsset", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get web playable Flavor Assets for Entry
 *	.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getWebPlayableByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorAsset", "getWebPlayableByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add and convert new Flavor Asset for Entry with specific Flavor Params
 *	.
 * @param	entryId	string		 (optional).
 * @param	flavorParamsId	int		 (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.convert = function(callback, entryId, flavorParamsId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("flavorAsset", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reconvert Flavor Asset by ID
 *	.
 * @param	id	string		Flavor Asset ID (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.reconvert = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorAsset", "reconvert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Flavor Asset by ID
 *	.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaFlavorAssetService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorAsset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get download URL for the Flavor Asset
 *	.
 * @param	id	string		 (optional).
 * @param	useCdn	bool		 (optional, default: false).
 * @return	string.
 */
KalturaFlavorAssetService.prototype.getDownloadUrl = function(callback, id, useCdn){
	if(!useCdn)
		useCdn = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "useCdn", useCdn);
	this.client.queueServiceActionCall("flavorAsset", "getDownloadUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Asset with the relevant Flavor Params (Flavor Params can exist without Flavor Asset & vice versa)
 *	.
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaFlavorAssetService.prototype.getFlavorAssetsWithParams = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("flavorAsset", "getFlavorAssetsWithParams", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: flavorParams.
 * The available service actions:
 * @action	add	Add new Flavor Params
 *	.
 * @action	get	Get Flavor Params by ID
 *	.
 * @action	update	Update Flavor Params by ID
 *	.
 * @action	delete	Delete Flavor Params by ID
 *	.
 * @action	list	List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *	.
 * @action	getByConversionProfileId	Get Flavor Params by Conversion Profile ID
 *	.
*/
function KalturaFlavorParamsService(client){
	this.init(client);
}
KalturaFlavorParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Flavor Params
 *	.
 * @param	flavorParams	KalturaFlavorParams		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.add = function(callback, flavorParams){
	var kparams = new Object();
	this.client.addParam(kparams, "flavorParams", toParams(flavorParams));
	this.client.queueServiceActionCall("flavorParams", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Params by ID
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorParams", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Flavor Params by ID
 *	.
 * @param	id	int		 (optional).
 * @param	flavorParams	KalturaFlavorParams		 (optional).
 * @return	KalturaFlavorParams.
 */
KalturaFlavorParamsService.prototype.update = function(callback, id, flavorParams){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "flavorParams", toParams(flavorParams));
	this.client.queueServiceActionCall("flavorParams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Flavor Params by ID
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaFlavorParamsService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("flavorParams", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Flavor Params by filter with paging support (By default - all system default params will be listed too)
 *	.
 * @param	filter	KalturaFlavorParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaFlavorParamsListResponse.
 */
KalturaFlavorParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("flavorParams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Flavor Params by Conversion Profile ID
 *	.
 * @param	conversionProfileId	int		 (optional).
 * @return	array.
 */
KalturaFlavorParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("flavorParams", "getByConversionProfileId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: liveStream.
 * The available service actions:
 * @action	add	Adds new live stream entry.
 *	The entry will be queued for provision.
 *	.
 * @action	get	Get live stream entry by ID.
 *	.
 * @action	update	Update live stream entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a live stream entry.
 *	.
 * @action	list	List live stream entries by filter with paging support.
 *	.
 * @action	updateOfflineThumbnailJpeg	Update live stream entry thumbnail using a raw jpeg file
 *	.
 * @action	updateOfflineThumbnailFromUrl	Update entry thumbnail using url
 *	.
*/
function KalturaLiveStreamService(client){
	this.init(client);
}
KalturaLiveStreamService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new live stream entry.
 *	The entry will be queued for provision.
 *	.
 * @param	liveStreamEntry	KalturaLiveStreamAdminEntry		Live stream entry metadata   (optional).
 * @param	sourceType	int		 Live stream source type (optional, enum: KalturaSourceType, default: null).
 * @return	KalturaLiveStreamAdminEntry.
 */
KalturaLiveStreamService.prototype.add = function(callback, liveStreamEntry, sourceType){
	if(!sourceType)
		sourceType = null;
	var kparams = new Object();
	this.client.addParam(kparams, "liveStreamEntry", toParams(liveStreamEntry));
	this.client.addParam(kparams, "sourceType", sourceType);
	this.client.queueServiceActionCall("liveStream", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get live stream entry by ID.
 *	.
 * @param	entryId	string		Live stream entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("liveStream", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live stream entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Live stream entry id to update (optional).
 * @param	liveStreamEntry	KalturaLiveStreamAdminEntry		Live stream entry metadata to update (optional).
 * @return	KalturaLiveStreamAdminEntry.
 */
KalturaLiveStreamService.prototype.update = function(callback, entryId, liveStreamEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "liveStreamEntry", toParams(liveStreamEntry));
	this.client.queueServiceActionCall("liveStream", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a live stream entry.
 *	.
 * @param	entryId	string		Live stream entry id to delete (optional).
 * @return	.
 */
KalturaLiveStreamService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("liveStream", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List live stream entries by filter with paging support.
 *	.
 * @param	filter	KalturaLiveStreamEntryFilter		live stream entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaLiveStreamListResponse.
 */
KalturaLiveStreamService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("liveStream", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update live stream entry thumbnail using a raw jpeg file
 *	.
 * @param	entryId	string		live stream entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("liveStream", "updateOfflineThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url
 *	.
 * @param	entryId	string		live stream entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaLiveStreamEntry.
 */
KalturaLiveStreamService.prototype.updateOfflineThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("liveStream", "updateOfflineThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: media.
 * The available service actions:
 * @action	add	Add entry.
 * @action	addContent	Add content to entry.
 * @action	addFromUrl	Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion.
 *	DEPRECATED - use media.add instead.
 * @action	addFromSearchResult	Adds new media entry by importing the media file from a search provider. 
 *	This action should be used with the search service result.
 *	DEPRECATED - use media.add instead.
 * @action	addFromUploadedFile	Add new entry after the specific media file was uploaded and the upload token id exists
 *	DEPRECATED - use media.add instead.
 * @action	addFromRecordedWebcam	Add new entry after the file was recored on the server and the token id exists
 *	DEPRECATED - use media.add instead.
 * @action	addFromEntry	Copy entry into new entry
 *	DEPRECATED - use media.add instead.
 * @action	addFromFlavorAsset	Copy flavor asset into new entry
 *	DEPRECATED - use media.add instead.
 * @action	convert	Convert entry
 *	.
 * @action	get	Get media entry by ID.
 *	.
 * @action	update	Update media entry. Only the properties that were set will be updated.
 *	.
 * @action	updateContent	Replace media content of the entry
 *	.
 * @action	delete	Delete a media entry.
 *	.
 * @action	approveReplace	Approves media replacement
 *	.
 * @action	cancelReplace	Cancels media replacement
 *	.
 * @action	list	List media entries by filter with paging support.
 *	.
 * @action	count	Count media entries by filter.
 *	.
 * @action	upload	Upload a media file to Kaltura, then the file can be used to create a media entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action	updateThumbnail	Update media entry thumbnail by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	DEPRECATED.
 * @action	updateThumbnailFromSourceEntry	Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	DEPRECATED.
 * @action	updateThumbnailJpeg	Update media entry thumbnail using a raw jpeg file
 *	DEPRECATED.
 * @action	updateThumbnailFromUrl	Update entry thumbnail using url
 *	DEPRECATED.
 * @action	requestConversion	Request a new conversion job, this can be used to convert the media entry to a different format
 *	.
 * @action	flag	Flag inappropriate media entry for moderation
 *	.
 * @action	reject	Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @action	approve	Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @action	listFlags	List all pending flags for the media entry.
 * @action	anonymousRank	Anonymously rank a media entry, no validation is done on duplicate rankings
 *	.
*/
function KalturaMediaService(client){
	this.init(client);
}
KalturaMediaService.inheritsFrom (KalturaServiceBase);
/**
 * Add entry.
 * @param	entry	KalturaMediaEntry		 (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.add = function(callback, entry){
	var kparams = new Object();
	this.client.addParam(kparams, "entry", toParams(entry));
	this.client.queueServiceActionCall("media", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add content to entry.
 * @param	entryId	string		 (optional).
 * @param	resource	KalturaResource		 (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addContent = function(callback, entryId, resource){
	if(!resource)
		resource = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (resource != null)
		this.client.addParam(kparams, "resource", toParams(resource));
	this.client.queueServiceActionCall("media", "addContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing an HTTP or FTP URL.
 *	The entry will be queued for import and then for conversion.
 *	DEPRECATED - use media.add instead.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata   (optional).
 * @param	url	string		An HTTP or FTP URL (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUrl = function(callback, mediaEntry, url){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("media", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds new media entry by importing the media file from a search provider. 
 *	This action should be used with the search service result.
 *	DEPRECATED - use media.add instead.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @param	searchResult	KalturaSearchResult		Result object from search service (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromSearchResult = function(callback, mediaEntry, searchResult){
	if(!mediaEntry)
		mediaEntry = null;
	if(!searchResult)
		searchResult = null;
	var kparams = new Object();
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	if (searchResult != null)
		this.client.addParam(kparams, "searchResult", toParams(searchResult));
	this.client.queueServiceActionCall("media", "addFromSearchResult", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new entry after the specific media file was uploaded and the upload token id exists
 *	DEPRECATED - use media.add instead.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromUploadedFile = function(callback, mediaEntry, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("media", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add new entry after the file was recored on the server and the token id exists
 *	DEPRECATED - use media.add instead.
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional).
 * @param	webcamTokenId	string		Token id for the recored webcam file  (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromRecordedWebcam = function(callback, mediaEntry, webcamTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "webcamTokenId", webcamTokenId);
	this.client.queueServiceActionCall("media", "addFromRecordedWebcam", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy entry into new entry
 *	DEPRECATED - use media.add instead.
 * @param	sourceEntryId	string		Media entry id to copy from (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromEntry = function(callback, sourceEntryId, mediaEntry, sourceFlavorParamsId){
	if(!mediaEntry)
		mediaEntry = null;
	if(!sourceFlavorParamsId)
		sourceFlavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
	this.client.queueServiceActionCall("media", "addFromEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *	DEPRECATED - use media.add instead.
 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, mediaEntry){
	if(!mediaEntry)
		mediaEntry = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
	if (mediaEntry != null)
		this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.queueServiceActionCall("media", "addFromFlavorAsset", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Convert entry
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	conversionProfileId	int		 (optional, default: null).
 * @param	dynamicConversionAttributes	array		 (optional, default: null).
 * @return	int.
 */
KalturaMediaService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId)
		conversionProfileId = null;
	if(!dynamicConversionAttributes)
		dynamicConversionAttributes = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if(dynamicConversionAttributes != null)
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, "dynamicConversionAttributes:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("media", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get media entry by ID.
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("media", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Media entry id to update (optional).
 * @param	mediaEntry	KalturaMediaEntry		Media entry metadata to update (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.update = function(callback, entryId, mediaEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mediaEntry", toParams(mediaEntry));
	this.client.queueServiceActionCall("media", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Replace media content of the entry
 *	.
 * @param	entryId	string		Media entry id to update (optional).
 * @param	resource	KalturaResource		Resource to be used to replace entry media content (optional).
 * @param	conversionProfileId	int		The conversion profile id to be used on the entry (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateContent = function(callback, entryId, resource, conversionProfileId){
	if(!conversionProfileId)
		conversionProfileId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "resource", toParams(resource));
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("media", "updateContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a media entry.
 *	.
 * @param	entryId	string		Media entry id to delete (optional).
 * @return	.
 */
KalturaMediaService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approves media replacement
 *	.
 * @param	entryId	string		Media entry id to replace (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.approveReplace = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "approveReplace", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Cancels media replacement
 *	.
 * @param	entryId	string		Media entry id to cancel (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.cancelReplace = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "cancelReplace", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List media entries by filter with paging support.
 *	.
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaMediaListResponse.
 */
KalturaMediaService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("media", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Count media entries by filter.
 *	.
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @return	int.
 */
KalturaMediaService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("media", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a media file to Kaltura, then the file can be used to create a media entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaMediaService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("media", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	DEPRECATED.
 * @param	entryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnail = function(callback, entryId, timeOffset, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("media", "updateThumbnail", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail from a different entry by a specified time offset (In seconds)
 *	If flavor params id not specified, source flavor will be used by default
 *	DEPRECATED.
 * @param	entryId	string		Media entry id (optional).
 * @param	sourceEntryId	string		Media entry id (optional).
 * @param	timeOffset	int		Time offset (in seconds) (optional).
 * @param	flavorParamsId	int		The flavor params id to be used (optional, default: null).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromSourceEntry = function(callback, entryId, sourceEntryId, timeOffset, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	this.client.addParam(kparams, "timeOffset", timeOffset);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("media", "updateThumbnailFromSourceEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update media entry thumbnail using a raw jpeg file
 *	DEPRECATED.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileData	file		Jpeg file data (optional).
 * @return	KalturaMediaEntry.
 */
KalturaMediaService.prototype.updateThumbnailJpeg = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("media", "updateThumbnailJpeg", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update entry thumbnail using url
 *	DEPRECATED.
 * @param	entryId	string		Media entry id (optional).
 * @param	url	string		file url (optional).
 * @return	KalturaBaseEntry.
 */
KalturaMediaService.prototype.updateThumbnailFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("media", "updateThumbnailFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Request a new conversion job, this can be used to convert the media entry to a different format
 *	.
 * @param	entryId	string		Media entry id (optional).
 * @param	fileFormat	string		Format to convert (optional).
 * @return	int.
 */
KalturaMediaService.prototype.requestConversion = function(callback, entryId, fileFormat){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "fileFormat", fileFormat);
	this.client.queueServiceActionCall("media", "requestConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Flag inappropriate media entry for moderation
 *	.
 * @param	moderationFlag	KalturaModerationFlag		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.flag = function(callback, moderationFlag){
	var kparams = new Object();
	this.client.addParam(kparams, "moderationFlag", toParams(moderationFlag));
	this.client.queueServiceActionCall("media", "flag", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reject the media entry and mark the pending flags (if any) as moderated (this will make the entry non playable)
 *	.
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.reject = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "reject", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Approve the media entry and mark the pending flags (if any) as moderated (this will make the entry playable) 
 *	.
 * @param	entryId	string		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.approve = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("media", "approve", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all pending flags for the media entry.
 * @param	entryId	string		 (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaModerationFlagListResponse.
 */
KalturaMediaService.prototype.listFlags = function(callback, entryId, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("media", "listFlags", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank a media entry, no validation is done on duplicate rankings
 *	.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaMediaService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("media", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: mixing.
 * The available service actions:
 * @action	add	Adds a new mix.
 *	If the dataContent is null, a default timeline will be created.
 *	.
 * @action	get	Get mix entry by id.
 *	.
 * @action	update	Update mix entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a mix entry..
 * @action	list	List entries by filter with paging support.
 *	Return parameter is an array of mix entries.
 *	.
 * @action	count	Count mix entries by filter.
 *	.
 * @action	clone	Clones an existing mix..
 * @action	appendMediaEntry	Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 *	.
 * @action	requestFlattening	Request a new flattening job, flattening is used to convert a video mix to a video file. 
 *	.
 * @action	getMixesByMediaId	Get the mixes in which the media entry is included.
 * @action	getReadyMediaEntries	Get all ready media entries that exist in the given mix id.
 * @action	anonymousRank	Anonymously rank a mix entry, no validation is done on duplicate rankings
 *	.
*/
function KalturaMixingService(client){
	this.init(client);
}
KalturaMixingService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a new mix.
 *	If the dataContent is null, a default timeline will be created.
 *	.
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.add = function(callback, mixEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "mixEntry", toParams(mixEntry));
	this.client.queueServiceActionCall("mixing", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get mix entry by id.
 *	.
 * @param	entryId	string		Mix entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update mix entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Mix entry id to update (optional).
 * @param	mixEntry	KalturaMixEntry		Mix entry metadata to update (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.update = function(callback, entryId, mixEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "mixEntry", toParams(mixEntry));
	this.client.queueServiceActionCall("mixing", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a mix entry..
 * @param	entryId	string		Mix entry id to delete (optional).
 * @return	.
 */
KalturaMixingService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("mixing", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List entries by filter with paging support.
 *	Return parameter is an array of mix entries.
 *	.
 * @param	filter	KalturaMixEntryFilter		Mix entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaMixListResponse.
 */
KalturaMixingService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("mixing", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Count mix entries by filter.
 *	.
 * @param	filter	KalturaMediaEntryFilter		Media entry filter (optional, default: null).
 * @return	int.
 */
KalturaMixingService.prototype.count = function(callback, filter){
	if(!filter)
		filter = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	this.client.queueServiceActionCall("mixing", "count", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clones an existing mix..
 * @param	entryId	string		Mix entry id to clone (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.cloneAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("mixing", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Appends a media entry to a the end of the mix timeline, this will save the mix timeline as a new version.
 *	.
 * @param	mixEntryId	string		Mix entry to append to its timeline (optional).
 * @param	mediaEntryId	string		Media entry to append to the timeline (optional).
 * @return	KalturaMixEntry.
 */
KalturaMixingService.prototype.appendMediaEntry = function(callback, mixEntryId, mediaEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "mixEntryId", mixEntryId);
	this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
	this.client.queueServiceActionCall("mixing", "appendMediaEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Request a new flattening job, flattening is used to convert a video mix to a video file. 
 *	.
 * @param	entryId	string		Mix entry id (optional).
 * @param	fileFormat	string		Format to convert (optional).
 * @param	version	int		Version to flatten (If not set, latest will be used) (optional, default: -1).
 * @return	int.
 */
KalturaMixingService.prototype.requestFlattening = function(callback, entryId, fileFormat, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "fileFormat", fileFormat);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "requestFlattening", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get the mixes in which the media entry is included.
 * @param	mediaEntryId	string		 (optional).
 * @return	array.
 */
KalturaMixingService.prototype.getMixesByMediaId = function(callback, mediaEntryId){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaEntryId", mediaEntryId);
	this.client.queueServiceActionCall("mixing", "getMixesByMediaId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get all ready media entries that exist in the given mix id.
 * @param	mixId	string		 (optional).
 * @param	version	int		Desired version to get the data from (optional, default: -1).
 * @return	array.
 */
KalturaMixingService.prototype.getReadyMediaEntries = function(callback, mixId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "mixId", mixId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("mixing", "getReadyMediaEntries", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Anonymously rank a mix entry, no validation is done on duplicate rankings
 *	.
 * @param	entryId	string		 (optional).
 * @param	rank	int		 (optional).
 * @return	.
 */
KalturaMixingService.prototype.anonymousRank = function(callback, entryId, rank){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "rank", rank);
	this.client.queueServiceActionCall("mixing", "anonymousRank", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: notification.
 * The available service actions:
 * @action	getClientNotification	Return the notifications for a specific entry id and type
 *	.
*/
function KalturaNotificationService(client){
	this.init(client);
}
KalturaNotificationService.inheritsFrom (KalturaServiceBase);
/**
 * Return the notifications for a specific entry id and type
 *	.
 * @param	entryId	string		 (optional).
 * @param	type	int		 (optional, enum: KalturaNotificationType).
 * @return	KalturaClientNotification.
 */
KalturaNotificationService.prototype.getClientNotification = function(callback, entryId, type){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "type", type);
	this.client.queueServiceActionCall("notification", "getClientNotification", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: partner.
 * The available service actions:
 * @action	register	Register to Kaltura's partner program
 *	.
 * @action	update	Update details and settings of you existing partner
 *	.
 * @action	getSecrets	Retrieve partner secret and admin secret
 *	.
 * @action	getInfo	Retrieve all info about partner
 *	This service gets no parameters, and is using the KS to know which partnerId info should be returned
 *	.
 * @action	getUsage	Get usage statistics for a partner
 *	Calculation is done according to partner's package
 *	Additional data returned is a graph points of streaming usage in a timeframe
 *	The resolution can be "days" or "months"
 *	.
*/
function KalturaPartnerService(client){
	this.init(client);
}
KalturaPartnerService.inheritsFrom (KalturaServiceBase);
/**
 * Register to Kaltura's partner program
 *	.
 * @param	partner	KalturaPartner		 (optional).
 * @param	cmsPassword	string		 (optional).
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.register = function(callback, partner, cmsPassword){
	if(!cmsPassword)
		cmsPassword = "";
	var kparams = new Object();
	this.client.addParam(kparams, "partner", toParams(partner));
	this.client.addParam(kparams, "cmsPassword", cmsPassword);
	this.client.queueServiceActionCall("partner", "register", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update details and settings of you existing partner
 *	.
 * @param	partner	KalturaPartner		 (optional).
 * @param	allowEmpty	bool		 (optional, default: false).
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.update = function(callback, partner, allowEmpty){
	if(!allowEmpty)
		allowEmpty = false;
	var kparams = new Object();
	this.client.addParam(kparams, "partner", toParams(partner));
	this.client.addParam(kparams, "allowEmpty", allowEmpty);
	this.client.queueServiceActionCall("partner", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve partner secret and admin secret
 *	.
 * @param	partnerId	int		 (optional).
 * @param	adminEmail	string		 (optional).
 * @param	cmsPassword	string		 (optional).
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.getSecrets = function(callback, partnerId, adminEmail, cmsPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "adminEmail", adminEmail);
	this.client.addParam(kparams, "cmsPassword", cmsPassword);
	this.client.queueServiceActionCall("partner", "getSecrets", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve all info about partner
 *	This service gets no parameters, and is using the KS to know which partnerId info should be returned
 *	.
 * @return	KalturaPartner.
 */
KalturaPartnerService.prototype.getInfo = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("partner", "getInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get usage statistics for a partner
 *	Calculation is done according to partner's package
 *	Additional data returned is a graph points of streaming usage in a timeframe
 *	The resolution can be "days" or "months"
 *	.
 * @param	year	int		 (optional).
 * @param	month	int		 (optional, default: 1).
 * @param	resolution	string		accepted values are "days" or "months" (optional, default: days).
 * @return	KalturaPartnerUsage.
 */
KalturaPartnerService.prototype.getUsage = function(callback, year, month, resolution){
	if(!year)
		year = "";
	if(!month)
		month = 1;
	if(!resolution)
		resolution = "days";
	var kparams = new Object();
	this.client.addParam(kparams, "year", year);
	this.client.addParam(kparams, "month", month);
	this.client.addParam(kparams, "resolution", resolution);
	this.client.queueServiceActionCall("partner", "getUsage", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: permissionItem.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaPermissionItem object
 *	.
 * @action	get	Retrieve a KalturaPermissionItem object by ID
 *	.
 * @action	update	Update an existing KalturaPermissionItem object
 *	.
 * @action	delete	Mark the KalturaPermissionItem object as deleted
 *	.
 * @action	list	List KalturaPermissionItem objects
 *	.
*/
function KalturaPermissionItemService(client){
	this.init(client);
}
KalturaPermissionItemService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaPermissionItem object
 *	.
 * @param	permissionItem	KalturaPermissionItem		 (optional).
 * @return	KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.add = function(callback, permissionItem){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItem", toParams(permissionItem));
	this.client.queueServiceActionCall("permissionItem", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaPermissionItem object by ID
 *	.
 * @param	permissionItemId	int		 (optional).
 * @return	KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.get = function(callback, permissionItemId){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItemId", permissionItemId);
	this.client.queueServiceActionCall("permissionItem", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaPermissionItem object
 *	.
 * @param	permissionItemId	int		 (optional).
 * @param	permissionItem	KalturaPermissionItem		Id (optional).
 * @return	KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.update = function(callback, permissionItemId, permissionItem){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItemId", permissionItemId);
	this.client.addParam(kparams, "permissionItem", toParams(permissionItem));
	this.client.queueServiceActionCall("permissionItem", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaPermissionItem object as deleted
 *	.
 * @param	permissionItemId	int		 (optional).
 * @return	KalturaPermissionItem.
 */
KalturaPermissionItemService.prototype.deleteAction = function(callback, permissionItemId){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionItemId", permissionItemId);
	this.client.queueServiceActionCall("permissionItem", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaPermissionItem objects
 *	.
 * @param	filter	KalturaPermissionItemFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPermissionItemListResponse.
 */
KalturaPermissionItemService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("permissionItem", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: permission.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaPermission object
 *	.
 * @action	get	Retrieve a KalturaPermission object by ID
 *	.
 * @action	update	Update an existing KalturaPermission object
 *	.
 * @action	delete	Mark the KalturaPermission object as deleted
 *	.
 * @action	list	List KalturaPermission objects
 *	.
 * @action	getCurrentPermissions	Return a list of current sessions's allowed permission names
 *	.
*/
function KalturaPermissionService(client){
	this.init(client);
}
KalturaPermissionService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaPermission object
 *	.
 * @param	permission	KalturaPermission		 (optional).
 * @return	KalturaPermission.
 */
KalturaPermissionService.prototype.add = function(callback, permission){
	var kparams = new Object();
	this.client.addParam(kparams, "permission", toParams(permission));
	this.client.queueServiceActionCall("permission", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaPermission object by ID
 *	.
 * @param	permissionName	string		 (optional).
 * @return	KalturaPermission.
 */
KalturaPermissionService.prototype.get = function(callback, permissionName){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionName", permissionName);
	this.client.queueServiceActionCall("permission", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaPermission object
 *	.
 * @param	permissionName	string		 (optional).
 * @param	permission	KalturaPermission		Name (optional).
 * @return	KalturaPermission.
 */
KalturaPermissionService.prototype.update = function(callback, permissionName, permission){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionName", permissionName);
	this.client.addParam(kparams, "permission", toParams(permission));
	this.client.queueServiceActionCall("permission", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaPermission object as deleted
 *	.
 * @param	permissionName	string		 (optional).
 * @return	KalturaPermission.
 */
KalturaPermissionService.prototype.deleteAction = function(callback, permissionName){
	var kparams = new Object();
	this.client.addParam(kparams, "permissionName", permissionName);
	this.client.queueServiceActionCall("permission", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaPermission objects
 *	.
 * @param	filter	KalturaPermissionFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPermissionListResponse.
 */
KalturaPermissionService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("permission", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Return a list of current sessions's allowed permission names
 *	.
 * @return	string.
 */
KalturaPermissionService.prototype.getCurrentPermissions = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("permission", "getCurrentPermissions", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: playlist.
 * The available service actions:
 * @action	add	Add new playlist
 *	Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *	.
 * @action	get	Retrieve a playlist
 *	.
 * @action	update	Update existing playlist
 *	Note - you cannot change playlist type. updated playlist must be of the same type.
 *	.
 * @action	delete	Delete existing playlist
 *	.
 * @action	clone	Clone an existing playlist
 *	.
 * @action	list	List available playlists
 *	.
 * @action	execute	Retrieve playlist for playing purpose
 *	.
 * @action	executeFromContent	Retrieve playlist for playing purpose, based on content
 *	.
 * @action	executeFromFilters	Revrieve playlist for playing purpose, based on media entry filters
 *	.
 * @action	getStatsFromContent	Retrieve playlist statistics
 *	.
*/
function KalturaPlaylistService(client){
	this.init(client);
}
KalturaPlaylistService.inheritsFrom (KalturaServiceBase);
/**
 * Add new playlist
 *	Note that all entries used in a playlist will become public and may appear in KalturaNetwork
 *	.
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		 (optional, default: false).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.add = function(callback, playlist, updateStats){
	if(!updateStats)
		updateStats = false;
	var kparams = new Object();
	this.client.addParam(kparams, "playlist", toParams(playlist));
	this.client.addParam(kparams, "updateStats", updateStats);
	this.client.queueServiceActionCall("playlist", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a playlist
 *	.
 * @param	id	string		 (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.get = function(callback, id, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("playlist", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing playlist
 *	Note - you cannot change playlist type. updated playlist must be of the same type.
 *	.
 * @param	id	string		 (optional).
 * @param	playlist	KalturaPlaylist		 (optional).
 * @param	updateStats	bool		  (optional, default: false).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.update = function(callback, id, playlist, updateStats){
	if(!updateStats)
		updateStats = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "playlist", toParams(playlist));
	this.client.addParam(kparams, "updateStats", updateStats);
	this.client.queueServiceActionCall("playlist", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete existing playlist
 *	.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaPlaylistService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("playlist", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone an existing playlist
 *	.
 * @param	id	string		 Id of the playlist to clone (optional).
 * @param	newPlaylist	KalturaPlaylist		Parameters defined here will override the ones in the cloned playlist (optional, default: null).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.cloneAction = function(callback, id, newPlaylist){
	if(!newPlaylist)
		newPlaylist = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	if (newPlaylist != null)
		this.client.addParam(kparams, "newPlaylist", toParams(newPlaylist));
	this.client.queueServiceActionCall("playlist", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List available playlists
 *	.
 * @param	filter	KalturaPlaylistFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaPlaylistListResponse.
 */
KalturaPlaylistService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("playlist", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose
 *	.
 * @param	id	string		 (optional).
 * @param	detailed	string		 (optional).
 * @return	array.
 */
KalturaPlaylistService.prototype.execute = function(callback, id, detailed){
	if(!detailed)
		detailed = "";
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "detailed", detailed);
	this.client.queueServiceActionCall("playlist", "execute", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist for playing purpose, based on content
 *	.
 * @param	playlistType	int		  (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
 * @param	detailed	string		 (optional).
 * @return	array.
 */
KalturaPlaylistService.prototype.executeFromContent = function(callback, playlistType, playlistContent, detailed){
	if(!detailed)
		detailed = "";
	var kparams = new Object();
	this.client.addParam(kparams, "playlistType", playlistType);
	this.client.addParam(kparams, "playlistContent", playlistContent);
	this.client.addParam(kparams, "detailed", detailed);
	this.client.queueServiceActionCall("playlist", "executeFromContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Revrieve playlist for playing purpose, based on media entry filters
 *	.
 * @param	filters	array		 (optional).
 * @param	totalResults	int		 (optional).
 * @param	detailed	string		 (optional).
 * @return	array.
 */
KalturaPlaylistService.prototype.executeFromFilters = function(callback, filters, totalResults, detailed){
	if(!detailed)
		detailed = "";
	var kparams = new Object();
for(var index in filters)
{
	var obj = filters[index];
	this.client.addParam(kparams, "filters:" + index, toParams(obj));
}
	this.client.addParam(kparams, "totalResults", totalResults);
	this.client.addParam(kparams, "detailed", detailed);
	this.client.queueServiceActionCall("playlist", "executeFromFilters", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve playlist statistics
 *	.
 * @param	playlistType	int		  (optional, enum: KalturaPlaylistType).
 * @param	playlistContent	string		 (optional).
 * @return	KalturaPlaylist.
 */
KalturaPlaylistService.prototype.getStatsFromContent = function(callback, playlistType, playlistContent){
	var kparams = new Object();
	this.client.addParam(kparams, "playlistType", playlistType);
	this.client.addParam(kparams, "playlistContent", playlistContent);
	this.client.queueServiceActionCall("playlist", "getStatsFromContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: report.
 * The available service actions:
 * @action	getGraphs	report getGraphs action allows to get a graph data for a specific report. 
 *	.
 * @action	getTotal	report getTotal action allows to get a graph data for a specific report. 
 *	.
 * @action	getTable	report getTable action allows to get a graph data for a specific report. 
 *	.
 * @action	getUrlForReportAsCsv	will create a Csv file for the given report and return the URL to access it
 *	.
*/
function KalturaReportService(client){
	this.init(client);
}
KalturaReportService.inheritsFrom (KalturaServiceBase);
/**
 * report getGraphs action allows to get a graph data for a specific report. 
 *	.
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string		 (optional, default: null).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return	array.
 */
KalturaReportService.prototype.getGraphs = function(callback, reportType, reportInputFilter, dimension, objectIds){
	if(!dimension)
		dimension = null;
	if(!objectIds)
		objectIds = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "dimension", dimension);
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getGraphs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getTotal action allows to get a graph data for a specific report. 
 *	.
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return	KalturaReportTotal.
 */
KalturaReportService.prototype.getTotal = function(callback, reportType, reportInputFilter, objectIds){
	if(!objectIds)
		objectIds = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getTotal", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * report getTable action allows to get a graph data for a specific report. 
 *	.
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	pager	KalturaFilterPager		 (optional).
 * @param	order	string		 (optional, default: null).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return	KalturaReportTable.
 */
KalturaReportService.prototype.getTable = function(callback, reportType, reportInputFilter, pager, order, objectIds){
	if(!order)
		order = null;
	if(!objectIds)
		objectIds = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "pager", toParams(pager));
	this.client.addParam(kparams, "order", order);
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getTable", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * will create a Csv file for the given report and return the URL to access it
 *	.
 * @param	reportTitle	string		The title of the report to display at top of CSV  (optional).
 * @param	reportText	string		The text of the filter of the report (optional).
 * @param	headers	string		The headers of the columns - a map between the enumerations on the server side and the their display text   (optional).
 * @param	reportType	int		  (optional, enum: KalturaReportType).
 * @param	reportInputFilter	KalturaReportInputFilter		 (optional).
 * @param	dimension	string			   (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @param	order	string		 (optional, default: null).
 * @param	objectIds	string		- one ID or more (separated by ',') of specific objects to query (optional, default: null).
 * @return	string.
 */
KalturaReportService.prototype.getUrlForReportAsCsv = function(callback, reportTitle, reportText, headers, reportType, reportInputFilter, dimension, pager, order, objectIds){
	if(!dimension)
		dimension = null;
	if(!pager)
		pager = null;
	if(!order)
		order = null;
	if(!objectIds)
		objectIds = null;
	var kparams = new Object();
	this.client.addParam(kparams, "reportTitle", reportTitle);
	this.client.addParam(kparams, "reportText", reportText);
	this.client.addParam(kparams, "headers", headers);
	this.client.addParam(kparams, "reportType", reportType);
	this.client.addParam(kparams, "reportInputFilter", toParams(reportInputFilter));
	this.client.addParam(kparams, "dimension", dimension);
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.addParam(kparams, "order", order);
	this.client.addParam(kparams, "objectIds", objectIds);
	this.client.queueServiceActionCall("report", "getUrlForReportAsCsv", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: search.
 * The available service actions:
 * @action	search	Search for media in one of the supported media providers
 *	.
 * @action	getMediaInfo	Retrieve extra information about media found in search action
 *	Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 *	.
 * @action	searchUrl	Search for media given a specific URL
 *	Kaltura supports a searchURL action on some of the media providers.
 *	This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *	.
 * @action	externalLogin	.
*/
function KalturaSearchService(client){
	this.init(client);
}
KalturaSearchService.inheritsFrom (KalturaServiceBase);
/**
 * Search for media in one of the supported media providers
 *	.
 * @param	search	KalturaSearch		A KalturaSearch object contains the search keywords, media provider and media type (optional).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaSearchResultResponse.
 */
KalturaSearchService.prototype.search = function(callback, search, pager){
	if(!pager)
		pager = null;
	var kparams = new Object();
	this.client.addParam(kparams, "search", toParams(search));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("search", "search", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve extra information about media found in search action
 *	Some providers return only part of the fields needed to create entry from, use this action to get the rest of the fields.
 *	.
 * @param	searchResult	KalturaSearchResult		KalturaSearchResult object extends KalturaSearch and has all fields required for media:add (optional).
 * @return	KalturaSearchResult.
 */
KalturaSearchService.prototype.getMediaInfo = function(callback, searchResult){
	var kparams = new Object();
	this.client.addParam(kparams, "searchResult", toParams(searchResult));
	this.client.queueServiceActionCall("search", "getMediaInfo", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Search for media given a specific URL
 *	Kaltura supports a searchURL action on some of the media providers.
 *	This action will return a KalturaSearchResult object based on a given URL (assuming the media provider is supported)
 *	.
 * @param	mediaType	int		 (optional, enum: KalturaMediaType).
 * @param	url	string		 (optional).
 * @return	KalturaSearchResult.
 */
KalturaSearchService.prototype.searchUrl = function(callback, mediaType, url){
	var kparams = new Object();
	this.client.addParam(kparams, "mediaType", mediaType);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("search", "searchUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	searchSource	int		 (optional, enum: KalturaSearchProviderType).
 * @param	userName	string		 (optional).
 * @param	password	string		 (optional).
 * @return	KalturaSearchAuthData.
 */
KalturaSearchService.prototype.externalLogin = function(callback, searchSource, userName, password){
	var kparams = new Object();
	this.client.addParam(kparams, "searchSource", searchSource);
	this.client.addParam(kparams, "userName", userName);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("search", "externalLogin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: session.
 * The available service actions:
 * @action	start	Start a session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @action	end	End a session with the Kaltura server, making the current KS invalid.
 *	.
 * @action	impersonate	Start an impersonated session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @action	startWidgetSession	Start a session for Kaltura's flash widgets
 *	.
*/
function KalturaSessionService(client){
	this.init(client);
}
KalturaSessionService.inheritsFrom (KalturaServiceBase);
/**
 * Start a session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional).
 * @param	userId	string		 (optional).
 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param	partnerId	int		 (optional, default: null).
 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400).
 * @param	privileges	string		 (optional, default: null).
 * @return	string.
 */
KalturaSessionService.prototype.start = function(callback, secret, userId, type, partnerId, expiry, privileges){
	if(!userId)
		userId = "";
	if(!type)
		type = 0;
	if(!partnerId)
		partnerId = null;
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = null;
	var kparams = new Object();
	this.client.addParam(kparams, "secret", secret);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("session", "start", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * End a session with the Kaltura server, making the current KS invalid.
 *	.
 * @return	.
 */
KalturaSessionService.prototype.end = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("session", "end", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start an impersonated session with Kaltura's server.
 *	The result KS is the session key that you should pass to all services that requires a ticket.
 *	.
 * @param	secret	string		Remember to provide the correct secret according to the sessionType you want (optional).
 * @param	impersonatedPartnerId	int		 (optional).
 * @param	userId	string		 (optional).
 * @param	type	int		Regular session or Admin session (optional, enum: KalturaSessionType).
 * @param	partnerId	int		 (optional, default: null).
 * @param	expiry	int		KS expiry time in seconds (optional, default: 86400).
 * @param	privileges	string		 (optional, default: null).
 * @return	string.
 */
KalturaSessionService.prototype.impersonate = function(callback, secret, impersonatedPartnerId, userId, type, partnerId, expiry, privileges){
	if(!userId)
		userId = "";
	if(!type)
		type = 0;
	if(!partnerId)
		partnerId = null;
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = null;
	var kparams = new Object();
	this.client.addParam(kparams, "secret", secret);
	this.client.addParam(kparams, "impersonatedPartnerId", impersonatedPartnerId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "type", type);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("session", "impersonate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Start a session for Kaltura's flash widgets
 *	.
 * @param	widgetId	string		 (optional).
 * @param	expiry	int		 (optional, default: 86400).
 * @return	KalturaStartWidgetSessionResponse.
 */
KalturaSessionService.prototype.startWidgetSession = function(callback, widgetId, expiry){
	if(!expiry)
		expiry = 86400;
	var kparams = new Object();
	this.client.addParam(kparams, "widgetId", widgetId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.queueServiceActionCall("session", "startWidgetSession", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: stats.
 * The available service actions:
 * @action	collect	Will write to the event log a single line representing the event
 *	KalturaStatsEvent $event
 *	.
 * @action	kmcCollect	Will collect the kmcEvent sent form the KMC client
 *	.
 * @action	reportKceError	.
*/
function KalturaStatsService(client){
	this.init(client);
}
KalturaStatsService.inheritsFrom (KalturaServiceBase);
/**
 * Will write to the event log a single line representing the event
 *	KalturaStatsEvent $event
 *	.
 * @param	event	KalturaStatsEvent		 (optional).
 * @return	.
 */
KalturaStatsService.prototype.collect = function(callback, event){
	var kparams = new Object();
	this.client.addParam(kparams, "event", toParams(event));
	this.client.queueServiceActionCall("stats", "collect", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Will collect the kmcEvent sent form the KMC client
 *	.
 * @param	kmcEvent	KalturaStatsKmcEvent		 (optional).
 * @return	.
 */
KalturaStatsService.prototype.kmcCollect = function(callback, kmcEvent){
	var kparams = new Object();
	this.client.addParam(kparams, "kmcEvent", toParams(kmcEvent));
	this.client.queueServiceActionCall("stats", "kmcCollect", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	kalturaCEError	KalturaCEError		 (optional).
 * @return	KalturaCEError.
 */
KalturaStatsService.prototype.reportKceError = function(callback, kalturaCEError){
	var kparams = new Object();
	this.client.addParam(kparams, "kalturaCEError", toParams(kalturaCEError));
	this.client.queueServiceActionCall("stats", "reportKceError", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: storageProfile.
 * The available service actions:
 * @action	list	.
 * @action	updateStatus	.
 * @action	get	Get storage profile by id
 *	.
 * @action	update	Update storage profile by id 
 *	.
 * @action	add	Adds a storage profile to the Kaltura DB..
*/
function KalturaStorageProfileService(client){
	this.init(client);
}
KalturaStorageProfileService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	filter	KalturaStorageProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaStorageProfileListResponse.
 */
KalturaStorageProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("storageProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	storageId	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaStorageProfileStatus).
 * @return	.
 */
KalturaStorageProfileService.prototype.updateStatus = function(callback, storageId, status){
	var kparams = new Object();
	this.client.addParam(kparams, "storageId", storageId);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("storageProfile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get storage profile by id
 *	.
 * @param	storageProfileId	int		 (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.get = function(callback, storageProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.queueServiceActionCall("storageProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update storage profile by id 
 *	.
 * @param	storageProfileId	int		 (optional).
 * @param	storageProfile	KalturaStorageProfile		Id (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.update = function(callback, storageProfileId, storageProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfileId", storageProfileId);
	this.client.addParam(kparams, "storageProfile", toParams(storageProfile));
	this.client.queueServiceActionCall("storageProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Adds a storage profile to the Kaltura DB..
 * @param	storageProfile	KalturaStorageProfile		 (optional).
 * @return	KalturaStorageProfile.
 */
KalturaStorageProfileService.prototype.add = function(callback, storageProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "storageProfile", toParams(storageProfile));
	this.client.queueServiceActionCall("storageProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: syndicationFeed.
 * The available service actions:
 * @action	add	Add new Syndication Feed
 *	.
 * @action	get	Get Syndication Feed by ID
 *	.
 * @action	update	Update Syndication Feed by ID
 *	.
 * @action	delete	Delete Syndication Feed by ID
 *	.
 * @action	list	List Syndication Feeds by filter with paging support
 *	.
 * @action	getEntryCount	get entry count for a syndication feed.
 * @action	requestConversion	request conversion for all entries that doesnt have the required flavor param
 *	returns a comma-separated ids of conversion jobs
 *	@action requestConversion
 *	@param string $feedId
 *	@return string.
*/
function KalturaSyndicationFeedService(client){
	this.init(client);
}
KalturaSyndicationFeedService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Syndication Feed
 *	.
 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.add = function(callback, syndicationFeed){
	var kparams = new Object();
	this.client.addParam(kparams, "syndicationFeed", toParams(syndicationFeed));
	this.client.queueServiceActionCall("syndicationFeed", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Syndication Feed by ID
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("syndicationFeed", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Syndication Feed by ID
 *	.
 * @param	id	string		 (optional).
 * @param	syndicationFeed	KalturaBaseSyndicationFeed		 (optional).
 * @return	KalturaBaseSyndicationFeed.
 */
KalturaSyndicationFeedService.prototype.update = function(callback, id, syndicationFeed){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "syndicationFeed", toParams(syndicationFeed));
	this.client.queueServiceActionCall("syndicationFeed", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Syndication Feed by ID
 *	.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaSyndicationFeedService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("syndicationFeed", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Syndication Feeds by filter with paging support
 *	.
 * @param	filter	KalturaBaseSyndicationFeedFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaBaseSyndicationFeedListResponse.
 */
KalturaSyndicationFeedService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("syndicationFeed", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * get entry count for a syndication feed.
 * @param	feedId	string		 (optional).
 * @return	KalturaSyndicationFeedEntryCount.
 */
KalturaSyndicationFeedService.prototype.getEntryCount = function(callback, feedId){
	var kparams = new Object();
	this.client.addParam(kparams, "feedId", feedId);
	this.client.queueServiceActionCall("syndicationFeed", "getEntryCount", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * request conversion for all entries that doesnt have the required flavor param
 *	returns a comma-separated ids of conversion jobs
 *	@action requestConversion
 *	@param string $feedId
 *	@return string.
 * @param	feedId	string		 (optional).
 * @return	string.
 */
KalturaSyndicationFeedService.prototype.requestConversion = function(callback, feedId){
	var kparams = new Object();
	this.client.addParam(kparams, "feedId", feedId);
	this.client.queueServiceActionCall("syndicationFeed", "requestConversion", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: system.
 * The available service actions:
 * @action	ping	.
*/
function KalturaSystemService(client){
	this.init(client);
}
KalturaSystemService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @return	bool.
 */
KalturaSystemService.prototype.ping = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("system", "ping", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: thumbAsset.
 * The available service actions:
 * @action	add	Add thumbnail asset.
 * @action	setContent	Update content of thumbnail asset.
 * @action	update	Update thumbnail asset.
 * @action	setAsDefault	Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *	Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 *	.
 * @action	generateByEntryId	.
 * @action	generate	.
 * @action	regenerate	.
 * @action	get	.
 * @action	getByEntryId	.
 * @action	list	List Thumbnail Assets by filter and pager
 *	.
 * @action	addFromUrl	DEPRECATED - use thumbAsset.add and thumbAsset.setContent instead.
 * @action	addFromImage	.
 * @action	delete	.
*/
function KalturaThumbAssetService(client){
	this.init(client);
}
KalturaThumbAssetService.inheritsFrom (KalturaServiceBase);
/**
 * Add thumbnail asset.
 * @param	entryId	string		 (optional).
 * @param	thumbAsset	KalturaThumbAsset		 (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.add = function(callback, entryId, thumbAsset){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "thumbAsset", toParams(thumbAsset));
	this.client.queueServiceActionCall("thumbAsset", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update content of thumbnail asset.
 * @param	id	string		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.setContent = function(callback, id, contentResource){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("thumbAsset", "setContent", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update thumbnail asset.
 * @param	id	string		 (optional).
 * @param	thumbAsset	KalturaThumbAsset		 (optional).
 * @param	contentResource	KalturaContentResource		 (optional, default: null).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.update = function(callback, id, thumbAsset, contentResource){
	if(!contentResource)
		contentResource = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "thumbAsset", toParams(thumbAsset));
	if (contentResource != null)
		this.client.addParam(kparams, "contentResource", toParams(contentResource));
	this.client.queueServiceActionCall("thumbAsset", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Tags the thumbnail as DEFAULT_THUMB and removes that tag from all other thumbnail assets of the entry.
 *	Create a new file sync link on the entry thumbnail that points to the thumbnail asset file sync.
 *	.
 * @param	thumbAssetId	string		 (optional).
 * @return	.
 */
KalturaThumbAssetService.prototype.setAsDefault = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbAsset", "setAsDefault", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	destThumbParamsId	int		indicate the id of the ThumbParams to be generate this thumbnail by (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.generateByEntryId = function(callback, entryId, destThumbParamsId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "destThumbParamsId", destThumbParamsId);
	this.client.queueServiceActionCall("thumbAsset", "generateByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	thumbParams	KalturaThumbParams		 (optional).
 * @param	sourceAssetId	string		id of the source asset (flavor or thumbnail) to be used as source for the thumbnail generation (optional, default: null).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.generate = function(callback, entryId, thumbParams, sourceAssetId){
	if(!sourceAssetId)
		sourceAssetId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "thumbParams", toParams(thumbParams));
	this.client.addParam(kparams, "sourceAssetId", sourceAssetId);
	this.client.queueServiceActionCall("thumbAsset", "generate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	thumbAssetId	string		 (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.regenerate = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbAsset", "regenerate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	thumbAssetId	string		 (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.get = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbAsset", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @return	array.
 */
KalturaThumbAssetService.prototype.getByEntryId = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("thumbAsset", "getByEntryId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Thumbnail Assets by filter and pager
 *	.
 * @param	filter	KalturaAssetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaThumbAssetListResponse.
 */
KalturaThumbAssetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("thumbAsset", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * DEPRECATED - use thumbAsset.add and thumbAsset.setContent instead.
 * @param	entryId	string		 (optional).
 * @param	url	string		 (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.addFromUrl = function(callback, entryId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("thumbAsset", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	entryId	string		 (optional).
 * @param	fileData	file		 (optional).
 * @return	KalturaThumbAsset.
 */
KalturaThumbAssetService.prototype.addFromImage = function(callback, entryId, fileData){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("thumbAsset", "addFromImage", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	thumbAssetId	string		 (optional).
 * @return	.
 */
KalturaThumbAssetService.prototype.deleteAction = function(callback, thumbAssetId){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbAssetId", thumbAssetId);
	this.client.queueServiceActionCall("thumbAsset", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: thumbParams.
 * The available service actions:
 * @action	add	Add new Thumb Params
 *	.
 * @action	get	Get Thumb Params by ID
 *	.
 * @action	update	Update Thumb Params by ID
 *	.
 * @action	delete	Delete Thumb Params by ID
 *	.
 * @action	list	List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *	.
 * @action	getByConversionProfileId	Get Thumb Params by Conversion Profile ID
 *	.
*/
function KalturaThumbParamsService(client){
	this.init(client);
}
KalturaThumbParamsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Thumb Params
 *	.
 * @param	thumbParams	KalturaThumbParams		 (optional).
 * @return	KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.add = function(callback, thumbParams){
	var kparams = new Object();
	this.client.addParam(kparams, "thumbParams", toParams(thumbParams));
	this.client.queueServiceActionCall("thumbParams", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Thumb Params by ID
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("thumbParams", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Thumb Params by ID
 *	.
 * @param	id	int		 (optional).
 * @param	thumbParams	KalturaThumbParams		 (optional).
 * @return	KalturaThumbParams.
 */
KalturaThumbParamsService.prototype.update = function(callback, id, thumbParams){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "thumbParams", toParams(thumbParams));
	this.client.queueServiceActionCall("thumbParams", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Thumb Params by ID
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaThumbParamsService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("thumbParams", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List Thumb Params by filter with paging support (By default - all system default params will be listed too)
 *	.
 * @param	filter	KalturaThumbParamsFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaThumbParamsListResponse.
 */
KalturaThumbParamsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("thumbParams", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Thumb Params by Conversion Profile ID
 *	.
 * @param	conversionProfileId	int		 (optional).
 * @return	array.
 */
KalturaThumbParamsService.prototype.getByConversionProfileId = function(callback, conversionProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	this.client.queueServiceActionCall("thumbParams", "getByConversionProfileId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: uiConf.
 * The available service actions:
 * @action	add	UIConf Add action allows you to add a UIConf to Kaltura DB
 *	.
 * @action	update	Update an existing UIConf
 *	.
 * @action	get	Retrieve a UIConf by id
 *	.
 * @action	delete	Delete an existing UIConf
 *	.
 * @action	clone	Clone an existing UIConf
 *	.
 * @action	listTemplates	retrieve a list of available template UIConfs.
 * @action	list	Retrieve a list of available UIConfs
 *	.
 * @action	getAvailableTypes	Retrieve a list of all available versions by object type
 *	.
*/
function KalturaUiConfService(client){
	this.init(client);
}
KalturaUiConfService.inheritsFrom (KalturaServiceBase);
/**
 * UIConf Add action allows you to add a UIConf to Kaltura DB
 *	.
 * @param	uiConf	KalturaUiConf		Mandatory input parameter of type KalturaUiConf (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.add = function(callback, uiConf){
	var kparams = new Object();
	this.client.addParam(kparams, "uiConf", toParams(uiConf));
	this.client.queueServiceActionCall("uiConf", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing UIConf
 *	.
 * @param	id	int		 (optional).
 * @param	uiConf	KalturaUiConf		 (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.update = function(callback, id, uiConf){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "uiConf", toParams(uiConf));
	this.client.queueServiceActionCall("uiConf", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a UIConf by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiConf", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing UIConf
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaUiConfService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiConf", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone an existing UIConf
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaUiConf.
 */
KalturaUiConfService.prototype.cloneAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("uiConf", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * retrieve a list of available template UIConfs.
 * @param	filter	KalturaUiConfFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listTemplates = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uiConf", "listTemplates", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available UIConfs
 *	.
 * @param	filter	KalturaUiConfFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUiConfListResponse.
 */
KalturaUiConfService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uiConf", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of all available versions by object type
 *	.
 * @return	array.
 */
KalturaUiConfService.prototype.getAvailableTypes = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("uiConf", "getAvailableTypes", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: upload.
 * The available service actions:
 * @action	upload	.
 * @action	getUploadedFileTokenByFileName	.
*/
function KalturaUploadService(client){
	this.init(client);
}
KalturaUploadService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaUploadService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("upload", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	fileName	string		 (optional).
 * @return	KalturaUploadResponse.
 */
KalturaUploadService.prototype.getUploadedFileTokenByFileName = function(callback, fileName){
	var kparams = new Object();
	this.client.addParam(kparams, "fileName", fileName);
	this.client.queueServiceActionCall("upload", "getUploadedFileTokenByFileName", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: uploadToken.
 * The available service actions:
 * @action	add	Adds new upload token to upload a file
 *	.
 * @action	get	Get upload token by id
 *	.
 * @action	upload	Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients) 
 *	.
 * @action	delete	Deletes the upload token by upload token id
 *	.
 * @action	list	List upload token by filter with pager support. 
 *	When using a user session the service will be restricted to users objects only.
 *	.
*/
function KalturaUploadTokenService(client){
	this.init(client);
}
KalturaUploadTokenService.inheritsFrom (KalturaServiceBase);
/**
 * Adds new upload token to upload a file
 *	.
 * @param	uploadToken	KalturaUploadToken		 (optional, default: null).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.add = function(callback, uploadToken){
	if(!uploadToken)
		uploadToken = null;
	var kparams = new Object();
	if (uploadToken != null)
		this.client.addParam(kparams, "uploadToken", toParams(uploadToken));
	this.client.queueServiceActionCall("uploadToken", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get upload token by id
 *	.
 * @param	uploadTokenId	string		 (optional).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.get = function(callback, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("uploadToken", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a file using the upload token id, returns an error on failure (an exception will be thrown when using one of the Kaltura clients) 
 *	.
 * @param	uploadTokenId	string		 (optional).
 * @param	fileData	file		 (optional).
 * @param	resume	bool		 (optional, default: false).
 * @param	finalChunk	bool		 (optional, default: true).
 * @param	resumeAt	int		 (optional, default: -1).
 * @return	KalturaUploadToken.
 */
KalturaUploadTokenService.prototype.upload = function(callback, uploadTokenId, fileData, resume, finalChunk, resumeAt){
	if(!resume)
		resume = false;
	if(!finalChunk)
		finalChunk = true;
	if(!resumeAt)
		resumeAt = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.addParam(kparams, "resume", resume);
	this.client.addParam(kparams, "finalChunk", finalChunk);
	this.client.addParam(kparams, "resumeAt", resumeAt);
	this.client.queueServiceActionCall("uploadToken", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes the upload token by upload token id
 *	.
 * @param	uploadTokenId	string		 (optional).
 * @return	.
 */
KalturaUploadTokenService.prototype.deleteAction = function(callback, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("uploadToken", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List upload token by filter with pager support. 
 *	When using a user session the service will be restricted to users objects only.
 *	.
 * @param	filter	KalturaUploadTokenFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUploadTokenListResponse.
 */
KalturaUploadTokenService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("uploadToken", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: userRole.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaUserRole object
 *	.
 * @action	get	Retrieve a KalturaUserRole object by ID
 *	.
 * @action	update	Update an existing KalturaUserRole object
 *	.
 * @action	delete	Mark the KalturaUserRole object as deleted
 *	.
 * @action	list	List user roles
 *	.
 * @action	clone	Clone role
 *	.
*/
function KalturaUserRoleService(client){
	this.init(client);
}
KalturaUserRoleService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaUserRole object
 *	.
 * @param	userRole	KalturaUserRole		 (optional).
 * @return	KalturaUserRole.
 */
KalturaUserRoleService.prototype.add = function(callback, userRole){
	var kparams = new Object();
	this.client.addParam(kparams, "userRole", toParams(userRole));
	this.client.queueServiceActionCall("userRole", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaUserRole object by ID
 *	.
 * @param	userRoleId	int		 (optional).
 * @return	KalturaUserRole.
 */
KalturaUserRoleService.prototype.get = function(callback, userRoleId){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.queueServiceActionCall("userRole", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaUserRole object
 *	.
 * @param	userRoleId	int		 (optional).
 * @param	userRole	KalturaUserRole		Id (optional).
 * @return	KalturaUserRole.
 */
KalturaUserRoleService.prototype.update = function(callback, userRoleId, userRole){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.addParam(kparams, "userRole", toParams(userRole));
	this.client.queueServiceActionCall("userRole", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaUserRole object as deleted
 *	.
 * @param	userRoleId	int		 (optional).
 * @return	KalturaUserRole.
 */
KalturaUserRoleService.prototype.deleteAction = function(callback, userRoleId){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.queueServiceActionCall("userRole", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List user roles
 *	.
 * @param	filter	KalturaUserRoleFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUserRoleListResponse.
 */
KalturaUserRoleService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("userRole", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Clone role
 *	.
 * @param	userRoleId	int		 (optional).
 * @return	KalturaUserRole.
 */
KalturaUserRoleService.prototype.cloneAction = function(callback, userRoleId){
	var kparams = new Object();
	this.client.addParam(kparams, "userRoleId", userRoleId);
	this.client.queueServiceActionCall("userRole", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: user.
 * The available service actions:
 * @action	add	Adds a user to the Kaltura DB.
 *	Input param $id is the unique identifier in the partner's system.
 * @action	update	Update existing user, it is possible to update the user id too
 *	.
 * @action	get	Get user by user ID
 *	.
 * @action	getByLoginId	Get user by user's login ID and partner ID
 *	.
 * @action	delete	Mark the user as deleted
 *	.
 * @action	list	List users (When not set in the filter, blocked and deleted users will be returned too)
 *	.
 * @action	notifyBan	Notify about user ban
 *	.
 * @action	login	Get a session using user id and password
 *	.
 * @action	loginByLoginId	Get a session using user's kaltura id and password
 *	.
 * @action	updateLoginData	Update user password and email
 *	.
 * @action	resetPassword	Reset admin user password and send it to the users email address
 *	.
 * @action	setInitialPassword	Set initial users password
 *	.
 * @action	enableLogin	Enable the user to login with a loginId (email) and password.
 *	.
 * @action	disableLogin	Disallow user to login with an id/password.
 *	Passing either a loginId or a userId is allowed.
 *	.
*/
function KalturaUserService(client){
	this.init(client);
}
KalturaUserService.inheritsFrom (KalturaServiceBase);
/**
 * Adds a user to the Kaltura DB.
 *	Input param $id is the unique identifier in the partner's system.
 * @param	user	KalturaUser		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.add = function(callback, user){
	var kparams = new Object();
	this.client.addParam(kparams, "user", toParams(user));
	this.client.queueServiceActionCall("user", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update existing user, it is possible to update the user id too
 *	.
 * @param	userId	string		 (optional).
 * @param	user	KalturaUser		Id (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.update = function(callback, userId, user){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "user", toParams(user));
	this.client.queueServiceActionCall("user", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get user by user ID
 *	.
 * @param	userId	string		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.get = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get user by user's login ID and partner ID
 *	.
 * @param	loginId	string		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.getByLoginId = function(callback, loginId){
	var kparams = new Object();
	this.client.addParam(kparams, "loginId", loginId);
	this.client.queueServiceActionCall("user", "getByLoginId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the user as deleted
 *	.
 * @param	userId	string		 (optional).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.deleteAction = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List users (When not set in the filter, blocked and deleted users will be returned too)
 *	.
 * @param	filter	KalturaUserFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaUserListResponse.
 */
KalturaUserService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("user", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Notify about user ban
 *	.
 * @param	userId	string		 (optional).
 * @return	.
 */
KalturaUserService.prototype.notifyBan = function(callback, userId){
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.queueServiceActionCall("user", "notifyBan", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get a session using user id and password
 *	.
 * @param	partnerId	int		 (optional).
 * @param	userId	string		 (optional).
 * @param	password	string		 (optional).
 * @param	expiry	int		 (optional, default: 86400).
 * @param	privileges	string		 (optional, default: *).
 * @return	string.
 */
KalturaUserService.prototype.login = function(callback, partnerId, userId, password, expiry, privileges){
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = "*";
	var kparams = new Object();
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("user", "login", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get a session using user's kaltura id and password
 *	.
 * @param	loginId	string		login email (optional).
 * @param	password	string		 (optional).
 * @param	partnerId	int		 (optional, default: null).
 * @param	expiry	int		 (optional, default: 86400).
 * @param	privileges	string		 (optional, default: *).
 * @return	string.
 */
KalturaUserService.prototype.loginByLoginId = function(callback, loginId, password, partnerId, expiry, privileges){
	if(!partnerId)
		partnerId = null;
	if(!expiry)
		expiry = 86400;
	if(!privileges)
		privileges = "*";
	var kparams = new Object();
	this.client.addParam(kparams, "loginId", loginId);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "partnerId", partnerId);
	this.client.addParam(kparams, "expiry", expiry);
	this.client.addParam(kparams, "privileges", privileges);
	this.client.queueServiceActionCall("user", "loginByLoginId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update user password and email
 *	.
 * @param	oldLoginId	string		 (optional).
 * @param	password	string		 (optional).
 * @param	newLoginId	string		Optional, provide only when you want to update the login id (optional).
 * @param	newPassword	string		 (optional).
 * @param	newFirstName	string		 (optional, default: null).
 * @param	newLastName	string		 (optional, default: null).
 * @return	.
 */
KalturaUserService.prototype.updateLoginData = function(callback, oldLoginId, password, newLoginId, newPassword, newFirstName, newLastName){
	if(!newLoginId)
		newLoginId = "";
	if(!newPassword)
		newPassword = "";
	if(!newFirstName)
		newFirstName = null;
	if(!newLastName)
		newLastName = null;
	var kparams = new Object();
	this.client.addParam(kparams, "oldLoginId", oldLoginId);
	this.client.addParam(kparams, "password", password);
	this.client.addParam(kparams, "newLoginId", newLoginId);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.addParam(kparams, "newFirstName", newFirstName);
	this.client.addParam(kparams, "newLastName", newLastName);
	this.client.queueServiceActionCall("user", "updateLoginData", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Reset admin user password and send it to the users email address
 *	.
 * @param	email	string		 (optional).
 * @return	.
 */
KalturaUserService.prototype.resetPassword = function(callback, email){
	var kparams = new Object();
	this.client.addParam(kparams, "email", email);
	this.client.queueServiceActionCall("user", "resetPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set initial users password
 *	.
 * @param	hashKey	string		 (optional).
 * @param	newPassword	string		new password to set (optional).
 * @return	.
 */
KalturaUserService.prototype.setInitialPassword = function(callback, hashKey, newPassword){
	var kparams = new Object();
	this.client.addParam(kparams, "hashKey", hashKey);
	this.client.addParam(kparams, "newPassword", newPassword);
	this.client.queueServiceActionCall("user", "setInitialPassword", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Enable the user to login with a loginId (email) and password.
 *	.
 * @param	userId	string		 (optional).
 * @param	loginId	string		 (optional).
 * @param	password	string		 (optional, default: null).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.enableLogin = function(callback, userId, loginId, password){
	if(!password)
		password = null;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "loginId", loginId);
	this.client.addParam(kparams, "password", password);
	this.client.queueServiceActionCall("user", "enableLogin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Disallow user to login with an id/password.
 *	Passing either a loginId or a userId is allowed.
 *	.
 * @param	userId	string		 (optional, default: null).
 * @param	loginId	string		 (optional, default: null).
 * @return	KalturaUser.
 */
KalturaUserService.prototype.disableLogin = function(callback, userId, loginId){
	if(!userId)
		userId = null;
	if(!loginId)
		loginId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "userId", userId);
	this.client.addParam(kparams, "loginId", loginId);
	this.client.queueServiceActionCall("user", "disableLogin", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: widget.
 * The available service actions:
 * @action	add	Add new widget, can be attached to entry or kshow
 *	SourceWidget is ignored.
 *	.
 * @action	update	Update exisiting widget
 *	.
 * @action	get	Get widget by id
 *	.
 * @action	clone	Add widget based on existing widget.
 *	Must provide valid sourceWidgetId
 *	.
 * @action	list	Retrieve a list of available widget depends on the filter given
 *	.
*/
function KalturaWidgetService(client){
	this.init(client);
}
KalturaWidgetService.inheritsFrom (KalturaServiceBase);
/**
 * Add new widget, can be attached to entry or kshow
 *	SourceWidget is ignored.
 *	.
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.add = function(callback, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update exisiting widget
 *	.
 * @param	id	string		 (optional).
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.update = function(callback, id, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get widget by id
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("widget", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add widget based on existing widget.
 *	Must provide valid sourceWidgetId
 *	.
 * @param	widget	KalturaWidget		 (optional).
 * @return	KalturaWidget.
 */
KalturaWidgetService.prototype.cloneAction = function(callback, widget){
	var kparams = new Object();
	this.client.addParam(kparams, "widget", toParams(widget));
	this.client.queueServiceActionCall("widget", "clone", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a list of available widget depends on the filter given
 *	.
 * @param	filter	KalturaWidgetFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaWidgetListResponse.
 */
KalturaWidgetService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("widget", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: xInternal.
 * The available service actions:
 * @action	xAddBulkDownload	Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 *	This sevice support the following entries: 
 *	- MediaEntry
 *	- Video will be converted using the flavor params id
 *	- Audio will be downloaded as MP3
 *	- Image will be downloaded as Jpeg
 *	- MixEntry will be flattend using the flavor params id
 *	- Other entry types are not supported
 *	Returns the admin email that the email message will be sent to 
 *	.
*/
function KalturaXInternalService(client){
	this.init(client);
}
KalturaXInternalService.inheritsFrom (KalturaServiceBase);
/**
 * Creates new download job for multiple entry ids (comma separated), an email will be sent when the job is done
 *	This sevice support the following entries: 
 *	- MediaEntry
 *	- Video will be converted using the flavor params id
 *	- Audio will be downloaded as MP3
 *	- Image will be downloaded as Jpeg
 *	- MixEntry will be flattend using the flavor params id
 *	- Other entry types are not supported
 *	Returns the admin email that the email message will be sent to 
 *	.
 * @param	entryIds	string		Comma separated list of entry ids (optional).
 * @param	flavorParamsId	string		 (optional).
 * @return	string.
 */
KalturaXInternalService.prototype.xAddBulkDownload = function(callback, entryIds, flavorParamsId){
	if(!flavorParamsId)
		flavorParamsId = "";
	var kparams = new Object();
	this.client.addParam(kparams, "entryIds", entryIds);
	this.client.addParam(kparams, "flavorParamsId", flavorParamsId);
	this.client.queueServiceActionCall("xInternal", "xAddBulkDownload", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: metadata.
 * The available service actions:
 * @action	list	List metadata objects by filter and pager
 *	.
 * @action	add	Allows you to add a metadata object and metadata content associated with Kaltura object
 *	.
 * @action	addFromFile	Allows you to add a metadata object and metadata file associated with Kaltura object
 *	.
 * @action	addFromUrl	Allows you to add a metadata xml data from remote URL
 *	.
 * @action	addFromBulk	Allows you to add a metadata xml data from remote URL.
 *	Enables different permissions than addFromUrl action.
 *	.
 * @action	delete	Delete an existing metadata
 *	.
 * @action	invalidate	Mark existing metadata as invalid
 *	Used by batch metadata transform
 *	.
 * @action	get	Retrieve a metadata object by id
 *	.
 * @action	update	Update an existing metadata object with new XML content
 *	.
 * @action	updateFromFile	Update an existing metadata object with new XML file
 *	.
*/
function KalturaMetadataService(client){
	this.init(client);
}
KalturaMetadataService.inheritsFrom (KalturaServiceBase);
/**
 * List metadata objects by filter and pager
 *	.
 * @param	filter	KalturaMetadataFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMetadataListResponse.
 */
KalturaMetadataService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadata", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata object and metadata content associated with Kaltura object
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	xmlData	string		XML metadata (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.add = function(callback, metadataProfileId, objectType, objectId, xmlData){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "xmlData", xmlData);
	this.client.queueServiceActionCall("metadata", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata object and metadata file associated with Kaltura object
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	xmlFile	file		XML metadata (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromFile = function(callback, metadataProfileId, objectType, objectId, xmlFile){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	kfiles = new Object();
	this.client.addParam(kfiles, "xmlFile", xmlFile);
	this.client.queueServiceActionCall("metadata", "addFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata xml data from remote URL
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	url	string		XML metadata remote url (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromUrl = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("metadata", "addFromUrl", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata xml data from remote URL.
 *	Enables different permissions than addFromUrl action.
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @param	objectType	int		 (optional, enum: KalturaMetadataObjectType).
 * @param	objectId	string		 (optional).
 * @param	url	string		XML metadata remote url (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.addFromBulk = function(callback, metadataProfileId, objectType, objectId, url){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.addParam(kparams, "objectType", objectType);
	this.client.addParam(kparams, "objectId", objectId);
	this.client.addParam(kparams, "url", url);
	this.client.queueServiceActionCall("metadata", "addFromBulk", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing metadata
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaMetadataService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark existing metadata as invalid
 *	Used by batch metadata transform
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaMetadataService.prototype.invalidate = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata", "invalidate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a metadata object by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadata", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML content
 *	.
 * @param	id	int		 (optional).
 * @param	xmlData	string		XML metadata (optional, default: null).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.update = function(callback, id, xmlData){
	if(!xmlData)
		xmlData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "xmlData", xmlData);
	this.client.queueServiceActionCall("metadata", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object with new XML file
 *	.
 * @param	id	int		 (optional).
 * @param	xmlFile	file		XML metadata (optional, default: null).
 * @return	KalturaMetadata.
 */
KalturaMetadataService.prototype.updateFromFile = function(callback, id, xmlFile){
	if(!xmlFile)
		xmlFile = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xmlFile", xmlFile);
	this.client.queueServiceActionCall("metadata", "updateFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: metadataProfile.
 * The available service actions:
 * @action	list	List metadata profile objects by filter and pager
 *	.
 * @action	listFields	List metadata profile fields by metadata profile id
 *	.
 * @action	add	Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *	.
 * @action	addFromFile	Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *	.
 * @action	delete	Delete an existing metadata profile
 *	.
 * @action	get	Retrieve a metadata profile object by id
 *	.
 * @action	update	Update an existing metadata object
 *	.
 * @action	revert	Update an existing metadata object definition file
 *	.
 * @action	updateDefinitionFromFile	Update an existing metadata object definition file
 *	.
 * @action	updateViewsFromFile	Update an existing metadata object views file
 *	.
*/
function KalturaMetadataProfileService(client){
	this.init(client);
}
KalturaMetadataProfileService.inheritsFrom (KalturaServiceBase);
/**
 * List metadata profile objects by filter and pager
 *	.
 * @param	filter	KalturaMetadataProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaMetadataProfileListResponse.
 */
KalturaMetadataProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("metadataProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List metadata profile fields by metadata profile id
 *	.
 * @param	metadataProfileId	int		 (optional).
 * @return	KalturaMetadataProfileFieldListResponse.
 */
KalturaMetadataProfileService.prototype.listFields = function(callback, metadataProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfileId", metadataProfileId);
	this.client.queueServiceActionCall("metadataProfile", "listFields", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata profile object and metadata profile content associated with Kaltura object type
 *	.
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdData	string		XSD metadata definition (optional).
 * @param	viewsData	string		UI views definition (optional, default: null).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.add = function(callback, metadataProfile, xsdData, viewsData){
	if(!viewsData)
		viewsData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.addParam(kparams, "viewsData", viewsData);
	this.client.queueServiceActionCall("metadataProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a metadata profile object and metadata profile file associated with Kaltura object type
 *	.
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdFile	file		XSD metadata definition (optional).
 * @param	viewsFile	file		UI views definition (optional, default: null).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.addFromFile = function(callback, metadataProfile, xsdFile, viewsFile){
	if(!viewsFile)
		viewsFile = null;
	var kparams = new Object();
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.addParam(kfiles, "viewsFile", viewsFile);
	this.client.queueServiceActionCall("metadataProfile", "addFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete an existing metadata profile
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaMetadataProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadataProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a metadata profile object by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("metadataProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object
 *	.
 * @param	id	int		 (optional).
 * @param	metadataProfile	KalturaMetadataProfile		 (optional).
 * @param	xsdData	string		XSD metadata definition (optional, default: null).
 * @param	viewsData	string		UI views definition (optional, default: null).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.update = function(callback, id, metadataProfile, xsdData, viewsData){
	if(!xsdData)
		xsdData = null;
	if(!viewsData)
		viewsData = null;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "metadataProfile", toParams(metadataProfile));
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.addParam(kparams, "viewsData", viewsData);
	this.client.queueServiceActionCall("metadataProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object definition file
 *	.
 * @param	id	int		 (optional).
 * @param	toVersion	int		 (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.revert = function(callback, id, toVersion){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "toVersion", toVersion);
	this.client.queueServiceActionCall("metadataProfile", "revert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object definition file
 *	.
 * @param	id	int		 (optional).
 * @param	xsdFile	file		XSD metadata definition (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateDefinitionFromFile = function(callback, id, xsdFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.queueServiceActionCall("metadataProfile", "updateDefinitionFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing metadata object views file
 *	.
 * @param	id	int		 (optional).
 * @param	viewsFile	file		UI views file (optional).
 * @return	KalturaMetadataProfile.
 */
KalturaMetadataProfileService.prototype.updateViewsFromFile = function(callback, id, viewsFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "viewsFile", viewsFile);
	this.client.queueServiceActionCall("metadataProfile", "updateViewsFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: documents.
 * The available service actions:
 * @action	addFromUploadedFile	Add new document entry after the specific document file was uploaded and the upload token id exists
 *	.
 * @action	addFromEntry	Copy entry into new entry
 *	.
 * @action	addFromFlavorAsset	Copy flavor asset into new entry
 *	.
 * @action	convert	Convert entry
 *	.
 * @action	get	Get document entry by ID.
 *	.
 * @action	update	Update document entry. Only the properties that were set will be updated.
 *	.
 * @action	delete	Delete a document entry.
 *	.
 * @action	list	List document entries by filter with paging support.
 *	.
 * @action	upload	Upload a document file to Kaltura, then the file can be used to create a document entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @action	convertPptToSwf	This will queue a batch job for converting the document file to swf
 *	Returns the URL where the new swf will be available 
 *	.
*/
function KalturaDocumentsService(client){
	this.init(client);
}
KalturaDocumentsService.inheritsFrom (KalturaServiceBase);
/**
 * Add new document entry after the specific document file was uploaded and the upload token id exists
 *	.
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional).
 * @param	uploadTokenId	string		Upload token id (optional).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromUploadedFile = function(callback, documentEntry, uploadTokenId){
	var kparams = new Object();
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "uploadTokenId", uploadTokenId);
	this.client.queueServiceActionCall("documents", "addFromUploadedFile", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy entry into new entry
 *	.
 * @param	sourceEntryId	string		Document entry id to copy from (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @param	sourceFlavorParamsId	int		The flavor to be used as the new entry source, source flavor will be used if not specified (optional, default: null).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromEntry = function(callback, sourceEntryId, documentEntry, sourceFlavorParamsId){
	if(!documentEntry)
		documentEntry = null;
	if(!sourceFlavorParamsId)
		sourceFlavorParamsId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceEntryId", sourceEntryId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.addParam(kparams, "sourceFlavorParamsId", sourceFlavorParamsId);
	this.client.queueServiceActionCall("documents", "addFromEntry", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Copy flavor asset into new entry
 *	.
 * @param	sourceFlavorAssetId	string		Flavor asset id to be used as the new entry source (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata (optional, default: null).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.addFromFlavorAsset = function(callback, sourceFlavorAssetId, documentEntry){
	if(!documentEntry)
		documentEntry = null;
	var kparams = new Object();
	this.client.addParam(kparams, "sourceFlavorAssetId", sourceFlavorAssetId);
	if (documentEntry != null)
		this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("documents", "addFromFlavorAsset", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Convert entry
 *	.
 * @param	entryId	string		Document entry id (optional).
 * @param	conversionProfileId	int		 (optional, default: null).
 * @param	dynamicConversionAttributes	array		 (optional, default: null).
 * @return	int.
 */
KalturaDocumentsService.prototype.convert = function(callback, entryId, conversionProfileId, dynamicConversionAttributes){
	if(!conversionProfileId)
		conversionProfileId = null;
	if(!dynamicConversionAttributes)
		dynamicConversionAttributes = null;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "conversionProfileId", conversionProfileId);
	if(dynamicConversionAttributes != null)
	for(var index in dynamicConversionAttributes)
	{
		var obj = dynamicConversionAttributes[index];
		this.client.addParam(kparams, "dynamicConversionAttributes:" + index, toParams(obj));
	}
	this.client.queueServiceActionCall("documents", "convert", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get document entry by ID.
 *	.
 * @param	entryId	string		Document entry id (optional).
 * @param	version	int		Desired version of the data (optional, default: -1).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.get = function(callback, entryId, version){
	if(!version)
		version = -1;
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "version", version);
	this.client.queueServiceActionCall("documents", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update document entry. Only the properties that were set will be updated.
 *	.
 * @param	entryId	string		Document entry id to update (optional).
 * @param	documentEntry	KalturaDocumentEntry		Document entry metadata to update (optional).
 * @return	KalturaDocumentEntry.
 */
KalturaDocumentsService.prototype.update = function(callback, entryId, documentEntry){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.addParam(kparams, "documentEntry", toParams(documentEntry));
	this.client.queueServiceActionCall("documents", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete a document entry.
 *	.
 * @param	entryId	string		Document entry id to delete (optional).
 * @return	.
 */
KalturaDocumentsService.prototype.deleteAction = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("documents", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List document entries by filter with paging support.
 *	.
 * @param	filter	KalturaDocumentEntryFilter		Document entry filter (optional, default: null).
 * @param	pager	KalturaFilterPager		Pager (optional, default: null).
 * @return	KalturaDocumentListResponse.
 */
KalturaDocumentsService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("documents", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Upload a document file to Kaltura, then the file can be used to create a document entry.
 *	DEPRECATED - use upload.upload or uploadToken.add instead.
 * @param	fileData	file		The file data (optional).
 * @return	string.
 */
KalturaDocumentsService.prototype.upload = function(callback, fileData){
	var kparams = new Object();
	kfiles = new Object();
	this.client.addParam(kfiles, "fileData", fileData);
	this.client.queueServiceActionCall("documents", "upload", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * This will queue a batch job for converting the document file to swf
 *	Returns the URL where the new swf will be available 
 *	.
 * @param	entryId	string		 (optional).
 * @return	string.
 */
KalturaDocumentsService.prototype.convertPptToSwf = function(callback, entryId){
	var kparams = new Object();
	this.client.addParam(kparams, "entryId", entryId);
	this.client.queueServiceActionCall("documents", "convertPptToSwf", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: auditTrail.
 * The available service actions:
 * @action	list	List audit trail objects by filter and pager
 *	.
 * @action	add	Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *	.
 * @action	get	Retrieve an audit trail object by id
 *	.
*/
function KalturaAuditTrailService(client){
	this.init(client);
}
KalturaAuditTrailService.inheritsFrom (KalturaServiceBase);
/**
 * List audit trail objects by filter and pager
 *	.
 * @param	filter	KalturaAuditTrailFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAuditTrailListResponse.
 */
KalturaAuditTrailService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("auditTrail", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add an audit trail object and audit trail content associated with Kaltura object
 *	.
 * @param	auditTrail	KalturaAuditTrail		 (optional).
 * @return	KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.add = function(callback, auditTrail){
	var kparams = new Object();
	this.client.addParam(kparams, "auditTrail", toParams(auditTrail));
	this.client.queueServiceActionCall("auditTrail", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an audit trail object by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaAuditTrail.
 */
KalturaAuditTrailService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("auditTrail", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: virusScanProfile.
 * The available service actions:
 * @action	list	List virus scan profile objects by filter and pager
 *	.
 * @action	add	Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *	.
 * @action	get	Retrieve an virus scan profile object by id
 *	.
 * @action	update	Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *	.
 * @action	delete	Mark the virus scan profile as deleted
 *	.
 * @action	scan	Scan flavor asset according to virus scan profile
 *	.
*/
function KalturaVirusScanProfileService(client){
	this.init(client);
}
KalturaVirusScanProfileService.inheritsFrom (KalturaServiceBase);
/**
 * List virus scan profile objects by filter and pager
 *	.
 * @param	filter	KalturaVirusScanProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaVirusScanProfileListResponse.
 */
KalturaVirusScanProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("virusScanProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add an virus scan profile object and virus scan profile content associated with Kaltura object
 *	.
 * @param	virusScanProfile	KalturaVirusScanProfile		 (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.add = function(callback, virusScanProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfile", toParams(virusScanProfile));
	this.client.queueServiceActionCall("virusScanProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an virus scan profile object by id
 *	.
 * @param	virusScanProfileId	int		 (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.get = function(callback, virusScanProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusScanProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update exisitng virus scan profile, it is possible to update the virus scan profile id too
 *	.
 * @param	virusScanProfileId	int		 (optional).
 * @param	virusScanProfile	KalturaVirusScanProfile		Id (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.update = function(callback, virusScanProfileId, virusScanProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.addParam(kparams, "virusScanProfile", toParams(virusScanProfile));
	this.client.queueServiceActionCall("virusScanProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the virus scan profile as deleted
 *	.
 * @param	virusScanProfileId	int		 (optional).
 * @return	KalturaVirusScanProfile.
 */
KalturaVirusScanProfileService.prototype.deleteAction = function(callback, virusScanProfileId){
	var kparams = new Object();
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusScanProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Scan flavor asset according to virus scan profile
 *	.
 * @param	flavorAssetId	string		 (optional).
 * @param	virusScanProfileId	int		 (optional, default: null).
 * @return	int.
 */
KalturaVirusScanProfileService.prototype.scan = function(callback, flavorAssetId, virusScanProfileId){
	if(!virusScanProfileId)
		virusScanProfileId = null;
	var kparams = new Object();
	this.client.addParam(kparams, "flavorAssetId", flavorAssetId);
	this.client.addParam(kparams, "virusScanProfileId", virusScanProfileId);
	this.client.queueServiceActionCall("virusScanProfile", "scan", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: distributionProfile.
 * The available service actions:
 * @action	add	Add new Distribution Profile
 *	.
 * @action	get	Get Distribution Profile by id
 *	.
 * @action	update	Update Distribution Profile by id
 *	.
 * @action	updateStatus	Update Distribution Profile status by id
 *	.
 * @action	delete	Delete Distribution Profile by id
 *	.
 * @action	list	List all distribution providers
 *	.
 * @action	listByPartner	.
*/
function KalturaDistributionProfileService(client){
	this.init(client);
}
KalturaDistributionProfileService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Distribution Profile
 *	.
 * @param	distributionProfile	KalturaDistributionProfile		 (optional).
 * @return	KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.add = function(callback, distributionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "distributionProfile", toParams(distributionProfile));
	this.client.queueServiceActionCall("distributionProfile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Distribution Profile by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("distributionProfile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Distribution Profile by id
 *	.
 * @param	id	int		 (optional).
 * @param	distributionProfile	KalturaDistributionProfile		 (optional).
 * @return	KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.update = function(callback, id, distributionProfile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "distributionProfile", toParams(distributionProfile));
	this.client.queueServiceActionCall("distributionProfile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Distribution Profile status by id
 *	.
 * @param	id	int		 (optional).
 * @param	status	int		 (optional, enum: KalturaDistributionProfileStatus).
 * @return	KalturaDistributionProfile.
 */
KalturaDistributionProfileService.prototype.updateStatus = function(callback, id, status){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "status", status);
	this.client.queueServiceActionCall("distributionProfile", "updateStatus", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Distribution Profile by id
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaDistributionProfileService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("distributionProfile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *	.
 * @param	filter	KalturaDistributionProfileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("distributionProfile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * .
 * @param	filter	KalturaPartnerFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDistributionProfileListResponse.
 */
KalturaDistributionProfileService.prototype.listByPartner = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("distributionProfile", "listByPartner", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: entryDistribution.
 * The available service actions:
 * @action	add	Add new Entry Distribution
 *	.
 * @action	get	Get Entry Distribution by id
 *	.
 * @action	validate	Validates Entry Distribution by id for submission
 *	.
 * @action	update	Update Entry Distribution by id
 *	.
 * @action	delete	Delete Entry Distribution by id
 *	.
 * @action	list	List all distribution providers
 *	.
 * @action	submitAdd	Submits Entry Distribution to the remote destination
 *	.
 * @action	submitUpdate	Submits Entry Distribution changes to the remote destination
 *	.
 * @action	submitFetchReport	Submits Entry Distribution report request
 *	.
 * @action	submitDelete	Deletes Entry Distribution from the remote destination
 *	.
 * @action	retrySubmit	Retries last submit action
 *	.
*/
function KalturaEntryDistributionService(client){
	this.init(client);
}
KalturaEntryDistributionService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Entry Distribution
 *	.
 * @param	entryDistribution	KalturaEntryDistribution		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.add = function(callback, entryDistribution){
	var kparams = new Object();
	this.client.addParam(kparams, "entryDistribution", toParams(entryDistribution));
	this.client.queueServiceActionCall("entryDistribution", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Entry Distribution by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryDistribution", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Validates Entry Distribution by id for submission
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.validate = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryDistribution", "validate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Entry Distribution by id
 *	.
 * @param	id	int		 (optional).
 * @param	entryDistribution	KalturaEntryDistribution		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.update = function(callback, id, entryDistribution){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "entryDistribution", toParams(entryDistribution));
	this.client.queueServiceActionCall("entryDistribution", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Entry Distribution by id
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaEntryDistributionService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryDistribution", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *	.
 * @param	filter	KalturaEntryDistributionFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaEntryDistributionListResponse.
 */
KalturaEntryDistributionService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("entryDistribution", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution to the remote destination
 *	.
 * @param	id	int		 (optional).
 * @param	submitWhenReady	bool		 (optional, default: false).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitAdd = function(callback, id, submitWhenReady){
	if(!submitWhenReady)
		submitWhenReady = false;
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "submitWhenReady", submitWhenReady);
	this.client.queueServiceActionCall("entryDistribution", "submitAdd", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution changes to the remote destination
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitUpdate = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryDistribution", "submitUpdate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Submits Entry Distribution report request
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitFetchReport = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryDistribution", "submitFetchReport", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Deletes Entry Distribution from the remote destination
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.submitDelete = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryDistribution", "submitDelete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retries last submit action
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaEntryDistribution.
 */
KalturaEntryDistributionService.prototype.retrySubmit = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("entryDistribution", "retrySubmit", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: distributionProvider.
 * The available service actions:
 * @action	list	List all distribution providers
 *	.
*/
function KalturaDistributionProviderService(client){
	this.init(client);
}
KalturaDistributionProviderService.inheritsFrom (KalturaServiceBase);
/**
 * List all distribution providers
 *	.
 * @param	filter	KalturaDistributionProviderFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDistributionProviderListResponse.
 */
KalturaDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("distributionProvider", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: genericDistributionProvider.
 * The available service actions:
 * @action	add	Add new Generic Distribution Provider
 *	.
 * @action	get	Get Generic Distribution Provider by id
 *	.
 * @action	update	Update Generic Distribution Provider by id
 *	.
 * @action	delete	Delete Generic Distribution Provider by id
 *	.
 * @action	list	List all distribution providers
 *	.
*/
function KalturaGenericDistributionProviderService(client){
	this.init(client);
}
KalturaGenericDistributionProviderService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Generic Distribution Provider
 *	.
 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional).
 * @return	KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.add = function(callback, genericDistributionProvider){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProvider", toParams(genericDistributionProvider));
	this.client.queueServiceActionCall("genericDistributionProvider", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("genericDistributionProvider", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider by id
 *	.
 * @param	id	int		 (optional).
 * @param	genericDistributionProvider	KalturaGenericDistributionProvider		 (optional).
 * @return	KalturaGenericDistributionProvider.
 */
KalturaGenericDistributionProviderService.prototype.update = function(callback, id, genericDistributionProvider){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "genericDistributionProvider", toParams(genericDistributionProvider));
	this.client.queueServiceActionCall("genericDistributionProvider", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider by id
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaGenericDistributionProviderService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("genericDistributionProvider", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *	.
 * @param	filter	KalturaGenericDistributionProviderFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaGenericDistributionProviderListResponse.
 */
KalturaGenericDistributionProviderService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("genericDistributionProvider", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: genericDistributionProviderAction.
 * The available service actions:
 * @action	add	Add new Generic Distribution Provider Action
 *	.
 * @action	addMrssTransform	Add MRSS transform file to generic distribution provider action
 *	.
 * @action	addMrssTransformFromFile	Add MRSS transform file to generic distribution provider action
 *	.
 * @action	addMrssValidate	Add MRSS validate file to generic distribution provider action
 *	.
 * @action	addMrssValidateFromFile	Add MRSS validate file to generic distribution provider action
 *	.
 * @action	addResultsTransform	Add results transform file to generic distribution provider action
 *	.
 * @action	addResultsTransformFromFile	Add MRSS transform file to generic distribution provider action
 *	.
 * @action	get	Get Generic Distribution Provider Action by id
 *	.
 * @action	getByProviderId	Get Generic Distribution Provider Action by provider id
 *	.
 * @action	updateByProviderId	Update Generic Distribution Provider Action by provider id
 *	.
 * @action	update	Update Generic Distribution Provider Action by id
 *	.
 * @action	delete	Delete Generic Distribution Provider Action by id
 *	.
 * @action	deleteByProviderId	Delete Generic Distribution Provider Action by provider id
 *	.
 * @action	list	List all distribution providers
 *	.
*/
function KalturaGenericDistributionProviderActionService(client){
	this.init(client);
}
KalturaGenericDistributionProviderActionService.inheritsFrom (KalturaServiceBase);
/**
 * Add new Generic Distribution Provider Action
 *	.
 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.add = function(callback, genericDistributionProviderAction){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderAction", toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall("genericDistributionProviderAction", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action
 *	.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xslData	string		XSL MRSS transformation data (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransform = function(callback, id, xslData){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "xslData", xslData);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssTransform", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action
 *	.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xslFile	file		XSL MRSS transformation file (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssTransformFromFile = function(callback, id, xslFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xslFile", xslFile);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssTransformFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS validate file to generic distribution provider action
 *	.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xsdData	string		XSD MRSS validatation data (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidate = function(callback, id, xsdData){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "xsdData", xsdData);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssValidate", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS validate file to generic distribution provider action
 *	.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	xsdFile	file		XSD MRSS validatation file (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addMrssValidateFromFile = function(callback, id, xsdFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "xsdFile", xsdFile);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "addMrssValidateFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add results transform file to generic distribution provider action
 *	.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	transformData	string		transformation data xsl, xPath or regex (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransform = function(callback, id, transformData){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "transformData", transformData);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "addResultsTransform", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Add MRSS transform file to generic distribution provider action
 *	.
 * @param	id	int		the id of the generic distribution provider action (optional).
 * @param	transformFile	file		transformation file xsl, xPath or regex (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.addResultsTransformFromFile = function(callback, id, transformFile){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	kfiles = new Object();
	this.client.addParam(kfiles, "transformFile", transformFile);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "addResultsTransformFromFile", kparams, kfiles);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider Action by id
 *	.
 * @param	id	int		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Get Generic Distribution Provider Action by provider id
 *	.
 * @param	genericDistributionProviderId	int		 (optional).
 * @param	actionType	int		 (optional, enum: KalturaDistributionAction).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.getByProviderId = function(callback, genericDistributionProviderId, actionType){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
	this.client.addParam(kparams, "actionType", actionType);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "getByProviderId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider Action by provider id
 *	.
 * @param	genericDistributionProviderId	int		 (optional).
 * @param	actionType	int		 (optional, enum: KalturaDistributionAction).
 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.updateByProviderId = function(callback, genericDistributionProviderId, actionType, genericDistributionProviderAction){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
	this.client.addParam(kparams, "actionType", actionType);
	this.client.addParam(kparams, "genericDistributionProviderAction", toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall("genericDistributionProviderAction", "updateByProviderId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update Generic Distribution Provider Action by id
 *	.
 * @param	id	int		 (optional).
 * @param	genericDistributionProviderAction	KalturaGenericDistributionProviderAction		 (optional).
 * @return	KalturaGenericDistributionProviderAction.
 */
KalturaGenericDistributionProviderActionService.prototype.update = function(callback, id, genericDistributionProviderAction){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "genericDistributionProviderAction", toParams(genericDistributionProviderAction));
	this.client.queueServiceActionCall("genericDistributionProviderAction", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider Action by id
 *	.
 * @param	id	int		 (optional).
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Delete Generic Distribution Provider Action by provider id
 *	.
 * @param	genericDistributionProviderId	int		 (optional).
 * @param	actionType	int		 (optional, enum: KalturaDistributionAction).
 * @return	.
 */
KalturaGenericDistributionProviderActionService.prototype.deleteByProviderId = function(callback, genericDistributionProviderId, actionType){
	var kparams = new Object();
	this.client.addParam(kparams, "genericDistributionProviderId", genericDistributionProviderId);
	this.client.addParam(kparams, "actionType", actionType);
	this.client.queueServiceActionCall("genericDistributionProviderAction", "deleteByProviderId", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List all distribution providers
 *	.
 * @param	filter	KalturaGenericDistributionProviderActionFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaGenericDistributionProviderActionListResponse.
 */
KalturaGenericDistributionProviderActionService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("genericDistributionProviderAction", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: annotation.
 * The available service actions:
 * @action	list	List annotation objects by filter and pager
 *	.
 * @action	add	Allows you to add an annotation object and Annotation content associated with Kaltura object
 *	.
 * @action	get	Retrieve an Annotation object by id
 *	.
 * @action	delete	delete annotation by id, and delete all children annotations
 *	.
 * @action	update	Update annotation by id 
 *	.
*/
function KalturaAnnotationService(client){
	this.init(client);
}
KalturaAnnotationService.inheritsFrom (KalturaServiceBase);
/**
 * List annotation objects by filter and pager
 *	.
 * @param	filter	KalturaAnnotationFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaAnnotationListResponse.
 */
KalturaAnnotationService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("annotation", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add an annotation object and Annotation content associated with Kaltura object
 *	.
 * @param	annotation	KalturaAnnotation		 (optional).
 * @return	KalturaAnnotation.
 */
KalturaAnnotationService.prototype.add = function(callback, annotation){
	var kparams = new Object();
	this.client.addParam(kparams, "annotation", toParams(annotation));
	this.client.queueServiceActionCall("annotation", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an Annotation object by id
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaAnnotation.
 */
KalturaAnnotationService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("annotation", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * delete annotation by id, and delete all children annotations
 *	.
 * @param	id	string		 (optional).
 * @return	.
 */
KalturaAnnotationService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("annotation", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update annotation by id 
 *	.
 * @param	id	string		 (optional).
 * @param	annotation	KalturaAnnotation		 (optional).
 * @return	KalturaAnnotation.
 */
KalturaAnnotationService.prototype.update = function(callback, id, annotation){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "annotation", toParams(annotation));
	this.client.queueServiceActionCall("annotation", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: shortLink.
 * The available service actions:
 * @action	list	List short link objects by filter and pager
 *	.
 * @action	add	Allows you to add a short link object
 *	.
 * @action	get	Retrieve an short link object by id
 *	.
 * @action	update	Update exisitng short link
 *	.
 * @action	delete	Mark the short link as deleted
 *	.
*/
function KalturaShortLinkService(client){
	this.init(client);
}
KalturaShortLinkService.inheritsFrom (KalturaServiceBase);
/**
 * List short link objects by filter and pager
 *	.
 * @param	filter	KalturaShortLinkFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaShortLinkListResponse.
 */
KalturaShortLinkService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("shortLink", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Allows you to add a short link object
 *	.
 * @param	shortLink	KalturaShortLink		 (optional).
 * @return	KalturaShortLink.
 */
KalturaShortLinkService.prototype.add = function(callback, shortLink){
	var kparams = new Object();
	this.client.addParam(kparams, "shortLink", toParams(shortLink));
	this.client.queueServiceActionCall("shortLink", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve an short link object by id
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaShortLink.
 */
KalturaShortLinkService.prototype.get = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("shortLink", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update exisitng short link
 *	.
 * @param	id	string		 (optional).
 * @param	shortLink	KalturaShortLink		 (optional).
 * @return	KalturaShortLink.
 */
KalturaShortLinkService.prototype.update = function(callback, id, shortLink){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.addParam(kparams, "shortLink", toParams(shortLink));
	this.client.queueServiceActionCall("shortLink", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the short link as deleted
 *	.
 * @param	id	string		 (optional).
 * @return	KalturaShortLink.
 */
KalturaShortLinkService.prototype.deleteAction = function(callback, id){
	var kparams = new Object();
	this.client.addParam(kparams, "id", id);
	this.client.queueServiceActionCall("shortLink", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: dropFolder.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaDropFolder object
 *	.
 * @action	get	Retrieve a KalturaDropFolder object by ID
 *	.
 * @action	update	Update an existing KalturaDropFolder object
 *	.
 * @action	delete	Mark the KalturaDropFolder object as deleted
 *	.
 * @action	list	List KalturaDropFolder objects
 *	.
*/
function KalturaDropFolderService(client){
	this.init(client);
}
KalturaDropFolderService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaDropFolder object
 *	.
 * @param	dropFolder	KalturaDropFolder		 (optional).
 * @return	KalturaDropFolder.
 */
KalturaDropFolderService.prototype.add = function(callback, dropFolder){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolder", toParams(dropFolder));
	this.client.queueServiceActionCall("dropFolder", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDropFolder object by ID
 *	.
 * @param	dropFolderId	int		 (optional).
 * @return	KalturaDropFolder.
 */
KalturaDropFolderService.prototype.get = function(callback, dropFolderId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.queueServiceActionCall("dropFolder", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDropFolder object
 *	.
 * @param	dropFolderId	int		 (optional).
 * @param	dropFolder	KalturaDropFolder		Id (optional).
 * @return	KalturaDropFolder.
 */
KalturaDropFolderService.prototype.update = function(callback, dropFolderId, dropFolder){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.addParam(kparams, "dropFolder", toParams(dropFolder));
	this.client.queueServiceActionCall("dropFolder", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaDropFolder object as deleted
 *	.
 * @param	dropFolderId	int		 (optional).
 * @return	KalturaDropFolder.
 */
KalturaDropFolderService.prototype.deleteAction = function(callback, dropFolderId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderId", dropFolderId);
	this.client.queueServiceActionCall("dropFolder", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaDropFolder objects
 *	.
 * @param	filter	KalturaDropFolderFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDropFolderListResponse.
 */
KalturaDropFolderService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("dropFolder", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: dropFolderFile.
 * The available service actions:
 * @action	add	Allows you to add a new KalturaDropFolderFile object
 *	.
 * @action	get	Retrieve a KalturaDropFolderFile object by ID
 *	.
 * @action	update	Update an existing KalturaDropFolderFile object
 *	.
 * @action	delete	Mark the KalturaDropFolderFile object as deleted
 *	.
 * @action	list	List KalturaDropFolderFile objects
 *	.
 * @action	ignore	Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE)
 *	.
*/
function KalturaDropFolderFileService(client){
	this.init(client);
}
KalturaDropFolderFileService.inheritsFrom (KalturaServiceBase);
/**
 * Allows you to add a new KalturaDropFolderFile object
 *	.
 * @param	dropFolderFile	KalturaDropFolderFile		 (optional).
 * @return	KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.add = function(callback, dropFolderFile){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFile", toParams(dropFolderFile));
	this.client.queueServiceActionCall("dropFolderFile", "add", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Retrieve a KalturaDropFolderFile object by ID
 *	.
 * @param	dropFolderFileId	int		 (optional).
 * @return	KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.get = function(callback, dropFolderFileId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.queueServiceActionCall("dropFolderFile", "get", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Update an existing KalturaDropFolderFile object
 *	.
 * @param	dropFolderFileId	int		 (optional).
 * @param	dropFolderFile	KalturaDropFolderFile		Id (optional).
 * @return	KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.update = function(callback, dropFolderFileId, dropFolderFile){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.addParam(kparams, "dropFolderFile", toParams(dropFolderFile));
	this.client.queueServiceActionCall("dropFolderFile", "update", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Mark the KalturaDropFolderFile object as deleted
 *	.
 * @param	dropFolderFileId	int		 (optional).
 * @return	KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.deleteAction = function(callback, dropFolderFileId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.queueServiceActionCall("dropFolderFile", "delete", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * List KalturaDropFolderFile objects
 *	.
 * @param	filter	KalturaDropFolderFileFilter		 (optional, default: null).
 * @param	pager	KalturaFilterPager		 (optional, default: null).
 * @return	KalturaDropFolderFileListResponse.
 */
KalturaDropFolderFileService.prototype.listAction = function(callback, filter, pager){
	if(!filter)
		filter = null;
	if(!pager)
		pager = null;
	var kparams = new Object();
	if (filter != null)
		this.client.addParam(kparams, "filter", toParams(filter));
	if (pager != null)
		this.client.addParam(kparams, "pager", toParams(pager));
	this.client.queueServiceActionCall("dropFolderFile", "list", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * Set the KalturaDropFolderFile status to ignore (KalturaDropFolderFileStatus::IGNORE)
 *	.
 * @param	dropFolderFileId	int		 (optional).
 * @return	KalturaDropFolderFile.
 */
KalturaDropFolderFileService.prototype.ignore = function(callback, dropFolderFileId){
	var kparams = new Object();
	this.client.addParam(kparams, "dropFolderFileId", dropFolderFileId);
	this.client.queueServiceActionCall("dropFolderFile", "ignore", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: tvCom.
 * The available service actions:
 * @action	getFeed	.
*/
function KalturaTvComService(client){
	this.init(client);
}
KalturaTvComService.inheritsFrom (KalturaServiceBase);
/**
 * .
 * @param	distributionProfileId	int		 (optional).
 * @param	hash	string		 (optional).
 * @return	.
 */
KalturaTvComService.prototype.getFeed = function(callback, distributionProfileId, hash){
	var kparams = new Object();
	this.client.addParam(kparams, "distributionProfileId", distributionProfileId);
	this.client.addParam(kparams, "hash", hash);
	this.client.queueServiceActionCall("tvCom", "getFeed", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

/**
 *Class definition for the Kaltura service: sharepointExtension.
 * The available service actions:
 * @action	isVersionSupported	Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension)
 *	@action isVersionSupported.
 * @action	listUiconfs	list uiconfs for sharepoint extension
 *	@action listUiconfs.
*/
function KalturaSharepointExtensionService(client){
	this.init(client);
}
KalturaSharepointExtensionService.inheritsFrom (KalturaServiceBase);
/**
 * Is this Kaltura-Sharepoint-Server-Plugin supports minimum version of $major.$minor.$build (which is required by the extension)
 *	@action isVersionSupported.
 * @param	serverMajor	int		 (optional).
 * @param	serverMinor	int		 (optional).
 * @param	serverBuild	int		 (optional).
 * @return	bool.
 */
KalturaSharepointExtensionService.prototype.isVersionSupported = function(callback, serverMajor, serverMinor, serverBuild){
	var kparams = new Object();
	this.client.addParam(kparams, "serverMajor", serverMajor);
	this.client.addParam(kparams, "serverMinor", serverMinor);
	this.client.addParam(kparams, "serverBuild", serverBuild);
	this.client.queueServiceActionCall("sharepointExtension", "isVersionSupported", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}
/**
 * list uiconfs for sharepoint extension
 *	@action listUiconfs.
 * @return	KalturaUiConfListResponse.
 */
KalturaSharepointExtensionService.prototype.listUiconfs = function(callback){
	var kparams = new Object();
	this.client.queueServiceActionCall("sharepointExtension", "listUiconfs", kparams);
	if (!this.client.isMultiRequest())
		this.client.doQueue(callback);
}

