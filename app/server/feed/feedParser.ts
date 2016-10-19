// Fetching the Atom feed - using YQL as a free proxy

let parser = require('node-feedparser');
let validUrl = require('valid-url');
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { AtomFeed } from "../../common/feed/feed";

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


Meteor.methods({
    processUrl(url: string) {
        // Check validity of URL
        if (!validUrl.isUri(url)) {
            throw new Meteor.Error('Invalid URL (' + url + ')');
        }

        let wrappedFn = function(cb:(error:Meteor.Error, feed?:AtomFeed) => void) {
            // Get the atom-feed-xml
            HTTP.get(getProxyUrl(url), function (error:Error, res:HTTP.HTTPResponse) {
                // Request error
                if (error) {
                    return cb(new Meteor.Error(error.toString()));
                }

                // Bad request
                if (res.statusCode !== 200) {
                    return cb(new Meteor.Error('Bad status code - ' + res.statusCode));
                }

                // Empty content
                if (checkForEmptyResult(res.content)) {
                    return cb(new Meteor.Error('No feed found for URL (' + url + ')'));
                }

                // Parse the data
                parser(getResponseBody(res.content), function (parseError:Error, ret:AtomFeed) {
                    if (parseError) {
                        return cb(new Meteor.Error(parseError.toString()));
                    }

                    return cb(null, ret);
                });
            });
        };

        let syncExtract = Meteor.wrapAsync(wrappedFn);
        return syncExtract();
    }
});
