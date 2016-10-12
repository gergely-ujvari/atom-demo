import { connect } from 'react-redux';
import { FeedRenderer, FeedRendererProps } from './FeedRenderer';
import { ApplicationState } from "../store/ApplicationState";

interface FeedRendererContainerProps {

}


function mapStateToProps (state: ApplicationState, props: FeedRendererContainerProps): FeedRendererProps {
    return {
        articles: state.articles
    } as FeedRendererProps;
}

export const FeedRendererContainer = connect(mapStateToProps)(FeedRenderer);
