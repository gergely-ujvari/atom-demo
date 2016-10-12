// Fetching the Atom feed - using YQL as a free proxy

let feed = require("feed-read-parser");
let validUrl = require('valid-url');
import { HTTP } from 'meteor/http';
import { AtomArticle } from "./feed";

const proxyUrl = 'https://query.yahooapis.com/v1/public/yql?q=';

function getSelectString (url: string) {
    return "select * from xml where url = '"  + url + "'";
}

function getProxyUrl (url: string) {
    return proxyUrl + encodeURIComponent(getSelectString(url));
}

export function processUrl(url: string, cb:(err:Error, articles?: AtomArticle[]) => void) {
    if (!validUrl.isUri(url)) {
        return cb(new Error('Invalid URL (' + url + ')'));
    }

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

            return cb(null, articles);
        });
    });
}