import * as React from 'react';

export interface ErrorMessageProps {
    message?: string;
}

export class ErrorMessage extends React.Component<ErrorMessageProps,{}> {
    render () {
        console.log('render', this.props);
        return (
            <div>
                Error: {this.props.message}
            </div>
        );
    }
}
