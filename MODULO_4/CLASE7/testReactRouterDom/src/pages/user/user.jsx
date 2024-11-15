import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const User = () => {

    const param = useParams();
    const id = param.id
    const [name, setName] = useState('')

    console.log(param, 'param');

    useEffect(() => {
      
    fetch('https://rickandmortyapi.com/api/character/' + id)
    .then((res) => res.json())
    .then((data) => {
        console.log(data);
        setName(data.name)
    })
      
    }, [])
    
    

  return (
    <div>
        <h1>
           componente param
        </h1>
        <h2>
            El nombre del personaje es: {name}
        </h2>
    </div>
  )
}

export default User