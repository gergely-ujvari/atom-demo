// Fetching the Atom feed - using YQL as a free proxy

import { HTTP } from 'meteor/http';
let feed = require("feed-read-parser");
import { AtomArticle } from "./feed";

const proxyUrl = 'https://query.yahooapis.com/v1/public/yql?q=';

function getSelectString (url: string) {
    return "select * from xml where url = '"  + url + "'";
}

function getProxyUrl (url: string) {
    return proxyUrl + encodeURIComponent(getSelectString(url));
}

export function processUrl(url: string, cb:(err:Error, articles?: AtomArticle[]) => void) {
    HTTP.get(getProxyUrl(url), function (error:Error, res:HTTP.HTTPResponse) {
        if (error) {
            return cb(error);
        }

        if (res.statusCode !== 200) {
            return cb(new Error('Bad status code - ' + res.statusCode));
        }

        feed.atom(res.content, function (parseError: Error, articles:AtomArticle[]) {
            if (parseError) {
                return cb(parseError);
            }

            console.log('articles', articles);
            return cb(null, articles);
        });
    });
}