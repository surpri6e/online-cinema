import { useContext, useState } from 'react'
import search from '../../images/icons/search.png';
import profile from '../../images/icons/profile.svg';
import { Link, useLocation } from 'react-router-dom';
import HeaderSearch from './HeaderSearch';
import { REGISTRATION_PAGE_PATH } from '../../paths';
import { IsSearchingContext } from '../../context/isSearchingContext';

const HeaderRight = () => {
  const {isSearching, setIsSearching} = useContext(IsSearchingContext);
  const [text, setText] = useState('');
  const adress = useLocation()

  return (
    <>
      {
        REGISTRATION_PAGE_PATH === adress.pathname
        ?
        <></>
        :
        <>
          <div className="_Ibg header_icons header_icons_search" onClick={() => {
            if(isSearching) {
              console.log('do from notion')
            }
            setIsSearching(true)
          }}>
            <img src={search} alt="search" />
          </div>
          {isSearching ? <HeaderSearch text={text} setText={setText}/> : <></>}
        </>
      }
      <Link to={REGISTRATION_PAGE_PATH} className="_Ibg header_icons header_icons_profile">
          <img src={profile} alt="profile" />
      </Link>
    </>
  )
}

export default HeaderRight