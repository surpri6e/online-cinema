import { FC } from 'react';
import { IMainBlock } from '../../types/IMainBlock';
import Loader from '../Loader/Loader';
import Slider from '../Slider';

const MainCartoons: FC<IMainBlock> = ({ items, isLoading, error }) => {
    return (
        <div className='main_block'>
            <h2 className='title'>Cartoons</h2>
            {isLoading || error ? <Loader /> : <Slider items={items} nextElementClass='next_element_cartoons' />}
        </div>
    );
};

export default MainCartoons;
