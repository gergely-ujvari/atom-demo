import * as React from 'react';
import { Article } from "../feed/feed";
import { ArticleRenderer } from "./ArticleRenderer";

export interface FeedRendererProps {
    articles: Article[];
}

// Component for rendering the found article list
export class FeedRenderer extends React.Component<FeedRendererProps, {}> {
    renderHeader () {
        const articleNumber:number = this.props.articles.length;

        switch (articleNumber) {
            case 0:
                return <h4>No article found!</h4>;
            case 1:
                return <h4>Showing {articleNumber} article</h4>;
            default:
                return <h4>Showing {articleNumber} articles</h4>
        }
    }

    renderArticles () {
        return this.props.articles.map((a:Article, index:number) => {
            return <ArticleRenderer article={a} key={index}/>;
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
