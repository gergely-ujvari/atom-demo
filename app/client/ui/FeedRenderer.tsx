import * as React from 'react';
import { AtomFeed } from "../feed/feed";

export interface FeedRendererProps {
    feed: AtomFeed;
}

export class FeedRenderer extends React.Component<FeedRendererProps, {}> {
    render () {
        return (
            <div>
                {this.props.feed}
            </div>
        )
    }
}
