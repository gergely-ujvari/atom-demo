import * as React from 'react';
import { Provider } from 'react-redux';
import { store } from '../store/store';
import { FeedUrlContainer } from "./FeedUrlContainer";
import { ErrorMessageContainer } from "./ErrorMessageContainer";
import { FeedRendererContainer } from "./FeedRendererContainer";

// The Root component
export class MainApp extends React.Component<{},{}> {
    render () {
        return (
            <Provider store={store}>
                <div className="panel panel-default">
                    <div className="panel-heading">
                        <h3 className="panel-title">
                            Simple Atom feed demo
                        </h3>
                    </div>

                    <div className="panel-body col-xs-10 col-xs-offset-1 col-md-6 col-md-offset-3">
                        <FeedUrlContainer/>
                        <ErrorMessageContainer/>
                        <FeedRendererContainer/>
                    </div>
                </div>
            </Provider>
        )
    }
}
