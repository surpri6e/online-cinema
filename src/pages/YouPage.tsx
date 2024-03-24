import { useContext } from 'react';
import { IsAuthContext } from '../context/isAuth';
import Loader from '../components/Loader/Loader';
import '../styles/pages/YouPage/YouPage.scss';
import '../styles/components/FilmsPagesWrapper.scss';
//import { useDeleteUser, useSignOut } from 'react-firebase-hooks/auth';
//import { auth } from '../main';

const YouPage = () => {
    const { user, loading } = useContext(IsAuthContext);

    //const [signOut, load, error] = useSignOut(auth);
    //const [deleteUser, loading1, errorr] = useDeleteUser(auth);

    //   onClick={async () => {
    //     const success = await signOut();
    //     if (success) {
    //       alert('You are sign out');
    //     }
    //   }}
    // >

    if (loading) {
        return <Loader />;
    }

    return (
        <div className='you'>
            <div className='_Container'>
                <div className='fpw_body'>
                    <>
                        <div>delete user</div>
                        <div>sign out</div>
                        <div>{user?.displayName}</div>
                        <div>{user?.email}</div>
                        <img src={user?.photoURL ? user?.photoURL : ''} alt='' />
                    </>
                </div>
            </div>
        </div>
    );
};

export default YouPage;
