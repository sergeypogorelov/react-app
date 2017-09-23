import React from 'react';

import './FilmsList.scss';

import FilmsListItem from './FilmsListItem.Component';

export default class FilmsList extends React.Component {

    render() {
        let notLoadedMessage = this.props.notLoadedMessage || 'Loading...';
        let notFoundMessage = this.props.notFoundMessage || 'No films found';

        if (!this.props.filmsLoaded) {
            return <h1>{ notLoadedMessage }</h1>;
        }

        if (!this.props.films.length) {
            return <h1>{ notFoundMessage }</h1>;
        }

        return (
            <div className="wrapper-content-films clearfix">
                { this.props.films.map(i => <FilmsListItem key={i.name} item={i} />) }
            </div>
        );
    }

}