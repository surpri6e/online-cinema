import React, { FC } from 'react'
import { IMainCategory } from '../../../types/IMainCategory'
import './MainCategory.scss'

const MainCategory: FC<IMainCategory> = ({path, title}) => {
  return (
    <div className='main_category'>
        <img src={path} alt={title} />
        {title}
    </div>
  )
}

export default MainCategory