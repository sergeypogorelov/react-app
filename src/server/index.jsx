import React from 'react';
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';

import path from 'path';
import express from 'express';

import config from '../../app.config';

import { configureStore } from '../client/application/common/stores/mainStore';
import App from '../client/application/App.Component.jsx';

import ReduxPromiseMiddlewareObserver from './helpers/ReduxPromiseMiddlewareObserver';
import reduxPromiseMiddlewareAdapterForSSR from './middlewares/reduxPromiseMiddlewareAdapterForSSR';

const PORT = 4655;
const APPLICATION = express();

APPLICATION.get('/index.html', handleRequest);
APPLICATION.use(express.static(config.paths.dist));
APPLICATION.get('/*', handleRequest);
APPLICATION.listen(PORT);

console.log(`Express server is listening on port ${PORT}.`);

///

function handleRequest(req, res) {
    let observer = new ReduxPromiseMiddlewareObserver();

    let context = {};
    let store = configureStore({
        middleware: reduxPromiseMiddlewareAdapterForSSR(observer)
    });

    observer.start();

    console.log('Start fake rendering.');

    renderToString(
        <Provider store={store}>
            <Router location={req.url} context={context}>
                <App />
            </Router>
        </Provider>
    );

    console.log('Stop fake rendering.');

    if (context.url) {
        res.redirect(context.url);
    } else {
        observer.waitForAllPromisesDone()
            .then(() => {
                console.log('Stop waiting.');

                observer.stop();

                // Render the component to a string
                let html = renderToString(
                    <Provider store={store}>
                        <Router location={req.url} context={context}>
                            <App preventMount={true} />
                        </Router>
                    </Provider>
                );

                // Grab the initial state from our Redux store
                let preloadedState = store.getState();

                console.log('Send content.')

                // Send the rendered page back to the client
                res.send(renderFullPage(html, preloadedState));
            })
            .catch(error => {
                console.error(error);
            });
    }

    console.log('Start waiting.');

    
}

function renderFullPage(html, preloadedState) {
    return `
        <!doctype html>
        <html>
            <head>
                <title>Test</title>
                <link href="/index.css">
            </head>
            <body>
                <div id="app">${html}</div>
                <script>
                    window.__PRELOADED_STATE__ = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
                </script>
                <script src="/index.bundle.js"></script>
            </body>
        </html>
    `;
}