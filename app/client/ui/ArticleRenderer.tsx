import * as React from 'react';
import * as classNames from 'classnames';
import { Article } from "../feed/feed";

interface ArticleProps {
    header: boolean;
    article: Article;
    key?: number;
}

// Component responsible for rendering a simple Article
export const ArticleRenderer:React.StatelessComponent<ArticleProps> = (props:ArticleProps) => {
    const renderDateLink = () => {
        if (!props.article.date) {
            return null;
        }

        const classes = classNames({
            'atom-article-date-link': !props.header
        });

        return (
            <span className="pull-right">
                <a className={classes}
                   href={props.article.link}
                   target="_blank">
                    {props.article.date.toLocaleString()}
                </a>
            </span>
        );
    };

    const renderBody = () => {
        if (props.article.description) {
            return (
                <div className="list-group-item-text atom-article-content"
                     dangerouslySetInnerHTML={{__html: props.article.description}}
                />
            );
        }

        if (props.article.summary) {
            return (
                <div className="list-group-item-text atom-article-content">
                    {props.article.summary}
                </div>
            );
        }

        return null;
    };

    if (!props.article) {
        return null;
    }

    const classes = classNames({
        'list-group-item': true,
        'list-group-item-action': true,
        'panel-primary': !props.header,
        'panel-info': props.header,
        'atom-article-list-item': true

    });

    return (
        <li className={classes}>
            <div className="list-group-item-heading panel-heading">
                <h5>
                    {props.article.title}
                    {renderDateLink()}
                </h5>
            </div>

            {renderBody()}
        </li>
    );
};
