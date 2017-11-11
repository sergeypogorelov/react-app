const m = jest.genMockFromModule('filmsActions');

m.loadFilm = () => {}
m.loadFilms = () => {}
m.loadRelatedFilms = () => {}

module.exports = m;