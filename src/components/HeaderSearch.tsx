import React, { FC, useState } from 'react'
import HeaderInput from './design/HeaderInput/HeaderInput'
import cross from '../images/icons/cross.svg';
import { useDebounce } from 'use-debounce';
import { useGetFilmByKeywordsQuery } from '../api/kinopoiskApi';
import HeaderSearchedFilm from './design/HeaderSearchedFilm/HeaderSearchedFilm';

interface IHeaderSearch {
    setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderSearch: FC<IHeaderSearch> = ({setIsSearching}) => {
  const [text, setText] = useState('');
  const [textForSearchFilm, setTextForSearchedFilm] = useDebounce(text, 1500);
  const {data, isLoading} = useGetFilmByKeywordsQuery(textForSearchFilm, {skip: textForSearchFilm.length === 0});
  console.log(isLoading ? '' : data)

  return (
    <div className='header_search'>
        <HeaderInput setText={setText}/>
        <div className="_Ibg header_icons header_icons_search" onClick={() => {
          setIsSearching(false)
          setText('')
          setTextForSearchedFilm('')
        }}>
            <img src={cross} alt="cross" />
        </div>
        <div className="header_searched-films">
          {
            isLoading
            ?
            <></>
            :
            data && data.length === 0
            ?
            <div className='header_no-searched-film'>No films</div>
            :
            data && data.length <= 5
            ?
            data && data.map((film) => <HeaderSearchedFilm key={film.kinopoiskId} info={film} setIsSearching={setIsSearching} setText={setText} setTextForSearchedFilm={setTextForSearchedFilm} />)
            :
            data && data.slice(0, 5).map((film) => <HeaderSearchedFilm key={film.kinopoiskId} info={film} setIsSearching={setIsSearching} setText={setText} setTextForSearchedFilm={setTextForSearchedFilm} />)
          }
        </div>
    </div>
  )
}

export default HeaderSearch