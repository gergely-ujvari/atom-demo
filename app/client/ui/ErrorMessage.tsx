import * as React from 'react';

export interface ErrorMessageProps {
    message?: string;
}

export class ErrorMessage extends React.Component<ErrorMessageProps,{}> {
    render () {
        // Don't show for empty message
        if (!this.props.message || !this.props.message.length) {
            return null;
        }

        return (
            <div className="row alert alert-danger atom-error-message">
                Error: {this.props.message}
            </div>
        );
    }
}
