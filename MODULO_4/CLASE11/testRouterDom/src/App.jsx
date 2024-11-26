
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/home'
import About from './components/about/about'
import NotFound from './components/notFound/notFound'
import Navbar from './components/navbar/navbar'
import Personajes from './components/personajes/personajes'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/personajes' element={<Personajes />} />
          <Route path='/*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
