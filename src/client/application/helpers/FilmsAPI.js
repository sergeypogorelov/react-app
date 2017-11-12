import axios from 'axios';
import escapeStringRegexp from 'escape-string-regexp';

import URL from './URL';

export const API_URL = 'http://localhost:3604/films';

export default class FilmsAPI {

    static getByName(name) {
        return new Promise((resolve, reject) => {

            name = name || '';

            let params = {
                name_like: escapeStringRegexp(name)
            };
            
            axios.get(API_URL + URL.generateQuery(params))
                .then(response => {
                    if (response.data.length) {
                        resolve(response.data[0]);
                    } else {
                        resolve({ notFound: true });
                    }
                })
                .catch(error => {
                    reject(error);
                });
            
        });
    }

    static search(strToSearch, searchType, searchSort) {
        return new Promise((resolve, reject) => {

            strToSearch = strToSearch || '';
            searchType = searchType || 'title';
            searchSort = searchSort || 'pubdate';

            if (strToSearch === '') {
                resolve([]);
            }

            let params = {};

            params[searchType + '_like'] = escapeStringRegexp(strToSearch);

            params._sort = searchSort;
            params._order = 'desc';

            axios.get(API_URL + URL.generateQuery(params))
                .then(response => {
                    resolve(response.data);
                })
                .catch(error => {
                    reject(error);
                });
            
        });
    }
}