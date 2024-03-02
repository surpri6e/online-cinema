import { FC } from 'react';
import { IMainCategory } from '../../types/IMainCategory';
import '../../styles/pages/MainPage/MainCategory.scss';
import { Link } from 'react-router-dom';

const MainCategory: FC<IMainCategory> = ({ path, title, to }) => {
    return (
        <Link to={to} className='main_category'>
            <img src={path} alt={title} />
            {title}
        </Link>
    );
};

export default MainCategory;
