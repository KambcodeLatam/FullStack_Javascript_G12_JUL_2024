import { useEffect, useState } from 'react';
import './App.css'
import CharacterCard from './components/characterCard/characterCard'

function App() {

  const [data, setData] = useState([]);
    
    useEffect(() => {

      const url = 'https://rickandmortyapi.com/api/character'

      fetch(url)
      .then(res => res.json())
      .then((data) => {
        console.log(data,'data servicio rick')
        setData(data.results)
      })
    }, [])

  return (
    <div>
      <h1>Componente APP</h1>
      {
            data.map((item) => {
                console.log(item,'item <-0----asd-asd-a-sd-asd-a-sd-');
                return <CharacterCard key={item.id} image={item.image} name={item.name} gender={item.gender}/>   
            })
        }

      
    </div>
  )
}

export default App
