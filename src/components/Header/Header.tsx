import { useContext, useState } from 'react'
import HeaderList from './HeaderList'
import HeaderRight from './HeaderRight'
import { Link, useLocation } from 'react-router-dom'
import { MAIN_PAGE_PATH, REGISTRATION_PAGE_PATH } from '../../paths'
import { IsSearchingContext } from '../../context/isSearchingContext'
import { getOftenSearchedFilms } from '../../utils/workWithLocalStorage'
import HeaderOftenSearched from './HeaderOftenSearched'

const Header = () => {
  const {isSearching} = useContext(IsSearchingContext);
  const adress = useLocation()

  const [oftenSearchedFilms] = useState(getOftenSearchedFilms())

  return (
    <>
    <header className="header">
      <div className="_Container">
        <div className="header_body">

          <div className={`header_left ${isSearching ? 'header_left_is_searching' : ''}`}>
            <Link to={MAIN_PAGE_PATH} className='logo'>PlayOn</Link>
            {
              REGISTRATION_PAGE_PATH === adress.pathname ? <></> : !isSearching ? <HeaderList/> : <></>
            }
          </div>

          <div className={`header_right ${isSearching ? 'header_right_is_searching' : ''}`}>
            <HeaderRight/>
          </div>

        </div>
      </div>
    </header>
    {isSearching ? <HeaderOftenSearched items={oftenSearchedFilms}/> : <></>}
    </>
  )
}

export default Header