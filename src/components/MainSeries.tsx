import React, { FC } from 'react'
import MainSlider from './design/MainSlider/MainSlider'
import Loader from './design/Loader/Loader'
import { IMainBlock } from '../types/IMainBlock'

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
          <MainSlider items={items}/>
        }
    </div>
  )
}

export default MainSeries