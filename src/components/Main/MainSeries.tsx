import { FC } from 'react'
import MainSlider from './MainSlider'
import Loader from '../design/Loader/Loader'
import { IMainBlock } from '../../types/IMainBlock'

const MainSeries: FC<IMainBlock> = ({items, isLoading, error}) => {
  if(error) {
    return <></> // Impossible!
  }

  return (
    <div className='main_block'>
        <h2 className="title">Series</h2>
        {
          isLoading
          ?
          <Loader/>
          :
          <MainSlider items={items} nextElementClass='next_element_series'/>
        }
    </div>
  )
}

export default MainSeries