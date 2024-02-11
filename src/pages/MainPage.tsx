import React  from 'react'
import '../styles/pages/MainPage/MainPage.scss'
import MainCategories from '../components/MainCategories'
import MainMovies from '../components/MainMovies'
import MainCartoons from '../components/MainCartoons'
import MainSeries from '../components/MainSeries'
import { useGetCartoonsQuery } from '../api/kinopoiskApi'
import { randomFilms } from '../utils/randomFilms'

const MainPage = () => {

  const { data: dataCartoons, error: errorCartoons, isLoading: isLoadingCartoons } = useGetCartoonsQuery('');

  return (
    <div className='main'>
      <div className="_Container">
        <div className="main_body">
          <MainCategories/>
          <MainMovies items={randomFilms(dataCartoons ? dataCartoons : [])} isLoading={isLoadingCartoons} error={errorCartoons}/>
          <MainSeries items={randomFilms(dataCartoons ? dataCartoons : [])} isLoading={isLoadingCartoons} error={errorCartoons}/>
          <MainCartoons items={randomFilms(dataCartoons ? dataCartoons : [])} isLoading={isLoadingCartoons} error={errorCartoons}/>
        </div>
      </div>
    </div>
  )
}

export default MainPage