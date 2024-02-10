import React, { FC } from 'react'
import search from '../images/icons/search.svg';
import profile from '../images/icons/profile.svg';
import { Link, useLocation } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { REGISTRATION_PAGE_PATH } from '../paths';

interface IHeaderRight {
    isSearching: boolean;
    setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderRight: FC<IHeaderRight> = ({isSearching, setIsSearching}) => {
  const adress = useLocation()

  return (
    <>
    {
      REGISTRATION_PAGE_PATH === adress.pathname
      ?
      <></>
      :
      <>
        <div className="_Ibg header_icons header_icons_search" onClick={() => setIsSearching(true)}>
            <img src={search} alt="search" />
        </div>
        {isSearching ? <HeaderSearch setIsSearching={setIsSearching}/> : <></>}
      </>
    }
    <Link to={REGISTRATION_PAGE_PATH} className="_Ibg header_icons header_icons_profile">
        <img src={profile} alt="profile" />
    </Link>
    </>
  )
}

export default HeaderRight