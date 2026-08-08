import { useParams } from 'react-router-dom';
import { FILM_PLAYER_LINK } from '../constants';
import { useEffect } from 'react';
import { useGetFilmByIdQuery, useGetFramesByIdQuery } from '../api/kinopoiskApi';
import { addContinueWatchingFilm, addOftenSearchedFilm } from '../utils/workWithLocalStorage';
import Loader from '../components/Loader/Loader';
import '../styles/pages/FilmPage/FilmPage.scss';

const FilmPage = () => {
    const { idFilm } = useParams();
    const { data, error, isLoading } = useGetFilmByIdQuery(idFilm ? idFilm : '', { skip: idFilm === undefined });
    const { data: dataFrames } = useGetFramesByIdQuery(idFilm ? idFilm : '', {
        skip: idFilm === undefined,
    });

    useEffect(() => {
        if (data) {
            addOftenSearchedFilm({
                kinopoiskId: data.kinopoiskId,
                posterUrlPreview: data.posterUrlPreview,
            });
        }
        if (data && dataFrames && dataFrames.length > 0) {
            addContinueWatchingFilm({
                imageUrl: dataFrames[0].imageUrl,
                kinopoiskId: data.kinopoiskId,
            }); // press on button
        }

        console.log(data, dataFrames ? dataFrames[dataFrames.length - 1].imageUrl : '');
    }, [data, dataFrames]);

    if (isLoading) {
        return <Loader />;
    }
    if (error) {
        return <div>This film not found.</div>; // do this with styles
    }

    console.log(data);

    return (
        <>
            <div className='_Container'>
                <div className='film_body'>
                    <div className='film_top'>
                        <h2 className='title'>{data && data.nameRu ? data.nameRu : data && data.nameOriginal ? data.nameOriginal : ''}</h2>
                        <img className='film_poster' src={dataFrames ? dataFrames[dataFrames.length - 1].imageUrl : ''} alt='The poster' />
                    </div>

                    <iframe src={`${FILM_PLAYER_LINK}${idFilm}`} className='player' allowFullScreen></iframe>
                </div>
            </div>
        </>
    );
};

export default FilmPage;
