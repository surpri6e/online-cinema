import { Link } from 'react-router-dom'
import { MAIN_PAGE_PATH } from '../paths'

const HeaderList = () => {
  return (
    <ul className='header_list'>
        <li><Link to={MAIN_PAGE_PATH} className="header_list_link">Movies</Link></li>
        <li><Link to={MAIN_PAGE_PATH} className="header_list_link">Series</Link></li>
        <li><Link to={MAIN_PAGE_PATH} className="header_list_link">Top</Link></li>
    </ul>
  )
}

export default HeaderList