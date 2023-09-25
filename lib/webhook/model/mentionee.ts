/**
 * Webhook Type Definition
 * Webhook event definition of the LINE Messaging API
 *
 * The version of the OpenAPI document: 1.0.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { AllMentionee } from './models';
import { UserMentionee } from './models';

export type Mentionee =
        | AllMentionee // all
        | UserMentionee // user
;

export type MentioneeBase =  { 
    /**
    * Mentioned target.
    */
    'type'?: string/**/;
    /**
    * Index position of the user mention for a character in text, with the first character being at position 0.
    */
    'index': number/**/;
    /**
    * The length of the text of the mentioned user. For a mention @example, 8 is the length.
    */
    'length': number/**/;
}

