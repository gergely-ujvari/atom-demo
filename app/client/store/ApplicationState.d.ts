import { AtomFeed } from "../feed/feed";

export interface ApplicationState {
    errorMessage: string;
    feedUrl: string;
    fetching: boolean;
    feed: AtomFeed;
}
