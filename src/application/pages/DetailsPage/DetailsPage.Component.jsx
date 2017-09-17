import React from 'react';

import './DetailsPage.scss';

import FilmsList from '../../common/components/FilmsList/FilmsList.Component';
import Footer from '../../common/components/Footer/Footer.Component';

import DetailsPageHeader from './DetailsPageHeader.Component';
import DetailsPagePanel from './DetailsPagePanel.Component';

export default class DetailsPage extends React.Component {

    render() {
        return (
            <div className="wrapper">
                <DetailsPageHeader />
                <div className="wrapper-content">
                    <DetailsPagePanel />
                    <FilmsList />
                </div>
                <Footer />
            </div>
        );
    }

}