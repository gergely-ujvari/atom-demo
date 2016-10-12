import { ApplicationState } from './ApplicationState';
import { ApplicationAction } from './ApplicationAction';

export function setStartState (): ApplicationState {
    return {
        feedUrl: '',
        feedData: null,
        errorMessage: ''
    };
}

export function reducer (state: ApplicationState, action: ApplicationAction) {
    switch (action.type) {
        case "SET_URL":
            state.feedUrl = action.url;
            return state;
        case "SET_ERROR":
            state.errorMessage = action.errorMessage;
            return state;
        case "FEED_DATA":
            state.feedData = action.feedData;
            return state;
        default:
            return state;
    }
}