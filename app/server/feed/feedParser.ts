// Fetching the Atom feed

let parser = require('node-feedparser');
let validUrl = require('valid-url');
import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';
import { AtomFeed } from "../../common/feed/feed";

Meteor.methods({
    processUrl(url: string) {
        if (!validUrl.isUri(url)) {
            throw new Meteor.Error('Invalid URL (' + url + ')');
        }

        let wrappedFn = function(cb:(error:Meteor.Error, feed?:AtomFeed) => void) {
            // Get the atom-feed-xml
            HTTP.get(url, function (error:Error, res:HTTP.HTTPResponse) {
                // Request error
                if (error) {
                    return cb(new Meteor.Error(error.toString()));
                }

                // Bad request
                if (res.statusCode !== 200) {
                    return cb(new Meteor.Error('Bad status code - ' + res.statusCode));
                }

                try {
                    // Parse the data
                    parser(res.content, function (parseError:Error, ret:AtomFeed) {
                        if (parseError) {
                            return cb(new Meteor.Error(parseError.toString()));
                        }

                        return cb(null, ret);
                    });
                }
                // Catch Parser exceptions
                catch (error) {
                    console.error(error);
                    return cb(new Meteor.Error('URL (' + url + ') is not an atom feed'));
                }
            });
        };

        let syncExtract = Meteor.wrapAsync(wrappedFn);
        return syncExtract();
    }
});
