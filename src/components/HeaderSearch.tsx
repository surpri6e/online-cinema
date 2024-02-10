import React, { FC } from 'react'
import HeaderInput from './design/HeaderInput/HeaderInput'
import cross from '../images/icons/cross.svg';

interface IHeaderSearch {
    setIsSearching: React.Dispatch<React.SetStateAction<boolean>>;
}

const HeaderSearch: FC<IHeaderSearch> = ({setIsSearching}) => {
  return (
    <div className='header_search'>
        <HeaderInput/>
        <div className="_Ibg header_icons header_icons_search" onClick={() => setIsSearching(false)}>
            <img src={cross} alt="search" />
        </div>
    </div>
  )
}

export default HeaderSearch