import React from 'react';

import './SearchPage.scss';

import FilmsList from '../../common/components/FilmsList/FilmsList.Component';
import Footer from '../../common/components/Footer/Footer.Component';

import SearchPageHeader from './SearchPageHeader.Component';
import SearchPagePanel from './SearchPagePanel.Component';

export default class SearchPage extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <SearchPageHeader />
                <div className="wrapper-content">
                    <SearchPagePanel />
                    <FilmsList />
                </div>
                <Footer />
            </div>
        );
    }

}