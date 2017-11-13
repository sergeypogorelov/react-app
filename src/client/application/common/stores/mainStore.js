import { applyMiddleware, createStore } from 'redux';
import reduxPromiseMiddleware from 'redux-promise-middleware';

import reducer from '../reducers';

export function configureStore(params) {
    if (!params) {
        params = {};
    }

    let { initialState, middleware } = params;

    if (initialState) {
        if (middleware) {
            console.log('Store is full.');
            return createStore(reducer, initialState, applyMiddleware(middleware, reduxPromiseMiddleware()));
        }

        console.log('Store with initialState.');
        return createStore(reducer, initialState, applyMiddleware(reduxPromiseMiddleware()));
    }

    if (middleware) {
        console.log('Store with middleware.');
        return createStore(reducer, applyMiddleware(middleware, reduxPromiseMiddleware()));
    }

    console.log('Store is empty.');
    return createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
}

export default configureStore();