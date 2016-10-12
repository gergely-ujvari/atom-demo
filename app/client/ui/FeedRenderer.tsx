import * as React from 'react';
import { AtomArticle } from "../feed/feed";
import { Article } from "./Article";

export interface FeedRendererProps {
    articles: AtomArticle[];
}

export class FeedRenderer extends React.Component<FeedRendererProps, {}> {
    renderHeader () {
        if (this.props.articles.length > 1) {
            return (
                <h4>Showing {this.props.articles.length} articles</h4>
            );
        } else {
            return (
                <h4>Showing {this.props.articles.length} article</h4>
            );
        }
    }

    renderArticles () {
        return this.props.articles.map((a:AtomArticle, index:number) => {
            return <Article article={a} key={index}/>;
        });
    }

    render () {
        if (!this.props.articles) {
            return null;
        }

        return (
            <div className="atom-feed-renderer">
                {this.renderHeader()}

                <ul className="list-group">
                    {this.renderArticles()}
                </ul>
            </div>
        );
    }
}
