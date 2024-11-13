import React, { useEffect } from 'react'

const Bodega = (props) => {
    
    const Acetam = 'Acetaminofen'
    const Ibupro = 'Ibuprofeno'
    
    useEffect(() => {
      props.setMedicamento(Acetam)

    }, [])
    
    
  return (
    <div>
        
        <h1>Componente Bodega "HIJO"</h1>
         <h2>{ Ibupro}</h2>
    </div>
  )
}

export default Bodega