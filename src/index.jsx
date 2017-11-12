import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';

import mainStore from './application/common/stores/mainStore';
import App from './application/App.Component';

ReactDOM.render(
    <Provider store={mainStore}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('app')
);