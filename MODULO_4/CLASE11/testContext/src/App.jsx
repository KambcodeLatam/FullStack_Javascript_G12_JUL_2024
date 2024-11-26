import './App.css'
import ContextProvider from './context/contextProvider'

import Padre from './padre/padre'

function App() {
 

  return (
   <div>
    <ContextProvider>
      <Padre />
    </ContextProvider>
   </div>
  )
}

export default App
