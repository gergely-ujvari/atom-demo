import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { FeedUrlContainer } from "./FeedUrlContainer";

export class MainApp extends React.Component<{},{}> {
    render () {
        return (
            <Provider store={store}>
                <div>
                    <FeedUrlContainer/>
                </div>
            </Provider>
        )
    }
}
