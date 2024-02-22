import { useGetMoviesPagesQuery } from "../api/kinopoiskApi"
import Thanks from "../components/Thanks"
import '../styles/components/FilmsPagesWrapper.scss'
import Loader from "../components/design/Loader/Loader"
import FilmsPageBlock from "../components/FilmsPageBlock"
import { IFilmSmall } from "../types/IFilmSmall"
import FilmsPageHeader from "../components/FilmsPageHeader"

const MoviesPage = () => {
  const {data: dataFirst, isLoading: isLoadingFirst} = useGetMoviesPagesQuery(1)
  const {data: dataSecond, isLoading: isLoadingSecond} = useGetMoviesPagesQuery(2)
  const {data: dataThird, isLoading: isLoadingThird} = useGetMoviesPagesQuery(3)

  if(isLoadingFirst || isLoadingSecond || isLoadingThird) {
    return <Loader/>
  }

  return (
    <div className="fpw">
      <div className="_Container">
        <div className="fpw_body">
          <FilmsPageHeader title="Movies"/>
          <FilmsPageBlock title="Dramas" items={dataFirst?.concat(dataSecond!).concat(dataThird!).filter(item => item.genres[0].genre === 'драма') as IFilmSmall[]} nextElementClass="next_element_movies_dramas"/>
          <FilmsPageBlock title="Adventures" items={dataFirst?.concat(dataSecond!).concat(dataThird!).filter(item => item.genres[0].genre === 'приключения') as IFilmSmall[]} nextElementClass="next_element_movies_adventures"/>
          <FilmsPageBlock title="Melodramas" items={dataFirst?.concat(dataSecond!).concat(dataThird!).filter(item => item.genres[0].genre === 'мелодрама') as IFilmSmall[]} nextElementClass="next_element_movies_melodramas"/>
          <FilmsPageBlock title="Comedias" items={dataFirst?.concat(dataSecond!).concat(dataThird!).filter(item => item.genres[0].genre === 'комедия') as IFilmSmall[]} nextElementClass="next_element_movies_comedias"/>
          <FilmsPageBlock title="Fantastics" items={dataFirst?.concat(dataSecond!).concat(dataThird!).filter(item => item.genres[0].genre === 'фантастика') as IFilmSmall[]} nextElementClass="next_element_movies_fantastics"/>
          <FilmsPageBlock title="Trillers" items={dataFirst?.concat(dataSecond!).concat(dataThird!).filter(item => item.genres[0].genre === 'триллер') as IFilmSmall[]} nextElementClass="next_element_movies_trillers"/>
          <Thanks/>
        </div>
      </div>
    </div>
  )
}

export default MoviesPage