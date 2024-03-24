import { FC } from 'react';
import Slider from '../Slider';
import Loader from '../Loader/Loader';
import { IMainBlock } from '../../types/IMainBlock';

const MainSeries: FC<IMainBlock> = ({ items, isLoading, error }) => {
    return (
        <div className='main_block'>
            <h2 className='title'>Series</h2>
            {isLoading || error ? <Loader /> : <Slider items={items} nextElementClass='next_element_series' />}
        </div>
    );
};

export default MainSeries;
