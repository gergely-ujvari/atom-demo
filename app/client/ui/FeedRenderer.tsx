import * as React from 'react';
import { Article, AtomFeed } from "../../common/feed/feed";
import { ArticleRenderer } from "./ArticleRenderer";

export interface FeedRendererProps {
    feed?: AtomFeed;
}

// Component for rendering the found article list
export class FeedRenderer extends React.Component<FeedRendererProps, {}> {
    renderNoResult () {
        if (!this.props.feed.items || !this.props.feed.items.length) {
            return <h4>No article found!</h4>;
        }

        return null;
    }

    renderArticles () {
        return this.props.feed.items.map((a:Article, index:number) => {
            return <ArticleRenderer article={a} header={false} key={index}/>;
        });
    }

    render () {
        if (!this.props.feed) {
            return null;
        }

        return (
            <div className="atom-feed-renderer">
                {this.renderNoResult()}

                <ul className="list-group">
                    <ArticleRenderer article={this.props.feed.site} header={true} key={-1}/>
                    {this.renderArticles()}
                </ul>
            </div>
        );
    }
}
