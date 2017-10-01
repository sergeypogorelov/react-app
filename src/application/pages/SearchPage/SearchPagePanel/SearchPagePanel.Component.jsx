import React from 'react';

import './SearchPagePanel.scss';

import FilmsStorage from '../../../storages/FilmsStorage';

export default class SearchPagePanel extends React.Component {
    
    constructor() {
        super();
        this.state = {};
    }

    componentWillMount() {
        this.state.sortType = this.props.sortType || 'pubdate';
    }

    setSortByPubdate(ev) {
        ev.preventDefault();

        this.setState({
            sortType: 'pubdate'
        });

        this.props.onSortChange({ sortType: 'pubdate' });
    }

    setSortByRating(ev) {
        ev.preventDefault();

        this.setState({
            sortType: 'rating'
        });

        this.props.onSortChange({ sortType: 'rating' });
    }

    render() {
        if (!this.props.filmsLoaded || this.props.films.length === 0) {
            return <div className="info"></div>;
        }

        return (
            <div className="info clearfix">
                <div className="info-content">
                    {this.props.films.length} movies found
                </div>
                <div className="info-sort">
                    Sort by
                    <a className={ this.state.sortType === 'pubdate' ? 'info-sort-link active' : 'info-sort-link' } onClick={this.setSortByPubdate.bind(this)}>release data</a>
                    <a className={ this.state.sortType === 'rating' ? 'info-sort-link active' : 'info-sort-link' } onClick={this.setSortByRating.bind(this)}>rating</a>
                </div>
            </div>
        );
    }

}