import React, { FC } from 'react'
import { IMainBlock } from '../types/IMainBlock'
import Loader from './design/Loader/Loader'
import MainSlider from './design/MainSlider/MainSlider'

const MainCartoons: FC<IMainBlock> = ({items, isLoading, error}) => {
  if(error) {
    return <></> // Impossible!
  }
  
  return (
    <div className='main_block'>
        <h2 className="title">Cartoons</h2>
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

export default MainCartoons