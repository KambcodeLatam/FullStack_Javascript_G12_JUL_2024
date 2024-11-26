import React from 'react'
import Hijo from '../hijo/hijo'

const Padre = () => {
  return (
    <div>
        <h2>Componente Padre</h2>
        No hay ningun saludo
        <h1>-----------------------</h1>
        <Hijo />
    </div>
  )
}

export default Padre