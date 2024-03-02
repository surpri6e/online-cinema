import { useContext } from 'react';
import { IsAuthContext } from '../context/isAuth';
import Loader from '../components/design/Loader/Loader';
import '../styles/pages/NotFoundPage/NotFoundPage.scss';

const NotFound = () => {
    const { loading } = useContext(IsAuthContext);

    return (
        <div className='not-found'>
            <div className='_Container'>
                <div className='not-found_body'>{loading ? <Loader /> : 'This page is not found :('}</div>
            </div>
        </div>
    );
};

export default NotFound;
