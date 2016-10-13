// Definitions for the received atom feed article
// defined by node-feedparser

export interface Article {
    author?: string;
    date?: Date;
    description?: string;
    link?: string;
    title?: string;
    summary?: string;
}

// Site is the general metadata
export interface AtomFeed {
    items: Article[];
    site: Article
}
