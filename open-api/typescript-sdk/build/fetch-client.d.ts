/**
 * Immich
 * 1.103.1
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "@oazapfts/runtime";
export declare const defaults: Oazapfts.Defaults<Oazapfts.CustomHeaders>;
export declare const servers: {
    server1: string;
};
export type UserDto = {
    avatarColor: UserAvatarColor;
    email: string;
    id: string;
    name: string;
    profileImagePath: string;
};
export type ActivityResponseDto = {
    assetId: string | null;
    comment?: string | null;
    createdAt: string;
    id: string;
    "type": Type;
    user: UserDto;
};
export type ActivityCreateDto = {
    albumId: string;
    assetId?: string;
    comment?: string;
    "type": ReactionType;
};
export type ActivityStatisticsResponseDto = {
    comments: number;
};
export type UserResponseDto = {
    avatarColor: UserAvatarColor;
    createdAt: string;
    deletedAt: string | null;
    email: string;
    id: string;
    isAdmin: boolean;
    memoriesEnabled?: boolean;
    name: string;
    oauthId: string;
    profileImagePath: string;
    quotaSizeInBytes: number | null;
    quotaUsageInBytes: number | null;
    shouldChangePassword: boolean;
    status: UserStatus;
    storageLabel: string | null;
    updatedAt: string;
};
export type AlbumUserResponseDto = {
    role: AlbumUserRole;
    user: UserResponseDto;
};
export type ExifResponseDto = {
    city?: string | null;
    country?: string | null;
    dateTimeOriginal?: string | null;
    description?: string | null;
    exifImageHeight?: number | null;
    exifImageWidth?: number | null;
    exposureTime?: string | null;
    fNumber?: number | null;
    fileSizeInByte?: number | null;
    focalLength?: number | null;
    iso?: number | null;
    latitude?: number | null;
    lensModel?: string | null;
    longitude?: number | null;
    make?: string | null;
    model?: string | null;
    modifyDate?: string | null;
    orientation?: string | null;
    projectionType?: string | null;
    state?: string | null;
    timeZone?: string | null;
};
export type AssetFaceWithoutPersonResponseDto = {
    boundingBoxX1: number;
    boundingBoxX2: number;
    boundingBoxY1: number;
    boundingBoxY2: number;
    id: string;
    imageHeight: number;
    imageWidth: number;
};
export type PersonWithFacesResponseDto = {
    birthDate: string | null;
    faces: AssetFaceWithoutPersonResponseDto[];
    id: string;
    isHidden: boolean;
    name: string;
    thumbnailPath: string;
};
export type SmartInfoResponseDto = {
    objects?: string[] | null;
    tags?: string[] | null;
};
export type TagResponseDto = {
    id: string;
    name: string;
    "type": TagTypeEnum;
    userId: string;
};
export type AssetResponseDto = {
    /** base64 encoded sha1 hash */
    checksum: string;
    deviceAssetId: string;
    deviceId: string;
    duration: string;
    exifInfo?: ExifResponseDto;
    fileCreatedAt: string;
    fileModifiedAt: string;
    hasMetadata: boolean;
    id: string;
    isArchived: boolean;
    /** This property was deprecated in v1.104.0 */
    isExternal?: boolean;
    isFavorite: boolean;
    isOffline: boolean;
    /** This property was deprecated in v1.104.0 */
    isReadOnly?: boolean;
    isTrashed: boolean;
    libraryId: string;
    livePhotoVideoId?: string | null;
    localDateTime: string;
    originalFileName: string;
    originalPath: string;
    owner?: UserResponseDto;
    ownerId: string;
    people?: PersonWithFacesResponseDto[];
    resized: boolean;
    smartInfo?: SmartInfoResponseDto;
    stack?: AssetResponseDto[];
    stackCount: number | null;
    stackParentId?: string | null;
    tags?: TagResponseDto[];
    thumbhash: string | null;
    "type": AssetTypeEnum;
    updatedAt: string;
};
export type AlbumResponseDto = {
    albumName: string;
    albumThumbnailAssetId: string | null;
    albumUsers: AlbumUserResponseDto[];
    assetCount: number;
    assets: AssetResponseDto[];
    createdAt: string;
    description: string;
    endDate?: string;
    hasSharedLink: boolean;
    id: string;
    isActivityEnabled: boolean;
    lastModifiedAssetTimestamp?: string;
    order?: AssetOrder;
    owner: UserResponseDto;
    ownerId: string;
    shared: boolean;
    /** This property was deprecated in v1.102.0 */
    sharedUsers: UserResponseDto[];
    startDate?: string;
    updatedAt: string;
};
export type AlbumUserCreateDto = {
    role: AlbumUserRole;
    userId: string;
};
export type CreateAlbumDto = {
    albumName: string;
    /** This property was added in v1.104.0 */
    albumUsers?: AlbumUserCreateDto[];
    assetIds?: string[];
    description?: string;
    /** This property was deprecated in v1.104.0 */
    sharedWithUserIds?: string[];
};
export type AlbumCountResponseDto = {
    notShared: number;
    owned: number;
    shared: number;
};
export type UpdateAlbumDto = {
    albumName?: string;
    albumThumbnailAssetId?: string;
    description?: string;
    isActivityEnabled?: boolean;
    order?: AssetOrder;
};
export type BulkIdsDto = {
    ids: string[];
};
export type BulkIdResponseDto = {
    error?: Error;
    id: string;
    success: boolean;
};
export type UpdateAlbumUserDto = {
    role: AlbumUserRole;
};
export type AlbumUserAddDto = {
    role?: AlbumUserRole;
    userId: string;
};
export type AddUsersDto = {
    albumUsers: AlbumUserAddDto[];
    /** This property was deprecated in v1.102.0 */
    sharedUserIds?: string[];
};
export type ApiKeyResponseDto = {
    createdAt: string;
    id: string;
    name: string;
    updatedAt: string;
};
export type ApiKeyCreateDto = {
    name?: string;
};
export type ApiKeyCreateResponseDto = {
    apiKey: ApiKeyResponseDto;
    secret: string;
};
export type ApiKeyUpdateDto = {
    name: string;
};
export type AssetBulkDeleteDto = {
    force?: boolean;
    ids: string[];
};
export type AssetBulkUpdateDto = {
    dateTimeOriginal?: string;
    ids: string[];
    isArchived?: boolean;
    isFavorite?: boolean;
    latitude?: number;
    longitude?: number;
    removeParent?: boolean;
    stackParentId?: string;
};
export type AssetBulkUploadCheckItem = {
    /** base64 or hex encoded sha1 hash */
    checksum: string;
    id: string;
};
export type AssetBulkUploadCheckDto = {
    assets: AssetBulkUploadCheckItem[];
};
export type AssetBulkUploadCheckResult = {
    action: Action;
    assetId?: string;
    id: string;
    reason?: Reason;
};
export type AssetBulkUploadCheckResponseDto = {
    results: AssetBulkUploadCheckResult[];
};
export type CheckExistingAssetsDto = {
    deviceAssetIds: string[];
    deviceId: string;
};
export type CheckExistingAssetsResponseDto = {
    existingIds: string[];
};
export type AssetJobsDto = {
    assetIds: string[];
    name: AssetJobName;
};
export type MapMarkerResponseDto = {
    city: string | null;
    country: string | null;
    id: string;
    lat: number;
    lon: number;
    state: string | null;
};
export type MemoryLaneResponseDto = {
    assets: AssetResponseDto[];
    /** This property was deprecated in v1.100.0 */
    title: string;
    yearsAgo: number;
};
export type UpdateStackParentDto = {
    newParentId: string;
    oldParentId: string;
};
export type AssetStatsResponseDto = {
    images: number;
    total: number;
    videos: number;
};
export type CreateAssetDto = {
    assetData: Blob;
    deviceAssetId: string;
    deviceId: string;
    duration?: string;
    fileCreatedAt: string;
    fileModifiedAt: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    isOffline?: boolean;
    isVisible?: boolean;
    libraryId?: string;
    livePhotoData?: Blob;
    sidecarData?: Blob;
};
export type AssetFileUploadResponseDto = {
    duplicate: boolean;
    id: string;
};
export type UpdateAssetDto = {
    dateTimeOriginal?: string;
    description?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    latitude?: number;
    longitude?: number;
};
export type AuditDeletesResponseDto = {
    ids: string[];
    needsFullSync: boolean;
};
export type SignUpDto = {
    email: string;
    name: string;
    password: string;
};
export type ChangePasswordDto = {
    newPassword: string;
    password: string;
};
export type LoginCredentialDto = {
    email: string;
    password: string;
};
export type LoginResponseDto = {
    accessToken: string;
    isAdmin: boolean;
    name: string;
    profileImagePath: string;
    shouldChangePassword: boolean;
    userEmail: string;
    userId: string;
};
export type LogoutResponseDto = {
    redirectUri: string;
    successful: boolean;
};
export type ValidateAccessTokenResponseDto = {
    authStatus: boolean;
};
export type AssetIdsDto = {
    assetIds: string[];
};
export type DownloadInfoDto = {
    albumId?: string;
    archiveSize?: number;
    assetIds?: string[];
    userId?: string;
};
export type DownloadArchiveInfo = {
    assetIds: string[];
    size: number;
};
export type DownloadResponseDto = {
    archives: DownloadArchiveInfo[];
    totalSize: number;
};
export type PersonResponseDto = {
    birthDate: string | null;
    id: string;
    isHidden: boolean;
    name: string;
    thumbnailPath: string;
};
export type AssetFaceResponseDto = {
    boundingBoxX1: number;
    boundingBoxX2: number;
    boundingBoxY1: number;
    boundingBoxY2: number;
    id: string;
    imageHeight: number;
    imageWidth: number;
    person: (PersonResponseDto) | null;
};
export type FaceDto = {
    id: string;
};
export type JobCountsDto = {
    active: number;
    completed: number;
    delayed: number;
    failed: number;
    paused: number;
    waiting: number;
};
export type QueueStatusDto = {
    isActive: boolean;
    isPaused: boolean;
};
export type JobStatusDto = {
    jobCounts: JobCountsDto;
    queueStatus: QueueStatusDto;
};
export type AllJobStatusResponseDto = {
    backgroundTask: JobStatusDto;
    faceDetection: JobStatusDto;
    facialRecognition: JobStatusDto;
    library: JobStatusDto;
    metadataExtraction: JobStatusDto;
    migration: JobStatusDto;
    notifications: JobStatusDto;
    search: JobStatusDto;
    sidecar: JobStatusDto;
    smartSearch: JobStatusDto;
    storageTemplateMigration: JobStatusDto;
    thumbnailGeneration: JobStatusDto;
    videoConversion: JobStatusDto;
};
export type JobCommandDto = {
    command: JobCommand;
    force: boolean;
};
export type LibraryResponseDto = {
    assetCount: number;
    createdAt: string;
    exclusionPatterns: string[];
    id: string;
    importPaths: string[];
    name: string;
    ownerId: string;
    refreshedAt: string | null;
    "type": LibraryType;
    updatedAt: string;
};
export type CreateLibraryDto = {
    exclusionPatterns?: string[];
    importPaths?: string[];
    isVisible?: boolean;
    name?: string;
    ownerId: string;
    "type": LibraryType;
};
export type UpdateLibraryDto = {
    exclusionPatterns?: string[];
    importPaths?: string[];
    isVisible?: boolean;
    name?: string;
};
export type ScanLibraryDto = {
    refreshAllFiles?: boolean;
    refreshModifiedFiles?: boolean;
};
export type LibraryStatsResponseDto = {
    photos: number;
    total: number;
    usage: number;
    videos: number;
};
export type ValidateLibraryDto = {
    exclusionPatterns?: string[];
    importPaths?: string[];
};
export type ValidateLibraryImportPathResponseDto = {
    importPath: string;
    isValid: boolean;
    message?: string;
};
export type ValidateLibraryResponseDto = {
    importPaths?: ValidateLibraryImportPathResponseDto[];
};
export type OnThisDayDto = {
    year: number;
};
export type MemoryResponseDto = {
    assets: AssetResponseDto[];
    createdAt: string;
    data: OnThisDayDto;
    deletedAt?: string;
    id: string;
    isSaved: boolean;
    memoryAt: string;
    ownerId: string;
    seenAt?: string;
    "type": Type2;
    updatedAt: string;
};
export type MemoryCreateDto = {
    assetIds?: string[];
    data: OnThisDayDto;
    isSaved?: boolean;
    memoryAt: string;
    seenAt?: string;
    "type": MemoryType;
};
export type MemoryUpdateDto = {
    isSaved?: boolean;
    memoryAt?: string;
    seenAt?: string;
};
export type OAuthConfigDto = {
    redirectUri: string;
};
export type OAuthAuthorizeResponseDto = {
    url: string;
};
export type OAuthCallbackDto = {
    url: string;
};
export type PartnerResponseDto = {
    avatarColor: UserAvatarColor;
    createdAt: string;
    deletedAt: string | null;
    email: string;
    id: string;
    inTimeline?: boolean;
    isAdmin: boolean;
    memoriesEnabled?: boolean;
    name: string;
    oauthId: string;
    profileImagePath: string;
    quotaSizeInBytes: number | null;
    quotaUsageInBytes: number | null;
    shouldChangePassword: boolean;
    status: UserStatus;
    storageLabel: string | null;
    updatedAt: string;
};
export type UpdatePartnerDto = {
    inTimeline: boolean;
};
export type PeopleResponseDto = {
    hidden: number;
    people: PersonResponseDto[];
    total: number;
};
export type PersonCreateDto = {
    /** Person date of birth.
    Note: the mobile app cannot currently set the birth date to null. */
    birthDate?: string | null;
    /** Person visibility */
    isHidden?: boolean;
    /** Person name. */
    name?: string;
};
export type PeopleUpdateItem = {
    /** Person date of birth.
    Note: the mobile app cannot currently set the birth date to null. */
    birthDate?: string | null;
    /** Asset is used to get the feature face thumbnail. */
    featureFaceAssetId?: string;
    /** Person id. */
    id: string;
    /** Person visibility */
    isHidden?: boolean;
    /** Person name. */
    name?: string;
};
export type PeopleUpdateDto = {
    people: PeopleUpdateItem[];
};
export type PersonUpdateDto = {
    /** Person date of birth.
    Note: the mobile app cannot currently set the birth date to null. */
    birthDate?: string | null;
    /** Asset is used to get the feature face thumbnail. */
    featureFaceAssetId?: string;
    /** Person visibility */
    isHidden?: boolean;
    /** Person name. */
    name?: string;
};
export type MergePersonDto = {
    ids: string[];
};
export type AssetFaceUpdateItem = {
    assetId: string;
    personId: string;
};
export type AssetFaceUpdateDto = {
    data: AssetFaceUpdateItem[];
};
export type PersonStatisticsResponseDto = {
    assets: number;
};
export type FileReportItemDto = {
    checksum?: string;
    entityId: string;
    entityType: PathEntityType;
    pathType: PathType;
    pathValue: string;
};
export type FileReportDto = {
    extras: string[];
    orphans: FileReportItemDto[];
};
export type FileChecksumDto = {
    filenames: string[];
};
export type FileChecksumResponseDto = {
    checksum: string;
    filename: string;
};
export type FileReportFixDto = {
    items: FileReportItemDto[];
};
export type SearchExploreItem = {
    data: AssetResponseDto;
    value: string;
};
export type SearchExploreResponseDto = {
    fieldName: string;
    items: SearchExploreItem[];
};
export type MetadataSearchDto = {
    checksum?: string;
    city?: string;
    country?: string;
    createdAfter?: string;
    createdBefore?: string;
    deviceAssetId?: string;
    deviceId?: string;
    encodedVideoPath?: string;
    id?: string;
    isArchived?: boolean;
    isEncoded?: boolean;
    isFavorite?: boolean;
    isMotion?: boolean;
    isNotInAlbum?: boolean;
    isOffline?: boolean;
    isVisible?: boolean;
    lensModel?: string;
    libraryId?: string;
    make?: string;
    model?: string;
    order?: AssetOrder;
    originalFileName?: string;
    originalPath?: string;
    page?: number;
    personIds?: string[];
    previewPath?: string;
    /** This property was deprecated in v1.100.0 */
    resizePath?: string;
    size?: number;
    state?: string;
    takenAfter?: string;
    takenBefore?: string;
    thumbnailPath?: string;
    trashedAfter?: string;
    trashedBefore?: string;
    "type"?: AssetTypeEnum;
    updatedAfter?: string;
    updatedBefore?: string;
    /** This property was deprecated in v1.100.0 */
    webpPath?: string;
    withArchived?: boolean;
    withDeleted?: boolean;
    withExif?: boolean;
    withPeople?: boolean;
    withStacked?: boolean;
};
export type SearchFacetCountResponseDto = {
    count: number;
    value: string;
};
export type SearchFacetResponseDto = {
    counts: SearchFacetCountResponseDto[];
    fieldName: string;
};
export type SearchAlbumResponseDto = {
    count: number;
    facets: SearchFacetResponseDto[];
    items: AlbumResponseDto[];
    total: number;
};
export type SearchAssetResponseDto = {
    count: number;
    facets: SearchFacetResponseDto[];
    items: AssetResponseDto[];
    nextPage: string | null;
    total: number;
};
export type SearchResponseDto = {
    albums: SearchAlbumResponseDto;
    assets: SearchAssetResponseDto;
};
export type PlacesResponseDto = {
    admin1name?: string;
    admin2name?: string;
    latitude: number;
    longitude: number;
    name: string;
};
export type SmartSearchDto = {
    city?: string;
    country?: string;
    createdAfter?: string;
    createdBefore?: string;
    deviceId?: string;
    isArchived?: boolean;
    isEncoded?: boolean;
    isFavorite?: boolean;
    isMotion?: boolean;
    isNotInAlbum?: boolean;
    isOffline?: boolean;
    isVisible?: boolean;
    lensModel?: string;
    libraryId?: string;
    make?: string;
    model?: string;
    page?: number;
    personIds?: string[];
    query: string;
    size?: number;
    state?: string;
    takenAfter?: string;
    takenBefore?: string;
    trashedAfter?: string;
    trashedBefore?: string;
    "type"?: AssetTypeEnum;
    updatedAfter?: string;
    updatedBefore?: string;
    withArchived?: boolean;
    withDeleted?: boolean;
    withExif?: boolean;
};
export type ServerInfoResponseDto = {
    diskAvailable: string;
    diskAvailableRaw: number;
    diskSize: string;
    diskSizeRaw: number;
    diskUsagePercentage: number;
    diskUse: string;
    diskUseRaw: number;
};
export type ServerConfigDto = {
    externalDomain: string;
    isInitialized: boolean;
    isOnboarded: boolean;
    loginPageMessage: string;
    oauthButtonText: string;
    trashDays: number;
    userDeleteDelay: number;
};
export type ServerFeaturesDto = {
    configFile: boolean;
    email: boolean;
    facialRecognition: boolean;
    map: boolean;
    oauth: boolean;
    oauthAutoLaunch: boolean;
    passwordLogin: boolean;
    reverseGeocoding: boolean;
    search: boolean;
    sidecar: boolean;
    smartSearch: boolean;
    trash: boolean;
};
export type ServerMediaTypesResponseDto = {
    image: string[];
    sidecar: string[];
    video: string[];
};
export type ServerPingResponse = {};
export type ServerPingResponseRead = {
    res: string;
};
export type UsageByUserDto = {
    photos: number;
    quotaSizeInBytes: number | null;
    usage: number;
    userId: string;
    userName: string;
    videos: number;
};
export type ServerStatsResponseDto = {
    photos: number;
    usage: number;
    usageByUser: UsageByUserDto[];
    videos: number;
};
export type ServerThemeDto = {
    customCss: string;
};
export type ServerVersionResponseDto = {
    major: number;
    minor: number;
    patch: number;
};
export type SessionResponseDto = {
    createdAt: string;
    current: boolean;
    deviceOS: string;
    deviceType: string;
    id: string;
    updatedAt: string;
};
export type SharedLinkResponseDto = {
    album?: AlbumResponseDto;
    allowDownload: boolean;
    allowUpload: boolean;
    assets: AssetResponseDto[];
    createdAt: string;
    description: string | null;
    expiresAt: string | null;
    id: string;
    key: string;
    password: string | null;
    showMetadata: boolean;
    token?: string | null;
    "type": SharedLinkType;
    userId: string;
};
export type SharedLinkCreateDto = {
    albumId?: string;
    allowDownload?: boolean;
    allowUpload?: boolean;
    assetIds?: string[];
    description?: string;
    expiresAt?: string | null;
    password?: string;
    showMetadata?: boolean;
    "type": SharedLinkType;
};
export type SharedLinkEditDto = {
    allowDownload?: boolean;
    allowUpload?: boolean;
    /** Few clients cannot send null to set the expiryTime to never.
    Setting this flag and not sending expiryAt is considered as null instead.
    Clients that can send null values can ignore this. */
    changeExpiryTime?: boolean;
    description?: string;
    expiresAt?: string | null;
    password?: string;
    showMetadata?: boolean;
};
export type AssetIdsResponseDto = {
    assetId: string;
    error?: Error2;
    success: boolean;
};
export type AssetDeltaSyncDto = {
    updatedAfter: string;
    userIds: string[];
};
export type AssetDeltaSyncResponseDto = {
    deleted: string[];
    needsFullSync: boolean;
    upserted: AssetResponseDto[];
};
export type AssetFullSyncDto = {
    lastCreationDate?: string;
    lastId?: string;
    limit: number;
    updatedUntil: string;
    userId?: string;
};
export type SystemConfigFFmpegDto = {
    accel: TranscodeHWAccel;
    acceptedAudioCodecs: AudioCodec[];
    acceptedVideoCodecs: VideoCodec[];
    bframes: number;
    cqMode: CQMode;
    crf: number;
    gopSize: number;
    maxBitrate: string;
    npl: number;
    preferredHwDevice: string;
    preset: string;
    refs: number;
    targetAudioCodec: AudioCodec;
    targetResolution: string;
    targetVideoCodec: VideoCodec;
    temporalAQ: boolean;
    threads: number;
    tonemap: ToneMapping;
    transcode: TranscodePolicy;
    twoPass: boolean;
};
export type SystemConfigImageDto = {
    colorspace: Colorspace;
    extractEmbedded: boolean;
    previewFormat: ImageFormat;
    previewSize: number;
    quality: number;
    thumbnailFormat: ImageFormat;
    thumbnailSize: number;
};
export type JobSettingsDto = {
    concurrency: number;
};
export type SystemConfigJobDto = {
    backgroundTask: JobSettingsDto;
    faceDetection: JobSettingsDto;
    library: JobSettingsDto;
    metadataExtraction: JobSettingsDto;
    migration: JobSettingsDto;
    notifications: JobSettingsDto;
    search: JobSettingsDto;
    sidecar: JobSettingsDto;
    smartSearch: JobSettingsDto;
    thumbnailGeneration: JobSettingsDto;
    videoConversion: JobSettingsDto;
};
export type SystemConfigLibraryScanDto = {
    cronExpression: string;
    enabled: boolean;
};
export type SystemConfigLibraryWatchDto = {
    enabled: boolean;
};
export type SystemConfigLibraryDto = {
    scan: SystemConfigLibraryScanDto;
    watch: SystemConfigLibraryWatchDto;
};
export type SystemConfigLoggingDto = {
    enabled: boolean;
    level: LogLevel;
};
export type ClipConfig = {
    enabled: boolean;
    mode?: CLIPMode;
    modelName: string;
    modelType?: ModelType;
};
export type RecognitionConfig = {
    enabled: boolean;
    maxDistance: number;
    minFaces: number;
    minScore: number;
    modelName: string;
    modelType?: ModelType;
};
export type SystemConfigMachineLearningDto = {
    clip: ClipConfig;
    enabled: boolean;
    facialRecognition: RecognitionConfig;
    url: string;
};
export type SystemConfigMapDto = {
    darkStyle: string;
    enabled: boolean;
    lightStyle: string;
};
export type SystemConfigNewVersionCheckDto = {
    enabled: boolean;
};
export type SystemConfigSmtpTransportDto = {
    host: string;
    ignoreCert: boolean;
    password: string;
    port: number;
    username: string;
};
export type SystemConfigSmtpDto = {
    enabled: boolean;
    "from": string;
    replyTo: string;
    transport: SystemConfigSmtpTransportDto;
};
export type SystemConfigNotificationsDto = {
    smtp: SystemConfigSmtpDto;
};
export type SystemConfigOAuthDto = {
    autoLaunch: boolean;
    autoRegister: boolean;
    buttonText: string;
    clientId: string;
    clientSecret: string;
    defaultStorageQuota: number;
    enabled: boolean;
    issuerUrl: string;
    mobileOverrideEnabled: boolean;
    mobileRedirectUri: string;
    scope: string;
    signingAlgorithm: string;
    storageLabelClaim: string;
    storageQuotaClaim: string;
};
export type SystemConfigPasswordLoginDto = {
    enabled: boolean;
};
export type SystemConfigReverseGeocodingDto = {
    enabled: boolean;
};
export type SystemConfigServerDto = {
    externalDomain: string;
    loginPageMessage: string;
};
export type SystemConfigStorageTemplateDto = {
    enabled: boolean;
    hashVerificationEnabled: boolean;
    template: string;
};
export type SystemConfigThemeDto = {
    customCss: string;
};
export type SystemConfigTrashDto = {
    days: number;
    enabled: boolean;
};
export type SystemConfigUserDto = {
    deleteDelay: number;
};
export type SystemConfigDto = {
    ffmpeg: SystemConfigFFmpegDto;
    image: SystemConfigImageDto;
    job: SystemConfigJobDto;
    library: SystemConfigLibraryDto;
    logging: SystemConfigLoggingDto;
    machineLearning: SystemConfigMachineLearningDto;
    map: SystemConfigMapDto;
    newVersionCheck: SystemConfigNewVersionCheckDto;
    notifications: SystemConfigNotificationsDto;
    oauth: SystemConfigOAuthDto;
    passwordLogin: SystemConfigPasswordLoginDto;
    reverseGeocoding: SystemConfigReverseGeocodingDto;
    server: SystemConfigServerDto;
    storageTemplate: SystemConfigStorageTemplateDto;
    theme: SystemConfigThemeDto;
    trash: SystemConfigTrashDto;
    user: SystemConfigUserDto;
};
export type SystemConfigTemplateStorageOptionDto = {
    dayOptions: string[];
    hourOptions: string[];
    minuteOptions: string[];
    monthOptions: string[];
    presetOptions: string[];
    secondOptions: string[];
    weekOptions: string[];
    yearOptions: string[];
};
export type AdminOnboardingUpdateDto = {
    isOnboarded: boolean;
};
export type ReverseGeocodingStateResponseDto = {
    lastImportFileName: string | null;
    lastUpdate: string | null;
};
export type CreateTagDto = {
    name: string;
    "type": TagTypeEnum;
};
export type UpdateTagDto = {
    name?: string;
};
export type TimeBucketResponseDto = {
    count: number;
    timeBucket: string;
};
export type CreateUserDto = {
    email: string;
    memoriesEnabled?: boolean;
    name: string;
    notify?: boolean;
    password: string;
    quotaSizeInBytes?: number | null;
    shouldChangePassword?: boolean;
    storageLabel?: string | null;
};
export type UpdateUserDto = {
    avatarColor?: UserAvatarColor;
    email?: string;
    id: string;
    isAdmin?: boolean;
    memoriesEnabled?: boolean;
    name?: string;
    password?: string;
    quotaSizeInBytes?: number | null;
    shouldChangePassword?: boolean;
    storageLabel?: string;
};
export type CreateProfileImageDto = {
    file: Blob;
};
export type CreateProfileImageResponseDto = {
    profileImagePath: string;
    userId: string;
};
export type DeleteUserDto = {
    force?: boolean;
};
export declare function getActivities({ albumId, assetId, level, $type, userId }: {
    albumId: string;
    assetId?: string;
    level?: ReactionLevel;
    $type?: ReactionType;
    userId?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function createActivity({ activityCreateDto }: {
    activityCreateDto: ActivityCreateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getActivityStatistics({ albumId, assetId }: {
    albumId: string;
    assetId?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function deleteActivity({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAllAlbums({ assetId, shared }: {
    assetId?: string;
    shared?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function createAlbum({ createAlbumDto }: {
    createAlbumDto: CreateAlbumDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAlbumCount(opts?: Oazapfts.RequestOpts): any;
export declare function deleteAlbum({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAlbumInfo({ id, key, withoutAssets }: {
    id: string;
    key?: string;
    withoutAssets?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateAlbumInfo({ id, updateAlbumDto }: {
    id: string;
    updateAlbumDto: UpdateAlbumDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function removeAssetFromAlbum({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function addAssetsToAlbum({ id, key, bulkIdsDto }: {
    id: string;
    key?: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function removeUserFromAlbum({ id, userId }: {
    id: string;
    userId: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateAlbumUser({ id, userId, updateAlbumUserDto }: {
    id: string;
    userId: string;
    updateAlbumUserDto: UpdateAlbumUserDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function addUsersToAlbum({ id, addUsersDto }: {
    id: string;
    addUsersDto: AddUsersDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getApiKeys(opts?: Oazapfts.RequestOpts): any;
export declare function createApiKey({ apiKeyCreateDto }: {
    apiKeyCreateDto: ApiKeyCreateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function deleteApiKey({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getApiKey({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateApiKey({ id, apiKeyUpdateDto }: {
    id: string;
    apiKeyUpdateDto: ApiKeyUpdateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function deleteAssets({ assetBulkDeleteDto }: {
    assetBulkDeleteDto: AssetBulkDeleteDto;
}, opts?: Oazapfts.RequestOpts): any;
/**
 * Get all AssetEntity belong to the user
 */
export declare function getAllAssets({ ifNoneMatch, isArchived, isFavorite, skip, take, updatedAfter, updatedBefore, userId }: {
    ifNoneMatch?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    skip?: number;
    take?: number;
    updatedAfter?: string;
    updatedBefore?: string;
    userId?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateAssets({ assetBulkUpdateDto }: {
    assetBulkUpdateDto: AssetBulkUpdateDto;
}, opts?: Oazapfts.RequestOpts): any;
/**
 * Checks if assets exist by checksums
 */
export declare function checkBulkUpload({ assetBulkUploadCheckDto }: {
    assetBulkUploadCheckDto: AssetBulkUploadCheckDto;
}, opts?: Oazapfts.RequestOpts): any;
/**
 * Get all asset of a device that are in the database, ID only.
 */
export declare function getAllUserAssetsByDeviceId({ deviceId }: {
    deviceId: string;
}, opts?: Oazapfts.RequestOpts): any;
/**
 * Checks if multiple assets exist on the server and returns all existing - used by background backup
 */
export declare function checkExistingAssets({ checkExistingAssetsDto }: {
    checkExistingAssetsDto: CheckExistingAssetsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function serveFile({ id, isThumb, isWeb, key }: {
    id: string;
    isThumb?: boolean;
    isWeb?: boolean;
    key?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function runAssetJobs({ assetJobsDto }: {
    assetJobsDto: AssetJobsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getMapMarkers({ fileCreatedAfter, fileCreatedBefore, isArchived, isFavorite, withPartners, withSharedAlbums }: {
    fileCreatedAfter?: string;
    fileCreatedBefore?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    withPartners?: boolean;
    withSharedAlbums?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getMemoryLane({ day, month }: {
    day: number;
    month: number;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getRandom({ count }: {
    count?: number;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateStackParent({ updateStackParentDto }: {
    updateStackParentDto: UpdateStackParentDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAssetStatistics({ isArchived, isFavorite, isTrashed }: {
    isArchived?: boolean;
    isFavorite?: boolean;
    isTrashed?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAssetThumbnail({ format, id, key }: {
    format?: ThumbnailFormat;
    id: string;
    key?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function uploadFile({ key, xImmichChecksum, createAssetDto }: {
    key?: string;
    xImmichChecksum?: string;
    createAssetDto: CreateAssetDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAssetInfo({ id, key }: {
    id: string;
    key?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateAsset({ id, updateAssetDto }: {
    id: string;
    updateAssetDto: UpdateAssetDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAuditDeletes({ after, entityType, userId }: {
    after: string;
    entityType: EntityType;
    userId?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function signUpAdmin({ signUpDto }: {
    signUpDto: SignUpDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function changePassword({ changePasswordDto }: {
    changePasswordDto: ChangePasswordDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function login({ loginCredentialDto }: {
    loginCredentialDto: LoginCredentialDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function logout(opts?: Oazapfts.RequestOpts): any;
export declare function validateAccessToken(opts?: Oazapfts.RequestOpts): any;
export declare function downloadArchive({ key, assetIdsDto }: {
    key?: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function downloadFile({ id, key }: {
    id: string;
    key?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getDownloadInfo({ key, downloadInfoDto }: {
    key?: string;
    downloadInfoDto: DownloadInfoDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getFaces({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function reassignFacesById({ id, faceDto }: {
    id: string;
    faceDto: FaceDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAllJobsStatus(opts?: Oazapfts.RequestOpts): any;
export declare function sendJobCommand({ id, jobCommandDto }: {
    id: JobName;
    jobCommandDto: JobCommandDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAllLibraries({ $type }: {
    $type?: LibraryType;
}, opts?: Oazapfts.RequestOpts): any;
export declare function createLibrary({ createLibraryDto }: {
    createLibraryDto: CreateLibraryDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function deleteLibrary({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getLibrary({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateLibrary({ id, updateLibraryDto }: {
    id: string;
    updateLibraryDto: UpdateLibraryDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function removeOfflineFiles({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function scanLibrary({ id, scanLibraryDto }: {
    id: string;
    scanLibraryDto: ScanLibraryDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getLibraryStatistics({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function validate({ id, validateLibraryDto }: {
    id: string;
    validateLibraryDto: ValidateLibraryDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function searchMemories(opts?: Oazapfts.RequestOpts): any;
export declare function createMemory({ memoryCreateDto }: {
    memoryCreateDto: MemoryCreateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function deleteMemory({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getMemory({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateMemory({ id, memoryUpdateDto }: {
    id: string;
    memoryUpdateDto: MemoryUpdateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function removeMemoryAssets({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function addMemoryAssets({ id, bulkIdsDto }: {
    id: string;
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function startOAuth({ oAuthConfigDto }: {
    oAuthConfigDto: OAuthConfigDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function finishOAuth({ oAuthCallbackDto }: {
    oAuthCallbackDto: OAuthCallbackDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function linkOAuthAccount({ oAuthCallbackDto }: {
    oAuthCallbackDto: OAuthCallbackDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function redirectOAuthToMobile(opts?: Oazapfts.RequestOpts): any;
export declare function unlinkOAuthAccount(opts?: Oazapfts.RequestOpts): any;
export declare function getPartners({ direction }: {
    direction: "shared-by" | "shared-with";
}, opts?: Oazapfts.RequestOpts): any;
export declare function removePartner({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function createPartner({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updatePartner({ id, updatePartnerDto }: {
    id: string;
    updatePartnerDto: UpdatePartnerDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAllPeople({ withHidden }: {
    withHidden?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function createPerson({ personCreateDto }: {
    personCreateDto: PersonCreateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updatePeople({ peopleUpdateDto }: {
    peopleUpdateDto: PeopleUpdateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getPerson({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updatePerson({ id, personUpdateDto }: {
    id: string;
    personUpdateDto: PersonUpdateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getPersonAssets({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function mergePerson({ id, mergePersonDto }: {
    id: string;
    mergePersonDto: MergePersonDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function reassignFaces({ id, assetFaceUpdateDto }: {
    id: string;
    assetFaceUpdateDto: AssetFaceUpdateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getPersonStatistics({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getPersonThumbnail({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAuditFiles(opts?: Oazapfts.RequestOpts): any;
export declare function getFileChecksums({ fileChecksumDto }: {
    fileChecksumDto: FileChecksumDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function fixAuditFiles({ fileReportFixDto }: {
    fileReportFixDto: FileReportFixDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAssetsByCity(opts?: Oazapfts.RequestOpts): any;
export declare function getExploreData(opts?: Oazapfts.RequestOpts): any;
export declare function searchMetadata({ metadataSearchDto }: {
    metadataSearchDto: MetadataSearchDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function searchPerson({ name, withHidden }: {
    name: string;
    withHidden?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function searchPlaces({ name }: {
    name: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function searchSmart({ smartSearchDto }: {
    smartSearchDto: SmartSearchDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getSearchSuggestions({ country, make, model, state, $type }: {
    country?: string;
    make?: string;
    model?: string;
    state?: string;
    $type: SearchSuggestionType;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getServerInfo(opts?: Oazapfts.RequestOpts): any;
export declare function getServerConfig(opts?: Oazapfts.RequestOpts): any;
export declare function getServerFeatures(opts?: Oazapfts.RequestOpts): any;
export declare function getSupportedMediaTypes(opts?: Oazapfts.RequestOpts): any;
export declare function pingServer(opts?: Oazapfts.RequestOpts): any;
export declare function getServerStatistics(opts?: Oazapfts.RequestOpts): any;
export declare function getTheme(opts?: Oazapfts.RequestOpts): any;
export declare function getServerVersion(opts?: Oazapfts.RequestOpts): any;
export declare function deleteAllSessions(opts?: Oazapfts.RequestOpts): any;
export declare function getSessions(opts?: Oazapfts.RequestOpts): any;
export declare function deleteSession({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAllSharedLinks(opts?: Oazapfts.RequestOpts): any;
export declare function createSharedLink({ sharedLinkCreateDto }: {
    sharedLinkCreateDto: SharedLinkCreateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getMySharedLink({ key, password, token }: {
    key?: string;
    password?: string;
    token?: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function removeSharedLink({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getSharedLinkById({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateSharedLink({ id, sharedLinkEditDto }: {
    id: string;
    sharedLinkEditDto: SharedLinkEditDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function removeSharedLinkAssets({ id, key, assetIdsDto }: {
    id: string;
    key?: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function addSharedLinkAssets({ id, key, assetIdsDto }: {
    id: string;
    key?: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getDeltaSync({ assetDeltaSyncDto }: {
    assetDeltaSyncDto: AssetDeltaSyncDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getFullSyncForUser({ assetFullSyncDto }: {
    assetFullSyncDto: AssetFullSyncDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getConfig(opts?: Oazapfts.RequestOpts): any;
export declare function updateConfig({ systemConfigDto }: {
    systemConfigDto: SystemConfigDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getConfigDefaults(opts?: Oazapfts.RequestOpts): any;
export declare function getMapStyle({ key, theme }: {
    key?: string;
    theme: MapTheme;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getStorageTemplateOptions(opts?: Oazapfts.RequestOpts): any;
export declare function getAdminOnboarding(opts?: Oazapfts.RequestOpts): any;
export declare function updateAdminOnboarding({ adminOnboardingUpdateDto }: {
    adminOnboardingUpdateDto: AdminOnboardingUpdateDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getReverseGeocodingState(opts?: Oazapfts.RequestOpts): any;
export declare function getAllTags(opts?: Oazapfts.RequestOpts): any;
export declare function createTag({ createTagDto }: {
    createTagDto: CreateTagDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function deleteTag({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getTagById({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateTag({ id, updateTagDto }: {
    id: string;
    updateTagDto: UpdateTagDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function untagAssets({ id, assetIdsDto }: {
    id: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getTagAssets({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function tagAssets({ id, assetIdsDto }: {
    id: string;
    assetIdsDto: AssetIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getTimeBucket({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, timeBucket, userId, withPartners, withStacked }: {
    albumId?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    isTrashed?: boolean;
    key?: string;
    order?: AssetOrder;
    personId?: string;
    size: TimeBucketSize;
    timeBucket: string;
    userId?: string;
    withPartners?: boolean;
    withStacked?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getTimeBuckets({ albumId, isArchived, isFavorite, isTrashed, key, order, personId, size, userId, withPartners, withStacked }: {
    albumId?: string;
    isArchived?: boolean;
    isFavorite?: boolean;
    isTrashed?: boolean;
    key?: string;
    order?: AssetOrder;
    personId?: string;
    size: TimeBucketSize;
    userId?: string;
    withPartners?: boolean;
    withStacked?: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function emptyTrash(opts?: Oazapfts.RequestOpts): any;
export declare function restoreTrash(opts?: Oazapfts.RequestOpts): any;
export declare function restoreAssets({ bulkIdsDto }: {
    bulkIdsDto: BulkIdsDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getAllUsers({ isAll }: {
    isAll: boolean;
}, opts?: Oazapfts.RequestOpts): any;
export declare function createUser({ createUserDto }: {
    createUserDto: CreateUserDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function updateUser({ updateUserDto }: {
    updateUserDto: UpdateUserDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getUserById({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getMyUserInfo(opts?: Oazapfts.RequestOpts): any;
export declare function deleteProfileImage(opts?: Oazapfts.RequestOpts): any;
export declare function createProfileImage({ createProfileImageDto }: {
    createProfileImageDto: CreateProfileImageDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function getProfileImage({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare function deleteUser({ id, deleteUserDto }: {
    id: string;
    deleteUserDto: DeleteUserDto;
}, opts?: Oazapfts.RequestOpts): any;
export declare function restoreUser({ id }: {
    id: string;
}, opts?: Oazapfts.RequestOpts): any;
export declare enum ReactionLevel {
    Album = "album",
    Asset = "asset"
}
export declare enum ReactionType {
    Comment = "comment",
    Like = "like"
}
export declare enum Type {
    Comment = "comment",
    Like = "like"
}
export declare enum UserAvatarColor {
    Primary = "primary",
    Pink = "pink",
    Red = "red",
    Yellow = "yellow",
    Blue = "blue",
    Green = "green",
    Purple = "purple",
    Orange = "orange",
    Gray = "gray",
    Amber = "amber"
}
export declare enum AlbumUserRole {
    Editor = "editor",
    Viewer = "viewer"
}
export declare enum UserStatus {
    Active = "active",
    Removing = "removing",
    Deleted = "deleted"
}
export declare enum TagTypeEnum {
    Object = "OBJECT",
    Face = "FACE",
    Custom = "CUSTOM"
}
export declare enum AssetTypeEnum {
    Image = "IMAGE",
    Video = "VIDEO",
    Audio = "AUDIO",
    Other = "OTHER"
}
export declare enum AssetOrder {
    Asc = "asc",
    Desc = "desc"
}
export declare enum Error {
    Duplicate = "duplicate",
    NoPermission = "no_permission",
    NotFound = "not_found",
    Unknown = "unknown"
}
export declare enum Action {
    Accept = "accept",
    Reject = "reject"
}
export declare enum Reason {
    Duplicate = "duplicate",
    UnsupportedFormat = "unsupported-format"
}
export declare enum AssetJobName {
    RegenerateThumbnail = "regenerate-thumbnail",
    RefreshMetadata = "refresh-metadata",
    TranscodeVideo = "transcode-video"
}
export declare enum ThumbnailFormat {
    Jpeg = "JPEG",
    Webp = "WEBP"
}
export declare enum EntityType {
    Asset = "ASSET",
    Album = "ALBUM"
}
export declare enum JobName {
    ThumbnailGeneration = "thumbnailGeneration",
    MetadataExtraction = "metadataExtraction",
    VideoConversion = "videoConversion",
    FaceDetection = "faceDetection",
    FacialRecognition = "facialRecognition",
    SmartSearch = "smartSearch",
    BackgroundTask = "backgroundTask",
    StorageTemplateMigration = "storageTemplateMigration",
    Migration = "migration",
    Search = "search",
    Sidecar = "sidecar",
    Library = "library",
    Notifications = "notifications"
}
export declare enum JobCommand {
    Start = "start",
    Pause = "pause",
    Resume = "resume",
    Empty = "empty",
    ClearFailed = "clear-failed"
}
export declare enum LibraryType {
    Upload = "UPLOAD",
    External = "EXTERNAL"
}
export declare enum Type2 {
    OnThisDay = "on_this_day"
}
export declare enum MemoryType {
    OnThisDay = "on_this_day"
}
export declare enum PathEntityType {
    Asset = "asset",
    Person = "person",
    User = "user"
}
export declare enum PathType {
    Original = "original",
    Preview = "preview",
    Thumbnail = "thumbnail",
    EncodedVideo = "encoded_video",
    Sidecar = "sidecar",
    Face = "face",
    Profile = "profile"
}
export declare enum SearchSuggestionType {
    Country = "country",
    State = "state",
    City = "city",
    CameraMake = "camera-make",
    CameraModel = "camera-model"
}
export declare enum SharedLinkType {
    Album = "ALBUM",
    Individual = "INDIVIDUAL"
}
export declare enum Error2 {
    Duplicate = "duplicate",
    NoPermission = "no_permission",
    NotFound = "not_found"
}
export declare enum TranscodeHWAccel {
    Nvenc = "nvenc",
    Qsv = "qsv",
    Vaapi = "vaapi",
    Rkmpp = "rkmpp",
    Disabled = "disabled"
}
export declare enum AudioCodec {
    Mp3 = "mp3",
    Aac = "aac",
    Libopus = "libopus"
}
export declare enum VideoCodec {
    H264 = "h264",
    Hevc = "hevc",
    Vp9 = "vp9",
    Av1 = "av1"
}
export declare enum CQMode {
    Auto = "auto",
    Cqp = "cqp",
    Icq = "icq"
}
export declare enum ToneMapping {
    Hable = "hable",
    Mobius = "mobius",
    Reinhard = "reinhard",
    Disabled = "disabled"
}
export declare enum TranscodePolicy {
    All = "all",
    Optimal = "optimal",
    Bitrate = "bitrate",
    Required = "required",
    Disabled = "disabled"
}
export declare enum Colorspace {
    Srgb = "srgb",
    P3 = "p3"
}
export declare enum ImageFormat {
    Jpeg = "jpeg",
    Webp = "webp"
}
export declare enum LogLevel {
    Verbose = "verbose",
    Debug = "debug",
    Log = "log",
    Warn = "warn",
    Error = "error",
    Fatal = "fatal"
}
export declare enum CLIPMode {
    Vision = "vision",
    Text = "text"
}
export declare enum ModelType {
    FacialRecognition = "facial-recognition",
    Clip = "clip"
}
export declare enum MapTheme {
    Light = "light",
    Dark = "dark"
}
export declare enum TimeBucketSize {
    Day = "DAY",
    Month = "MONTH"
}
