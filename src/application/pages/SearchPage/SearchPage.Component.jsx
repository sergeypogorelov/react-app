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
            filmsLoaded: false,
            searchSubmit: false,
            searchQuery: ''
        };
    }

    componentWillMount() {
        this.state.searchQuery = this.props.match.params.query;
    }

    componentDidMount() {
        this.loadFilms(this.state.searchQuery, 'title');
    }

    searchFormHandler(searchParams) {
        if (this.state.searchQuery !== searchParams.searchQuery) {
            this.changeState({searchSubmit: true, searchQuery: searchParams.searchQuery});
        }
    }

    render() {
        if (this.state.searchSubmit)
            return <Redirect to={ '/search/' + this.state.searchQuery } />;

        return (
            <div className="wrapper">
                <SearchPageHeader onSubmit={this.searchFormHandler.bind(this)} />
                <div className="wrapper-content">
                    <SearchPagePanel />
                    <FilmsList films={this.state.films} filmsLoaded={this.state.filmsLoaded} />
                </div>
                <Footer />
            </div>
        );
    }

    loadFilms(query, type) {
        FilmsStorage.searchItem(query, type).then((films) => {
            this.changeState({ films, filmsLoaded: true });
        });
    }

    changeState(state) {
        let obj = {};
        Object.assign(obj, this.state, state);
        this.setState(obj);
    }

}