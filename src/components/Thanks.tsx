import '../styles/components/Thanks.scss';
import fon from '../images/fon.png';

const Thanks = () => {
    return (
        <div className='thanks _Ibg'>
            <p className='title thanks_title'>Thank you for choosing us!</p>
            <img src={fon} alt='background' />
        </div>
    );
};

export default Thanks;
