import React from 'react'
import HeaderList from './HeaderList'
import HeaderRight from './HeaderRight'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className="header">
      <div className="_Container">
        <div className="header_body">

          <div className="header_left">
            <Link to={''} className='logo'>PlayOn</Link>
            <HeaderList/>
          </div>

          <div className="header_right">
            <HeaderRight/>
          </div>

        </div>
      </div>
    </header>
  )
}

export default Header