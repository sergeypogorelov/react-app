import FilmsAPI from '../../helpers/FilmsAPI';

export function loadFilm(name) {
    return {
        type: 'LOAD_FILM',
        payload: FilmsAPI.getItem(name)
    };
}

export function loadFilms(query, filter, sort) {
    return {
        type: 'LOAD_FILMS',
        payload: FilmsAPI.searchItem(query, filter, sort)
    }
}

export function loadRelatedFilms(director) {
    return {
        type: 'LOAD_RELATED_FILMS',
        payload: FilmsAPI.searchItem(director, 'director', 'rating')
    }
}