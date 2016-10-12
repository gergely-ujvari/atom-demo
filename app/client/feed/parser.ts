// Handling HTTP request and parsing of the atom feed

import HTTPResponse = HTTP.HTTPResponse;
import { ArticleProperties, MetaProperties, AtomFeed } from "./feed";
let FeedParser = require('feedparser');
let request = require('request');

export function processUrl(url: string, cb:(err:Error, feed?:AtomFeed) => void) {
    let req = request(url);
    let feedParser = new FeedParser();

    req.on('error', (error:Error) => {
        return cb(error);
    });

    req.on('response', (res: HTTPResponse) => {
        if (res.statusCode !== 200) {
            return cb(new Error('Bad status code'));
        }

        this.pipe(feedParser);
    });

    feedParser.on('error', (error:Error) => {
        return cb(error);
    });

    feedParser.on('readable', () => {
        let articles: ArticleProperties[] = [];

        let stream = this;
        let meta:MetaProperties = stream.meta;
        let item:ArticleProperties;

        while (item = stream.read()) {
            articles.push(item);
        }

        cb(null, {
            meta:meta,
            articles: articles
        } as AtomFeed);
    });
}