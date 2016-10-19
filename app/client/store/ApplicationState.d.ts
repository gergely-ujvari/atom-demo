import { AtomFeed } from "../../common/feed/feed";

export interface ApplicationState {
    errorMessage: string;
    feedUrl: string;
    fetching: boolean;
    feed: AtomFeed;
}
