// Describing the available actions

import { Article } from "../feed/feed";
export type ApplicationActionType = 'SET_URL' | 'SET_ERROR' | 'FEED_DATA';

export interface ApplicationAction {
    type: ApplicationActionType;
    url?: string;
    errorMessage?: string;
    feedData?: Article[];
}
