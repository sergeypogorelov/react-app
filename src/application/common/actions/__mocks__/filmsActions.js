const MOCKED_DATA = [
    {
        "name": "Ballet: VOL. 1",
        "title": "Ballet: VOL. 1",
        "year": 2003,
        "genre": "Dramas",
        "image": "/assets/img/ballet.jpg",
        "pubdate": "2003/12/12",
        "rating": 3.4,
        "director": "John Smith",
        "duration": 122,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        "cast": "Vivamus Elementum, Semper Nisi, Aenean Vulputate, Eleifend Tellus, Aenean Leo Ligula, Porttitor Eu, Consequat Vitae, Eleifend Ac, Enim"
    },
    {
        "name": "Island: VOL. 2",
        "title": "Island: VOL. 2",
        "year": 2005,
        "genre": "Dramas",
        "image": "/assets/img/island.jpg",
        "pubdate": "2005/12/12",
        "rating": 3.6,
        "director": "John Watson",
        "duration": 122,
        "description": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.",
        "cast": "Vivamus Elementum, Semper Nisi, Aenean Vulputate, Eleifend Tellus, Aenean Leo Ligula, Porttitor Eu, Consequat Vitae, Eleifend Ac, Enim"
    },
];

export function loadFilm(name) {
    return {
        type: 'LOAD_FILM',
        payload: new Promise((resolve, reject) => {
            resolve(MOCKED_DATA[0]);
        })
    };
}

export function loadFilms(query, filter, sort) {
    return {
        type: 'LOAD_FILMS',
        payload: new Promise((resolve, reject) => {
            resolve(MOCKED_DATA);
        })
    }
}

export function loadRelatedFilms(director) {
    return {
        type: 'LOAD_RELATED_FILMS',
        payload: new Promise((resolve, reject) => {
            resolve(MOCKED_DATA);
        })
    }
}

export default {
    loadFilm, loadFilms, loadRelatedFilms
};