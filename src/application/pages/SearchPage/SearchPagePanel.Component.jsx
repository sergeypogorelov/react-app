import React from 'react';

import './SearchPagePanel.scss';

export default class SearchPagePanel extends React.Component {
    
    render() {
        return (
            <div className="info clearfix">
                <div className="info-content">
                    7 movies found
                </div>
                <div className="info-sort">
                    Sort by
                    <a className="info-sort-link active">release data</a>
                    <a className="info-sort-link">rating</a>
                </div>
            </div>
        );
    }

}