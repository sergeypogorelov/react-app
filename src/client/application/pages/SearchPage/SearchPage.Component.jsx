import React from 'react';
import { connect } from 'react-redux';

import './SearchPage.scss';

import URL from '../../helpers/URL';
import SSR from '../../helpers/SSR';

import FilmsList from '../../common/components/FilmsList/FilmsList.Component';
import Footer from '../../common/components/Footer/Footer.Component';

import SearchPageHeader from './SearchPageHeader/SearchPageHeader.Component';
import SearchPagePanel from './SearchPagePanel/SearchPagePanel.Component';

import { loadFilms } from '../../common/actions/filmsActions';

export class SearchPage extends React.Component {

    componentWillMount() {
        this.searchQuery = this.props.match.params.query || '';
        
        let params = URL.parseQuery(this.props.location.search);
        this.searchType = params.searchType || 'title';
        this.searchSort = params.searchSort || 'pubdate';

        if (!this.props.data.preventDispatch && !SSR.checkOnFirstLoad()) {
            this.props.dispatch(loadFilms(this.searchQuery, this.searchType, this.searchSort));
        }
    }
    
    componentWillReceiveProps(newProps) {
        let searchQuery = newProps.match.params.query || '';
        
        let params = URL.parseQuery(newProps.location.search);
        let searchType = params.searchType || 'title';
        let searchSort = params.searchSort || 'pubdate';

        let searchQueryChanged = this.searchQuery !== searchQuery;
        let searchTypeChanged = this.searchType !== searchType;
        let searchSortChanged = this.searchSort !== searchSort;

        if (searchQueryChanged || searchTypeChanged || searchSortChanged) {

            this.searchQuery = searchQuery;
            this.searchType = searchType;
            this.searchSort = searchSort;

            this.props.dispatch(loadFilms(searchQuery, searchType, searchSort));
        }
    }

    searchFormHandler(searchParams) {
        if (searchParams.searchQuery === '') {
            this.props.history.push('/');
            return;
        }

        let searchQueryChanged = this.searchQuery !== searchParams.searchQuery;
        let searchTypeChanged = this.searchType !== searchParams.searchType;

        if (searchQueryChanged || searchTypeChanged) {
            let queryParams = {
                searchType: searchParams.searchType,
                searchSort: this.searchSort
            };

            let url = '/search/' + searchParams.searchQuery + URL.generateQuery(queryParams);
            this.props.history.push(url);
        }
    }

    searchPanelHandler(searchPanelParams) {
        if (this.searchSort !== searchPanelParams.sortType) {
            let queryParams = {
                searchType: this.searchType,
                searchSort: searchPanelParams.sortType
            };

            let url = '/search/' + this.searchQuery + URL.generateQuery(queryParams);
            this.props.history.push(url);
        }
    }

    render() {
        return (
            <div className="wrapper">
                <SearchPageHeader query={this.searchQuery} type={this.searchType} onSubmit={this.searchFormHandler.bind(this)} />
                <div className="wrapper-content">
                    <SearchPagePanel sortType={this.props.searchSort} films={this.props.films} filmsLoaded={this.props.filmsLoaded} onSortChange={this.searchPanelHandler.bind(this)} />
                    <FilmsList films={this.props.films} filmsLoading={this.props.filmsLoading} filmsLoaded={this.props.filmsLoaded} filmsNotLoaded={this.props.filmsNotLoaded} />
                </div>
                <Footer />
            </div>
        );
    }

}

export function mapStateToProps(store) {
    return {
        films: store.films.items,

        filmsLoaded: store.films.itemsLoaded,
        filmsLoading: store.films.itemsLoading,
        filmsNotLoaded: store.films.itemsNotLoaded
    };
};

export default connect(mapStateToProps)(SearchPage);