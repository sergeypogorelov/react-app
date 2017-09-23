import React from 'react';

import './SearchPageHeader.scss';

export default class SearchPageHeader extends React.Component {

    constructor() {
        super();
        this.state = {
            searchType: 'title',
            searchQuery: ''
        };
    }

    submitHandler(ev) {
        ev.preventDefault();

        let searchQuery = this.state.searchQuery;
        let searchType = this.state.searchType;

        this.props.onSubmit({ searchQuery, searchType });
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
                                    <input className="search-top-input" name="query" value={this.state.searchQuery} onChange={this.searchQueryHandler.bind(this)} />
                                </div>
                                <div className="search-bottom clearfix">
                                    <p className="search-label">SEARCH BY</p>
                                    <input className="search-button" type="button" value="TITLE" />
                                    <input className="search-button active" type="button" value="DIRECTOR" />
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