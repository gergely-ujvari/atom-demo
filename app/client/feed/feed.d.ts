// Definitions for the received atom feed article
// See https://www.npmjs.com/package/feed-read-parser

export interface Article {
    title?: string;
    author?: string;
    link?: string;
    content?: string;
    published?: Date;
    feed?: {
        name?: string;
        source?: string;
        link?: string;
    }
}