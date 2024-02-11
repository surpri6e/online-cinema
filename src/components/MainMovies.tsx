import { FC } from 'react'
import MainSlider from './design/MainSlider/MainSlider';
import Loader from './design/Loader/Loader';
import { IMainBlock } from '../types/IMainBlock';

const MainMovies: FC<IMainBlock> = ({items, isLoading, error}) => {
  if(error) {
    return <></> // Impossible!
  }

  return (
    <div className='main_block'>
        <h2 className="title">Movies</h2>
        {
          isLoading
          ?
          <Loader/>
          :
          <MainSlider items={items} nextElementClass='next_element_movies'/>
        }
    </div>
  )
}

export default MainMovies