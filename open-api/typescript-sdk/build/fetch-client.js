/**
 * Immich
 * 1.103.1
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
import * as QS from "@oazapfts/runtime/query";
export const defaults = {
    headers: {},
    baseUrl: "/api",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {
    server1: "/api"
};
export function getActivities({ albumId, assetId, level, $type, userId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/activity${QS.query(QS.explode({
        albumId,
        assetId,
        level,
        "type": $type,
        userId
    }))}`, {
        ...opts
    }));
}
export function createActivity({ activityCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/activity", oazapfts.json({
        ...opts,
        method: "POST",
        body: activityCreateDto
    })));
}
export function getActivityStatistics({ albumId, assetId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/activity/statistics${QS.query(QS.explode({
        albumId,
        assetId
    }))}`, {
        ...opts
    }));
}
export function deleteActivity({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/activity/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getAllAlbums({ assetId, shared }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/album${QS.query(QS.explode({
        assetId,
        shared
    }))}`, {
        ...opts
    }));
}
export function createAlbum({ createAlbumDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/album", oazapfts.json({
        ...opts,
        method: "POST",
        body: createAlbumDto
    })));
}
export function getAlbumCount(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/album/count", {
        ...opts
    }));
}
export function deleteAlbum({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/album/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getAlbumInfo({ id, key, withoutAssets }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/album/${encodeURIComponent(id)}${QS.query(QS.explode({
        key,
        withoutAssets
    }))}`, {
        ...opts
    }));
}
export function updateAlbumInfo({ id, updateAlbumDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/album/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: updateAlbumDto
    })));
}
export function removeAssetFromAlbum({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/album/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: bulkIdsDto
    })));
}
export function addAssetsToAlbum({ id, key, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/album/${encodeURIComponent(id)}/assets${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bulkIdsDto
    })));
}
export function removeUserFromAlbum({ id, userId }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/album/${encodeURIComponent(id)}/user/${encodeURIComponent(userId)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function updateAlbumUser({ id, userId, updateAlbumUserDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/album/${encodeURIComponent(id)}/user/${encodeURIComponent(userId)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateAlbumUserDto
    })));
}
export function addUsersToAlbum({ id, addUsersDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/album/${encodeURIComponent(id)}/users`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: addUsersDto
    })));
}
export function getApiKeys(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api-key", {
        ...opts
    }));
}
export function createApiKey({ apiKeyCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/api-key", oazapfts.json({
        ...opts,
        method: "POST",
        body: apiKeyCreateDto
    })));
}
export function deleteApiKey({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/api-key/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getApiKey({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api-key/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateApiKey({ id, apiKeyUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/api-key/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: apiKeyUpdateDto
    })));
}
export function deleteAssets({ assetBulkDeleteDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/asset", oazapfts.json({
        ...opts,
        method: "DELETE",
        body: assetBulkDeleteDto
    })));
}
/**
 * Get all AssetEntity belong to the user
 */
export function getAllAssets({ ifNoneMatch, isArchived, isFavorite, skip, take, updatedAfter, updatedBefore, userId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset${QS.query(QS.explode({
        isArchived,
        isFavorite,
        skip,
        take,
        updatedAfter,
        updatedBefore,
        userId
    }))}`, {
        ...opts,
        headers: oazapfts.mergeHeaders(opts?.headers, {
            "if-none-match": ifNoneMatch
        })
    }));
}
export function updateAssets({ assetBulkUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/asset", oazapfts.json({
        ...opts,
        method: "PUT",
        body: assetBulkUpdateDto
    })));
}
/**
 * Checks if assets exist by checksums
 */
export function checkBulkUpload({ assetBulkUploadCheckDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/asset/bulk-upload-check", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetBulkUploadCheckDto
    })));
}
/**
 * Get all asset of a device that are in the database, ID only.
 */
export function getAllUserAssetsByDeviceId({ deviceId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/device/${encodeURIComponent(deviceId)}`, {
        ...opts
    }));
}
/**
 * Checks if multiple assets exist on the server and returns all existing - used by background backup
 */
