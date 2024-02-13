import { useContext, useState } from 'react'
import HeaderInput from './HeaderInput'
import cross from '../../images/icons/cross.svg';
import { useDebounce } from 'use-debounce';
import { useGetFilmByKeywordsQuery } from '../../api/kinopoiskApi';
import HeaderSearchedFilm from './HeaderSearchedFilm';
import { IsSearchingContext } from '../../context/isSearchingContext';

const HeaderSearch = () => {
  const {setIsSearching} = useContext(IsSearchingContext);

  const [text, setText] = useState('');
  const [textForSearchFilm, setTextForSearchedFilm] = useDebounce(text, 400);

  const {data, isLoading} = useGetFilmByKeywordsQuery(textForSearchFilm, {skip: textForSearchFilm.length === 0});

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
            <div className='header_no-searched-films'>There is no movie with this title</div>
            :
            // data && data.length <= 5
            // ?
            data && data.map((film) => <HeaderSearchedFilm key={film.kinopoiskId} info={film} setText={setText} setTextForSearchedFilm={setTextForSearchedFilm} />)
            // :
            // data && data.slice(0, 5).map((film) => <HeaderSearchedFilm key={film.kinopoiskId} info={film} setText={setText} setTextForSearchedFilm={setTextForSearchedFilm} />)
          }
        </div>
    </div>
  )
}

export default HeaderSearch