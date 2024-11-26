import React, { useContext } from 'react'
import {Context} from '../context/contextProvider'

const Hijo = () => {
    const ejemplo = useContext(Context)
  return (
    <div>
        <h2>Componente Hijo</h2>
        <h3>
            Este mensaje lo envio el context: {ejemplo.saludo}
        </h3>

        <button onClick={() => ejemplo.setSaludo('Este mensaje lo cambio el hijo')}>
            Click cambiar mensaje
        </button>
    </div>
  )
}

export default Hijo