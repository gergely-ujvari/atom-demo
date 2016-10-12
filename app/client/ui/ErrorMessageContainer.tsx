import { connect } from 'react-redux';
import { ErrorMessage, ErrorMessageProps } from './ErrorMessage';
import { ApplicationState } from "../store/ApplicationState";

interface ErrorMessageContainerProps {

}


function mapStateToProps (state: ApplicationState, props: ErrorMessageContainerProps): ErrorMessageProps {
    return {
        message: state.errorMessage
    } as ErrorMessageProps;
}

export const ErrorMessageContainer = connect(mapStateToProps)(ErrorMessage);
