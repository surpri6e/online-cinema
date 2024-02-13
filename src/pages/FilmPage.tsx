import { useParams } from 'react-router-dom'
import { FILM_PLAYER_LINK } from '../constants'
import { useEffect } from 'react'
import { useGetFilmByIdQuery } from '../api/kinopoiskApi'
import { addOftenSearchedFilm } from '../utils/workWithLocalStorage'
import Loader from '../components/design/Loader/Loader'

const FilmPage = () => {
    const { idFilm } = useParams()
    const {data, error, isLoading} = useGetFilmByIdQuery(idFilm ? idFilm : '', {skip: idFilm === undefined});

    if(isLoading) {
      return <Loader/>
    }
    if(error) {
      return <></> //IMPOSSIBLE
    }
    
    // useEffect(() => {
    //   if(data) {
    //     addOftenSearchedFilm({kinopoiskId: data.kinopoiskId, posterUrlPreview: data.posterUrlPreview})
    //   }
    // }, [data])

  return (
    <>
      <a href={`${FILM_PLAYER_LINK}${idFilm}`} target='_blank'>here</a>
      <img src={data?.posterUrlPreview} alt="" />
    </>
  )
}

export default FilmPage