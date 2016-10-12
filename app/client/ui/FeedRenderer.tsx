import * as React from 'react';
import { AtomArticle } from "../feed/feed";
import { Article } from "./Article";

export interface FeedRendererProps {
    articles: AtomArticle[];
}

export class FeedRenderer extends React.Component<FeedRendererProps, {}> {
    renderArticles () {
        return this.props.articles.map((a:AtomArticle, index:number) => {
            return <Article article={a} key={index}/>;
        })
    }

    render () {
        if (!this.props.articles) {
            return null;
        }

        return (
            <ul className="list-group atom-feed-renderer">
                {this.renderArticles()}
            </ul>
        )
    }
}
