import DATA from '../_data/films';

export default class FilmsStorage {

    static get searchType() {
        if (!this._searchType) {
            this._searchType = 'title';
        }

        return this._searchType;
    }

    static set searchType(value) {
        this._searchType = value;
    }

    static get searchSort() {
        if (!this._searchSort) {
            this._searchSort = 'pubdate';
        }

        return this._searchSort;
    }

    static set searchSort(value) {
        this._searchSort = value;
    }

    static getItem(name) {
        return new Promise((resolve, reject) => {
            let items = DATA.filter(i => i.name === name);

            if (items.length === 0) {
                resolve(null);
            } else {
                resolve(items[0]);
            }
        });
    }

    static searchItem(strToSearch, searchType, searchSort) {

        searchType = searchType || this.searchType;
        searchSort = searchSort || this.searchSort;

        return new Promise((resolve, reject) => {
            if (strToSearch) {

                let search = strToSearch.toLowerCase();
                let items = DATA
                    .filter(i => i[searchType].toLowerCase().indexOf(search) !== -1)
                    .sort((a, b) => a[searchSort] > b[searchSort]);

                resolve(items);

            } else {
                resolve([]);
            }
        });
        
    }
}