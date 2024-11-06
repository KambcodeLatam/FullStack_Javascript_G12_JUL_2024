import { useEffect, useState } from 'react'
import './App.css'
import Detail from './components/detail/detail'
import Image from './components/image/image'
import Title from './components/title/title'

function App() {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [titleName, setTitleName] = useState('')
  const [urlImage, setUrlImage] = useState('')
  const [genre, setGenre] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState('')

  useEffect(() => {
  const url = 'https://randomuser.me/api/'
  fetch(url)
  .then((res) => res.json())
  .then((item) => {
    setFirstName(item.results[0].name.first)
    setLastName(item.results[0].name.last)
    setTitleName(item.results[0].name.title)
    setUrlImage(item.results[0].picture.large)
    setGenre(item.results[0].gender)
    setEmail(item.results[0].email)
    setLocation(item.results[0].location.city)
  })
  },[])
  
  return (
    <div>
       
      <Image url={urlImage}/>
      <Title primerNombre={firstName} segundoNombre={lastName} title={titleName}/>
      <Detail genero={genre} email={email} locacion={location}/>
    </div>
  )
}

export default App
