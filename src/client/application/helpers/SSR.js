export default class SSR {
    
    static checkOnFirstLoad() {
        if (typeof window !== 'object')
            return null;

        if (window.__FIRST_LOAD__) {
            window.__FIRST_LOAD__ = false;
            return true;
        }

        return false;
    }

    static isBrowserExecution() {
        return typeof window === 'object';
    }

    static isServerExecution() {
        return typeof window !== 'object';
    }

}