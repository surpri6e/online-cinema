import { FC } from 'react';
import Slider from './Slider';
import { IFilmSmall } from '../types/IFilmSmall';

interface IFilmsPageBlock {
    title: string;
    nextElementClass: string;
    items: IFilmSmall[];
}

const FilmsPageBlock: FC<IFilmsPageBlock> = ({ title, nextElementClass, items }) => {
    return (
        <div className='fpb'>
            <div className='title'>{title}</div>
            <Slider items={items} nextElementClass={nextElementClass} />
        </div>
    );
};

export default FilmsPageBlock;
