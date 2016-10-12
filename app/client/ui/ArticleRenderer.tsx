
import * as React from 'react';
import { Article } from "../feed/feed";

interface ArticleProps {
    article: Article;
}

// Component responsible for rendering a simple Article
export class ArticleRenderer extends React.Component<ArticleProps,{}> {
    render () {
        if (!this.props.article) {
            return null;
        }

        return (
            <li className="list-group-item list-group-item-action panel-primary atom-article-list-item">
                <div className="list-group-item-heading panel-heading">
                    <h5>{this.props.article.title}
                        <span className="pull-right">
                            <a className="atom-article-date-link"
                               href={this.props.article.link}
                               target="_blank">
                                {this.props.article.published.toLocaleString()}
                            </a>
                        </span>
                    </h5>
                </div>


                <div className="list-group-item-text atom-article-content"
                     dangerouslySetInnerHTML={{__html: this.props.article.content}}
                />
            </li>
        )
    }
}