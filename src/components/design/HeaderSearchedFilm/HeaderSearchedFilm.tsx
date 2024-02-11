import { FC } from 'react'
import './HeaderSearchedFilm.scss'
import { IFilmSearched } from '../../../types/IFilmSearched'
import { Link } from 'react-router-dom'
import { DebouncedState } from 'use-debounce';

interface IHeaderSearchedFilm {
  info: IFilmSearched;
  setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTextForSearchedFilm: DebouncedState<(value: string) => void>;
}

const HeaderSearchedFilm: FC<IHeaderSearchedFilm> = ({info, setIsSearching, setText, setTextForSearchedFilm}) => {
  return (
    <Link to={`/film/${info.kinopoiskId}`} className='header_searched-film' onClick={() => {
      setIsSearching(false)
      setText('')
      setTextForSearchedFilm('')
    }}>
        <p>{info.nameEn ? info.nameEn : info.nameOriginal ? info.nameOriginal : info.nameRu}</p>
        <p>{info.ratingKinopoisk}</p>
    </Link>
  )
}

export default HeaderSearchedFilm