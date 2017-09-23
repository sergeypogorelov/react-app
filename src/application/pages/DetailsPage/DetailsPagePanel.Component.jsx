import React from 'react';

import './DetailsPagePanel.scss';

export default class DetailsPagePanel extends React.Component {
    
    render() {
        if (!this.props.filmLoaded)
            return <div className="info"></div>;

        return (
            <div className="info clearfix">
                <div className="info-content">
                    Films by { this.props.film.director }
                </div>
            </div>
        );
    }

}