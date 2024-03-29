import { FC, useContext } from 'react';
import HeaderInput from '../HeaderInput/HeaderInput';
import cross from '../../../images/icons/cross.svg';
import { useDebounce } from 'use-debounce';
import { useGetFilmByKeywordsQuery } from '../../../api/kinopoiskApi';
import HeaderSearchedFilm from '../HeaderSearchedFilm/HeaderSearchedFilm';
import { IsSearchingContext } from '../../../context/isSearchingContext';

import './HeaderSearch.scss';
interface IHeaderSearch {
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}

const HeaderSearch: FC<IHeaderSearch> = ({ text, setText }) => {
    const { setIsSearching } = useContext(IsSearchingContext);
    const [textForSearchFilm] = useDebounce(text, 400);
    const { data, isLoading } = useGetFilmByKeywordsQuery(textForSearchFilm, {
        skip: textForSearchFilm.length === 0,
    });

    return (
        <div className='header_search'>
            <HeaderInput setText={setText} />
            <div
                className='_Ibg header_icons header_icons_cross'
                onClick={() => {
                    setIsSearching(false);
                    setText('');
                }}
            >
                <img src={cross} alt='cross' />
            </div>
            <div className='header_searched-films'>
                {isLoading ? (
                    <></>
                ) : data && data.length === 0 ? (
                    <div className='header_no-searched-films'>There is no movie with this title</div>
                ) : (
                    data && data.map((film) => <HeaderSearchedFilm key={film.kinopoiskId} info={film} setText={setText} />)
                )}
            </div>
        </div>
    );
};

export default HeaderSearch;
