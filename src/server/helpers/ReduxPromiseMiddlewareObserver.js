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
            this.handler(resolve, reject);
        });
    }

    handler(resolve, reject) {

        if (this.promises.length) {

            let promises = this.promises;
            this.promises = [];

            Promise.all(promises)
                .then(() => {
                    if (this.promises.length) {
                        this.handler(resolve, reject);
                    } else {
                        resolve();
                    }
                })
                .catch(error => {
                    reject(error);
                });

        } else {
            resolve();
        }

    }

    init() {
        this.promises = [];
        this.enabled = false;
    }
}