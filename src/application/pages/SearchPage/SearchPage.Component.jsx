import React from 'react';

import './SearchPage.scss';

import URL from '../../helpers/URL';

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
        let params = URL.parseQuery(this.props.location.search);

        this.state.searchQuery = this.props.match.params.query || '';
        this.state.searchType = params.searchType || 'title';
        this.state.searchSort = params.searchSort || 'pubdate';
    }

    componentDidMount() {
        this.loadFilms(this.state.searchQuery, this.state.searchType, this.state.searchSort);
    }

    searchFormHandler(searchParams) {
        let searchQueryChanged = this.state.searchQuery !== searchParams.searchQuery;
        let searchTypeChanged = this.state.searchType !== searchParams.searchType;

        if (searchQueryChanged || searchTypeChanged) {
            let queryParams = {
                searchType: searchParams.searchType,
                searchSort: this.state.searchSort
            };

            let url = '/search/' + searchParams.searchQuery + URL.generateQuery(queryParams);
            this.props.history.push(url);

            this.loadFilms(searchParams.searchQuery, searchParams.searchType, this.state.searchSort);
        }
    }

    searchPanelHandler(searchPanelParams) {
        if (this.state.searchSort !== searchPanelParams.sortType) {
            let queryParams = {
                searchType: this.state.searchType,
                searchSort: searchPanelParams.sortType
            };

            let url = '/search/' + this.state.searchQuery + URL.generateQuery(queryParams);
            this.props.history.push(url);

            this.loadFilms(this.state.searchQuery, this.state.searchType, searchPanelParams.sortType);
        }
    }

    render() {
        return (
            <div className="wrapper">
                <SearchPageHeader query={this.state.searchQuery} type={this.state.searchType} onSubmit={this.searchFormHandler.bind(this)} />
                <div className="wrapper-content">
                    <SearchPagePanel sortType={this.state.searchSort} films={this.state.films} filmsLoaded={this.state.filmsLoaded} onSortChange={this.searchPanelHandler.bind(this)} />
                    <FilmsList films={this.state.films} filmsLoaded={this.state.filmsLoaded} />
                </div>
                <Footer />
            </div>
        );
    }

    loadFilms(query, type, sort) {
        this.changeState({
            searchQuery: query,
            searchType: type,
            searchSort: sort,
            filmsLoaded: false
        });
        FilmsStorage.searchItem(query, type, sort).then((films) => {
            this.changeState({ films, filmsLoaded: true });
        });
    }

    changeState(state) {
        let obj = {};
        Object.assign(obj, this.state, state);
        this.setState(obj);
    }

}