import React from 'react';
import { Link } from 'react-router-dom';

import './FilmsListItem.scss';

export default class FilmsListItem extends React.Component {

    render() {
        var i = this.props.item;

        return (
            <div className="film">
                <div className="film-poster">
                    <Link to={ '/film/' + i.name }>
                        <img className="film-poster-image" src={ i.image } />
                    </Link>
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