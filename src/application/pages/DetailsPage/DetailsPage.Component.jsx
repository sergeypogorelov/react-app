import React from 'react';

import './DetailsPage.scss';

import FilmsStorage from '../../storages/FilmsStorage';

import FilmsList from '../../common/components/FilmsList/FilmsList.Component';
import Footer from '../../common/components/Footer/Footer.Component';

import DetailsPageHeader from './DetailsPageHeader.Component';
import DetailsPagePanel from './DetailsPagePanel.Component';

export default class DetailsPage extends React.Component {

    constructor() {
        super();
        this.state = {
            film: {},
            filmName: '',
            filmLoaded: false,

            films: [],
            filmsLoaded: false
        };
    }

    componentWillMount() {
        this.state.filmName = this.props.match.params.name;
    }

    componentDidMount() {
        this.loadPage(this.state.filmName);
    }

    render() {
        return (
            <div className="wrapper">
                <DetailsPageHeader film={this.state.film} filmLoaded={this.state.filmLoaded} />
                <div className="wrapper-content">
                    <DetailsPagePanel film={this.state.film} filmLoaded={this.state.filmLoaded} />
                    <FilmsList films={this.state.films} filmsLoaded={this.state.filmsLoaded} />
                </div>
                <Footer />
            </div>
        );
    }

    loadPage(filmName) {
        this.changeState({ filmName, filmLoaded: false, filmsLoaded: false });
        FilmsStorage.getItem(filmName).then(film => {
            if (film) {
                this.changeState({ film, filmLoaded: true });
                FilmsStorage.searchItem(film.director, 'director').then(films => {
                    this.changeState({ films, filmsLoaded: true });
                });
            } else {
                /// TO-DO: go to 404 page
            }
        });
    }

    changeState(state) {
        let obj = {};
        Object.assign(obj, this.state, state);
        this.setState(obj);
    }

}