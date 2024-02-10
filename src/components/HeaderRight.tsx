import React from 'react'
import search from '../images/icons/search.svg';
import profile from '../images/icons/profile.svg';

const HeaderRight = () => {
  return (
    <>
    <div className="_Ibg header_icons header_icons_search">
        <img src={search} alt="search" />
    </div>
    <div className="_Ibg header_icons header_icons_profile">
        <img src={profile} alt="profile" />
    </div>
    </>
  )
}

export default HeaderRight