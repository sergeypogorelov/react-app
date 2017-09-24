import DATA from '../_data/films';

export default class FilmsStorage {

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

        strToSearch = strToSearch || '';
        searchType = searchType || 'title';
        searchSort = searchSort || 'pubdate';

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