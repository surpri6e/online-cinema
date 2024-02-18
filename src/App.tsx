import './styles/styles.scss'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesList from './components/RoutesList'
import Footer from './components/Footer/Footer'
import { useState } from 'react'
import { IsSearchingContext } from './context/isSearchingContext'

function App() {
  const [isSearching, setIsSearching] = useState(false);

  return (
    <IsSearchingContext.Provider value={{isSearching, setIsSearching}}>
      <BrowserRouter>
        <Header/>
        <div className="content">
          <RoutesList/>
        </div>
        <Footer/>
      </BrowserRouter>
    </IsSearchingContext.Provider>
  )
}

export default App
