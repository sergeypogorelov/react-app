export default class URL {
    
    static parseQuery(url) {
        if (!url)
            return {};

        let pairs = url.substr(url.indexOf('?') + 1).split('&');
        return pairs.reduce((params, pair) => {
            let [key, val] = pair.split('=')
            return Object.assign(params, {[key]: decodeURIComponent(val)})
        }, {});
    }

    static generateQuery(queryParams) {
        if (!queryParams)
            return '';

        let params = [];
        for (let prop in queryParams) {
            if (queryParams.hasOwnProperty(prop)) {
                params.push(prop);
            }
        }

        let pairs = params.map(p => p + '=' + encodeURIComponent(queryParams[p]))
        return '?' + pairs.join('&');
    }

}