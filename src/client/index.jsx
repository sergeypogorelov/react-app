import React from 'react';
import { hydrate } from 'react-dom'
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';

import { configureStore } from './application/common/stores/mainStore';
import App from './application/App.Component';

// Grab the state from a global variable injected into the server-generated HTML
let preloadedState = window.__PRELOADED_STATE__;

// Allow the passed state to be garbage-collected
delete window.__PRELOADED_STATE__;

let mainStore = configureStore({
    initialState: preloadedState
});

hydrate(
    <Provider store={mainStore}>
        <Router>
            <App preventDispatch={false} />
        </Router>
    </Provider>,
    document.getElementById('app')
);