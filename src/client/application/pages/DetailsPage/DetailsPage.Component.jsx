import React from 'react';
import { connect } from 'react-redux';

import './DetailsPage.scss';

import SSR from '../../helpers/SSR';

import FilmsList from '../../common/components/FilmsList/FilmsList.Component';
import Footer from '../../common/components/Footer/Footer.Component';

import NotFoundPage from '../NotFound/NotFoundPage.Component';

import DetailsPageHeader from './DetailsPageHeader/DetailsPageHeader.Component';
import DetailsPagePanel from './DetailsPagePanel/DetailsPagePanel.Component';

import { loadFilm, loadRelatedFilms } from '../../common/actions/filmsActions';

export class DetailsPage extends React.Component {

    componentWillMount() {

        if (!this.props.data.preventDispatch && !SSR.checkOnFirstLoad()) {

            let promise = this.props.dispatch(loadFilm(this.props.match.params.name));

            /// since componentWillReceiveProps doesn't work on the server side
            /// we have to load the related films manually
            if (SSR.isServerExecution()) {
                promise.then(result => {
                    if (!result.value.notFound) {
                        this.props.dispatch(loadRelatedFilms(result.value.director));
                    }
                });
            }

        }

    }

    componentWillReceiveProps(newProps) {
        if (this.props.match.params.name !== newProps.match.params.name) {
            this.props.dispatch(loadFilm(newProps.match.params.name));
        }

        if (this.props.film.director !== newProps.film.director) {
            this.props.dispatch(loadRelatedFilms(newProps.film.director));
        }
    }

    render() {
        if (this.props.film.notFound)
            return <NotFoundPage />

        return (
            <div className="wrapper">
                <DetailsPageHeader film={this.props.film} filmLoaded={this.props.filmLoaded} />
                <div className="wrapper-content">
                    <DetailsPagePanel film={this.props.film} filmLoaded={this.props.filmLoaded} />
                    <FilmsList films={this.props.films} filmsLoading={this.props.filmsLoading} filmsLoaded={this.props.filmsLoaded} filmsNotLoaded={this.props.filmsNotLoaded} />
                </div>
                <Footer />
            </div>
        );
    }

}

export function mapStateToProps(store) {
    return {
        film: store.films.currentItem,

        filmLoaded: store.films.currentItemLoaded,
        filmLoading: store.films.currentItemLoading,
        filmNotLoaded: store.films.currentItemNotLoaded,

        films: store.films.relatedItems,

        filmsLoaded: store.films.relatedItemsLoaded,
        filmsLoading: store.films.relatedItemsLoading,
        filmsNotLoaded: store.films.relatedItemsNotLoaded
    };
}

export default connect(mapStateToProps)(DetailsPage);