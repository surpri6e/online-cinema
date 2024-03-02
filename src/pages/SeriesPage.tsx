import { useGetSeriesPagesQuery } from '../api/kinopoiskApi';
import FilmsPageBlock from '../components/FilmsPageBlock';
import FilmsPageHeader from '../components/FilmsPageHeader';
import Thanks from '../components/Thanks';
import Loader from '../components/design/Loader/Loader';
import '../styles/components/FilmsPagesWrapper.scss';
import { IFilmSmall } from '../types/IFilmSmall';

const SeriesPage = () => {
    const { data: dataFirst, isLoading: isLoadingFirst } = useGetSeriesPagesQuery(1);
    const { data: dataSecond, isLoading: isLoadingSecond } = useGetSeriesPagesQuery(2);
    const { data: dataThird, isLoading: isLoadingThird } = useGetSeriesPagesQuery(3);

    if (isLoadingFirst || isLoadingSecond || isLoadingThird) {
        return <Loader />;
    }

    return (
        <div className='fpw'>
            <div className='_Container'>
                <div className='fpw_body'>
                    <FilmsPageHeader title='Series' />
                    <FilmsPageBlock
                        title='Dramas'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'драма') as IFilmSmall[]
                        }
                        nextElementClass='next_element_series_dramas'
                    />
                    <FilmsPageBlock
                        title='Adventures'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'приключения') as IFilmSmall[]
                        }
                        nextElementClass='next_element_series_adventures'
                    />
                    <FilmsPageBlock
                        title='Melodramas'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'мелодрама') as IFilmSmall[]
                        }
                        nextElementClass='next_element_series_melodramas'
                    />
                    <FilmsPageBlock
                        title='Comedias'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'комедия') as IFilmSmall[]
                        }
                        nextElementClass='next_element_series_comedias'
                    />
                    <FilmsPageBlock
                        title='Fantastics'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'фантастика') as IFilmSmall[]
                        }
                        nextElementClass='next_element_series_fantastics'
                    />
                    <FilmsPageBlock
                        title='Trillers'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'триллер') as IFilmSmall[]
                        }
                        nextElementClass='next_element_series_trillers'
                    />
                    <Thanks />
                </div>
            </div>
        </div>
    );
};

export default SeriesPage;
