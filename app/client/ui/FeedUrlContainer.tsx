import { connect } from 'react-redux';
import { FeedUrl, FeedUrlProps } from './FeedUrl';
import { ApplicationState } from "../store/ApplicationState";
import { ApplicationAction } from "../store/ApplicationAction";

interface FeedUrlContainerProps {

}

function mapStateToProps (state: ApplicationState, props: FeedUrlContainerProps): FeedUrlProps {
    return {
        url: state.feedUrl
    } as FeedUrlProps;
}

function mapDispatchToProps (dispatch, props: FeedUrlContainerProps): FeedUrlProps {
    return {
        "setFeedUrl": (url:string) => {
            dispatch({
                type: 'SET_URL',
                url: url
            } as ApplicationAction);
        },
        "clearError": () => {
            dispatch({
                type: 'SET_ERROR',
                errorMessage: ''
            } as ApplicationAction);
        }
    } as FeedUrlProps;
}

export const FeedUrlContainer = connect(mapStateToProps, mapDispatchToProps)(FeedUrl);
