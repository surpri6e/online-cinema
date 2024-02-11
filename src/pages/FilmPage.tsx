import { useParams } from 'react-router-dom'

const FilmPage = () => {
    const { idFilm } = useParams()
    console.log(idFilm)
  return (
    <a href={`https://123123.svetacdn.in/IAF0wWTdNYZm?kp_id=${idFilm}`} target='_blank'>here</a>
  )
}

export default FilmPage