import instagram from '../../images/icons/instagram.svg';
import twitter from '../../images/icons/twitter.svg';
import facebook from '../../images/icons/facebook.svg';
import telegram from '../../images/icons/telegram.svg';
import { Link } from 'react-router-dom';
import { MAIN_PAGE_PATH, REGISTRATION_PAGE_PATH, SUPPORT_PAGE_PATH, YOU_PAGE_PATH } from '../../paths';
import { FACEBOOK_LINK, INSTAGRAM_LINK, TELEGRAM_LINK, TWITTER_LINK } from '../../constants';
import { useContext } from 'react';
import { IsAuthContext } from '../../context/isAuth';

import './Footer.scss';

const Footer = () => {
    const { user } = useContext(IsAuthContext);

    return (
        <footer className='footer'>
            <div className='_Container'>
                <div className='footer_body'>
                    <ul className='footer_social'>
                        <li>
                            <a href={INSTAGRAM_LINK}>
                                <img src={instagram} alt='instagram' />
                            </a>
                        </li>
                        <li>
                            <a href={TWITTER_LINK}>
                                <img src={twitter} alt='twitter' />
                            </a>
                        </li>
                        <li>
                            <a href={FACEBOOK_LINK}>
                                <img src={facebook} alt='facebook' />
                            </a>
                        </li>
                        <li>
                            <a href={TELEGRAM_LINK}>
                                <img src={telegram} alt='telegram' />
                            </a>
                        </li>
                    </ul>

                    <ul className='footer_help'>
                        <li>
                            <Link to={MAIN_PAGE_PATH}>Home</Link>
                        </li>
                        <li>
                            <Link to={SUPPORT_PAGE_PATH}>Support</Link>
                        </li>
                        <li>
                            <Link to={user ? YOU_PAGE_PATH : REGISTRATION_PAGE_PATH}>Account</Link>
                        </li>
                    </ul>

                    <h3 className='footer_logo logo'>SFilms</h3>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
