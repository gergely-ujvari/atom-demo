// Fetching the Atom feed - using YQL as a free proxy

let parser = require('node-feedparser');
let validUrl = require('valid-url');
import { HTTP } from 'meteor/http';
import { AtomFeed } from "./feed";

const proxyUrl = 'https://query.yahooapis.com/v1/public/yql?q=';

function getSelectString (url: string) {
    return "select * from xml where url = '"  + url + "'";
}

function getProxyUrl (url: string) {
    return proxyUrl + encodeURIComponent(getSelectString(url));
}

// Simple way to extract response body without parsing the xml twice
function getResponseBody (content: string) {
    const dataStartIndex = content.indexOf('<results>') + '<results>'.length;
    const dataEndIndex = content.lastIndexOf('</results>');
    return content.substring(dataStartIndex, dataEndIndex);
}

// Simple way to see if YQL has given an empty answer
function checkForEmptyResult (content: string) {
    return content.indexOf('<results>') === -1;
}

export function processUrl(url: string, cb:(err:Error, feed?: AtomFeed) => void) {
    try {
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

            if (checkForEmptyResult(res.content)) {
                return cb(new Error('No feed found for URL (' + url + ')'));
            }

            parser(getResponseBody(res.content), function (parseError:Error, ret:AtomFeed) {
                if (parseError) {
                    return cb(parseError);
                }

                return cb(null, ret);
            });
        });
    }
    catch (error) {
        return cb(error);
    }
}
