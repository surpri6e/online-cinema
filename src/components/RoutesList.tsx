import { Route, Routes } from 'react-router-dom'
import { privateRoutes, publicRoutes } from '../routes'

const tmp = true; // CHANGE!

const RoutesList = () => {
  return (
    <Routes>
        {
          tmp
          ?
          publicRoutes.map(route => <Route element={<route.page/>} path={route.path} key={route.path}/>)
          :
          privateRoutes.map(route => <Route element={<route.page/>} path={route.path} key={route.path}/>)
        }
    </Routes>
  )
}

export default RoutesList