export function checkExistingAssets({ checkExistingAssetsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/asset/exist", oazapfts.json({
        ...opts,
        method: "POST",
        body: checkExistingAssetsDto
    })));
}
export function serveFile({ id, isThumb, isWeb, key }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/asset/file/${encodeURIComponent(id)}${QS.query(QS.explode({
        isThumb,
        isWeb,
        key
    }))}`, {
        ...opts
    }));
}
export function runAssetJobs({ assetJobsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/asset/jobs", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetJobsDto
    })));
}
export function getMapMarkers({ fileCreatedAfter, fileCreatedBefore, isArchived, isFavorite, withPartners, withSharedAlbums }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/map-marker${QS.query(QS.explode({
        fileCreatedAfter,
        fileCreatedBefore,
        isArchived,
        isFavorite,
        withPartners,
        withSharedAlbums
    }))}`, {
        ...opts
    }));
}
export function getMemoryLane({ day, month }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/memory-lane${QS.query(QS.explode({
        day,
        month
    }))}`, {
        ...opts
    }));
}
export function getRandom({ count }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/random${QS.query(QS.explode({
        count
    }))}`, {
        ...opts
    }));
}
export function updateStackParent({ updateStackParentDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/asset/stack/parent", oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateStackParentDto
    })));
}
export function getAssetStatistics({ isArchived, isFavorite, isTrashed }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/statistics${QS.query(QS.explode({
        isArchived,
        isFavorite,
        isTrashed
    }))}`, {
        ...opts
    }));
}
export function getAssetThumbnail({ format, id, key }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/asset/thumbnail/${encodeURIComponent(id)}${QS.query(QS.explode({
        format,
        key
    }))}`, {
        ...opts
    }));
}
export function uploadFile({ key, xImmichChecksum, createAssetDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/upload${QS.query(QS.explode({
        key
    }))}`, oazapfts.multipart({
        ...opts,
        method: "POST",
        body: createAssetDto,
        headers: oazapfts.mergeHeaders(opts?.headers, {
            "x-immich-checksum": xImmichChecksum
        })
    })));
}
export function getAssetInfo({ id, key }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/${encodeURIComponent(id)}${QS.query(QS.explode({
        key
    }))}`, {
        ...opts
    }));
}
export function updateAsset({ id, updateAssetDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/asset/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateAssetDto
    })));
}
export function getAuditDeletes({ after, entityType, userId }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/audit/deletes${QS.query(QS.explode({
        after,
        entityType,
        userId
    }))}`, {
        ...opts
    }));
}
export function signUpAdmin({ signUpDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/admin-sign-up", oazapfts.json({
        ...opts,
        method: "POST",
        body: signUpDto
    })));
}
export function changePassword({ changePasswordDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/change-password", oazapfts.json({
        ...opts,
        method: "POST",
        body: changePasswordDto
    })));
}
export function login({ loginCredentialDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/login", oazapfts.json({
        ...opts,
        method: "POST",
        body: loginCredentialDto
    })));
}
export function logout(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/logout", {
        ...opts,
        method: "POST"
    }));
}
export function validateAccessToken(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/auth/validateToken", {
        ...opts,
        method: "POST"
    }));
}
export function downloadArchive({ key, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/download/archive${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: assetIdsDto
    })));
}
export function downloadFile({ id, key }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/download/asset/${encodeURIComponent(id)}${QS.query(QS.explode({
        key
    }))}`, {
        ...opts,
        method: "POST"
    }));
}
export function getDownloadInfo({ key, downloadInfoDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/download/info${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "POST",
        body: downloadInfoDto
    })));
}
export function getFaces({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/face${QS.query(QS.explode({
        id
    }))}`, {
        ...opts
    }));
}
export function reassignFacesById({ id, faceDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/face/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: faceDto
    })));
}
export function getAllJobsStatus(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/jobs", {
        ...opts
    }));
}
export function sendJobCommand({ id, jobCommandDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/jobs/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: jobCommandDto
    })));
}
export function getAllLibraries({ $type }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/library${QS.query(QS.explode({
        "type": $type
    }))}`, {
        ...opts
    }));
}
export function createLibrary({ createLibraryDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/library", oazapfts.json({
        ...opts,
        method: "POST",
        body: createLibraryDto
    })));
}
export function deleteLibrary({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/library/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getLibrary({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/library/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateLibrary({ id, updateLibraryDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/library/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateLibraryDto
    })));
}
export function removeOfflineFiles({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/library/${encodeURIComponent(id)}/removeOffline`, {
        ...opts,
        method: "POST"
    }));
}
export function scanLibrary({ id, scanLibraryDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/library/${encodeURIComponent(id)}/scan`, oazapfts.json({
        ...opts,
        method: "POST",
        body: scanLibraryDto
    })));
}
export function getLibraryStatistics({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/library/${encodeURIComponent(id)}/statistics`, {
        ...opts
    }));
}
export function validate({ id, validateLibraryDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/library/${encodeURIComponent(id)}/validate`, oazapfts.json({
        ...opts,
        method: "POST",
        body: validateLibraryDto
    })));
}
export function searchMemories(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/memories", {
        ...opts
    }));
}
export function createMemory({ memoryCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/memories", oazapfts.json({
        ...opts,
        method: "POST",
        body: memoryCreateDto
    })));
}
export function deleteMemory({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/memories/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getMemory({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateMemory({ id, memoryUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: memoryUpdateDto
    })));
}
export function removeMemoryAssets({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: bulkIdsDto
    })));
}
export function addMemoryAssets({ id, bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/memories/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: bulkIdsDto
    })));
}
export function startOAuth({ oAuthConfigDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/authorize", oazapfts.json({
        ...opts,
        method: "POST",
        body: oAuthConfigDto
    })));
}
export function finishOAuth({ oAuthCallbackDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/callback", oazapfts.json({
        ...opts,
        method: "POST",
        body: oAuthCallbackDto
    })));
}
export function linkOAuthAccount({ oAuthCallbackDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/link", oazapfts.json({
        ...opts,
        method: "POST",
        body: oAuthCallbackDto
    })));
}
export function redirectOAuthToMobile(opts) {
    return oazapfts.ok(oazapfts.fetchText("/oauth/mobile-redirect", {
        ...opts
    }));
}
export function unlinkOAuthAccount(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/oauth/unlink", {
        ...opts,
        method: "POST"
    }));
}
export function getPartners({ direction }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/partner${QS.query(QS.explode({
        direction
    }))}`, {
        ...opts
    }));
}
export function removePartner({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/partner/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function createPartner({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/partner/${encodeURIComponent(id)}`, {
        ...opts,
        method: "POST"
    }));
}
export function updatePartner({ id, updatePartnerDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/partner/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: updatePartnerDto
    })));
}
export function getAllPeople({ withHidden }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/person${QS.query(QS.explode({
        withHidden
    }))}`, {
        ...opts
    }));
}
export function createPerson({ personCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/person", oazapfts.json({
        ...opts,
        method: "POST",
        body: personCreateDto
    })));
}
export function updatePeople({ peopleUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/person", oazapfts.json({
        ...opts,
        method: "PUT",
        body: peopleUpdateDto
    })));
}
export function getPerson({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/person/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updatePerson({ id, personUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/person/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: personUpdateDto
    })));
}
export function getPersonAssets({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/person/${encodeURIComponent(id)}/assets`, {
        ...opts
    }));
}
export function mergePerson({ id, mergePersonDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/person/${encodeURIComponent(id)}/merge`, oazapfts.json({
        ...opts,
        method: "POST",
        body: mergePersonDto
    })));
}
export function reassignFaces({ id, assetFaceUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/person/${encodeURIComponent(id)}/reassign`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: assetFaceUpdateDto
    })));
}
export function getPersonStatistics({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/person/${encodeURIComponent(id)}/statistics`, {
        ...opts
    }));
}
export function getPersonThumbnail({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/person/${encodeURIComponent(id)}/thumbnail`, {
        ...opts
    }));
}
export function getAuditFiles(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/report", {
        ...opts
    }));
}
export function getFileChecksums({ fileChecksumDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/report/checksum", oazapfts.json({
        ...opts,
        method: "POST",
        body: fileChecksumDto
    })));
}
export function fixAuditFiles({ fileReportFixDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/report/fix", oazapfts.json({
        ...opts,
        method: "POST",
        body: fileReportFixDto
    })));
}
export function getAssetsByCity(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/cities", {
        ...opts
    }));
}
export function getExploreData(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/explore", {
        ...opts
    }));
}
export function searchMetadata({ metadataSearchDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/metadata", oazapfts.json({
        ...opts,
        method: "POST",
        body: metadataSearchDto
    })));
}
export function searchPerson({ name, withHidden }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/search/person${QS.query(QS.explode({
        name,
        withHidden
    }))}`, {
        ...opts
    }));
}
export function searchPlaces({ name }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/search/places${QS.query(QS.explode({
        name
    }))}`, {
        ...opts
    }));
}
export function searchSmart({ smartSearchDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/search/smart", oazapfts.json({
        ...opts,
        method: "POST",
        body: smartSearchDto
    })));
}
export function getSearchSuggestions({ country, make, model, state, $type }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/search/suggestions${QS.query(QS.explode({
        country,
        make,
        model,
        state,
        "type": $type
    }))}`, {
        ...opts
    }));
}
export function getServerInfo(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info", {
        ...opts
    }));
}
export function getServerConfig(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info/config", {
        ...opts
    }));
}
export function getServerFeatures(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info/features", {
        ...opts
    }));
}
export function getSupportedMediaTypes(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info/media-types", {
        ...opts
    }));
}
export function pingServer(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info/ping", {
        ...opts
    }));
}
export function getServerStatistics(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info/statistics", {
        ...opts
    }));
}
export function getTheme(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info/theme", {
        ...opts
    }));
}
export function getServerVersion(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/server-info/version", {
        ...opts
    }));
}
export function deleteAllSessions(opts) {
    return oazapfts.ok(oazapfts.fetchText("/sessions", {
        ...opts,
        method: "DELETE"
    }));
}
export function getSessions(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/sessions", {
        ...opts
    }));
}
export function deleteSession({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/sessions/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getAllSharedLinks(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/shared-link", {
        ...opts
    }));
}
export function createSharedLink({ sharedLinkCreateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/shared-link", oazapfts.json({
        ...opts,
        method: "POST",
        body: sharedLinkCreateDto
    })));
}
export function getMySharedLink({ key, password, token }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-link/me${QS.query(QS.explode({
        key,
        password,
        token
    }))}`, {
        ...opts
    }));
}
export function removeSharedLink({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/shared-link/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getSharedLinkById({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-link/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateSharedLink({ id, sharedLinkEditDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-link/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: sharedLinkEditDto
    })));
}
export function removeSharedLinkAssets({ id, key, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-link/${encodeURIComponent(id)}/assets${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: assetIdsDto
    })));
}
export function addSharedLinkAssets({ id, key, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/shared-link/${encodeURIComponent(id)}/assets${QS.query(QS.explode({
        key
    }))}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: assetIdsDto
    })));
}
export function getDeltaSync({ assetDeltaSyncDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/sync/delta-sync", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetDeltaSyncDto
    })));
}
export function getFullSyncForUser({ assetFullSyncDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/sync/full-sync", oazapfts.json({
        ...opts,
        method: "POST",
        body: assetFullSyncDto
    })));
}
export function getConfig(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config", {
        ...opts
    }));
}
export function updateConfig({ systemConfigDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config", oazapfts.json({
        ...opts,
        method: "PUT",
        body: systemConfigDto
    })));
}
export function getConfigDefaults(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config/defaults", {
        ...opts
    }));
}
export function getMapStyle({ key, theme }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/system-config/map/style.json${QS.query(QS.explode({
        key,
        theme
    }))}`, {
        ...opts
    }));
}
export function getStorageTemplateOptions(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-config/storage-template-options", {
        ...opts
    }));
}
export function getAdminOnboarding(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-metadata/admin-onboarding", {
        ...opts
    }));
}
export function updateAdminOnboarding({ adminOnboardingUpdateDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/system-metadata/admin-onboarding", oazapfts.json({
        ...opts,
        method: "POST",
        body: adminOnboardingUpdateDto
    })));
}
export function getReverseGeocodingState(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/system-metadata/reverse-geocoding-state", {
        ...opts
    }));
}
export function getAllTags(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/tag", {
        ...opts
    }));
}
export function createTag({ createTagDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/tag", oazapfts.json({
        ...opts,
        method: "POST",
        body: createTagDto
    })));
}
export function deleteTag({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchText(`/tag/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    }));
}
export function getTagById({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tag/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function updateTag({ id, updateTagDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tag/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PATCH",
        body: updateTagDto
    })));
}
export function untagAssets({ id, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tag/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: assetIdsDto
    })));
}
export function getTagAssets({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tag/${encodeURIComponent(id)}/assets`, {
        ...opts
    }));
}
export function tagAssets({ id, assetIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/tag/${encodeURIComponent(id)}/assets`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: assetIdsDto
    })));
}
export function getTimeBucket({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, timeBucket, userId, withPartners, withStacked }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/timeline/bucket${QS.query(QS.explode({
        albumId,
        isArchived,
        isFavorite,
        isTrashed,
        key,
        order,
        personId,
        size,
        timeBucket,
        userId,
        withPartners,
        withStacked
    }))}`, {
        ...opts
    }));
}
export function getTimeBuckets({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, userId, withPartners, withStacked }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/timeline/buckets${QS.query(QS.explode({
        albumId,
        isArchived,
        isFavorite,
        isTrashed,
        key,
        order,
        personId,
        size,
        userId,
        withPartners,
        withStacked
    }))}`, {
        ...opts
    }));
}
export function emptyTrash(opts) {
    return oazapfts.ok(oazapfts.fetchText("/trash/empty", {
        ...opts,
        method: "POST"
    }));
}
export function restoreTrash(opts) {
    return oazapfts.ok(oazapfts.fetchText("/trash/restore", {
        ...opts,
        method: "POST"
    }));
}
export function restoreAssets({ bulkIdsDto }, opts) {
    return oazapfts.ok(oazapfts.fetchText("/trash/restore/assets", oazapfts.json({
        ...opts,
        method: "POST",
        body: bulkIdsDto
    })));
}
export function getAllUsers({ isAll }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/user${QS.query(QS.explode({
        isAll
    }))}`, {
        ...opts
    }));
}
export function createUser({ createUserDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/user", oazapfts.json({
        ...opts,
        method: "POST",
        body: createUserDto
    })));
}
export function updateUser({ updateUserDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/user", oazapfts.json({
        ...opts,
        method: "PUT",
        body: updateUserDto
    })));
}
export function getUserById({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/user/info/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function getMyUserInfo(opts) {
    return oazapfts.ok(oazapfts.fetchJson("/user/me", {
        ...opts
    }));
}
export function deleteProfileImage(opts) {
    return oazapfts.ok(oazapfts.fetchText("/user/profile-image", {
        ...opts,
        method: "DELETE"
    }));
}
export function createProfileImage({ createProfileImageDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson("/user/profile-image", oazapfts.multipart({
        ...opts,
        method: "POST",
        body: createProfileImageDto
    })));
}
export function getProfileImage({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchBlob(`/user/profile-image/${encodeURIComponent(id)}`, {
        ...opts
    }));
}
export function deleteUser({ id, deleteUserDto }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/user/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "DELETE",
        body: deleteUserDto
    })));
}
export function restoreUser({ id }, opts) {
    return oazapfts.ok(oazapfts.fetchJson(`/user/${encodeURIComponent(id)}/restore`, {
        ...opts,
        method: "POST"
    }));
}
export var ReactionLevel;
(function (ReactionLevel) {
    ReactionLevel["Album"] = "album";
    ReactionLevel["Asset"] = "asset";
})(ReactionLevel || (ReactionLevel = {}));
export var ReactionType;
(function (ReactionType) {
    ReactionType["Comment"] = "comment";
    ReactionType["Like"] = "like";
})(ReactionType || (ReactionType = {}));
export var Type;
(function (Type) {
    Type["Comment"] = "comment";
    Type["Like"] = "like";
})(Type || (Type = {}));
export var UserAvatarColor;
(function (UserAvatarColor) {
    UserAvatarColor["Primary"] = "primary";
    UserAvatarColor["Pink"] = "pink";
    UserAvatarColor["Red"] = "red";
    UserAvatarColor["Yellow"] = "yellow";
    UserAvatarColor["Blue"] = "blue";
    UserAvatarColor["Green"] = "green";
    UserAvatarColor["Purple"] = "purple";
    UserAvatarColor["Orange"] = "orange";
    UserAvatarColor["Gray"] = "gray";
    UserAvatarColor["Amber"] = "amber";
})(UserAvatarColor || (UserAvatarColor = {}));
export var AlbumUserRole;
(function (AlbumUserRole) {
    AlbumUserRole["Editor"] = "editor";
    AlbumUserRole["Viewer"] = "viewer";
})(AlbumUserRole || (AlbumUserRole = {}));
export var UserStatus;
(function (UserStatus) {
    UserStatus["Active"] = "active";
    UserStatus["Removing"] = "removing";
    UserStatus["Deleted"] = "deleted";
})(UserStatus || (UserStatus = {}));
export var TagTypeEnum;
(function (TagTypeEnum) {
    TagTypeEnum["Object"] = "OBJECT";
    TagTypeEnum["Face"] = "FACE";
    TagTypeEnum["Custom"] = "CUSTOM";
})(TagTypeEnum || (TagTypeEnum = {}));
export var AssetTypeEnum;
(function (AssetTypeEnum) {
    AssetTypeEnum["Image"] = "IMAGE";
    AssetTypeEnum["Video"] = "VIDEO";
    AssetTypeEnum["Audio"] = "AUDIO";
    AssetTypeEnum["Other"] = "OTHER";
})(AssetTypeEnum || (AssetTypeEnum = {}));
export var AssetOrder;
(function (AssetOrder) {
    AssetOrder["Asc"] = "asc";
    AssetOrder["Desc"] = "desc";
})(AssetOrder || (AssetOrder = {}));
export var Error;
(function (Error) {
    Error["Duplicate"] = "duplicate";
    Error["NoPermission"] = "no_permission";
    Error["NotFound"] = "not_found";
    Error["Unknown"] = "unknown";
})(Error || (Error = {}));
export var Action;
(function (Action) {
    Action["Accept"] = "accept";
    Action["Reject"] = "reject";
})(Action || (Action = {}));
export var Reason;
(function (Reason) {
    Reason["Duplicate"] = "duplicate";
    Reason["UnsupportedFormat"] = "unsupported-format";
})(Reason || (Reason = {}));
export var AssetJobName;
(function (AssetJobName) {
    AssetJobName["RegenerateThumbnail"] = "regenerate-thumbnail";
    AssetJobName["RefreshMetadata"] = "refresh-metadata";
    AssetJobName["TranscodeVideo"] = "transcode-video";
})(AssetJobName || (AssetJobName = {}));
export var ThumbnailFormat;
(function (ThumbnailFormat) {
    ThumbnailFormat["Jpeg"] = "JPEG";
    ThumbnailFormat["Webp"] = "WEBP";
})(ThumbnailFormat || (ThumbnailFormat = {}));
export var EntityType;
(function (EntityType) {
    EntityType["Asset"] = "ASSET";
    EntityType["Album"] = "ALBUM";
})(EntityType || (EntityType = {}));
export var JobName;
(function (JobName) {
    JobName["ThumbnailGeneration"] = "thumbnailGeneration";
    JobName["MetadataExtraction"] = "metadataExtraction";
    JobName["VideoConversion"] = "videoConversion";
    JobName["FaceDetection"] = "faceDetection";
    JobName["FacialRecognition"] = "facialRecognition";
    JobName["SmartSearch"] = "smartSearch";
    JobName["BackgroundTask"] = "backgroundTask";
    JobName["StorageTemplateMigration"] = "storageTemplateMigration";
    JobName["Migration"] = "migration";
    JobName["Search"] = "search";
    JobName["Sidecar"] = "sidecar";
    JobName["Library"] = "library";
    JobName["Notifications"] = "notifications";
})(JobName || (JobName = {}));
export var JobCommand;
(function (JobCommand) {
    JobCommand["Start"] = "start";
    JobCommand["Pause"] = "pause";
    JobCommand["Resume"] = "resume";
    JobCommand["Empty"] = "empty";
    JobCommand["ClearFailed"] = "clear-failed";
})(JobCommand || (JobCommand = {}));
export var LibraryType;
(function (LibraryType) {
    LibraryType["Upload"] = "UPLOAD";
    LibraryType["External"] = "EXTERNAL";
})(LibraryType || (LibraryType = {}));
export var Type2;
(function (Type2) {
    Type2["OnThisDay"] = "on_this_day";
})(Type2 || (Type2 = {}));
export var MemoryType;
(function (MemoryType) {
    MemoryType["OnThisDay"] = "on_this_day";
})(MemoryType || (MemoryType = {}));
export var PathEntityType;
(function (PathEntityType) {
    PathEntityType["Asset"] = "asset";
    PathEntityType["Person"] = "person";
    PathEntityType["User"] = "user";
})(PathEntityType || (PathEntityType = {}));
export var PathType;
(function (PathType) {
    PathType["Original"] = "original";
    PathType["Preview"] = "preview";
    PathType["Thumbnail"] = "thumbnail";
    PathType["EncodedVideo"] = "encoded_video";
    PathType["Sidecar"] = "sidecar";
    PathType["Face"] = "face";
    PathType["Profile"] = "profile";
})(PathType || (PathType = {}));
export var SearchSuggestionType;
(function (SearchSuggestionType) {
    SearchSuggestionType["Country"] = "country";
    SearchSuggestionType["State"] = "state";
    SearchSuggestionType["City"] = "city";
    SearchSuggestionType["CameraMake"] = "camera-make";
    SearchSuggestionType["CameraModel"] = "camera-model";
})(SearchSuggestionType || (SearchSuggestionType = {}));
export var SharedLinkType;
(function (SharedLinkType) {
    SharedLinkType["Album"] = "ALBUM";
    SharedLinkType["Individual"] = "INDIVIDUAL";
})(SharedLinkType || (SharedLinkType = {}));
export var Error2;
(function (Error2) {
    Error2["Duplicate"] = "duplicate";
    Error2["NoPermission"] = "no_permission";
    Error2["NotFound"] = "not_found";
})(Error2 || (Error2 = {}));
export var TranscodeHWAccel;
(function (TranscodeHWAccel) {
    TranscodeHWAccel["Nvenc"] = "nvenc";
    TranscodeHWAccel["Qsv"] = "qsv";
    TranscodeHWAccel["Vaapi"] = "vaapi";
    TranscodeHWAccel["Rkmpp"] = "rkmpp";
    TranscodeHWAccel["Disabled"] = "disabled";
})(TranscodeHWAccel || (TranscodeHWAccel = {}));
export var AudioCodec;
(function (AudioCodec) {
    AudioCodec["Mp3"] = "mp3";
    AudioCodec["Aac"] = "aac";
    AudioCodec["Libopus"] = "libopus";
})(AudioCodec || (AudioCodec = {}));
export var VideoCodec;
(function (VideoCodec) {
    VideoCodec["H264"] = "h264";
    VideoCodec["Hevc"] = "hevc";
    VideoCodec["Vp9"] = "vp9";
    VideoCodec["Av1"] = "av1";
})(VideoCodec || (VideoCodec = {}));
export var CQMode;
(function (CQMode) {
    CQMode["Auto"] = "auto";
    CQMode["Cqp"] = "cqp";
    CQMode["Icq"] = "icq";
})(CQMode || (CQMode = {}));
export var ToneMapping;
(function (ToneMapping) {
    ToneMapping["Hable"] = "hable";
    ToneMapping["Mobius"] = "mobius";
    ToneMapping["Reinhard"] = "reinhard";
    ToneMapping["Disabled"] = "disabled";
})(ToneMapping || (ToneMapping = {}));
export var TranscodePolicy;
(function (TranscodePolicy) {
    TranscodePolicy["All"] = "all";
    TranscodePolicy["Optimal"] = "optimal";
    TranscodePolicy["Bitrate"] = "bitrate";
    TranscodePolicy["Required"] = "required";
    TranscodePolicy["Disabled"] = "disabled";
})(TranscodePolicy || (TranscodePolicy = {}));
export var Colorspace;
(function (Colorspace) {
    Colorspace["Srgb"] = "srgb";
    Colorspace["P3"] = "p3";
})(Colorspace || (Colorspace = {}));
export var ImageFormat;
(function (ImageFormat) {
    ImageFormat["Jpeg"] = "jpeg";
    ImageFormat["Webp"] = "webp";
})(ImageFormat || (ImageFormat = {}));
export var LogLevel;
(function (LogLevel) {
    LogLevel["Verbose"] = "verbose";
    LogLevel["Debug"] = "debug";
    LogLevel["Log"] = "log";
    LogLevel["Warn"] = "warn";
    LogLevel["Error"] = "error";
    LogLevel["Fatal"] = "fatal";
})(LogLevel || (LogLevel = {}));
export var CLIPMode;
(function (CLIPMode) {
    CLIPMode["Vision"] = "vision";
    CLIPMode["Text"] = "text";
})(CLIPMode || (CLIPMode = {}));
export var ModelType;
(function (ModelType) {
    ModelType["FacialRecognition"] = "facial-recognition";
    ModelType["Clip"] = "clip";
})(ModelType || (ModelType = {}));
export var MapTheme;
(function (MapTheme) {
    MapTheme["Light"] = "light";
    MapTheme["Dark"] = "dark";
})(MapTheme || (MapTheme = {}));
export var TimeBucketSize;
(function (TimeBucketSize) {
    TimeBucketSize["Day"] = "DAY";
    TimeBucketSize["Month"] = "MONTH";
})(TimeBucketSize || (TimeBucketSize = {}));
