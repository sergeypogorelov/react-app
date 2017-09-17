import React from 'react';

import './DetailsPageHeader.scss';

export default class DetailsPageHeader extends React.Component {

    render() {
        return (
            <div className="wrapper-header details">
                <div className="wrapper-header-background details">
                    <div className="wrapper-header-content details">
                        <h1 className="wrapper-header-content-title details clearfix">
                            Netflix Roulete
                            <a className="link" href="/search">SEARCH</a>
                        </h1>
                        <div className="wrapper-header-content-details">
                            <div className="details clearfix">
                                <div className="details-image">
                                    <img src="/assets/img/island.jpg" />
                                </div>
                                <div className="details-description">
                                    <h3 className="details-description-title">
                                        Island Vol. 2
                                        <span className="details-description-rating">4.1</span>
                                    </h3>
                                    <p className="details-description-genre">Dramas</p>
                                    <p className="details-description-info">
                                        <span className="details-description-year">2005</span>
                                        <span className="details-description-duration">133 min</span>
                                    </p>
                                    <p className="details-description-text">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.</p>
                                    <div className="details-description-small">
                                        <p className="small-text">Director: John Smith</p>
                                        <p className="small-text">Cast: Vivamus Elementum, Semper Nisi, Aenean Vulputate, Eleifend Tellus, Aenean Leo Ligula, Porttitor Eu, Consequat Vitae, Eleifend Ac, Enim</p>
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