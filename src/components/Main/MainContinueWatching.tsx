import React, { FC } from 'react'
import { IFilmSmallWithFrame } from '../../types/IFilmSmall'
import MainContinueWatchingSlider from './MainContinueWatchingSlider'

interface IMainContinueWatching {
    items: IFilmSmallWithFrame[]
}

const MainContinueWatching: FC<IMainContinueWatching> = ({items}) => {
    return (
        <div className='main_block'>
            <h2 className="title">Continue watching</h2>
            <MainContinueWatchingSlider items={items} nextElementClass='next_element_continue-watching'/>
        </div>
      )
}

export default MainContinueWatching