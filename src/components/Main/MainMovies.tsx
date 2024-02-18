import { FC } from 'react'
import Slider from '../Slider';
import Loader from '../design/Loader/Loader';
import { IMainBlock } from '../../types/IMainBlock';

const MainMovies: FC<IMainBlock> = ({items, isLoading, error}) => {
  return (
    <div className='main_block'>
        <h2 className="title">Movies</h2>
        {
          isLoading || error
          ?
          <Loader/>
          :
          <Slider items={items} nextElementClass='next_element_movies'/>
        }
    </div>
  )
}

export default MainMovies