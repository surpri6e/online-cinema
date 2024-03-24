import './Menu.scss';
import { Link } from 'react-router-dom';
import { MOVIES_PAGE_PATH, SERIES_PAGE_PATH, CARTOONS_PAGE_PATH, REGISTRATION_PAGE_PATH, YOU_PAGE_PATH } from '../../paths';
import { useContext } from 'react';
import { IsAuthContext } from '../../context/isAuth';

const Menu = () => {
    const { user } = useContext(IsAuthContext);

    return (
        <div className='menu'>
            <input type='checkbox' id='burger-checkbox' className='burger-checkbox' />
            <label htmlFor='burger-checkbox' className='burger'></label>
            <ul className='menu-list'>
                <li>
                    <Link to={MOVIES_PAGE_PATH} className='menu-item'>
                        Movies
                    </Link>
                </li>
                <li>
                    <Link to={SERIES_PAGE_PATH} className='menu-item'>
                        Series
                    </Link>
                </li>
                <li>
                    <Link to={CARTOONS_PAGE_PATH} className='menu-item'>
                        Cartoons
                    </Link>
                </li>
                {user ? (
                    <li>
                        <Link to={YOU_PAGE_PATH} className='menu-item'>
                            Me
                        </Link>
                    </li>
                ) : (
                    <li>
                        <Link to={REGISTRATION_PAGE_PATH} className='menu-item'>
                            Registration
                        </Link>
                    </li>
                )}
            </ul>
        </div>
    );
};

export default Menu;
