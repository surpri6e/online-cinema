import React from 'react'
import './styles/styles.scss'
import Header from './components/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesList from './components/RoutesList'
import Footer from './components/Footer'

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <div className="content">
        <RoutesList/>
      </div>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
