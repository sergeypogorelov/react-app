import React from 'react';

import './FilmsListItem.scss';

export default class FilmsListItem extends React.Component {

    render() {
        var i = this.props.item;

        return (
            <div className="film">
                <div className="film-poster">
                    <a href="/details">
                        <img className="film-poster-image" src={ i.image } />
                    </a>
                </div>
                <div className="film-title clearfix">
                    <h4 className="film-title-content">{ i.title }</h4>
                    <p className="film-title-year">{ i.year }</p>
                </div>
                <p className="film-genre">{ i.genre }</p>
            </div>
        );
    }

}