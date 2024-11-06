import React from 'react'

const Title = ({title, primerNombre, segundoNombre}) => {
    
  return (
    <div>
        <h2>
            Primer Nombre: {title} {primerNombre} {segundoNombre}
        </h2>
    </div>
  )
}

export default Title