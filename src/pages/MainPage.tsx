import '../styles/pages/MainPage/MainPage.scss'
import MainCategories from '../components/Main/MainCategories'
import MainMovies from '../components/Main/MainMovies'
import MainCartoons from '../components/Main/MainCartoons'
import MainSeries from '../components/Main/MainSeries'
import { useGetCartoonsQuery, useGetMoviesQuery, useGetSeriesQuery } from '../api/kinopoiskApi'
import { useState } from 'react'
import MainContinueWatching from '../components/Main/MainContinueWatching'
import { getContinueWatchingFilms } from '../utils/workWithLocalStorage'

const MainPage = () => {

  const { data: dataCartoons, error: errorCartoons, isLoading: isLoadingCartoons } = useGetCartoonsQuery('');
  const { data: dataMovies, error: errorMovies, isLoading: isLoadingMovies } = useGetMoviesQuery('');
  const { data: dataSeries, error: errorSeries, isLoading: isLoadingSeries } = useGetSeriesQuery('');

  const [continueWatchingFilms] = useState(getContinueWatchingFilms())

  return (
    <div className='main'>
      <div className="_Container">
        <div className="main_body">
          <MainCategories/>
          {
            continueWatchingFilms.length > 0
            ?
            <MainContinueWatching items={continueWatchingFilms}/>
            :
            <></>
          }
          <MainMovies items={dataMovies ? dataMovies : []} isLoading={isLoadingMovies} error={errorMovies}/>
          <MainSeries items={dataSeries ? dataSeries : []} isLoading={isLoadingSeries} error={errorSeries}/>
          <MainCartoons items={dataCartoons ? dataCartoons : []} isLoading={isLoadingCartoons} error={errorCartoons}/>
        </div>
      </div>
    </div>
  )
}

export default MainPage

function getContinueWatcingFilms(): any {
  throw new Error('Function not implemented.')
}
