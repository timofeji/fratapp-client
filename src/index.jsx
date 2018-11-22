import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { ConnectedRouter } from 'connected-react-router'
import { BrowserRouter as Router } from 'react-router-dom';
import store, { history } from "./store";

import App from './containers/App';

import * as serviceWorker from './serviceWorker';

ReactDOM.render(
    <Provider store={store}>
        {/* <ConnectedRouter history={history}> */}
        <Router>
            <div>
                <App />
            </div>
        </Router> 
        {/* </ConnectedRouter> */}
    </Provider>,
    document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();