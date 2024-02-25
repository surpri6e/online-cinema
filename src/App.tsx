import './styles/styles.scss'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesList from './components/RoutesList'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import { IsSearchingContext } from './context/isSearchingContext'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth } from './main'
import { IsAuthContext } from './context/IsAuth'


function App() {
  const [isSearching, setIsSearching] = useState(false);
  const [user, loading, error] = useAuthState(auth);

  return (
    <IsAuthContext.Provider value={{user, loading, error}}>
      <IsSearchingContext.Provider value={{isSearching, setIsSearching}}>
        <BrowserRouter>
          <Header/>
          <div className="content">
            <RoutesList/>
          </div>
          <Footer/>
        </BrowserRouter>
      </IsSearchingContext.Provider>
    </IsAuthContext.Provider>
  )
}

export default App
