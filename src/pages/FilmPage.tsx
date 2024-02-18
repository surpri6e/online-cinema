import { useParams } from 'react-router-dom'
import { FILM_PLAYER_LINK } from '../constants'
import { useEffect } from 'react'
import { useGetFilmByIdQuery, useGetFramesByIdQuery } from '../api/kinopoiskApi'
import { addContinueWatchingFilm, addOftenSearchedFilm } from '../utils/workWithLocalStorage'
import Loader from '../components/design/Loader/Loader'

const FilmPage = () => {
    const { idFilm } = useParams()
    const {data, error, isLoading} = useGetFilmByIdQuery(idFilm ? idFilm : '', {skip: idFilm === undefined});
    const {data: dataFrames} = useGetFramesByIdQuery(idFilm ? idFilm : '', {skip: idFilm === undefined})

    useEffect(() => {
      if(data) {
        addOftenSearchedFilm({kinopoiskId: data.kinopoiskId, posterUrlPreview: data.posterUrlPreview})
      }
      if(data && dataFrames && dataFrames.length > 0) {
        addContinueWatchingFilm({imageUrl: dataFrames[0].imageUrl, kinopoiskId: data.kinopoiskId}) // press on button
      }
    }, [data, dataFrames])

    if(isLoading) {
      return <Loader/>
    }
    if(error) {
      return <div>This film not found.</div> // do this with styles
    }

  return (
    <>
      <a href={`${FILM_PLAYER_LINK}${idFilm}`} target='_blank'>here</a>
      <img src={data?.posterUrlPreview} alt="" />
    </>
  )
}

export default FilmPage