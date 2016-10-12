import { ApplicationState } from './ApplicationState';
import { ApplicationAction } from './ApplicationAction';

function getNewState(state: ApplicationState, newState: ApplicationState) {
    return (<any>Object).assign({}, state, newState);
}

export function setStartState (): ApplicationState {
    return {
        feedUrl: '',
        articles: null,
        errorMessage: ''
    };
}

export function reducer (state: ApplicationState, action: ApplicationAction) {
    switch (action.type) {
        case "SET_URL":
            return getNewState(state, { feedUrl: action.url, errorMessage: '', articles: null } as ApplicationState);
        case "SET_ERROR":
            return getNewState(state, { errorMessage: action.errorMessage} as ApplicationState);
        case "FEED_DATA":
            return getNewState(state, { articles: action.feedData} as ApplicationState);
        default:
            return state;
    }
}