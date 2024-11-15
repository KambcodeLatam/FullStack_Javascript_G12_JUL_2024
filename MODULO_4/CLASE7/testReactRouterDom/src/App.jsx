import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/home/home'
import About from './pages/about/about'
import Navbar from './components/navbar/navbar'
import NotFount from './pages/notFound/notFount'
import User from './pages/user/user'

function App() {

  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/about' element={<About/>}></Route>
          <Route path='/user/:id' element={<User/>}></Route>
          <Route path='/*' element={<NotFount/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
