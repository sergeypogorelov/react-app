import DATA from '../_data/films';

export default class FilmsStorage {

    static getItem(title) {
        return new Promise((resolve, reject) => {
            let items = DATA.filter(i => i.title === title);

            if (items.length === 0) {
                resolve(items[0]);
            } else {
                resolve(null);
            }
        });
    }

    static searchItem(strToSearch, fieldNameToSearchBy) {
        return new Promise((resolve, reject) => {
            let items = DATA.filter(i => i[fieldNameToSearchBy].indexOf(strToSearch) !== -1);
            resolve(items);
        });
    }
}