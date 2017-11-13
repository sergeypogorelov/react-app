export default class ReduxPromiseMiddlewareObserver {

    constructor() {
        this.init();
    }

    start() {
        this.enabled = true;
    }

    stop() {
        this.enabled = false;
    }

    registerPromise(promise) {
        if (this.enabled) {
            this.promises.push(promise);
            console.log('Promise registered.');
        }
    }

    waitForAllPromisesDone() {
        return new Promise((resolve, reject) => {
            console.log('Wait for promises resolved.');
            Promise.all(this.promises)
                .then(result => {
                    console.log('Promises resolved.');
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