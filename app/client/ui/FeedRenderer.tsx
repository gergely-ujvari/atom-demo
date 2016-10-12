import * as React from 'react';
import { Article } from "../feed/feed";

export interface FeedRendererProps {
    articles: Article[];
}

export class FeedRenderer extends React.Component<FeedRendererProps, {}> {
    render () {
        return (
            <div>
                {this.props.articles}
            </div>
        )
    }
}
