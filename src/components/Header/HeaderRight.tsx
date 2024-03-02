import { useContext, useState } from 'react';
import search from '../../images/icons/search.png';
import profile from '../../images/icons/profile.svg';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { REGISTRATION_PAGE_PATH, SUPPORT_PAGE_PATH, YOU_PAGE_PATH } from '../../paths';
import { IsSearchingContext } from '../../context/isSearchingContext';
import { IsAuthContext } from '../../context/isAuth';

const HeaderRight = () => {
    const { isSearching, setIsSearching } = useContext(IsSearchingContext);
    const navigate = useNavigate();
    const [text, setText] = useState('');
    const adress = useLocation();
    const { user } = useContext(IsAuthContext);

    return (
        <>
            {REGISTRATION_PAGE_PATH === adress.pathname || SUPPORT_PAGE_PATH === adress.pathname ? (
                <></>
            ) : (
                <>
                    <div
                        className='_Ibg header_icons header_icons_search'
                        onClick={() => {
                            if (isSearching) {
                                setIsSearching(false);
                                navigate(`search/${text}`);
                                setText('');
                                return;
                            }

                            setIsSearching(true);
                        }}
                    >
                        <img src={search} alt='search' />
                    </div>
                    {isSearching ? <HeaderSearch text={text} setText={setText} /> : <></>}
                </>
            )}

            <Link to={user ? YOU_PAGE_PATH : REGISTRATION_PAGE_PATH} className='_Ibg header_icons header_icons_profile'>
                <img src={profile} alt='profile' />
            </Link>
        </>
    );
};

export default HeaderRight;
