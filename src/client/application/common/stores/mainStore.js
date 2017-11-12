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
            console.log('store is full...');
            return createStore(reducer, initialState, applyMiddleware(middleware, reduxPromiseMiddleware()));
        }

        console.log('store without middleware...');
        return createStore(reducer, initialState, applyMiddleware(reduxPromiseMiddleware()));
    }

    if (middleware) {
        console.log('store without initialState...');
        return createStore(reducer, applyMiddleware(middleware, reduxPromiseMiddleware()));
    }

    console.log('store is empty...');
    return createStore(reducer, applyMiddleware(reduxPromiseMiddleware()));
}

export default configureStore();