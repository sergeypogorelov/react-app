import React from 'react';
import { Link } from 'react-router-dom';

import './DetailsPageHeader.scss';

export default class DetailsPageHeader extends React.Component {

    render() {
        if (!this.props.filmLoaded)
            return (
                <div className="wrapper-header details">
                    <div className="wrapper-header-background details">
                        <div className="wrapper-header-content details">
                            <h1 className="wrapper-header-content-title details clearfix">
                                Netflix Roulete
                                <Link to="/" className="link">SEARCH</Link>
                            </h1>
                        </div>
                    </div>
                </div>
            );

        let item = this.props.film;

        return (
            <div className="wrapper-header details">
                <div className="wrapper-header-background details">
                    <div className="wrapper-header-content details">
                        <h1 className="wrapper-header-content-title details clearfix">
                            Netflix Roulete
                            <Link to="/" className="link">SEARCH</Link>
                        </h1>
                        <div className="wrapper-header-content-details">
                            <div className="details clearfix">
                                <div className="details-image">
                                    <img src={ item.image } />
                                </div>
                                <div className="details-description">
                                    <h3 className="details-description-title">
                                        { item.title }
                                        <span className="details-description-rating">{ item.rating }</span>
                                    </h3>
                                    <p className="details-description-genre">{ item.genre }</p>
                                    <p className="details-description-info">
                                        <span className="details-description-year">{ item.year }</span>
                                        <span className="details-description-duration">{ item.duration } min</span>
                                    </p>
                                    <p className="details-description-text">{ item.description }</p>
                                    <div className="details-description-small">
                                        <p className="small-text">Director: { item.director }</p>
                                        <p className="small-text">Cast: { item.cast }</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

}