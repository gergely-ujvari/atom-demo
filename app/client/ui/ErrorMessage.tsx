import * as React from 'react';

export interface ErrorMessageProps {
    message?: string;
}

// Responsible for showing the error message if available
export const ErrorMessage:React.StatelessComponent<ErrorMessageProps> = (props:ErrorMessageProps) => {
    // Don't show for empty message
    if (!props.message || !props.message.length) {
        return null;
    }

    return (
        <div className="row alert alert-danger atom-error-message">
            Error: {props.message}
        </div>
    );
};
