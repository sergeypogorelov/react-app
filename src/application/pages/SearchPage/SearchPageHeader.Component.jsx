import React from 'react';

import './SearchPageHeader.scss';

import FilmsStorage from '../../storages/FilmsStorage';

export default class SearchPageHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            searchQuery: '',
            searchType: FilmsStorage.searchType
        };
    }

    componentWillMount() {
        this.state.searchQuery = this.props.query;
    }

    setSearchByTitle(ev) {
        ev.preventDefault();

        FilmsStorage.searchType = 'title';
        this.setState({
            searchQuery: this.state.searchQuery,
            searchType: 'title'
        });
    }

    setSearchByDirector(ev) {
        ev.preventDefault();

        FilmsStorage.searchType = 'director';
        this.setState({
            searchQuery: this.state.searchQuery,
            searchType: 'director'
        });
    }

    submitHandler(ev) {
        ev.preventDefault();
        this.props.onSubmit({ searchQuery: this.state.searchQuery });
    }

    searchQueryHandler(ev) {
        this.changeState({
            searchQuery: ev.target.value
        });
    }

    render() {
        return (
            <div className="wrapper-header">
                <div className="wrapper-header-background">
                   <div className="wrapper-header-content">
                        <h1 className="wrapper-header-content-title">Netflix Roulete</h1>
                        <div className="wrapper-header-content-search">
                            <form className="search" onSubmit={this.submitHandler.bind(this)}>
                                <div className="search-top">
                                    <h3 className="search-top-title">FIND YOUR MOVIE</h3>
                                    <input className="search-top-input" value={this.state.searchQuery} onChange={this.searchQueryHandler.bind(this)} />
                                </div>
                                <div className="search-bottom clearfix">
                                    <p className="search-label">SEARCH BY</p>
                                    <input className={ this.state.searchType === 'title' ? 'search-button active' : 'search-button' } onClick={this.setSearchByTitle.bind(this)} type="button" value="TITLE" />
                                    <input className={ this.state.searchType === 'director' ? 'search-button active' : 'search-button' } onClick={this.setSearchByDirector.bind(this)} type="button" value="DIRECTOR" />
                                    <input className="search-submit" type="submit" value="SEARCH" />
                                </div>
                            </form>
                        </div>
                   </div>
                </div>
            </div>
        );
    }

    changeState(state) {
        let obj = {};
        Object.assign(obj, this.state, state);
        this.setState(obj);
    }

}