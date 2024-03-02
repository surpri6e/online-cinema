import { Route, Routes } from 'react-router-dom';
import { privateRoutes, publicRoutes } from '../routes';
import NotFound from '../pages/NotFound';
import { IsAuthContext } from '../context/isAuth';
import { useContext } from 'react';

const RoutesList = () => {
    const { user } = useContext(IsAuthContext);

    return (
        <Routes>
            {!user
                ? publicRoutes.map((route) => <Route element={<route.page />} path={route.path} key={route.path} />)
                : privateRoutes.map((route) => <Route element={<route.page />} path={route.path} key={route.path} />)}
            <Route element={<NotFound />} path='*' />
        </Routes>
    );
};

export default RoutesList;
