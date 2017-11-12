export default class ReduxPromiseMiddlewareObserver {

    constructor() {
        this.init();
    }

    start() {
        this.enabled = true;
    }

    stop() {
        this.init();
    }

    registerPromise(promise) {
        if (this.enabled) {
            this.promises.push(promise);
        }
    }

    waitForAllPromisesDone() {
        return new Promise((resolve, reject) => {
            Promise.all(this.promises)
                .then(result => {
                    resolve(result);
                })
                .catch(error => {
                    console.error(error);
                    reject(error);
                });
        });
    }

    init() {
        this.promises = [];
        this.enabled = false;
    }
}