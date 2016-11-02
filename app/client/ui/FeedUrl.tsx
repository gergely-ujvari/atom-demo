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
export const FeedUrl:React.StatelessComponent<FeedUrlProps> = (props:FeedUrlProps) => {
    let url:string = props.url;

    const submit = () => {
        props.setFeedUrl(url);
    };

    const onButtonClick = (event:Event) => {
        event.preventDefault();
        submit();
    };

    // React to Enter button
    const onInputKeyPress = (event:KeyboardEvent) => {
        props.clearError();

        if (event.key === 'Enter') {
            submit();
        }
    };

    const onChange = (event:Event) => {
        url = (event.target as any).value;
    };

    const renderSpinner = () => {
        if (props.fetching) {
            return (
                <Spinner/>
            )
        } else {
            return null;
        }
    };

    return (
        <div className="row">
            <div className="input-group">
                <input className="form-control"
                       defaultValue={props.url}
                       onKeyPress={onInputKeyPress}
                       onChange={onChange}
                       placeholder="Feed URL"
                       type="url"
                       autoFocus
                />

                <span className="input-group-btn">
                    <button className="btn btn-primary"
                            disabled={props.fetching}
                            type="submit"
                            onClick={onButtonClick.bind(this)}
                    >
                        { renderSpinner() }
                        Read
                    </button>
                </span>
            </div>
        </div>
    )
};
