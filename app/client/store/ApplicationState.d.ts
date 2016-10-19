import { AtomFeed } from "../../common/feed/feed";

export interface ApplicationState {
    feedUrl: string;
    errorMessage: string;
    feed: AtomFeed;
}
