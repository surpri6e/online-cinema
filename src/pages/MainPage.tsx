import '../styles/pages/MainPage/MainPage.scss';
import MainCategories from '../components/Main/MainCategories';
import MainMovies from '../components/Main/MainMovies';
import MainCartoons from '../components/Main/MainCartoons';
import MainSeries from '../components/Main/MainSeries';
import { useGetCartoonsQuery, useGetMoviesQuery, useGetSeriesQuery } from '../api/kinopoiskApi';
import { useState } from 'react';
import MainContinueWatching from '../components/Main/MainContinueWatching';
import { getContinueWatchingFilms } from '../utils/workWithLocalStorage';
import banner from '../images/banner.png';
import { Link } from 'react-router-dom';
import MainTop from '../components/Main/MainTop';
import Thanks from '../components/Thanks';

const MainPage = () => {
    const { data: dataCartoons, error: errorCartoons, isLoading: isLoadingCartoons } = useGetCartoonsQuery('');
    const { data: dataMovies, error: errorMovies, isLoading: isLoadingMovies } = useGetMoviesQuery('');
    const { data: dataSeries, error: errorSeries, isLoading: isLoadingSeries } = useGetSeriesQuery('');

    const [continueWatchingFilms] = useState(getContinueWatchingFilms());

    return (
        <div className='main'>
            <div className='_Container'>
                <div className='main_body'>
                    <MainCategories />
                    {continueWatchingFilms.length > 0 ? <MainContinueWatching items={continueWatchingFilms} /> : <></>}
                    <MainMovies items={dataMovies ? dataMovies : []} isLoading={isLoadingMovies} error={errorMovies} />
                    <MainSeries items={dataSeries ? dataSeries : []} isLoading={isLoadingSeries} error={errorSeries} />
                    <Thanks />
                    <MainCartoons items={dataCartoons ? dataCartoons : []} isLoading={isLoadingCartoons} error={errorCartoons} />
                    <MainTop
                        items={
                            dataMovies && dataSeries && dataCartoons
                                ? dataMovies.slice(0, 3).concat(dataSeries.slice(0, 3)).concat(dataCartoons.slice(0, 3))
                                : []
                        }
                        isLoading={isLoadingMovies || isLoadingSeries || isLoadingCartoons}
                        error={errorMovies || errorSeries || errorCartoons}
                    />
                    <div className='main_block main_block--banner'>
                        <Link to='film/1044280'>
                            <img src={banner} alt='banner on main' className='main_banner' />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MainPage;
