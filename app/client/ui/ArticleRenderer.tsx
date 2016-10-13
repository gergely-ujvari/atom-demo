import * as React from 'react';
import * as classNames from 'classnames';
import { Article } from "../feed/feed";

interface ArticleProps {
    header: boolean;
    article: Article;
}

// Component responsible for rendering a simple Article
export class ArticleRenderer extends React.Component<ArticleProps,{}> {
    renderDateLink () {
        if (!this.props.article.date) {
            return null;
        }

        const classes = classNames({
            'atom-article-date-link': !this.props.header
        });

        return (
            <span className="pull-right">
                <a className={classes}
                   href={this.props.article.link}
                   target="_blank">
                    {this.props.article.date.toLocaleString()}
                </a>
            </span>
        );
    }

    renderBody () {
        if (this.props.article.description) {
            return (
                <div className="list-group-item-text atom-article-content"
                     dangerouslySetInnerHTML={{__html: this.props.article.description}}
                />
            );
        }

        if (this.props.article.summary) {
            return (
                <div className="list-group-item-text atom-article-content">
                    {this.props.article.summary}
                </div>
            );
        }

        return null;
    }

    render () {
        if (!this.props.article) {
            return null;
        }

        const classes = classNames({
            'list-group-item': true,
            'list-group-item-action': true,
            'panel-primary': !this.props.header,
            'panel-info': this.props.header,
            'atom-article-list-item': true

        });

        return (
            <li className={classes}>
                <div className="list-group-item-heading panel-heading">
                    <h5>
                        {this.props.article.title}
                        {this.renderDateLink()}
                    </h5>
                </div>

                {this.renderBody()}
            </li>
        )
    }
}