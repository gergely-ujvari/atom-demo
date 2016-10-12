import * as React from 'react';
import * as ReactDOM from 'react-dom';

export interface FeedUrlProps {
    url?: string;
    setFeedUrl?: (url:string) => void;
}

// Simple form for dropping the feed URL.
export class FeedUrl extends React.Component<FeedUrlProps, {}> {
    onButtonClick (event:Event) {
        event.preventDefault();
        const url = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['feedUrl']).value.trim();
        this.props.setFeedUrl(url);
    }

    render () {
        return (
            <div>
                <input type="url"
                       ref="feedUrl"
                       defaultValue={this.props.url}
                />

                <button type="submit"
                        onClick={this.onButtonClick.bind(this)}
                >
                    Feed
                </button>
            </div>
        )
    }
}