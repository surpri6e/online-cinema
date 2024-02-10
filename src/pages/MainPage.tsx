import React from 'react'
import '../styles/pages/MainPage/MainPage.scss'
import MainCategories from '../components/MainCategories'
import MainMovies from '../components/MainMovies'
import MainCartoons from '../components/MainCartoons'
import MainSeries from '../components/MainSeries'

const MainPage = () => {
  return (
    <div className='main'>
      <div className="_Container">
        <div className="main_body">
          <MainCategories/>
          <MainMovies/>
          <MainSeries/>
          <MainCartoons/>
        </div>
      </div>
    </div>
  )
}

export default MainPage