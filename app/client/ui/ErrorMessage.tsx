import * as React from 'react';

export interface ErrorMessageProps {
    message?: string;
}

export class ErrorMessage extends React.Component<ErrorMessageProps,{}> {
    render () {
        return (
            <div>
                {this.props.message}
            </div>
        );
    }
}
