import React, { useState } from 'react'

export const Context = React.createContext({}); 

const ContextProvider = ({children}) => {

  const [saludo, setSaludo] = useState('Hola Soy el contextProvider')
  
  return (
    <Context.Provider value={{saludo, setSaludo}}>
      {children}
    </Context.Provider>
  )
}

export default ContextProvider