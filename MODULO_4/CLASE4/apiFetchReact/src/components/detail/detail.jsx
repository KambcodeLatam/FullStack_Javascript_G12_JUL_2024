import React from 'react'

const Detail = ({genero, email, locacion}) => {
    
    
  return (
    <div>
        <h2>
            Datos del Usuario
        </h2>
        <p>
            {genero}
            <br />
            {email}
            <br />
            {locacion}   
        </p>
    </div>
  )
}

export default Detail