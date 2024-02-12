import { useParams } from 'react-router-dom'
import { FILM_PLAYER_LINK } from '../constants'

const FilmPage = () => {
    const { idFilm } = useParams()

  return (
    <a href={`${FILM_PLAYER_LINK}${idFilm}`} target='_blank'>here</a>
  )
}

export default FilmPage