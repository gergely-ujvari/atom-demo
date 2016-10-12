// Definitions for the received atom feed
// see: https://github.com/danmactough/node-feedparser

interface Source {
    url: string;
    title?: string;
}

interface Enclosure {
    url: string;
    type?: string;
    length?: number;
}

export interface MetaProperties {
    title?: string;
    description?: string;
    link?: string;
    xmlurl?: string;
    date?: string;
    pubdate?: string;
    author?: string;
    language?: string;
    image?: Source;
    favicon?: string;
    copyright?: string;
    generator?: string;
    categories?: string[];
}

export interface ArticleProperties {
    title?: string;
    description?: string;
    summary?: string;
    link?: string;
    origlink?: string;
    permalink?: string;
    date?: string;
    pubdate?: string;
    author?: string;
    guid?: string;
    comments?: string;
    image?: Source;
    categories?: string[];
    source?: Source;
    enclosures?:  Enclosure[];
    meta?: MetaProperties;
}

export interface AtomFeed {
    meta: MetaProperties;
    articles: ArticleProperties;
}
