import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Spinner } from './Spinner';

export interface FeedUrlProps {
    fetching?: boolean;
    url?: string;
    setFeedUrl?: (url:string) => void;
    clearError?: () => void;
}

// Simple form for dropping the feed URL.
export class FeedUrl extends React.Component<FeedUrlProps, {}> {
    private submit () {
        const url = ReactDOM.findDOMNode<HTMLInputElement>(this.refs['feedUrl']).value.trim();
        this.props.setFeedUrl(url);
    }

    onButtonClick (event:Event) {
        event.preventDefault();
        this.submit();
    }

    // React to Enter button
    onInputKeyPress (event:KeyboardEvent) {
        this.props.clearError();

        if (event.key === 'Enter') {
            this.submit();
        }
    }

    renderSpinner () {
        if (this.props.fetching) {
            return (
                <Spinner/>
            )
        } else {
            return null;
        }
    }

    public render () {
        return (
            <div className="row">
                <div className="input-group">
                    <input className="form-control"
                           defaultValue={this.props.url}
                           onKeyPress={this.onInputKeyPress.bind(this)}
                           placeholder="Feed URL"
                           ref="feedUrl"
                           type="url"
                           autoFocus
                    />

                    <span className="input-group-btn">
                        <button className="btn btn-primary"
                                disabled={this.props.fetching}
                                type="submit"
                                onClick={this.onButtonClick.bind(this)}
                        >
                            { this.renderSpinner() }
                            Read
                        </button>
                    </span>
                </div>
            </div>
        )
    }
}