import React, { useState } from 'react'
import HeaderList from './HeaderList'
import HeaderRight from './HeaderRight'
import { Link, useLocation } from 'react-router-dom'

const Header = () => {
  const [isSearching, setIsSearching] = useState(false)
  const adress = useLocation()

  return (
    <header className="header">
      <div className="_Container">
        <div className="header_body">

          <div className={`header_left ${isSearching ? 'header_left_is_searching' : ''}`}>
            <Link to={''} className='logo'>PlayOn</Link>
            {
              '/registration' === adress.pathname
              ?
              <></>
              :
              !isSearching ? <HeaderList/> : <></>
            }
          </div>

          <div className={`header_right ${isSearching ? 'header_right_is_searching' : ''}`}>
            <HeaderRight isSearching={isSearching} setIsSearching={setIsSearching}/>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header