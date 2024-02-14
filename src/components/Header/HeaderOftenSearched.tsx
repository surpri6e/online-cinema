import React, { FC } from 'react'
import { IFilmSmall } from '../../types/IFilmSmall'

interface IHeaderOftenSearched {
  items: IFilmSmall[];
}

const HeaderOftenSearched: FC<IHeaderOftenSearched> = ({items}) => {
  return (
    <div className='header_often-searched'>
        <div className="_Container _Container--header_often-searched">
            <div className="header_often-searhed_body">
                <div className="title header_often-searched_title">Often searched</div>
                <div className="header_often-searched_images">
                  
                </div>
            </div>
        </div>
    </div>
  )
}

export default HeaderOftenSearched