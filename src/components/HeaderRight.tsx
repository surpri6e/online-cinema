import React, { FC } from 'react'
import search from '../images/icons/search.svg';
import profile from '../images/icons/profile.svg';
import { Link } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';

interface IHeaderRight {
    isSearching: boolean;
    setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderRight: FC<IHeaderRight> = ({isSearching, setIsSearching}) => {
  return (
    <>
    <div className="_Ibg header_icons header_icons_search" onClick={() => setIsSearching(true)}>
        <img src={search} alt="search" />
    </div>
    {isSearching ? <HeaderSearch setIsSearching={setIsSearching}/> : <></>}
    <Link to={'/registration'} className="_Ibg header_icons header_icons_profile">
        <img src={profile} alt="profile" />
    </Link>
    </>
  )
}

export default HeaderRight