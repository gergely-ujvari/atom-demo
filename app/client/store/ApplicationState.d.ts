import { AtomFeed } from "../feed/feed";

export interface ApplicationState {
    feedUrl: string;
    errorMessage: string;
    feed: AtomFeed;
}
