import { FC } from 'react'
import { IMainBlock } from '../../types/IMainBlock'
import Loader from '../design/Loader/Loader'
import MainTopSlider from './MainTopSlider'


const MainTop: FC<IMainBlock> = ({items, error, isLoading}) => {
  return (
    <div className='main_block'>
        <h2 className="title">Weekly Top</h2>
        {
          isLoading || error
          ?
          <Loader/>
          :
          <MainTopSlider items={items} nextElementClass='next_element_cartoons'/>
        }
    </div>
  )
}

export default MainTop