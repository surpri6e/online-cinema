import React from 'react'
import { Link } from 'react-router-dom'

const HeaderList = () => {
  return (
    <ul className='header_list'>
        <li><Link to="#" className="header_list_link">Movies</Link></li>
        <li><Link to="#" className="header_list_link">Series</Link></li>
        <li><Link to="#" className="header_list_link">Top</Link></li>
    </ul>
  )
}

export default HeaderList