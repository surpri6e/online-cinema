import '../styles/pages/MainPage/MainPage.scss'
import MainCategories from '../components/Main/MainCategories'
import MainMovies from '../components/Main/MainMovies'
import MainCartoons from '../components/Main/MainCartoons'
import MainSeries from '../components/Main/MainSeries'
import { useGetCartoonsQuery, useGetMoviesQuery, useGetSeriesQuery } from '../api/kinopoiskApi'
import { randomFilms } from '../utils/randomFilms'

const MainPage = () => {

  const { data: dataCartoons, error: errorCartoons, isLoading: isLoadingCartoons } = useGetCartoonsQuery('');
  const { data: dataMovies, error: errorMovies, isLoading: isLoadingMovies } = useGetMoviesQuery('');
  const { data: dataSeries, error: errorSeries, isLoading: isLoadingSeries } = useGetSeriesQuery('');

  return (
    <div className='main'>
      <div className="_Container">
        <div className="main_body">
          <MainCategories/>
          <MainMovies items={randomFilms(dataMovies ? dataMovies : [])} isLoading={isLoadingMovies} error={errorMovies}/>
          <MainSeries items={randomFilms(dataSeries ? dataSeries.filter((serial) => serial.kinopoiskId !== 5416975) : [])} isLoading={isLoadingSeries} error={errorSeries}/>
          <MainCartoons items={randomFilms(dataCartoons ? dataCartoons : [])} isLoading={isLoadingCartoons} error={errorCartoons}/>
        </div>
      </div>
    </div>
  )
}

export default MainPage