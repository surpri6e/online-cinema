import { FC, useContext } from 'react'
import { IFilmSearched } from '../../types/IFilmSearched'
import { Link } from 'react-router-dom'
import { DebouncedState } from 'use-debounce';
import { IsSearchingContext } from '../../context/isSearchingContext';

interface IHeaderSearchedFilm {
  info: IFilmSearched;
  setText: React.Dispatch<React.SetStateAction<string>>;
  setTextForSearchedFilm: DebouncedState<(value: string) => void>;
}

const HeaderSearchedFilm: FC<IHeaderSearchedFilm> = ({info, setText, setTextForSearchedFilm}) => {
  const {setIsSearching} = useContext(IsSearchingContext);
  
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