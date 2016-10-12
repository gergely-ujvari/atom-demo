import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { FeedUrlContainer } from "./FeedUrlContainer";
import { ErrorMessageContainer } from "./ErrorMessageContainer";
import { FeedRendererContainer } from "./FeedRendererContainer";

export class MainApp extends React.Component<{},{}> {
    render () {
        return (
            <Provider store={store}>
                <div>
                    <ErrorMessageContainer/>
                    <FeedUrlContainer/>
                    <FeedRendererContainer/>
                </div>
            </Provider>
        )
    }
}
