import { useGetCartoonsPagesQuery } from '../api/kinopoiskApi';
import FilmsPageBlock from '../components/FilmsPageBlock';
import FilmsPageHeader from '../components/FilmsPageHeader';
import Thanks from '../components/Thanks';
import Loader from '../components/design/Loader/Loader';
import '../styles/components/FilmsPagesWrapper.scss';
import { IFilmSmall } from '../types/IFilmSmall';

const CartoonsPage = () => {
    const { data: dataFirst, isLoading: isLoadingFirst } = useGetCartoonsPagesQuery(1);
    const { data: dataSecond, isLoading: isLoadingSecond } = useGetCartoonsPagesQuery(2);
    const { data: dataThird, isLoading: isLoadingThird } = useGetCartoonsPagesQuery(3);

    if (isLoadingFirst || isLoadingSecond || isLoadingThird) {
        return <Loader />;
    }

    console.log(dataFirst, dataSecond, dataThird);

    return (
        <div className='fpw'>
            <div className='_Container'>
                <div className='fpw_body'>
                    <FilmsPageHeader title='Cartoons' />
                    <FilmsPageBlock
                        title='Dramas'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'драма') as IFilmSmall[]
                        }
                        nextElementClass='next_element_cartoons_dramas'
                    />
                    <FilmsPageBlock
                        title='Adventures'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'приключения') as IFilmSmall[]
                        }
                        nextElementClass='next_element_cartoons_adventures'
                    />
                    <FilmsPageBlock
                        title='Melodramas'
                        items={
                            dataFirst
                                ?.concat(dataSecond!)
                                .concat(dataThird!)
                                .filter((item) => item.genres[0].genre === 'мелодрама') as IFilmSmall[]
                        }
                        nextElementClass='next_element_cartoons_melodramas'
                    />
                    <Thanks />
                </div>
            </div>
        </div>
    );
};

export default CartoonsPage;
