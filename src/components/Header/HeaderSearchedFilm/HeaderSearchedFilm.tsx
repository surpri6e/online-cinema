import { FC, useContext } from 'react';
import { IFilmSearched } from '../../../types/IFilmSearched';
import { Link } from 'react-router-dom';
import { IsSearchingContext } from '../../../context/isSearchingContext';
import { typesOfFilms } from '../../../utils/typesOfFilms';

import './HeaderSearchedFilm.scss';

interface IHeaderSearchedFilm {
    info: IFilmSearched;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderSearchedFilm: FC<IHeaderSearchedFilm> = ({ info, setText }) => {
    const { setIsSearching } = useContext(IsSearchingContext);

    return (
        <Link
            to={`/film/${info.kinopoiskId}`}
            className='header_searched-film'
            onClick={() => {
                setIsSearching(false);
                setText('');
            }}
        >
            <p className='header_searched-film_left'>
                {info.nameRu ? info.nameRu : info.nameEn ? info.nameEn : info.nameOriginal} <span>{typesOfFilms[info.type]}</span>
            </p>
            <p>{info.ratingKinopoisk ? info.ratingKinopoisk : "haven't rating"}</p>
        </Link>
    );
};

export default HeaderSearchedFilm;
