import React from 'react';

import './SearchPageHeader.scss';

export default class SearchPageHeader extends React.Component {

    render() {
        return (
            <div className="wrapper-header">
                <div className="wrapper-header-background">
                   <div className="wrapper-header-content">
                        <h1 className="wrapper-header-content-title">Netflix Roulete</h1>
                        <div className="wrapper-header-content-search">
                            <form className="search">
                                <div className="search-top">
                                    <h3 className="search-top-title">FIND YOUR MOVIE</h3>
                                    <input className="search-top-input" value="John Smith" />
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

}