import React, { useEffect } from 'react'

const Comprador = (props) => {

    console.log(props,'props comprador');
    
    const pedido = 'Hola necesito, un acetaminofen'
    
    useEffect(() => {
        props.setOrden(pedido)
      }, [])

  return (
    <div>
        <h1>Componente Comprador "HIJO"</h1>
        <h3>Muchas Gracias Recibi el "{props.medicamento}"</h3>
    </div>
  )
}

export default Comprador