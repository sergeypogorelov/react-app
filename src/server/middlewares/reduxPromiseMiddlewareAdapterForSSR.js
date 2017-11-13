export default function (reduxPromiseMiddlewareObserver) {
    return store => next => action => {
        if (action.payload && action.payload.then && action.payload.catch) {
            reduxPromiseMiddlewareObserver.registerPromise(action.payload);
        }
        console.log(`Action type handled: ${action.type}.`);
        return next(action);
    };
}