import React from 'react';
import { Redirect } from 'react-router-dom';

import './SearchPage.scss';

import FilmsStorage from '../../storages/FilmsStorage';

import FilmsList from '../../common/components/FilmsList/FilmsList.Component';
import Footer from '../../common/components/Footer/Footer.Component';

import SearchPageHeader from './SearchPageHeader.Component';
import SearchPagePanel from './SearchPagePanel.Component';

export default class SearchPage extends React.Component {

    constructor() {
        super();
        this.state = {
            films: [],
            filmsLoaded: false
        };
    }

    componentWillMount() {
        this.state.searchQuery = this.props.match.params.query || '';
    }

    componentDidMount() {
        this.loadFilms(this.state.searchQuery);
    }

    searchFormHandler(searchParams) {
        if (this.state.searchQuery !== searchParams.searchQuery) {
            this.props.history.push('/search/' + searchParams.searchQuery);  
        }

        this.loadFilms(searchParams.searchQuery);
    }

    searchPanelHandler() {
        this.loadFilms(this.state.searchQuery);
    }

    render() {
        return (
            <div className="wrapper">
                <SearchPageHeader query={this.state.searchQuery} onSubmit={this.searchFormHandler.bind(this)} />
                <div className="wrapper-content">
                    <SearchPagePanel films={this.state.films} filmsLoaded={this.state.filmsLoaded} onSortChange={this.searchPanelHandler.bind(this)} />
                    <FilmsList films={this.state.films} filmsLoaded={this.state.filmsLoaded} />
                </div>
                <Footer />
            </div>
        );
    }

    loadFilms(query) {
        this.changeState({ searchQuery: query, filmsLoaded: false });
        FilmsStorage.searchItem(query).then((films) => {
            this.changeState({ films, filmsLoaded: true });
        });
    }

    changeState(state) {
        let obj = {};
        Object.assign(obj, this.state, state);
        this.setState(obj);
    }

}