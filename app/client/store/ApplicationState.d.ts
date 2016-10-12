import { AtomArticle } from "../feed/feed";

export interface ApplicationState {
    feedUrl: string;
    errorMessage: string;
    articles: AtomArticle[];
}
