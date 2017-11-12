import FilmsAPI from '../../helpers/FilmsAPI';

export function loadFilm(name) {
    return {
        type: 'LOAD_FILM',
        payload: FilmsAPI.getByName(name)
    };
}

export function loadFilms(query, filter, sort) {
    return {
        type: 'LOAD_FILMS',
        payload: FilmsAPI.search(query, filter, sort)
    }
}

export function loadRelatedFilms(director) {
    return {
        type: 'LOAD_RELATED_FILMS',
        payload: FilmsAPI.search(director, 'director', 'rating')
    }
}