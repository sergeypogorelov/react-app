export default function (reduxPromiseMiddlewareObserver) {
    return store => next => action => {
        console.log(action.type);
        if (action.payload && action.payload.then && action.payload.catch) {
            console.log('Promise registered...');
            reduxPromiseMiddlewareObserver.registerPromise(action.payload);
        }
        return next(action);
    };
}