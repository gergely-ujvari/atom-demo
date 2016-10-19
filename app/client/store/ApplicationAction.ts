// Describing the available actions

import { AtomFeed } from "../../common/feed/feed";
export type ApplicationActionType = 'SET_URL' | 'SET_ERROR' | 'FEED_DATA';

export interface ApplicationAction {
    type: ApplicationActionType;
    url?: string;
    errorMessage?: string;
    feedData?: AtomFeed;
}
