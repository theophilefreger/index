/* tslint:disable */
/* eslint-disable */
/**
 * Immich
 * Immich API
 *
 * The version of the OpenAPI document: 1.94.1
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface CreateProfileImageResponseDto
 */
export interface CreateProfileImageResponseDto {
    /**
     * 
     * @type {string}
     * @memberof CreateProfileImageResponseDto
     */
    profileImagePath: string;
    /**
     * 
     * @type {string}
     * @memberof CreateProfileImageResponseDto
     */
    userId: string;
}

/**
 * Check if a given object implements the CreateProfileImageResponseDto interface.
 */
export function instanceOfCreateProfileImageResponseDto(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "profileImagePath" in value;
    isInstance = isInstance && "userId" in value;

    return isInstance;
}

export function CreateProfileImageResponseDtoFromJSON(json: any): CreateProfileImageResponseDto {
    return CreateProfileImageResponseDtoFromJSONTyped(json, false);
}

export function CreateProfileImageResponseDtoFromJSONTyped(json: any, ignoreDiscriminator: boolean): CreateProfileImageResponseDto {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'profileImagePath': json['profileImagePath'],
        'userId': json['userId'],
    };
}

export function CreateProfileImageResponseDtoToJSON(value?: CreateProfileImageResponseDto | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'profileImagePath': value.profileImagePath,
        'userId': value.userId,
    };
}

