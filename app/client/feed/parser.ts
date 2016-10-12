// Handling HTTP request and parsing of the atom feed

import HTTPResponse = HTTP.HTTPResponse;
import { ArticleProperties, MetaProperties, AtomFeed } from "./feed";
let FeedParser = require('feedparser');
let request = require('request');

export function processUrl(url: string, cb:(err:Error, feed?:AtomFeed) => void) {
    try {
        let req = request(url);

        // Some feeds do not respond without user-agent and accept headers.
        req.setHeader('user-agent', 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_8_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/31.0.1650.63 Safari/537.36');
        req.setHeader('accept', 'text/html,application/xhtml+xml');

        let feedParser = new FeedParser();

        req.on('error', (error:Error) => {
            return cb(error);
        });

        req.on('response', (res: HTTPResponse) => {
            if (res.statusCode !== 200) {
                return cb(new Error('Bad status code - ' + res.statusCode));
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
    catch (error) {
        return cb(error);
    }
}