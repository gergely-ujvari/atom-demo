import { ApplicationState } from './ApplicationState';
import { ApplicationAction } from './ApplicationAction';

function getNewState(state: ApplicationState, newState: ApplicationState) {
    return (<any>Object).assign({}, state, newState);
}

export function setStartState (): ApplicationState {
    return {
        feedUrl: '',
        feed: null,
        fetching: false,
        errorMessage: ''
    };
}

export function reducer (state: ApplicationState, action: ApplicationAction) {
    switch (action.type) {
        case "SET_URL":
            return getNewState(state, { feedUrl: action.url, errorMessage: '', feed: null, fetching: true } as ApplicationState);
        case "SET_ERROR":
            return getNewState(state, { errorMessage: action.errorMessage, fetching: false } as ApplicationState);
        case "FEED_DATA":
            return getNewState(state, { feed: action.feedData, fetching: false } as ApplicationState);
        default:
            return state;
    }
}