import { store } from '../store/store';
import { Meteor } from 'meteor/meteor';
import { AtomFeed } from "../../common/feed/feed";
import { ApplicationAction } from "../store/ApplicationAction";

// Using the low level API to track URL changes
let previousUrl:string = '';
function handleUrlChange () {
    const currentUrl = store.getState().feedUrl;

    if (currentUrl === previousUrl) {
        return;
    }

    previousUrl = currentUrl;

    // When new URL is set, start processing the feed
    Meteor.call('processUrl', currentUrl, (error: Error, result: AtomFeed) => {
        if (error) {
            store.dispatch({
                type: "SET_ERROR",
                errorMessage: error.message
            } as ApplicationAction);
            return;
        }

        store.dispatch({
            type: "FEED_DATA",
            feedData: result
        } as ApplicationAction);
    });
}

store.subscribe(handleUrlChange);
