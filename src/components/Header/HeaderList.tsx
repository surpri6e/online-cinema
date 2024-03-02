import { Link } from 'react-router-dom';
import { CARTOONS_PAGE_PATH, MOVIES_PAGE_PATH, SERIES_PAGE_PATH } from '../../paths';

const HeaderList = () => {
    return (
        <ul className='header_list'>
            <li>
                <Link to={MOVIES_PAGE_PATH} className='header_list_link'>
                    Movies
                </Link>
            </li>
            <li>
                <Link to={SERIES_PAGE_PATH} className='header_list_link'>
                    Series
                </Link>
            </li>
            <li>
                <Link to={CARTOONS_PAGE_PATH} className='header_list_link'>
                    Cartoons
                </Link>
            </li>
        </ul>
    );
};

export default HeaderList;
