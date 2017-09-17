import React from 'react';

import './FilmsList.scss';

export default class FilmsList extends React.Component {

    render() {
        let dataList = [
            {
                title: 'Ballet: VOL. 1',
                year: '2003',
                genre: 'Dramas',
                image: '/assets/img/ballet.jpg'
            },
            {
                title: 'Island: VOL. 2',
                year: '2005',
                genre: 'Dramas',
                image: '/assets/img/island.jpg'
            },
            {
                title: 'Header: VOL. 3',
                year: '2008',
                genre: 'Fantasy',
                image: '/assets/img/wings.jpg'
            },
            {
                title: 'Island: VOL. 2',
                year: '2005',
                genre: 'Dramas',
                image: '/assets/img/island.jpg'
            },
            {
                title: 'Header: VOL. 3',
                year: '2008',
                genre: 'Fantasy',
                image: '/assets/img/wings.jpg'
            },
            {
                title: 'Ballet: VOL. 1',
                year: '2003',
                genre: 'Dramas',
                image: '/assets/img/ballet.jpg'
            }
        ];

        return (
            <div className="wrapper-content-films clearfix">
                {
                    dataList.map(i => {
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
                    })
                }
            </div>
        );
    }

}