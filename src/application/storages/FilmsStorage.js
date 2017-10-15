import axios from 'axios';
import escapeStringRegexp from 'escape-string-regexp';

import URL from '../helpers/URL';

export const API_URL = 'http://localhost:3600/films';

export default class FilmsStorage {

    static getItem(name) {
        return new Promise((resolve, reject) => {

            let params = {
                name_like: escapeStringRegexp(name)
            };
            
            axios.get(API_URL + URL.generateQuery(params))
                .then(response => {
                    resolve(response.data[0]);
                })
                .catch(error => {
                    reject(error);
                });
            
        });
    }

    static searchItem(strToSearch, searchType, searchSort) {
        return new Promise((resolve, reject) => {

            strToSearch = strToSearch || '';
            searchType = searchType || 'title';
            searchSort = searchSort || 'pubdate';

            let params = {};

            params[searchType + '_like'] = escapeStringRegexp(strToSearch);

            params._sort = searchSort;
            params._order = 'asc';

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