import './styles/styles.scss'
import Header from './components/Header/Header'
import { BrowserRouter } from 'react-router-dom'
import RoutesList from './components/RoutesList'
import Footer from './components/Footer/Footer'

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
