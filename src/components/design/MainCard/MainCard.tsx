import React from 'react'
import './MainCard.scss'
import { Link } from 'react-router-dom'


// interface 

const MainCard = () => {
  return (
        <Link to='#' className='main_card'>
            <img src="https://placehold.co/600x400" alt="" />
        </Link>
  )
}

export default MainCard